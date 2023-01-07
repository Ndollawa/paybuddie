import React, { FormEvent, FormEventHandler } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { usePagesSettingsMutation } from '../settingApiSlice';
import { setPagesSetting } from '../settingsConfigSlice';
import Tinymce from '../../../../../app/utils/Tinymce'

const TermsCondition = () => {
const dispatch= useDispatch();
const [termsSettings,isLoading]=usePagesSettingsMutation();

const updateSetting:FormEventHandler = async(e:FormEvent)=>{
e.preventDefault()
try {
  await termsSettings({}).unwrap()
   dispatch(setPagesSetting({}))
} catch (error) {
  
}

}




  return (
    <div className="card">
    <div className="card-header">
      <h4 className="card-title">Terms and Conditions</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form onSubmit={updateSetting}>
          <div className='row'>
            
              <div className="col-md-12">

                  {/* <label><strong>Terms and Conditions</strong></label> */}
               
                  <Tinymce/>
              </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TermsCondition;