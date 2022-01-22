import React,{useState} from 'react';

function Profil() {

  const [data,setdata]=useState({name:"ibrahim",age:34,formation:"fullstack"});

  const [show,setshow]=useState(false);

  const Bib=()=>{
    return (
      <div>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        <h1>{data.formation}</h1>
      </div>
    )
  }

  return (
    <div>
      <button onClick={()=>setshow(!show)}> voir</button>

      { show ? <Bib /> : null}
   </div>)  
 
}

export default Profil;  