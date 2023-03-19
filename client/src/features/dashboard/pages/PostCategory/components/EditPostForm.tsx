import React, {ChangeEvent,FormEvent,useState,useEffect} from 'react'
import { useUpdatePostCategoryMutation} from '../postCategoryApiSlice'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../auth/authSlice'





interface modalDataProps {
  modalData:{
     data:{
        id:string | number;
        title: string;
        status: string;
    } | null,
    showModal:boolean,
  } 
  }
const EditPostCategoryModal = ({modalData:{data,showModal}}:modalDataProps) => {

const author = useSelector(selectCurrentUser);
const [title, setTitle] = useState(data?.title!)
const [status, setStatus] = useState(data?.status!)
const [show, setShow] = useState(false) 


const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [updatePostCategory, {
  isLoading,
  isSuccess,
  isError,
  error
}]:any = useUpdatePostCategoryMutation()

// const navigate = useNavigate()
React.useEffect(() => {
  if (isSuccess) {
      setTitle('')
  }
}, [isSuccess])
useEffect(() => {
  setShow(showModal)
    return () => {
      setShow(false)
      
    };
  }, [data])
const canSave = [title,status].every(Boolean) && !isLoading

const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
const formData = new FormData()
 if (canSave) {
formData.append("title",title)
formData.append("status",status)
formData.append("_id",author._id!)

      await updatePostCategory(formData)
      if(isSuccess)showToast('success', 'Post created successfully')
      if(isError) showToast('error',JSON.stringify(error?.data?.message))
  }

}

  return (
    <>
  
  
  <Modal show={show} size="sm" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
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
                    id="inputState"
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
            Update Category
          </Button>
        </Modal.Footer>
            </form>
      </Modal>
    </>
  )
}

export default React.memo(EditPostCategoryModal)