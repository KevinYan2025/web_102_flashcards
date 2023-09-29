import { useState } from 'react'
import Card from './component/Card'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  const handleNext = () => {
      setIndex( Math.floor(Math.random() * QandA.length));
  }

  const QandA = [
    {question:"What is the \"你好(Nǐ hǎo)!\" in English?",answer:"\"Hi!\""},
    {question:"What is the \"你好吗(Nǐ hǎo ma)?\" in English?",answer:"\"How are you?\""},
    {question:"What is the \"好久不见(Hǎo jiǔ bù jiàn)\" in English?",answer:"\"Long time no see!\""},
    {question:"What is the \"我是(Wǒ shì)\" in English?",answer:"\"I am\""},
    {question:"What is the \"学生(Xué shēng)\" in English?",answer:"\"Student\""},
    {question:"What is the \"老师(Lǎo shī)\" in English?",answer:"\"Teacher\""},
    {question:"What is the \"喜欢(Xǐ huān)\" in English?",answer:"\"Like\""},
    {question:"What is the \"我叫(Wǒ jiào)\" in English?",answer:"\"My name is \""},

  ]
  return (
    <>
      <h1>Mastering Mandarin: Your Guide to Learning Chinese</h1>
      <h3>Embrace the adventure of learning Mandarin with open 
        arms <br/> as we embark on this enriching journey together!</h3>

        <p>Number of cards:{QandA.length}</p>

      <Card question={QandA[index].question} answer={QandA[index].answer}></Card>
      <button className='button' onClick={handleNext}>Next</button>
    </>
  )
}

export default App
