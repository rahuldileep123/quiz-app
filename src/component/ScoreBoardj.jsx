import React, { useEffect, useState } from 'react'
import "./scorBoard.css"


function ScoreBoardj({score,totalScore,}) {
const[resultStatus,setResultStatus]=useState(false)

const showStatus=(score)=>{
    if(score<=totalScore-2){
        setResultStatus(true)
    }
}
useEffect(()=>{
    showStatus(score)
},[])

console.log(resultStatus);
  return (
    <>
    {resultStatus? 
 (<div className='fail'>
 <i className="fa-regular fa-face-frown"></i>
 <h1>Keep Learning & come back!!</h1>
 </div>

 )   
:
(
<div className='success'>
        <i className="fa-regular fa-face-smile"></i>
        <h1>Well Done!!</h1>
        </div>
)
}
        
        

        <h3>Your score:{score}</h3>
        <h4>Total Score:{totalScore} </h4>


    </>
  )
}

export default ScoreBoardj