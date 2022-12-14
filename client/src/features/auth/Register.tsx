import { useTransition, useDeferredValue } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import axios from '../../app/api/axios';
import useAxios from '../../app/utils/hooks/useAxios';
import useAxiosFunc from '../../app/utils/hooks/useAxiosFunc'; 
import React, {useRef,useState,useEffect,FormEvent, FormEventHandler } from 'react';
import { Link } from 'react-router-dom';
import {GoKey} from 'react-icons/go';
import {GrMail} from 'react-icons/gr';
import {FaUser,FaRegUserCircle,FaKeycdn} from 'react-icons/fa';


// username regex must start with a lowercase or uppercase laters and must be followed by lower or uppercase or digits,- or _ of 3 to 23 characters
const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
// requires atleast 0ne uppercase, lowercase,digit, special character and a total of 8 t0 24 characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const REGISTER_URL = '/register';





interface Messages{
    type:string,
    msg:string
}

const Register:React.FC = () => {
const userRef = useRef <HTMLInputElement>(null);
const emailRef = useRef <HTMLInputElement>(null);
const errRef = useRef <HTMLInputElement>(null);
const [isPending, startTransition] = useTransition();
// const [res,error,loading,axiosFetch] = useAxiosFunc();
const [user,setUser] = useState('');
const deferredUserInput = useDeferredValue(user);
const [validName,setValidName] = useState(false);
const [userFocus,setUserFocus] = useState(false);

const [email,setEmail] = useState('');
const [validEmail,setValidEmail] = useState(false);
const [emailFocus,setEmailFocus] = useState(false);

const [pwd,setPwd] = useState('');
const [validPwd,setValidPwd] = useState(false);
const [pwdFocus,setPwdFocus] = useState(false);

const [matchPwd,setMatchPwd] = useState('');
const [validMatch,setValidMatch] = useState(false);
const [matchFocus,setMatchFocus] = useState(false);

const [msg,setMsg] = useState<Messages>();
const [success,setSuccess] = useState(false);
// const [userFocus,setUserFocus] = useState(false);


useEffect(()=>{
    userRef.current?.focus();
}, [])

useEffect(()=>{
    setMsg(undefined)
}, [user,email,pwd,matchPwd]);
const [res, error, loading] = useAxios({
        axiosInstance:axios,
        method: 'POST',
        url: '/checkduplicate',
        requestConfig: {
         
            data: {
                username:deferredUserInput
            }
        }
});
console.log(res)
useEffect(()=>{
    const result = USER_REGEX.test(user);
    // if(result){ 
    //         axiosFetch({
    //             axiosInstance:axios,
    //             method: 'post',
    //             url: '/checkduplicate',
    //             requestConfig: {
    //                 data: {
                   
    //                 }
    //             }
    //         }
    //     )
    //         if(res === 'available'){
    //             setMsg({type:'info',msg:'Username Taken'}) 
    //         }else{
    //             setMsg({type:'info',msg:'Username Taken'}) 
    //         }
    // }else{
    //     setMsg({type:'error',msg:'Username invalid'})  
    // }



        // axios.post('/checkduplicate',{"username":deferredUserInput}).then((res)=>{
           
//     if(res.data.message === 'available'){
       
// setValidName(result)
//     }else{
//         setMsg({type:'info',msg:'Username Taken'})   
//     }
    // })
}, [deferredUserInput]);

useEffect(()=>{
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result)
}, [email]);

useEffect(()=>{
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd && pwd !== "";
    setValidMatch(match)
}, [pwd,matchPwd]);


const handleRegistration:FormEventHandler = async (e:FormEvent) =>{
    e.preventDefault();
    // if button is enabled with js hack
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);
    if(!v1 || !v2 || !v3){
        setMsg({type:'warning', msg:"Invalid Entry"})
        return;
    }
    try{
    const response = await axios.post(REGISTER_URL,
        JSON.stringify({username:user, password:pwd}),
        {
            headers:{'Content-Type': 'application/json'},
            withCredentials: true
        }
        );
        setMsg({type:'success',msg:'New Account successfully created!'}) 
    setUser('');
    setEmail('');
    setPwd('');
    setMatchPwd('');
}catch(error){
    const err = error as AxiosError;
        if(!err?.response){
            setMsg({type:'danger',msg:'No Server Response'});
        }else if(err.response?.status === 409){
            setMsg({type:'info',msg:'Username Taken'})
        }else{
            setMsg({type:'danger',msg:'Registration Failed'})
        }
        errRef.current?.focus();
    }
}
  return (
    <>
    
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
									<div className="text-center mb-3">
										<Link to="index-2.html" className="brand-logo">
											
										</Link>
									</div>
                                    <h4 className="text-center mb-4">Sign up your account</h4>
                                    <form action="" onSubmit={handleRegistration}>
                                    {msg && <div ref={errRef} aria-live='assertive' className={`alert alert-${msg.type} alert-dismissible fade suserhow`}>
									<>{msg.type === 'warning' 
                                    ?<><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="me-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg><strong>Success!</strong></>
									:
								    msg.type === 'success' 
                                    ?<><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" stroke-linejoin="round" className="me-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><strong>Warning!</strong></>
									:msg.type === 'danger'
                                    ? <><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                    <strong>Error!</strong></>
                                    :msg.type === 'danger'
                                    ? <><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="me-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg><strong>Success!</strong></> 
                                    :msg.type === 'info'
                                    ? <><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg><strong>Info!</strong></> :null} {msg.msg}.
									<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                    </button></>
                                </div>} 
                                        <div className="form-group"><label className="mb-1"><strong>Username</strong></label>
                                            <div className={validName? "input-group input-success":"input-group input-default"}>
                                            <span className="input-group-text"><FaRegUserCircle fontSize='1rem'/></span>
                                                
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="username"
                                                autoComplete='off'
                                                ref={userRef}
                                                required
                                                aria-invalid ={validName ? "false": "true"}
                                                aria-describedby="uidnote"
                                                onChange={(e)=> setUser(e.target.value)}
                                                onKeyUp={(e)=> setUser(user)}
                                                onFocus={()=>setUserFocus(true)}
                                                onBlur={()=>setUserFocus(false)}
                                                />
                                            </div>
                                        </div>
                                        {(userFocus && !validName) && <p className='alert alert-danger' id='uidnote'>4 to 24 characters.<br/>Must begin with  a letter.<br/> Letters, numbers, underscore,hyphens, % allowed</p>}
                                        <div className="form-group"><label className="mb-1"><strong>Email</strong></label>
                                        <div className={validEmail? "input-group input-success":"input-group input-default"}>
                                        <span className="input-group-text"><GrMail fontSize='1rem' /></span>
                                            
                                            <input 
                                            type="email"
                                            className="form-control" 
                                            placeholder="hello@example.com"
                                            onChange={(e)=>setEmail(e.target.value)}
                                            autoComplete='off'
                                            required
                                            ref={emailRef}
                                            aria-invalid ={validEmail ? "false": "true"}
                                            aria-describedby="uemailnote"
                                            onKeyUp={(e)=> setEmail(email)}
                                            onFocus={()=>setEmailFocus(true)}
                                            onBlur={()=>setEmailFocus(false)}
                                             />
                                        </div>
                                        </div>
                                        {(emailFocus &&  !validEmail) &&<p className='alert alert-danger' id='uemailnote'>Must begin with letter follwed by @<br/>and a provider and end with a '.com'.<br/> eg. youremail@provider.com</p>}
                                        <div className="form-group"><label className="mb-1"><strong>Password</strong></label>
                                         <div className={validPwd? "input-group input-success":"input-group input-default"}>
                                         <span className="input-group-text"><GoKey fontSize='1rem'/></span>
                                         
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            required
                                            aria-invalid ={validPwd ? "false": "true"}
                                            aria-describedby="pwdnote"
                                            onChange={(e)=> setPwd(e.target.value)}
                                            onFocus={()=>setPwdFocus(true)}
                                            onBlur={()=>setPwdFocus(false)}
                                            placeholder="password"
                                            
                                            
                                            />
                                            </div>
                                        </div>
                                        {(pwdFocus && ! validPwd) && <p className='alert alert-danger' id='pwdnote'>8 to 24 characters.<br/>Must include uppercase and lowercase letters, a number and a special character.<br/> Allowed Special characters: <span aria-label="underscore">_</span> <span aria-label="hyphens">-</span><span aria-label="at symbol">@</span><span aria-label="hashtag">#</span><span aria-label="dollar sign">$</span><span aria-label="percent">% </span> </p>}
                                        <div className="form-group"><label className="mb-1"><strong>Confirm Password</strong></label>
                                         <div className={validMatch? "input-group input-success":"input-group input-default"}>
                                         <span className="input-group-text"><FaKeycdn fontSize='1rem'/></span>
                                         
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            required
                                            aria-invalid ={validMatch ? "false": "true"}
                                            aria-describedby="confirmpwdnote"
                                            onChange={(e)=> setMatchPwd(e.target.value)}
                                            onFocus={()=>setMatchFocus(true)}
                                            onBlur={()=>setMatchFocus(false)}
                                            placeholder="confirm password"
                                            />
                                            </div>
                                        </div>
                                        {(matchFocus && !validMatch) && <p className='alert alert-danger' id='confirmpwdnote'>Passwords do not match!</p>}
                                        <div className="text-center mt-4">
                                            <button type="submit" 
                                            disabled={!validName || !validEmail || !validPwd || !validMatch ? true :false} className="btn btn-primary btn-block">Sign me up</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Already have an account? <Link className="text-primary" to="/login">Sign in</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    </>
  )
}

export default Register
