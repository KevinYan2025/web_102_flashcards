import { useState } from 'react'
import Card from './component/Card'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  const [nextDisable, setNextDisable] = useState(false)
  const [preDisable, setPreDisable] = useState(true)
  const [userInput,setUserInput] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [showCorrectMessage, setShowCorrectMessage] = useState(false)
  const [qandA,setQandA] = useState([
    {question:"What is the \"你好(Nǐ hǎo)!\" in English?",answer:"Hi"},
    {question:"What is the \"你好吗(Nǐ hǎo ma)?\" in English?",answer:"How are you?"},
    {question:"What is the \"好久不见(Hǎo jiǔ bù jiàn)\" in English?",answer:"Long time no see!"},
    {question:"What is the \"我是(Wǒ shì)\" in English?",answer:"I am"},
    {question:"What is the \"学生(Xué shēng)\" in English?",answer:"Student"},
    {question:"What is the \"老师(Lǎo shī)\" in English?",answer:"Teacher"},
    {question:"What is the \"喜欢(Xǐ huān)\" in English?",answer:"Like"},
    {question:"What is the \"我叫(Wǒ jiào)\" in English?",answer:"My name is"},
  ])


  const handleNext = () => {
      if(index == qandA.length -1 ) {
        setNextDisable(true)
      }else {
        setPreDisable(false)
        setNextDisable(false)
        setIndex(index+1);
      }
      setShowErrorMessage(false)
      setShowCorrectMessage(false)
      setUserInput("")
  }
  const handlePre = () => {
    if(index == 0 ) {
      setPreDisable(true)
    }else {
      setPreDisable(false)
      setNextDisable(false)
      setIndex(index-1);
    }
    setShowErrorMessage(false)
    setShowCorrectMessage(false)
    setUserInput("")
}
  const handleUserInput = (event) => {
    setUserInput(event.target.value)
    setShowErrorMessage(false)
    setShowCorrectMessage(false)
    
  }
  const handleSubmit = (event) => {
    if(userInput === qandA[index].answer){
      setShowErrorMessage(false)
      setShowCorrectMessage(true)
    }else{
      setShowErrorMessage(true)
      setShowCorrectMessage(false)
    }
    setUserInput("")
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleShuffle = () => {
    setQandA(shuffleArray([...qandA]))
  }

  return (
    <>
      <h1>Mastering Mandarin: Your Guide to Learning Chinese</h1>
      <h3>Embrace the adventure of learning Mandarin with open 
        arms <br/> as we embark on this enriching journey together!</h3>

        <p>Number of cards:{qandA.length}</p>

      <Card question={qandA[index].question} answer={qandA[index].answer}></Card>
      {showCorrectMessage && <p style={{color:'blue'}}>Congradulation you are correct</p>}
      {showErrorMessage && <p style={{color:'red'}}>Please try again</p>}
      <div className="input">
        <p>Guess the answer here:</p>
        <input type="text" placeholder='answer here' value={userInput} onChange={handleUserInput}/>
        <button className='button' onClick={handleSubmit}>Submit answer</button>
      </div>
      <button className='button' onClick={handlePre} disabled={preDisable}>Pre</button>
      <button className='button' onClick={handleNext} disabled={nextDisable}>Next</button>
      <button className='button' onClick={handleShuffle} >Shuffle Cards</button>
    </>
  )
}

export default App
