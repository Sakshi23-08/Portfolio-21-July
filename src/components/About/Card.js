
import React from "react";
import '../Card.css';
import VOIS from "../../Assets/ExperienceCard/VOIS.png";
import MD from "../../Assets/ExperienceCard/MD.png";
import TeamEverest from "../../Assets/ExperienceCard/TE.png";


function Card() {


    return (
     
        <div className="">

<div className="container d-flex align-items-center justify-content-center flex-wrap">

<div className="box">
            <div className="body">
                <div className="imgContainer">
                   
                    {/* <img src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""></img>  */}

                   <img src={VOIS} alt = "VOIS"></img>
                    <h> VOIS </h>
                    <p> Project Intern </p>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">VOIS</h3>
                        <p className="fs-6 text-white">Developed ML based Project to assist the medical practitioners to get an idea about the disease a person is
                                                            affected by. </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src={MD} alt="Metrixo Digital"></img>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Metrixo Digital</h3>
                        <p className="fs-6 text-white">Conducting research and writing articles on various technology based topics of about 1500 -2000 words.
</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src={TeamEverest} alt="Team Everest"></img>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Team Everest</h3>
                        <p className="fs-6 text-white">Worked on writing contents for books. Created questions for the efficient learning of students.</p>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
        
        </div>
    );
  }




export default Card;