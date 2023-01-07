import React from 'react'
import MainBody from '../../components/MainBody'
import pageProps from '../../../../app/utils/props/pageProps';



const Faq:React.FC<pageProps> = ({pageData}:pageProps)  => {
  return (
    <>
    <MainBody>

    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">All FAQs</h4>
                            </div>
                            <div className="card-body">

                                <div className="mb-5 d-flex">
                                    <button className="btn btn-primary btn-sm">Add Faq</button>
                                </div>
                                <div className="table-responsive">
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
                                            <tr>
                                                <td>1</td>
                                                <td>Tiger Nixon</td>
                                                <td>Architect</td>
                                                <td>Male</td>
                                                <td>2011/04/25</td>
                                                <td>
													<div className="d-flex">
														<a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
														<a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
													</div>												
												</td>												
                                            </tr>
                                           
                                        
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
    </MainBody>
    </>
  )
}

export default Faq