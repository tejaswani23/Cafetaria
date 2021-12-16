import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";

function CoffeeMenu({addValues}) {
    let types=["Latte","Cappuccino","Black","Americano","Espresso","Doppio","Cortado","Red Eye","Galao","Lungo","Macchiato","Mocha","Ristretto","Flat White","Affogato","Irish"];
    return (
      <>
      <div className="category">Add your choices:</div>
       <div className="list">
         {types.map((item, index) => (
         <div key={index}>
         <input value={item} type="checkbox" onClick={e=>addValues(e.target.value)}/>
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

export default CoffeeMenu;
