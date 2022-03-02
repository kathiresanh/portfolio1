import React from "react";
import './App.css';
import { motion } from "framer-motion"
import Skills from "./Skills";

export default function Home(){
    return(
     <div className="container-fluid">
              <div className="row">
         <div className="col-sm-6" >
            <div className="container-fluid " id="home">
             <motion.div  animate={{ x:[600,50] } }
  transition={{  type: "spring", stiffness: 100 }}><h1 className="display-4">Hi I'm <span className="display-2 text-danger">Kathir</span>,</h1></motion.div>
            <motion.div
                 animate={{ y:[400,10] }}
                 transition={{ type: "spring", stiffness: 100 }}> <h5> A MERN Stack web developer, I design and build web<br></br> Applications with best user Experience. </h5></motion.div>


            </div>
         </div>
         <div className="col-sm-6">
          <div className="container-fluid" id="photo">
          <motion.div   animate={{ x:[-600,0]}}
  transition={{ type: "spring", bounce: 0.25 }}> <img src="./images/profile.jpg" class="img-fluid"  id="image"></img></motion.div>
          </div>
         </div>
     </div>
     </div>
    )
}