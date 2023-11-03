import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    // navigate
    const navigate = useNavigate();

    // Create Account Function
    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError('Password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <div>
            <h1>Create Account</h1>
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
            <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
            <button onClick={createAccount}>Create Account</button>
            <Link to='/login'><p>Already have an account? Log in here</p></Link>
        </div>
    );
}

export default CreateAccountPage;
