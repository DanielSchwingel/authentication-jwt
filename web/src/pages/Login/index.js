import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(){
        try {
            const response = await api.post('/login', {login, password});
            localStorage.setItem('@AuthJWT:Token', response.data.token);
            history.push('/customers');
        } catch (error) {
            alert(error);
        }

    }
    return (
        <div className="container">
            <h1>Login</h1>
            <p>Login </p>
            <input 
                type="text" 
                placeholder="Digite o login"
                onChange={event => {setLogin(event.target.value)}}
                value={login}
            />
            <p>Senha </p>
            <input 
                type="password" 
                placeholder="Digite o senha"
                onChange={event => {setPassword(event.target.value)}}
                value={password}    
            />
            <button onClick={handleLogin}>
                LOGAR
            </button>
        </div>
    )
}

export default Login;