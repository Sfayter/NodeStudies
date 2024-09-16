import express from 'express';

const servidor = express();

servidor.get('/helloword', (req, response) => {
    //código do endpoint
    response.send('Olá! API subiu com sucesso. Boa! :)');
})

servidor.listen(5001, () => console.log('API subiu! Parabéns.'));

