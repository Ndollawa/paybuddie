import React from 'react'

const ChatUser = () => {
  const user =(<div className="chat-list-area" data-chat="person1">
  <div className="image-bx">
    <img src="dashboard-assets/images/users/pic1.jpg" alt="" className="rounded-circle img-1"/>
    <span className="active"></span>
  </div>
  <div className="info-body">
    <div className="d-flex">
      <h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Harry Marten">Harry Marten</h6>
      <span className="ms-auto fs-14">25m ago</span>
    </div>
    <p className="">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
  </div>
</div>) 
  return (
    <>{user}</>
  )
}

export default React.memo(ChatUser)