import React from 'react'
import MainBody from '../../components/MainBody'
import CreateFaqModal from './components/CreateFaqModal'
import EditFaqModal from './components/EditFaqModal'
import { useSelector } from 'react-redux'
import { useGetFaqsQuery, selectFaqById } from './faqApiSlice'
import pageProps from '../../../../app/utils/props/pageProps'
import FaqTableData from './components/FaqTableData'


const Faq = ({pageData}:pageProps)  => {
 
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

let content

if (isLoading) content = <p>Loading...</p>

if (isError) {
    // content = <p className="errmsg">{error?.data?.message}</p>
}

if (isSuccess) {
    const { ids } = faqs

    const tableContent = ids?.length
        ? ids.map((faqId:string|number ,i:number) => <FaqTableData key={faqId} faqId={faqId} />
    )
        : null
      content= (<div className="table-responsive">
                                    <table id="example5" className="display" style={{minWidth: '845px'}}>
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
                                </div>)
}

 return (
    <>
    <MainBody>
    <div className="container-fluid">
            <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">All FAQs</h4>
                            </div>
                            <div className="card-body">

                                <div className="mb-5 d-flex">
                                
                    <CreateFaqModal/>
                                </div>
                        {/* {content} */}
                            </div>
                        </div>
                </div>
            </div>
    </MainBody>
    </>
  )
}

export default React.memo(Faq)