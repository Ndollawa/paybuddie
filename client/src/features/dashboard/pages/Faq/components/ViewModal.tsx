import React, {FormEvent,useState, useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useUpdateFaqMutation } from '../faqApiSlice'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'

interface modalDataProps {
viewData:{
   data:{
      id:string | number;
      question: string;
      response: string;
      status: string;
  } | null,
  showModal:boolean,
} 
}
const ViewModal = ({viewData:{data,showModal}}:modalDataProps) => {
const [question, setQuestion] = useState("")
const [response, setResponse] = useState("")
const [status, setStatus] = useState("")
const [show, setShow] = useState(false);
const [updateFaq, {
  isLoading,
  isSuccess,
  isError,
  error
}]:any = useUpdateFaqMutation()

// const navigate = useNavigate()
useEffect(() => {
  setQuestion(data?.question!)
setStatus(data?.status!)
setResponse(data?.response!)
setShow(showModal)
  return () => {
    setShow(false)
    
  };
}, [data])

const handleClose = () => setShow(false);

const canSave = (question && response && status)? true :false



const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
 if (canSave) {
      await updateFaq({_id:data?.id,question, response,status })
        if(isSuccess)showToast('success', 'FAQ Updated successfully')
        if(isError) showToast('error',JSON.stringify(error?.data))
    }
}

  return (
    <>
  <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{question}</Modal.Title>
        </Modal.Header>
            <form onSubmit={handleSubmit}>
        <Modal.Body>
             <div className="card-body">
                 <div className="basic-form">
                     <div className="row">
                        <div className="col-12">
                            <label className="form-label"><strong>Response</strong></label>
                        
                        </div>
               
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" disabled={!canSave} variant="primary">Update FAQ</Button>
        </Modal.Footer>
            </form>
      </Modal>

    </>
  )
}

export default React.memo(ViewModal)