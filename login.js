import React, { useState, useContext } from 'react'; import api from '../services/api';
import { AuthContext } from '../context/AuthContext'; import { useNavigate } from 'react-router-dom';

export default function Login() {
const [form, setForm] = useState({ email: '', password: '' });
 

 
const [error, setError] = useState(null); const { login } = useContext(AuthContext); const navigate = useNavigate();
const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value }); const handleSubmit = async (e) => {
e.preventDefault();
setError(null); try {
const res = await api.post('/api/auth/login', form); await login(res.data.token); navigate('/dashboard');
} catch (err) {
setError(err.response?.data?.message || 'Login failed');
}
};

return (
<div style={{ maxWidth: 400, margin: '2rem auto' }}>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
<div>
<input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
</div>
<div>
<input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
</div>
<button type="submit">Login</button>
{error && <p style={{ color: 'red' }}>{error}</p>}
</form>
</div>
);
}
