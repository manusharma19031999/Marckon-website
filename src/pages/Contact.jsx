import { useState } from "react";
import "./Contact.css";
import Reveal from "../components/Reveal/Reveal";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formBody = new URLSearchParams();

      formBody.append("firstName", formData.firstName);
      formBody.append("lastName", formData.lastName);
      formBody.append("email", formData.email);
      formBody.append("phone", formData.phone);
      formBody.append("message", formData.message);

      await fetch(
        "https://script.google.com/macros/s/AKfycbytyxXitsXxud47CjMERTDmTBZIRGEf0bLPmtN4RidA1_0Vq-h0MZrD1LmAZMq4_1RcYw/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formBody,
        },
      );

      alert("Thank you! We'll contact you soon.");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Heading */}
        <Reveal>
          <div className="contact-header">
            <h1>Get in Touch with Us</h1>

            <p>Have questions or need our solutions?</p>

            <p>Let us know by filling out the form, and we'll be in touch!</p>
          </div>
        </Reveal>

        {/* Contact Cards */}
        <Reveal delay={100}>
          <div className="contact-info">
            <a href="mailto:manuarun19@gmail.com" className="info-card">
              <div className="icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>E-mail</h4>
                <p>manuarun19@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919024090698" className="info-card">
              <div className="icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h4>Phone</h4>
                <p>+91 9024090698</p>
              </div>
            </a>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={200}>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Jane@gmail.com"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    inputMode="numeric"
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");

                      if (value.length <= 10) {
                        setFormData({
                          ...formData,
                          phone: value,
                        });
                      }
                    }}
                    placeholder="9876543210"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi, I am Jane..."
                  required
                />
              </div>

              <button className="submit-btn">Submit Form</button>
            </form>
          </div>
        </Reveal>

        {/* Social Links */}
        <Reveal delay={300}>
          <div className="social-section">
            <a
              href="https://wa.me/919024090698"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </a>

            <a href="mailto:manuarun19@gmail.com" className="social-item">
              <MdEmail />
              <span>Email</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
