import React, { useState } from 'react'
import {useGetSlidesQuery,useDeleteSlideMutation } from '../slideApiSlice'
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
          id:string | number;
          title: string;
          description: string;
          body: string;
          image: string;
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

    const [deleteSlide, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }]:any = useDeleteSlideMutation()
    const onDeleteSlide = async () => {
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
        await deleteSlide({ _id: slideId })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Slide  has been deleted.',
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
  
    if (slide) {
        const created = new Date(slide.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
      const slideData = {
        data:{
        id:slide._id,
        title:slide.title,
        description:slide.description,
        image:slide.image,
        body:slide.body,
        status:slide.status

        },
        showModal:true
    }
    let slideStatus;
    switch (slide.status) {
    case 'pending':
        slideStatus =<span className="badge badge-primary">{slide.status}</span>
        break;
    case 'active':
        slideStatus =<span className="badge badge-success">{slide.status}</span>
        break;
    case 'inactive':
        slideStatus =<span className="badge badge-danger">{slide.status}</span>
        break;
    default:
        slideStatus = ""
        break;
}

        return (
            <><tr key={slideId}>
                    <td>{++index}</td>
                    <td>
                    <LightGallery plugins={[lgZoom]} > <a href={process.env.REACT_APP_BASE_URL+"/uploads/slide/"+slide.image}  data-lightbox={`image-${++index}`} data-exthumbimage={process.env.REACT_APP_BASE_URL+"/uploads/slide/"+slide.image} data-src={process.env.REACT_APP_BASE_URL+"/uploads/slide/"+slide.image} data-title={slide.title}>
                        <img src={process.env.REACT_APP_BASE_URL+"/uploads/slide/"+slide.image} alt={slide.title} width="150" /></a></LightGallery></td>
                    <td>{slide.title}</td>
                    <td>{slide.description}</td>
                    <td  dangerouslySetInnerHTML={{__html:slide.body}} ></td>
                    <td align="center">{slideStatus}</td>
                    <td>{created}</td>
                    <td>
                    <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"   onClick={()=>showEditForm(slideData)}><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn btn-danger shadow btn-xs sharp" onClick={onDeleteSlide}><i className="fa fa-trash"></i></button>
                        </div>													
                    </td>												
                </tr></>
        )
    
    } else return null
  
}

export default React.memo(SlideTableData)