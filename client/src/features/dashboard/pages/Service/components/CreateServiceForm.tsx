import React, {ChangeEvent,FormEvent,useState} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useAddNewServiceMutation } from '../servicesApiSlice'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'


const CreateServiceForm = () => {

const [title, setTitle] = useState('')
const [icon, setIcon] = useState('')
const [description, setDescription] = useState('')
const [body, setBody] = useState('')
const [serviceBg, setServiceBg] = useState<any>(null)
const [status, setStatus] = useState('active')
const [show, setShow] = useState(false)
const [previewImage, setPreviewImage] = useState("");
const [addNewService, {
  isLoading,
  isSuccess,
  isError,
  error
}]:any = useAddNewServiceMutation()

// const navigate = useNavigate()

React.useEffect(() => {
  if (isSuccess) {
      setTitle('')
      setIcon('')
      setDescription('')
      setBody('')
      setServiceBg(null)
      setShow(false)
  }
}, [isSuccess])

const canSave = [title, icon, description, body,status, serviceBg].every(Boolean) && !isLoading

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
const formData = new FormData()
 if (canSave) {
formData.append("title",title)
formData.append("description",description)
formData.append("body",body)
formData.append("status",status)
formData.append("icon",icon)
formData.append("upload",serviceBg)
      await addNewService(formData)
      if(isError) return showToast('error',JSON.stringify(error?.data?.message))
      showToast('success', 'Service created successfully')
  }

}
const uploadBg = (e:ChangeEvent<HTMLInputElement>)=>{
  const file = e.target.files
  if(file && file.length > 0){
  setServiceBg(file[0])
  
const fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
setPreviewImage(fileurl)
}
}
  return (
    <>
<button type="button" className="btn btn-primary mb-2"  onClick={handleShow}>Add New</button>
  
<Modal show={show} size="lg" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Service</Modal.Title>
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
             
          </div>
  
                    </div>
                    </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" type="submit" disabled={!canSave}  >
            Save Service          </Button>
        </Modal.Footer>
            </form>
      </Modal>
    </>
  )
}

export default React.memo(CreateServiceForm)