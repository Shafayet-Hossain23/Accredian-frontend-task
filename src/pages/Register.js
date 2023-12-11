import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import toast from 'react-hot-toast';
import LoadingElement from '../Components/LoadingElement';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();
    const [pageLoader, setPageLoader] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };
    const handleConfirmPassChange = (e) => {
        setConfirmPass(e.target.value);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        setPageLoader(true)
        const userInfo = {
            userName,
            email,
            password
        };
        if (confirmPass === password) {
            fetch("http://localhost:5000/usersRegister", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {

                    if (data?.message) {
                        setPageLoader(false)
                        // toast.success(data?.message)
                        navigate("/success")
                    }
                    if (data?.error) {
                        setPageLoader(false)
                        toast.error(data.error)

                    }

                })
                .catch(error => {
                    setPageLoader(false)
                    // console.error("Error:", error);
                    toast.error("This didn't work.")

                });
        } else {
            setPageLoader(false)
            toast.error("Passwords must match for registration.");
        }
    };
    if (pageLoader) {
        return <LoadingElement></LoadingElement>
    }
    return (
        <div className='register'>
            <form onSubmit={handleRegisterSubmit} className='registerForm'>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '320px' }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ textAlign: 'center', paddingBottom: '0.75rem', marginBottom: '1rem', borderBottom: '1.5px solid black' }}>
                        Sign-Up Now
                    </Typography>
                    <TextField
                        required
                        label="User Name"
                        type="text"
                        value={userName}
                        onChange={handleUserNameChange}
                        variant="outlined"
                    />
                    <TextField
                        required
                        label="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        variant="outlined"
                    />
                    <TextField
                        required
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        variant="outlined"
                    />

                    <TextField
                        required
                        label="Confirm Password"
                        type="password"
                        value={confirmPass}
                        onChange={handleConfirmPassChange}
                        variant="outlined"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Sign-Up
                    </Button>
                    <div className='flex justify-center'>
                        <p>Already a user? <Link to="/" className='text-red-500 font-bold border-b-2 border-red-500'>Login</Link></p>
                    </div>
                </Box>
            </form>
        </div>
    );
};

export default Register;