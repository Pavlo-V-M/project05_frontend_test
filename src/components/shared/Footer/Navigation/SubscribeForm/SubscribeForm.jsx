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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValidEmail) {
      try {
        // Логіка відправки даних на сервер для підписки
        setIsSubmitted(true);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className={css.subscribe}>
      <p className={css.subscribeText}>Subscribe to our newsletter. Stay in touch with the latest news and special offers, etc.</p>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className={`${css.input} ${isValidEmail ? '' : css.invalid}`}
        />
        {!isValidEmail && <p className={css.errorMessage}></p>}
        {/* //Enter a valid email */}

        <button type="submit" disabled={!email || !isValidEmail}>
          Subscribe
        </button>
        {isSubmitted && <p className={css.successMessage}>Thank you for subscribing!</p>}
      </form>
    </div>
  );
};

export default SubscribeForm;