import React, {ChangeEvent,FormEvent,useState,useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import {IoMdPricetags,IoIosList,IoMdColorWand,IoIosCreate,IoIosClose} from 'react-icons/io'
import { useUpdatePostMutation} from '../postApiSlice'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'




interface modalDataProps {
  modalData:{
     data:{
        id:string | number;
        title: string;
        description: string;
        body: string;
        coverImage: string;
        status: string;
        tags: string[];
        category: string;
    } | null,
    showModal:boolean,
  } 
  }
const EditPostModal = ({modalData:{data,showModal}}:modalDataProps) => {

const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [body, setBody] = useState("")
const [postBg, setPostBg] = useState<any>(null)
const [status, setStatus] = useState("")
const [show, setShow] = useState(false) 
const [tags, setTags] = useState<any>([]);
const [tagName, setTagName] = useState("")
const [category, setCategory] = useState("")

const createTag = (e:any)=>{
      setTagName(e.target.value)
}
// const tagwrapper= document.getElementsByClassName('tag-wrapper')!;
    const addTag = (e:any) =>{
      if(tagName !== ""){
        setTags((tags:string[])=>{return [...tags,tagName]})
        setTagName("")
      } 
      };

      const removeTag = (key:string) =>{
        setTags((tags:string[])=>{return tags.filter(tag=> tag !== key )})
        setTagName("")
      };
const [previewImage, setPreviewImage] =
useState("");
useEffect(() => {
  setTitle(data?.title!)
setDescription(data?.description!)
setBody(data?.body!)
setCategory(data?.category!)
setStatus(data?.status!)
setTags(data?.tags!)
setPreviewImage(data?.coverImage!)

  setShow(showModal)
    return () => {
      setShow(false)
      
    };
  }, [data,showModal])

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [updatePost, {
  isLoading,
  isSuccess,
  isError,
  error
}]:any = useUpdatePostMutation()

// const navigate = useNavigate()
React.useEffect(() => {
  if (isSuccess) {
      setTitle('')
      setDescription('')
      setBody('')
      setPostBg(null)
  }
}, [isSuccess])

const canSave = [title, description, body,status, postBg].every(Boolean) && !isLoading

const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
const formData = new FormData()
 if (canSave) {
formData.append("title",title)
formData.append("description",description)
formData.append("body",body)
formData.append("tags",tags)
formData.append("category",category)
formData.append("status",status)
formData.append("coverImage",postBg)

      await updatePost(formData)
      if(isError)return  showToast('error',JSON.stringify(error?.data?.message))
     showToast('success', 'Post created successfully')
  }

}
const uploadBg = (e:ChangeEvent<HTMLInputElement>)=>{
  const file = e.target.files
  if(file && file.length > 0){
  setPostBg(file[0])
  const fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
setPreviewImage(fileurl)

}}

  return (
    <>
  
  
  <Modal show={show} size="lg" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
         <form onSubmit={handleSubmit}>
        <Modal.Body>
                
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
                    <option value='publish'>Publish</option>
                    <option value='draft'>Draft</option>
                  </select>
                </div>
                <div className="mb-3 col-md-12">
                  <label className="form-label"><strong>Description</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                  />
                </div>

                <div className="col-6 col-sm-3">
                <label
                  htmlFor="postTag"
                  className="block text-sm font-medium text-gray"
                >
                   Post Tags<span className="required"> * </span>
                </label> 
                <div className="mt-1 d-flex rounded-md shadow-sm align-items-stretch overflow-hidden">
                  <span className="d-flex w-25 align-items-center rounded-l-md border border-r-0  bg-gray-600 px-3 text-xl text-white">
                 <IoMdPricetags/> </span>
                   <div className="mt-1 rounded-md shadow-sm p-1 border-2 border-gray rounded-sm d-flex flex-wrap align-items-center m-0 w-100">
                      {tags.map((tagName:string,i:number)=>{
                   return(<div className="p-1 font-xs border border-gray rounded-sm d-flex align-items-center bg-gray-light mx-1" key={i}>
                      <span >{tagName}</span>
                      <IoIosClose className="text-sm ml-1.5"/>
                      </div>)})
                      }
                    <input 
                      className="d-flex font-16 p-2 outline-none border-0 w-fit" 
                      name="tag-input"
                      value={tagName}
                      // onChange={createTagName}
                      onKeyDown={addTag} 
                      type="text" />
                  </div>
                </div>
              </div>
                <div className="col-md-6">  
              <label className="form-label">Background Image</label>
          <div className="input-group mb-3 col-md-5">
                      <div className="form-file">
                          <input
                type="file"
                id="uploadbg"
                accept=".jpeg, .jpg, .png, .gif"
                name="uploadbg"
                value={postBg}
                onChange={uploadBg}
                className="form-file-input form-control"/>
                      </div>
											<span className="input-group-text">Upload</span>
               </div>
          </div>
              <div className="col-md-6">
                Preview
                <div id="preview">{previewImage &&<img className="img-responsive" src={previewImage} alt="User Avatar" width="240"/>}</div>
              </div>
         
                <div className="col-12">
                  <label className="form-label"><strong>Response</strong></label>
                  <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
       onEditorChange={(newValue,editor)=>setBody(newValue)}
       value={body}
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
          <Button variant="primary" type="submit" disabled={!canSave}  >
            Update Post
          </Button>
        </Modal.Footer>
            </form>
      </Modal>
    </>
  )
}

export default React.memo(EditPostModal)