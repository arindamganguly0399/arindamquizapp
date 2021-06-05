import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./index.css";

const Result = ({ name, score }) => {
  const history = useHistory();
const [status , setStatus] = useState("");
  useEffect(() => {
    st();
    if (!name) {
      history.push("/");
    }
    
  }, [name, history]);
  const st=()=>{
    if(score < 5){
      setStatus("Failed 👎")
    }
    else if( score >= 5){
      setStatus("Pass 👏")
    }
  }
  

  return (
    <div className="animated-box">
      <span className="title">Final Score : {score}</span>
      <h1>You are {status}</h1>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;