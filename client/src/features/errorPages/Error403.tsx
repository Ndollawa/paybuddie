import React from 'react'
import OtherBody from '../dashboard/components/OtherBody'

const Error403 = () => {
  return (
    <OtherBody>
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-5">
                    <div className="form-input-content text-center error-page">
                        <h1 className="error-text  font-weight-bold">403</h1>
                        <h4><i className="fa fa-times-circle text-danger"></i> Forbidden Error!</h4>
                        <p>You do not have permission to view this resource.</p>
						<div>
                            <button className="btn btn-primary" onClick={()=>window.history.back()}>Click to go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </OtherBody>
  )
}

export default React.memo(Error403)
