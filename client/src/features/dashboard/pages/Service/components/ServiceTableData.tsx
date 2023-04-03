import React from 'react'
import {useGetServicesQuery,useDeleteServiceMutation } from '../serviceApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
// import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
// import 'lightgallery/css/lg-thumbnail.css'
import $ from 'jquery'
import Swal  from 'sweetalert2'


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
const ServiceTableData = ({serviceId,index,showEditForm}:any) => {
    const { service } = useGetServicesQuery("servicesList", {
        selectFromResult: ({ data }) => ({
            service: data?.entities[serviceId]
        }),
    })


    const [deleteService, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }]:any = useDeleteServiceMutation()
    const onDeleteService = async () => {
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
        await deleteService({ _id: serviceId })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Service has been deleted.',
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

    if (service) {
        const created = new Date(service.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
       const serviceData = {
        data:{
        id:serviceId,
        title:service.title,
        description:service.description,
        serviceImage:service.image,
        body:service.body,
        status:service.status

        },
        showModal:true
    }
    let serviceStatus
    switch (service.status) {
    case 'active':
        serviceStatus =<span className="badge badge-success">{service.status}</span>
        break;
    case 'inactive':
        serviceStatus =<span className="badge badge-warning">{service.status}</span>
        break;
   
    default:
        serviceStatus = ""
        break;
}
        return (
            <tr key={serviceId}>
                    <td>{++index}</td>
                    <td><LightGallery plugins={[lgZoom]} > <a href={process.env.REACT_APP_BASE_URL+"/uploads/service/"+service.image}  data-lightbox={`image-${++index}`} data-exthumbimage={process.env.REACT_APP_BASE_URL+"/uploads/service/"+service.image} data-src={process.env.REACT_APP_BASE_URL+"/uploads/service/"+service.image} data-title={service.title}>
                        <img src={process.env.REACT_APP_BASE_URL+"/uploads/service/"+service.image} alt={service.title} width="120" className="lg img-fluid img-responsive" />
                        </a></LightGallery></td>
                    <td>{service.title}</td>
                    <td>{service.description}</td>
                    <td  dangerouslySetInnerHTML={{__html:service.body}} ></td>
                    <td>{serviceStatus}</td>
                    <td>{created}</td>
                    <td>
                    <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"   onClick={()=>showEditForm(serviceData)}><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn btn-danger shadow btn-xs sharp" onClick={onDeleteService}><i className="fa fa-trash"></i></button>
                        </div>													
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default React.memo(ServiceTableData)