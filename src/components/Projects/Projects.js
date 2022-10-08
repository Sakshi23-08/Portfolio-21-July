import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import KeeperApp from "../../Assets/Projects/KeeperApp.jpg"
import ToDo from "../../Assets/Projects/todo.jpg"
import Graphics from "../../Assets/Projects/Graphics.png"
import SmartBikeHelmet from "../../Assets/Projects/SmartBikeHelmet.jpg"
import Diabetes from "../../Assets/Projects/Diabetes.jpg"
import Krypt from "../../Assets/Projects/Krypt.jpg"
import BCNN from "../../Assets/Projects/BreastCancerProject.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KeeperApp}
              isBlog={false}
              title="Keeper App"
              description="Personal Workspace to where users can maintain notes and modify them as and when required. It also allows the user to delete this notes. The notes can be stored with or without a title. This will give th eusers a facility to know the notes that they have maintained over a period of time."
              link="https://github.com/Sakshi23-08/Keeper-App/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="To Do List"
              description="The To do List helps a person to make  alist of the chores/tasks that he wishes to fulfill in the coming few days. The list can be modified by the users as and when required. The users will be able to delete the tasks that they have already done or completed and also append some new tasks. "
              link="https://github.com/Sakshi23-08/ToDo/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Krypt}
              isBlog={false}
              title="Web 3.0 Blockchain App"
              description="Using Web 3.0 methodologies, Solidity and Metamask I have built a real Web 3.0 Application where you can transfer ETH after insatlling Metamask. The user will be able to treanfer the ETH to any account and the web app will keep atrack of all the transactions and you just need to connect your account for this."
              link="https://github.com/Sakshi23-08/Krypt/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartBikeHelmet}
              isBlog={false}
              title="Smart Bike Helmet"
              description="The system detects whether the rider is wearing a helmet or not if he wears 
              then only the vehicle will start. It detects the amount of alcohol consumed by the rider, if the rider has drunk, 
              the bike engine will not start."
              link="https://drive.google.com/drive/u/0/folders/182-dg8-b7QjsIlJghfbIwhASFZRKju2q"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diabetes}
              isBlog={false}
              title="Diabetes Prediction System"
              description="The system predicts if a person has diabetes or not based on different parameters namely Glucose, BloodPressure, Insulin, SkinThickness, BMI, Age and Blood Pressure. All these parameters will be taken as input from the user and the system will hence, predict if the person has diabetes or not."
              link="https://github.com/Sakshi23-08/DiabetesPrediction"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BCNN}
              isBlog={false}
              title="Breast Cancer Classification Using Neural Networks"
              description="A Deep Learning project where a simple Neural Network is built using TensorFlow and Keras in python.
              The model is trained using breast_cancer dataset to give accurate results and predict the size of the tumor. "
              link="https://github.com/Sakshi23-08/ML_Breast_Cancer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Graphics}
              isBlog={true}
              title="Graphic Designing"
              description="I have prepared some posters using Photoshop and some online sites. Other than this i have also contributed in designing logos for an event in the college. "
              link="https://drive.google.com/drive/u/0/folders/182-dg8-b7QjsIlJghfbIwhASFZRKju2q"
            />
          </Col>

          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
