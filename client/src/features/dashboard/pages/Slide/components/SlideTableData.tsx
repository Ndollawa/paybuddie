import React, { useState } from 'react'
import {useGetSlidesQuery,useDeleteSlideMutation } from '../slideApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'


interface modalDataProps {
    modalData:{
       data:{
          id:string | number;
          title: string;
          description: string;
          body: string;
          slideImage: string;
          status: string;
      } | null,
      showModal:boolean,
    } 
    }
const SlideTableData = ({slideId,index,showEditForm}:any) => {
    const { slide } = useGetSlidesQuery("slidesList", {
        selectFromResult: ({ data }) => ({
            slide: data?.entities[slideId]
        }),
    })
const [slideInfo, setSlideInfo] = useState(slide)

    const [deleteSlide, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }]:any = useDeleteSlideMutation()
    const onDeleteSlide = async () => {
        await deleteSlide({ _id: slideId })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
        showToast('success', 'SLIDE Updated successfully')
    }
// 
  
    if (slideInfo.length) {
        const created = new Date(slideInfo.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
      const slideData = {
        data:{
        id:slideInfo._id,
        title:slideInfo.title,
        description:slideInfo.description,
        slideInfoImage:slideInfo.slideInfoImage,
        body:slideInfo.body,
        status:slideInfo.status

        },
        showModal:true
    }
    
        return (
            <tr key={slideId}>
                    <td>{++index}</td>
                    <td><div><img src={process.env.REACT_APP_BASE_URL+"uploads/slide"+slide.slideImage} alt="" /></div></td>
                    <td>{slideInfo.title}</td>
                    <td>{slideInfo.description}</td>
                    <td>{slideInfo.body}</td>
                    <td>{slideInfo.status}</td>
                    <td>{created}</td>
                    <td>
                    <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"   onClick={()=>showEditForm(slideData)}><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn btn-danger shadow btn-xs sharp" onClick={onDeleteSlide}><i className="fa fa-trash"></i></button>
                        </div>													
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default React.memo(SlideTableData)