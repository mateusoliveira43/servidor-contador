import express from 'express';
import retornaRespostaServidor from './controllers/servidorController';

const route = express.Router();
route.get('/:numero', retornaRespostaServidor);
export default route;
