import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={handleBack}>
        ← Back to Main Page
      </button>

      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.paragraph}>
        Your privacy is important to us. This privacy policy explains what personal data we collect
        and how we use it.
      </p>

      <h2 style={styles.subHeading}>Information We Collect</h2>
      <p style={styles.paragraph}>
        We collect information to provide better services to all of our users. This includes
        information you provide when registering, booking appointments, and interacting with our AI
        chatbot.
      </p>
      <p style={styles.paragraph}>
        <strong>Types of information collected include:</strong>
      </p>
      <ul style={styles.list}>
        <li>Personal Information: Name, email address, and contact information.</li>
        <li>Health Information: Data provided during chatbot interactions.</li>
        <li>Usage Data: Browser type, IP address, and usage statistics.</li>
      </ul>

      <h2 style={styles.subHeading}>How We Use Information</h2>
      <p style={styles.paragraph}>
        The information we collect is used to maintain and improve our services, provide customer
        support, and enhance the overall user experience. Specifically, it helps us:
      </p>
      <ul style={styles.list}>
        <li>Provide accurate healthcare suggestions.</li>
        <li>Improve our chatbot's performance and usability.</li>
        <li>Communicate updates and offer support to our users.</li>
      </ul>

      <h2 style={styles.subHeading}>Data Protection</h2>
      <p style={styles.paragraph}>
        We are committed to protecting your data and use various security measures to ensure your
        information is safe and secure. Measures include:
      </p>
      <ul style={styles.list}>
        <li>Data encryption during storage and transmission.</li>
        <li>Regular security audits and compliance with industry standards.</li>
        <li>Restricted access to personal data by authorized personnel only.</li>
      </ul>

      <h2 style={styles.subHeading}>Your Rights</h2>
      <p style={styles.paragraph}>
        You have the right to access, update, or delete your personal information. To exercise your
        rights, contact us at [email@example.com].
      </p>

      <h2 style={styles.subHeading}>Changes to This Privacy Policy</h2>
      <p style={styles.paragraph}>
        We may update this Privacy Policy periodically to reflect changes in our practices or
        services. We encourage users to review this page regularly.
      </p>

      <h2 style={styles.subHeading}>Contact Us</h2>
      <p style={styles.paragraph}>
        If you have questions or concerns about this Privacy Policy, please contact us at
        [email@example.com].
      </p>
    </div>
  );
};

const styles = {
  container: {
    margin: "0 auto",
    maxWidth: "800px",
    padding: "50px",
    fontFamily: "'Arial', sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  backButton: {
    marginBottom: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  subHeading: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#555",
    marginTop: "20px",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "15px",
  },
};

export default PrivacyPolicy;
