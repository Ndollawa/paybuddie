import React,{ChangeEvent} from 'react'
// import useFileUpload from '../../../../../app/utils/hooks/useFileUpload'
import { useUploadFileMutation } from '../settingApiSlice'
import { useSettings } from '../settingsConfigSlice'
import { useSelector } from 'react-redux'
import showToast from '../../../../../app/utils/hooks/showToast'

const SiteImage = () => {
  const settings = useSelector(useSettings)
  const {_id} =settings
// const {uploadFile} = useFileUpload()
  const [uploadFile,{data:res,isSuccess,error}]= useUploadFileMutation()
  const handleFaviconUpload = async(e:ChangeEvent<HTMLInputElement>)=>{
   const files = e.target.files!
   const formData = new FormData()
       formData.append("siteImage", files[0]!)
   formData.append('_id',_id);
  //  
    await uploadFile({data:formData,url:'settings/uploads/favicon'})
if(isSuccess){showToast('success','Favicon Uploaded successfully')}else{showToast('error',`Sorry, couldn't Upload Favicon: ${error}` )}
  }
  const handleDarkLogoUpload = async(e:ChangeEvent<HTMLInputElement>)=>{
   const files = e.target.files!
   const formData = new FormData()
       formData.append("siteImage", files[0]!)
   formData.append('_id',_id);
  //  
     await uploadFile({data:formData,url:'settings/uploads/darklogo'})
     console.log(res)
   if(isSuccess){showToast('success','Dark Logo Uploaded successfully')}else{showToast('error',`Sorry, couldn't Upload Dark Logo: ${error}` )}
  
  }
  const handleLogoUpload = async(e:ChangeEvent<HTMLInputElement>)=>{
   const files = e.target.files!
   const formData = new FormData()
       formData.append("siteImage", files[0]!)
   formData.append('_id',_id);
  //  
    await uploadFile({data:formData,url:'settings/uploads/logo'})
   if(isSuccess){showToast('success','Logo Uploaded successfully')}else{showToast('error',`Sorry, couldn't Upload Logo: ${error}` )}
  
  }
  const handleAboutUsImageUpload = async(e:ChangeEvent<HTMLInputElement>)=>{
   const files = e.target.files!
   const formData = new FormData()
       formData.append("siteImage", files[0]!)
   formData.append('_id',_id);
  //  
    await uploadFile({data:formData,url:'settings/uploads/aboutUsBg'})
if(isSuccess){showToast('success','About us Image Uploaded successfully')}else{showToast('error',`Sorry, couldn't Upload About us Image: ${error}` )}
  }
   const handlePageBackgroundUpload = async(e:ChangeEvent<HTMLInputElement>)=>{
   const files = e.target.files!
   const formData = new FormData()
       formData.append("siteImage", files[0]!)
   formData.append('_id',_id);
  //  
   await uploadFile({data:formData,url:'settings/uploads/pageBg'})
if(isSuccess){showToast('success','Pages Background Image Uploaded successfully')}else{showToast('error',`Sorry, couldn't Upload Pages Background Image: ${error}` )}
  }
  
  const handleBackgroundUpload = async(e:ChangeEvent<HTMLInputElement>)=>{
   const files = e.target.files!
   const formData = new FormData()
       formData.append("siteImage", files[0]!)
   formData.append('_id',_id);
  //  
    await uploadFile({data:formData,url:'settings/uploads/bgImage'})
if(isSuccess){showToast('success','Background Image Uploaded successfully')}else{showToast('error',`Sorry, couldn't Upload Background Image: ${error}` )}
  }
  
 

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Site Images</h4>
      </div>
      <div className="card-body">
        <div className="row align-center">
          <div className="col-md-6">
              <label className="form-label">Favicon</label>
            <div className="input-group mb-3 col-md-5">
                      <div className="form-file">
                          <input  type="file"
                              accept=".jpeg, .jpg, .png, .gif"
                              id="favicon"
                              className="form-file-input form-control"
                              onChange={handleFaviconUpload}
                              />
                      </div>
											<span className="input-group-text">Upload</span>
               </div>
          </div>
          <div className="col-md-6">
            <div id="sitefavicon">
            <div style={{backgroundColor: "#ccc", padding: "10px", border: "2px solid #f68600", borderRadius: "2%"}} className="container">
												<img  className="img-responsive" src="../assets/images/" alt="logo"/></div>
            </div>
          </div>
          <div className="col-md-6">
              <label className="form-label">Dark Logo</label>            
                <div className="input-group mb-3 col-md-5">
                  <div className="form-file">
                    <input type="file"
                      id="darklogo"
                      accept=".jpeg, .jpg, .png, .gif"
                      name="darklogo"
                      className="form-file-input form-control"
                      onChange={handleDarkLogoUpload}
                      />
                  </div>
                    <span className="input-group-text">Upload</span>
                  </div>
          
          </div>
          <div className="col-md-6">
            <div id="sitebrandname_logo"></div>
          </div>
          <div className="col-md-6">  
              <label className="form-label">Logo</label>
          <div className="input-group mb-3 col-md-5">
                      <div className="form-file">
                          <input
                type="file"
                id="logo"
                accept=".jpeg, .jpg, .png, .gif"
                name="logo"
                onChange={handleLogoUpload}
                className="form-file-input form-control"/>
                      </div>
											<span className="input-group-text">Upload</span>
               </div>
          </div>
          <div className="col-md-6">
            <div id="sitelogo"></div>
          </div>
          <div className="col-md-6"> 
              <label className="form-label">About Us Image</label>
          <div className="input-group mb-3 col-md-5">
                      <div className="form-file">
                          <input
                type="file"
                id="loader-up"
                accept=".jpeg, .jpg, .png, .gif,.svg"
                name="loader"
                className="form-file-input form-control"
                onChange={handleAboutUsImageUpload}
                />
                      </div>
											<span className="input-group-text">Upload</span>
               </div>
          </div>
          <div className="col-md-6">
            <div id="about-us"></div>
          </div>
          <div className="col-md-6">   
              <label className="form-label">Pages Background Image</label>
          <div className="input-group mb-3 col-md-5">
                      <div className="form-file">
                          <input
                type="file"
                id="pages-background_image-up"
                accept=".jpeg, .jpg, .png, .gif,.svg"
                name="pages-background_image"
                className="form-file-input form-control"
                onChange={handlePageBackgroundUpload}/>
                      </div>
											<span className="input-group-text">Upload</span>
               </div>
          </div>
          <div className="col-md-6">
            <div id="pages-background_image"></div>
          </div>
          <div className="col-md-6">
              <label className="form-label">
                Home Background Image
              </label>   
          <div className="input-group mb-3 col-md-5">
                      <div className="form-file">
                          <input
                type="file"
                id="background_image-up"
                accept=".jpeg, .jpg, .png, .gif,.svg"
                name="background_image"
                className="form-file-input form-control"
                onChange={handleBackgroundUpload}/>
                      </div>
											<span className="input-group-text">Upload</span>
               </div>
          </div>
          <div className="col-md-6">
            <div id="sitebackground_image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SiteImage)