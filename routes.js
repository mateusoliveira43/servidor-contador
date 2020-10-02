import express from 'express';
import retornaRespostaIndex from './controllers/indexControler';
import retornaRespostaServidor from './controllers/servidorController';

const route = express.Router();
route.get('/', retornaRespostaIndex);
route.get('/:numero', retornaRespostaServidor);
export default route;
