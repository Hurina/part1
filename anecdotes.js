import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


// function to generate random item from massive

function random() {
  return Math.floor(Math.random() * anecdotes.length)
}
console.log("quantity of anecdotes   " + anecdotes.length)

//creating a zero-filled array

const array=anecdotes.map(function() {return 0;})

const vote = [...array]

console.log("vote array" + vote)


// extract button as a child element

const Button = (props) => (  
  <button onClick={props.handleClick}>{props.text}</button> 
)

// child element most voted
const MainAnecdote = (props) => (
  <div>
  <h1>{props.texts} </h1>
  <div>{props.mostanec}</div>
  <div> {props.text1} {props.mostvoice} {props.text2} </div>
  </div>
)


//main component
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVoted] = useState ([...array])

  
const increaseByOneVote = () => {  
vote[selected] += 1
const newVoted = [...vote]    
setVoted(newVoted)
}
 
  const setToSelected = newSelected => {
    setSelected(newSelected)
    }

    console.log (anecdotes[selected]) 

    //counting most voices anecdotes

    const getArrayMax =(array) => {
      return Math.max.apply(null, array)
    }
    const maxVoice=getArrayMax ([...vote])
    console.log(maxVoice)

    //most voted anecdote
     const maxanec = (max2) => {
       for(var i=0; i< vote.length; i++) {
         if (max2===vote[i]) return anecdotes[i]
       }
     }
    
     console.log(maxanec(maxVoice))


    
    // shown in browser
  return (
    <div>
      <MainAnecdote texts = 'Anecdote of the day' mostanec= {anecdotes[selected]} text1='Has'mostvoice= {vote[selected]} text2='votes' />
      <div>
      <Button handleClick= {increaseByOneVote} text="vote" />
      <Button handleClick= {()=> setToSelected (random)} text="next anecdote"/>      
      </div> 
      <MainAnecdote texts='Most voted anecdote' mostanec={maxanec(maxVoice)} text1='Has' mostvoice = {maxVoice} text2='votes' />
      <div>   
      </div>    
         
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

