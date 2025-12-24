// Importing CSS Module
// import styles from '../Button Module/Button.module.css'

function Button() {

  // 1. External CSS
  // return(<button className="button">Click me</button>);

  // 2. Module CSS
  // return(<button className={styles.button}>Click me</button>);

  // 3. Inline CSS
  // dashes '-' and semi colon ';' aren't used, 
  // use 'camelCase for naming, strings for CSS values and comma for separating property ',' '

  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  }

  return(<button style={styles}>Click me</button>);

}

export default Button