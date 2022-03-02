import { motion } from "framer-motion"
import react from "react"


export default function Skills(){
    
    var data = [{
        name:"React Js",
        image:"1.png"
    },{
        name:"Node Js",
        image:"2.png"
    },{
        name:"MongoDB",
        image:"3.png"
    },{
        name:"HTML",
        image:"4.jpg"
    },{
        name:"CSS",
        image:"5.jpg"
    },{
        name:"Java Script",
        image:"6.png"
    },{
        name:"SQL",
        image:"7.jpg"
    },{
        name:"Express",
        image:"8.png"
    },{
        name:"Axios",
        image:"9.png"
    }]
    return(
   <div className="container-fluid">
         <div className="row" >
        <motion.div animate={{ x:[700,20] } }
  transition={{  type: "spring", stiffness: 100 }}> <div className="col-lg-12 text-danger  text-center mt-5"><h1 class="display-3">Tech-Skills</h1></div></motion.div>
          <div className="col-sm-2">

          </div>
          <div className="col-sm-8" id="bigbox">
             
                  {
          data.map((obj)=>{
              return   <motion.div   animate={{
                scale: [1,1.2,1.2,1],
               
               
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}> <div class="card" id="images">
              <h5 class="card-title">{obj.name}</h5>
             
            <img class="card-img-top mt-3" src={`./images/${obj.image}`} alt="Card image cap"/>
         
              </div></motion.div>     
         
          })
      }
          </div>
     </div>
   </div>
    )
}