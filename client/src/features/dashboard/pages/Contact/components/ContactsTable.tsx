import React,{useState} from 'react'
import CreateContactForm from './CreateContactForm'
import ContactsTableData from './ContactsTableData'


    interface modalDataProps {
        data:{
           contact:string;
       } | null,
       showModal:boolean,
     }
const ContactsTable = ({contacts}:any) => {

    const [modalData,setModalData] = useState<modalDataProps>({
        data:null, 
        showModal:false,
        })
  const showEditForm = (modalData:modalDataProps)=>{
         setModalData(modalData);
         }
 
  let tableContent
 
      tableContent = contacts?.ids?.length
          ? contacts?.ids.map((contactId:string|number ,i:number) => <ContactsTableData key={contactId} contactId={contactId} index={i}
          showEditForm={showEditForm} />
      )
          : null
  return (
    <>  <div className="card">
                 <div className="mb-5 d-flex">
                                    
                                    {/* <CreateContactForm/> */}
                                    </div>
                         <div className="card-body">
                            <div className="table-responsive table-scrollable">
                                        <table id="table" className="table table-striped mt-10 table-bordered table-hover table-checkable order-column valign-middle border mb-0 align-items-centerid" style={{minWidth: '845px'}}>
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Name</th>
                                                    <th>Contactname</th>
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

export default React.memo(ContactsTable)