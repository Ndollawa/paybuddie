import React from 'react'

const SiteImage = () => {
  return (
    <div className="card">
    <div className="card-header">
      <h4 className="card-title">Site Images</h4>
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

                  <label><strong>Privacy and Policy</strong></label>
               
              </div>
              <div className="card-footer">
                  <button type="submit" className="btn btn-primary btn-sm">Save</button>
                </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SiteImage