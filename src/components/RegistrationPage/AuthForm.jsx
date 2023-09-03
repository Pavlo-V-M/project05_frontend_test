import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchAuth, fetchRegister, selectIsAuth } from 'redux/slices/auth';
import { 
  GoEyeClosed, 
  GoEye, 
  GoX,
  GoCheckCircle } from 'react-icons/go';
import { BsExclamationCircle  } from "react-icons/bs";
import css from './AuthForm.module.scss';

const AuthForm = ({ isRegistration }) => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [showNameField, setShowNameField] = useState(isRegistration);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors }, formState, reset } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (values) => {
    const data = isRegistration ? await dispatch(fetchRegister(values)) : await dispatch(fetchAuth(values));
    
    if (isRegistration && data) {
      window.localStorage.setItem('token', data.payload.token);
      const emailInput = document.querySelector('.input[name="email"]');
      const passwordInput = document.querySelector('.input[name="password"]');
      if (emailInput) emailInput.classList.add('ok');
      if (passwordInput) passwordInput.classList.add('ok');
    } else if (!isRegistration && data && 'payload' in data && 'token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
      const emailInput = document.querySelector('.input[name="email"]');
      const passwordInput = document.querySelector('.input[name="password"]');
      if (emailInput) emailInput.classList.add('ok');
      if (passwordInput) passwordInput.classList.add('ok');
    } else {
      alert('Failed to ' + (isRegistration ? 'register' : 'login') + '!');
    }
  };

  const handleFormToggle = () => {
    setShowNameField(!isRegistration);
    reset();
  };

  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;  
  const passwordlPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

  if (isAuth) {
    return <Navigate to="/main"/>
  }

  return (
    <div>
      <div className={css.auth_form}>
        <h2 className={css.title}>{isRegistration ? 'Registration' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name input */}
          <div className={css.form_group}>
            {showNameField && (
              <div className={css.input_wrapper}>
                <input
                type="text"
                placeholder="Name"
                className={`${css.input} ${nameActive ? css.active : ''} `}
                onFocus={() => setNameActive(true)}
                onBlur={() => setNameActive(false)}
                {...register('name', { 
                  required: 'Enter your name',
                  minLength: 6
                })}
              />
              <button
                type="button"
                className={css.clear_btn}  
                onClick={() => reset({ name: '' })}  
              >
                <GoX className={css.clearIcon} />
              </button>
              </div>
            )}
            {showNameField && formState.errors.name && <span className={css.warning_message}>{formState.errors.name.message}</span>}
          </div>

          {/* Email input */}
        <div className={`${css.form_group} ${errors.email || formState.isSubmitted ? css.error : ''} ${formState.isValid ? css.ok : ''}`}>
          <div className={css.input_wrapper}>
            <input
              type="email"
              placeholder="Email"
              className={`${css.input} ${emailActive ? css.active : ''}`}
              onFocus={() => setEmailActive(true)}
              onBlur={() => setEmailActive(false)}
              {...register('email', { 
                required: 'Enter your email',
                pattern: {
                  value: emailPattern,
                  message: 'This is an ERROR email'
                }
              })}
            />
            {formState.isValid && !errors.email && (
              <GoCheckCircle className={css.successIcon} />
            )}
            {errors.email && (
              <BsExclamationCircle className={css.errorIcon} />
            )}
          </div>
          {formState.isValid && (
            <span className={`${css.error_message} ${css.success_message}`}>This is a CORRECT email</span>
          )}
          {errors.email && <span className={css.error_message}>{errors.email.message}</span>}
        </div>

          {/* Password input */}
          <div className={`${css.form_group} ${errors.password || formState.isSubmitted ? css.error : ''} ${formState.isValid ? css.ok : ''}`}>            
            <div className={css.input_wrapper}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                className={`${css.input} ${passwordActive ? css.active : ''}`}
                onFocus={() => setPasswordActive(true)}
                onBlur={() => setPasswordActive(false)}
                {...register('password', { 
                  required: 'Enter your password',
                  pattern: {
                    value: passwordlPattern,
                    message: 'This is an ERROR password'
                  }
                })}
              />
              <button
                type="button"
                className={css.eye_btn}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <GoEye id="svg" className={css.eyeIcon} />
                ) : (
                  <GoEyeClosed id="svg" className={css.eyeIcon} />
                )}
              </button>
            </div>
            {formState.isValid && (
          <span className={`${css.error_message} ${css.success_message}`}>This is a CORRECT password</span>
        )}
            {errors.password && (
              <span className={css.error_message}>
                {errors.password.message}
              </span>
            )}
          </div>
          
          <div className={css.buttons}>
            <button disabled={!formState.isValid} className={css.sign_button} type="submit">
              {isRegistration ? 'Sign Up' : 'Sign In'}
            </button>
            <Link
              to={isRegistration ? "/signIn" : "/registration"}
              onClick={handleFormToggle}
              className={css.sign_link}
            >
              {isRegistration ? 'Sign In' : 'Registration'}
            </Link>
          </div>
        </form>
      </div>
      <div>
        <div className={css.image_half}></div>
      </div>
    </div>
  );
};

export default AuthForm; 