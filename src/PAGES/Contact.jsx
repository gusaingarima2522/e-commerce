import React from 'react'

function Contact() {
  return (
    <>
    <div id="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p><br />
      <h2>Phone- 7291043454</h2>
      <h2>Email Address- garimag.mkvn@gmail.com</h2>
      <form action="submit" method='post'>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
      
    </>
  )
}

export default Contact
