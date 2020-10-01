import retornaRespostaServidor from './numerosPorExtenso';

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
};

Object.entries(testes).forEach(([entrada, saida]) => {
  test(`passando "${entrada}" como parametro, deve retornar "${saida}"`, () => {
    expect(retornaRespostaServidor(entrada)).toBe(saida);
  });
});
