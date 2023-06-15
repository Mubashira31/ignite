import React, { useEffect ,useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./profile.css";
import gmail from "../../assets/gmail.png";
import mobile from "../../assets/mobile.png";
import profilepic from "../../assets/profilepic.png";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  let navigate = useNavigate();
  const [studentData,setStudentData] = useState({});
  const callProfilePage = async () => {
    try{
        const res = await fetch('/profile',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        });
        const data = await res.json();
        console.log(data);
        setStudentData(data);
        if(!res.status===200){
          const error = new Error(res.error);
          throw error;
        }


    }catch(e){
        console.log(e);
        navigate("/signin");
    }
  }

  useEffect(()=>{
     callProfilePage();
  },[]);
  return (
    <>
      <Navbar />
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={profilepic} alt={profilepic} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{studentData.name}</h5>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link about"
                      id="about-tab"
                      data-toggle="tab"
                      href="#about"
                      role="tab"
                    >
                      About-Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="details-tab"
                      data-toggle="tab"
                      href="#details"
                      role="tab"
                    >
                      Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btn"
                value="edit profile"
              />
            </div>
          </div>
          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Links</p>
                 <a>LinkedIn</a>
                <br />
    
                 <a>Twitter</a>
                <br />
                 <a>Gmail</a>
                <br />
                 <a>Portfolio</a>
              </div>
            </div>
            {/* right side url */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="about"
                  role="tabpanel"
                  aria-labelledby="about-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>id</label>
                    </div>
                    <div className="col-md-6">
                      <p>{studentData._id}</p>
                    </div>
                  </div>
                  <div className="row mt-3 mb-3">
                    <div className="col-md-6">
                      <label>Roll Number</label>
                    </div>
                    <div className="col-md-6">
                      <p>{studentData.rollnum}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Contact</label>
                    </div>
                    <div className="col-md-6">
                      <p>{studentData.number}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="details"
                  role="tabpanel"
                  aria-labelledby="about-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>kunf34623</p>
                    </div>
                  </div>
                  <div className="row mt-3 mb-3">
                    <div className="col-md-6">
                      <label>Roll Number</label>
                    </div>
                    <div className="col-md-6">
                      <p>kunf34623</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Contact</label>
                    </div>
                    <div className="col-md-6">
                      <p>kunf34623</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex flex-row justify-content-between">
              <div className="contact_info_item d-flex flex-row justify-content-start align-items-center">
                <img src={mobile} alt="phone" />
                <div className="contact_info_container">
                  <div className="contact_info_title">Ignite Team</div>
                  <div className="contact_info_text">xxxxxxx</div>
                </div>
              </div>
              <div className="contact_info_item d-flex flex-row justify-content-start align-items-center">
                <img src={gmail} alt="phone" />
                <div className="contact_info_container">
                  <div className="contact_info_title">Gmail</div>
                  <div className="contact_info_text">ignite.svuceofficial@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container py-5">
                  <div className="contact_form_title">get in touch</div>
                  <form id="contact_form">
                    <div className="contact_form_name d-flex justify-content-between align-item-between">
                      <h4>{studentData.name}</h4>
                      <p>{studentData.email}</p>
                      <p>{studentData.rollnum}</p>
                      <p>{studentData.number}</p>
                    </div>
                    <div className="contact_form_text">
                        <textarea className="text_field contact_form" cols='30' rows="10" placeholder="type your message"/>
                    </div>
                    <div className="contact_form_button">
                        <button type="submit" className="button contact_submit_button">Send message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
