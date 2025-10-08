import React, { createContext, useState, useEffect } from 'react'; import api from '../services/api';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const loadUser = async () => {
const token = localStorage.getItem('token'); if (!token) { setLoading(false); return; }
try {
const res = await api.get('/api/auth/me'); setUser(res.data);
} catch (err) {
 

 
console.error(err); localStorage.removeItem('token'); setUser(null);
} finally { setLoading(false);
}
};

useEffect(() => { loadUser(); }, []);

const login = (token) => { localStorage.setItem('token', token); return loadUser();
};

const logout = () => { localStorage.removeItem('token'); setUser(null);
};

return (
<AuthContext.Provider value={{ user, loading, login, logout }}>
{children}
</AuthContext.Provider>
);
};

