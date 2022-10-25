import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveFeedback = (feedback) => {
    if(feedback=='good') {
      setGood(prevState => prevState + 1)
    }
    else if(feedback=='neutral') {
      setNeutral(prevState => prevState + 1)
    }
    else if(feedback=='bad') {
      setBad(prevState => prevState + 1)
    }
    else {
      alert('Error: Feedback type did\'nt provided')
    }
  }

  const getAverage = () => {
    let allPoints = 0
    let feedbackAmount = good + neutral + bad

    allPoints = good - bad
    return allPoints > 0 ? allPoints / feedbackAmount : 0
  }

  const getPositivePercentage = () => {
    let feedbackAmount = good + neutral + bad

    return feedbackAmount > 0 ? (100 * good) / feedbackAmount : 0
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => giveFeedback('good')} text='good' /> <Button onClick={() => giveFeedback('neutral')} text='neutral' /> <Button onClick={() => giveFeedback('bad')} text='bad' />

      <h1>statistics</h1>
      {
        good || neutral || bad ?
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          average={getAverage()}
          positivePercentage={getPositivePercentage()}
        /> :
        <p>No feedback given</p>
      }
    </div>
  )
}

export default App