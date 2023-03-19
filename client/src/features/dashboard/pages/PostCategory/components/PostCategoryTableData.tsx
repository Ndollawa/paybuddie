import React from 'react'
import {useGetPostCategoryQuery,useDeletePostCategoryMutation } from '../postCategoryApiSlice'
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
        await deleteCategory({ _id: categoryId })
        if(isDelSuccess)showToast('success', 'CATEGORY Updated successfully')
        if(isDelError) showToast('error',JSON.stringify(delerror?.data))
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