import React, {ChangeEvent,FormEvent,useState,useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useUpdateRoomMutation} from '../roomApiSlice'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'
import $ from 'jquery'




interface modalDataProps {
  modalData:{
     data:{
        id:string | number;
        title: string;
        description: string;
        roomImage: string;
        status: string;
    } | null,
    showModal:boolean,
  } 
  }
const EditRoomModal = ({modalData:{data,showModal}}:modalDataProps) => {

const [title, setTitle] = useState<any>('')
const [description, setDescription] = useState('')
const [roomBg, setRoomBg] = useState<any>(null)
const [status, setStatus] = useState<any>($('#status').val())
const [show, setShow] = useState(false)
    const [previewImage, setPreviewImage] =
    useState<any>(process.env.REACT_APP_BASE_URL+"/uploads/room/"+data?.roomImage!);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [updateRoom, {
  isLoading,
  isSuccess,
  isError,
  error
}]:any = useUpdateRoomMutation()

// const navigate = useNavigate()
React.useEffect(() => {
  if (isSuccess) {
      setTitle('')
      setDescription('')
      setRoomBg(null)
      setShow(false)
  }
}, [isSuccess])
useEffect(() => {
  setShow(showModal)
  setDescription(data?.description!)
  setStatus(data?.status!)
  setTitle(data?.title!)
    return () => {
      setTitle('')
      setDescription('')
      setRoomBg(null)
      setShow(false)
    };
  }, [data])
const canSave = [title, description,status, previewImage].every(Boolean) && !isLoading

const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
const formData = new FormData()
 if (canSave) {
formData.append("_id",data?.id! as any)
formData.append("title",title)
formData.append("description",description)
formData.append("status",status)
formData.append("roomImage",roomBg)

      await updateRoom(formData)
      if(isError) return showToast('error',JSON.stringify(error?.data?.message))
      showToast('success', 'Room updated successfully')
  }

}
const uploadBg = (e:ChangeEvent<HTMLInputElement>)=>{
  const file = e.target.files
  if(file && file.length > 0)
  {setRoomBg(file[0])
const fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
setPreviewImage(fileurl)

  }
}
  return (
    <>
  
  
  <Modal show={show} size="lg" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Room</Modal.Title>
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
                    <option value='active' selected>Active</option>
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
               
              </div>
             
          </div>
  
                    </div>
                    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={!canSave}  >
            Update Room
          </Button>
        </Modal.Footer>
            </form>
      </Modal>
    </>
  )
}

export default React.memo(EditRoomModal)