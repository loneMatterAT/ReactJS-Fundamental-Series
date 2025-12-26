// Importing the React useState
import React, {useState} from 'react';

function MyComponent() {

  // Create a stateful variable for name
  const [name, setName] = useState("Guest"); // initial value of useState: "Guest"

  // Create a stateful variable for quantity
  const [quantity, setQuantity] = useState(1); // initial value: 1 (pretend we are ordering something like buy one item on Online shop, automatically default value equal to 1 quantity)

  // Create a stateful variable for comment
  const [comment, setComment] = useState("");

  // Create a stateful variable for select payment
  const [payment, setPayment] = useState(""); 

  // Pair of two radio button for a delivery method, it's either a pickup or delivery
  const [shipping, setShipping] = useState("Delivery");


  // Function to handle a name change
  // Call this function when we type something or change in textbox
  function handleNameChange(event) { // parameter: event
    // When change the value of <input> element, invoke the setName() function
    setName(event.target.value); // event object parameter -> access the target -> get the value property
  }

  // Function to handle the quantity
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  // Function to handle the comment
  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  // Function to handle the select payment
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  // Function to handle the shipping change
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
      <div>
        {/* We use onChage event handler to handle the function named 'handleNameChange' */}
        <input value={name} onChange={handleNameChange} type="text" />

        {/* When we type text on textbox, it update the <p> tag in real-time same as we been type in textbox */}
        <p>Name : {name}</p>

        {/* Textbox for quantity */}
        <input value={quantity} onChange={handleQuantityChange} type="number" />

        {/* When we type text on textbox, it update the <p> tag quantity in real-time same as we been type in textbox */}
        <p>Quantity: {quantity}</p>

        {/* Textarea for comment */}
        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>

        {/* When we type text/comment on textarea, it update the <p> tag comment in real-time same as we been type in textarea */}
        <p>Comment: {comment}</p>

        {/* Select element for choosing a payment method */}
        <select value={payment} onChange={handlePaymentChange} name="payment-method" id="payment">
          <option value="">Select an payment option</option>
          <option value="GCash">GCash</option>
          <option value="PayMaya">PayMaya</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>

        {/* When we select a payment option, it update the <p> tag in real-time same as we been select in in dropdown option */}
        <p>Payment: {payment}</p>

        {/* Radio button for delivery pickup and delivery*/}
        <label name="pickup">
          <input type="radio" value="Pick Up" for="pickup"
                 checked={shipping === "Pick Up"} // if this expression is true
                 onChange={handleShippingChange} // then call/trigger the onChange event handler that handle function named 'handleShippingChange'
          /> 
          Pick Up
        </label> <br/>

        <label name="delivery">
          <input type="radio" value="Delivery" for="delivery"
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}
          />
          Delivery
        </label>
        <p>Shipping: {shipping}</p>

        
      </div>
  );
}

export default MyComponent