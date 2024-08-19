import React ,{useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formData = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_22vrd15", "template_fdbnypc", formData.current, {
        publicKey: "bMkgJdt74ABX8njpX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("failed");
        }
      );
  };

  return (
    <div className="testing-phase">
      <div className="left-side">
        <img  className="mail-pic" alt="Mail" />
      </div>
      <div className="right-side">
        <div className="contact-us">
          <form ref={formData} onSubmit={sendEmail}>
            <div className="form-group">
              <span>NAME</span>
              <input
                className="form-field"
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <span>E-MAIL</span>
              <input
                className="form-field"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <span>SUBJECT</span>
              <input
                className="form-field"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <span>MESSAGE</span>
              <textarea
                className="form-field"
                name="message"
                aria-label="Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
