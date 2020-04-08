import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Profile() {
    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')
    const [casos, setCasos] = useState([])
    const [refresh, setRefresh] = useState(false)
    const history = useHistory()

    useEffect(() => {
        async function fetch() {
            const { data } = await api.get('by-ongs', {
                headers: {
                    authorization: ongId
                }
            })

            setCasos(data)
        }

        fetch()
    }, [refresh, ongId])

    function logout() {
        localStorage.clear()
        history.push('/')
    }

    async function handleDeleteCaso(id) {
        try {
            await api.delete(`casos/${id}`, {
                headers: {
                    authorization: ongId
                }
            })
            setRefresh(!refresh)
        } catch (error) {
            alert('Erro ao deletar caso')
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"></img>
                <span>Bem vindo, {ongName}</span>

                <Link className="button" to="/casos/novo">Cadastre um novo caso</Link>
                <button type="button" onClick={() => logout()}>
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>

            <h1>Casos</h1>

            <ul>
                {casos.map(caso => (
                    <li key={caso.id}>
                        <strong>CASO:</strong>
                        <p>{caso.title}</p>
                        <strong>DECRICAO:</strong>
                        <p>{caso.description}}</p>
                        <strong>VALOR R$</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.value)}</p>

                        <button type="button" onClick={() => handleDeleteCaso(caso.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
