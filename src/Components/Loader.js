import React from 'react';
import { motion } from 'framer-motion';
import "./Home.css";

const loaderVariants = {
  animationOne: {
    x: [-10, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  },
  animationTwo: {
    x: [21, 30],
    y: [0, -40],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  },
  animationThree: {
    x: [50, 31],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
};

const Loader = () => {
  return (
    <>
    <div style={{display:"flex"}}>
      <motion.div className="loader1"
        variants={loaderVariants}
        animate={"animationOne"}
      ></motion.div>
       <motion.div className="loader"
        variants={loaderVariants}
        animate={"animationTwo"}
      ></motion.div>
       <motion.div className="loader"
        variants={loaderVariants}
        animate={"animationThree"}
      ></motion.div>
      </div>
    </>
  )
}

export default Loader;