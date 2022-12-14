import React from 'react'

const Error503 = () => {
  return (
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-5">
                    <div className="form-input-content text-center error-page">
                        <h1 className="error-text font-weight-bold">503</h1>
                        <h4><i className="fa fa-times-circle text-danger"></i> Service Unavailable</h4>
                        <p>Sorry, we are under maintenance!</p>
						<div>
                            <a className="btn btn-primary" href="/">Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Error503
