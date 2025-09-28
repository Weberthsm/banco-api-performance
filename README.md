# Banco API Performance Tests

## Introdução

Este repositório contém testes de performance desenvolvidos em
**JavaScript** utilizando o **[K6](https://k6.io/)**.\
O objetivo é avaliar o desempenho da API do projeto [Banco
API](https://github.com/Weberthsm/banco-api), monitorando métricas de
carga, stress e estabilidade.

------------------------------------------------------------------------

## Tecnologias utilizadas

-   [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
    → Linguagem principal dos scripts de teste.\
-   [K6](https://k6.io/) → Ferramenta de testes de performance.\
-   Variáveis de ambiente do **K6** para relatórios em tempo real.

------------------------------------------------------------------------

## Estrutura do repositório

    fixtures/   → Contém dados simulados usados nos testes (massa de dados).  
    helpers/    → Funções auxiliares que facilitam a escrita e manutenção dos testes.  
    tests/      → Local principal dos scripts de teste de performance.  
    utils/      → Utilitários gerais e funções de suporte reutilizáveis.  
    config/     → Arquivos de configuração, como variáveis globais e ambientes.  
    readme/     → Documentação adicional.  

------------------------------------------------------------------------

## Objetivo de cada grupo de arquivos

-   **fixtures/**: centraliza dados de entrada usados pelos testes.\
-   **helpers/**: abstrai lógicas comuns para evitar duplicação de
    código.\
-   **tests/**: armazena os cenários de teste de performance.\
-   **utils/**: funções reutilizáveis, como tratamento de erros, geração
    de tokens etc.\
-   **config/**: define parâmetros de execução como URL base e outras
    configurações.\
-   **readme/**: materiais de documentação relacionados ao projeto.

------------------------------------------------------------------------

## Modo de instalação

### Pré-requisitos

-   [Node.js](https://nodejs.org/) (para dependências auxiliares).\
-   [K6](https://k6.io/) instalado na máquina.

### Passos

1.  Clone o repositório:

    ``` bash
    git clone https://github.com/Weberthsm/banco-api-performance.git
    cd banco-api-performance
    ```

2.  Instale dependências auxiliares (se existirem):

    ``` bash
    npm install
    ```

------------------------------------------------------------------------

## Modo de execução

### Variáveis de ambiente

Antes de rodar os testes, defina a variável de ambiente `BASE_URL` para
indicar a API alvo:

``` bash
export BASE_URL=http://localhost:3000
```

### Execução simples

Para rodar um teste:

``` bash
k6 run tests/login.test.js
```

### Relatório em tempo real e exportação

O K6 permite acompanhar os testes em tempo real e exportar o resultado
em HTML.\
Exemplo de execução:

``` bash
BASE_URL=http://localhost:3000 K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

Isso abrirá o relatório em tempo real e ao final salvará um arquivo
**html-report.html** com os resultados.

------------------------------------------------------------------------

📌 Repositório: [Banco API
Performance](https://github.com/Weberthsm/banco-api-performance)
