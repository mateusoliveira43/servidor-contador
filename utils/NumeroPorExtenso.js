export default class NumeroPorExtenso {
  constructor(parametroURL) {
    this.parametro = parametroURL;
    this.numero = Number(parametroURL);
    this.semZerosEsquerda = String(this.numero);
    this.numeroPorExtenso = '';
    this.unidadesMilhar = {
      9: 'nove mil ',
      8: 'oito mil ',
      7: 'sete mil ',
      6: 'seis mil ',
      5: 'cinco mil ',
      4: 'quatro mil ',
      3: 'três mil ',
      2: 'dois mil ',
      1: 'mil ',
    };
    this.centenas = {
      9: 'novecentos e ',
      8: 'oitocentos e ',
      7: 'setecentos e ',
      6: 'seiscentos e ',
      5: 'quinhentos e ',
      4: 'quatrocentos e ',
      3: 'trezentos e ',
      2: 'duzentos e ',
      1: 'cento e ',
      0: '',
    };
    this.dezenas = {
      9: 'noventa e ',
      8: 'oitenta e ',
      7: 'setenta e ',
      6: 'sessenta e ',
      5: 'cinquenta e ',
      4: 'quarenta e ',
      3: 'trinta e ',
      2: 'vinte e ',
      19: 'dezenove ',
      18: 'dezoito ',
      17: 'dezesete ',
      16: 'dezesseis ',
      15: 'quinze ',
      14: 'catorze ',
      13: 'treze ',
      12: 'doze ',
      11: 'onze ',
      10: 'dez ',
      0: 'e ',
    };
    this.unidades = {
      9: 'nove ',
      8: 'oito ',
      7: 'sete ',
      6: 'seis ',
      5: 'cinco ',
      4: 'quatro ',
      3: 'três ',
      2: 'dois ',
      1: 'um ',
      0: '',
    };
  }

  retornaRespostaConversao() {
    const checagem = this.parametro.match(/^(-?\d{1,5})$/);
    if (!checagem) return false; // retornar mensagem explicando o erro
    this.converteNumeroParaExtenso();
    return this.numeroPorExtenso;
  }

  converteNumeroParaExtenso() {
    if (!this.numero) {
      this.numeroPorExtenso = 'zero';
      return;
    }

    this.checaNumeroNegativo();

    this.escreveDezenaMilhar();
    this.escreveMilhar();
    this.escreveCentena();
    this.escreveDezena();
    this.escreveUnidade();

    this.numeroPorExtenso = this.numeroPorExtenso.trim();

    this.checaENoFinal();
    this.checaENoFinal();
    this.numeroPorExtenso = this.numeroPorExtenso.replace(' e mil', ' mil');
    this.numeroPorExtenso = this.numeroPorExtenso.replace(' e e ', ' e ');
  }

  checaNumeroNegativo() {
    if (this.semZerosEsquerda.match(/-/)) {
      this.numeroPorExtenso += 'menos ';
      this.semZerosEsquerda = this.semZerosEsquerda.substring(1);
    }
  }

  escreveDezenaMilhar() {
    if (this.semZerosEsquerda.length !== 5) return;
    this.confereDezena();
    this.numeroPorExtenso += 'mil ';
    this.semZerosEsquerda = this.semZerosEsquerda.substring(2);
    this.checaEMilharCentena();
  }

  confereDezena() {
    if (this.semZerosEsquerda[0] === '1') {
      this.numeroPorExtenso += this.dezenas[this.semZerosEsquerda.slice(0, 2)];
    } else {
      this.numeroPorExtenso += this.dezenas[this.semZerosEsquerda[0]];
      this.numeroPorExtenso += this.unidades[this.semZerosEsquerda[1]];
    }
  }

  checaEMilharCentena() {
    if (this.semZerosEsquerda.match(/\d00/) || this.semZerosEsquerda.match(/0\d{2}/)) this.numeroPorExtenso += 'e ';
  }

  escreveMilhar() {
    if (this.semZerosEsquerda.length !== 4) return;
    this.numeroPorExtenso += this.unidadesMilhar[this.semZerosEsquerda[0]];
    this.semZerosEsquerda = this.semZerosEsquerda.substring(1);
    this.checaEMilharCentena();
  }

  escreveCentena() {
    if (this.semZerosEsquerda.length !== 3) return;
    if (this.semZerosEsquerda === '100') {
      this.numeroPorExtenso += 'cem';
      this.semZerosEsquerda = '';
      return;
    }
    this.numeroPorExtenso += this.centenas[this.semZerosEsquerda[0]];
    this.semZerosEsquerda = this.semZerosEsquerda.substring(1);
  }

  escreveDezena() {
    if (this.semZerosEsquerda.length !== 2) return;
    this.confereDezena();
    this.semZerosEsquerda = '';
  }

  escreveUnidade() {
    if (this.semZerosEsquerda.length !== 1) return;
    this.numeroPorExtenso += this.unidades[this.semZerosEsquerda[0]];
  }

  checaENoFinal() {
    if (this.numeroPorExtenso.match(/ e$/)) {
      this.numeroPorExtenso = this.numeroPorExtenso.slice(0, -2);
    }
  }
}
