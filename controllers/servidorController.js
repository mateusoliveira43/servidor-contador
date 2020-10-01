import NumeroPorExtenso from '../utils/NumeroPorExtenso';

export default function retornaRespostaServidor(req, res) {
  const numeroPorExtenso = new NumeroPorExtenso(req.params.numero);
  const respostaConversao = numeroPorExtenso.retornaRespostaConversao();
  if (!respostaConversao) return res.json({ erro: 'formato do path inválido!' });
  return res.json({ extenso: respostaConversao });
}
