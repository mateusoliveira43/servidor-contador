export default function retornaRespostaIndex(req, res) {
  return res.json({
    Saudações:
      'Bem-vindo(a) ao Servidor-Contador!',
    Instruções:
      'Envie um número inteiro contido no intervalo [-99999,99999] como parâmetro de URL e o servidor retornará um JSON cujo valor é ele escrito por extenso!',
  });
}
