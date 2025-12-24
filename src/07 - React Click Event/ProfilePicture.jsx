
function ProfilePicture() {

  // Link to profile pic
  const imageUrl = './src/assets/07 - React Click Event/dp.jfif';
  
  // Handle the click event and image dissapeared when clicked
  const handleClick1 = (e) => e.target.style.display = "none";
  




  return(
    <>

      <div className="container">
        
        <h2 className="title" onClick={(e) => e.target.display = "visible"}><img className="profile-pic" onClick={(e) => handleClick1(e)} src={imageUrl}></img> Calm Mind</h2>
      </div>

      <button className="proceed-button" onClick={(e) => e.target.style.display = "none"}><img className="profile-pic" onClick={(e) => handleClick1(e)} src={imageUrl}></img> {/*  onClick parameter: e and argument parameter: e */}Click me</button>
      
         
    </>
  ); 

}

export default ProfilePicture