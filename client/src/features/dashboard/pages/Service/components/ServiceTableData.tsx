import React from 'react'
import {useGetServicesQuery,useDeleteServiceMutation } from '../serviceApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'


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
        await deleteService({ _id: serviceId })
        if(isDelSuccess)showToast('success', 'SERVICE Updated successfully')
        if(isDelError) showToast('error',JSON.stringify(delerror?.data))
    }
// 
    const serviceData = {
        data:{
        id:serviceId,
        title:service.title,
        description:service.description,
        serviceImage:service.serviceImage,
        body:service.body,
        status:service.status

        },
        showModal:true
    }
    if (service) {
        const created = new Date(service.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
    
    
        return (
            <tr key={serviceId}>
                    <td>{++index}</td>
                    <td><img src={process.env.REACT_APP_BASE_URL+"uploads/service"+service.serviceImage} alt="" /></td>
                    <td>{service.title}</td>
                    <td>{service.description}</td>
                    <td>{service.body}</td>
                    <td>{service.status}</td>
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