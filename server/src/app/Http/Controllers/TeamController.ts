import TeamModel from '../../Models/Team'
// import UserModel from '../../Models/User'
import {Request, Response} from 'express'
import BaseController from './BaseController'
import deleteItem from '../../utils/deleteItem'



class TeamController extends BaseController {
    constructor(){
        super(TeamModel)   

   }

// @desc Get all notes 
// @route GET /notes
// @access public
 public selectAll = async (req:Request, res:Response) => {
    // Get all notes from MongoDB
    const team = await TeamModel.find().lean()

    // If no notes 
    if (!team?.length) {
        return res.status(400).json({ message: 'No team found' })
    }

    // Add username to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    // const teamWithUser = await Promise.all(team.map(async (team) => {
    //     const user = await User.findById(TeamModel.user).lean().exec()
    //     return { ...team, username: user.username }
    // }))

    res.json(team)
}

// @desc Create new team
// @route POST /team
// @access authorized user
 public create = async (req:Request, res:Response) => {
    const { email, firstName, lastName, phone, bio, status } = req.body
    const file = req.file!
    console.log(req.body)
    // Confirm data
    if (!email || !firstName || !lastName || !bio || !status || !file) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const userObj = {...req.body,userImage:file.filename}
    // Create and store the new user 
    const team = await TeamModel.create(userObj)

    if (team) { // Created 
        return res.status(201).json({ message: 'New team Memeber created' })
    } else {
        return res.status(400).json({ message: 'Invalid team member data received' })
    }

}

// @desc Update a team
// @route PATCH /team
// @access authorized user
public update = async (req:Request, res:Response) => {
    const { email, firstName, lastName, phone, bio, status ,_id,facebookHandle,twitterHandle,instagram,whatsapp,position} = req.body
    const file = req.file!
    // Confirm data
    console.log(req.body)
    if (!email || !firstName || !lastName || !bio || !status) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    // Confirm team exists to update
    const team = await TeamModel.findById({_id}).exec()

    if (!team) {
        return res.status(400).json({ message: 'Team member not found' })
    }

    team.firstName = firstName
    team.lastName = lastName
    team.email = email
    team.phone = phone
    team.bio = bio
   if(file){
    const destination = '../../../../public/team'
    const oldFile = team.userImage! 
    if(oldFile) deleteItem(destination,oldFile)
    team.userImage = file.filename
   } 
    team.socialMedia!.facebookHandle = facebookHandle
    team.socialMedia!.twitterHandle = twitterHandle
    team.socialMedia!.instagram = instagram
    team.socialMedia!.whatsapp = whatsapp
    team.status = status
    team.position = position
    // team.tags = tags

    const updatedTeam = await team.save()
    res.status(200).json({message:'success'})
}

// @desc Delete a team
// @route DELETE /team
// @access authorized user
public delete = async (req:Request, res:Response) => {
    const { _id } = req.body

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Team ID required' })
    }

    // Confirm team exists to delete 
    const team = await TeamModel.findById(_id).exec()

    if (!team) {
        return res.status(400).json({ message: 'Team member not found' })
    }

    const result = await TeamModel.deleteOne()

    res.status(200).json({message:"success"})
}

}

export default new TeamController();