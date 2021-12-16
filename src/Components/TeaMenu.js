import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";

function TeaMenu({addItem,tea}) {
  let types=["Green Tea","Yellow Tea","White Tea","Wulong Tea","Red Tea","Dark Tea"];
    return (
      <>
       <div className="category">Choose your choices:</div>
       <div className="list">
         {types.map((item, index) => (
         <div key={index}>
         <input value={item} type="checkbox" onClick={e=>addItem(e.target.value)}/>
         <span>{item}</span>
         </div>
         ))}
         <Link to="/count">
         <button className="btnw">
           Next
         </button>
         </Link>
      </div>
      </>
    )
}

export default TeaMenu;
