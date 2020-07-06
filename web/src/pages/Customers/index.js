import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(()=>{
        api.get('/customers', {
            headers: {
                'Authorization' : localStorage.getItem('@AuthJWT:Token')
            }
        })
        .then(response => setCustomers(response.data))
        .catch(error => alert(error));
    },[]);

    return (
        <div>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>Nome: {customer.nome}</li>
                ))}
            </ul>
        </div>
    )
}

export default Customers;