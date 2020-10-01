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

  if (!numero) return 'zero';

  let semZerosEsquerda = String(numero);

  if (semZerosEsquerda.match(/-/)) {
    numeroPorExtenso += 'menos ';
    semZerosEsquerda = semZerosEsquerda.replace('-', '');
  }

  if (semZerosEsquerda.match(/\d{5}/)) {
    // regra 99 mil à 10 mil
    if (semZerosEsquerda[0] === '1') {
      numeroPorExtenso += dezenas[semZerosEsquerda.slice(2)];
    } else {
      numeroPorExtenso += dezenas[semZerosEsquerda[0]];
      numeroPorExtenso += ' e ';
      numeroPorExtenso += unidades[semZerosEsquerda[1]];
    }
    numeroPorExtenso += ' mil ';
    semZerosEsquerda = semZerosEsquerda.substring(2);
    // checar se tem "e"
    if (semZerosEsquerda.match(/\d00/) || semZerosEsquerda.match(/0\d{2}/)) {
      numeroPorExtenso += 'e ';
    }
  }

  if (semZerosEsquerda.match(/\d{4}/)) {
    // regra 9 mil à mil
    if (semZerosEsquerda[0] === '1') {
      numeroPorExtenso += 'mil ';
    } else {
      numeroPorExtenso += unidades[semZerosEsquerda[0]];
      numeroPorExtenso += ' mil ';
    }
    semZerosEsquerda = semZerosEsquerda.substring(1);
    // checar se tem "e"
    if (semZerosEsquerda.match(/\d00/) || semZerosEsquerda.match(/0\d{2}/)) {
      numeroPorExtenso += 'e ';
    }
  }

  if (semZerosEsquerda.match(/\d{3}/)) {
    // regra 900 à 100
    if (semZerosEsquerda === '100') {
      numeroPorExtenso += 'cem';
      return numeroPorExtenso;
    }
    if (semZerosEsquerda[0] !== '0') {
      numeroPorExtenso += centenas[semZerosEsquerda[0]];
      numeroPorExtenso += ' e ';
    }
    semZerosEsquerda = semZerosEsquerda.substring(1);
  }

  if (semZerosEsquerda.match(/\d{2}/)) {
    // regra 90 à 10
    if (semZerosEsquerda[0] === '1') {
      numeroPorExtenso += dezenas[semZerosEsquerda.slice(2)];
    } else {
      if (semZerosEsquerda[0] !== '0') {
        numeroPorExtenso += dezenas[semZerosEsquerda[0]];
        numeroPorExtenso += ' e ';
      }
      if (semZerosEsquerda[1] !== '0') {
        numeroPorExtenso += unidades[semZerosEsquerda[1]];
      }
    }
    semZerosEsquerda = semZerosEsquerda.substring(2);
  }

  if (semZerosEsquerda.match(/\d{1}/)) {
    // regra 9 à 1
    numeroPorExtenso += unidades[semZerosEsquerda[0]];
  }

  numeroPorExtenso = numeroPorExtenso.trim();

  if (numeroPorExtenso.match(/ e$/)) {
    numeroPorExtenso = numeroPorExtenso.slice(0, -2);
  }

  return numeroPorExtenso;
}

// numeroPorExtenso += escreveNumeroPorExtenso(semZerosEsquerda.slice(0, 2), 'mil');
// function escreveNumeroPorExtenso(parametro, casaDecimal) {
//   let numeroPorExtenso = '';
//   const numero = Number(parametro);
//   if (!numero) return '';
//   if (numero > 10) {
//     //
//     numeroPorExtenso += ' e';
//   } else {
//     //
//     numeroPorExtenso += ' e';
//   }
//   numeroPorExtenso += casaDecimal;
//   return numeroPorExtenso;
// }

const centenas = {
  9: 'novecentos',
  8: 'oitocentos',
  7: 'setecentos',
  6: 'seiscentos',
  5: 'quinhentos',
  4: 'quatrocentos',
  3: 'trezentos',
  2: 'duzentos',
  1: 'cento',
};

const dezenas = {
  9: 'noventa',
  8: 'oitenta',
  7: 'setenta',
  6: 'sessenta',
  5: 'cinquenta',
  4: 'quarenta',
  3: 'trinta',
  2: 'vinte',
  19: 'dezenove',
  18: 'dezoito',
  17: 'dezesete',
  16: 'dezesseis',
  15: 'quinze',
  14: 'catorze',
  13: 'treze',
  12: 'doze',
  11: 'onze',
  10: 'dez',
};

const unidades = {
  9: 'nove',
  8: 'oito',
  7: 'sete',
  6: 'seis',
  5: 'cinco',
  4: 'quatro',
  3: 'três',
  2: 'dois',
  1: 'um',
};
