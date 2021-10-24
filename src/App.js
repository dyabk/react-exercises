import React from 'react'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <div>
    <Part name={props.part1.name} exercises={props.part1.exercises} />
    <Part name={props.part2.name} exercises={props.part2.exercises} />
    <Part name={props.part3.name} exercises={props.part3.exercises} />
  </div>
)

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.number1 + props.number2 + props.number3}</p>
    </>
  )
}

const App = () => {
  // const-definitions

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total number1={part1.exercises} number2={part2.exercises} number3={part3.exercises} />
    </div>
  )
}

export default App