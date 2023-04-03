import React from 'react'
import {useGetPostCategoryQuery,useDeletePostCategoryMutation } from '../postCategoryApiSlice'
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
const PostCategoryTableData = ({categoryId,index,showEditForm}:any) => {
    const { category } = useGetPostCategoryQuery("categorysList", {
        selectFromResult: ({ data }) => ({
            category: data?.entities[categoryId]
        }),
    })


    const [deleteCategory, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }]:any = useDeletePostCategoryMutation()
    const onDeleteCategory = async () => {
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
                await deleteCategory({ _id: categoryId })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Category has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Operation aborted, entry is safe :)',
                'error'
              )
            }
          })
      
    }
// 
    const categoryData = {
        data:{
        id:categoryId,
        title:category.title,
        description:category.description,
        categoryImage:category.categoryImage,
        body:category.body,
        status:category.status

        },
        showModal:true
    }
    if (category) {
        const created = new Date(category.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
    
    
        return (
            <tr key={categoryId}>
                    <td>{++index}</td>
                    <td><img src={process.env.REACT_APP_BASE_URL+"uploads/category"+category.categoryImage} alt="" /></td>
                    <td>{category.title}</td>
                    <td>{category.description}</td>
                    <td>{category.body}</td>
                    <td>{category.status}</td>
                    <td>{created}</td>
                    <td>
                    <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"   onClick={()=>showEditForm(categoryData)}><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn btn-danger shadow btn-xs sharp" onClick={onDeleteCategory}><i className="fa fa-trash"></i></button>
                        </div>													
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default React.memo(PostCategoryTableData)