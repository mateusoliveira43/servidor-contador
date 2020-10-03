import express from 'express';
import retornaRespostaIndex from './controllers/indexControler';
import retornaRespostaServidor from './controllers/servidorController';

const routes = express.Router();
export default routes;

routes.get('/', retornaRespostaIndex);
routes.get('/:numero', retornaRespostaServidor);
