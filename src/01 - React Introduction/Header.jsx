// We use function base component
function Header() {

  return(
    // We can create HTML elements
    <header> 
      <h1>My Introduction to ReactJS - 01</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <hr></hr> 
    </header>
  );

}

export default Header // exporting the component