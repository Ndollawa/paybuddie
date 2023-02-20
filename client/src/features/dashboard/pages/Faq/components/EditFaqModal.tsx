import React, {FormEvent,useState} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useUpdateFaqMutation,selectFaqById } from '../faqApiSlice'
import { useSelector } from 'react-redux'
import useInput from '../../../../../app/utils/hooks/useInput'
import { faqProps } from '../../../../../app/utils/props/faqProps'
import { RootState } from '../../../../../app/stores/store'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


const EditFaqModal = ({id,showModal}:{id:string;showModal:boolean}) => {

const faq:any = useSelector((state:RootState) => selectFaqById(state, id))
const [question, setQuestion, QuestionAttr] = useInput(faq.question)
const [response, setResponse, ResponseAttr] = useInput(faq.response)
const [status, setStatus, StatusAttr] = useInput(faq.status)
const [updateFaq, {
  isLoading,
  isSuccess,
  isError,
  error
}] = useUpdateFaqMutation()

// const navigate = useNavigate()

const [show, setShow] = useState(showModal);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
React.useEffect(() => {
  if (isSuccess) {
      setResponse('')
      setQuestion('')
  }
}, [isSuccess])

const canSave = [question, response, status].every(Boolean) && !isLoading



const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
 if (canSave) {
      await updateFaq({id,question, response,status })
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
                    onChange={setQuestion}
                    {...QuestionAttr}
                  />
                </div>
                <div className="mb-3 col-md-3">
                  <label className="form-label"><strong>Status</strong></label>
                  <select
                    id="inputState"
                    className="default-select form-control wide"
                    value={status}
                    onChange={setStatus}
                    {...StatusAttr}
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
        initialValue=''
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
          <Button type="submit" disabled={canSave} variant="primary">Update FAQ</Button>
        </Modal.Footer>
            </form>
      </Modal>

    </>
  )
}

export default React.memo(EditFaqModal)