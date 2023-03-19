import React,{useState} from 'react'
import CreateUserForm from './CreateUserForm'
import UsersTableData from './UsersTableData'


    interface modalDataProps {
        data:{
           user:string;
       } | null,
       showModal:boolean,
     }
const UserTable = ({users}:any) => {

    const [modalData,setModalData] = useState<modalDataProps>({
        data:null, 
        showModal:false,
        })
  const showEditForm = (modalData:modalDataProps)=>{
         setModalData(modalData);
         }
 
  let tableContent
 
      tableContent = users?.ids?.length
          ? users?.ids.map((userId:string|number ,i:number) => <UsersTableData key={userId} userId={userId} index={i}
          showEditForm={showEditForm} />
      )
          : null
  return (
    <>  <div className="card">
                 <div className="mb-5 d-flex">
                                    
                                    {/* <CreateUserForm/> */}
                                    </div>
                         <div className="card-body">
                            <div className="table-responsive table-scrollable">
                                        <table id="table" className="table table-bordered table-hover table-checkable order-column valign-middle border mb-0 align-items-centerid" style={{minWidth: '845px'}}>
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Name</th>
                                                    <th>Username</th>
                                                    <th>Verification Status</th>
                                                    <th>Country</th>
                                                    <th>Account Status</th>
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
                        </>
  )
}

export default React.memo(UserTable)