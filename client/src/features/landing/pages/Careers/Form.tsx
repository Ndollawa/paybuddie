import React from 'react'
import pageProps from '../../../../app/utils/props/pageProps'
import Breadcrum from '../../components/Breadcrum'


const Form:React.FC<pageProps> = ({pageData}:pageProps) => {


  return (
    <>
<Breadcrum pageData={pageData}/>


<section className="finloan-apply-one pt-120 pb-120">
    <div className="container">
        <form action="https://thegenius.co/html/finlon_new1/apply-now.php" method="post" className="form-one contact-one__form">
            <div className="contact-one__form-box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-title">
                            <p className="block-title__tagline">Calculate you loan amount</p>
                            <h2 className="block-title__title">Loan Details</h2>
                        </div>
                        {/* <!-- /.block-title--> */}
                    </div>
                    {/* <!-- /.col-md-12--> */}
                </div>
                {/* <!-- /.row--> */}

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Loan Amount*</label>
                            <input className="form-control" type="number" name="loanamount"  placeholder="Loan Amount" required />
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- /.col-md-6--> */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Monthly Income*</label>
                            <input className="form-control" type="number" name="income"  placeholder="Monthly Income" required />
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- /.col-md-6--> */}
                </div>
                {/* <!-- /.row--> */}

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Purpose of Loan</label>
                            <select name="purposeloan" className="form-control" required>
                                <option value="">Select Purpose of Loan</option>
                                <option value="Business">Business</option>
                                <option value="Home Purchase">Home Purchase</option>
                                <option value="Car Purchase">Car Purchase</option>
                                <option value="Holiday">Holiday</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Investment">Investment</option>
                                <option value="Payday Loan">Payday Loan</option>
                                <option value="Startup">Startup</option>
                                <option value="Other">Other</option>
                            </select>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- /.col-md-6--> */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Loan Years</label>
                            <select id="loanyears" name="loanyears" className="form-control" required>
                                <option value="">Select Loan Year</option>
                                <option value="6 Months">6 Months</option>
                                <option value="1 Year">1 Year</option>
                                <option value="2 Years">2 Years</option>
                                <option value="3 Years">3 Years</option>
                                <option value="4 Years">4 Years</option>
                                <option value="5 Years">5 Years</option>
                                <option value="6 Years">6 Years</option>
                                <option value="7 Years">7 Years</option>
                                <option value="8 Years">8 Years</option>
                                <option value="9 Years">9 Years</option>
                                <option value="10 Years">10 Years</option>
                                <option value="11 Years">11 Years</option>
                                <option value="12 Years">12 Years</option>
                                <option value="13 Years">13 Years</option>
                                <option value="14 Years">14 Years</option>
                                <option value="15+ Years">15+ Years</option>
                            </select>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- /.col-md-6--> */}
                </div>
                {/* <!-- /.row--> */}
            </div>
            {/* <!-- /.contact-one__form-box--> */}
            <div className="contact-one__form-box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-title pt-50">
                            <p className="block-title__tagline">Ask for More Details</p>
                            <h2 className="block-title__title">Personal Details</h2>
                        </div>
                        {/* <!-- /.block-title--> */}
                    </div>
                    {/* <!-- /.col-md-12--> */}
                </div>
                {/* <!-- /.row--> */}

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Full Name*</label>
                            <input className="form-control" type="text" name="yourname" placeholder="Full Name" required />
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- /.col-md-6--> */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email*</label>
                            <input className="form-control" type="email" name="your-email" placeholder="Your Email" required />
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- /.col-md-6--> */}
                </div>
                {/* <!-- /.row--> */}

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Mobile Number*</label>
                            <input className="form-control" type="number" name="phonenumber" placeholder="Mobile Number" required />
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- /.col-md-6--> */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Marital Status*</label>
                            <select name="maritalstatus" className="form-control" required>
                                 <option value="">Select Martial Status</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Co Habiting">Co Habiting</option>
                                <option value="Separated">Separated</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Civil Union">Civil Union</option>
                                <option value="Widowed">Widowed</option>
                                <option value="Partner">Partner</option>
                            </select>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- /.col-md-6-->                             */}
                </div>
                {/* <!-- /.row--> */}

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Birth Date*</label>
                            <input className="form-control" type="text" name="birthdate" placeholder="Birth Date" required />
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- /.col-md-6--> */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Taxpayer ID*</label>
                            <input className="form-control" type="number" name="taxpayer" placeholder="Taxpayer ID" required />
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- /.col-md-6-->            */}
                </div>
                {/* <!-- /.row--> */}
            </div>
            {/* <!-- /.contact-one__form-box--> */}
            <div className="contact-one__form-box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-title pt-50">
                            <p className="block-title__tagline">Other Details</p>
                            <h2 className="block-title__title">Other Details</h2>
                        </div>
                        {/* <!-- /.block-title--> */}
                    </div>
                    {/* <!-- /.col-md-12--> */}
                </div>
                {/* <!-- /.row--> */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Property Location*</label>
                            <input className="form-control" type="text" name="address" placeholder="Address" required /> 
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Employer Status*</label>
                            <select name="employer_status" className="form-control" required>
                                 <option value="">Select Employer Status</option>
                                <option value="Full Time Employed">Business</option>
                                <option value="Part Time Employed">Self Employed</option>
                                <option value="Self Employed">Government Job</option>
                                <option value="Temporarily Employed">Private Job</option
                                ><option value="Student">Student</option>
                                <option value="Pension">Other</option>
                            </select>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        {/* <!-- /.form-group--> */}
                    </div>
                    {/* <!-- col-md-6 --> */}
                    <div className="col-md-12">
                        <input type="submit" value="Submit" className="thm-btn" />
                    </div>
                </div>
                {/* <!-- row --> */}
            </div>
            {/* <!-- contact-one__form-box --> */}
        </form>
        {/* <!-- /.contact-one__form--> */}
    </div>
    {/* <!-- /.container--> */}
</section>
{/* <!-- /.contact-one--> */}
    </>
  )
}

export default React.memo(Form)
