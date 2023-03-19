    import React,{useState,useEffect} from 'react'
    import MainBody from '../../components/MainBody'
    import CreateFaqModal from './components/CreateTeamForm'
    import EditTeamForm from './components/EditTeamForm'
    import { useDispatch } from 'react-redux'
    import { useGetTeamsQuery } from './teamApiSlice'
    import { setPreloader } from '../../components/PreloaderSlice'
    import pageProps from '../../../../app/utils/props/pageProps'
    import TeamTableData from './components/TeamTableData'
    
    

    
interface modalDataProps {
       data:{
          id:string | number;
          title: string;
          description: string;
          body: string;
          teamImage: string;
          status: string;
      } | null,
      showModal:boolean,
    }
    const Team = ({pageData}:pageProps)  => {
        const dispatch =useDispatch()
        const [modalData,setModalData] = useState<modalDataProps>({
            data:null, 
            showModal:false,
           })
    const {
        data:teams,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTeamsQuery('teamList', {
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
        const { ids } = teams
    
        tableContent = ids?.length
            ? ids.map((teamId:string|number ,i:number) => <TeamTableData key={teamId} teamId={teamId} index={i}
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
                                    <h4 className="card-title">All Teams</h4>
                                </div>
                                <div className="card-body">
    
                                    <div className="mb-5 d-flex">
                                    
                        <CreateFaqModal/>
                                    </div>
                            <div className="table-responsive table-scrollable">
                                        <table id="table" className="table table-bordered table-hover table-checkable order-column valign-middle border mb-0 align-items-centerid" style={{minWidth: '845px'}}>
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Bio</th>
                                                    <th>Status</th>
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
    

export default React.memo(Team)