import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Mr. Bot Doc AI?",
      answer:
        "Mr. Bot Doc AI is an AI-powered assistant designed to help manage your appointments, consultations, and other scheduling needs with ease.",
    },
    {
      question: "How do I register for an account?",
      answer:
        "You can register by clicking on the 'Register' link on the homepage and filling out the registration form with your email and password.",
    },
    {
      question: "How can I contact support?",
      answer:
        "For any support inquiries, feel free to reach out to us via the Contact Us page or email us at support@mrbotdocai.com.",
    },
    {
      question: "Is Mr. Bot Doc AI free to use?",
      answer:
        "Mr. Bot Doc AI offers both free and premium plans. Free plans include basic features, while premium plans unlock additional functionalities.",
    },
    {
      question: "How secure is my personal information?",
      answer:
        "Your data is encrypted and stored securely. We follow industry standards to ensure your personal information remains private and secure.",
    },
    {
      question: "Can I use Mr. Bot Doc AI on my phone?",
      answer:
        "Yes, Mr. Bot Doc AI is accessible via mobile devices, providing a seamless experience across phones, tablets, and desktops.",
    },
    {
      question: "What languages does Mr. Bot Doc AI support?",
      answer:
        "Currently, Mr. Bot Doc AI supports English. We are working on adding more languages in future updates.",
    },
    {
      question: "Can Mr. Bot Doc AI replace a real doctor?",
      answer:
        "No, Mr. Bot Doc AI is an assistant that helps manage schedules and provide information. It does not replace professional medical advice.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <h3 style={styles.question}>{faq.question}</h3>
          <p style={styles.answer}>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  faqItem: {
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "15px",
  },
  question: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#555",
  },
  answer: {
    fontSize: "16px",
    color: "#666",
    marginTop: "5px",
    lineHeight: "1.6",
  },
};

export default FAQ;
