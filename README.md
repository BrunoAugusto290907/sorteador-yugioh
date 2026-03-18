# Sorteador Yu-Gi-Oh! 🃏

Um projeto web super simples e direto para sortear cartas aleatórias do universo de Yu-Gi-Oh!, consumindo uma API externa. 

## 🚀 Tecnologias Utilizadas
- **HTML5** (Estrutura da "Mesa de Duelo")
- **CSS** (Estilização inline simples)
- **JavaScript Vanilla** (Lógica de sorteio e consumo de dados)
- **[Yu-Gi-Oh! API by YGOPRODeck](https://ygoprodeck.com/api-guide/)** (Banco de dados de cartas)

## 💡 Como Funciona (A Lógica)
Para evitar bloqueios de CORS e o limite de acessos da API (Rate Limit), o projeto utiliza uma estratégia inteligente:
1. No **primeiro clique**, o sistema faz o download do banco de dados completo (mais de 13 mil cartas) e guarda na memória.
2. A partir do **segundo clique**, os sorteios passam a ser feitos instantaneamente e de forma local (offline) utilizando `Math.random()`, garantindo velocidade máxima e zero travamentos de servidor.

## 🏃‍♂️ Como rodar o projeto
1. Faça o clone ou download deste repositório.
2. Abra a pasta do projeto.
3. Dê um duplo clique no arquivo `index.html` para abrir no seu navegador.
4. Clique no botão "Puxar do Deck" e divirta-se!
