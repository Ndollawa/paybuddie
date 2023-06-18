import CommentModel from '../../Models/Comment'
// import UserModel from '../../Models/User'
import {Request, Response} from 'express'
import BaseController from './BaseController'

 type replyProps ={ 
    author: string; 
    authorType: "guest" | "user"; 
    email: string; 
    subject: string; 
    phone: string; 
    status: "active" | "disabled" | "deactivated" | "deleted"; 
    comment: string; 
    createdAt?: Date; 
    updatedAt?: Date; 
    firstName?: string | undefined; 
    lastName?: string | undefined; 
    fullName?: string | undefined; }


class CommentController extends BaseController {
    constructor(){
        super(CommentModel)   

   }

// @desc Get all notes 
// @route GET /notes
// @access public
 public selectAll = async (req:Request, res:Response) => {
    // Get all notes from MongoDB
    const comment = await CommentModel.find().lean()

    // If no notes 
    if (!comment?.length) {
        return res.status(400).json({ message: 'No Comments found.' })
    }

    res.json(comment)
}

// @desc Create new post
// @route POST /post
// @access authorized user
 public create = async (req:Request, res:Response) => {
    const {author, comment, fullName, authorType, subject, phone, email,postId } = req.body
    // Confirm data
    if (!authorType || !comment || !fullName || !subject ||  !email|| !postId ) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const name = fullName.split(' ');
    const firstName  = name[0]
    const lastName  = name[1]
    // Create and store the new user 
    const newComment = await CommentModel.create({author, comment, firstName, lastName,authorType, subject, phone, email,postId})

    if (newComment) { // Created 
        return res.status(201).json({ message: 'New comment created' })
    } else {
        return res.status(400).json({ message: 'Invalid comment data received' })
    }

}

// @desc Update a post comment
// @route PATCH /post
// @access authorized user
public update = async (req:Request, res:Response) => {
    const {author, comment, fullName, subject, authorType, phone, email,postId ,_id } = req.body
    // Confirm data
    if (!authorType || !comment || !fullName || !subject ||  !email|| !postId ) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    // Confirm comment exists to update
    const newComment = await CommentModel.findById({_id}).exec()

    if (!newComment) {
        return res.status(400).json({ message: 'comment not found' })
    }

    const name = fullName.split(' ');
    const firstName  = name[0]
    const lastName  = name[1]
    newComment.author = author
    newComment.authorType = authorType
    newComment.email = email
    newComment.firstName = firstName
    newComment.lastName = lastName
    newComment.phone = phone
    newComment.comment = comment
    newComment.subject = subject

    const updatedComment = await newComment.save()

    res.json({status:'success'})
}

// @desc Delete a post comment
// @route DELETE /post
// @access authorized user
public delete = async (req:Request, res:Response) => {
    const { _id } = req.body

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Comment ID required' })
    }

    // Confirm comment exists to delete 
    const comment = await CommentModel.findById(_id).exec()

    if (!comment) {
        return res.status(400).json({ message: 'comment not found' })
    }

    const result = await CommentModel.deleteOne({_id})

    res.status(200).json({message:"success"})
}

// @desc Create new Comment Reply
// @route POST /post
// @access authorized user
 public createReply = async (req:Request, res:Response) => {
    const {author, comment, fullName, authorType, subject, phone, email,commentId } = req.body
console.log(req.body)
    // Confirm data
    if (!authorType || !comment || !fullName || !subject ||  !email|| !commentId ) {
        return res.status(400).json({ message: 'All fields are required' })
    }


    const name = fullName.split(' ');
    const firstName  = name[0]
    const lastName  = name[1]
    // Create and store the new user 
    const newReply ={author, comment, firstName, lastName,authorType, subject, phone, email}
    const newComment = await CommentModel.updateOne(
        { _id: commentId }, // Specify the document to update based on the _id
       {$push: {
            reply: {...newReply}}} 
      )

    if (newComment) { // Created 
        return res.status(201).json({ message: 'success' })
    } else {
        return res.status(400).json({ message: 'Invalid comment reply data received' })
    }

}

// @desc Update a Comment Reply
// @route PATCH /post
// @access authorized user
public updateReply = async (req:Request, res:Response) => {
    const {author, comment, fullName, subject, authorType, phone, email,replyId ,_id } = req.body
    // Confirm data
    if (!authorType || !comment || !fullName || !subject ||  !email|| !replyId ) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    // Confirm comment exists to update   'nestedArray.$.field1': 'New Value',
    const name = fullName.split(' ');
    const firstName  = name[0]
    const lastName  = name[1]
    const newReply = { author,authorType,email,firstName,lastName,phone,comment,subject }
    const filter = { _id, 'reply._id': replyId };
    const update = {
      $set: {newReply }
    };


    const updatedComment = await CommentModel.updateOne(filter,update)

    res.json({status:'success'})
}

// @desc Delete a Comment Reply
// @route DELETE /post
// @access authorized user
public deleteReply = async (req:Request, res:Response) => {
    const { _id,replyId } = req.body

    // Confirm data
    if (!_id || ! replyId) {
        return res.status(400).json({ message: 'Comment ID required' })
    }
    const filter = {_id};
    const update = {
      $pull: {_id:replyId }
    };

    const updatedComment = await CommentModel.updateOne(filter,update)


    res.status(200).json({message:"success"})
}

}

export default new CommentController();