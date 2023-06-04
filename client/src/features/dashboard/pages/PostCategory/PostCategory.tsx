import React, {ChangeEvent,FormEvent,useState,useEffect} from 'react'
import MainBody from '../../components/MainBody'
import { useDispatch } from 'react-redux'
import { useGetPostCategoryQuery, useAddNewPostCategoryMutation } from './postCategoryApiSlice'
import { setPreloader } from '../../components/PreloaderSlice'
import pageProps from '../../../../app/utils/props/pageProps'
import PostCategoryTableData from './components/PostCategoryTableData'   
import showToast from '../../../../app/utils/hooks/showToast'
import initDataTables,{destroyDataTables} from '../../../../app/utils/initDataTables'
import $ from 'jquery'
import EditPostCategoryForm from './components/EditPostCategoryForm'
import postCategoryProps from '../../../../app/utils/props/postCategoryProps'

    

    
interface modalDataProps {
       data:postCategoryProps | null,
      showModal:boolean,
    }
    const PostCategory = ({pageData}:pageProps)  => {
        const dispatch =useDispatch()
        const [modalData,setModalData] = useState<modalDataProps>({
            data:null, 
            showModal:false,
           })      
const [title, setTitle] = useState('')
const [status, setStatus] = useState<any>($('#status').val())
    const {
        data:postCategory,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostCategoryQuery('categoriesList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
    const showEditForm = (modalData:modalDataProps)=>{
        setModalData(modalData);
        }


        useEffect(() => {
            dispatch(setPreloader(isLoading?true:false)) 
             
            }, [isLoading])

useEffect(() => {

            destroyDataTables($('#dataTable'))
              initDataTables($('#dataTable'),"All Post Category")
            return () => {
             destroyDataTables($('#dataTable'))
            }
          }, [postCategory])
    let tableContent
    if (isSuccess) {
        const { ids } = postCategory
    
        tableContent = ids?.length
            ? ids.map((categoryId:string|number ,i:number) => <PostCategoryTableData key={categoryId} categoryId={categoryId} index={i} showEditForm={showEditForm}/>
        )
            : null
         
    }
const [addNewPostCategory, {
  isSuccess:addNewCatSuccess,
  isError:addNewCatIsError,
  error:addNewCatError
}]:any = useAddNewPostCategoryMutation()

// const navigate = useNavigate()

React.useEffect(() => {
  if (isSuccess) {
      setTitle('')
  }
}, [isSuccess])

const canSave = [title, status].every(Boolean) && !isLoading

const createCategory = async(e:FormEvent)=>{
e.preventDefault();
 if (canSave) {
 await addNewPostCategory({title,status})
      if(isError) return showToast('error',JSON.stringify(addNewCatError?.data?.message))
    showToast('success', 'Post category created successfully')
  }

}
     return (
        <>
        <MainBody>
        <div className="container-fluid row">
            <div className="col-md-4 col-sm-12">
                <div className="card">
                    <div className="card-header font-weight-semibold">Create Category</div>
                    <div className="card-body">
                        <form id="createCategory" onSubmit={createCategory}>								
								<div className="form-group">						    
                                <label className="form-label"><strong>Title or Category</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                  />
							</div> 
                        <div className="form-group">
					 <label className="form-label"><strong>Status</strong></label>
                  <select
                    id="status"
                    className="default-select form-control wide"
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                  >
                   <option >Select</option>
                   <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                  </select>
				</div>
                <div className='text-right'>
                    <button type='submit' className='btn btn-secondary btn-sm' disabled={!canSave}  >Create</button>
                </div>
                        </form>
                        <div id="editCategory-holder">
                        {modalData?.showModal && <EditPostCategoryForm modalData={modalData} showEditForm={showEditForm}/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8 col-sm-12">
        
                         <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title fs-14 font-weight-semibold">All Post Category</h4>
                                </div>
                                <div className="card-body">
    
                                    <div className="mb-5 d-flex">
                                    
                                    </div>
                            <div className="table-responsive  fs-14">
                                        <table id="dataTable" className="table table-scrollable table-striped mt-10 table-bordered table-hover table-checkable order-column valign-middle border mb-0 align-items-centerid" style={{minWidth: '845px'}}>
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Title</th>
                                                    <th>Status</th>
                                                    <th>Date Created</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               
                                               
                                               {tableContent}
                                            
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
            </div>
        </div>
        </MainBody>
        </>
      )
    }
    

export default React.memo(PostCategory)