import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import register from "../../assets/registerform.png";
import Navbar from "../Navbar/Navbar";
const Register = () => {
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    rollnum:"",
    portfolio:"",
    email: "",
    link: "",
    linkT: "",
    number: "",
    clubs: "",
    skills: "",
    
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setStudent({ ...student, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const {
      name,
    rollnum,
    portfolio,
    email,
    link,
    linkT,
    number,
    clubs,
    skills,
    password,
    cpassword,
    } = student;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name,
    rollnum:rollnum,
    email:email,
    link:link,
    linkT:linkT,
    number:number,
    clubs:clubs,
    skills:skills,
    password:password,
    cpassword:cpassword,
      })
    });
    const data = await res.json();
    if(data.status===422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
    } else{
      window.alert("Registration Successfull");
      console.log("IRegistration Successfull");

      
      navigate("/signin");

    }
  };

  return (
    <>
      <Navbar />
      <section className="register">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Register Here</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account-add material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={student.name}
                    onChange={handleInputs}
                    placeholder="name"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rollnum">
                    <i class="zmdi zmdi-account-add material-icons-name"></i>
                  </label>
                  <input
                    type="tel"
                    name="rollnum"
                    id="rollnum"
                    autoComplete="off"
                    value={student.rollnum}
                    onChange={handleInputs}
                    placeholder="Roll Number"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="portfolio">
                    <i class="zmdi zmdi-account-add material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="portfolio"
                    id="portfolio"
                    autoComplete="off"
                    value={student.portfolio}
                    onChange={handleInputs}
                    placeholder="portfolio Link"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    email="email"
                    id="email"
                    autoComplete="off"
                    value={student.email}
                    onChange={handleInputs}
                    placeholder="your email"
                   
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="link">
                    <i class="zmdi zmdi-linkedin-box"></i>
                  </label>
                  <input
                    type="link"
                    link="link"
                    name="link"
                    id="link"
                    autoComplete="off"
                    value={student.link}
                    onChange={handleInputs}
                    placeholder="your linkedIn profile URL"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="linkT">
                    <i class="zmdi zmdi-twitter"></i>
                  </label>
                  <input
                    type="linkT"
                    name="linkT"
                    link="linkT"
                    id="linkT"
                    autoComplete="off"
                    value={student.linkT}
                    onChange={handleInputs}
                    placeholder="your Twitter profile URL"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="number">
                    <i class="zmdi zmdi-whatsapp"></i>
                  </label>
                  <input
                    type="tel"
                    number="number"
                    name="number"
                    id="number"
                    autoComplete="off"
                    value={student.number}
                    onChange={handleInputs}
                    placeholder="contact number"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="clubs">
                    <i class="zmdi zmdi-ungroup"></i>
                  </label>
                  <input
                    type="text"
                    clubs="clubs"
                    name="clubs"
                    id="clubs"
                    autoComplete="off"
                    value={student.clubs}
                    onChange={handleInputs}
                    placeholder="Intrested clubs"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="skills">
                    <i class="zmdi zmdi-ungroup"></i>
                  </label>
                  <input
                    type="text"
                    skills="skills"
                    name="skills"
                    id="skills"
                    autoComplete="off"
                    value={student.skills}
                    onChange={handleInputs}
                    placeholder="Mention something your r good with"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-account-add material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={student.password}
                    onChange={handleInputs}
                    placeholder="set password"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-account-add material-icons-name"></i>
                  </label>
                  <input
                    type="cpassword"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={student.cpassword}
                    onChange={handleInputs}
                    placeholder="set password"
                    
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="register"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={postData}
                  />
                </div>
              </form>
              <div className="signup-image">
                <figure>
                  <img src={register} alt="register" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
