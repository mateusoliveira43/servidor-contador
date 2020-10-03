export default class NumeroPorExtenso {
  constructor(parametro) {
    this.parametro = parametro;
    this.numero = 0;
    this.numeroSemZerosEsquerda = '';
    this.numeroPorExtenso = 'zero';
    this.unidadesMilhar = {
      9: 'nove mil e ',
      8: 'oito mil e ',
      7: 'sete mil e ',
      6: 'seis mil e ',
      5: 'cinco mil e ',
      4: 'quatro mil e ',
      3: 'três mil e ',
      2: 'dois mil e ',
      1: 'mil e ',
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
    if (!checagem) return false;
    this.converteParametro();
    this.converteNumeroParaExtenso();
    return this.numeroPorExtenso;
  }

  converteParametro() {
    this.numero = Number(this.parametro);
    this.numeroSemZerosEsquerda = String(this.numero);
  }

  converteNumeroParaExtenso() {
    if (!this.numero) return;
    this.numeroPorExtenso = '';

    this.checaNumeroNegativo();

    this.escreveDezenaMilhar();
    this.escreveMilhar();
    this.escreveCentena();
    this.escreveDezena();
    this.escreveUnidade();

    this.checaEsNoMeio();
    this.numeroPorExtenso = this.numeroPorExtenso.trim();
    this.checaENoFinal();
  }

  checaNumeroNegativo() {
    if (!this.numeroSemZerosEsquerda.match(/-/)) return;
    this.numeroPorExtenso += 'menos ';
    this.numeroSemZerosEsquerda = this.numeroSemZerosEsquerda.substring(1);
  }

  escreveDezenaMilhar() {
    if (this.numeroSemZerosEsquerda.length !== 5) return;
    this.confereDezena();
    this.numeroPorExtenso += 'mil e ';
    this.numeroSemZerosEsquerda = this.numeroSemZerosEsquerda.substring(2);
  }

  confereDezena() {
    if (this.numeroSemZerosEsquerda[0] === '1') {
      this.numeroPorExtenso += this.dezenas[this.numeroSemZerosEsquerda.slice(0, 2)];
    } else {
      this.numeroPorExtenso += this.dezenas[this.numeroSemZerosEsquerda[0]];
      this.numeroPorExtenso += this.unidades[this.numeroSemZerosEsquerda[1]];
    }
  }

  escreveMilhar() {
    if (this.numeroSemZerosEsquerda.length !== 4) return;
    this.numeroPorExtenso += this.unidadesMilhar[this.numeroSemZerosEsquerda[0]];
    this.numeroSemZerosEsquerda = this.numeroSemZerosEsquerda.substring(1);
  }

  escreveCentena() {
    if (this.numeroSemZerosEsquerda.length !== 3) return;
    if (this.numeroSemZerosEsquerda === '100') {
      this.numeroPorExtenso += 'cem';
      this.numeroSemZerosEsquerda = '';
      return;
    }
    this.numeroPorExtenso += this.centenas[this.numeroSemZerosEsquerda[0]];
    this.numeroSemZerosEsquerda = this.numeroSemZerosEsquerda.substring(1);
  }

  escreveDezena() {
    if (this.numeroSemZerosEsquerda.length !== 2) return;
    this.confereDezena();
    this.numeroSemZerosEsquerda = '';
  }

  escreveUnidade() {
    if (this.numeroSemZerosEsquerda.length !== 1) return;
    this.numeroPorExtenso += this.unidades[this.numeroSemZerosEsquerda[0]];
  }

  checaEsNoMeio() {
    this.numeroPorExtenso = this.numeroPorExtenso.replace(' e mil', ' mil');
    this.numeroPorExtenso = this.numeroPorExtenso.replace(' e e', ' e');
  }

  checaENoFinal() {
    if (!this.numeroPorExtenso.match(/ e$/)) return;
    this.numeroPorExtenso = this.numeroPorExtenso.slice(0, -2);
  }
}
