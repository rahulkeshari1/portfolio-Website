import React from "react";

const Contact = () => {
  return React.createElement(
    "section",
    { id: "contact", className: "section contact" },
    React.createElement("h1", { className: "section-title" }, "Contact"),
    React.createElement(
      "p",
      { className: "contact-text" },
      "Feel free to reach out to me via email at ",
      React.createElement(
        "a",
        { href: "mailto:rahulkeshari3365@gmail.com", className: "email-link" },
        "rahulkeshari3365@gmail.com"
      ),
      ". I am happy to hear from anyone!"
    ),
    // React.createElement("p", { className: "contact-text" }, "Phone: (123) 456-7890")
  );
};

export default Contact;
