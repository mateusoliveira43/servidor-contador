import NumeroPorExtenso from './NumeroPorExtenso';

const testes = {
  a: false,
  1.1: false,
  '+1': false,
  100000: false,
  '-': false,
  '--1': false,
  0: 'zero',
  '-0': 'zero',
  '00000': 'zero',
  1: 'um',
  '01': 'um',
  '001': 'um',
  '0001': 'um',
  '00001': 'um',
  '000001': false,
  '-1042': 'menos mil e quarenta e dois',
  '-01042': 'menos mil e quarenta e dois',
  94587: 'noventa e quatro mil quinhentos e oitenta e sete',
  94500: 'noventa e quatro mil e quinhentos',
  200: 'duzentos',
  100: 'cem',
  101: 'cento e um',
  1100: 'mil e cem',
  20000: 'vinte mil',
  99999: 'noventa e nove mil novecentos e noventa e nove',
  12345: 'doze mil trezentos e quarenta e cinco',
  12: 'doze',
  19: 'dezenove',
  8307: 'oito mil trezentos e sete',
  30001: 'trinta mil e um',
};

Object.entries(testes).forEach(([entrada, saida]) => {
  const numeroPorExtenso = new NumeroPorExtenso(entrada);
  test(`passando "${entrada}" como parametro, deve retornar "${saida}"`, () => {
    expect(numeroPorExtenso.retornaRespostaConversao()).toBe(saida);
  });
});
