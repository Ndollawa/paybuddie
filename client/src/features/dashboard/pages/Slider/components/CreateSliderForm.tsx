import React, {FormEvent} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useAddNewSliderMutation } from '../sliderApiSlice'
import useInput from '../../../../../app/utils/hooks/useInput'


const CreateSliderForm = () => {

const [title, setTitle,TitleAttr] = useInput('')
const [description, setDescription, DescriptionAttr] = useInput('')
const [body, setBody, BodyAttr] = useInput('')
const [status, setStatus, StatusAttr] = useInput('')
const [addNewSlider, {
  isLoading,
  isSuccess,
  isError,
  error
}] = useAddNewSliderMutation()

// const navigate = useNavigate()

React.useEffect(() => {
  if (isSuccess) {
      setTitle('')
      setDescription('')
      setBody('')
    //   setDescription('')
  }
}, [isSuccess])

const canSave = [title, description, body,status].every(Boolean) && !isLoading



const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
 if (canSave) {
      await addNewSlider({title, description,body,status })
  }

}
  return (
    <>
<button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target=".slider-creation-form">Add New</button>
  
  <div className="modal fade slder-creation-form" style={{display: "none"}} aria-hidden="true">
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
                  <label className="form-label"><strong>Title or Heading</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={title}
                    onChange={setTitle}
                    {...TitleAttr}
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
                <div className="mb-3 col-md-12">
                  <label className="form-label"><strong>Description</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={description}
                    onChange={setDescription}
                    {...DescriptionAttr}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label"><strong>Response</strong></label>
                  <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
       onEditorChange={(newValue,editor)=>setBody(newValue)}
       value={body}
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

export default CreateSliderForm