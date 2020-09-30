import retornaRespostaServidor from './numerosPorExtenso';

test('passando "a" como parametro, deve retornar false', () => {
  expect(retornaRespostaServidor('a')).toBe(false);
});

test('passando "1.1" como parametro, deve retornar false', () => {
  expect(retornaRespostaServidor('1.1')).toBe(false);
});

test('passando "+1" como parametro, deve retornar false', () => {
  expect(retornaRespostaServidor('+1')).toBe(false);
});

test('passando "100000" como parametro, deve retornar false', () => {
  expect(retornaRespostaServidor('100000')).toBe(false);
});

test('passando "-" como parametro, deve retornar false', () => {
  expect(retornaRespostaServidor('-')).toBe(false);
});

test('passando "--1" como parametro, deve retornar false', () => {
  expect(retornaRespostaServidor('--1')).toBe(false);
});

test('passando "0" como parametro, deve retornar "zero"', () => {
  expect(retornaRespostaServidor('0')).toBe('zero');
});

test('passando "-0" como parametro, deve retornar "zero"', () => {
  expect(retornaRespostaServidor('0')).toBe('zero');
});

test('passando "00000" como parametro, deve retornar "zero"', () => {
  expect(retornaRespostaServidor('00000')).toBe('zero');
});

test('passando "1" como parametro, deve retornar "um"', () => {
  expect(retornaRespostaServidor('1')).toBe('um');
});

test('passando "01" como parametro, deve retornar "um"', () => {
  expect(retornaRespostaServidor('01')).toBe('um');
});

test('passando "001" como parametro, deve retornar "um"', () => {
  expect(retornaRespostaServidor('001')).toBe('um');
});

test('passando "0001" como parametro, deve retornar "um"', () => {
  expect(retornaRespostaServidor('0001')).toBe('um');
});

test('passando "00001" como parametro, deve retornar "um"', () => {
  expect(retornaRespostaServidor('00001')).toBe('um');
});

test('passando "000001" como parametro, deve retornar false', () => {
  expect(retornaRespostaServidor('000001')).toBe(false);
});

test('passando "-1042" como parametro, deve retornar "menos mil e quarenta e dois"', () => {
  expect(retornaRespostaServidor('-1042')).toBe('menos mil e quarenta e dois');
});

test('passando "-01042" como parametro, deve retornar "menos mil e quarenta e dois"', () => {
  expect(retornaRespostaServidor('-01042')).toBe('menos mil e quarenta e dois');
});

test('passando "94587" como parametro, "deve retornar noventa e quatro mil e quinhentos e oitenta e sete"', () => {
  expect(retornaRespostaServidor('94587')).toBe('noventa e quatro mil e quinhentos e oitenta e sete');
});
