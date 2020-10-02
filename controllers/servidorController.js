import NumeroPorExtenso from '../utils/NumeroPorExtenso';

export default function retornaRespostaServidor(req, res) {
  const numeroPorExtenso = new NumeroPorExtenso(req.params.numero);
  const respostaConversao = numeroPorExtenso.retornaRespostaConversao();
  if (!respostaConversao) {
    return res.status(422).json({ extenso: identificaErro(req.params.numero) });
  }
  return res.status(200).json({ extenso: respostaConversao });
}

function identificaErro(parametro) {
  if (!parametro.match(/\d/)) return mensagemErro + erroSemDigitos;
  if (parametro.match(/[^-+\d]/)) return mensagemErro + erroCaracter;
  if (parametro.match(/\+/)) return mensagemErro + erroSinalMais;
  if (parametro.match(/\d{6,}/)) return mensagemErro + erroTamanho;
  if (parametro.match(/-\d/)) return mensagemErro + erroFormato;
  return mensagemErro;
}

export const mensagemErro = 'Formato do Parâmetro de URL inválido! ';
export const erroSemDigitos = 'Envie os dígitos do número.';
export const erroCaracter = 'Não envie caracteres diferentes de dígitos ou sinal de menos.';
export const erroSinalMais = 'Não envie sinal de mais. Caso queira enviar um número inteiro positivo, envie apenas seus dígitos.';
export const erroTamanho = 'Não envie números inteiros fora do intervalo [-99999,99999] (que contenham mais de 5 dígitos).';
export const erroFormato = 'Envie apenas dígitos precedidos (ou não) de um único sinal de menos.';
