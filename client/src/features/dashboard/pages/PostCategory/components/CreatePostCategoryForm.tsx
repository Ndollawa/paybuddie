import React, {ChangeEvent,FormEvent,useState} from 'react'
import { useAddNewPostCategoryMutation } from '../postCategoryApiSlice'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'
import $ from 'jquery'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../auth/authSlice'

const CreatePostCategoryForm = () => {
const author = useSelector(selectCurrentUser);
const [title, setTitle] = useState('')
const [status, setStatus] = useState<any>($('#status').val())
const [show, setShow] = useState(false)

const [addNewPostCategory, {
  isLoading,
  isSuccess,
  isError,
  error
}]:any = useAddNewPostCategoryMutation()

// const navigate = useNavigate()

React.useEffect(() => {
  if (isSuccess) {
      setTitle('')
  }
}, [isSuccess])

const canSave = [title, status,].every(Boolean) && !isLoading

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
const formData = new FormData()
 if (canSave) {
formData.append("title",title)
formData.append("status",status)
formData.append("author",author._id!)

      await addNewPostCategory(formData)
      if(isError) return showToast('error',JSON.stringify(error?.data?.message))
    showToast('success', 'Post category created successfully')
  }

}

  return (
    <>
<button type="button" className="btn btn-primary mb-2"  onClick={handleShow}>Add New</button>
  
<Modal show={show} size="sm" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
         <form onSubmit={handleSubmit}>
        <Modal.Body>
                
        <div className="card-body">
          <div className="basic-form">
              <div className="row">
                <div className="mb-3 col-md-9">
                  <label className="form-label"><strong>Title or Category</strong></label>
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
                   <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                  </select>
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
            Create Category          </Button>
        </Modal.Footer>
            </form>
      </Modal>
    </>
  )
}

export default React.memo(CreatePostCategoryForm)