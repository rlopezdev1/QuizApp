import React from 'react';
import Question from './Question'
import Awnsers from './Awnsers';


const Quiz = () => {
    return (
        <div className='Quiz'>  
            <span> Question 5 of 5 </span>
            <hr></hr>
            <Question/>
            <Awnsers />
           
        
            

        </div>
    )
}

export default Quiz;