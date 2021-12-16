import React from 'react';
import img1 from "../images/cofeee.png";
import { Link } from 'react-router-dom';
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
            <div className="btns">
            <Link to="/coffeemenu"><button onClick={()=>setCoffee(true)}>Coffee</button></Link>
            <div className="abc"><i>Or</i></div>
            <Link to="/teamenu"> <button>Tea</button></Link>
            </div>
        </div>
    )
}

export default Home
