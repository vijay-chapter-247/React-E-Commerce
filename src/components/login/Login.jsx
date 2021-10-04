import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Snackbar from '../snackbar/Snackbar';
import './login.scss';
import { useHistory } from 'react-router';

const Login = (props) => {
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [snackbar, setSnackbar] = useState(true);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    useEffect(() => {
        getUsers();
    }, []);
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setUser((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        });
    }
    const getUsers = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/users');
            setUsers(data);
        } catch (err) {
            console.log('Something went wrong!', err)
        }
    }
    const SubmitEvent = (event) => {
        event.preventDefault();
        const login = users.filter((u) => ((u.password === user.password) && (u.email === user.email)));
        if (!localStorage.getItem('loginUser')) {
            // Put the object into storage
            localStorage.setItem('loginUser', JSON.stringify(login[0]));
            props.Toggle();
            history.push('/profile');
        }
        else {
            setSnackbar(false);
            setTimeout(() => {
                setSnackbar(true);
            }, 3000);
        }
        setUser({ email: "", password: "" });
    }
    return (
        <>
            {
                !localStorage.getItem('loginUser') ?
                    <main className="main mt-10">
                        <div className="container">
                            <div className="wrapper p-relative">
                                <div className="heading">
                                    <div className="bg-white-radius">
                                        <h1 className="text text-success text-large text-center">Sign In</h1>
                                    </div>
                                </div>
                                <form onSubmit={SubmitEvent} className="form">
                                    <div className="input-control">
                                        <input type="email" name="email" className="input-field" placeholder="john@gmail.com" required autoComplete="off" value={user.email} onChange={InputEvent} />
                                    </div>
                                    <div className="input-control">
                                        <input type="password" name="password" className="input-field" placeholder="m38rmF$" required autoComplete="off" value={user.password} onChange={InputEvent} />
                                    </div>
                                    <div className="input-control">
                                        <button className="btn btn-success btn-outlined-success btn-full btn-rounded">Login</button>
                                    </div>

                                    <p className="text text-normal mt-5 text-center">New user? <span><a href="/" className="text text-links">Create an account</a></span>
                                    </p>
                                </form>

                                <div className="striped">
                                    <span className="striped-line"></span>
                                    <span className="striped-text">Or</span>
                                    <span className="striped-line"></span>
                                </div>

                                <div className="d-flex">
                                    <button className="btn btn-success btn-outlined-success btn-rounded">Sign in with Google</button>
                                    <button className="btn btn-success btn-outlined-success btn-rounded">Sign in with Facebook</button>
                                    <button className="btn btn-success btn-outlined-success btn-rounded">Sign in with Apple</button>
                                </div>
                                <span style={snackbar ? { display: 'none' } : { display: 'block' }}  >
                                    <Snackbar />
                                </span>
                            </div>
                        </div>
                    </main >
                    : history.push('/')
            }
        </>
    )
}

export default Login;
