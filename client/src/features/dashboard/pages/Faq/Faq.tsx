import React,{useEffect,useState,useMemo} from 'react'
import MainBody from '../../components/MainBody'
import CreateFaqModal from './components/CreateFaqModal'
import FaqTableData from './components/FaqTableData'
import pageProps from '../../../../app/utils/props/pageProps'

// console.log(tableContent)
// console.log(tableContent)
//   useEffect(() => {
//  $('#table').DataTable()
//       return () => {
//        $('#table').DataTable().clear().destroy()
//       };
//     }, [])

const Faq = ({pageData}:pageProps)  => {
 return (
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
                        <FaqTableData/>
               
                            </div>
                        </div>
                </div>
            </div>
    </MainBody>
  )
}

export default React.memo(Faq)