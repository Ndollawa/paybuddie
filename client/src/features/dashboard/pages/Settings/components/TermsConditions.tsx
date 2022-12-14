import React from 'react'
import Tinymce from '../../../../../app/utils/Tinymce'

const TermsCondition = () => {
  return (
    <div className="card">
    <div className="card-header">
      <h4 className="card-title">About Us</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form>
          <div className='row'>
             <div className="input-group mb-3 col-md-5">
                      <div className="form-file">
                          <input type="file" className="form-file-input form-control"/>
                      </div>
											<span className="input-group-text">Upload</span>
               </div>
              <div className="col-md-12">

                  <label><strong>About Us</strong></label>
               
                  <Tinymce/>
              </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TermsCondition;