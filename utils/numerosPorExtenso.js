export default function retornaRespostaServidor(parametroURL) {
  if (!checaNumeroInteiroNoIntervalo(parametroURL)) return false;
  const numeroPorExtenso = converteNumeroParaExtenso(parametroURL);
  return numeroPorExtenso;
}

function checaNumeroInteiroNoIntervalo(parametro) {
  // regex: pode começar com "-" e contém ao menos 1 dígito e no máximo 5 dígitos
  const checagem = parametro.match(/^(-?\d{1,5})$/);
  return checagem;
}

function converteNumeroParaExtenso(parametro) {
  let numeroPorExtenso = '';
  const numero = Number(parametro);
  if (!numero) {
    numeroPorExtenso = 'zero';
    return numeroPorExtenso;
  }
  let semZerosEsquerda = String(numero);
  if (semZerosEsquerda.match(/-/)) {
    numeroPorExtenso += 'menos ';
    semZerosEsquerda.replace('-', '');
  }
  if (semZerosEsquerda.match(/\d{5}/)) {
    // regra 99 mil à 10 mil
    numeroPorExtenso += escreveNumeroPorExtenso(semZerosEsquerda.slice(0, 2), 'mil');
    semZerosEsquerda = semZerosEsquerda.substring(2);
  }
  if (semZerosEsquerda.match(/\d{4}/)) {
    // regra 9 mil à 1 mil
    numeroPorExtenso += escreveNumeroPorExtenso(semZerosEsquerda[0], 'mil');
    semZerosEsquerda = semZerosEsquerda.substring(1);
  }
  if (numeroPorExtenso.match(/ e$/)) {
    numeroPorExtenso = numeroPorExtenso.substring(1);
  }
  numeroPorExtenso = numeroPorExtenso.trim();
  return numeroPorExtenso;
}

function escreveNumeroPorExtenso(parametro, casaDecimal) {
  let numeroPorExtenso = '';
  const numero = Number(parametro);
  if (!numero) return '';
  if (numero > 10) {
    //
    numeroPorExtenso += ' e';
  } else {
    //
    numeroPorExtenso += ' e';
  }
  numeroPorExtenso += casaDecimal;
  return numeroPorExtenso;
}
