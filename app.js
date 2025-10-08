import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; import { AuthProvider } from './context/AuthContext';
import Signup from './pages/Signup'; import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() { return (
<AuthProvider>
<BrowserRouter>
<nav style={{ padding: 10 }}>
<Link	to="/signup">Signup</Link>	|	<Link	to="/login">Login</Link>	|	<Link to="/dashboard">Dashboard</Link>
</nav>
<Routes>
<Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
<Route path="/" element={<Login />} />
</Routes>
</BrowserRouter>
</AuthProvider>
);
}

export default App;

