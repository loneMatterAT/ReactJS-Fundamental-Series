// Importing props
import PropTypes from 'prop-types';


function UserGreeting(props) { // parameter: props
  // 1. Using Conditional Statements
  // if(props.isLoggedIn) { // if user loggedIn
  //   return <h2>Welcome {props.username}!</h2>
  // }
  // else { // else not loggedIn; Note: We can use return only instead of else statement to exit or terminate the condition
  //   return <h2>Please Login to Continue...</h2>
  // }

  // 2. Using Ternary Operator
  // return(props.isLoggedIn ?   <h2 className="welcome-message">Welcome {props.username}!</h2> : 
  //                             <h2 className="login-prompt">Please Login first to Continue...</h2>)

  // 3. Using Ternary Operator more convenient way
  const welcomeMessage = <h2 className="welcome-message">
                          Welcome {props.username}!
                         </h2>

  const loginPrompt = <h2 className="login-prompt">
                          Please Login first to Continue...
                      </h2>

  // Ternary Operator in concise way
  return(props.isLoggedIn ? welcomeMessage : loginPrompt)
}

// Using PropTypes for debugging purposes
UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,

}

// Using DefaultProps for setting default if loggedIn but don't haven username
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
}

export default UserGreeting