import "./contact.css";
import mail from "../../assets/email.png";
import phone from "../../assets/viber.png";

const Contact = () => {
  return (
    <div className="contact-body">
      <section id="contact">
        <h1>Contact</h1>
        <h2>Let's connect!</h2>
        <div className="mail-parent">
          <img className="mail" src={mail}></img>
          <p>habocandrei0627@gmail.com</p>
        </div>
        <div className="phone-parent">
          <img className="phone" src={phone}></img>
          <p>6479371904</p>
        </div>
      </section>
      <p>@Andrei 2024</p>
    </div>
  );
};

export default Contact;
