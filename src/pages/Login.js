import React, { useState } from 'react';
import './Login.css'
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import LoadingElement from '../Components/LoadingElement';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [pageLoader, setPageLoader] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPageLoader(true)
        const loginInfo = {
            email,
            password
        };

        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data?.message) {
                    /*  toast.success(data?.message) */
                    setPageLoader(false)
                    navigate('/success')
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
    };
    if (pageLoader) {
        return <LoadingElement></LoadingElement>
    }
    return (
        <div className='login'>
            <form onSubmit={handleSubmit} className='form'>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '280px' }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ textAlign: 'center', paddingBottom: '0.75rem', marginBottom: '1rem', borderBottom: '1.5px solid black' }}>
                        Login Now
                    </Typography>

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
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                    <div className='flex justify-center'>
                        <p>Don't have an account? <Link to="/register" className='text-red-500 font-bold border-b-2 border-red-500'>Sign-Up</Link></p>
                    </div>
                </Box>
            </form>
        </div>

    );
};

export default Login;