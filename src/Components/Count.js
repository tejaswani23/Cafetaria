import React from 'react';
import { useNavigate } from 'react-router-dom';;

function Count({count,setCount}) {
    const navigate = useNavigate();;

    return (
        <div>
            <div className="category">How many cups you want???</div>
            <div >
            <button className="btnw1" onClick={()=>setCount(count+1)} >Increment (+)</button>
            <div className="cnt">{count}</div>
            <button className="btnw1" onClick={()=>{if((count-1)>=0){setCount(count-1);}else{setCount(0)}}}>Decrement (-)</button>
            </div>
            <div>
                 <button className="order" onClick={()=>{if(count<=0){window.alert("Order First")}else{navigate('/order')}}}>Order</button>
             </div>
            </div>
    )
}

export default Count;
