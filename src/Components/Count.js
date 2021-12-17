import React from 'react';
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion";

function Count({count,setCount}) {
    const navigate = useNavigate();;

    return (
        <div>
            <div className="category1">How many cups you want???</div>
            <div >
            <motion.button whileHover={{scale:1.1,boxShadow:'0px 0px 2px white'}} animate={{x:[-1000,20,0],transition:{duration:2}}} className="btnw1" onClick={()=>setCount(count+1)} >Increment (+)</motion.button>
            <div className="cnt">{count}</div>
            <motion.button whileHover={{scale:1.1,boxShadow:'0px 0px 2px white'}} animate={{x:[1000,-20,0],transition:{duration:2}}} className="btnw1" onClick={()=>{if((count-1)>=0){setCount(count-1);}else{setCount(0)}}}>Decrement (-)</motion.button>
            </div>
            <div>
                 <motion.button whileHover={{scale:1.1,boxShadow:'0px 0px 2px white'}} animate={{y:[1000,0],transition:{duration:1}}} className="order" onClick={()=>{if(count<=0){window.alert("Order First")}else{navigate('/order')}}}>Order</motion.button>
             </div>
            </div>
    )
}

export default Count;
