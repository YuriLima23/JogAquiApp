# JogaAqui
## Um Aplicativo que Busca Gerenciar a Coleta de Resíduos no Município de Bagé

<a href="https://github.com/YuriLima23/JogAquiApp/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/YuriLima23/JogAquiApp"></a>
<img src="https://img.shields.io/static/v1?label=version&message=v0.1.1&color=orange&style=flat"/>
<img src="https://img.shields.io/static/v1?label=build&message=passing&color=success&style=flat"/>
<a href="https://github.com/YuriLima23/JogAquiApp/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/YuriLima23/JogAquiApp"></a>
<a href="https://github.com/YuriLima23/JogAquiApp/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/YuriLima23/JogAquiApp"></a>
![pull request closed](https://img.shields.io/github/issues-pr-closed/YuriLima23/JogAquiApp?color=g)
![size](https://img.shields.io/github/repo-size/YuriLima23/JogAquiApp)
![file](https://img.shields.io/github/directory-file-count/YuriLima23/JogAquiApp)
![c](https://img.shields.io/github/contributors/YuriLima23/JogAquiApp?color=g)
[![l](https://img.shields.io/badge/lifecycle-stable-brightgreen.svg)](https://www.tidyverse.org/lifecycle/#stable)
![lc](https://img.shields.io/github/last-commit/YuriLima23/JogAquiApp)


**Project Status: In development** :warning:

## Descrição
Como é possível facilitar o recolhimento de lixos, resíduos e materiais descartáveis, bem como fazer o gerenciamento de equipes, definindo padrões a serem
seguidos por todos envolvidos no processo, com geração de renda, sem a necessidade de intervenção direta no município? Para tal, propõe-se uma atividade, 
modo ou prática (rotina) acessível à comunidade, que permita o agendamento de recolhimento dos materiais de forma transparente para o catador, as 
instituições por ventura envolvidas e o cidadão, tudo através do APP **JogaAquiApp**.

## Características
- MVP (Mínimo Produto Viável), disponibilizado-se tanto para a plataforma Android quanto para o iOS.
- Trabalhar com todos os tipos de materiai recicláveis.
- Desenvolver um modelo de negócio onde haja geração de renda mútua tanto pra quem recolhe e trabalha na reciclagem quanto para quem disponibiliza o resíduo.

### Funcionalidades
O aplicativo prevê uma séria de funcionalidades. Um breve visão sobre as funcionalidades poder ser observado no diagrama de casos de uso abaixo:

<img src="https://github.com/YuriLima23/ImagesJogaAqui/blob/main/DCU.png" width=700 align="center"/>

### Arquitetura

A  estrutura do projeto foi desenvolvida na arquitetura *API REST* (Interface de Programação de Aplicações), sendo definido um Back-End para vários Front-Ends. O Front-End escolhido para este projeto consiste na criação de interfaces para uma a aplicação móvel, importante destacar que este projeto não limitou-se apenas a um Front-End, futuramente poderão ser desenvolvidas mais aplicações Front-Ends utilizando o mesmo Back-End com pouquíssimas alterações ou até mesmo sem alterações.

No Back-End utiliza-se a tecnologia  NodeJS e Prisma. Para gerenciar as informações, optou-se por utilizar um SGBD, O Sistema de gerenciamento de Banco de Dados (SBGD), no caso o PostgreSQL. A aplicação móvel foi desenvolvida utilizando-se o framework React Native.

<img src="https://github.com/YuriLima23/ImagesJogaAqui/blob/main/Arq.png" width=600 align="center"/>

### Modelo ER

O projeto contém 7 entidades base, onde cada uma contém seus principais atributos e seus respectivos relacionamentos.
 - Entidade **User**, essa é uma tabela que permite que todo o seu sistema e ambiente exista e funcione , contém 10 atributos básicos e tem por objetivo armazenar as informações de cada usuário cadastrado no sistema.
- **Solititation**, é por ela que o sistema criará as solicitações de recolhimento de resíduos, contém também 10 atributos, esta entidade se relaciona com  **History**.
- **History**, esta tabela será vital para armazenar o histórico de solicitações, importante lembrar que essa forma não é a melhor forma de gerenciar histórico de dados, mas para o sistema proposto ela se encaixa adequadamente.
- **Wallet** é uma tabela com 6 atributos, relacionada diretamente com a entidade **User**, o objetivo da referida tabela é salvar os dados dos valores de cada usuário durante uma faixa etária de tempo.
- Por último a tabela **Support**, esta tabela busca armazenar solicitações de usuários que tenham dúvidas, sugestões ou críticas. 

<img src="https://github.com/YuriLima23/ImagesJogaAqui/blob/main/ModeloER.png" width=600 align="center"/>

### Telas
Protótipo das telas.

<a><img src="https://github.com/YuriLima23/ImagesJogaAqui/blob/main/login-1.png" width=200 align="left"/></a>
<img src="https://github.com/YuriLima23/ImagesJogaAqui/blob/main/inicial-1.png" width=200 align="center"/>
<img src="https://github.com/YuriLima23/ImagesJogaAqui/blob/main/menu-1.png" width=200 align="left"/>

<a><img src="https://github.com/YuriLima23/ImagesJogaAqui/blob/main/reciclaveis-1.png" width=200 align="left"/></a>
<img src="https://github.com/YuriLima23/ImagesJogaAqui/blob/main/mapa-1.png" width=200 align="center"/>
<img src="https://github.com/YuriLima23/ImagesJogaAqui/blob/main/mapa-1-1.png" width=200 align="left"/>


## Contribuição
Se você deseja contribuir com o projeto, adicionando novas funcionalidades, revisando o código ou propondo modificações e melhorias, consulte este [GUIA](https://github.com/YuriLima23/JogAquiApp/blob/dev/CONTRIBUTING.md) para propor sua contribuição.

## Créditos
Se você quiser citar este projeto, você pode citá-lo como:


    Lima R. Yúri; Silva,R.R. (2022) JogaAqui: Um Aplicativo que Busca Gerenciar a Coleta de Resíduos no Município de Bagé.
    Repositório GitHub - https://github.com/YuriLima23/JogAquiApp.

Uma entrada BibTeX para usuários LaTeX é:

    @Misc {jogaAqui,
     title = {JogaAqui: Um Aplicativo que Busca Gerenciar a Coleta de Res{\'i}duos no Munic{\'i}pio de Bag{\'e}},
     author = {Lima, Y{\'u}ri Ramos. e Silva,Rodrigo Rosa da.},
     note= {vers{\~a}o 0.1.1},
     year = {2022},
     url = {https://github.com/YuriLima23/JogAquiApp}
     }
