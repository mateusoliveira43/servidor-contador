import NumeroPorExtenso from '../utils/NumeroPorExtenso';

export default function retornaRespostaServidor(req, res) {
  const numeroPorExtenso = new NumeroPorExtenso(req.params.numero);
  const respostaConversao = numeroPorExtenso.retornaRespostaConversao();
  // const mensagemErro = 'Parâmetro de URL inválido! O parâmetro de URL deve ser um número inteiro contido no intervalo [-99999,99999]';
  if (!respostaConversao) return res.status(422).json({ extenso: respostaConversao });
  return res.json({ extenso: respostaConversao });
}
