import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus, CgCode} from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhotoshop,
  DiGithubBadge,
  
  
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase,SiAdobeaftereffects } from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCode/>
      </Col>
     
    </Row>
  );
}

export default Techstack;
