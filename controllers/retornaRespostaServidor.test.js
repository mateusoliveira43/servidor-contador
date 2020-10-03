import retornaRespostaServidor, {
  mensagemErro, erroSemDigitos, erroCaracter, erroSinalMais, erroTamanho, erroFormato,
} from './servidorController';

const mockRequest = (sessionData, parametroURL, body) => ({
  session: { data: sessionData },
  params: { numero: parametroURL },
  body,
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const testesSucesso = {
  0: 'zero',
  '-0': 'zero',
  '00000': 'zero',
  1: 'um',
  '01': 'um',
  '001': 'um',
  '0001': 'um',
  '00001': 'um',
  '-1042': 'menos mil e quarenta e dois',
  '-01042': 'menos mil e quarenta e dois',
  94587: 'noventa e quatro mil e quinhentos e oitenta e sete',
  94500: 'noventa e quatro mil e quinhentos',
  200: 'duzentos',
  100: 'cem',
  101: 'cento e um',
  1100: 'mil e cem',
  20000: 'vinte mil',
  99999: 'noventa e nove mil e novecentos e noventa e nove',
  12345: 'doze mil e trezentos e quarenta e cinco',
  12: 'doze',
  19: 'dezenove',
  8307: 'oito mil e trezentos e sete',
  30001: 'trinta mil e um',
};
const testesErro = {
  a: mensagemErro + erroSemDigitos,
  1.1: mensagemErro + erroCaracter,
  '+1': mensagemErro + erroSinalMais,
  100000: mensagemErro + erroTamanho,
  '-': mensagemErro + erroSemDigitos,
  '--1': mensagemErro + erroFormato,
  '000001': mensagemErro + erroTamanho,
  '1a': mensagemErro + erroCaracter,
};

Object.entries(testesSucesso).forEach(([entrada, saida]) => {
  test(`passando "${entrada}" como parametro, deve retornar status 200 e { "extenso": "${saida}"}`, () => {
    const req = mockRequest(
      {},
      entrada,
      {},
    );
    const res = mockResponse();
    retornaRespostaServidor(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      extenso: saida,
    });
  });
});

Object.entries(testesErro).forEach(([entrada, saida]) => {
  test(`passando "${entrada}" como parametro, deve retornar status 422 e { "extenso": "${saida}"}`, () => {
    const req = mockRequest(
      {},
      entrada,
      {},
    );
    const res = mockResponse();
    retornaRespostaServidor(req, res);
    expect(res.status).toHaveBeenCalledWith(422);
    expect(res.json).toHaveBeenCalledWith({
      extenso: saida,
    });
  });
});
