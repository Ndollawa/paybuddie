import React from 'react'
import {useGetRoomsQuery,useDeleteRoomMutation } from '../roomsApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'
import Swal from 'sweetalert2'
import roomProps from '../../../../../app/utils/props/roomProps'

interface modalDataProps {
    modalData:{
       data:roomProps | null,
      showModal:boolean,
    } 
    }
const RoomTableData = ({roomId,index,showEditForm}:any) => {
    const { room } = useGetRoomsQuery("roomsList", {
        selectFromResult: ({ data }) => ({
            room: data?.entities[roomId]
        }),
    })


    const [deleteRoom, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }]:any = useDeleteRoomMutation()
    const onDeleteRoom = async (id:string) => {
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
              await deleteRoom({ _id:id })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Room has been deleted.',
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

    if (room) {
        const created = new Date(room.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
        const roomData = {
        data:{
        id:roomId,
        title:room.title,
        description:room.description,
        image:room.image,
        status:room.status

        },
        showModal:true
    }
    let roomStatus
    switch (room.status) {
    case 'active':
        roomStatus =<span className="badge badge-success">{room.status}</span>
        break;
    case 'inactive':
        roomStatus =<span className="badge badge-warning">{room.status}</span>
        break;
   
    default:
        roomStatus = ""
        break;
}
        return (
            <tr key={roomId}>
                    <td>{++index}</td>
                    <td><img src={process.env.REACT_APP_BASE_URL+"/uploads/room/"+room.image} alt="" width="40" /></td>
                    <td>{room.title}</td>
                    <td>{room.description}</td>
                    <td>{roomStatus}</td>
                    <td><i className="fa fa-users"></i>&ensp; ({room.members.length})</td>
                    <td>{created}</td>
                    <td>
                    <div className="d-flex">
                            <button type="button" className="btn btn-info light shadow btn-xs sharp me-1"   onClick={()=>showEditForm(roomData)}><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn btn-danger light shadow btn-xs sharp" onClick={()=>onDeleteRoom(room._id)}><i className="fa fa-trash"></i></button>
                        </div>													
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default React.memo(RoomTableData)