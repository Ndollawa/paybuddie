import React from 'react'

const ChatList = () => {

    
    return(
  <div className="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
  <ul className="contacts">
      <li className="name-first-letter">A</li>
      <li className="active dz-chat-user">
          <div className="d-flex bd-highlight">
              <div className="img_cont">
                  <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt=""/>
                  <span className="online_icon"></span>
              </div>
              <div className="user_info">
                  <span>Archie Parker</span>
                  <p>Kalid is online</p>
              </div>
          </div>
      </li>
      <li className="dz-chat-user">
          <div className="d-flex bd-highlight">
              <div className="img_cont">
                  <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt=""/>
                  <span className="online_icon offline"></span>
              </div>
              <div className="user_info">
                  <span>Alfie Mason</span>
                  <p>Taherah left 7 mins ago</p>
              </div>
          </div>
      </li>
     
  </ul>
</div>
  )
}

export default React.memo(ChatList)