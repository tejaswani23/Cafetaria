import React from 'react';
import {Link} from "react-router-dom";

function Count({count,setCount}) {
    
    return (
        <div>
            <div>How many cups you want???</div>
            <div>
            <button onClick={()=>setCount(count+1)} >+</button>
            <div>{count}</div>
            <button onClick={()=>{if((count-1)>=0){setCount(count-1);}else{setCount(0)}}}>-</button>
            </div>
            <div>
             <Link to="/order">
                 <button>Order</button>
             </Link>
             </div>
            </div>
    )
}

export default Count;
