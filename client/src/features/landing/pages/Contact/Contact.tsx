import React from 'react'
import pageProps from '../../../../app/utils/props/pageProps'
import Breadcrum from '../../components/Breadcrum'
import { useSelector } from 'react-redux';
import {useCompanyDetails} from '../../../dashboard/pages/Settings/settingsConfigSlice';


const Contact :React.FC<pageProps> = ({pageData}:pageProps) => {
    const {siteName,logo,address,email,contact,description,activeHours,facebookHandle,twitterHandle,instagram,whatsapp} = useSelector(useCompanyDetails);
 



    return (
      <>
  <Breadcrum pageData={pageData}/>


<section className="contact-one pt-120 pb-120">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="contact-one__content">
                    <div className="block-title">
                        <p className="block-title__tagline">contact</p>
                        {/* <!-- /.block-title__tagline --> */}
                        <h2 className="block-title__title">Feel free to get
                            in touch</h2>
                            {/* <!-- /.block-title__title --> */}
                    </div>
                    {/* <!-- /.block-title --> */}
                    <p className="contact-one__text">There are many variations of passages of lorem ipsum available the
                        majority have alteration in some form by injected humour.</p>
                        {/* <!-- /.contact-one__text --> */}
                    <div className="contact-one__social">
                    {twitterHandle && <a href={twitterHandle}><i className="fab fa-twitter"></i></a>}
                            {facebookHandle && <a href={facebookHandle}><i className="fab fa-facebook"></i></a>}
                            {whatsapp && <a href={whatsapp}><i className="fab fa-whatsapp"></i></a>} 
                            {instagram && <a href={instagram}><i className="fab fa-instagram"></i></a>} 
                    </div>
                    {/* <!-- /.contact-one__social --> */}
                </div>
                {/* <!-- /.contact-one__content --> */}
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-8">
                <form action="https://thegenius.co/html/finlon_new1/assets/sendemail.php" className="form-one contact-form-validated">
                    <div className="row row-gutter-y-20 row-gutter-x-20 g-4">
                        <div className="col-md-6">
                            <input className="form-control" type="text" placeholder="Full name" name="name"/>
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                        <div className="col-md-6">
                            <input className="form-control" type="email" placeholder="Email address" name="email"/>
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                        <div className="col-md-6">
                            <input className="form-control" type="text" placeholder="Phone number" name="phone"/>
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                        <div className="col-md-6">
                            <input className="form-control" type="text" placeholder="Subject" name="subject"/>
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                        <div className="col-md-12">
                            <textarea placeholder="Message" name="message"></textarea>
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                        <div className="col-md-12">
                            <button type="submit" className="thm-btn">Send a Message</button>
                            {/* <!-- /.thm-btn --> */}
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </form>
            </div>
            {/* <!-- /.col-lg-8 --> */}
        </div>
        {/* <!-- /.row --> */}
    </div>
    {/* <!-- /.container --> */}
</section>
{/* <!-- /.contact-one --> */}

<section className="contact-info-one">
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <div className="contact-info-one__item">
                    <div className="contact-info-one__icon">
                        <i className="icon-telephone"></i>
                    </div>
                    {/* <!-- /.contact-info-one__icon --> */}
                    <div className="contact-info-one__content">
                        <p className="contact-info-one__text">Have any question?</p>
                        {/* <!-- /.contact-info-one__text --> */}
                        <a className="contact-info-one__link" href={`tel:${contact}`}>{contact}</a>
                    </div>
                    {/* <!-- /.contact-info-one__content --> */}
                </div>
                {/* <!-- /.contact-info-one__item --> */}
            </div>
            {/* <!-- /.col-md-4 col-sm-12 --> */}
            <div className="col-md-4 col-sm-12">
                <div className="contact-info-one__item">
                    <div className="contact-info-one__icon">
                        <i className="icon-email"></i>
                    </div>
                    {/* <!-- /.contact-info-one__icon --> */}
                    <div className="contact-info-one__content">
                        <p className="contact-info-one__text">Write us email</p>
                        {/* <!-- /.contact-info-one__text --> */}
                        <a className="contact-info-one__link" href={`mailto:${email}`}>{email}</a>
                    </div>
                    {/* <!-- /.contact-info-one__content --> */}
                </div>
                {/* <!-- /.contact-info-one__item --> */}
            </div>
            {/* <!-- /.col-md-4 col-sm-12 --> */}
            <div className="col-md-4 col-sm-12">
                <div className="contact-info-one__item">
                    <div className="contact-info-one__icon">
                        <i className="icon-pin"></i>
                    </div>
                    {/* <!-- /.contact-info-one__icon --> */}
                    <div className="contact-info-one__content">
                        <p className="contact-info-one__text">Visit anytime</p>
                        {/* <!-- /.contact-info-one__text --> */}
                        <address className="contact-info-one__link">{address}</address>
                    </div>
                    {/* <!-- /.contact-info-one__content --> */}
                </div>
                {/* <!-- /.contact-info-one__item --> */}
            </div>
            {/* <!-- /.col-md-4 col-sm-12 --> */}
        </div>
        {/* <!-- /.row --> */}
    </div>
    {/* <!-- /.container --> */}
</section>
{/* <!-- /.contact-info-one --> */}

<div className="google-map__default">
    <iframe title="template google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="map__default" allowFullScreen></iframe>
</div>

{/* <!-- /.google-map --> */}
    </>
  )
}

export default React.memo(Contact)
