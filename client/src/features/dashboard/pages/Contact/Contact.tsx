import React from 'react'
import MainBody from '../../components/MainBody'

const Contact = () => {
  return (
    <MainBody>
        <div className="container-fluid">
				
				<div className="project-nav">
					<div className="card-action card-tabs  me-auto mb-md-0 mb-3">
						<ul className="nav nav-tabs style-2">
							<li className="nav-item">
								<a href="#navpills-1" className="nav-link" data-bs-toggle="tab" aria-expanded="false">All Contacs <span className="badge badge-primary shadow-primary">154</span></a>
							</li>
							<li className="nav-item">
								<a href="#navpills-2" className="nav-link active" data-bs-toggle="tab" aria-expanded="false">Pending Invitation <span className="badge shadow-warning  badge-warning">6</span></a>
							</li>	
						</ul>
					</div>
					
					
					<div className="d-flex align-items-center">
						<a href="javascript:void(0);" id="btn-add-contact" className="btn btn-primary text-white">+ New Contacts</a>
					</div>
				</div>
				{/* <!-- Modal --> */}
				<div className="modal fade" id="addContactModal" tabIndex={-1} aria-labelledby="addContactModalTitle" style={{display:"none"}} aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title fs-20">Add Contact</h4>
								<button type="button" className="close" data-bs-dismiss="modal"><span>×</span>
								</button>
							</div>
							<div className="modal-body">
								<i className="flaticon-cancel-12 close" data-bs-dismiss="modal"></i>
								<div className="add-contact-box">
									<div className="add-contact-content">
										<form id="addContactModalTitle">
											<div className="image-placeholder">
												<div className="avatar-edit">
													<input type="file" id="imageUpload" accept=".png, .jpg, .jpeg"/>
													<label htmlFor="imageUpload"></label>
												</div>
												<div className="avatar-preview">
													<div id="imagePreview" style={{backgroundImage: "url('images/contacts/user.jpg')"}}>
													</div>
												</div>
											</div>
											<div className="form-group">
												<label className="text-black font-w500">Name</label>
												<div className="contact-name">
													<input type="text" id="c-name" className="form-control" placeholder="Name"/>
													<span className="validation-text" style={{display:"none"}}></span>
												</div>
											</div>
											<div className="form-group">
												<label className="text-black font-w500">Occupation</label>
												<div className="contact-occupation">
													<input type="text" id="c-occupation" className="form-control" placeholder="Occupation"/>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button id="btn-edit" className="float-left btn btn-primary" style={{display:"none"}}>Save</button>

								<button className="btn btn-danger" data-bs-dismiss="modal"> <i className="flaticon-delete-1"></i> Discard</button>

								<button id="btn-add" className="btn btn-primary">Add</button>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-content">
					<div className="tab-pane fade" id="navpills-1">
						<div className="row dz-scroll loadmore-content searchable-items list ps" id="allContactListContent">
							<div className="items items-header-section">
							</div>
							
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic1.jpg" data-src="images/users/pic1.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Alan Green">Alan Green</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="UI Designer">UI Designer</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
								
								
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<span className="icon-placeholder bgl-success rounded-circle text-success">am</span>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Angela Moss">Angela Moss</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Redblue Studios">Redblue Studios</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic2.jpg" data-src="images/users/pic2.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Brian Samuel">Brian Samuel</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Team Management">Team Management</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<span className="icon-placeholder bgl-primary rounded-circle text-primary">Bc</span>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Benny Chagur">Benny Chagur</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Highspeed Inc.">Highspeed Inc.</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic3.jpg" data-src="images/users/pic3.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Chyntia Lawra">Chyntia Lawra</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Zero Two Studios">Zero Two Studios</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic4.jpg" data-src="images/users/pic4.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Cloe Simatupang">Cloe Simatupang</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Zero Two Studios">Zero Two Studios</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic5.jpg" data-src="images/users/pic5.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Engeline O’conner">Engeline O’conner</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="UI Designer">Beep Beep Inc.</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<span className="icon-placeholder bgl-info rounded-circle text-info">jr</span>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Franklin Jr.">Franklin Jr.</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Zero Two Studios">Zero Two Studios</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic6.jpg" data-src="images/users/pic6.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Geovanny">Geovanny</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="UI Designer">UI Designer</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<span className="icon-placeholder bgl-info rounded-circle text-info">hc</span>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Henry Charlotte">Henry Charlotte</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="UI Designer">UI Designer</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic7.jpg" data-src="images/users/pic7.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Ivankov Shee">Ivankov Shee</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="UI Designer">UI Designer</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic8.jpg" data-src="images/users/pic8.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Nindy Leeacovic">Nindy Leeacovic</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="UI Designer">UI Designer</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						<div className="ps__rail-x" style={{left: "0px", bottom:"0px"}}><div className="ps__thumb-x" tabIndex={0} style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px"}}><div className="ps__thumb-y" tabIndex={0} style={{top: "0px", height: "0px"}}></div></div></div>
						<div className="row mb-5">
							<div className="col-xl-12 d-flex justify-content-center">
								<a href="javascript:void(0);" className="btn btn-outline-primary dz-load-more" id="allContactList" rel="ajax/contact-list.html">Load More</a>
							</div>
						</div>
					</div>
					<div className="tab-pane fade active show" id="navpills-2">
						<div className="row dz-scroll loadmore-content ps" id="pendingListContent">
							<div className="items items-header-section">
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic2.jpg" data-src="images/users/pic2.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Brian Samuel">Brian Samuel</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Team Management">Team Management</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<span className="icon-placeholder bgl-primary rounded-circle text-primary">Bc</span>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Benny Chagur">Benny Chagur</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Highspeed Inc.">Highspeed Inc.</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic3.jpg" data-src="images/users/pic3.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Chyntia Lawra">Chyntia Lawra</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Zero Two Studios">Zero Two Studios</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic4.jpg" data-src="images/users/pic4.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Cloe Simatupang">Cloe Simatupang</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Zero Two Studios">Zero Two Studios</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src="images/users/pic5.jpg" data-src="images/users/pic5.jpg" alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Engeline O’conner">Engeline O’conner</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="UI Designer">Beep Beep Inc.</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="javascript:void(0);">Edit</a>
													<a className="dropdown-item delete" href="javascript:void(0);">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<span className="icon-placeholder bgl-info rounded-circle text-info">jr</span>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Franklin Jr.">Franklin Jr.</a></h6>
											<p className="fs-14 mb-3 user-work" data-occupation="Zero Two Studios">Zero Two Studios</p>
											<ul>
												<li><a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
												<li><a href="javascript:void(0);"><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						<div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabIndex={0} style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px"}}><div className="ps__thumb-y" tabIndex={0} style={{top: "0px", height: "0px"}}></div></div></div>
						<div className="row mb-5">
							<div className="col-xl-12 d-flex justify-content-center">
								<a href="javascript:void(0);" className="btn btn-outline-primary dz-load-more" id="pendingList" rel="ajax/contact-list.html">Load More</a>
							</div>
						</div>
					</div>
				</div>
        </div>

    </MainBody>
  )
}

export default Contact