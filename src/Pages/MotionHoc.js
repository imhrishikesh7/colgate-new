//higher order component to add same functionality to each page

import { motion } from "framer-motion";

const MotionHoc = (Component) => {
  return function HOC() {
    return (
      <motion.div
        initial={{ y: 500 ,opacity:0, borderRadius:"50%" }}
        animate={{
          y: 0,
          opacity:1,
          borderRadius:0,
          transition: { duration:0.8, ease:"easeInOut",type:"spring"},
        }}
        exit={{
          y: -500,
          opacity:0,
          borderRadius:"50%",
          transition: { duration: 0.8, ease:"easeInOut",type:"spring"},
        }}
      >
        <Component />
      </motion.div>
    );
  };
};

export default MotionHoc;
