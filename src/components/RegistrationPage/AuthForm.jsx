import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchAuth, fetchRegister, selectIsAuth } from 'redux/slices/auth';
import { GoEyeClosed } from 'react-icons/go';
import { GoEye } from 'react-icons/go';

import { Navigate } from 'react-router-dom';

import css from './AuthForm.module.css';

const AuthForm = ({ isRegistration }) => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [showNameField, setShowNameField] = useState(isRegistration);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm({
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
    } else if (!isRegistration && data && 'payload' in data && 'token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    } else {
      alert('Failed to ' + (isRegistration ? 'register' : 'login') + '!');
    }
    
  };

  if (isAuth) {
    return <Navigate to="/main"/>
  }

  const handleFormToggle = () => {
    setShowNameField(!isRegistration);
    reset();
  };

  return (
    <div>
      <div className={css.auth_form}>
        <h2 className={css.title}>{isRegistration ? 'Registration' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name input */}
            <div className={css.form_group}>
            {showNameField && (
              <input
                type="text"
                placeholder="Name"
                className={`${css.input} ${nameActive ? css.active : ''}`}
                onFocus={() => setNameActive(true)}
                onBlur={() => setNameActive(false)}
                {...register('name', { required: 'Enter your name' })}
              />
            )}
            {showNameField && formState.errors.name && <span className={css.error_message}>{formState.errors.name.message}</span>}
          </div>

          {/* Email input */}
          <div className={css.form_group}>
            <input
              type="email"
              placeholder="Email"
              className={`${css.input} ${emailActive ? css.active : ''}`}
              onFocus={() => setEmailActive(true)}
              onBlur={() => setEmailActive(false)}
              {...register('email', { required: 'Enter your email' })}
            />
            {formState.errors.email && <span className={css.error_message}>{formState.errors.email.message}</span>}
          </div>

          {/* Password input */}
          <div className={css.form_group}>
            <div className={css.input_wrapper}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                className={`${css.input} ${passwordActive ? css.active : ''}`}
                onFocus={() => setPasswordActive(true)}
                onBlur={() => setPasswordActive(false)}
                {...register('password', { required: 'Enter your password' })}
              />
              <button
                type="button"
                className={css.eye_btn}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <GoEye id="svg" className={css.eye_icon} />
                ) : (
                  <GoEyeClosed id="svg" className={css.eye_icon} />
                )}
              </button>
            </div>
            {formState.errors.password && (
              <span className={css.error_message}>
                {formState.errors.password.message}
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
