const Header = (course) => {
  return (
  <>
      <h1>{course.course}</h1>
  </>
  )
}

const Content = ({contents}) => {
  return (
    <>
      <Part course_part={contents[0]}/>
      <Part course_part={contents[1]}/>
      <Part course_part={contents[2]}/>
    </>
  )
}

const Part = ({course_part}) => {
  return (
  <>
    <p>{course_part.name} {course_part.exercises}</p>
  </>
  )
}

const Total = ({contents}) => {
  var total = contents[0].exercises + contents[1].exercises + contents[2].exercises
  return (
    <>
    <p>Number of exercises {total}</p>
    </>
  )
}


const App = () => {
const course = {
  name: 'Half Stack application development',
  parts: [
  {name: 'Fundamentals of React', exercises: 10},
  {name: 'Using props to pass data', exercises: 7},
  {name: 'State of a component', exercises: 14},
  ]
}
  return (
    <>
    <Header course={course.name} />
    <Content contents={ course.parts } />
    <Total contents={ course.parts } />
    </>
  )
}

export default App
