import React from "react";

function Contact() {
  return (
    <div className="container">
        <h3>Contact Us</h3>
      <form action="" method="post">
        <input type="text" placeholder="Enter your name" />
        <br />
        <input type="email" placeholder="Enter your email" />
        <br />
        <textarea
          name=""
          placeholder="Enter your message"
          id=""
          cols="30"
          rows="10"
        ></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
