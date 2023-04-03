import React, {ChangeEvent,FormEvent,useState,useEffect,useRef} from 'react'
import { useUpdateContactMutation} from '../contactsApiSlice'
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import showToast from '../../../../../app/utils/hooks/showToast'
import useInput from '../../../../../app/utils/hooks/useInput'



interface modalDataProps {
  modalData:{
     data:{
        id:string | number;
        title: string;
        description: string;
        body: string;
        contactImage: string;
        status: string;
    } | null,
    showModal:boolean,
  } 
  }
const EditContactModal = ({modalData:{data,showModal}}:modalDataProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [bio, setBio] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const [
    contactFacebookHandle,
    setContactFacebookHandle,
    contactFacebookHandleAttr,
  ] = useInput("");
  const [
    contactTwitterHandle,
    setContactTwitterHandle,
    contactTwitterHandleAttr,
  ] = useInput("");
  const [
    contactInstagramHandle,
    setContactInstagramHandle,
    contactInstagramHandleAttr,
  ] = useInput("");
  const [contactWhatsapp, setContactWhatsapp, contactWhatsappAttr] =
    useInput("");
  const [contactDescription, setContactDescription, contactDescriptionAttr] =
    useInput("");

  const [validEmail, setValidEmail] = useState(false);
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  useEffect(() => {
    const result = EMAIL_REGEX.test(email!);
    setValidEmail(result);
  }, [email]);

  const [contactImage, setContactImage] = useState<any>(null);
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);
  const [addNewContact, { isLoading, isSuccess, isError, error }]: any =
    useUpdateContactMutation();

  // const navigate = useNavigate()

  React.useEffect(() => {
    if (isSuccess) {
    }
  }, [isSuccess]);

  const canSave =
    [email, firstName, lastName, phone, bio].every(Boolean) && !isLoading;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (canSave) {
      // formData.append("title",title)
      // formData.append("description",description)
      // formData.append("body",body)
      // formData.append("status",status)
      // formData.append("contactImage",contactImage)
      await addNewContact(formData);
      if (isError) return showToast("error", JSON.stringify(error?.data?.message));
       showToast("success", "Contactcreated successfully");
    }
  };
  const uploadBg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0) setContactImage(file[0]);
  };
  return (
    <>
  
  
  <Modal show={show} size="lg" centered backdrop='static'
 onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
         <form onSubmit={handleSubmit}>
        <Modal.Body>
        <div className="card-body">
              <div className="basic-form">
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">First Name</label>{" "}
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
                      <label className="form-label">Last Name</label>{" "}
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
                      <label className="form-label">Email address</label>{" "}
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
                      <label className="form-label">Position </label>{" "}
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
                      <label className="form-label">Phone </label>{" "}
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
                      id="inputState"
                      className="default-select form-control wide"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                
                <div className="col-md-6">
                  <label className="form-label">Contact Image</label>
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
            <div id="sitelogo">

            </div>
        </div>

                 
                  <div className="mb-3 col-md-6">
                    <label className="form-label">
                      <strong>Facebook Handle</strong>
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="https://facebook.com/@contactName"
                      value={contactFacebookHandle}
                      onChange={setContactFacebookHandle}
                      {...contactFacebookHandleAttr}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">
                      <strong>Twitter Handle</strong>
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="https://twitter.com/@contactName"
                      value={contactTwitterHandle}
                      onChange={setContactTwitterHandle}
                      {...contactTwitterHandleAttr}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">
                      <strong>Instagram Handle</strong>
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="https://instagram.com/@contactName"
                      value={contactInstagramHandle}
                      onChange={setContactInstagramHandle}
                      {...contactInstagramHandleAttr}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">
                      <strong>Whatsapp</strong>
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="https://twhatsapp.com/@contactName"
                      value={contactWhatsapp}
                      onChange={setContactWhatsapp}
                      {...contactWhatsappAttr}
                    />
                  </div> 
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <label className="form-label">Bio</label>{" "}
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={!canSave}  >
            Update Contact
          </Button>
        </Modal.Footer>
            </form>
      </Modal>
    </>
  )
}

export default React.memo(EditContactModal)