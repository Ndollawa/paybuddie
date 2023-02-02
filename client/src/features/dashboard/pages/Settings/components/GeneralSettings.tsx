import React,{FormEvent, FormEventHandler, useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";
import useInput from "../../../../../app/utils/hooks/useInput";
import { useGeneralSettingsMutation } from "../settingApiSlice";
import { setAppGeneralSetting, useSettings } from "../settingsConfigSlice";
import { useCompanyDetails } from "../settingsConfigSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
  
import { setPreloader } from "../../../components/PreloaderSlice";

const GeneralSettings = () => {
const dispatch = useDispatch();
const {_id} = useSelector(useSettings)
const {email,contact,zip,description,siteName,activeHours,city,state,country,address,facebookHandle,twitterHandle,instagram,whatsapp} = useSelector(useCompanyDetails);
const [generalSettings,isLoading] = useGeneralSettingsMutation();
// alert(_id)
// useEffect(()=>{
// dispatch(setPreloader(isLoading? true :false))
// },[isLoading])
const [companyName, setCompanyName, companyNameAttr] = useInput(siteName)
const [companyEmail, setCompanyEmail, companyEmailAttr] = useInput(email)
const [companyAddress, setCompanyAddress, companyAddressAttr] = useInput(address)
const [companyContact, setCompanyContact, companyContactAttr] = useInput(contact)
const [companyActiveHours, setCompanyActiveHours, companyActiveHoursAttr] = useInput(activeHours)
const [companyZipCode, setCompanyZipCode, companyZipCodeAttr] = useInput(zip)
const [companyCountry, setCompanyCountry, companyCountryAttr] = useInput(country)
const [companyState, setCompanyState, companyStateAttr] = useInput(state)
const [companyCity, setCompanyCity, companyCityAttr] = useInput(city)
const [companyFacebookHandle, setCompanyFacebookHandle, companyFacebookHandleAttr] = useInput(facebookHandle)
const [companyTwitterHandle, setCompanyTwitterHandle, companyTwitterHandleAttr] = useInput(twitterHandle)
const [companyInstagramHandle, setCompanyInstagramHandle, companyInstagramHandleAttr] = useInput(instagram)
const [companyWhatsapp, setCompanyWhatsapp, companyWhatsappAttr] = useInput(whatsapp)
const [companyDescription, setCompanyDescription, companyDescriptionAttr] = useInput(description)

const handleSubmit:FormEventHandler = async(e:FormEvent)=>{
e.preventDefault();
const data ={
      siteName:companyName,
      // logo:logo,
      // logoDark:logoDark,
      zip:companyZipCode,
      city:companyCity,
      state:companyState,
      country:companyCountry,
      description:companyDescription,
      email:companyEmail,
      contact:companyContact,
      address:companyAddress,
      activeHours:companyActiveHours,
      facebookHandle:companyFacebookHandle,
      twitterHandle:companyTwitterHandle,
      instagram:companyInstagramHandle,
      whatsapp:companyWhatsapp
  
  }
try{
  const res = await generalSettings({_id,data}).unwrap()
dispatch(setAppGeneralSetting(data))
toast.success("Settings Updated!",{
  position:"top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick:true,
  pauseOnHover:true,
  theme:'light',
})
} catch (error:any) {
  toast.error("Sorry an Error occured: "+JSON.stringify(error),{
    position:"top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick:true,
    pauseOnHover:true,
    theme:'light',
  })
}

}

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">General</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Company Name</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={companyName}
                    onChange={setCompanyName}
                    {...companyNameAttr}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Company Email</strong></label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=""
                    value={companyEmail}
                    onChange={setCompanyEmail}
                    {...companyEmailAttr}
                  />
                </div>
             
                
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Address</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={companyAddress}
                    onChange={setCompanyAddress}
                    {...companyAddressAttr}
                  />
                </div>
               
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Contact Number</strong></label>
                  <input
                    type="tel"
                    className="form-control"
                   
                    placeholder=""
                    value={companyContact}
                    onChange={setCompanyContact}
                    {...companyContactAttr}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>City</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="city"
                    value={companyCity}
                    onChange={setCompanyCity}
                    {...companyCityAttr}
                  />
                </div>
             
                <div className="mb-3 col-md-4">
                  <label className="form-label"><strong>State</strong></label>
                  <select
                    id="inputState"
                    className="default-select form-control wide"
                    value={companyState}
                    onChange={setCompanyState}
                    {...companyStateAttr}
                  >
                    <option value="">Choose...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="mb-3 col-md-2">
                  <label className="form-label"><strong>Zip</strong></label>
                  <input 
                  type="number" 
                  className="form-control"
                  value={companyZipCode}
                  onChange={setCompanyZipCode}
                  {...companyZipCodeAttr}
                   />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Country</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={companyCountry}
                    onChange={setCompanyCountry}
                    {...companyCountryAttr}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Active Hours</strong></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={companyActiveHours}
                    onChange={setCompanyActiveHours}
                    {...companyActiveHoursAttr}
                  />
                </div>
                 <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Facebook Handle</strong></label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://facebook.com/@companyName"
                    value={companyFacebookHandle}
                    onChange={setCompanyFacebookHandle}
                    {...companyFacebookHandleAttr}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Twitter Handle</strong></label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://twitter.com/@companyName"
                    value={companyTwitterHandle}
                    onChange={setCompanyTwitterHandle}
                    {...companyTwitterHandleAttr}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Instagram Handle</strong></label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://instagram.com/@companyName"
                    value={companyInstagramHandle}
                    onChange={setCompanyInstagramHandle}
                    {...companyInstagramHandleAttr}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label"><strong>Whatsapp</strong></label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://twhatsapp.com/@companyName"
                    value={companyWhatsapp}
                    onChange={setCompanyWhatsapp}
                    {...companyWhatsappAttr}
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <label className="form-label"><strong>Company's Description</strong></label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder=""
                    rows="10"
                    onChange={setCompanyDescription}
                    {...companyDescriptionAttr}> value={companyDescription}</textarea>
                
                </div>
              </div>
              <div className="card-footer d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Update Site Info
              </button></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralSettings;
