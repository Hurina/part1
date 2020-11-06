import React from 'react'
import ReactDOM from 'react-dom'

const Content = (props) => {
  return (
    <div>
      <p>
      {props.name}, {props.exercises}
      </p>
    </div>
  )
}

function sum (p) {
  let s = 0
  p.forEach(el=>{
    s = s + el.exercises
  }) 
  return s
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
}

console.log(course.name)
course.parts.forEach(value => {
  console.log(value) 
})


return(
  <div>
  <h1>{course.name}</h1> 
  <Content name={course.parts[0].name} exercises={course.parts[0].exercises}/>
  <Content name={course.parts[1].name} exercises={course.parts[1].exercises}/>
  <Content name={course.parts[2].name} exercises={course.parts[2].exercises}/> 
  <p>Total {sum(course.parts)}</p> 
  </div>
  );
}

  
ReactDOM.render(<App />, document.getElementById('root'))



