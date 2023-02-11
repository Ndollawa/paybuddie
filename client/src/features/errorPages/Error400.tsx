import React from 'react'
import OtherBody from '../dashboard/components/OtherBody'

const Error400 = () => {
  return (
   <OtherBody>
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-5">
                    <div className="form-input-content text-center error-page">
                        <h1 className="error-text font-weight-bold">400</h1>
                        <h4><i className="fa fa-thumbs-down text-danger"></i> Bad Request</h4>
                        <p>Your Request resulted in an error</p>
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

export default React.memo(Error400)
