const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const padraoRouter = require('./routes/padrao.route');
var cors = require('cors')

app.use(cors())

/* Request body para tratar requisições JSON */
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/* Routes */
app.use(padraoRouter);



app.use(express.json());
app.listen(port, () => console.log(`Rodando no IP: 127.0.0.1:${port}`));


