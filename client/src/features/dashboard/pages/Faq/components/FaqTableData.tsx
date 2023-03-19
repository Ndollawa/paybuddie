import React,{useState,useEffect,useMemo} from 'react'
import { useGetFaqsQuery, useDeleteFaqMutation } from '../faqApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast';
import useLocalStorage from '../../../../../app/utils/hooks/useLocalStorage';
import EditFaqModal from './EditFaqModal'
import ViewModal from './ViewModal'
import { setPreloader } from '../../../components/PreloaderSlice'
import { useDispatch } from 'react-redux'
import $ from 'jquery'
import  'datatables.net'
import { faqProps } from '../../../../../app/utils/props/faqProps';


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
const showEditForm  = useMemo(()=> { return(faqData:modalDataProps)=>{
setModalData(faqData);
console.log(faqData)
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
        await deleteFaq({ _id: id })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
        showToast('success', 'FAQ Updated successfully')
    }
//  console.log(faq)
if (isSuccess && !isLoading) {
   let index = 0;
   const {entities} = faqs
   tableContent = Object.values(entities)?.length
        ? Object.values(entities)?.map((faqId:any) =>{
        const created = new Date(faqId.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' ,year:'numeric'})
    return (
            <tr key={faqId._id}>
                    <td>{++index}</td>
                    <td>{faqId.question}</td>
                    <td>{faqId.response}</td>
                    <td>{faqId.status}</td>
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
    <div className="mt-20 table-responsive table-scrollable" >
    <table id="table" className="table table-bordered table-hover table-checkable order-column valign-middle border mb-0 align-items-centerid" style={{minWidth: '845px'}}>
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