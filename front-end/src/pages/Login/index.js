import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import './styles.css';
import herosImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Login() {
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const { data } = await api.post('omnistack11-login', { id })   
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', data.name)
            
            history.push('profile')
        } catch (error) {
            alert('Falha no login')
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"></img>
                <form onSubmit={handleLogin}>
                    <h1> Faca seu login</h1>

                    <input
                        value={id}
                        onChange={e => setId(e.target.value)}
                        placeholder="Sua ID"
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Nao tenho cadastro
                     </Link>
                </form>
            </section>
            <img src={herosImg} alt="Heros"></img>
        </div>
    );
}
