import React from 'react';
import {Link} from "react-router-dom";

function Order({tea,count,coffee,Citem,setCoffee,setCount}) {
    return (
        <div>
         <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered {count} cups of:</p>
      {!coffee && tea.item.map(item => <div key={item}>{item}</div>)}
      {coffee && Citem.values.map(item => <div key={item}>{item}</div>)}
    </div>
    <Link to="/">
    <button onClick={()=>{setCoffee(false);setCount(0);}}>GO BACK TO HOME</button>
    </Link>
        </div>
    )
}

export default Order;
