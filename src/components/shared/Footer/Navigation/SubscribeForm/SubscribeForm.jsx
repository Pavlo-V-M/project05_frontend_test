import React, { useState } from 'react';
import css from "./SubscribeForm.module.scss"

 const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail) {
      setIsSubmitted(true);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className={css.subscribe}>
      <p className={css.subscribeText}> Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="email"
          placeholder="Enter the email"
          value={email}
          onChange={handleEmailChange}
          className={css.input}
          // className={isValidEmail ? '' : 'invalid'}
        />
        {!isValidEmail && <p className="error-message">Enter the email</p>}
        <button type="submit" disabled={!email || !isValidEmail}>
          Subscribe
        </button>
        {isSubmitted && <p className="success-message">Thank you for subscribing!</p>}
      </form>
    </div>
  );
};

export default SubscribeForm;