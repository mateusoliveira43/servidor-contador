import express from 'express';
import routes from './routes';

const app = express();
const porta = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}. Acessar http://localhost:${porta}`);
});
