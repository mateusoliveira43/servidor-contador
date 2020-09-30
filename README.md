# Servidor Contador

Servidor HTTP utilizando a linguagem [JavaScript] (juntamente com o [Node.js]) que, para cada requisição GET, retorna um arquivo JSON com chave extenso e valor o número inteiro escrito por extenso (contido no intervalo [-99999, 99999]), enviado no path. Este projeto é um desafio técnico de um processo seletivo.

# Tarefas

- [ ] Usar Docker
- [ ] Permitir acesso da conta da CERTI
- [ ] Escrever como instalar e utilizar
- [ ] Terminar de escrever a seção "Sobre o desenvolvimento"
- [ ] Usar gitflow para subir as alterações
- [ ] Fazer pull request na branch de desenvolvimento
- [ ] Implementar algoritmo que escreve os números por extenso
- [ ] Fazer testes unitários

# Sobre o Desenvolvimento

Para o desafio, eu precisava criar um servidor HTTP, com a linguagem da minha preferência, em até 7 dias que, para cada requisição GET, retornasse um arquivo JSON com chave extenso e valor o número inteiro escrito por extenso (contido no intervalo [-99999, 99999]), enviado no path. 

Escolhi usar [JavaScript] junto com [Node.js], por achar que a tarefa seria mais simples do que se implementada utilizando [Python], que é a outra linguagem que tenho costume de trabalhar.

## Exemplos

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

[Node.js]: https://nodejs.org/
[JavaScript]: https://www.javascript.com/
[Python]: https://www.python.org/
