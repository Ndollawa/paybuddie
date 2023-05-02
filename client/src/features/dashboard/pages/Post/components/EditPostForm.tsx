import React, {ChangeEvent,FormEvent,useState,useEffect} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import {IoMdPricetags,IoIosList,IoMdColorWand,IoIosCreate,IoIosClose} from 'react-icons/io'
import { useUpdatePostMutation} from '../postApiSlice'
import { useGetPostCategoryQuery } from '../../PostCategory/postCategoryApiSlice'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'
import $ from 'jquery'




interface modalDataProps {
  modalData:{
     data:{
        id: any;
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
const EditPostForm = ({modalData:{data,showModal}}:modalDataProps) => {

  // const author = useSelector(selectCurrentUser);
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

const removeTag = (key:string) =>{
  setTags((tags:string[])=>{return tags.filter(tag=> tag !== key )})
  setTagName("")
};
useEffect(() => {
  setTitle(data?.title!)
setDescription(data?.description!)
setBody(data?.body!)
setCategory(data?.category!)
setStatus(data?.status!)
setTags(data?.tags!)
setPreviewImage(process.env.REACT_APP_BASE_URL+"/uploads/posts/"+data?.coverImage!)
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
      setPostBg(null)
  }
}, [isSuccess])
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
const canSave = [title, description, body,status].every(Boolean);

const handleSubmit = async(e:FormEvent)=>{
e.preventDefault();
 if (canSave) {

      await updatePost({_id:data?.id!,title,body,description,tags,category,status,coverImage:postBg})
      if(isError)return  showToast('error',JSON.stringify(error?.data?.message))
     showToast('success', 'Post updated successfully')
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
                      {tags?.map((tagName:string,i:number)=>{
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
                <div id="preview">{previewImage &&<img className="img-responsive" src={previewImage} alt="post image" width="240"/>}</div>
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

export default React.memo(EditPostForm)