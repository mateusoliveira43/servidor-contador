# Servidor Contador

Servidor HTTP utilizando a linguagem [JavaScript] (juntamente com o [Node.js]) que, para cada requisição GET, retorna um arquivo JSON com chave extenso e valor o número inteiro escrito por extenso (contido no intervalo [-99999, 99999]), enviado como parâmetro de URL. Este projeto é um desafio técnico de um processo seletivo.

# Tarefas

- [X] Usar *gitflow* para subir as alterações (enviar alterações para o ramo desenvolvimento e fazer merge com a master)
- [X] Implementar algoritmo que escreve os números por extenso
- [X] Implementar o servidor
- [ ] Enviar mensagens explicativas de erro ao usuário
- [ ] Terminar de escrever a seção "Iniciando o Servidor"
- [ ] Terminar de escrever a seção "Utlizando o Servidor"
- [X] Fazer testes unitários
- [ ] Tratar os erros
- [ ] Revisar o código e aplicar "Clean Code"
- [ ] Terminar de escrever a seção "Sobre o desenvolvimento"
- [ ] Usar Docker
- [ ] Permitir acesso da conta da CERTI (seletivo-certi-cdm)
- [ ] Fazer pull request na branch de desenvolvimento

# Iniciando o Projeto

Na pasta do projeto, use o seguinte comando no terminal
```bash
npm i
```
para instalar as dependências do projeto.

Na pasta do projeto, use o seguinte comando no terminal
```bash
npm run server
```
para iniciar o servidor, que irá escutar na porta 3000. Você pode clicar no link que aparece no terminal para acessar o servidor, ou colar o endereço em seu navegador para acessá-lo.

Na pasta do projeto, use o seguinte comando no terminal
```bash
crtl+C
```
para parar o servidor.

# Usando o Servidor

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
{ "extenso": "noventa e quatro mil quinhentos e oitenta e sete" }
```

Na pasta do projeto, use o seguinte comando no terminal
```bash
npm test
```
para rodar os testes unitários.

# Sobre o Desenvolvimento

Para o desafio, eu precisava criar um servidor HTTP, com a linguagem da minha preferência, em até 7 dias que, para cada requisição GET, retornasse um arquivo JSON com chave extenso e valor o número inteiro escrito por extenso (contido no intervalo [-99999, 99999]), enviado no path.

Escolhi usar [JavaScript] junto com [Node.js], por achar que a tarefa seria mais simples do que se implementada utilizando [Python], que é a outra linguagem que tenho costume de trabalhar.

Para o algoritmo de escrita do número por extenso, usei expressões regulares para a solução. Deixei que fossem enviados zeros a esquerda (tal que não ultrapasse 5 dígitos), mas fui rigoroso quanto aos sinais. O usuário só pode enviar um sinal de menos (-) (no início do path), enviando mais de um, ou sinais de mais (+), é apresentado um erro ao usuário de formato inválido. Para evitar colocar (ainda mais) `if`s (minha prioridade foi evitar ifs), minha ideia foi fazer os objetos com as nomenclaturas das ordens dos respectivos dígitos. Outro ponto que vale resaltar, foi quanto as regras gramaticais. Uma em específico que vale a pena ressaltar, é que não se usa “e” entre milhares e centenas, a não ser que o número termine em centenas. Queria ter feito o método `retornaRespostaConversao`, da classe `NumerosPorExtenso`, ser estático, mas o eslint ainda não suporta atributos estáticos (es7) (sem a instalação do Babel).

Eu quis segui o padrão do *gitflow* para o projeto, mas acabei fazendo um `merge` da develop na master no começo do projeto ao invés de um `rebase` e `squash`. Após esse erro, comecei a utilizar o sistema de *pull requests* do GitHub.

Para a parte de testes unitários, usei [Jest] junto com [Sucrase] (para poder usar import/export). Não havia trabalhado com testes unitários em JavaScript antes, escolhi o Jest por ser o mais indicado nas pesquisas que fiz.

[Node.js]: https://nodejs.org/
[JavaScript]: https://www.javascript.com/
[Python]: https://www.python.org/
[Jest]: https://jestjs.io/en/
[Sucrase]: https://sucrase.io/
