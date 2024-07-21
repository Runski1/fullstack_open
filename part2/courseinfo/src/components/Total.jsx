const Total = ({contents}) => {
  var total = contents.map(
    content => content.exercises
  ).reduce(
    (sum, value) => {
    return sum + value
  }, 0)

  return (
    <>
    <p>Number of exercises {total}</p>
    </>
  )
}
export default Total
