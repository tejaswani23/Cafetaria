import React from 'react';
import {Link} from "react-router-dom";

function CoffeeMenu({addValues}) {
    let types=["Latte","Cappuccino","Black","Americano","Espresso","Doppio","Cortado","Red Eye","Galao","Lungo","Macchiato","Mocha","Ristretto","Flat White","Affogato","Irish"];
    return (
       <div>
         {types.map((item, index) => (
         <div key={index}>
         <input value={item} type="checkbox" onClick={e=>addValues(e.target.value)}/>
         <span>{item}</span>
         </div>
         ))}
         <Link to="/count">
         <button>
           Next
         </button>
         </Link>
      </div>
    )
}

export default CoffeeMenu;
