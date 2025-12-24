
function ProfilePicture() {

  // Link to profile pic
  const imageUrl = './src/assets/07 - React Click Event/dp.jfif';
  
  // Handle the click event and image dissapeared when clicked
  const handleClick1 = (e) => e.target.style.display = "none";
  
  return(
    <>

      <div className="container">
        <img className="profile-pic" onClick={(e) => handleClick1(e)} src={imageUrl}></img>
        <h2 className="title" onClick={(e) => e.target.display = "visible"}>Calm Mind</h2>
        <h3 className="quote">“A calm mind is not born from peace, but from surviving chaos <br /> without letting it rewrite your principles.”</h3>
      </div>

      <button className="proceed-button" onClick={(e) => e.target.textContent = "“When chaos can no longer move you, solitude becomes your final defense.”"}> {/*  onClick parameter: e and argument parameter: e */}Click me</button>
      
    </>
  ); 

}

export default ProfilePicture