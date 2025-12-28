
function OrderingForm() {

  // Link to product pic
  const imageUrl = './src/assets/11 - Ordering Form Program Pics/black-transparent.png';
  const prod1 = './src/assets/11 - Ordering Form Program Pics/black.png';
  const prod2 = './src/assets/11 - Ordering Form Program Pics/white.png';
  const prod3 = './src/assets/11 - Ordering Form Program Pics/pastel-blue.png';
  const prod4 = './src/assets/11 - Ordering Form Program Pics/pastel-pink.png';



  return(
    <>
        <div className="first-container">
          <h1 className="product-name">Wireless Headphones</h1>
          <p className="rates">⭐⭐⭐⭐⭐ <span className="reviews">(102 Reviews)</span></p>
          <p className="product-desc">High-quality wireless over-ear headphones with <br></br> adjustable, cushioned ear cups for maximum <br></br> comfort. Enjoy superior sound with rich bass and <br></br> crisp treble. Built-in microphone for calls.</p>
          <h3 className="product-price">₱2,499.00</h3>

          <img className="product-img" src={imageUrl} alt="Headphone Product"></img> 

          {/* Product color variants */}
          <img className="product-variants-img" src={prod1} alt="Headphone Products"></img> 
          <img className="product-variants-img" src={prod2} alt="Headphone Products"></img> 
          <img className="product-variants-img" src={prod3} alt="Headphone Products"></img> 
          <img className="product-variants-img" src={prod4} alt="Headphone Products"></img> 
        </div>

        <div className="second-container">
          <h1 className="order-section">Order Section</h1>
          <div className="picker-container">
            <h1 className="color-header">Pick a color:</h1>
          </div>
          
            
        </div>
    </>

  );


}

export default OrderingForm 