import React from "react";
import Navbar from "../Navbar/Navbar";
import "./home.css";
import hero from "../../assets/hero.jpeg";
import mate1 from "../../assets/mate1.jpeg";
import mate2 from "../../assets/mate2.jpeg";
import mate3 from "../../assets/mate3.jpeg";
import mate4 from "../../assets/mate4.jpeg";
import mate5 from "../../assets/mate5.jpeg";
import mate6 from "../../assets/mate6.jpeg";
import mate7 from "../../assets/mate7.jpeg";
import mate8 from "../../assets/mate8.jpeg";
import mate9 from "../../assets/mate9.jpeg";
import mate10 from "../../assets/mate10.jpeg";
import timelineElements from './timelineElements.js'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as Iletter } from "./iletter.svg";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page ">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-6 content">
                <h1>Welcome</h1>
                <h2>
                  To Ignite,Where Ideas Take Flight.
                  <b>
                    Inspiring,Connecting and Empowering the next Generation of
                    Leaders.
                  </b>
                </h2>
              </div>
              <div className="col-md-6 img-slider ">
                <img src={hero} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <h2 className="title">Know Us</h2>
        <VerticalTimeline className="">
          {
             timelineElements.map(element=>{
              let Iicon = {background:"#8B0000"}
              return(
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  icon={<Iletter/>}
                  iconStyle={Iicon}
                  iconClassName="Iicon2"
                >
                  <h3 className="vertical-timeline-element">{element.title}</h3>
                  <p className="vertical-timeline-element-subtitle">{element.location}</p>
                  <p id="description">{element.description}</p>
</VerticalTimelineElement>
              )
             })
          }
        </VerticalTimeline>
      </div>
      <div className="team-section">
        <h1>
          Meet Our <b>IGNITE</b> Team
        </h1>
        <img src="https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/308667232_483759093762005_2172900178990749809_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=wTN_IglPVT8AX9W8sdh&_nc_ht=scontent.fhyd11-2.fna&oh=00_AfC2wYmdzdr5AfXzzP-ujJ714CLa6l9tjTq277jWQvjeXA&oe=6484367F" className="main-img" />
        
        <div className=" mate">
          <img src={mate8} className="mate8" />
          <p className="text-content8">
            <b>CTO</b>
            <br />
            Ms.Shaik Mubashira
          </p>
        </div>
        <div className=" mate">
          <img src={mate1} className="mate1" />
          <p className="text-content1">
            <b>COO</b>
            <br />
            Ms.Rishitha Sharon
          </p>
        </div>
        <div className=" mate">
          <img src={mate2} className="mate2" />
          <p className="text-content2">
            <b>CFO</b>
            <br />
            Mr.Pavan Kumar Sai Pogu
          </p>
        </div>
        <div className=" mate">
          <img src={mate7} className="mate7" />
          <p className="text-content7">
            <b>CSO</b>
            <br />
            Mr.Rishith Reddy Palle
          </p>
        </div>
        <div className=" mate">
          <img src={mate3} className="mate3" />
          <p className="text-content3">
            <b>CSO</b>
            <br />
            Mr.Chandika Sai Vivek
          </p>
        </div>
        <div className=" mate">
          <img src={mate4} className="mate4" />
          <p className="text-content4">
            <b>CHEIF EXECUTIVE OFFICER</b>
            <br />
            Mr.Bolla Dwishanth
          </p>
        </div>
        <div className=" mate">
          <img src={mate5} className="mate5" />
          <p className="text-content5">
            <b>CFO</b>
            <br />
            Mr.NARUGARU GANESH
          </p>
        </div>
        <div className=" mate">
          <img src={mate6} className="mate6" />
          <p className="text-content6">
            <b>CCO</b>
            <br />
            Mr.Sri Nadh
          </p>
        </div>
        <div className=" mate">
          <img src={mate9} className="mate9" />
          <p className="text-content9">
            <b>CSO</b>
            <br />
            Ms.Yeturi Lahari
          </p>
        </div>
        <div className=" mate">
          <img src={mate10} className="mate10" />
          <p className="text-content10">
            <b>CMO</b>
            <br />
            Mr.Shaik Sajid Hussain
          </p>
        </div>
      </div>
      <div className="contactus">
        <h2>Contact Us</h2>
        <div className="contact-container">
        <button><i class="zmdi zmdi-facebook"></i></button>
        <button><i class="zmdi zmdi-instagram"></i></button>
        <button><i class="zmdi zmdi-twitter"></i></button>
        <button><i class="zmdi zmdi-linkedin"></i></button>
        <button><i class="zmdi zmdi-google"></i></button>
        <button><i class="zmdi zmdi-youtube"></i></button>
        </div>
        <div className="container">
          <div className="row">
        <div className="col-lg-6">

        <p><b>Want To Join As Volunteer</b></p>
        <button><NavLink to='/suggest'>Register Here</NavLink></button>
        </div>
        <div className="col-lg-6">
        <p><b>We always wait for your valuable feedback and suggestions!</b></p>
        <button>Please Write Here</button>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};
//ANCHOR PLACEMENT
//FADE
//ZOOM
export default Home;
