import React, { useState } from 'react'; // Import React and the useState hook from the 'react' package
import axios from 'axios'; // Import axios, a library for making HTTP requests

const SubscribeForm = () => {
  const [email, setEmail] = useState(''); // Declare a state variable 'email' and a function 'setEmail' to update it, initialized to an empty string
  const [message, setMessage] = useState(''); // Declare a state variable 'message' and a function 'setMessage' to update it, initialized to an empty string

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Send a POST request to the server with the email address
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage(response.data); // Set the message state to the response from the server
    } catch (error) {
      setMessage('Subscription failed'); // Set the message state to an error message if the request fails
    }
  };

  return (
    <div>
      <h2>Subscribe to our newsletter</h2> {/* Display a heading */}
      <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function to the form's onSubmit event */}
        <input
          type="email" // Specify the input type as email for email validation
          placeholder="Enter your email" // Placeholder text for the input field
          value={email} // Bind the input value to the email state
          onChange={(e) => setEmail(e.target.value)} // Update the email state when the input value changes
          required // Make the input field required
        />
        <button type="submit">Subscribe</button> {/* Button to submit the form */}
      </form>
      {message && <p>{message}</p>} {/* Conditionally render a paragraph to display the message */}
    </div>
  );
};

export default SubscribeForm; // Export the SubscribeForm component as the default export
