import React,{FormEvent,FormEventHandler} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { usePagesSettingsMutation } from '../../../../app/appConfigApiSlice';
import { setPagesSetting } from '../../../../app/appConfigSlice';

import Tinymce from '../../../../../app/utils/Tinymce'

const AboutUs = () => {
  const dispatch= useDispatch();
const [aboutUsSettings,isLoading]=usePagesSettingsMutation();

const updateSetting:FormEventHandler = async(e:FormEvent)=>{
e.preventDefault()
try {
  await aboutUsSettings({}).unwrap()
   dispatch(setPagesSetting({}))
} catch (error) {
  
}

}

  return (
    <div className="card">
    <div className="card-header">
      <h4 className="card-title">About Us</h4>
    </div>
    <div className="card-body">
      <div className="basic-form">
        <form onSubmit={updateSetting}>
          <div className='row'>
             
              <div className="col-md-12">

                  {/* <label><strong>About Us</strong></label> */}
               
                  <Tinymce/>
              </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AboutUs