import React from 'react';
import './login.scss';

const Login = () => {
    return (
        <>
            <main className="main mt-n20">
                <div className="container">
                    <div className="wrapper">
                        <div className="heading">
                            <h1 className="text text-large">Sign In</h1>
                            <p className="text text-normal">New user? <span><a href="/" className="text text-links">Create an account</a></span>
                            </p>
                        </div>
                        <form name="login" className="form">
                            <div className="input-control">
                                <label htmlFor="email" className="input-label" hidden>Email Address</label>
                                <input type="email" name="email" className="input-field" placeholder="Email Address" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password" className="input-field" placeholder="Password" />
                            </div>
                            <div className="input-control ">
                                <input type="button" name="submit" className="input-submit" value="Login" disabled />
                            </div>
                        </form>
                        <div className="striped">
                            <span className="striped-line"></span>
                            <span className="striped-text">Or</span>
                            <span className="striped-line"></span>
                        </div>
                        <div className="method">
                            <div className="method-control">
                                <a href="/" className="method-action">
                                    <span>Sign in with Google</span>
                                </a>
                            </div>
                            <div className="method-control">
                                <a href="/" className="method-action">
                                    <span>
                                        Sign in with Facebook
                                    </span>
                                </a>
                            </div>
                            <div className="method-control">
                                <a href="/" className="method-action">
                                    <span>Sign in with Apple</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Login;