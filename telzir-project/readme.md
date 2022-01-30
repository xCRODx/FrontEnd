Project: Telzir
Author: Cleydson Rodrigues
version: v1.0.0
Description: Simple Mobile Web aplication based on ES8

Bibliotecas utilizadas: Bootstrap, JQuery e QUnit para os testes unitários.


## Instalação/execução

>Para rodar a aplicação, basta rodar em um servidor local e abrir o arquivo index.html na pasta raíz

>Layout projetado para Mobile/Web

>necessário conexão com internet para carregamento de fontes e scripts externos da CDN.


## Testes Unitários

>Nos testes unitários foi usada a biblioteca QUnit. Para iniciar, basta abrir o arquivo test.html na pasta raíz

>O script de tests.js na pasta ./test/ carrega os modulos das funções da aplicação por meio do comando import (ES8)


## Estrutura da aplicação

>Script principal main.js na pasta raíz, É a base do sistema. Cuida de captar os eventos de clicks dos botões update do DOM.

>Os módulos/funções se encontram na pasta ./src/js e são importados em tempo de execução.

>O projeto pode ser escalonado para uma SPA sem a necessidade de um framework mais robusto.

