import React, { useState } from 'react';
import './index.css';
import {TextField, MenuItem} from "@material-ui/core"
import node  from "../src/image/pic2.svg";
import { useHistory } from 'react-router';
//import { Button } from '@material-ui/core';

function Register({name,setName , time , setTime, fetchQuestion}) {
  
  
  const [age , setAge] = useState("");
  const [gender , setGender] = useState("");
  const [error , setError] = useState(false);
  const history = useHistory();
  
 


  const handle = ()=>{
    
    if(!name || !age || !gender){
      setError("true");
      return;
    }
    else{
      setError("false");
      fetchQuestion();
      history.push("./quiz");
    }
  }
  return (<>
  <div className="content">
    <div className="reg">
    <div className="highlighter">
     <img src={node}  className="banner" alt="qreg"/>
     <h1 style={{fontSize:30 , color: "yellow", marginBottom : "10px"}}>
        Register Yourself ✍️ 
        </h1>
        {error && <h6 style={{color : "red"}}> please fill all the field</h6>}
        <div className="name">
        <TextField label="Enter Your Full Name" style={{marginBottom:30}} onChange={(e)=>setName(e.target.value)} variant="outlined" />
        
        <TextField select label="Gender" style={{marginBottom:30 , textColor:"white", fontWeight:"300"}} variant="outlined" onChange={(e)=>setGender(e.target.value)}>
            <MenuItem value="male" key="male">Male</MenuItem>
            <MenuItem value="female" key="female">Female</MenuItem>
            <MenuItem value="others" key="others">Others</MenuItem>
        </TextField>
        
        <TextField label="Age" style={{marginBottom:30}} variant="outlined" onChange={(e)=>setAge(e.target.value)}/>
        <button className="btnh" type="number" onClick={handle}>Start Quiz</button>
        
        </div>
        
     </div>
   </div>
   </div>
   </>
  );
}

export default Register;
