import React from "react";
import "./about.css"; // Import the CSS for styling

const About = () => {
  
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Our Healthcare AI Chatbot</h1>
        <p>Revolutionizing healthcare assistance with AI-powered solutions.</p>
      </header>

      {/* Mission Statement Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our healthcare AI chatbot is designed to assist users with accurate
          healthcare information, easy appointment scheduling, personalized
          health tips, and mental health support. We aim to make healthcare
          accessible, efficient, and personalized for everyone.
        </p>
      </section>

      {/* Key Features Section */}
      <section id="features" className="features">
                <div className="container">
                    <h2>Our Features</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Smart Symptom Checker</h3>
                            <p>Analyze symptoms and get accurate recommendations for medical attention.</p>
                        </div>
                        <div className="feature-item">
                            <h3>AI-Powered Diagnostics</h3>
                            <p>Detect diseases using state-of-the-art AI models for faster and reliable results.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Personalized Healthcare Plans</h3>
                            <p>Receive tailored healthcare plans based on your medical history and lifestyle.</p>
                        </div>
                        <div className="feature-item">
                            <h3>24/7 Virtual Assistance</h3>
                            <p>Connect with our AI chatbot or human healthcare professionals anytime.</p>
                        </div>
                    </div>
                </div>
            </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src={require('../components/assets/1712940618196.jpeg')}
              alt="ER.VIVEK"
              className="team-image"
            />
            <h3>Vivek</h3>
            <p>FullStack developer</p>
          </div>
          <div className="team-member">
            <img
              src={require('../components/assets/1698211865913.jpeg')}
              alt="Deepanshu baghel"
              className="team-image"
            />
            <h3>Deepanshu baghel</h3>
            <p>UI Developer</p>
          </div>
          <div className="team-member">
            <img
              src={require('../components/assets/ai-chatbot.png')}
              alt="Paras Mital"
              className="team-image"
            />
            <h3>Paras Mital</h3>
            <p>backend developer</p>
          </div>
          <div className="team-member">
            <img
              src={require('../components/assets/ai-chatbot.png')}
              alt="Rashmi"
              className="team-image"
            />
            <h3>Rashmi</h3>
            <p>content writer</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="about-footer">
        <p>
          <a href="/contact">Contact Us</a> | <a href="/privacy-policy">Privacy Policy</a> | <a href="/faq">Privacy Policy</a>
        </p>
        <p>&copy; 2024 Healthcare AI Chatbot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
