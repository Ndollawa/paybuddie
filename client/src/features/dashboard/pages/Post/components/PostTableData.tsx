import React from 'react'
import {useGetPostsQuery,useDeletePostMutation } from '../postApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'


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
        await deletePost({ _id: postId })
        if(isDelSuccess)showToast('success', 'POST Updated successfully')
        if(isDelError) showToast('error',JSON.stringify(delerror?.data))
    }
// 
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
    if (post) {
        const created = new Date(post.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
    
    
        return (
            <tr key={postId}>
                    <td>{++index}</td>
                    <td><img src={process.env.REACT_APP_BASE_URL+"uploads/post"+post.postImage} alt="" /></td>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td>{post.body}</td>
                    <td>{post.status}</td>
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