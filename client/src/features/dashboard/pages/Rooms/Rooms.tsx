    import React,{useState,useEffect} from 'react'
    import MainBody from '../../components/MainBody'
    import CreateRoomModal from './components/CreateRoomForm'
    import EditRoomForm from './components/EditRoomForm'
    import { useDispatch } from 'react-redux'
    import { useGetRoomsQuery } from './roomApiSlice'
    import { setPreloader } from '../../components/PreloaderSlice'
    import pageProps from '../../../../app/utils/props/pageProps'
    import RoomTableData from './components/RoomsTableData'
    
    

    
interface modalDataProps {
       data:{
          id:string | number;
          title: string;
          description: string;
          body: string;
          roomImage: string;
          status: string;
      } | null,
      showModal:boolean,
    }
    const Rooms = ({pageData}:pageProps)  => {
        const dispatch =useDispatch()
        const [modalData,setModalData] = useState<modalDataProps>({
            data:null, 
            showModal:false,
           })
    const {
        data:rooms,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetRoomsQuery('roomList', {
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
console.log(rooms)
    let tableContent
    if (isSuccess) {
        const { ids } = rooms
    
        tableContent = ids?.length
            ? ids.map((roomId:string|number ,i:number) => <RoomTableData key={roomId} roomId={roomId} index={i}
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
                                    <h4 className="card-title">All Rooms</h4>
                                </div>
                                <div className="card-body">
    
                                    <div className="mb-5 d-flex">
                                    
                        <CreateRoomModal/>
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
                                                    <th>Members Count</th>
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
    

export default React.memo(Rooms)