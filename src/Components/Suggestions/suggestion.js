import React, { useState , useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import './suggest.css'
import Register from '../../assets/register.png'
const Suggestion = () => {
  const [suggest, setSuggest] = useState({
    rollNum: "",
    club: "",
    suggest1: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setSuggest({ ...suggest, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { rollNum, club, suggest1 } = suggest;
    const res = await fetch("/suggestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rollNum: rollNum,
        club: club,
        suggest1: suggest1,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("IRegistration Successfull");
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="suggest-box">
      <div className="suggestions-page">
      <h1>Register Here</h1>
        
        <form action="POST">
          <div className="form-group">
            <label htmlFor="rollNum">Enter your roll number</label>
            <input
              type="text"
              name="rollNum"
              id="rollNum"
              autoComplete="off"
              value={suggest.rollNum}
              onChange={handleInputs}
              placeholder="RollNum"
            />
          </div>
          <div className="form-group">
            <label htmlFor="club">Registration for</label>
            <input
              type="text"
              name="club"
              id="club"
              autoComplete="off"
              value={suggest.club}
              onChange={handleInputs}
              placeholder="club"
            />
          </div>
          <div className="form-group">
            <label htmlFor="suggest1">Anything You Want To convey</label>
            <textarea
              cols="30"
              rows="10"
              type="text"
              name="suggest1"
              id="suggest1"
              autoComplete="off"
              value={suggest.suggest1}
              onChange={handleInputs}
              placeholder="We are Happy To Hear From You"
            />
          </div>
          <div className="form-group form-button">
            <input
              type="submit"
              name="Add"
              id="suggestion"
              className="form-submit"
              value="Add"
              onClick={postData}
            />
          </div>
        </form>
      </div>
      <img src={Register}/>
      </div>
    </>
  );
};

export default Suggestion;

