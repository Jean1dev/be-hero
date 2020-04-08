import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const history = useHistory()

    async function handleRegister(event) {
        event.preventDefault()
        const data = {
            name,
            email, 
            whatsapp,
            city,
            uf
        }

        const res = await api.post('ongs', data)
        alert(`Seu Id de cadastro e ${res.data.id}`)
        history.push('/')
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>

                    <h1>Cadastro</h1>
                    <p>Faca seu cadastro</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                     </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
                    <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="UF" width={80} value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
