O projeto esta dividido em duas pastas
 front contendo o codigo em reactjs
 back contendo o codigo em nodejs

*******************************************************************
Respotas as perguntas do processo seletivo

Quais as partes principais de uma requisição HTTP?
    Request
        onde estara informações como o metodo da requisição, versão do HTTP, identificação do URI
    Header
        utilizado para enviar informações adicionais entre cliente-servidor
    body
        não necessariamente esta em todas as requisições, é utilizado para transmitir mais informações como em
        requisições POST e PUT

Qual a diferença entre colocar um script dentro do "head" e no fim do "body"?
    esta em quando ele vai ser carregado, quando no head ele carrega antes do conteúdo da página que esta no body,
    quando colocado no fim do body ele carrega todo o conteudo do body e depois carrega os scripts

Qual a diferença entre display: block e display: inline-block ?
    quando colocado como block ele cria uma nova linha para o elemento que esta recebendo o display:block
    enquanto no inline-block esse elemento ficara na mesma linha

É possível criar um site responsivo SEM media queries? Por que?
    sim, media queries alteram o tamanho de partes do css confome for definido no arquivo css porém fica algo mais estatico e com muito a ser escrito
    é possivel trabalhar com responsividade utilizando o flex-box que divide igualmente o tamanho do espaço utilizado para os elementos que estão na tela

No Javascript, é obrigatório usar VAR para criar uma variável?
    não, é possível cria-la com LET ou CONST e também é possível cria-la sem nada assim o javascript reconhece isso como uma variavel global que pode
    ser alterada em qualquer parte do código

Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe?
    não, as arrow functions foram criadas para reduzir ainda mais as sintaxe das functions expression

Explique a lógica pra fazer uma paginação.
    a paginação é utilizada para não encher a tela de informações
    para fazer a paginação é necessário saber quantas informações você quer na tela, quantas informações você tem e quantas páginas isso vai gerar
    digamos que você tem 1000 informações e quer 100 por página, para saber quantas páginas isso irá gerar é necessario pegar o total de informações e dividir pela quantidade de informações
    por página, nesse caso vai ser 1000/100 = 10, caso o numero fique quebrado sempre arredondar para um número inteiro pra cima por exemplo o resultado foi 9,21 arredonda pra 10
    depois ordenar as informações conforme deseja
    e exibilas até o determinado numero selecionado de informações no caso 100
    a proxima página devera começar a partir da 101 até a 200 e assim sucessivamente até completar as 1000 informações

Qual a melhor forma de armazenar uma imagem no banco de dados?
    a melhor forma não é armazena-la no banco de dados e sim armazenar o diretório de onde esta essa imagem com o seu titulo e quando necessario
    pegar esse diretorio e manda-lo para o front pesquisar essa imagem no diretorio e mostra-la

No React, quantos useEffect eu posso usar?
    pode usar quantos forem necessários

Quais métodos de requisição preciso para criar um CRUD via API?
    GET
    POST
    PUT
    DELETE

**************************************************************************