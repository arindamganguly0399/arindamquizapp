import { useState} from "react";
import { useHistory } from "react-router";
import "./index.css";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,time
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      history.push("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
 };
  const start=()=>{console.log("hello");};
    return(<> 
     <div className="question">
      <h1 style={{marginTop:"10px"}}>
      <h1>Question {currQues + 1} :</h1>
      </h1>
      <div className="qustioname">
      <h2>{questions[currQues].question}</h2>
      {error && <h3 style={{color : "red"}}> Please choose any options</h3>}
      
      <div className="option">
      
      
          {options &&
            options.map((i) => (
              <button
                className={`selectOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                
                disabled={selected}
              >
                {i}
              </button>
            ))}
      </div>
      </div>
      <div className="nq">
      <button
      href="/"
      onClick={handleQuit}
      className="selectOption">
          Quit
      </button>
      
      <button
      onClick={handleNext}
        className="selectOption">
           {currQues >10 ? "Submit" : "Next Question"}
      </button>
      </div>
     </div>




    </>)

}
export default Question;