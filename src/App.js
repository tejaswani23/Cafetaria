import React,{useState} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import TeaMenu from "./Components/TeaMenu";
import CoffeeMenu from "./Components/CoffeeMenu";
import Order from "./Components/Order";
import Count from "./Components/Count";

function App() {
  const [coffee,setCoffee] = useState(false);
  const [count,setCount] = useState(0);
  const [tea,setTea] =useState({item :[],sugar:""});
  const [Citem,setItem]=useState({values:[]})

  const addItem=(item)=>{
    console.log(item);
    let items;
    if(!tea.item.includes(item)){
      items = [...tea.item, item];
    } else {
      items = tea.item.filter(i => i !== item);
    }
    setTea({ ...tea, item: items });
  }
  
  const addValues=(item)=>{
    console.log(item);
    let items;
    if(!Citem.values.includes(item)){
      items = [...Citem.values, item];
    } else {
      items = Citem.values.filter(i => i !== item);
    }
    setItem({ ...Citem, values: items });
  }

  return (
    <>
   <Header/>
   <Router>
   <Routes>
   <Route exact path="/" element={<Home setCoffee={setCoffee}/>}/>
   <Route path="/teamenu" element={<TeaMenu addItem={addItem} tea={tea} />}/>
   <Route path="/coffeemenu" element={<CoffeeMenu addValues={addValues} />}/>
   <Route path="/order" element={<Order tea={tea} count={count} coffee={coffee} Citem={Citem} setCoffee={setCoffee} setCount={setCount} setItem={setItem} setTea={setTea}/>}/>
   <Route path="/count" element={<Count count={count}  setCount={setCount} />}/>
   </Routes>
   </Router>
   </>
  );
}

export default App;
