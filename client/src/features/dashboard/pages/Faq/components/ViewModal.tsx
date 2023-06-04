import React, {FormEvent,useState, useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useUpdateFaqMutation } from '../faqApiSlice'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'
import { faqProps } from '../../../../../app/utils/props/faqProps'

interface modalDataProps {
viewData:{
   data:faqProps | null,
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
        <Modal.Title>Question: {question}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="heading">Response:</h4>
        <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
      //  onEditorChange={(newValue,editor)=>setBody(newValue)}
       value={response}
       disabled
        init={{
          height: 500,
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size='sm' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default React.memo(ViewModal)