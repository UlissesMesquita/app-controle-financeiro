//const token = require('../helpers/jwt');
const request = require('request');



module.exports = {

    index: (req, res) => {
        let nome = req.params.nome;
        res.send('Oi');
        return console.log(nome);
    }

}


