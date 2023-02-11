import React, {FormEvent} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useAddNewFaqMutation } from '../faqApiSlice'
import useInput from '../../../../../app/utils/hooks/useInput'


const CreateFaqModal = () => {

const [question, setQuestion, QuestionAttr] = useInput('')
const [response, setResponse, ResponseAttr] = useInput('')
const [status, setStatus, StatusAttr] = useInput('')
const [addNewFaq, {
  isLoading,
  isSuccess,
  isError,
  error
}] = useAddNewFaqMutation()

// const navigate = useNavigate()

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
      await addNewFaq({question, response,status })
  }

}
  return (
    <>
<button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target=".faq-creation-form">Add new FAQ</button>
  
  <div className="modal fade faq-creation-form" style={{display: "none"}} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
            <form onSubmit={handleSubmit}>
                <div className="modal-header">
                    <h3 className="modal-title">Add New FAQ</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                    </button>
                </div>
                <div className="modal-body">
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
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                    <button type="submit" disabled={canSave} className="btn btn-primary">Save FAQ</button>
                </div>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default React.memo(CreateFaqModal)