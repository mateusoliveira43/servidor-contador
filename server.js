import express from 'express';
import routes from './routes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}. Acessar http://localhost:${porta}`);
});
