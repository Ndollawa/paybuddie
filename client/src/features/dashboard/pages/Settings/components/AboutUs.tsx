import React,{FormEvent,FormEventHandler,useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch,useSelector } from 'react-redux';
import { usePagesSettingsMutation,} from '../settingApiSlice';
import { setPagesSetting, useSettings,usePages } from '../settingsConfigSlice';
import {toast} from 'react-toastify';

const AboutUs = () => {
const {aboutUs} = useSelector(usePages)
  const [about_Us,setAboutUs] = useState(aboutUs)
  const dispatch= useDispatch();
const [pagesSettings,isLoading]=usePagesSettingsMutation();
const {_id} = useSelector(useSettings) 
const updateSetting:FormEventHandler = async(e:FormEvent)=>{
e.preventDefault()
try {
  await pagesSettings({_id,data:{aboutUs:about_Us}}).unwrap()
   dispatch(setPagesSetting({aboutUs:about_Us}))
  toast.success("Update Successful!",{
    position:"top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick:true,
    pauseOnHover:true,
    theme:'light',
  })
} catch (error:any) {
  toast.error(error,{
    position:"top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick:true,
    pauseOnHover:true,
    theme:'light',
  })
}

}

  return (
    <div className="card">
    <div className="card-header">
      <h4 className="card-title">About Us</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form onSubmit={updateSetting}>
          <div className='row'>
             
              <div className="col-md-12">

                  {/* <label><strong>About Us</strong></label> */}
                 
      <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
       onEditorChange={(newValue,editor)=>setAboutUs(newValue)}
       value={about_Us}
        initialValue=''
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    
              </div>
          </div>
          <div className="card-footer d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Update
              </button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AboutUs