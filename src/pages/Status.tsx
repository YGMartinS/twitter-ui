import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css'
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Faz sentido!',
    'Parabéns pelo progresso!'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers([...answers, newAnswer])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      setAnswers([...answers, newAnswer])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, odio aliquid? Ex ad recusandae sed, eveniet quibusdam, assumenda, officiis asperiores officia sunt repudiandae ducimus! Recusandae repudiandae fuga quis expedita voluptas."/>

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/YGMartinS.png" alt="Avatar" />
          <textarea id="tweet" placeholder="Tweet your answer" 
            value={newAnswer} 
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>
        <button type="submit"> 
          <PaperPlaneRight /> <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer}/>
      })}
    </main>
  )
}