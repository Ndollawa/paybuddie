    import React,{useState,useEffect} from 'react'
    import MainBody from '../../components/MainBody'
    import { useDispatch } from 'react-redux'
    import { useGetUsersQuery } from './usersApiSlice'
    import { setPreloader } from '../../components/PreloaderSlice'
    import pageProps from '../../../../app/utils/props/pageProps'
    import UsersTable from './components/UsersTable'
    import useToggle from '../../../../app/utils/hooks/useToggle'
import UserCard from './components/UserCard'
import { FaListAlt } from 'react-icons/fa'
import { IoGridOutline } from 'react-icons/io5'
    

    


    const Users = ({pageData}:pageProps)  => {

// const [users, setusers] = useState<any>([])
    const [viewType,toggleViewType] = useToggle('viewType','List');
    const dispatch =useDispatch()
  
    const {
        data:users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('userList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
   
        useEffect(() => {
            dispatch(setPreloader(isLoading?true:false)) 
             
            }, [isLoading])
let usersCard
   if(isSuccess){
  usersCard = users.ids? users?.ids.map((userId:any)=> <UserCard key={userId}  userId={userId} />): null
   }
    const setView = ()=>{
        if(viewType){
        toggleViewType(false)
        }else{
        toggleViewType(true)
        }
    }
     return (
        <>
        <MainBody>
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
            <div className="card-body d-flex justify-content-between align-items-center">
								<div>
									<h4>Users {viewType? "List": "Card"} View</h4>
									<span>Lorem ipsum sit amet</span>
								</div>
								<button className="btn btn-info light" onClick={setView}>{viewType? <FaListAlt fontSize={'1.2rem'}/> : <IoGridOutline fontSize={'1.2rem'} />}</button>
							</div>
                            </div>
                       {viewType? 
                        isSuccess &&< UsersTable users={users} />
                        :
                          <>{ usersCard}</>
                          } 
                        </div>
                    </div>
        </MainBody>
        </>
      )
    }
    

export default React.memo(Users)