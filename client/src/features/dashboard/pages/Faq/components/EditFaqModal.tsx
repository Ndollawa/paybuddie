import React, {FormEvent,useState, useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useUpdateFaqMutation } from '../faqApiSlice'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'

interface modalDataProps {
modalData:{
   data:{
      id:string | number;
      question: string;
      response: string;
      status: string;
  } | null,
  showModal:boolean,
} 
}
const EditFaqModal = ({modalData:{data,showModal}}:modalDataProps) => {
 
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
setResponse(data?.response!)
setStatus(data?.status!)
setShow(showModal)
  return () => {
    setShow(false)
    
  };
}, [data,showModal])
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
          <Modal.Title>Edit FAQ</Modal.Title>
        </Modal.Header>
            <form onSubmit={handleSubmit}>
        <Modal.Body>
             <div className="card-body">
          <div className="basic-form">
              <div className="row">
                <div className="mb-3 col-md-9">
                  <label className="form-label"><strong>Question</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={question}
                    onChange={(e)=>setQuestion(e.target.value)}
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
               
                <div className="col-12">
                  <label className="form-label"><strong>Response</strong></label>
                  <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
       onEditorChange={(newValue,editor)=>setResponse(newValue)}
       value={response}
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
          <Button type="submit" disabled={!canSave} variant="primary">Update FAQ</Button>
        </Modal.Footer>
            </form>
      </Modal>

    </>
  )
}

export default React.memo(EditFaqModal)