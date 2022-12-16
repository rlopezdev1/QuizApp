import React from 'react';

import Button from 'react-bootstrap/Button';



const Quiz = (props) => {
    return (
        <div className='Quiz'>  
            <span> Question {props.index} of 5 </span>
            <hr></hr>
            <div className="Question">
                <p>{props.question.question}</p>
            </div>
            <div className='container'>
                <div className='awnsers'><p>{ props.question.awnserA }</p></div>
                <div className='awnsers'><p>{ props.question.awnserB }</p></div>
                <div className='awnsers'><p>{ props.question.awnserC }</p></div>
                <div className='awnsers'><p>{ props.question.awnserD }</p></div>
            </div>
            
            <Button variant='secondary' size='lg' onClick={() => props.handleNextClick()}> Next </Button>
        
            

        </div>
    )
}

export default Quiz;


