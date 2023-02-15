import React from 'react'
import pageProps from '../../../../app/utils/props/pageProps'
import MainBody from '../../components/MainBody'
import { useGetUsersQuery } from './usersApiSlice'

const Users:React.FC<pageProps> = ({pageData}:pageProps)  => {
  
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetUsersQuery('userList', {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
})

  return (
    <MainBody>
      <div className="container-fluid">
  <div className="row">
					<div className="col-xl-12">
						<div className="card">
							<div className="card-body d-flex justify-content-between align-items-center">
								<div>
									<h4>User Card View</h4>
									<span>Lorem ipsum sit amet</span>
								</div>
								<a href="javascript:void(0);" className="btn btn-info light">+ Add Card</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic1.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Thomas Djons</a></h5>
										<span className="text-primary">Senior Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-success btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3 rounded-circle">
										<img src="images/users/pic2.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Oliver Jean</a></h5>
										<span className="text-info">Junior Developer</span>
									</div>
								</div>
								<p className="fs-12">Maintain inventory of supplies and order new stock as needed Maintain inventory stock</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-primary btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<span className="icon-placeholder bg-primary text-white">pm</span>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Post Melone</a></h5>
										<span className="text-success">Senior Designer</span>
									</div>
								</div>
								<p className="fs-12">Anticipate guests needs in order to accommodate them and provide an exceptional guest experience</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-secondary btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media rounded-circle me-3">
										<span className="icon-placeholder bgl-success text-success">km</span>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Kevin Mandala</a></h5>
										<span className="text-danger">Junior Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-info btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic3.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Mc. Kowalski</a></h5>
										<span className="text-info">Php Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-info light btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic4.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Rio Fernandez</a></h5>
										<span className="text-danger">Python Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-success btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic5.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Chintya Laudia</a></h5>
										<span className="text-warning">NodeJs Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-warning light btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic6.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">James Junaidi</a></h5>
										<span className="text-primary">Senior Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-primary light btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic7.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Keanu Repes</a></h5>
										<span className="text-primary">Senior Designer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-outline-danger btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic8.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Tonni Sblak</a></h5>
										<span className="text-primary">Senior Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-outline-success btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<span className="icon-placeholder bg-primary text-white">jk</span>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">John Kipli</a></h5>
										<span className="text-primary">Senior Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-outline-warning btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<span className="icon-placeholder bg-primary text-white">mo</span>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Monalisa</a></h5>
										<span className="text-primary">Senior Head</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-outline-info btn-xs">Write Message</a>
							</div>
						</div>
					</div>
				</div>    <div className="row">
					<div className="col-xl-12">
						<div className="card">
							<div className="card-body d-flex justify-content-between align-items-center">
								<div>
									<h4>User Card View</h4>
									<span>Lorem ipsum sit amet</span>
								</div>
								<a href="javascript:void(0);" className="btn btn-info light">+ Add Card</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic1.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Thomas Djons</a></h5>
										<span className="text-primary">Senior Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-success btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3 rounded-circle">
										<img src="images/users/pic2.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Oliver Jean</a></h5>
										<span className="text-info">Junior Developer</span>
									</div>
								</div>
								<p className="fs-12">Maintain inventory of supplies and order new stock as needed Maintain inventory stock</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-primary btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<span className="icon-placeholder bg-primary text-white">pm</span>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Post Melone</a></h5>
										<span className="text-success">Senior Designer</span>
									</div>
								</div>
								<p className="fs-12">Anticipate guests needs in order to accommodate them and provide an exceptional guest experience</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-secondary btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media rounded-circle me-3">
										<span className="icon-placeholder bgl-success text-success">km</span>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Kevin Mandala</a></h5>
										<span className="text-danger">Junior Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-info btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic3.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Mc. Kowalski</a></h5>
										<span className="text-info">Php Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-info light btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic4.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Rio Fernandez</a></h5>
										<span className="text-danger">Python Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-success btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic5.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Chintya Laudia</a></h5>
										<span className="text-warning">NodeJs Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-warning light btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic6.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">James Junaidi</a></h5>
										<span className="text-primary">Senior Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-primary light btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic7.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Keanu Repes</a></h5>
										<span className="text-primary">Senior Designer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-outline-danger btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<img src="images/users/pic8.jpg" alt=""/>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Tonni Sblak</a></h5>
										<span className="text-primary">Senior Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-outline-success btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<span className="icon-placeholder bg-primary text-white">jk</span>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">John Kipli</a></h5>
										<span className="text-primary">Senior Developer</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-outline-warning btn-xs">Write Message</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3">
										<span className="icon-placeholder bg-primary text-white">mo</span>
									</div>
									<div>
										<h5 className="title"><a href="javascript:void(0);">Monalisa</a></h5>
										<span className="text-primary">Senior Head</span>
									</div>
								</div>
								<p className="fs-12">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2">example@gmail.com</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2">1238545644</span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">Indonasia</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<a href="javascript:void(0);" className="btn btn-outline-info btn-xs">Write Message</a>
							</div>
						</div>
					</div>
				</div>
      </div>
    </MainBody>
  )
}

export default Users
