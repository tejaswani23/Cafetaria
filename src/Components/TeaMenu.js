import React from 'react';
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
import img1 from "../images/cofeee.png";
import "./Home.css";

function TeaMenu({addItem,tea}) {
  let types=["Green Tea","Yellow Tea","White Tea","Wulong Tea","Red Tea","Dark Tea"];
    return (
      <>
      <div className="flex">
       <motion.div className="category" animate={{x:[-1000,10,-10,0],transition:{duration:2}}}>Choose your choices:</motion.div>
       <div className="list1">
         {types.map((item, index) => (
         <div key={index}>
         <input value={item} type="checkbox" onClick={e=>addItem(e.target.value)}/>
         <span>{item}</span>
         </div>
         ))}
         <Link to="/count">
         <motion.button whileHover={{scale:1.1,boxShadow:'0px 0px 2px white'}} animate={{y:[1000,0],x:[-10,10,0,-10,10,0],transition:{duration:1}}} className="btnw">
           Next
         </motion.button>
         </Link>
      </div>
      <motion.img initial={{scale:0.5}} animate={{scale:1,transition:{yoyo:Infinity,duration:3}}}className="image1" src={img1} alt="adsd"/>
      </div>
      </>
    )
}

export default TeaMenu;
