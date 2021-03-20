import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { initializeFirebaseApp } from './LoginManager';
import { createUserHandeler, signInHandeler, googleSignInHandeler, updateUserNameHandeler } from './LoginManager';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [user, setUser] = useState({
        isLoggedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })
    const [error, setError] = useState({});
    const [newUser, setNewUser] = useState(false);
    initializeFirebaseApp();
    //My Functions
    const showError = (name, message) => {
        let newError = { ...error }
        newError[name] = message
        setError(newError)
    }
    const handelResponse = (res, replace) => {
        setUser(res);
        setLoggedInUser(res);
        if (replace) {
            history.replace(from)
        }
    }
    const handleBlur = (e) => {
        let isFieldValid = true
        if (e.target.name === 'name') {
            isFieldValid = e.target.value.length > 3
            if (isFieldValid) {
                showError("name", "")
            } else {
                showError("name", "Name Must Be More Than 3 Letters")
            }
        }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
            if (isFieldValid) {
                showError("email", "")
            } else {
                showError("email", "Please Give Valid Email")
            }
        }
        if (e.target.name === 'password') {
            const passwordLength = e.target.value.length > 6
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = passwordHasNumber && passwordLength
            if (isFieldValid) {
                showError("password", "")
            } else {
                showError("password", "Password Min 6 character and a character ")
            }
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.name && user.email && user.password && user.confirm_password) {
            if (user.password === user.confirm_password) {
                if (newUser && user.name && user.email && user.password) {
                    createUserHandeler(user.email, user.password)
                        .then(res => {
                            updateUserName(user.name)
                            if (res.isLoggedIn) {
                                setUser(res);
                                setNewUser(!newUser)
                                history.push('/login');
                            } else {
                                showError("result", res.error)
                            }
                        })
                }
                showError("confirm_password", "")
            } else {
                showError("confirm_password", "Password not confirmed!");
            }
        }
        else if (!newUser && user.email && user.password) {
            signInHandeler(user.email, user.password)
                .then(res => {
                    if (res.isLoggedIn) {
                        handelResponse(res, true)
                    } else {
                        showError("result", res.error)
                    }
                })
        } else {
            showError("result", "Invalid Credential")
        }
        e.preventDefault();
    }

    const handleToggle = (e) => {
        setNewUser(!newUser)
        setError({})
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        googleSignInHandeler()
            .then(res => {
                handelResponse(res, true);
            })
    }

    const updateUserName = (name) => {
        updateUserNameHandeler(name);
    }
    return (
        <>
            <Header />
            <div className="form-container">
                {error.result && <p className="text-danger text-center">{error.result}</p>}
                {newUser &&
                    <div className="form-container-wrapper">
                        <h1>Create an account</h1>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="name" name="name" className="form-control" id="floatingInput" placeholder="name" onBlur={handleBlur} />
                                <label htmlFor="floatingInput">Name</label>
                                {error.name && <small className="text-danger">{error.name}</small>}
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onBlur={handleBlur} />
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            {error.email && <small className="text-danger">{error.email}</small>}
                            <div className="form-floating">
                                <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onBlur={handleBlur} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            {error.password && <small className="text-danger">{error.password}</small>}
                            <div className="form-floating">
                                <input type="password" name="confirm_password" className="form-control" id="floatingPassword" placeholder="Password" onBlur={handleBlur} />
                                <label htmlFor="floatingPassword">Confirm Password</label>
                                {error.confirm_password && <small style={{ color: "red" }}>{error.confirm_password}</small>}
                            </div>
                            <input type="submit" value="Sign in" id="signin_button" />
                        </form>
                        <div className="form-toggle d-flex justify-content-center align-items-center">
                            <p>Already have an account?</p>
                            <p className="toggle-link" onClick={handleToggle}>&nbsp;Log in</p>
                        </div>
                    </div>
                }
                {!newUser &&
                    <div className="form-container-wrapper">
                        <h1>Create an account</h1>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onBlur={handleBlur} />
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onBlur={handleBlur} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <input type="submit" value="Log in" id="login_button" />
                        </form>
                        <div className="form-toggle d-flex justify-content-center align-items-center">
                            <p>Don't have an account?</p>
                            <p className="toggle-link" onClick={handleToggle}>&nbsp;Create an account</p>
                        </div>
                    </div>
                }
                <div className="login-options">
                    <h3>Or</h3>
                </div>
                <div className="google-button d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faGoogle} className="google-icon" color="red" size="2x" />
                    <input type="submit" value="Continue with Google" id="signin_button" onClick={handleGoogleSignIn} />
                </div>
            </div>
        </>
    );
};

export default Login;