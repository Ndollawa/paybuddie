import React from 'react'
import { selectFaqById,useGetFaqsQuery } from '../faqApiSlice'
import EditFaqModal from './EditFaqModal'

const FaqTableData = ({faqId}:any) => {
    const { faq } = useGetFaqsQuery("faqsList", {
        selectFromResult: ({ data }) => ({
            faq: data?.entities[faqId]
        }),
    })
    if (faq) {
        const created = new Date(faq.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })
    
        const updated = new Date(faq.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })
    
        const handleEdit = (id:string) => <EditFaqModal _id={id} />
    
        return (
            <tr key={faqId}>
                    <td></td>
                    <td>{faq.question}</td>
                    <td>{faq.response}</td>
                    <td>{faq.status}</td>
                    <td>{created}</td>
                    <td>
                        <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"  data-bs-toggle="modal" data-bs-target=".edifaq-modal" onClick={()=>handleEdit(faq._id)}><i className="fas fa-pencil-alt"></i></button>
                            <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
                        </div>												
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default React.memo(FaqTableData)