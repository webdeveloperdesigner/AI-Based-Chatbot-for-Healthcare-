import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";

const Home = () => {
  const [chatbotActive, setChatbotActive] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleChatbot = () => {
    setChatbotActive(!chatbotActive);
  };

  const sendMessage = async () => {
    if (chatInput.trim() === "") return;

    const userMessage = chatInput.trim();

    // Add user message to chat
    setChatMessages((prev) => [...prev, { user: "You", text: userMessage }]);
    setChatInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful healthcare assistant for Mr. Bot Doc AI. Provide supportive, informative, and concise health-related responses.",
              },
              {
                role: "user",
                content: userMessage,
              },
            ],
            temperature: 0.7,
            max_tokens: 150,
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "API request failed");
      }

      const data = await response.json();

      if (data.choices && data.choices[0]?.message?.content) {
        setChatMessages((prev) => [
          ...prev,
          { user: "AI Assistant", text: data.choices[0].message.content },
        ]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setChatMessages((prev) => [
        ...prev,
        {
          user: "System",
          text: "Sorry, there was an error processing your request. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input key press (Enter to send)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="home-container">
      {/* Introduction Section */}
      <section className="introduction-section">
        <div className="introduction-content">
          <h1 className="introduction-title">
            Welcome to <br />
            Dr. AI Bot
          </h1>
          <p className="introduction-subtitle">
            At Mr. Bot Doc AI, we believe that everyone deserves access to
            personalized healthcare solutions. Our mission is to empower
            individuals in Mathura by providing innovative health management
            tools that simplify your healthcare journey.
          </p>
          <p className="introduction-subtitle">
            With our advanced AI technology, you can take charge of your health
            like never before. Join us in revolutionizing healthcare and
            experience a new era of health management, where your needs are
            prioritized, and your health is our commitment.
          </p>
          <Link to="/about" className="about-link">
            Learn More About Us
          </Link>
        </div>
        <div className="introduction-image">
          <img
            src={require("../assets/ai-chatbot.png")}
            alt="AI Chatbot"
            className="chatbot-image"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h4 className="subtitle">PERSONALIZED HEALTH SOLUTIONS</h4>
          <h1>Your health, our priority.</h1>
          <p>
            At Mr. Bot Doc AI, we revolutionize healthcare in Mathura by
            providing personalized health advice and seamless appointment
            scheduling for clinics. Our advanced chatbot technology ensures that
            you receive tailored guidance at your fingertips, making health
            management simpler and more efficient. Whether you're seeking advice
            or booking a consultation, we prioritize your well-being with an
            innovative approach that meets your unique needs.
          </p>
          <Link to="/contact" className="contact-link">
            Get in touch
          </Link>
        </div>
        <div className="hero-image">
          <img
            src={require("../assets/healthcare-phone.webp")}
            alt="Healthcare illustration on phone"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h4 className="services-subtitle">HEALTH AT YOUR FINGERTIPS</h4>
        <h2>Personalized advice & easy scheduling</h2>
        <div className="services-grid">
          <div className="service-card">
            <img
              src={require("../assets/personalized-advice.webp")}
              alt="Personalized health advice"
            />
            <h3>Personalized health advice</h3>
            <p>Receive tailored health recommendations from our chatbot.</p>
          </div>
          <div className="service-card">
            <img
              src={require("../assets/appointment-scheduling.webp")}
              alt="Appointment scheduling"
            />
            <h3>Appointment scheduling</h3>
            <p>
              Effortlessly schedule your clinic appointments with our chatbot.
            </p>
          </div>
          <div className="service-card">
            <img
              src={require("../assets/health-support.webp")}
              alt="24/7 health support"
            />
            <h3>24/7 health support</h3>
            <p>Get round-the-clock health assistance whenever you need it.</p>
          </div>
          <div className="service-card">
            <img
              src={require("../assets/Health-Tracking.png")}
              alt="Health tracking"
            />
            <h3>Health Tracking</h3>
            <p>
              Monitor your health metrics with our user-friendly tracking tools.
            </p>
          </div>
          <div className="service-card">
            <img
              src={require("../assets/Nutrition-Advice.png")}
              alt="Nutrition advice"
            />
            <h3>Nutrition Advice</h3>
            <p>Get personalized nutrition plans and dietary recommendations.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h4 className="testimonials-subtitle">WHAT OUR USERS SAY</h4>
        <h2>User Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "Mr. Bot Doc AI has changed the way I manage my health. The
              personalized advice is spot on!"
            </p>
            <h5>- Priya S.</h5>
          </div>
          <div className="testimonial-card">
            <p>
              "Scheduling my appointments has never been easier. I love the
              convenience!"
            </p>
            <h5>- Arjun K.</h5>
          </div>
          <div className="testimonial-card">
            <p>
              "The 24/7 support is a lifesaver. I can get help whenever I need
              it!"
            </p>
            <h5>- Sneha R.</h5>
          </div>
          <div className="testimonial-card">
            <p>
              "Mr. Bot Doc AI has changed the way I manage my health. The
              personalized advice is spot on!"
            </p>
            <h5>- Priya S.</h5>
          </div>
          <div className="testimonial-card">
            <p>
              "Scheduling my appointments has never been easier. I love the
              convenience!"
            </p>
            <h5>- Arjun K.</h5>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <div className={`chatbot ${chatbotActive ? "active" : ""}`}>
        <div className="chat-header">
          <img src={require("../assets/ai-chatbot.png")} alt="AI Assistant" />
          <div className="chat-header-text">
            <h4>AI Health Assistant</h4>
            <p>Online</p>
          </div>
          <button className="close-chat" onClick={toggleChatbot}>
            ×
          </button>
        </div>

        <div className="chat-container">
          <div className="chat-box">
            {chatMessages.map((message, index) => (
              <p key={index} data-user={message.user}>
                <strong>{message.user}:</strong> {message.text}
              </p>
            ))}
            {isLoading && (
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button onClick={sendMessage} disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        💬
      </button>

      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Mr. Bot Doc AI. All rights
            reserved.
          </p>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
