import retornaRespostaServidor from './numerosPorExtenso';

test('passando "1" como parametro, deve retornar "um"', () => {
  expect(retornaRespostaServidor(1)).toBe('um');
});

test('passando "-1042" como parametro, deve retornar "menos mil e quarenta e dois"', () => {
  expect(retornaRespostaServidor(-1042)).toBe('menos mil e quarenta e dois');
});

test('passando "94587" como parametro, "deve retornar noventa e quatro mil e quinhentos e oitenta e sete"', () => {
  expect(retornaRespostaServidor(94587)).toBe('noventa e quatro mil e quinhentos e oitenta e sete');
});
