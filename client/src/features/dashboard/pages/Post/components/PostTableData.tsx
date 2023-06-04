import React from 'react'
import {useGetPostsQuery,useDeletePostMutation } from '../postApiSlice'
import { useGetPostCategoryQuery } from '../../PostCategory/postCategoryApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'
import Swal from 'sweetalert2'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
// import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import postProps from '../../../../../app/utils/props/postProps'
// import 'lightgallery/css/lg-thumbnail.css'

interface modalDataProps {
    modalData:{
       data:postProps | null,
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
    const onDeletePost = async (id:string) => {
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
        await deletePost({ _id:id })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Post record has been deleted.',
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
const { category } = useGetPostCategoryQuery("categoriesList", {
  selectFromResult: ({ data }) => ({
      category: data?.entities[post?.category]
  }),
})

    if (post) {
        const created = new Date(post.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
    
    const postData = {
        data:{
        _id:postId,
        title:post.title,
        description:post.description,
        coverImage:post.coverImage,
        body:post.body,
        tags:post.tags,
        category:post.category,
        status:post.status

        },
        showModal:true
    }
 const categoryTitle = category? category.title :null
    let postStatus
    switch (post.status) {
    case 'published':
        postStatus =<span className="badge badge-success">{post.status}</span>
        break;
    case 'draft':
        postStatus =<span className="badge badge-warning">{post.status}</span>
        break;
   
    default:
        postStatus = ""
        break;
}
        return (
            <tr key={postId}>
                    <td>{++index}</td>
  <td><LightGallery plugins={[lgZoom]} > <a href={process.env.REACT_APP_BASE_URL+"/uploads/posts/"+post?.coverImage}  data-lightbox={`image-${++index}`} data-exthumbimage={process.env.REACT_APP_BASE_URL+"/uploads/posts/"+post?.coverImage} data-src={process.env.REACT_APP_BASE_URL+"/uploads/posts/"+post?.coverImage} data-title={post?.title}>
                        <img src={process.env.REACT_APP_BASE_URL+"/uploads/posts/"+post?.coverImage} alt={post.title} width="120" className="lg img-fluid img-responsive" />
                        </a></LightGallery></td>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td>{categoryTitle}</td>
                    <td dangerouslySetInnerHTML={{__html:post.body.length >50? post.body.substr(0,50)+"..." :post.body}}></td>
                    <td>{postStatus}</td>
                    <td>{created}</td>
                    <td>
                    <div className="d-flex">
                            <button type="button" className="btn btn-info light shadow btn-xs sharp me-1"   onClick={()=>showEditForm(postData)}><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn btn-danger light shadow btn-xs sharp" onClick={()=>onDeletePost(post._id)}><i className="fa fa-trash"></i></button>
                        </div>													
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default React.memo(PostTableData)