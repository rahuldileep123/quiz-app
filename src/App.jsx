
import { useState } from 'react'
import './App.css'
import { quizData } from './assets/quizData'
import ScoreBoardj from './component/ScoreBoardj'

function App() {
 const [currentQuestion,setCurrentQuestion]=useState(0)
 const [score,setScore]=useState(0)
 const [clickedOption,setClickedOption]=useState(0)
 const [result,setResult]=useState(false)
//  const [idCorrect,setIdCorrect]=useState()
//  const [idWrong,SetIdWrong]=useState()

const nextQuestion=()=>{
  updateSCore()
  
  if(currentQuestion<quizData.length-1){
    setCurrentQuestion(currentQuestion + 1)
  }else{
    setResult(true)
  }
 setClickedOption(0)
}

const handleReset=()=>{
setResult(false)
setCurrentQuestion(0)
setScore(0)
}




// const selected=(ans)=>{
//  if(ans==quizData[currentQuestion].answer){
//   setClickedOption(id + 1)

//  }
// }

const updateSCore=()=>{
  if(clickedOption==quizData[currentQuestion].answer){
    setScore(score + 1)
  }
}
console.log(score);

  return (
    <>
      <div className="container">
        <div className="quiz-box">
          {result?
        <ScoreBoardj   score={score} totalScore={quizData.length} />
        :
        (
          <>
          <h1>REACT QUIZ</h1>
          <div className="question shadow">
           <span>{currentQuestion + 1}.</span>
         <span>{quizData[currentQuestion].question}</span>
         </div>
         <div className="options">
          {quizData[currentQuestion].options.map((option,index)=>(
            <button key={index} onClick={()=>setClickedOption(index+1)} id={index+1} className={`btn-option ${
             clickedOption==index+1? "checked":null
            }`}>{option}</button>
          ))}
         </div>
         </>
        )
        }
         
          {result? <button onClick={handleReset}  className='start'>Start Again</button>:<button onClick={nextQuestion} className='next'>Next</button>}
        </div>
      </div>
    </>
  )
}

export default App
