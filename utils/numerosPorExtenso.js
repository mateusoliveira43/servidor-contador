export default function retornaRespostaServidor(parametroURL) {
  if (!checaNumeroInteiro(parametroURL)) return false;
  const numero = Number(parametroURL);
  if (!checaNumeroNoIntervalo(numero)) return false;
  const numeroPorExtenso = converteNumeroParaExtenso(numero);
  return numeroPorExtenso;
}

function checaNumeroInteiro(parametro) {
  return parametro;
}

function checaNumeroNoIntervalo(numero) {
  return Math.abs(numero) < 99999;
}

function converteNumeroParaExtenso(numero) {
  return numero;
}

// module.exports = retornaRespostaServidor;
