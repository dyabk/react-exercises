import React from 'react'

const Header = (props) => (
  <>
    <h1>{props.title}</h1>
  </>
)

const Content = (props) => (
  <div>
    <Part title={props.string1} number={props.number1} />
    <Part title={props.string2} number={props.number2} /> 
    <Part title={props.string3} number={props.number3} /> 
  </div>
)

const Part = (props) => (
  <div>
    <p>{props.title} {props.number}</p>
  </div>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content string1={part1} string2={part2} string3={part3} number1={exercises1} number2={exercises2} number3={exercises3} />
      <Total number1={exercises1} number2={exercises2} number3={exercises3} />
    </div>
  )
}

export default App