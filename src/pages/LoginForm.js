import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom'
import Card from '../Components/Card';

function LoginForm() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userId == "temp@gmail.com" && password == "12345") {
            navigate('/Second')
        } else {
            setUserId('')
            setPassword('')
        }
    };

    const handleForgotPassword = () => {

    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className='center_login'>
                    <h1 className="login-form__header">Welcome to Systempackage</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="login-form__field">
                            <label htmlFor="userId">User ID:</label>
                            <input
                                type="text"
                                id="userId"
                                value={userId}
                                onChange={handleUserIdChange}
                            />
                        </div>
                        <div className="login-form__field">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <button type="submit">Next</button>
                        <button type="button" onClick={handleForgotPassword}>
                            Forgot your password?
                        </button>
                    </form>
                </div>
            </div>
            <Card></Card>
        </div>
    );
}

export default LoginForm;
