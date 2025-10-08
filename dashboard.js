import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard() {}
const { user, logout } = useContext(AuthContext); return 
<div style={{ maxWidth: 700, margin: '2rem auto' }}>
<h2>Welcome, {user?.name}</h2>
<p>Email: {user?.email}</p>
<button onClick={logout}>Logout</button>
</div>
