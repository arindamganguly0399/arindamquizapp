import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header";
import './App.css';
import axios from "axios";
import Register from "./Register";
import Result from "./Result";
import Quiz from "./Quiz";
import Error from "./Error";


const App=()=> {
  //const [time, setTime]=useState({s:0,m:0});
  const [name , setName] = useState("");
  const [questions , setQuestions] = useState("");
  const [ score , setScore] = useState(0);
  const [time , setTime] = useState({s:0 , m:0});
  const fetchQuestion= async()=>{
    const  {data} = await axios.get(`https://opentdb.com/api.php?amount=10&category=21&type=multiple`);
    setQuestions(data.results);
    console.log(questions);
   
    
    };
    const updatedS=time.s,updatedM=time.m;

   // const run=()=>{
     // if(updatedS===60){
      //  updatedM++;
        //updatedS=0;
      //}
      //return setTime({s:updatedS,m:updatedM})
    //}
    //const start=()=>{
      //run();
      //setInterval(run, 10);
    //} 
    
  return (<>
  <BrowserRouter>
    <div className="App" >
    <Header/>
    <Switch>
      <Route exact path="/">
        <Register name={name} setName={setName}  fetchQuestion={fetchQuestion} time={time} setTime={setTime}/>
      </Route>
      
      <Route exact path="/quiz">
        <Quiz 
         
          name={name}
          time={time}
          setTime={setTime}
          questions={questions}
          score={score}
          setQuestions={setQuestions}
          setScore={setScore}
        />
      </Route>
      
      <Route exact path="/result">
        <Result name={name} score={score}/>
      </Route>
      <Route exact path="">
        <Error/>
      </Route>
    </Switch>
   </div>
   </BrowserRouter>
   </>
  );
}

export default App;
