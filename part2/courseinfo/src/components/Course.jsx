import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const Course = ({course}) => {
  return (
    <>
    <Header course={course.name} />
    <Content contents={course.parts} />
    <Total contents={course.parts} />
    </>
  )
}

export default Course
