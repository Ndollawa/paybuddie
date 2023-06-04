import React, {useState, useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useUpdateServiceMutation} from '../servicesApiSlice'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'
import Swal from 'sweetalert2'
import serviceProps from '../../../../../app/utils/props/serviceProps'

interface modalDataProps {
viewData:{
   data:serviceProps | null,
  showModal:boolean,
} 
}
const ViewModal = ({viewData:{data,showModal}}:modalDataProps) => {
  const [title, setTitle] = useState(data?.title)
  const [icon, setIcon] = useState(data?.icon)
  const [description, setDescription] = useState(data?.description)
  const [body, setBody] = useState(data?.body)
  const [serviceBg, setServiceBg] = useState<any>(null)
  const [status, setStatus] = useState(data?.status)
  const [show, setShow] = useState(false)
  const [previewImage, setPreviewImage] =useState(process.env.REACT_APP_BASE_URL+"/uploads/service/"+data?.image);
  

// const navigate = useNavigate()
useEffect(() => {
  setTitle(data?.title!)
  setIcon(data?.icon!)
  setDescription(data?.description!)
  setBody(data?.body!)
  setStatus(data?.status!)
  setPreviewImage(process.env.REACT_APP_BASE_URL+"/uploads/service/"+data?.image!)
    setShow(showModal)
      return () => {
        setShow(false)
        
      };
    }, [data,showModal])

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
          <Modal.Title>Title: {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className='heading'>Description:</h4>
          <p className='blockquote my-3 p-2 fs-14'>{description}</p>
          <h4 className="heading">Body Content:</h4>
        <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
      //  onEditorChange={(newValue,editor)=>setBody(newValue)}
       value={body}
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