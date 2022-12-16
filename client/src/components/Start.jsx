import React from "react";
import Quiz from './Quiz';
import Button from 'react-bootstrap/Button'
import { useState } from "react";






const Start = (props) => {
    
    return (
        <div className="start">
          <h2>JavaScript Quiz</h2>
          <Button variant="secondary" size='lg' onClick={() => props.handleNextClick()}> Start </Button>
        </div>

    )
}

export default Start;