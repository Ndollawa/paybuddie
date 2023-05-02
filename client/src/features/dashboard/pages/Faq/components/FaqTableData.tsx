import React,{useState,useEffect,useMemo} from 'react'
import Swal from 'sweetalert2'
import { useGetFaqsQuery, useDeleteFaqMutation } from '../faqApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'
import useLocalStorage from '../../../../../app/utils/hooks/useLocalStorage'
import EditFaqModal from './EditFaqModal'
import ViewModal from './ViewModal'
import { setPreloader } from '../../../components/PreloaderSlice'
import { useDispatch } from 'react-redux'
import $ from 'jquery'
import { faqProps } from '../../../../../app/utils/props/faqProps'
import initDataTables, { destroyDataTables } from '../../../../../app/utils/initDataTables'

interface modalDataProps {
    data:{
        id:string | number;
        question: string;
        response: string;
        status: string;
    } | null,
    showModal:boolean,
}

const FaqTableData = () => {
    const dispatch = useDispatch()
  const [modalData,setModalData] = useState<modalDataProps>({
   data:null, 
   showModal:false,
  })
  const [viewData,setViewData] = useState<modalDataProps>({
   data:null, 
   showModal:false,
  })
const {
    data: faqs,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetFaqsQuery('faqList', {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
})

useEffect(() => {

  destroyDataTables($('#dataTable'))
    initDataTables($('#dataTable'),"FAQs")
  return () => {
   destroyDataTables($('#dataTable'))
  }
}, [faqs])

const showEditForm  = useMemo(()=> { return(faqData:modalDataProps)=>{
setModalData(faqData);
}},[])
const showDetails  = useMemo(()=>{ return (faqData:modalDataProps)=>{
setViewData(faqData);
}},[])
let tableContent;
useEffect(() => {
dispatch(setPreloader(isLoading? true : false)) 
}, [isLoading,dispatch])


if (isError) {
    // content = <p className="errmsg">{error?.data?.message}</p>
}

    const [deleteFaq, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }]:any = useDeleteFaqMutation()
    const onDeleteFaq = async (id:string) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn m-2  btn-sm btn-success',
              cancelButton: 'btn m-2  btn-sm btn-danger'
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
                  await deleteFaq({ _id: id })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'FAQ has been Updated.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your entry is safe :)',
                'error'
              )
            }
          })
      
    }
//  console.log(faq)
if (isSuccess && !isLoading) {
   let index = 0;
   const {entities} = faqs
   tableContent = Object.values(entities)?.length
        ? Object.values(entities)?.map((faqId:any) =>{
        const created = new Date(faqId.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' ,year:'numeric'})

        let faqStatus
    switch (faqId.status) {
    case 'active':
        faqStatus =<span className="badge badge-success">{faqId.status}</span>
        break;
    case 'inactive':
        faqStatus =<span className="badge badge-warning">{faqId.status}</span>
        break;
   
    default:
        faqStatus = ""
        break;
}
    return (
            <tr key={faqId._id}>
                    <td>{++index}</td>
                    <td>{faqId.question}</td>
                    <td dangerouslySetInnerHTML={{__html: faqId.response}} ></td>
                    <td align="center">{faqStatus}</td>
                    <td>{created}</td>
                    <td>
                        <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"   onClick={()=>{showEditForm({
        data:{
        id:faqId._id,
        question:faqId.question,
        response:faqId.response,
        status:faqId.status

        },
        showModal:true
    });}}><i className="fas fa-pencil-alt"></i></button>
                            <button type="button" className="btn btn-success shadow btn-xs sharp me-1"   onClick={()=>{showDetails({
        data:{
        id:faqId._id,
        question:faqId.question,
        response:faqId.response,
        status:faqId.status

        },
        showModal:true
    });}}><i className="fas fa-eye"></i></button>
                            <button className="btn btn-danger shadow btn-xs sharp" onClick={()=>onDeleteFaq(faqId)}><i className="fa fa-trash"></i></button>
                        </div>												
                    </td>												
                </tr>
        ) })
        : null
    
 }

  return (
    <>
    <EditFaqModal modalData={modalData} />
    <ViewModal viewData={viewData}  />
    <div className="mt-5 table-responsive table-scrollable" >
    <table id="dataTable" className="table mt-10 table-bordered table-hover table-responsive table-striped table-checkable order-column valign-middle border mb-0 align-items-centerid" style={{minWidth: '845px'}}>
        <thead>
            <tr>
                <th>S/N</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>   
           {tableContent}
        </tbody>
    </table>
</div>
</>
  )

}

export default React.memo(FaqTableData)