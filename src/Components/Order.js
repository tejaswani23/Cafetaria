import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";

function Order({tea,count,coffee,Citem,setCoffee,setCount,setItem,setTea}) {
    return (
        <div>
     <div className="container">
      <h2>Thank you for your order ...!!!😄</h2>
      <p>Order Summary:</p>
      <p>You ordered {count} cups of:</p>
      {!coffee  && tea.item.map(item => <div className="a" key={item}>{item}</div>)}
      {coffee && Citem.values.map(item => <div className="a" key={item}>{item}</div>)}
    </div>
    <Link to="/">
    <button className="ch" onClick={()=>{setCoffee(false);setCount(0);setTea({item :[],sugar:""});setItem({values:[]});}}>GO BACK TO HOME</button>
    </Link>
        </div>
    )
}

export default Order;
