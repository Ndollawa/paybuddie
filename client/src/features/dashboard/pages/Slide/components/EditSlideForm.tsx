import React, {ChangeEvent,FormEvent,useState,useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useUpdateSlideMutation} from '../slideApiSlice'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {BsToggleOff ,BsToggleOn} from 'react-icons/bs';
import showToast from '../../../../../app/utils/hooks/showToast'
import $ from 'jquery'



interface modalDataProps {
  modalData:{
     data:{
        _id:any;
        title: string;
        description: string;
        body: string;
        cto:{
        cto_text?:string;
        link?:string;
      }
        image: string;
        status: string;
    } | null,
    showModal:boolean,
  } 
  }
const EditSlideModal = ({modalData:{data,showModal}}:modalDataProps) => {

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [body, setBody] = useState('')
const [CTOText, setCTOText] = useState('')
const [CTOLink, setCTOLink] = useState('')

const [addCTOToggle, setAddCTOToggle] = useState<any>(false)
const [slideBg, setSlideBg] = useState<any>(null)
const [status, setStatus] = useState<any>((data?.status) ? data?.status! : $('#status').val())
const [show, setShow] = useState(false)
const [previewImage, setPreviewImage] = useState("");
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [updateSlide, {
  isLoading,
  isSuccess,
  isError,
  error
}]:any = useUpdateSlideMutation()

// const navigate = useNavigate()
React.useEffect(() => {
  if (isSuccess) {
      setTitle('')
      setStatus($('#status').val())
      setDescription('')
      setBody('')
      setPreviewImage("")
      setSlideBg(null)
  }
}, [isSuccess])

useEffect(() => {
  setShow(showModal)
  setTitle(data?.title!)
  setDescription(data?.description!)
  setBody(data?.body!)
  setAddCTOToggle([data?.cto?.cto_text! , data?.cto?.link!].every(Boolean))
  setCTOText(data?.cto?.cto_text!)
  setCTOLink(data?.cto?.link!)
  setStatus(data?.status)
  // setSlideBg(data?.image!)
  setPreviewImage(process.env.REACT_APP_BASE_URL+"/uploads/slides/"+data?.image!)
    return () => {
      setShow(false)
      };
  }, [data,showModal])
const canSave = [title, description, body, previewImage].every(Boolean) && !isLoading

const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
const formData = new FormData()
 if (canSave) {
formData.append("title",title)
formData.append("description",description)
formData.append("_id",data?._id!)
formData.append("body",body)
formData.append("cto_text",CTOText)
formData.append("link",CTOLink)
formData.append("cto_option",addCTOToggle)
formData.append("status",status)
formData.append("slideBg",slideBg)
// console.log(formData)
      await updateSlide(formData)
      if(isError) return showToast('error',JSON.stringify(error?.data?.message))
      showToast('success', 'Slide updated successfully')
  }

}
const uploadBg = (e:ChangeEvent<HTMLInputElement>)=>{
  const file = e.target.files
  if(file && file.length > 0){
  setSlideBg(file[0])
  const fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
setPreviewImage(fileurl)
}
}
  return (
    <>
  
  
  <Modal show={show} size="lg" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Slide</Modal.Title>
        </Modal.Header>
         <form onSubmit={handleSubmit}>
        <Modal.Body>
                
        <div className="card-body">
          <div className="basic-form">
              <div className="row">
                <div className="mb-3 col-md-9">
                  <label className="form-label"><strong>Title or Heading</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-3">
                  <label className="form-label"><strong>Status</strong></label>
                  <select
                    id="status"
                    className="default-select form-control wide"
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                   
                  >
                    <option value='active' selected >Active</option>
                    <option value='inactive' >Inactive</option>
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
          <div className="input-group mb-3 col-md-6">
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
                <div id="preview">{previewImage &&<img className="img-responsive" src={process.env.REACT_APP_BASE_URL+'/uploads/slide/'+previewImage} alt="User Avatar" width="240"/>}</div>
              </div>
              <div className="my-20 col-md-12 d-flex justify-content-between">
              <div><strong>Add CTO Button</strong></div>
              <div className=''>
                <label htmlFor='addCTOToggle'  className='p-10'>{addCTOToggle?<BsToggleOn className='text-primary' fontSize={'2rem'}/>:<BsToggleOff className='text-default' fontSize={'2rem'}/>}</label>
                <input
                id="addCTOToggle"
                type="checkbox"
                  className="setting-checkbox d-none"
                  onClick={()=>setAddCTOToggle((prev:boolean)=>!prev)}
                />
                 </div>
              </div><br/>
              {addCTOToggle &&<>
              <div className="row">
              <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>CTO Text</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={CTOText}
                    onChange={(e)=>setCTOText(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Link</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={CTOLink}
                    onChange={(e)=>setCTOLink(e.target.value)}
                  />
                </div>
              </div>
              </>}
                <div className="col-12">
                  <label className="form-label"><strong>Body</strong></label>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={!canSave}  >
            Update Slide
          </Button>
        </Modal.Footer>
            </form>
      </Modal>
    </>
  )
}

export default React.memo(EditSlideModal)