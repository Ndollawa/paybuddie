import React from 'react'

const NotesList = () => {
  return (
    <ul className="contacts">
									<li className="active">
										<div className="d-flex bd-highlight">
											<div className="user_info">
												<span>New order placed..</span>
												<p>10 Aug 2020</p>
											</div>
											<div className="ms-auto">
												<a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
												<a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="user_info">
												<span>Youtube, a video-sharing website..</span>
												<p>10 Aug 2020</p>
											</div>
											<div className="ms-auto">
												<a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
												<a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="user_info">
												<span>john just buy your product..</span>
												<p>10 Aug 2020</p>
											</div>
											<div className="ms-auto">
												<a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
												<a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="user_info">
												<span>Athan Jacoby</span>
												<p>10 Aug 2020</p>
											</div>
											<div className="ms-auto">
												<a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
												<a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
								</ul>
  )
}

export default React.memo(NotesList)