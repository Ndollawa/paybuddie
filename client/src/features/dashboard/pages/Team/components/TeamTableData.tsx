import React from 'react'
import {useGetTeamsQuery,useDeleteTeamMutation } from '../teamApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'


interface modalDataProps {
    modalData:{
       data:{
          id:string | number;
          title: string;
          description: string;
          body: string;
          teamImage: string;
          status: string;
      } | null,
      showModal:boolean,
    } 
    }
const TeamTableData = ({teamId,index,showEditForm}:any) => {
    const { team } = useGetTeamsQuery("teamsList", {
        selectFromResult: ({ data }) => ({
            team: data?.entities[teamId]
        }),
    })


    const [deleteTeam, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }]:any = useDeleteTeamMutation()
    const onDeleteTeam = async () => {
        await deleteTeam({ _id: teamId })
        if(isDelSuccess)showToast('success', 'TEAM Updated successfully')
        if(isDelError) showToast('error',JSON.stringify(delerror?.data))
    }
// 
    const teamData = {
        data:{
        id:teamId,
        title:team.title,
        description:team.description,
        teamImage:team.teamImage,
        body:team.body,
        status:team.status

        },
        showModal:true
    }
    if (team) {
        const created = new Date(team.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
    
    
        return (
            <tr key={teamId}>
                    <td>{++index}</td>
                    <td><img src={process.env.REACT_APP_BASE_URL+"uploads/team"+team.teamImage} alt="" /></td>
                    <td>{team.title}</td>
                    <td>{team.description}</td>
                    <td>{team.body}</td>
                    <td>{team.status}</td>
                    <td>{created}</td>
                    <td>
                    <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"   onClick={()=>showEditForm(teamData)}><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn btn-danger shadow btn-xs sharp" onClick={onDeleteTeam}><i className="fa fa-trash"></i></button>
                        </div>													
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default React.memo(TeamTableData)