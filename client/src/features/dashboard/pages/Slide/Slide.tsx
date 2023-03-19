    import React,{useState,useEffect} from 'react'
    import MainBody from '../../components/MainBody'
    import CreateFaqModal from './components/CreateSlideForm'
    import EditSlideForm from './components/EditSlideForm'
    import { useDispatch } from 'react-redux'
    import { useGetSlidesQuery } from './slideApiSlice'
    import { setPreloader } from '../../components/PreloaderSlice'
    import pageProps from '../../../../app/utils/props/pageProps'
    import SlideTableData from './components/SlideTableData'
    
    

    
interface modalDataProps {
       data:{
          id:string | number;
          title: string;
          description: string;
          body: string;
          slideImage: string;
          status: string;
      } | null,
      showModal:boolean,
    }
    const Slide = ({pageData}:pageProps)  => {
        const dispatch =useDispatch()
        const [modalData,setModalData] = useState<modalDataProps>({
            data:null, 
            showModal:false,
           })
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
    const showEditForm = (modalData:modalDataProps)=>{
        setModalData(modalData);
        }

        useEffect(() => {
            dispatch(setPreloader(isLoading?true:false)) 
             
            }, [isLoading])

    let tableContent
    if (isSuccess && !isLoading) {
        const { ids } = slides
    
        tableContent = ids?.length
            ? ids.map((slideId:string|number ,i:number) =>{ return <><SlideTableData key={slideId} slideId={slideId} index={i} showEditForm={showEditForm} /></> }) : null
    }
    console.log(tableContent)
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
                                        <table id="table" className="table table-bordered table-hover table-checkable order-column valign-middle border mb-0 align-items-centerid" style={{minWidth: '845px'}}>
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Image</th>
                                                    <th>Title</th>
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