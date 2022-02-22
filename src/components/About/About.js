import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";


// ------------------Timeline Imports---------------------
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import events from "./events.json";


import {ReactComponent as WorkIcon} from "./mortarboard.svg"
import { ReactComponent as SchoolIcon } from "./graduation-cap.svg";
import timelineElements from "./timelineElements";





function About() {

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };


  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>


        {/* ----------------------Timeline----------------- */}

 
  <div className="font-sans text-xl">
      <h1 className="title font-bold text-center  padding p-4  py-28 purple h1" style={{fontFamily: 'serif', fontSize: '50px'}}>EDUCATION</h1>
      <VerticalTimeline >
        {timelineElements.map((element,i) => {
          let isWorkIcon = element.icon === "work";
      
          return (
            <VerticalTimelineElement 
              key={`element${i}`}
              
              dateClassName="date date text-white lg:text-white md:text-white font-bold lg:text-4xl pl-0" style={{span:'0'}}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              contentStyle={{ background: 'rgb(229,204,255)', color: 'rgb(25,0,51)' }}
            >
              <h3 className="vertical-timeline-element-title font-bold p-3  " style={{fontFamily: 'Georgia', fontWeight:'900',}}>
                {element.title}
              </h3>
              
              <h5 className="vertical-timeline-element-subtitle" style={{fontFamily: 'Georgia'}}>
                {element.location}
              </h5>
              <h6 className="mx-0 mt-6 pt-3" style={{marginBottom:20, fontWeight: '700', fontFamily: 'Georgia'}} id="description">{element.description}</h6>
              <h5 style={{fontFamily: 'Georgia'}}>{element.date}</h5>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  









    {/* -------------------------Timeline Ends------------------------------------- */}






        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
