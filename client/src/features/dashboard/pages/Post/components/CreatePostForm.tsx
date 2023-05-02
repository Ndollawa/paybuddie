import React, {ChangeEvent,FormEvent,useState} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import {IoMdPricetags,IoIosList,IoMdColorWand,IoIosCreate,IoIosClose} from 'react-icons/io'
import { useAddNewPostMutation } from '../postApiSlice'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'
import $ from 'jquery'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../auth/authSlice'
import { useGetPostCategoryQuery } from '../../PostCategory/postCategoryApiSlice'

const CreatePostForm = () => {
const author = useSelector(selectCurrentUser);
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [body, setBody] = useState('')
const [postBg, setPostBg] = useState<any>(null)
const [status, setStatus] = useState<any>($('#status').val())
const [show, setShow] = useState(false)
const [previewImage, setPreviewImage] = useState("");
const [tags, setTags] = useState<any>([]);
const [tagName, setTagName] = useState("")
const [category, setCategory] = useState("")

const createTag = (e:any)=>{
  setTagName(e.target.value) 
}
// const tagwrapper= document.getElementsByClassName('tag-wrapper')!;
const addTag = (e:any) =>{
if( e.key === 'Enter' ){
  if(tagName !== ""){
  setTags((tags:string[])=>{return [...tags,tagName]})
  setTagName("")
} 
}
};
const {
  data:postCategory,
  isLoading:postCategoryIsLoading,
  isSuccess:postCategoryIsSuccess,
  isError:postCategoryIsError,
  error:postCategoryError
} = useGetPostCategoryQuery('postCategoryList', {
  pollingInterval: 15000,
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true
})
let categoryOptions;
if(postCategory){
const {entities} = postCategory
 categoryOptions = Object.values(entities).map((category:any,i:number)=><option key={i} value={category._id}>{category.title}</option>)
}
const removeTag = (key:string) =>{
  setTags((tags:string[])=>{return tags.filter(tag=> tag !== key )})
  setTagName("")
};
const [addNewPost, {
  isLoading,
  isSuccess,
  isError,
  error
}]:any = useAddNewPostMutation()

// const navigate = useNavigate()

React.useEffect(() => {
  if (isSuccess) {
      setTitle('')
      setDescription('')
      setBody('')
      setPreviewImage("")
      setTags([])
      setTagName("")
      setPostBg(null)
  }
}, [isSuccess])

const canSave = [title, description, body, postBg].every(Boolean) && !isLoading

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
 if (canSave) {
var formData = new FormData()
formData.append("title",title)
formData.append("description",description)
formData.append("body",body)
formData.append("tags",tags)
formData.append("category",category)
formData.append("status",status)
formData.append("coverImage",postBg)
formData.append("author",author._id!)
      await addNewPost(formData)
      if(isError) return showToast('error',JSON.stringify(error?.data?.message))
    showToast('success', 'Post created successfully')
  }

}
const uploadBg = (e:ChangeEvent<HTMLInputElement>)=>{
  const file = e.target.files
  if(file && file.length > 0)
  {setPostBg(file[0])
const fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
setPreviewImage(fileurl)

}}
  return (
    <>
<button type="button" className="btn btn-primary mb-2"  onClick={handleShow}>Add New</button>
  
<Modal show={show} size="lg" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
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
                    id="status"
                    className="default-select form-control wide"
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                  >
                   <option value='published'>Publish</option>
                    <option value='draft'>Draft</option>
                  </select>
                </div>
                <div className="mb-3 col-md-8">
                  <label className="form-label"><strong>Description</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-4">
                  <label className="form-label"><strong>Category</strong></label>
                  <select
                    id="category"
                    className="default-select form-control wide"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                  >
                  {categoryOptions}
                  </select>
                </div>
                <div className="col-12 my-4">
                <label
                  htmlFor="postTag"
                  className="block text-sm font-medium text-gray"
                >
                   Post Tags<span className="required"> * </span>
                </label> 
                <div className="mt-1 d-flex rounded-md shadow-sm align-items-stretch overflow-hidden h-100">
                  <span className="d-flex w-10 align-items-center rounded-l-md border border-r-0  bg-secondary bg-opacity-10 px-3 text-xl ">
                 <IoMdPricetags fontSize={'1.5rem'}/> </span>
                   <div className="mt-1 rounded-md shadow-sm p-1 border-2 border-secondary rounded-sm d-flex flex-wrap align-items-center m-0 w-100">
                      {tags.map((tagName:string,i:number)=>{
                   return(<div className="p-1 font-xs border border-secondary rounded-sm d-flex align-items-center bg-gray-light mx-1" key={i}>
                      <span >{tagName}</span>
                      <IoIosClose className="text-sm ml-1.5" onClick={(e)=>removeTag(tagName)}/>
                      </div>)})
                      }
                    <input 
                      className="d-flex font-16 p-2 outline-none border-0 w-100 form-control" 
                      name="tag-input"
                      value={tagName}
                      onChange={createTag}
                      onKeyDown={addTag} 
                      type="text" />
                  </div>
                </div>
              </div>
              <div className='row col-12 mt-3'>
                <div className="col-md-6">  
              <label className="form-label">Background Image</label>
          <div className="input-group mb-3 col-md-5">
                      <div className="form-file">
                          <input
                type="file"
                id="uploadbg"
                accept=".jpeg, .jpg, .png, .gif"
                name="uploadbg"
                onChange={uploadBg}
                className="form-file-input form-control"/>
                      </div>
											<span className="input-group-text">Upload</span>
               </div>
          </div>
                  <div className="col-md-6">
                    Preview
                    <div id="preview">{previewImage &&<img className="img-responsive" src={previewImage} alt="post cover imager" width="240"/>}</div>
                  </div>
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
            Save Post          </Button>
        </Modal.Footer>
            </form>
      </Modal>
    </>
  )
}

export default React.memo(CreatePostForm)