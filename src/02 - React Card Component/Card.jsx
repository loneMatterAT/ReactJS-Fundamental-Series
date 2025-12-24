// 02 - ReactJS Card Component
// Import section
import landscapePic from '../assets/02- React Card Component Pics/shibuya.jpg' // first image
import profilePic from '../assets/02- React Card Component Pics/houtarou.jpeg' // second image

function Card() {
  return(
    <>
      {/* First Image : Landscape */}
      <div className="first-card">
        <img className="card-landscape" src={landscapePic} alt="Shibuya Crossing" />
        <h2 className="card-title">Shibuya Crossing - Tokyo Japan</h2>
        <p className="card-text">This is the infamous Shibuya Crossing.</p>
      </div>

      {/* Second Image : Profile Pic */}
      <div className="second-card">
        <img className="card-profile" src={profilePic} alt="Oreki" />
        <h2 className="card-title">Houtarou Oreki</h2>
        <p className="card-text">The most introverted and boring student in classroom.</p>
      </div>
    </>
    
  )
  

}

export default Card