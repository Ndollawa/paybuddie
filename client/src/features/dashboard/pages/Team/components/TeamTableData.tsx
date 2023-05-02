import React from 'react'
import {useGetTeamsQuery,useDeleteTeamMutation } from '../teamApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'
import Swal from 'sweetalert2'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
// import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
// import 'lightgallery/css/lg-thumbnail.css'


interface modalDataProps {
    modalData:{
       data:{
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        username: string;
        phone: string;
        userImage: string;
        status: string;
        bio: string;
        socialMedia:{
        facebookHandle: string;
        twitterHandle: string;
        instagram: string;
        whatsapp: string;
        }
        position: string;
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
    const onDeleteTeam = async (id:string) => {
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
        await deleteTeam({ _id: id })
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
        _id:teamId,
        firstName: team.firstName,
        lastName: team.lastName,
        email: team.email,
        username: team.username,
        phone: team.phone,
        userImage: team.userImage,
        status: team.status,
        bio: team.bio,
        facebookHandle: team?.socialMedia?.facebookHandle,
        twitterHandle: team?.socialMedia?.twitterHnadle,
        instagram: team?.socialMedia?.instagram,
        whatsapp: team?.socialMedia?.whatsapp,
        position: team.position,
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
  <td><LightGallery plugins={[lgZoom]} > <a href={process.env.REACT_APP_BASE_URL+"/uploads/team/"+team?.userImage}  data-lightbox={`image-${++index}`} data-exthumbimage={process.env.REACT_APP_BASE_URL+"/uploads/team/"+team?.userImage} data-src={process.env.REACT_APP_BASE_URL+"/uploads/team/"+team?.userImage} data-title={team?.firstName+" "+team?.lastName}>
                        <img src={process.env.REACT_APP_BASE_URL+"/uploads/team/"+team?.userImage} alt={team.firstName+" "+team.lastName} width="120" className="lg img-fluid img-responsive" />
                        </a></LightGallery></td>
                    <td>{team?.firstName+" "+team?.lastName}</td>
                    <td>{team?.position}</td>
                    <td>{team?.bio}</td>
                    {/* <td>{team?.state}</td> */}
                    <td>{teamStatus}</td>
                    <td>{created}</td>
                    <td>
                    <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"   onClick={()=>showEditForm(teamData)}><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn btn-danger shadow btn-xs sharp" onClick={()=>onDeleteTeam(team._id)}><i className="fa fa-trash"></i></button>
                        </div>													
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default React.memo(TeamTableData)