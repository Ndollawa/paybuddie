import React, { FormEvent,FormEventHandler } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Tinymce from '../../../../../app/utils/Tinymce'
import { usePagesSettingsMutation } from '../settingApiSlice';
import { setPagesSetting } from '../settingsConfigSlice';
import { usePages } from '../settingsConfigSlice';


const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  const [policySetting,isLoading] = usePagesSettingsMutation();
  
const updateSetting:FormEventHandler = async(e:FormEvent)=>{
  e.preventDefault();
  try {
    await  policySetting({}).unwrap();
   dispatch(setPagesSetting({})) 

  } catch (error) {
    
  }
}


  return (
    <div className="card">
    <div className="card-header">
      <h4 className="card-title">Privacy  and Policy</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form onSubmit={updateSetting}>
          <div className='row'>
          
              <div className="col-md-12">

                  {/* <label><strong>Privacy and Policy</strong></label>
                */}
                  <Tinymce/>
              </div>
              <div className="card-footer">
                  <button type="submit" className="btn btn-primary btn-sm">Save</button>
                </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy;