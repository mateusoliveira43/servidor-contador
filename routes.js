import express from 'express';
import retornaRespostaIndex from './controllers/indexControler';
import retornaRespostaServidor from './controllers/servidorController';

export default routes;
const routes = express.Router();

routes.get('/', retornaRespostaIndex);
routes.get('/:numero', retornaRespostaServidor);
