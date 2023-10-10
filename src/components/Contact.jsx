import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome
import './Contact.css';



const Contact = () => {
  const handleSubmit = (e) => {
    
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form action="https://formspree.io/f/mbjvpwwe" method="POST" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" name="name" required />
        <input type="email" placeholder="Your Email" name="email" required />
        <textarea placeholder="Your Message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="social-icons">
        <a href="https://github.com/smokiinape" target="_blank" rel="noreferrer">
        <i class="fa fa-github-square"></i>
      
        </a>
        <a href="https://www.linkedin.com/in/aman-s-13130a26a/" target="_blank" rel="noreferrer">
        <i class="fa fa-linkedin-square"></i>
        
        </a>
      </div>
      <button id="scrollToTop" onClick={scrollToTop}>To the Top</button>

    </section>
  );
};

export default Contact;
