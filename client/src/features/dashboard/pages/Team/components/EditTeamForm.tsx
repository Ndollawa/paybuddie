import React, {ChangeEvent,FormEvent,useState,useEffect,useRef} from 'react'
import { useUpdateTeamMutation} from '../teamsApiSlice'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'
import useInput from '../../../../../app/utils/hooks/useInput'
import $ from 'jquery'
import teamProps from '../../../../../app/utils/props/teamProps'


interface modalDataProps {
  modalData:{
     data:teamProps | null,
    showModal:boolean,
  } 
  }
const EditTeamModal = ({modalData:{data,showModal}}:modalDataProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [bio, setBio] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const [
    userFacebookHandle,
    setUserFacebookHandle,
    userFacebookHandleAttr,
  ] = useInput("");
  const [
    userTwitterHandle,
    setUserTwitterHandle,
    userTwitterHandleAttr,
  ] = useInput("");
  const [
    userInstagramHandle,
    setUserInstagramHandle,
    userInstagramHandleAttr,
  ] = useInput("");
  const [userWhatsapp, setUserWhatsapp, userWhatsappAttr] =
    useInput("");
  const [previewImage, setPreviewImage] =
    useState("");

  const [validEmail, setValidEmail] = useState(false);
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  useEffect(() => {
    const result = EMAIL_REGEX.test(email!);
    setValidEmail(result);
  }, [email]);

  const [userImage, setUserImage] = useState<any>(null);
  const [status, setStatus] = useState<any>($('#status').val());
  const [show, setShow] = useState(false);
  const [addNewTeam, { isLoading, isSuccess, isError, error }]: any =
    useUpdateTeamMutation();

  // const navigate = useNavigate()

  useEffect(() => {
    setEmail(data?.email!)
    setFirstName(data?.firstName!)
    setLastName(data?.lastName!)
    setPhone(data?.phone!)
    setPosition(data?.position!)
    setBio(data?.bio!)
    setStatus(data?.status!)
    setUserFacebookHandle(data?.socialMedia?.facebookHandle!)
    setUserTwitterHandle(data?.socialMedia?.twitterHandle!)
    setUserInstagramHandle(data?.socialMedia?.instagram!)
    setUserWhatsapp(data?.socialMedia?.whatsapp!)
    setPreviewImage(process.env.REACT_APP_BASE_URL+"/uploads/team/"+data?.userImage!)
    setShow(showModal)
      return () => {
        setShow(false)
        
      };
    }, [data,showModal])

  const canSave =
    [email, firstName, lastName, phone, bio].every(Boolean) && !isLoading;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (canSave) {
      formData.append("_id",data?._id!)
      formData.append("firstName",firstName)
      formData.append("lastName",lastName)
      formData.append("bio",bio)
      formData.append("phone",phone)
      formData.append("status",status)
      formData.append("position",position)
      formData.append("email",email)
      formData.append("facebookHandle",userFacebookHandle)
      formData.append("twitterHandle",userTwitterHandle)
      formData.append("instagram",userInstagramHandle)
      formData.append("whatsapp",userWhatsapp)
      formData.append("upload",userImage)
      await addNewTeam(formData);
      if (isError)return showToast("error", JSON.stringify(error?.data?.message));
      showToast("success", "Team member updated successfully");
    }
  };
  const uploadBg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0) {  
       setUserImage(file[0]);
    let fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
    
    setPreviewImage(fileurl)
 
        } 
  }
  return (
    <>
  
  
  <Modal show={show} size="lg" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Team Member</Modal.Title>
        </Modal.Header>
         <form onSubmit={handleSubmit}>
        <Modal.Body>
        <div className="card-body">
              <div className="basic-form">
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Email address</label>
                      <div
                        className={
                          validEmail
                            ? "input-group input-success"
                            : "input-group input-default"
                        }
                      >
                        <input
                          type="email"
                          className="form-control invalid-input"
                          name="email"
                          placeholder="Email"
                          value={email}
                          ref={emailRef}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Position </label>
                      <input
                        type="text"
                        className="form-control"
                        name="position"
                        placeholder="Position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Phone </label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">
                      <strong>Status</strong>
                    </label>
                    <select
                      id="status"
                      className="default-select form-control wide"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                
                <div className="col-md-6">
                  <label className="form-label">User Image</label>
                  <div className="input-group mb-3 col-md-5">
                    <div className="form-file">
                      <input
                        type="file"
                        id="uploadbg"
                        accept=".jpeg, .jpg, .png, .gif"
                        name="uploadbg"
                        onChange={uploadBg}
                        className="form-file-input form-control"
                      />
                    </div>
                    <span className="input-group-text">Upload</span>
                  </div>
                </div>
                <div className="col-md-6">
                  Preview
                  <div id="preview">{previewImage &&<img className="img-responsive" src={previewImage} alt="User Avatar" width="240"/>}</div>
                  </div>
      

                 
                  <div className="mb-3 col-md-6">
                    <label className="form-label">
                      <strong>Facebook Handle</strong>
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="https://facebook.com/@userName"
                      value={userFacebookHandle}
                      onChange={setUserFacebookHandle}
                      {...userFacebookHandleAttr}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">
                      <strong>Twitter Handle</strong>
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="https://twitter.com/@userName"
                      value={userTwitterHandle}
                      onChange={setUserTwitterHandle}
                      {...userTwitterHandleAttr}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">
                      <strong>Instagram Handle</strong>
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="https://instagram.com/@userName"
                      value={userInstagramHandle}
                      onChange={setUserInstagramHandle}
                      {...userInstagramHandleAttr}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">
                      <strong>Whatsapp</strong>
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="https://twhatsapp.com/@userName"
                      value={userWhatsapp}
                      onChange={setUserWhatsapp}
                      {...userWhatsappAttr}
                    />
                  </div> 
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <label className="form-label">Bio</label>
                      <textarea
                        rows={5}
                        className="form-control"
                        name="bio"
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Enter your bio or favourite qoute"
                        value={bio}
                      ></textarea>
                    </div>
                  </div>
      </div>
    </div>
  </div>
                    </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size='sm' className='rounded-pill' onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" size='sm' className='rounded-pill' type="submit" disabled={!canSave}  >
            Update Team
          </Button>
        </Modal.Footer>
            </form>
      </Modal>
    </>
  )
}

export default React.memo(EditTeamModal)