    import React,{useState,useEffect,useMemo} from 'react'
    import MainBody from '../../components/MainBody'
    import CreateFaqModal from './components/CreateServiceForm'
    import EditServiceForm from './components/EditServiceForm'
    import { useDispatch } from 'react-redux'
    import { useGetServicesQuery } from './servicesApiSlice'
    import { setPreloader } from '../../components/PreloaderSlice'
    import pageProps from '../../../../app/utils/props/pageProps'
    import ServiceTableData from './components/ServiceTableData'
    import serviceProps from '../../../../app/utils/props/serviceProps'
    import $ from 'jquery'
import ViewModal from './components/ViewModal'


    
interface modalDataProps {
        data:serviceProps | null,
      showModal:boolean,
    }
    const Service = ({pageData}:pageProps)  => {
          const {
        data:services,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetServicesQuery('servicesList', {
        pollingInterval: 1500,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
    const dispatch =useDispatch()
        const [modalData,setModalData] = useState<modalDataProps>({
            data:null, 
            showModal:false,
           })
           const [viewData,setViewData] = useState<modalDataProps>({
            data:null, 
            showModal:false,
           })
    const showEditForm = (modalData:modalDataProps)=>{
        setModalData(modalData);
        }

        const showDetails  = useMemo(()=>{ return (serviceData:modalDataProps)=>{
            setViewData(serviceData);
            }},[])
        useEffect(() => {
            dispatch(setPreloader(isLoading?true:false)) 
             
            }, [isLoading])

    let tableContent
    if (isSuccess) {
        const { ids } = services
    
        tableContent = ids?.length
            ? ids.map((serviceId:string|number ,i:number) => <ServiceTableData key={serviceId} serviceId={serviceId} index={i}
            showEditForm={showEditForm}  showDetails={showDetails} />
        )
            : null
         
    }
    
     return (
        <>
        <MainBody>
        <div className="container-fluid">
            <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">All Services</h4>
                                </div>
                                <div className="card-body">
    
                                    <div className="mb-5 d-flex">
                                    
                        <CreateFaqModal/>
                        <EditServiceForm modalData={modalData}/>
                        <ViewModal viewData={viewData}/>
                                    </div>
                            <div className="table-responsive table-scrollable">
                                        <table id="dataTable" className="table table-striped mt-10 table-bordered table-hover table-checkable order-column valign-middle border mb-0 align-items-centerid" style={{minWidth: '845px'}}>
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
    

export default React.memo(Service)