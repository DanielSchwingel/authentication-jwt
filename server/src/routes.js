require('dotenv/config');
const jwt = require('jsonwebtoken');
const express = require('express');
const authentication = require('./middlewares/authentication');
const routes = express.Router();

routes.post('/login', (req, res) => {
    const { login, password } = req.body;
    if (login === 'Daniel' && password === '123' ) {
        var token = jwt.sign(
            { 
                id : 1,
                name : login, 
            },
            process.env.SECRET__KEY_API,
            {
                expiresIn: 300,
            }
        );
        return res.json({login, token});
    }
    return res.status(400).json({ error : 'Usuário ou senha inválidos!' });
});

routes.get('/customers', authentication, (req, res, next) => {
    return res.json([
        {id: 1, nome : 'Daniel'},
        {id: 2, nome : 'Thiago'},
        {id: 3, nome : 'Felipe'},
    ])
})

module.exports = routes;