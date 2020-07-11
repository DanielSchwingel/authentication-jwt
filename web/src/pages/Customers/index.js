import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(()=>{
        api.get('/customers', {
            headers: {
                'Authorization' : localStorage.getItem('@AuthJWT:Token')
            }
        })
        .then(response => setCustomers(response.data))
        .catch(error => {
            alert(error)
            }
        );
    },[]);

    return (
        <div>
            <h1>Lista de Clientes</h1>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>Nome: {customer.nome}</li>
                ))}
            </ul>
        </div>
    )
}

export default Customers;