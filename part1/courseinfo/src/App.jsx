const Header = (course) => {
  return (
  <>
      <h1>{course.name}</h1>
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
    <p>{course_part.name} {course_part.count}</p>
  </>
  )
}

const Total = ({contents}) => {
  var total = contents[0].count + contents[1].count + contents[2].count
  return (
    <>
    <p>Number of exercises {total}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const data = [
  {name: 'Fundamentals of React', count: 10},
  {name: 'Using props to pass data', count: 7},
  {name: 'State of a component', count: 14},
  ]
  return (
    <>
    <Header name={course} />
    <Content contents={ data } />
    <Total contents={ data } />
    </>
  )
}

export default App
