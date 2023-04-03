import React, {FormEvent,useState} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useAddNewFaqMutation } from '../faqApiSlice'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'

const CreateFaqModal = () => {
  const [show, setShow] = useState(false);

const [question, setQuestion] = useState('')
const [response, setResponse] = useState('')
const [status, setStatus] = useState('active')
const [addNewFaq, {
  data,
  isLoading,
  isSuccess,
  isError,
  error
}]:any = useAddNewFaqMutation()

// const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const canSave = (question && response && status)? true : false



const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
 if (canSave) {
      await addNewFaq({question, response,status })
      if(isError)return showToast('error',JSON.stringify(error?.data))
      setQuestion("")
      setResponse("")
      setShow(false)
      showToast('success', 'FAQ Saved successfully')
  }

}
  return (
    <>
<button type="button" className="btn btn-primary mb-2" onClick={handleShow}>Add new FAQ</button>
<Modal show={show} size="lg" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New FAQ</Modal.Title>
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
  {/* onClick={handleClose} */}
                    </div>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={!canSave}  >
            Save FAQ
          </Button>
        </Modal.Footer>
            </form>
      </Modal>
  
    </>
  )
}

export default React.memo(CreateFaqModal)