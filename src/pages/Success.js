import React, { useState } from 'react';
import './Success.css';
import { useNavigate } from 'react-router-dom'

function Success() {
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
        <div className="container">
            <h1 className='text'>Success</h1>
        </div>
    );
}

export default Success;
