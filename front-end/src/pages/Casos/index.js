import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Casos() {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')

    async function submitForm(e) {
        e.preventDefault()
        const data = {
            title,
            description,
            value
        }

        await api.post('casos', data, {
            headers: {
                authorization: ongId
            }
        })
        history.push('/profile')
    }
    return (
        <div className="casos-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                     </Link>
                </section>

                <form onSubmit={submitForm}>
                    <input placeholder="Titulo do caso" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Descricao" value={description} onChange={e => setDescription(e.target.value)} />
                    <input placeholder="Valor em R$" value={value} onChange={e => setValue(e.target.value)} />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
