import Part from './Part.jsx'
const Content = ({contents}) => {
  return (
    <>
      {contents.map(content => 
        <Part key={content.id} course_part={content} />
      )}
    </>
  )
}
export default Content
