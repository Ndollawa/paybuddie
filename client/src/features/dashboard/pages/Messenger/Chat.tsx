import React from 'react';
import MainBody from '../../components/MainBody';
import pageProps from '../../../../app/utils/props/pageProps';

const Chat:React.FC<pageProps> = ({pageData}:pageProps) => {
  return (
    <MainBody>
        <div className="row">
					<div className="col-xl-12">
						<div className="card">
							<div className="card-body chat-wrapper p-0">
								<div className="chat-hamburger">
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div className="chat-left-sidebar">
									<div className="d-flex chat-fix-search align-items-center">
										<img src="dashboard-assets/images/profile/pic1.jpg" alt="" className="rounded-circle me-3"/>
										<div className="input-group message-search-area">
											<input type="text" className="form-control" placeholder="Search here.."/>
											<div className="input-group-append">
												<button className="input-group-text"><i className="flaticon-381-search-2"></i></button>
											</div>
										</div>
									</div>
									<div className="card-action card-tabs">
										<ul className="nav nav-tabs style-3" role="tablist">
											<li className="nav-item">
												<a className="nav-link active" data-bs-toggle="tab" href="#AllMessage" role="tab" aria-selected="false">
													All Message
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" data-bs-toggle="tab" href="#Unread" role="tab" aria-selected="false">
													Unread
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link " data-bs-toggle="tab" href="#Archived" role="tab" aria-selected="true">
													Archived
												</a>
											</li>
										</ul>
									</div>
									<div className="card-body message-bx px-0 pt-3" >
										<div className="tab-content dz-scroll" id="message-bx">
											<div className="tab-pane fade show active" id="AllMessage" role="tabpanel">
												<div className="chat-list-area" data-chat="person1">
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
												</div>
												<div className="chat-list-area active" data-chat="person2">
													<div className="image-bx">
														<img src="dashboard-assets/images/users/pic2.jpg" alt="" className="rounded-circle img-1"/>
														<span className="active"></span>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Baby Joies">Baby Joies</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">Wasup for the third time like is you bling bitch</p>
													</div>
												</div>
												<div className="chat-list-area" data-chat="person3">
													<div className="image-bx">
														<img src="dashboard-assets/images/users/pic3.jpg" alt="" className="rounded-circle img-1"/>
														<span className="active"></span>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Alexendra jr.">Alexendra jr.</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">It is a long established fact that a reader will be distracted by the readable</p>
													</div>
												</div>
												<div className="chat-list-area" data-chat="person4">
													<div className="image-bx">
														<img src="dashboard-assets/images/users/pic4.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Alexa Hanery">Alexa Hanery</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">There are many variations of passages of Lorem Ipsum available, but the </p>
													</div>
												</div>
												<div className="chat-list-area" data-chat="person5">
													<div className="image-bx">
														<img src="dashboard-assets/images/users/pic5.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Roberto Charloz">Roberto Charloz</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">"But I must explain to you how all this mistaken idea of denouncing pleasure</p>
													</div>
												</div>
												<div className="chat-list-area" data-chat="person6">
													<div className="image-bx">
														<img src="dashboard-assets/images/users/pic6.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Verla Morgano">Verla Morgano</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>
												<div className="chat-list-area" data-chat="person7">
													<div className="image-bx">
														<img src="dashboard-assets/images/users/pic7.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Tinks Sr.">Tinks Sr.</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>
												<div className="chat-list-area" data-chat="person8">
													<div className="image-bx">
														<img src="dashboard-assets/images/users/pic8.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Hans man">Hans man</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>
												<div className="chat-list-area" data-chat="person9">
													<div className="image-bx">
														<img src="dashboard-assets/images/profile/Untitled-2.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Deeps Gr.">Deeps Gr.</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>
												<div className="chat-list-area" data-chat="person10">
													<div className="image-bx">
														<img src="dashboard-assets/images/profile/Untitled-2.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Sal Piggee">Sal Piggee</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>
											</div>
											<div className="tab-pane fade" id="Unread" role="tabpanel">
												<div className="chat-list-area" data-chat="person11">
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
												</div>
												<div className="chat-list-area" data-chat="person12">
													<div className="image-bx">
														<img src="dashboard-assets/images/users/pic2.jpg" alt="" className="rounded-circle img-1"/>
														<span className="active"></span>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Baby Joies">Baby Joies</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">Wasup for the third time like is you bling bitch</p>
													</div>
												</div>
												
											</div>
											<div className="tab-pane fade" id="Archived" role="tabpanel">
												<div className="chat-list-area active" data-chat="person13">
													<div className="image-bx">
														<img src="dashboard-assets/images/users/pic5.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Roberto Charloz">Roberto Charloz</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">"But I must explain to you how all this mistaken idea of denouncing pleasure</p>
													</div>
												</div>
												<div className="chat-list-area" data-chat="person14">
													<div className="image-bx">
														<img src="dashboard-assets/images/users/pic6.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="info-body">
														<div className="d-flex">
															<h6 className="text-black user-name mb-0 font-w600 fs-16" data-name="Verla Morgano">Verla Morgano</h6>
															<span className="ms-auto fs-14">25m ago</span>
														</div>
														<p className="">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="chart-right-sidebar">
									<div className="message-bx chat-box">
										<div className="d-flex justify-content-between chat-box-header">
											<div className="d-flex align-items-center">
												<img src="dashboard-assets/images/users/pic2.jpg" alt="" className="rounded-circle main-img me-3"/>
												<h5 className="text-black font-w500 mb-sm-1 mb-0 title-nm">Baby Joies</h5>
											</div>
											<div className="d-flex align-items-center">	
												<span className="d-sm-inline-block d-none">Last seen 4:23 AM</span>
												<div className="dropdown ms-2">
													<a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="../../www.w3.org/2000/svg.html">
															<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
															<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
															<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
														</svg>
													</a>
													<div className="dropdown-menu dropdown-menu-end">
														<a className="dropdown-item" href="javascript:void(0);">Edit</a>
														<a className="dropdown-item" href="javascript:void(0);">Delete</a>
													</div>
												</div>
											</div>	
										</div>
										<div className="chat-box-area dz-scroll" id="chartBox" style={{backgroundImage:"url('dashboard-assets/images/chat-bg.png')"}}>
											<div data-chat="person1" className="chat">
												<div className="media mb-4 received-msg  justify-content-start align-items-start">
													<div className="image-bx me-sm-3 me-2">
														<img src="dashboard-assets/images/users/pic5.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="message-received">
														<p className="mb-1">
															Sed ut perspiciatis unde omnis iste natus error
														</p>
														<span className="fs-12 text-black">4.30 AM</span>
													</div>
												</div>
												<div className="media mb-4 justify-content-end align-items-end">
													<div className="message-sent">
														<p className="mb-1">
															Neque porro quisquam est, qui dolorem ipsum quia
														</p>
														<span className="fs-12 text-black">9.30 AM</span>
													</div>
													<div className="image-bx ms-sm-3 ms-2 mb-4">
														<img src="dashboard-assets/images/profile/pic1.jpg" alt="" className="rounded-circle img-1"/>
													</div>
												</div>
												<div className="media mb-4  justify-content-end align-items-end">
													<div className="message-sent">
														<p className="mb-1">
															eum iure reprehenderit qui in ea
														</p>
														<span className="fs-12 text-black">9.30 AM</span>
													</div>
													<div className="image-bx ms-sm-3 ms-2 mb-4">
														<img src="dashboard-assets/images/profile/pic1.jpg" alt="" className="rounded-circle img-1"/>
													</div>
												</div>
												<div className="media received-msg justify-content-start align-items-start">
													<div className="image-bx me-sm-3 me-2">
														<img src="dashboard-assets/images/users/pic5.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="message-received">
														<p className="mb-1">
															Hey, check my design update last night.
														</p>
														<span className="fs-12 text-black">4.30 AM</span>
													</div>
												</div>
											</div>
											<div data-chat="person2" className="chat active-chat">
												<div className="media mb-4 received-msg  justify-content-start align-items-start">
													<div className="image-bx me-sm-3 me-2">
														<img src="dashboard-assets/images/users/pic2.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="message-received">
														<p className="mb-1">
															"But I must explain to you
														</p>
														<span className="fs-12 text-black">4.30 AM</span>
													</div>
												</div>
												<div className="media mb-4 justify-content-end align-items-end">
													<div className="message-sent">
														<p className="mb-1">
															"Sed ut perspiciatis unde omnis
														</p>
														<span className="fs-12 text-black">9.30 AM</span>
													</div>
													<div className="image-bx ms-sm-3 ms-2 mb-4">
														<img src="dashboard-assets/images/profile/pic1.jpg" alt="" className="rounded-circle img-1"/>
													</div>
												</div>
												<div className="media received-msg justify-content-start align-items-start">
													<div className="image-bx me-sm-3 me-2">
														<img src="dashboard-assets/images/users/pic2.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="message-received">
														<p className="mb-1">Tell me what you think and if that is OK.
														</p>
														<span className="fs-12 text-black">4.30 AM</span>
													</div>
												</div>
											</div>
											<div data-chat="person3" className="chat">
												<div className="media mb-4 received-msg  justify-content-start align-items-start">
													<div className="image-bx me-sm-3 me-2">
														<img src="dashboard-assets/images/users/pic5.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="message-received">
														<p className="mb-1">
															On the other hand, we denounce with righteous
														</p>
														<span className="fs-12 text-black">4.30 AM</span>
													</div>
												</div>
												<div className="media mb-4 justify-content-end align-items-end">
													<div className="message-sent">
														<p className="mb-1">
															These cases are perfectly simple and easy to distinguish.
														</p>
														<span className="fs-12 text-black">9.30 AM</span>
													</div>
													<div className="image-bx ms-sm-3 ms-2 mb-4">
														<img src="dashboard-assets/images/profile/pic1.jpg" alt="" className="rounded-circle img-1"/>
													</div>
												</div>
												<div className="media mb-4 justify-content-end align-items-end">
													<div className="message-sent">
														<p className="mb-1">
															 In a free hour, when our power of choice 
														</p>
														<span className="fs-12 text-black">9.30 AM</span>
													</div>
													<div className="image-bx ms-sm-3 ms-2 mb-4">
														<img src="dashboard-assets/images/profile/pic1.jpg" alt="" className="rounded-circle img-1"/>
													</div>
												</div>
												<div className="media received-msg justify-content-start align-items-start">
													<div className="image-bx me-sm-3 me-2">
														<img src="dashboard-assets/images/users/pic5.jpg" alt="" className="rounded-circle img-1"/>
													</div>
													<div className="message-received">
														<p className="mb-1">he rejects pleasures to secure other greater pleasures</p>
														<span className="fs-12 text-black">4.30 AM</span>
													</div>
												</div>
											</div>
											<div data-chat="person4" className="chat">
											</div>
											<div data-chat="person5" className="chat">
											</div>
											<div data-chat="person6" className="chat">
											</div>
											<div data-chat="person7" className="chat">
											</div>
											<div data-chat="person8" className="chat">
											</div>
											<div data-chat="person9" className="chat">
											</div>
											<div data-chat="person10" className="chat">
											</div>
											<div data-chat="person11" className="chat">
											</div>
											<div data-chat="person12" className="chat">
											</div>
											<div data-chat="person13" className="chat">
											</div>
											<div data-chat="person14" className="chat">
											</div>
										</div>
										<div className="card-footer border-0 type-massage">
											<div className="input-group">
												<input className="form-control" placeholder="Type message..." />
												<div className="input-group-append"> 
													<button type="button" className="btn p-0 me-3"><i className="las la-paperclip scale5 text-secondary"></i></button>
													<button type="button" className="btn p-0 me-3"><i className="las la-image scale5 text-secondary"></i></button>
													<button type="button" className="send-btn btn-primary btn">SEND</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> 
    </MainBody>
  )
}

export default Chat
