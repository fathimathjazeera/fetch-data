import { useEffect, useState } from "react";


function App() {
const [state,setState]=useState([])
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data)=>{
    return data.json()
  }).then((data)=>{
    setState(data.splice(0,10))
  }).catch((err)=>{
    console.log(err);
  })
})
  return (
  <div>
{state.map((item)=>{
return <h1 key={item.id} style={{backgroundColor:"pink",textAlign:"center"}}>{item.title}</h1>
})}

  </div>
 
  );
}

export default App;







