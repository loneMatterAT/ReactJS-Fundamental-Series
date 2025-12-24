// Importing PropTypes
// import PropTypes from 'prop-types'

function Student(props) { // parameter: props
  return(
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      {/* Note: Boolean value can't store to the DOM, we need to use like ternary operator */}
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// Using PropTypes
// PropTypes find in node modules but we haven't so we need to create and import it to use propTypes amd defaultProps
// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool,
// }

// Using defaultProps for default values or non entered value
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,

}

export default Student