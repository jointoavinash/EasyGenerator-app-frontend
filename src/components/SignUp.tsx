import React, { useState } from 'react';
import api from '../services/api';

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({ email: '', name: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
           // const response = await api.post('/auth/signup', formData);
            //setMessage(response.data.message);
            //window.location.href = '/signin';
            window.location.href = '/welcome';
        } catch (error) {
            setMessage('Error during signup. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Sign Up</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default SignUp;
