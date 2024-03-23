import React from "react";
import MotionHoc from "./MotionHoc";
import './Pages.css'
import { motion } from 'framer-motion';
const HomeComponent = () => {
  let str="Powering"
  let str2="a Billion Smiles"
  const svgStyle = {
  fill:'#FFFFFF',
  };
  return (<div className="homepage-conatiner">
    <div className="main-section-homepage-container">
    <div className="text-container-inside">
    <span className="heading-5">
  {str.split('').map((char, id) => (
    <motion.div
      key={id} // Add key prop for React rendering
      initial={{ y: -(id + 1)*10 ,opacity:0 }}
      animate={{
        y: 0,
        opacity:1,
        transition: { duration: 0.2, delay: (id + 2) * 0.1,ease:"easeInOut" },
      }}
    >
      {char}
    </motion.div>
  ))}
</span>

<span className="heading-5-frist-child">
  {Array.from(str2).map((char, id) => (
      <motion.div
        initial={{ x: (id + 1) * 10, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.8, ease: "easeInOut" },
        }}
      >
        {char!==" "?char:"\u00A0"}
      </motion.div>
  ))}
</span>
<motion.div className="breakline" initial={{ width:0 }}
        animate={{
          width:"50%",
          transition:{duration:0.5,delay:1,ease:"easeInOut"}
        }}>
  <hr></hr>
</motion.div>
     <span className="heading-5-small-child"> 
     <motion.div initial={{ Y: -100, opacity: 0 }}
        animate={{
          Y: 0,
          opacity: 1,
          transition: { duration: 0.3, delay: 1.1, ease: "easeInOut" },
        }}>Innovative.</motion.div> <motion.div  initial={{ Y: -100, opacity: 0 }}
        animate={{
          Y: 0,
          opacity: 1,
          transition: { duration: 0.3, delay: 1.2, ease: "easeInOut" },
        }}>Responsible.</motion.div><motion.div  initial={{ Y: -100, opacity: 0 }}
        animate={{
          Y: 0,
          opacity: 1,
          transition: { duration: 0.3, delay: 1.3, ease: "easeInOut" },
        }}>Inclusive</motion.div></span>
    </div>
    <motion.div 
    initial={{scaleX:1}}
    animate={{width:[2,0.98,0.92,1]}}
       transition={{
        duration:1,
        delay:3,
        repeat:Infinity, // Repeat the animation infinitely
        repeatType:"mirror",
        ease: "easeInOut",
      }}>
    <motion.div className="aeroplane-svg" animate={{
        y: [200,-170], // Array of values for y-direction animation
        x:[-200,480]
      }}
      transition={{
        delay:0.5,
        duration: 1.5, // Repeat the animation infinitely
        repeatType: "reverse", // Reverse the animation direction after each cycle
        ease: "easeInOut",
      }} >
       <img src="/col4.svg" alt="" />
      </motion.div> 
    </motion.div>
   
    <motion.div className="mask-svg" animate={{
       translate:[0.89,1.04,0.98,1.05],
       rotate:[5,0,-5,5],
       scale:[1.01,0.98,1.05,1],
      }}
      transition={{
        duration:1.5,
        repeat:Infinity, // Repeat the animation infinitely
        repeatType:"mirror",
        ease: "easeInOut",
      }} >
       <img src="/col6.svg" alt="" />
      </motion.div> 
    <motion.div className="Doorbean-svg" animate={{
        scaleX:[0.98,1.01,0.94],
        opacity:[0.89,1,0.7],
        scale:[0.98,1,0.989]
      }}
      transition={{
        duration:1.5,
        repeat:Infinity, // Repeat the animation infinitely
        repeatType:"mirror",
        ease: "easeInOut",
      }} >
       <img src="/col3.svg" alt="" />
      </motion.div> 
    <motion.div className="aeroplane1-svg" animate={{
        scaleX:[0.98,1.01,0.94],
        opacity:[0.89,1,0.7],
        y: [0,20], // Array of values for y-direction animation
        x:[-30,0]
      }}
      transition={{
        duration:2,
        repeat:Infinity, // Repeat the animation infinitely
        repeatType:"mirror",
        ease: "easeInOut",
      }} >
       <img src="/col5.svg" alt="" />
      </motion.div> 
    <motion.div className="machine-svg" animate={{
        scaleX:[0.98,1.01,0.96],
        opacity:[0.89,1,0.7],
        rotate:[5,0,-5,0,5],
        y: [0,10], // Array of values for y-direction animation
        x:[-10,0]
      }}
      transition={{
        duration:2,
        repeat:Infinity, // Repeat the animation infinitely
        repeatType:"mirror",
        ease: "easeInOut",
      }} >
       <img src="/Machine.svg" alt="" />
      </motion.div> 
    <motion.div className="chasma-svg" animate={{
        scale:[1.1,1,0.9]
      }}
      transition={{
        duration:1,
        repeat:Infinity, // Repeat the animation infinitely
        repeatType:"mirror",
        ease: "easeInOut",
      }} >
       <img src="/Chasma.svg" alt="" />
      </motion.div> 
    <motion.div className="magnifire-svg" animate={{
        scale:[1.1,1,0.9]
      }}
      transition={{
        duration:1,
        repeat:Infinity, // Repeat the animation infinitely
        repeatType:"mirror",
        ease: "easeInOut",
      }} >
       <img src="/Magnifying.svg" alt="" />
      </motion.div> 
      <motion.div className="aeroplane3-svg" animate={{
        scaleX:[0.98,1.01,0.94],
        opacity:[0.89,1,0.7],
        y: [0,-100], // Array of values for y-direction animation
        x:[10,20]
      }}
      transition={{
        duration:2,
        repeat:Infinity, // Repeat the animation infinitely
        repeatType:"mirror",
        ease: "easeInOut",
      }} >
       <img src="/col4.svg" alt="" />
      </motion.div> 
      <motion.div className="cap-svg" animate={{
        scaleX:[1.1,0.98],
        scaleY:[0.98,1],
      }}
      transition={{
        duration:2,
        repeat:Infinity, // Repeat the animation infinitely
        repeatType:"mirror",
        ease: "easeInOut",
      }} >
       <img src="/topi.svg" alt="" />
      </motion.div> 
      <motion.div className="Book-svg" animate={{
        scaleX:[0.98,1.01,0.94],
        opacity:[0.89,0.95,0.78],
      }}
      transition={{
        duration:2,
        repeat:Infinity, // Repeat the animation infinitely
        repeatType:"mirror",
        ease: "easeInOut",
      }} >
       <img src="/Book (1).svg" alt="" />
      </motion.div> 
    </div>
  </div>) ;
};

const Home = MotionHoc(HomeComponent);

export default Home;
