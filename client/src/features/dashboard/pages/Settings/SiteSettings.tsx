import React from 'react';
import MainBody from '../../components/MainBody';
import { Link, NavLink ,Outlet} from 'react-router-dom';


const SiteSettings = () => {
  return (
    <MainBody>
    <div className="row jumbotron"> 
            <div className='col-md-3 col-sm-12'>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Settings</h4>
                    </div>
                    <div className="card-body">
                        <div className="basic-list-group">
                            <div className="setting-nav-wrapper">
                                <div className="setting"><NavLink className="setting-nav" to="./general">General Setttings</NavLink></div>
                                <div className="setting"><NavLink className="setting-nav" to="./home-page">Home Page</NavLink></div>
                                <div className="setting"><NavLink className="setting-nav" to="./about-us">About Us</NavLink></div>
                                <div className="setting"><NavLink className="setting-nav" to="./privacy-and-policy">Privacy and Policy</NavLink></div>
                                <div className="setting"><NavLink className="setting-nav" to="./terms-and-conditions">Terms and Conditions</NavLink></div>
                                {/* <div className="setting"><NavLink className="setting-nav" to="./our-gallery">Our Gallery</NavLink></div> */}
                                <div className="setting"><NavLink className="setting-nav" to="./site-images">Site Images</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="col-md-9"> 
        <Outlet/>
      
        </div>
    </div>
</MainBody>
  )
}

export default SiteSettings