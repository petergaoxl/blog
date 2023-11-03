import React from 'react';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // navigate
    const navigate = useNavigate();

    // Create login Function
    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');

        } catch (e) {
            setError(e.message);
        }
    }
    return (
        <div>
            <h1>Log In</h1>
            {/* If the error exist, then print it out */}
            {error && <p className='error'>{error}</p>}
            <input
                placeholder='Your Email Adress'
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <button onClick={logIn}>Log in</button>
            <Link to='/create-account'><p>Don't have an account? Create one here</p></Link>
        </div>
    );
}

export default LoginPage;
