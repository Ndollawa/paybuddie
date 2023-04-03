    import React,{useState,useEffect} from 'react'
    import MainBody from '../../components/MainBody'
    import CreateFaqModal from './components/CreateServiceForm'
    import EditServiceForm from './components/EditServiceForm'
    import { useDispatch } from 'react-redux'
    import { useGetServicesQuery } from './serviceApiSlice'
    import { setPreloader } from '../../components/PreloaderSlice'
    import pageProps from '../../../../app/utils/props/pageProps'
    import ServiceTableData from './components/ServiceTableData'
    
    

    
interface modalDataProps {
       data:{
          id:string | number;
          title: string;
          description: string;
          body: string;
          serviceImage: string;
          status: string;
      } | null,
      showModal:boolean,
    }
    const Service = ({pageData}:pageProps)  => {
        const dispatch =useDispatch()
        const [modalData,setModalData] = useState<modalDataProps>({
            data:null, 
            showModal:false,
           })
    const {
        data:services,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetServicesQuery('serviceList', {
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
    if (isSuccess) {
        const { ids } = services
    
        tableContent = ids?.length
            ? ids.map((serviceId:string|number ,i:number) => <ServiceTableData key={serviceId} serviceId={serviceId} index={i}
            showEditForm={showEditForm} />
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
                                    </div>
                            <div className="table-responsive table-scrollable">
                                        <table id="table" className="table table-striped mt-10 table-bordered table-hover table-checkable order-column valign-middle border mb-0 align-items-centerid" style={{minWidth: '845px'}}>
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