import React from 'react'
import Tinymce from '../../../../../app/utils/Tinymce'

const TermsCondition = () => {
  return (
    <div className="card">
    <div className="card-header">
      <h4 className="card-title">Terms and Conditions</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form>
          <div className='row'>
            
              <div className="col-md-12">

                  {/* <label><strong>Terms and Conditions</strong></label> */}
               
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