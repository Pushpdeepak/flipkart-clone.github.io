 import { useEffect, useState } from "react";
import Header from "./components/Header";
 import alanBtn from '@alan-ai/alan-sdk-web';
 import Data from './components/Data';
import Card from "./components/Card";

function App() {
  const [category,setCategory]=useState([]);
  useEffect(()=>{
     
    alanBtn({
      key:"111de1dc0372a268a116358af1077e002e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand:({command,product})=>{
        
        if(command==='show'){
          filter(product);
        }
         
      }
    });
    filter('');
    
  },[])

  const filter=(names)=>{
   const filtered= Data.filter(item=>item.name.includes(names));
    setCategory(filtered);
  }
  return (
    <div className="App">
     <Header/>
     
   <div style={{display:'flex',flexWrap:'wrap'}}>
      {
      category.map(item=>(
        <Card
         brand={item.brand}
         image={item.image} 
         name={item.name} 
         rating={item.rating} 
         offerPrice={item.offerPrice}
         actualPrice={item.actualPrice}
         />
        
      ))
     }</div>

    </div>
      
  

  );
  
  }

export default App;
