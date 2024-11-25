import React, { useState } from 'react';
import api from '../services/api';

const SignIn: React.FC = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/signin', formData);
            setMessage('Login successful!');
            window.location.href = '/welcome';
        } catch (error) {
            setMessage('Error during login. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Sign In</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default SignIn;