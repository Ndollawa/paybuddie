import React,{useEffect,useState,useRef, FormEventHandler, FormEvent} from 'react';
import jwt_decode from 'jwt-decode'
import {FaUser,FaRegUserCircle,FaKeycdn} from 'react-icons/fa';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import {authProps} from '../../app/utils/props/authProps';
// import useLocalStorage from '../../app/utils/hooks/useLocalStorage';
// import useInput from '../../app/utils/hooks/useInput';
import useToggle from '../../app/utils/hooks/useToggle';

// react-reduct rtkquery approach
import {useDispatch, useSelector} from 'react-redux';
import {useCompanyDetails} from '../dashboard/pages/Settings/settingsConfigSlice';
import {setCredentials} from './authSlice';
import {useLoginMutation} from './authApiSlice'
import OtherBody from '../dashboard/components/OtherBody';

interface errMessages{
    type:string,
    msg:string
}

const Login:React.FC = () => {

    const {siteName,logo} = useSelector(useCompanyDetails);


const navigate = useNavigate();
const location = useLocation();

//redux-rtkquery
const [login,{isLoading}] = useLoginMutation();
const dispatch = useDispatch();

const from = location.state?.from?.pathname || '/dashboard';


const userRef = useRef <HTMLInputElement>(null);
const errRef = useRef <HTMLInputElement>(null);

const [user,setUser] = useState('');
const [pwd,setPwd] = useState('');
const [check,toggleCheck] = useToggle('persist',false);
const [errMsg,setErrMsg] = useState<errMessages>();


useEffect(()=>{
    userRef.current?.focus();
}, [])

useEffect(()=>{
    setErrMsg(undefined)
}, [user,pwd]);


const handleLogin:FormEventHandler = async (e:FormEvent)=>{
        e.preventDefault();

        try{
       
            
            // redux-rtkQuery approach
            const {accessToken} = await login({user,password:pwd}).unwrap()
            dispatch(setCredentials({accessToken}))
            setUser('');
            setPwd('');
            navigate(from,{replace:true});
            
        }catch(err:any){
                if(!err){
                    setErrMsg({type:'danger',msg:'No Server Response'});
                }else if(err.status === 400){
                    setErrMsg({type:'warning',msg:'Missing form detail(s)'} )
                }else if(err.status === 401){
                    setErrMsg({type:'warning',msg:'Invalid Credentials'} )
                }else{
                    setErrMsg({type:'danger',msg:'Login Failed'})
                }
                errRef.current?.focus();
            }
        }

  return (
    <OtherBody>
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
									<div className="text-center mb-3">
										<Link to="/" className="brand-logo">
											<img src={logo} alt={siteName} width='150'/>
										</Link>
									</div>
                                    <h4 className="text-center mb-4">Sign in your account</h4>
                                    <form action="" onSubmit={handleLogin}>
                                    {errMsg && <div ref={errRef} aria-live='assertive' className={`alert alert-${errMsg.type} alert-dismissible fade show`}>
									<>{errMsg.type === 'warning' 
                                    ?<><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" stroke-linejoin="round" className="me-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><strong>Warning!</strong></>
									:errMsg.type === 'danger'
                                    ? <><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                    <strong>Error!</strong></>: null} {errMsg.msg}.
									<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                    </button></>
                                </div>} 
                                        <div className="form-group">
                                            <label className="mb-1"><strong>Email or Username</strong></label>
                                            <div className={`input-group input-default`}>
                                            <span className="input-group-text"><FaRegUserCircle fontSize='1rem'/></span>
                                            <input 
                                            type="user" 
                                            className="form-control" 
                                            // type="text"  
                                            // className="form-control" 
                                            // placeholder="username"
                                            autoComplete='off'
                                            ref={userRef}
                                            required
                                            onChange={(e)=> setUser(e.target.value)}
                                           value={user}
                                            />
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="mb-1"><strong>Password</strong></label>
                                         <div className={`input-group input-default`}>
                                            <span className="input-group-text"><FaKeycdn fontSize='1rem'/></span>
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            required
                                            onChange={(e)=> setPwd(e.target.value)}
                                            value={pwd}/>
                                        </div>
                                        </div>  
                                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div className="form-group">
                                               <div className="custom-control custom-checkbox ms-1">
                                               <input 
                                                    type="checkbox" 
                                                    className="form-check-input" 
                                                    id="basic_checkbox_1"
                                                    title='Trust this Device?'
                                                    onChange={toggleCheck}
                                                    checked={check}
                                                    />
													<label className="form-check-label" htmlFor="basic_checkbox_1">Trust this Device?</label>
												</div>
                                            </div>
                                            <div className="form-group">
                                                <Link to="/forgot-password">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Don't have an account? <Link className="text-primary" to="/register">Sign up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </OtherBody>
  )
}

export default Login
