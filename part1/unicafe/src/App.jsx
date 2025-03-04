import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
      {props.text}
  </button>
)

const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad)/ (all)
  const positivePercentage = (good * 100) / all

  if (all === 0) {
    return (
    <div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
    )
  }
  return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={positivePercentage + " %"} />
          </tbody>
        </table>
      </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={()=>setGood(good + 1)} text='good' />
      <Button handleClick={()=>setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={()=>setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
