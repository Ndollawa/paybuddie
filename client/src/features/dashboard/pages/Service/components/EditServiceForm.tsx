import React, {ChangeEvent,FormEvent,useState,useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useUpdateServiceMutation} from '../servicesApiSlice'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'
import Swal from 'sweetalert2'
import serviceProps from '../../../../../app/utils/props/serviceProps'


interface modalDataProps {
  modalData:{
     data:serviceProps | null,
    showModal:boolean,
  } 
  }
const EditServiceModal = ({modalData:{data,showModal}}:modalDataProps) => {

const [title, setTitle] = useState(data?.title)
const [icon, setIcon] = useState(data?.icon)
const [description, setDescription] = useState(data?.description)
const [body, setBody] = useState(data?.body)
const [serviceBg, setServiceBg] = useState<any>(null)
const [status, setStatus] = useState(data?.status)
const [show, setShow] = useState(false)
const [previewImage, setPreviewImage] =useState(process.env.REACT_APP_BASE_URL+"/uploads/service/"+data?.image);

const handleClose = () => setShow(false);
const [updateService, {
  isLoading,
  isSuccess,
  isError,
  error
}]:any = useUpdateServiceMutation()

// const navigate = useNavigate()
useEffect(() => {
  if (isSuccess) {
      setServiceBg(null)
      setShow(false)
      setTitle("")
      setDescription("")
      setBody("")
      setStatus("")
  }
}, [isSuccess])
useEffect(() => {
setTitle(data?.title!)
setIcon(data?.icon!)
setDescription(data?.description!)
setBody(data?.body!)
setStatus(data?.status!)
setPreviewImage(process.env.REACT_APP_BASE_URL+"/uploads/service/"+data?.image!)
  setShow(showModal)
    return () => {
      setShow(false)
      
    };
  }, [data,showModal])
const canSave = [title, description, body,status, previewImage].every(Boolean) && !isLoading

const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
const formData = new FormData()
 if (canSave) {
formData.append("_id",data?._id!)
formData.append("title",title as string)
formData.append("icon",icon as string)
formData.append("description",description as string)
formData.append("body",body as string)
formData.append("status",status as string)
formData.append("upload",serviceBg)

      await updateService(formData)
      if(isError) return showToast('error',JSON.stringify(error?.data?.message))
      showToast('success', 'Service updated successfully')
  }

}
const uploadBg = (e:ChangeEvent<HTMLInputElement>)=>{
  const file = e.target.files
  if(file && file.length > 0)
  {setServiceBg(file[0])
const fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
setPreviewImage(fileurl)

  }
}
  return (
    <>
  
  
  <Modal show={show} size="lg" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Service</Modal.Title>
        </Modal.Header>
         <form onSubmit={handleSubmit}>
        <Modal.Body>
                
        <div className="card-body">
          <div className="basic-form">
              <div className="row">
                <div className="mb-3 col-md-7">
                  <label className="form-label"><strong>Name or Title</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-3">
                  <label className="form-label"><strong>Icon Class</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={icon}
                    onChange={(e)=>setIcon(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-2">
                  <label className="form-label"><strong>Status</strong></label>
                  <select
                    id="inputState"
                    className="default-select form-control wide"
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                   
                  >
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                  </select>
                </div>
                <div className="mb-3 col-md-12">
                  <label className="form-label"><strong>Description</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                  />
                </div>
                <div className="col-md-6">  
              <label className="form-label">Background Image</label>
          <div className="input-group mb-3 col-md-5">
                      <div className="form-file">
                          <input
                type="file"
                id="uploadbg"
                accept=".jpeg, .jpg, .png, .gif"
                name="uploadbg"
                onChange={uploadBg}
                className="form-file-input form-control"/>
                      </div>
											<span className="input-group-text">Upload</span>
               </div>
          </div>
                  <div className="col-md-6">
                    Preview
                    <div id="preview">{previewImage &&<img className="img-responsive" src={previewImage} alt="User Avatar" width="240"/>}</div>
                  </div>
                <div className="col-12">
                  <label className="form-label"><strong>Details</strong></label>
                  <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
       onEditorChange={(newValue,editor)=>setBody(newValue)}
       value={body}
        init={{
          height: 400,
          menubar: true,
          theme:"silver",
          plugins:["advlist", "autolink", "link ","image"," lists"," charmap ","print","preview" ,"hr" ,"anchor" ,"pagebreak" ,"spellchecker" ,
          "searchreplace"," wordcount"," visualblocks"," visualchars"," code"," fullscreen"," insertdatetime"," media"," nonbreaking",
          "save","table","contexmenu","directionality","emoticons","template","imagetools","paste","textcolor"],
          content_css:"css/content.css",
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
          styleformats:[
          { title: 'Bold text', inline: 'b'},
          {title: 'Red text', inline: 'span', styles:{color: '#ff0000'}},
          {title: 'Red header', block: 'h1', styles:{color: '#ff0000'}},
          {title: 'Example 1', inline: 'span', classes: 'example1'},
          {title: 'Example 2', inline: 'span', classes: 'example2'},
          {title: 'Table styles'},
          {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}],
            images_upload_credentials: true,
            images_upload_url:'',
            images_upload_base_path: '',
            
  //    images_upload_handler: function (blobInfo, success, failure, progress) {
  //   var xhr, formData;

  //   xhr = new XMLHttpRequest();
  //   xhr.withCredentials = false;
  //   xhr.open('POST', '../file-upload.php');

  //   xhr.upload.onprogress = function (e) {
  //     progress(e.loaded / e.total * 100);
  //   };

  //   xhr.onload = function() {
  //     var json;

  //     if (xhr.status < 200 || xhr.status >= 300) {
  //       failure('HTTP Error: ' + xhr.status);
  //       return;
  //     }

  //     json = JSON.parse(xhr.responseText);

  //     if (!json || typeof json.location != 'string') {
  //       failure('Invalid JSON: ' + xhr.responseText);
  //       return;
  //     }

  //     success(json.location);
  //   };

  //   xhr.onerror = function () {
  //     failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
  //   };

  //   formData = new FormData();
  //   formData.append('file', blobInfo.blob(), blobInfo.filename());

  //   xhr.send(formData);
  // }
        
        }}
      />
                </div>
               
              </div>
             
          </div>
  
                    </div>
                    </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" type="submit" disabled={!canSave}  >
            Update Service
          </Button>
        </Modal.Footer>
            </form>
      </Modal>
    </>
  )
}

export default React.memo(EditServiceModal)