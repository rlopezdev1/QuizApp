import React from "react";
import Start from "./Start";
import Quiz from "./Quiz"
import { useState } from "react";
import { questionList } from './data.js'

import '../App.css';


import 'bootstrap/dist/css/bootstrap.css'


const App = () => {
    const [index, setIndex ] = useState(0);
    const [nextQuestion, setNextQuestion] = useState(false);

    let question = questionList[index];

    function handleNextClick() {
        setIndex(index + 1);
    }


    

   return (
        <div className="App">
            { index === 0 && (
                <div>
                    <Start handleNextClick={handleNextClick}/>
                    
                </div> 
            ) }
            { index !== 0 && <Quiz question={question} index={index} handleNextClick={handleNextClick}  /> }
            
            
            
            
        </div>
   ) 
}

export default App;