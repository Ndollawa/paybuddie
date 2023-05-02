    import React,{useState,useEffect} from 'react'
    import MainBody from '../../components/MainBody'
    import CreateFaqModal from './components/CreateSlideForm'
    import EditSlideForm from './components/EditSlideForm'
    import { useDispatch } from 'react-redux'
    import { useGetSlidesQuery } from './slideApiSlice'
    import { setPreloader } from '../../components/PreloaderSlice'
    import pageProps from '../../../../app/utils/props/pageProps'
    import SlideTableData from './components/SlideTableData'
    import initDataTables,{destroyDataTables} from '../../../../app/utils/initDataTables'
    import $ from 'jquery'
    

    
interface modalDataProps {
       data:{
          _id:string | number;
          title: string;
          description: string;
          body: string;
          cto:{
            cto_text?:string;
            link?:string;
          }
          image: string;
          status: string;
      } | null,
      showModal:boolean,
    }
    const Slide = ({pageData}:pageProps)  => {
        const dispatch =useDispatch()
       const {
        data:slides,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSlidesQuery('slideList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
     const [modalData,setModalData] = useState<modalDataProps>({
            data:null, 
            showModal:false,
           })
    
    const showEditForm = (modalData:modalDataProps)=>{
        setModalData(modalData);
        }

        useEffect(() => {
            dispatch(setPreloader(isLoading?true:false)) 
             
            }, [isLoading])
            useEffect(() => {

                destroyDataTables($('#dataTable'))
                  initDataTables($('#dataTable'),"FAQs")
                return () => {
                 destroyDataTables($('#dataTable'))
                }
              }, [slides])

    let tableContent
    if (isSuccess && !isLoading) {
        const { ids } = slides
    
        tableContent = ids?.length
            ? ids.map((slideId:string ,i:number) =><SlideTableData key={slideId} slideId={slideId} index={i} showEditForm={showEditForm} />) 
            : null
    }
     return (
        <>
        <MainBody>
        <div className="container-fluid">
            <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">All Slides</h4>
                                </div>
                                <div className="card-body">
    
                                    <div className="mb-5 d-flex">
                                    
                        <CreateFaqModal/>
                                    </div>
                            <EditSlideForm modalData={modalData} />
                            <div className="table-responsive table-scrollable">
                                        <table id="dataTable" className="table table-striped mt-10 table-bordered table-hover table-checkable order-column valign-middle border mb-0 align-items-centerid" style={{minWidth: '845px'}}>
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Image</th>
                                                    <th>Title</th>
                                                    <th>Sub Heading</th>
                                                    <th>Description</th>
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
    

export default React.memo(Slide)