import React from 'react'

const NotificationList = () => {
  return (
    <ul className="contacts">
									<li className="name-first-letter">SEVER STATUS</li>
									<li className="active">
										<div className="d-flex bd-highlight">
											<div className="img_cont primary">KK</div>
											<div className="user_info">
												<span>David Nester Birthday</span>
												<p className="text-primary">Today</p>
											</div>
										</div>
									</li>
									<li className="name-first-letter">SOCIAL</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="img_cont success">RU<i className="icon fa-birthday-cake"></i></div>
											<div className="user_info">
												<span>Perfection Simplified</span>
												<p>Jame Smith commented on your status</p>
											</div>
										</div>
									</li>
									<li className="name-first-letter">SEVER STATUS</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="img_cont primary">AU<i className="icon fa fa-user-plus"></i></div>
											<div className="user_info">
												<span>AharlieKane</span>
												<p>Sami is online</p>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="img_cont info">MO<i className="icon fa fa-user-plus"></i></div>
											<div className="user_info">
												<span>Athan Jacoby</span>
												<p>Nargis left 30 mins ago</p>
											</div>
										</div>
									</li>
								</ul>
  )
}

export default React.memo(NotificationList)