require('dotenv/config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        req.user = jwt.verify(token, process.env.SECRET__KEY_API);
        next();
    } catch (error) {
        res.status(401).json({message: `Erro na autenticação: ${error}`})
    }
    
}