import React from 'react'
import {useGetTeamsQuery,useDeleteTeamMutation } from '../teamApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'
import Swal from 'sweetalert2'

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
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-sm m-2 btn-success',
              cancelButton: 'btn btn-sm m-2 btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then(async(result) => {
            if (result.isConfirmed) {
        await deleteTeam({ _id: teamId })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Team member entry has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Operation aborted, entry is safe  :)',
                'error'
              )
            }
          })
    }
// 
  
    if (team) {
        const created = new Date(team.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
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
    let teamStatus
    switch (team.status) {
    case 'active':
        teamStatus =<span className="badge badge-success">{team.status}</span>
        break;
    case 'inactive':
        teamStatus =<span className="badge badge-warning">{team.status}</span>
        break;
   
    default:
        teamStatus = ""
        break;
}
        return (
            <tr key={teamId}>
                    <td>{++index}</td>
                    <td><img src={process.env.REACT_APP_BASE_URL+"uploads/team"+team.teamImage} alt="" /></td>
                    <td>{team.title}</td>
                    <td>{team.description}</td>
                    <td>{team.body}</td>
                    <td>{teamStatus}</td>
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