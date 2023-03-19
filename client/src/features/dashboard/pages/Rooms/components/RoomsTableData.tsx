import React from 'react'
import {useGetRoomsQuery,useDeleteRoomMutation } from '../roomApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'


interface modalDataProps {
    modalData:{
       data:{
          id:string | number;
          title: string;
          description: string;
          roomImage: string;
          status: string;
      } | null,
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
    const onDeleteRoom = async () => {
        await deleteRoom({ _id: roomId })
        if(isDelSuccess)showToast('success', 'ROOM Updated successfully')
        if(isDelError) showToast('error',JSON.stringify(delerror?.data))
    }
// 
    const roomData = {
        data:{
        id:roomId,
        title:room.title,
        description:room.description,
        roomImage:room.roomImage,
        status:room.status

        },
        showModal:true
    }
    if (room) {
        const created = new Date(room.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
    
    
        return (
            <tr key={roomId}>
                    <td>{++index}</td>
                    <td><img src={process.env.REACT_APP_BASE_URL+"uploads/room"+room.roomImage} alt="" /></td>
                    <td>{room.title}</td>
                    <td>{room.description}</td>
                    <td>{room.status}</td>
                    <td>{room.member.len}</td>
                    <td>{created}</td>
                    <td>
                    <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"   onClick={()=>showEditForm(roomData)}><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn btn-danger shadow btn-xs sharp" onClick={onDeleteRoom}><i className="fa fa-trash"></i></button>
                        </div>													
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default React.memo(RoomTableData)