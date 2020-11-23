import React, {useState} from 'react'
import ReactDOM from 'react-dom'

//making a table with props

const Statistics = (props) => {  
  return (           
     <tr><td> {props.text}</td>
     <td> {props.good} {props.bad} {props.neutral} {props.sum} {props.avarage} {props.positive} {props.text1} </td>
     </tr>          
  )
  }  

//extract statistics to child component

  const AllStat = (props) => {
    if (props.good + props.neutral + props.bad > 0) {
    return (
           <table> 
             <tbody>
    <Statistics text="good" good ={props.good} /> 
    <Statistics text="neutral" neutral ={props.neutral}/>
    <Statistics text="bad" bad ={props.bad}/>
    <Statistics text="all" sum = {props.good+props.neutral+props.bad}/>
    <Statistics text="avarage" avarage = {(props.good*1 + props.neutral*0 + props.bad*-1)/(props.good+props.bad+props.neutral)}/>
    <Statistics text="positive" positive ={props.good/(props.good+props.bad+props.neutral)*100} text1="%" />   
    </tbody>
    </table>  
    )
    }
    
    else
    {
      return (
      <div>No feedback given</div>
      )
    }
    }

// extract the button into its own component
    
const Button = (props) => (
  
  <button onClick = {props.handleClick}>{props.text} </button>
  
  )

  const AllButtons = (props) => {
    return (
      <div>
      <Button handleClick= {props.increaseByOneGood} text="good"/>
      <Button handleClick= {props.increaseByOneNeutral} text="neutral"/>
      <Button handleClick= {props.increaseByOneBad} text="bad" />    
      </div>
    )
  }



// main component
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //display in console

  console.log ("good  "+ good)
  console.log ("neutral  "+ neutral)
  console.log ("bad  " + bad)  

  // main component - for "good" button click

const setToGood = newGood => {
  setGood(newGood)
}
const increaseByOneGood = () => setToGood(good + 1)

  // main component -  for "neutral" button click

  const setToNeutral = newNeutral => {
    setNeutral(newNeutral)
  }
  const increaseByOneNeutral = () => setToNeutral(neutral + 1)

  
// main component - for "bad" button click

const setToBad = newBad => {
  setBad(newBad)
}  
const increaseByOneBad = () => setToBad(bad + 1)

  //display in browser 
    
  return (
    <div>
      <h1>give feedback</h1>      
      <AllButtons increaseByOneGood={increaseByOneGood} increaseByOneBad={increaseByOneBad} increaseByOneNeutral ={increaseByOneNeutral} />      
      <h1>statistics</h1>     
      <AllStat good={good} neutral={neutral} bad={bad}/>
    </div>
  )  
  }

ReactDOM.render(<App />, document.getElementById('root'))