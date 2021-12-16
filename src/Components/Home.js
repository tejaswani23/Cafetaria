import React from 'react';
import img1 from "../images/cofeee.png";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import Loader from './Loader';
import "./Home.css";
function Home({setCoffee}) {
    return (
        <div>
            <img className="image" src={img1} alt="adsd"/>
            <div className="lines"><i>Are you tired,Need some therapy??</i></div>
            <div className="abc">Or</div>
            <div className="lines"><i>Feeling Sleepy😪??</i></div>
            <div className="abc">Don't worry, call your Friend!!!😉</div>
            <div className="lines"><i>Whom you wanna invite??</i></div>
            <Loader/>
            <div className="btns">
            <Link to="/coffeemenu"><motion.button animate={{rotateZ:360}} onClick={()=>setCoffee(true)}>Coffee</motion.button></Link>
            <div className="abc"><i>Or</i></div>
            <Link to="/teamenu"> <motion.button animate={{rotateZ:360}}>Tea</motion.button></Link>
            </div>
        </div>
    )
}

export default Home
