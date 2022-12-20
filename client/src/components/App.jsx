import React from "react";
import Start from "./Start";
import Quiz from "./Quiz"
import { useState } from "react";
import { questionList } from './data.js'

import '../App.css';




const App = () => {
    const [index, setIndex ] = useState(0);
    const [state, setState ] = useState(true);

    const [choices, setChoices] = useState([]);
    

    let question = questionList[index];
    const correctAwnsers = [];
    


    questionList.forEach( question => {
        correctAwnsers.push(question.correctAwnser);
    } )

    function handleNextClick() {
        if(state === true) {
            setState(false);
        } else {
            setIndex(index + 1);
        }
    
    }

    


    console.log("Correct Awnsers: " + correctAwnsers);
    console.log("Selected Awnsers: " + choices);


   return (
        <div className="App">
            { index === 0 && (
                <div>
                    <Start handleNextClick={handleNextClick}/>
                    
                </div> 
            ) }
            { state === false && <Quiz choices={choices} correctAwnsers={correctAwnsers} setChoices={setChoices} question={question} index={index} setIndex={setIndex} questionList={questionList} handleNextClick={ ()=> handleNextClick() }  /> }
            
            
            
            
        </div>
   ) 
}

export default App;