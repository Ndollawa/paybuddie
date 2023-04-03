import React from 'react'
import {useGetPostsQuery,useDeletePostMutation } from '../postApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'
import Swal from 'sweetalert2'

interface modalDataProps {
    modalData:{
       data:{
          id:string | number;
          title: string;
          description: string;
          body: string;
          postImage: string;
          status: string;
      } | null,
      showModal:boolean,
    } 
    }
const PostTableData = ({postId,index,showEditForm}:any) => {
    const { post } = useGetPostsQuery("postsList", {
        selectFromResult: ({ data }) => ({
            post: data?.entities[postId]
        }),
    })


    const [deletePost, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }]:any = useDeletePostMutation()
    const onDeletePost = async () => {
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
        await deletePost({ _id: postId })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Post file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Post entry not deleted :)',
                'error'
              )
            }
          })
    }
// 
    if (post) {
        const created = new Date(post.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
    
    const postData = {
        data:{
        id:postId,
        title:post.title,
        description:post.description,
        postImage:post.postImage,
        body:post.body,
        status:post.status

        },
        showModal:true
    }
    let postStatus
    switch (post.status) {
    case 'active':
        postStatus =<span className="badge badge-success">{post.status}</span>
        break;
    case 'inactive':
        postStatus =<span className="badge badge-warning">{post.status}</span>
        break;
   
    default:
        postStatus = ""
        break;
}
        return (
            <tr key={postId}>
                    <td>{++index}</td>
                    <td><img src={process.env.REACT_APP_BASE_URL+"/uploads/post/"+post.postImage} alt="" width="150" /></td>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td>{post.body}</td>
                    <td>{postStatus}</td>
                    <td>{created}</td>
                    <td>
                    <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"   onClick={()=>showEditForm(postData)}><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn btn-danger shadow btn-xs sharp" onClick={onDeletePost}><i className="fa fa-trash"></i></button>
                        </div>													
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default React.memo(PostTableData)