# Servidor Contador

Servidor HTTP utilizando a linguagem [JavaScript] (juntamente com o [Node.js]) que, para cada requisição GET, retorna um arquivo JSON com chave extenso e valor o número inteiro escrito por extenso (contido no intervalo [-99999, 99999]), enviado como parâmetro de URL. Este projeto é um desafio técnico de um processo seletivo.

**Projeto que me rendeu minha primeira oportunidade como desenvolvedor!**



## Sumário

- [Iniciando o Projeto](#Iniciando-o-Projeto)
  - [Utilizando Docker](#Utilizando-Docker)
  - [Utilizando Node.js](#Utilizando-Nodejs)
- [Testando](#Testando)
- [Exemplos de Uso](#Exemplos-de-Uso)
- [Sobre o Desenvolvimento](#Sobre-o-Desenvolvimento)



## Iniciando o Projeto

Para iniciar e usar o projeto, pode-se usar tanto [Docker] ou [Node.js]. Escolha qual prefere e siga uma das seções de a seguir. Comandos para execução no Terminal do Linux.



### Utilizando Docker

Na pasta do projeto, execute o seguinte comando no terminal
```
docker build --tag servidor-contador-docker .
```
para criar a imagem do projeto chamada `servidor-contador-docker` (você pode chamá-la como preferir, basta colocar o nome desejado em vez de servidor-contador-docker no comando anterior e nos demais comandos do Docker). Se você não deu permisão ao usuário root, vai precisar rodar o comando anterior, e os demais comandos do Docker, com `sudo` na frente deles.

Execute o seguinte comando no terminal
```
docker run -p 3000:3000 servidor-contador-docker
```
para iniciar o servidor, que irá escutar na porta `3000`. Você pode clicar no link que aparece no terminal (segurando crtrl) para acessar o servidor, ou colar o endereço em seu navegador para acessá-lo. Caso deseje utilizar outra porta, antes do primeiro comando, troque a variável `porta` no arquivo `server.js` pelo valor desejado, e também altere no comando anterior.

Você também pode usar `curl` para pegar as respostas do servidor. No terminal, execute o comando
```
curl http://localhost:3000/parametro
```
para receber a resposta do servidor em relação ao parâmetro de URL `parametro`.

Na pasta do projeto, execute o seguinte comando no terminal
```
ctrl+C
```
para parar o servidor (talvez seja necessário executar o comando duas vezes).



### Utilizando Node.js

Na pasta do projeto, execute o seguinte comando no terminal
```
npm i
```
para instalar as dependências do projeto.

Na pasta do projeto, execute o seguinte comando no terminal
```
npm run server
```
para iniciar o servidor, que irá escutar na porta `3000`. Você pode clicar no link que aparece no terminal (segurando crtrl) para acessar o servidor, ou colar o endereço em seu navegador para acessá-lo. Caso deseje utilizar outra porta, basta informar o valor desejado na variável `porta`, no arquivo `server.js`.

Você também pode usar `curl` para pegar as respostas do servidor. No terminal, execute o comando
```
curl http://localhost:3000/parametro
```
para receber a resposta do servidor em relação ao parâmetro de URL `parametro`.

Na pasta do projeto, execute o seguinte comando no terminal
```
crtl+C
```
para parar o servidor.



## Testando

Execute o seguinte comando no terminal
```
docker run servidor-contador-docker npm test
```
para rodar os testes unitários. É necessário já ter iniciado o projeto com [Docker] para executar esse comando.

Na pasta do projeto, execute o seguinte comando no terminal
```
npm test
```
para rodar os testes unitários. É necessário já ter iniciado o projeto com [Node.js] para executar esse comando.



## Exemplos de Uso

Ao acessar `http://localhost:3000/1`, o servidor retorna
```
{ "extenso": "um" }
```

Ao acessar `http://localhost:3000/-1042`, o servidor retorna
```
{ "extenso": "menos mil e quarenta e dois" }
```

Ao acessar `http://localhost:3000/94587`, o servidor retorna
```
{ "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }
```



## Sobre o Desenvolvimento

Para o desafio, eu precisava criar um servidor HTTP, com a linguagem da minha preferência, em até 7 dias que, para cada requisição GET, retornasse um arquivo JSON com chave extenso e valor o número inteiro escrito por extenso (contido no intervalo [-99999, 99999]), enviado como parâmetro de URL.

Escolhi usar [JavaScript] junto com [Node.js], por achar que a tarefa seria mais simples do que se implementada utilizando [Python], que é a outra linguagem que tenho costume de trabalhar (no caso, usaria o framework [FastAPI] para o desnvolvimento).

Para o algoritmo de escrita do número por extenso, usei expressões regulares para a solução. Deixei que fossem enviados zeros a esquerda (tal que não ultrapasse 5 dígitos), mas fui rigoroso quanto aos sinais. O usuário só pode enviar um sinal de menos (-) (no início do parâmetro da URL). Enviando mais de um, ou sinais de mais (+), é apresentado um erro ao usuário de formato inválido, explicando qual foi o problema. Para evitar colocar (ainda mais) `if`s (minha prioridade foi evitar ifs), minha ideia foi fazer os objetos com as nomenclaturas das ordens dos respectivos dígitos. Queria ter feito o método `retornaRespostaConversao`, da classe `NumerosPorExtenso`, ser estático, mas o eslint ainda não suporta atributos estáticos (es7).

Outro ponto que vale resaltar, foi quanto as regras gramaticais. Uma em específico que vale a pena ressaltar, é que não se usa “e” entre milhares e centenas, a não ser que o número termine em centenas. O algoritmo não obedece essa regra, a pedido do proponente do desafio. Para solucionar o problema bastaria colocar o seguinte método na classe:
```js
checaEMilharCentena() {
    if (!this.numeroSemZerosEsquerda.match(/\d00/) && !this.numeroSemZerosEsquerda.match(/0\d{2}/)) return;
    this.numeroPorExtenso += 'e ';
}
```
e chamá-lo no final da execução dos métodos `escreveDezenaMilhar` e `escreveMilhar`, e trocando os `mil e `s por `mil `.

Eu quis seguir o padrão do *gitflow* para o projeto, mas acabei fazendo um `merge` da develop na master no começo do projeto ao invés de um `rebase` e `squash`. Após esse erro, comecei a utilizar o sistema de *pull requests* do GitHub.

Para a parte de testes unitários, usei [Jest] junto com [Sucrase] (para poder usar import/export). Não havia trabalhado com testes unitários em JavaScript antes, escolhi o Jest por ser o mais indicado nas pesquisas que fiz.

Dei a possibilidade do usuário usar [Docker] para instalação e uso do projeto. Foi a primeira vez que o utilizei, talvez pudesse ter feito algo melhor em relação ao seu uso.



[Node.js]: https://nodejs.org/
[JavaScript]: https://www.javascript.com/
[Python]: https://www.python.org/
[Jest]: https://jestjs.io/en/
[Sucrase]: https://sucrase.io/
[FastAPI]: https://fastapi.tiangolo.com/
[Docker]: https://www.docker.com/
