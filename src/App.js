import './index.scss';
import React from 'react';
const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0,
  },
  {
    title: 'Компонент - це ... ',
    variants: ['додаток', 'частина додатка або сторінки', 'компонент'],
    correct: 1,
  },
  {
    title: 'Що таке JSX?',
    variants: [
      'Це пустий HTML',
      'Це функція',
      'Це той самий HTML, но з можливістю використовувать JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ви відгадали {correct} відповіді із {questions.length}</h2>
      <a href="/">
        <button>Спробувати ще раз</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariante }) {
  const per = Math.round((step / questions.length) * 100);
  console.log(per);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${per}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => <li onClick={() => onClickVariante(index)} key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)

  const question = questions[step]
  const onClickVariante = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }
  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question={question} onClickVariante={onClickVariante} />
          : <Result correct={correct} />
      }
    </div>
  );
}

export default App;