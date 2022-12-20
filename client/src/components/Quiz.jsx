import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button'
import CircleIcon from '@mui/icons-material/Circle';



const Quiz = (props) => {

    // Logic for stopping the quiz when question limit is reached.
    // if (nextQuestion < questions.length) {
    //     setCurrentQuestion(nextQuestion);
    // } else {
    //     alert('you reached the end of the quiz');
    // }
    
    


    function handleClick(e)  {
        console.log('Value of index: ' + props.index);
        console.log('Value of questionList.length: ' + props.questionList.length);

        if( props.index < props.questionList.length -1){
            // This will increment index thus moving to next question set
            props.setChoices(choices => [...choices, e.target.value]);
            console.log(props.choices);
            props.setIndex(props.index +1);
        } else {
            alert('You reached the end of the quiz');
        }
        
    }
  


    return (
        <div className='Quiz'>  
            <span> Question {props.index + 1} of {props.questionList.length} </span>
            <hr></hr>
            <div className="Question">
                <p>{props.question.question}</p>
            </div>
            <div className='container'>
                <div className="awnsers"><Button color='primary' onClick={handleClick} value="a">{"A.) " + props.question.awnsers.a }</Button></div>
                <div className="awnsers"><Button onClick={handleClick} value="b">{"B.) " + props.question.awnsers.b }</Button></div>
                <div className="awnsers"><Button onClick={handleClick} value="c">{"C.) " + props.question.awnsers.c }</Button></div>
                <div className="awnsers"><Button onClick={handleClick} value="d">{"D.) " + props.question.awnsers.d }</Button></div>
            </div>
            
            <Button onClick={() => props.handleNextClick()} > Next </Button>


            <hr></hr>
            <div>
            </div>
            

        </div>
    )
}

export default Quiz;


