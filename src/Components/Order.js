import React from 'react';
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
import "./Home.css";

function Order({tea,count,coffee,Citem,setCoffee,setCount,setItem,setTea}) {
    return (
        <div>
     <div className="container">
      <motion.h2 initial={{scale:1}} animate={{scale:1.1,transition:{duration:3}}}>Thank you for your order ...!!!😄</motion.h2>
      <p>Order Summary:</p>
      <p>You ordered {count} cups of:</p>
      {!coffee  && tea.item.map(item => <div className="a" key={item}>{item}</div>)}
      {coffee && Citem.values.map(item => <div className="a" key={item}>{item}</div>)}
    </div>
    <Link to="/">
    <motion.button whileHover={{scale:1.1,boxShadow:'0px 0px 2px white'}} className="ch" onClick={()=>{setCoffee(false);setCount(0);setTea({item :[],sugar:""});setItem({values:[]});}}>GO BACK TO HOME</motion.button>
    </Link>
        </div>
    )
}

export default Order;
