import React, { useState } from 'react';
import './Second.css';
import { useNavigate } from 'react-router-dom'

function Second() {
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const [otp5, setOtp5] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const otp = otp1 + otp2 + otp3 + otp4 + otp5;
        console.log(otp);
        if (otp == "98765") {
            navigate('/Success')
        } else {
            setOtp1('');
            setOtp2('');
            setOtp3('');
            setOtp4('');
            setOtp5('');
        }
    };

    return (
        <div className="login-container">
            <div className="otp-form">
                <form className='form_align' onSubmit={handleSubmit}>
                    <div className="otp-form__header">Enter your OTP</div>
                    <div className="otp-form__fields">
                        <div className="otp-form__field">
                            <input type="text" id="otp1" maxLength="1" value={otp1} onChange={(e) => { setOtp1(e.target.value) }} />
                        </div>
                        <div className="otp-form__field">
                            <input type="text" id="otp2" maxLength="1" value={otp2} onChange={(e) => { setOtp2(e.target.value) }} />
                        </div>
                        <div className="otp-form__field">
                            <input type="text" id="otp3" maxLength="1" value={otp3} onChange={(e) => { setOtp3(e.target.value) }} />
                        </div>
                        <div className="otp-form__field">
                            <input type="text" id="otp4" maxLength="1" value={otp4} onChange={(e) => { setOtp4(e.target.value) }} />
                        </div>
                        <div className="otp-form__field">
                            <input type="text" id="otp5" maxLength="1" value={otp5} onChange={(e) => { setOtp5(e.target.value) }} />
                        </div>
                    </div>
                    <div className="otp-form__submit">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>


            <div className="card">
                <h2>Random Data</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    nulla sit amet quam sodales, a volutpat magna pulvinar. Vivamus ac
                    ante vel tellus laoreet aliquam. Fusce sed odio vitae ex interdum
                    dictum sit amet sed dolor. Sed mollis ipsum vitae eros lacinia, sit
                    amet sollicitudin nisi vestibulum.
                </p>
            </div>
        </div>
    );
}

export default Second;
