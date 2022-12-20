import React from "react";
import Button from '@mui/material/Button'







const Start = (props) => {
    const awnsers = [];
  
    
    return (
        <div className="start">
          <h2>JavaScript Quiz</h2>
          <Button  variant="secondary" size='lg' onClick={() => props.handleNextClick()}> Start </Button>
        </div>

    )
}

export default Start;