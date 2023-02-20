import React, {useState,useEffect,FormEvent,ChangeEvent, useRef} from 'react'
import MainBody from '../../components/MainBody'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../auth/authSlice'
import useUserImage from '../../../../app/utils/hooks/useUserImage'
import {FaPencilAlt} from 'react-icons/fa'
import showToast from '../../../../app/utils/hooks/showToast'
import { useUpdateUserMutation } from '../Users/usersApiSlice'
import { useCheckDuplicateUserMutation } from '../Users/usersApiSlice'
import { useUploadFileMutation } from '../Users/usersApiSlice'
// username regex must start with a lowercase or uppercase laters and must be followed by lower or uppercase or digits,- or _ of 3 to 23 characters
const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
// requires atleast 0ne uppercase, lowercase,digit, special character and a total of 8 t0 24 characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

interface Messages{
    type:string,
    msg:string
}

const ProfileEdit = () => {
    const currentUser = useSelector(selectCurrentUser)
    const userImage = useUserImage(currentUser)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState(currentUser.email)
    const [username, setUsername] = useState(currentUser.username)
    const [firstName, setFirstName] = useState(currentUser.firstName)
    const [lastName, setLastName] = useState(currentUser.lastName)
    const [phone, setPhone] = useState(currentUser.phone)
    const [dob, setDob] = useState(currentUser.dob)
    const [gender, setGender] = useState(currentUser.gender)
    const [address, setAddress] = useState(currentUser.address)
    const [city, setCity] = useState(currentUser.city)
    const [state, setState] = useState(currentUser.state)
    const [country, setCountry] = useState(currentUser.country)
    const [occupation, setOccupation] = useState(currentUser.occupation)
    const [bio, setBio] = useState(currentUser.bio)
	
    const [validMatch,setValidMatch] = useState(false);
    const userRef = useRef <HTMLInputElement>(null);
    const emailRef = useRef <HTMLInputElement>(null);
    const [validName,setValidName] = useState(false);
    const [validEmail,setValidEmail] = useState(false);

    const [invalidEmailInput,setInvalidEmailInput] = useState(false);
    const [invalidNameInput,setInvalidNameInput] = useState(false);

    const [validPwd,setValidPwd] = useState(false);

	const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error:updateUserError
    }] = useUpdateUserMutation()
	const [checkDuplicateUser,{
		error:checkDuplicateUserError,
		data:response,
		isLoading:isCheckDuplicateUserLoading,
		isError:isCheckDuplicateUserError,
		isSuccess:isCheckDuplicateUserSuccess
	}] = useCheckDuplicateUserMutation();
	 
	const checkDuplicate = async (key:string) =>{
	  const data ={ user:key }
		   await checkDuplicateUser({data})
		
		if(!checkDuplicateUserError  && isCheckDuplicateUserSuccess && !isCheckDuplicateUserLoading){
			if(response.message === 'available'){
				showToast('success',`${key} Available`)
	
			}else if(response.message === 'taken'){
				showToast('error',`${key} Taken`)
				if(EMAIL_REGEX.test(email!)){
					setInvalidEmailInput(true)
				}else{
					setInvalidNameInput(true)
				}
	
			}else if(isCheckDuplicateUserError){  
			showToast('error',checkDuplicateUserError) 
		}	
			
		}
	}
useEffect(()=>{
    userRef.current?.focus();
}, [])

useEffect(()=>{
    // setMsg(undefined)
}, [username,email,password,confirmPassword]);

useEffect(()=>{
    const result = USER_REGEX.test(username!);
   setValidName(result)
}, [username]);

useEffect(()=>{
    const result = EMAIL_REGEX.test(email!);
    setValidEmail(result)
}, [email]);

const checkUser = (key:string)=>{
const result = USER_REGEX.test(key);
setValidName(result)
if(result){
checkDuplicate(key)
}    
}


const checkEmail = (key:string)=>{
    const result = EMAIL_REGEX.test(key);
   setValidEmail(result)
   if(result){
    checkDuplicate(key)
   }    
}

    const genderOptions = ['male','female'].map((userGender,i)=>(<option key={i} value={userGender}>{userGender.toUpperCase()}</option>))
useEffect(()=>{
    const result = PWD_REGEX.test(password);
    setValidPwd(result);
    const match = password === confirmPassword && password !== "";
    setValidMatch(match)
}, [password,confirmPassword]);

	const [uploadFile,{isLoading:isUploadLoading,isSuccess:isUploadSuccess,error}]= useUploadFileMutation()
const updateProfilePicture = async(e:ChangeEvent<HTMLInputElement>)=>{
	 const files = e.target.files!
	 const formData = new FormData()
	 formData.append("avatar", files[0]!)
	 formData.append('_id',currentUser._id!);
	//  
	 await uploadFile({data:formData,url:'users/uploads/avatar'})
	 if(!isUploadLoading && isUploadSuccess){showToast('success','Profile Picture Uploaded successfully')}else{showToast('error',`Sorry, couldn't Upload Profile Picture: ${error}` )}
}
const updateProfilePassword = async(e:FormEvent)=>{
	if(validMatch){
		await updateUser({_id:currentUser._id,type:'passwordUpdate',data:{password}})
		if(isSuccess && !isLoading)showToast('success', 'Profile updated successfully!')
		if(isError)showToast('error',updateUserError)
	}
}
const updateProfile = async(e:FormEvent)=>{
e.preventDefault()
if(USER_REGEX.test(username!) && EMAIL_REGEX.test(email!)){
	const data={email,firstName,lastName,username,phone,dob,gender,address,city,state,country,occupation,bio,
	}
await updateUser({_id:currentUser._id,data,type:'profileUpdate'})
if(isSuccess && !isLoading)showToast('success', 'Profile updated successfully!')
if(isError)showToast('error',updateUserError)
}

}
    
  return (
    <MainBody>
		<div className="container-fluid">
        <div className='panel card-topline-primary'>
        <div className="side-app"> 
			
			<div className="row "> 
				<div className="col-lg-4"> 
					<div className="card"> 
						<div className="card-header"> 
							<h3 className="card-title">Change Password</h3>  
							</div> 
							<div className="card-body d-flex  flex-column justify-content-center align-center"> 
								<form method="post"onSubmit={updateProfilePassword} > 
									<div className="row mb-2 d-flex justify-content-center align-center"> 
										<div className="col-auto position-relative rounded-circle"> 
											 <img className="avatar avatar-xl" src={userImage} alt="Avatar-img" style={{width:'14rem'}}/>
                                             <div className='  rounded-circle bg-primary p-2 d-flex justify-content-center align-center' style={{
                                                position:'absolute',
                                                width:'2.5rem',
                                                height:'2.5rem',
                                                right:'1rem',
                                                top:'8rem',
                                                userSelect:'none',
                                                cursor:'pointer'
                                             }}><label style={{
                                                cursor:'pointer' }}htmlFor='changeUserImage'><FaPencilAlt fontSize={'1rem'} color={'#ffffff'}/></label>
                                             <input type="file" name="profileAvatar" id="changeUserImage" accept='image/*' className="d-none" 
                                             onChange={updateProfilePicture}/></div>
										</div> 
										
									</div> 
	 
										<div className="form-group"> 
											<label className="form-label">New Password</label> <input type="password" id="password" name="password" className="form-control" 
                                            onChange={(e)=> setPassword(e.target.value)}/>
										</div> 
										<div className="form-group"> 
											<label className="form-label"> Confirm Password</label> <input type="password" id="confirmpassword" name="confirmpassword" className="form-control"
                                            onChange={(e)=> setConfirmPassword(e.target.value)}/> 
										</div> 
										
										<div className="form-footer"> 
											<button type="submit" className=" btn btn-primary btn-block pfsetting1" name="pfsetting1">Save Changes</button>
										</div> 
								</form> 
							</div> 
									</div> 
								</div> 
								<div className="col-lg-8"> 
									<form className="card" onSubmit={updateProfile}> 
										<div className="card-header"> 
											<h3 className="card-title">Edit Profile</h3> 
											 
											</div> 
											<div className="card-body"> 
												<div className="row"> 
												<div className="col-sm-6 col-md-6"> 
													<div className="form-group"> 
														<label className="form-label">First Name</label> <input type="text" className="form-control" name="fname" value={firstName} 
                                                        onChange={(e)=> setFirstName(e.target.value)} placeholder="First Name"/> 
													</div> 
												</div> 
												<div className="col-sm-6 col-md-6"> 
													<div className="form-group"> 
														<label className="form-label">Last Name</label> <input type="text" className="form-control" name="lname" value={lastName} 
                                                        onChange={(e)=> setLastName(e.target.value)}placeholder="Last Name"/> 
													</div> 
												</div>
											<div className="col-sm-6 col-md-4"> 
												<div className="form-group"> 
													<label className="form-label">Username</label> <input type="text" className="form-control" name="username" id="username" placeholder="Username" value={username} ref={userRef} onKeyUp={()=>checkDuplicate(username!) }
                                                        onChange={(e)=> setUsername(e.target.value)}
														onBlur={()=>checkUser(username!)} required/> 
												</div> 
												
											</div> 
											<div className="col-sm-6 col-md-4"> 
												<div className="form-group"> 
													 <label className="form-label">Email address</label> <div className={validPwd? "input-group input-success":"input-group input-default"}>
                                         <input type="email" className="form-control invalid-input" name="email" placeholder="Email" 
										 value={email} 
										 ref={emailRef}
										 onBlur={()=>checkEmail(email!)}
										 onChange={(e)=> setEmail(e.target.value)} required/> 
												 </div> 
										 	</div>
										 </div>
											<div className="col-sm-6 col-md-4"> 
												<div className="form-group"> 
													 <label className="form-label">Date of birth address</label> <input type="date" className="form-control" name="dob" placeholder="Dob" value={dob} 
                                                        onChange={(e)=> setDob(e.target.value)}/> 
													</div> 
												</div> 
											<div className="col-sm-6 col-md-4"> 
												<div className="form-group"> 
													 <label className="form-label">Phone</label> <input type="tel" className="form-control" name="phone" placeholder="Phone" value={phone} 
                                                        onChange={(e)=> setPhone(e.target.value)}/> 
													</div> 
												</div> 
											<div className="col-sm-6 col-md-4"> 
												<div className="form-group"> 
													 <label className="form-label">Gender</label> <select className="form-control" name="gender" placeholder="Gender" value={gender} 
                                                        onChange={(e)=> setGender(e.target.value)}>
                                                            {genderOptions}</select> 
													</div> 
												</div> 
											
											<div className="col-sm-6 col-md-4"> 
												<div className="form-group"> 
													 <label className="form-label">Occupation </label> <input type="text" className="form-control" name="occupation" placeholder="Occupation" value={occupation} 
                                                        onChange={(e)=> setOccupation(e.target.value)}/> 
													</div> 
												</div> 
												 
												<div className="col-md-12"> 
													<div className="form-group"> 
														<label className="form-label">Address</label> <input type="text" className="form-control" name="address" value={address} 
                                                        onChange={(e)=> setAddress(e.target.value)} placeholder="Home Address"/> 
													</div> 
												</div> 
												<div className="col-sm-6 col-md-4"> 
													<div className="form-group"> 
														<label className="form-label">City</label> <input type="text" className="form-control" name="city" value={city} 
                                                        onChange={(e)=> setCity(e.target.value)} placeholder="City"/> 
													</div> 
												</div> 
                                                <div className="col-sm-6 col-md-4"> 
												<div className="form-group"> 
													 <label className="form-label">State or Provinence</label> <input type="text" className="form-control" name="state" placeholder="State" value={state} 
                                                        onChange={(e)=> setState(e.target.value)}/> 
													</div> 
												</div> 
												{/* <div className="col-sm-6 col-md-4"> 
													<div className="form-group"> 
														<label className="form-label">Postal Code</label> <input type="number" className="form-control" name="zip-code" value={zipcode} 
                                                        onChange={(e)=> setZipcode(e.target.value)}placeholder="ZIP Code"/> 
													</div> 
												</div>  */}
												<div className="col-sm-6 col-md-4"> 
													<div className="form-group"> 
														<label className="form-label">Country</label> <input type="text" className="form-control" name="country" 
                                                        value={country} 
                                                        onChange={(e)=> setCountry(e.target.value)}placeholder=" Country"/> 
													</div> 
												</div> 
												{/* <div className="col-sm-6 col-md-4"> 
													<div className="form-group"> 
														<label className="form-label">Facebook Link</label> <input type="text" className="form-control" name="fblink" value={facebookLink} 
                                                        onChange={(e)=> setFacebookLink(e.target.value)}placeholder="http://facebook.com/username"/> 
													</div> 
												</div> 
												<div className="col-sm-6 col-md-4"> 
													<div className="form-group"> 
														<label className="form-label">Instagram Handle</label> <input type="text" className="form-control" name="instagrampavalue={instagramLink} 
                                                        onChange={(e)=> setInstagramLink(e.target.value)}placeholder="Instagram page link"/> 
													</div> 
												</div> 
												<div className="col-sm-6 col-md-4"> 
													<div className="form-group"> 
														<label className="form-label">Youtube</label> <input type="text" className="form-control" name="youtube" value={youtubeLink} 
                                                        onChange={(e)=> setYoutubeLink(e.target.value)} placeholder=" Youtube"/> 
													</div> 
												</div> 
												<div className="col-sm-6 col-md-4"> 
													<div className="form-group"> 
														<label className="form-label">Twitter Handle</label> <input type="text" className="form-control" name="twitterhandle" value={twitterHandle} 
                                                        onChange={(e)=> setTwitterHandle(e.target.value)} placeholder=" Twitter"/> 
													</div> 
												</div>
												<div className="col-sm-6 col-md-6"> 
													<div className="form-group"> 
														<label className="form-label">Cover Picture</label> 
														<input type="file" className="form-control" name="coverpic"></input> 
													</div> 
												</div>  */}
												<div className="col-md-12"> 
													<div className="form-group mb-0"> 
														<label className="form-label">Bio</label> <textarea rows={5} className="form-control" name="bio" 
                                                        onChange={(e)=> setBio(e.target.value)}placeholder="Enter your bio or favourite qoute" value={bio}></textarea>
														 </div> 
														</div> 
													</div> 
												</div> 
												<div className="card-footer text-right d-flex justify-content-end"> 
													<button type="submit"  className="btn btn-primary ">Update Profile</button> 
												</div> 
											</form> 
										</div> 
									</div>
                                </div>
							</div>
        </div>
        
    </MainBody>
  )
}

export default React.memo(ProfileEdit)