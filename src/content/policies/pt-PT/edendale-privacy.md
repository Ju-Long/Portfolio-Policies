---
title: "Política de Privacidade"
app: "Edendale"
lastUpdated: "5 de outubro de 2026"
lastUpdatedLabel: "Última atualização"
contentLanguage: "pt-PT"
draft: false
---

## 1. Introdução e escopo

Esta Política de Privacidade explica como o **Edendale** trata as informações
quando você usa uma aplicação oficial do Edendale ou o site do Edendale (em
conjunto, o "**Serviço**").

O Edendale é um reprodutor de vídeo local e um registo pessoal do que você
assiste. Ele permite reproduzir as mídias que você escolher — do seu
dispositivo, de servidores que gere ou de contas de armazenamento na nuvem que
ligar —, montar uma biblioteca privada, enriquecer títulos com informações do
The Movie Database ("**TMDB**"), buscar legendas, mostrar botões opcionais para
saltar partes do vídeo e manter seu histórico pessoal. O Edendale não fornece,
aloja nem envia filmes ou episódios de televisão para você.

O site do Edendale é um site informativo. Ele descreve as aplicações, aponta
para o código-fonte do projeto e responde a links de aplicação para que um link
do Edendale partilhado possa abrir numa aplicação instalada. Não é um reprodutor
de vídeo, não tem contas e não armazena nada sobre você.

Esta política se aplica às versões oficiais e ao site oficial. Forks
independentes e cópias auto-alojadas são controlados por seus respectivos
operadores e podem tratar as informações de outra forma.

## 2. Quem é o responsável

O responsável pelo Serviço oficial é:

- **BaBaSaMa**
- E-mail: **long@babasama.com**

## 3. Resumo: primeiro o local

O Edendale foi projetado para minimizar a coleta de dados:

- Você não precisa de uma conta do Edendale.
- A BaBaSaMa não opera servidor, banco de dados ou proxy para o Edendale. Não há
  para onde enviar a nós os dados da sua biblioteca, das suas reproduções, dos
  seus ficheiros ou das suas contas.
- Seus ficheiros de vídeo e de legenda não são enviados à BaBaSaMa nem a
  terceiros.
- Quando liga o Google Drive, o Microsoft OneDrive ou o Dropbox, inicia sessão
  diretamente junto desse fornecedor e o Edendale pede apenas acesso só de
  leitura. Os seus ficheiros e tokens de início de sessão circulam apenas entre
  o seu dispositivo e esse fornecedor.
- O Edendale não contém publicidade, análise de marketing, relatórios de falhas
  nem rastreamento comportamental em nenhuma plataforma. O YouTube pode exibir
  publicidade depois que você escolher abrir um trailer.
- A BaBaSaMa não vende nem aluga informações pessoais.
- O índice da biblioteca e seus registos pessoais ficam no seu dispositivo ou
  no armazenamento vinculado à sua própria conta de plataforma, conforme
  descrito abaixo.
- O acesso à rede se limita aos recursos que você usa: metadados do TMDB e
  sincronização opcional de conta, os servidores e as contas de armazenamento
  que liga, busca de legendas iniciada por você, botões para saltar, se os
  ativar, armazenamento ou sincronização da plataforma e um trailer aberto por
  ação explícita sua.

Uma ligação opcional com o TMDB, o Google, a Microsoft ou o Dropbox é uma conta
nesse fornecedor, não uma conta do Edendale.

## 4. Informações tratadas pelo Edendale

### 4.1 Mídias e informações da biblioteca

Quando você escolhe um ficheiro ou uma pasta, ou liga um servidor ou uma pasta
de armazenamento na nuvem, o Edendale pode tratar:

- nomes de ficheiros e pastas;
- caminhos relativos, identificadores de ficheiro da plataforma, marcadores com
  escopo de segurança ou os identificadores que um fornecedor de armazenamento
  atribui a cada ficheiro e pasta;
- tipo, tamanho e data de modificação do ficheiro e, quando o fornecedor de
  armazenamento a indica, a duração de um vídeo;
- o título, o ano de lançamento, o nome da série, o número da temporada e o
  número do episódio deduzidos do nome do ficheiro;
- o endereço de um servidor que ligar e o fornecedor, a conta e a pasta de uma
  fonte de armazenamento na nuvem; e
- identificadores do TMDB, links de imagens, sinopses, elenco, duração e outros
  metadados usados para enriquecer sua biblioteca local.

A classificação dos nomes de ficheiro acontece localmente, antes de qualquer
solicitação de metadados. Em seguida, o Edendale pode enviar ao TMDB um título
de filme ou série, um ano, um número de temporada ou de episódio assim deduzidos
para encontrar os metadados correspondentes. O nome do ficheiro em si não é
enviado.

Os dados dos seus vídeos e legendas permanecem no local que você escolheu e são
lidos para reprodução. Quando um vídeo vem de um servidor ou de um armazenamento
na nuvem, o Edendale lê as partes de que precisa à medida que vê e mantém na
memória um pequeno buffer de leitura antecipada; não guarda uma cópia do vídeo.
Os vídeos não são enviados à BaBaSaMa nem a terceiros.

### 4.2 Registos de reprodução e registos pessoais

Dependendo do recurso e da plataforma, o Edendale pode armazenar:

- posição de reprodução, duração assistida, status de conclusão e data da última
  reprodução;
- favoritos e itens da lista para assistir;
- sua avaliação pessoal;
- preferências do reprodutor e da interface, como o idioma das legendas e o
  filtro para pessoas com deficiência auditiva, a aparência das legendas, a
  duração dos saltos e as velocidades ao manter premido, os ajustes de áudio e
  imagem, e a faixa de áudio, a legenda e a velocidade que escolheu por último
  para um título;
- um registo das legendas que transferiu e do vídeo a que cada uma pertence; e
- um instantâneo de exibição limitado, como um título ou uma referência de
  cartaz, usado em widgets do ecrã principal, nas fileiras de "continuar a ver"
  e, se ativar essa opção, no ecrã principal do Android TV.

Esses registos são para seu uso pessoal.

### 4.3 Credenciais e informações de conta

O Edendale guarda todas as credenciais no armazenamento protegido de credenciais
da plataforma: o Chaveiro nas plataformas Apple, um armazenamento encriptado
apoiado no Keystore do Android no Android e a DPAPI no Windows. As credenciais
nunca são gravadas na sua biblioteca, nos links guardados nem em registos
(logs), e nunca são enviadas à BaBaSaMa.

- **Conta do TMDB.** Se você associar uma conta opcional do TMDB, o Edendale
  recebe um token de acesso e um identificador de conta do TMDB para sincronizar
  favoritos, itens da lista para assistir e avaliações compatíveis.
- **Servidores que liga.** Para uma partilha SMB, um servidor SFTP ou um
  servidor WebDAV protegido por palavra-passe, o Edendale guarda o endereço do
  servidor, o nome de utilizador e a palavra-passe. Para armazenamento
  compatível com S3, guarda o ID da chave de acesso e a chave de acesso secreta.
  Para um servidor SFTP, guarda também a impressão digital da chave de anfitrião
  do servidor, para o poder avisar se essa chave mudar. Estas credenciais são
  enviadas apenas ao servidor que ligou.
- **Contas de armazenamento na nuvem.** Quando liga o Google Drive, o Microsoft
  OneDrive ou o Dropbox, o Edendale guarda um token de atualização, o
  identificador da conta, o endereço de e-mail e o nome a apresentar devolvidos
  pelo fornecedor e as permissões que concedeu. Os tokens de acesso de curta
  duração são mantidos apenas na memória. A secção 6 descreve o que cada
  fornecedor partilha com o Edendale.
- **Chave do serviço de legendas.** Se você inserir sua própria chave de API do
  serviço de legendas, ela é enviada somente ao serviço de legendas descrito na
  secção 8.

Nas plataformas Apple, estas credenciais podem sincronizar pelo Chaveiro do
iCloud se tiver ativado a sincronização do Chaveiro, conforme descrito na
secção 5.2.

### 4.4 Mensagens de suporte

Se você entrar em contacto com a BaBaSaMa, recebemos o endereço que você usar,
sua mensagem e quaisquer informações ou materiais de diagnóstico que você
decidir incluir. Não envie ficheiros de vídeo, senhas, tokens de acesso ou outro
material sensível.

## 5. Onde as informações ficam armazenadas

### 5.1 O site do Edendale

O site é um conjunto de páginas estáticas publicadas pelo **GitHub Pages**, um
serviço da GitHub, Inc. (uma empresa da Microsoft). Ele não tem contas, cookies,
armazenamento no navegador, análise de audiência nem scripts, fontes ou imagens
de terceiros. Sua preferência de idioma é deduzida das definições de idioma
que seu navegador já envia e não é registrada.

Para entregar uma página, o GitHub necessariamente recebe informações comuns de
pedido, como seu endereço IP ou de rede, o caminho solicitado, um carimbo de
data e hora, sua cadeia de agente de utilizador e outros cabeçalhos HTTP usuais. O
GitHub trata essas informações como controlador independente, nos termos da
[declaração de privacidade do GitHub](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement).
O GitHub Pages não disponibiliza registos de acesso ao dono do site, portanto a
BaBaSaMa não recebe, não retém e não analisa dados de visitantes.

As páginas de links de aplicação do site (`/search`, `/media`, `/library`,
`/play`) existem para que um link do Edendale abra numa aplicação instalada. Qualquer
identificador contido nesse link é tratado pelo seu dispositivo e pelo app
instalado; o site não o transmite a lugar algum.

### 5.2 Plataformas Apple

O índice da biblioteca local — incluindo os caminhos de ficheiro, os marcadores
com escopo de segurança e os nomes e identificadores de ficheiros de servidores
e armazenamento na nuvem ligados — permanece num armazenamento local do
dispositivo e está explicitamente excluído do espelhamento no CloudKit. As
legendas transferidas e o registo do vídeo a que cada uma pertence também ficam
apenas no dispositivo.

O progresso de reprodução e as escolhas por título — favoritos, participação na
lista para assistir e avaliações — ficam no contêiner privado do iCloud do
Edendale para aparecerem nos seus dispositivos Apple. Estes registos
identificam os títulos pelos identificadores do TMDB; não contêm nomes de
ficheiro, caminhos nem identificadores de fornecedores de armazenamento.

As credenciais do TMDB, de servidores, de contas de armazenamento na nuvem e do
serviço de legendas podem sincronizar pelo Chaveiro do iCloud, de modo que um
único início de sessão serve o seu iPhone, iPad, Mac e Apple Vision Pro. A
Apple TV não recebe itens do Chaveiro do iCloud. Para ligar uma conta ou um
servidor na Apple TV, pode aprová-lo num iPhone ou iPad próximo que tenha o
Edendale instalado e tenha sessão iniciada na sua Conta Apple ou na de um membro
da Partilha com a família. A conta é enviada diretamente entre os dois
dispositivos através de uma ligação encriptada na rede local e não passa pela
BaBaSaMa. A Apple trata as informações do iCloud conforme a sua
[Política de Privacidade](https://www.apple.com/legal/privacy/) e as suas
definições do iCloud.

### 5.3 Android

O Android guarda a biblioteca e os registos pessoais do Edendale no
armazenamento local da aplicação. Dependendo das suas definições de cópia de
segurança e transferência de dispositivo, o sistema operacional pode incluir
dados de aplicação elegíveis na cópia de segurança da plataforma ou na
transferência. As regras de cópia de segurança do Edendale excluem os seus
armazenamentos protegidos — a sessão do TMDB, as credenciais de servidores, as
chaves de anfitrião SFTP, as contas de armazenamento na nuvem e a chave de
legendas — tanto da cópia de segurança na nuvem como da transferência de
dispositivo, porque as chaves que os protegem nunca saem do dispositivo. A
proteção e a retenção das cópias de segurança dependem da sua versão do
Android, do dispositivo, da conta e do fornecedor de cópias de segurança.

No Android TV e no Google TV, **Continuar a ver no ecrã principal** está
desativado por predefinição. Se o ativar, o Edendale escreve o nome, a imagem e
a posição de cada título em curso, ou o episódio seguinte de uma série, na
fileira Watch Next do ecrã principal, através do fornecedor de TV do sistema.
Estas fileiras permanecem na TV e o Edendale não envia nada pela rede para
elas, mas a aplicação do ecrã principal (a aplicação do Google, no Google TV)
pode lê-las. Desativar a definição remove-as.

### 5.4 Windows

O Windows guarda o índice da biblioteca, o progresso de reprodução, os
favoritos, os itens da lista para assistir, as avaliações e as definições do
reprodutor no armazenamento local da aplicação. Quando o OneDrive está
configurado no dispositivo, o Edendale coloca uma réplica dos seus registos de
reprodução e registos pessoais na sua própria pasta do OneDrive
`Apps/Edendale`, para que um segundo PC associado à mesma conta fique em
sincronia. Sem o OneDrive, a aplicação permanece somente local. As credenciais
e as legendas transferidas permanecem no dispositivo e nunca entram nessa
réplica. Uma conta do OneDrive que ligue como fonte de armazenamento
(secção 6.4) é independente desta réplica: terminar a sessão dessa conta não
afeta a réplica, e desativar a réplica não afeta a fonte. A Microsoft trata os
dados do OneDrive conforme os termos da sua conta Microsoft e as suas
definições de privacidade.

## 6. Armazenamento que liga

O Edendale pode reproduzir vídeos de servidores que gere e de contas de
armazenamento na nuvem que liga. Os serviços disponíveis variam consoante a
plataforma. Em todos os casos, o Edendale liga-se diretamente do seu
dispositivo ao servidor ou fornecedor; nada passa por um servidor da BaBaSaMa.

O Edendale lista o conteúdo das pastas que percorre ou liga, incluindo as
respetivas subpastas, e lê os ficheiros de vídeo que reproduz. A listagem de
uma pasta inclui os nomes, tamanhos e datas de todos os itens que contém; o
Edendale mantém na biblioteca apenas pastas e ficheiros de vídeo e ignora tudo
o resto. O Edendale nunca cria, altera, move, partilha nem elimina nada no seu
armazenamento.

### 6.1 Os seus próprios servidores

Os servidores SMB, NFS, SFTP e WebDAV e o armazenamento compatível com S3 (como
Amazon S3, Backblaze B2, Cloudflare R2, Wasabi ou MinIO) são acedidos no
endereço que introduzir. O servidor — e, no caso de um serviço alojado, o
respetivo operador — recebe as suas credenciais de início de sessão, as
listagens de pastas e leituras de ficheiros que o Edendale solicita e
informações comuns de ligação, como o seu endereço IP. Quem gere esse servidor
determina como estas informações são tratadas.

### 6.2 Iniciar sessão num fornecedor de armazenamento na nuvem

O Google Drive, o Microsoft OneDrive e o Dropbox utilizam a própria página de
início de sessão do fornecedor, aberta no navegador do sistema ou na janela
segura de início de sessão do seu sistema operativo (OAuth 2.0 com PKCE). O
Edendale nunca vê a sua palavra-passe. Depois de aprovar as permissões
solicitadas, o fornecedor devolve tokens ao Edendale no seu dispositivo, e o
Edendale pergunta ao fornecedor a que conta pertencem para poder identificar a
conta em **Definições → Contas**.

Numa TV, pode, em alternativa, aprovar um início de sessão da Microsoft
introduzindo um código noutro dispositivo ou, na Apple TV, aprovar a conta a
partir do seu iPhone ou iPad, conforme descrito na secção 5.2.

Pode ver e remover as contas ligadas em **Definições → Contas**. Remover uma
fonte não termina a sessão da respetiva conta, pelo que as outras fontes que
utilizam essa conta continuam a funcionar.

### 6.3 Google Drive e dados de utilizador do Google

Atualmente, o Google Drive está disponível no Edendale nas plataformas Apple.
Se ficar disponível noutra plataforma, solicitará o mesmo acesso e tratará os
dados de utilizador do Google conforme descrito nesta secção.

**Permissões que o Edendale solicita**

| Permissão (âmbito) | Motivo pelo qual o Edendale a solicita |
|---|---|
| `openid` e `email` | Para identificar a Conta Google com que iniciou sessão e mostrar o respetivo endereço de e-mail em Definições → Contas |
| `https://www.googleapis.com/auth/drive.readonly` ("Ver e transferir todos os seus ficheiros do Google Drive") | Para mostrar as suas pastas e permitir que escolha uma, adicionar à sua biblioteca os vídeos das pastas que ligar e reproduzir esses vídeos |

O Edendale não solicita autorização para criar, editar, mover, partilhar ou
eliminar ficheiros do Drive, e não o consegue fazer.

**Dados de utilizador do Google a que o Edendale acede**

- **Informações da conta:** o identificador exclusivo da sua Conta Google e o
  seu endereço de e-mail.
- **Metadados de ficheiros e pastas**, de O meu disco, de Partilhados comigo e
  dos seus drives partilhados, limitados às pastas que abre no Edendale e às
  pastas que liga (com as respetivas subpastas): o ID, o nome, o tipo (tipo
  MIME), o tamanho, a data e hora da última modificação de cada item e a duração
  do vídeo indicada pelo Google Drive; no caso de um atalho, o ID e o tipo do
  item para o qual aponta; e os nomes e IDs dos seus drives partilhados.
- **Conteúdo dos ficheiros:** o conteúdo dos ficheiros de vídeo que reproduz,
  lido por partes à medida que vê.

O Edendale solicita apenas estes campos. Não lê descrições de ficheiros,
comentários, definições de partilha, proprietários nem histórico de revisões.
Ignora ficheiros do Google Docs, Sheets e Slides e de outros formatos de
ficheiro do Google, e não abre nenhum ficheiro além de um vídeo que reproduz.

**Como o Edendale utiliza os dados de utilizador do Google**

O Edendale utiliza os dados de utilizador do Google apenas para fornecer os
recursos do Google Drive que utiliza no Edendale:

- mostrar as suas pastas do Drive para que possa escolher uma;
- adicionar à sua biblioteca os vídeos das pastas ligadas e atualizá-la quando
  voltar a analisá-las, o que inclui classificar os nomes dos ficheiros no seu
  dispositivo para reconhecer o título, o ano, a temporada e o episódio;
- transmitir um vídeo quando o reproduz; e
- identificar a conta ligada e manter a respetiva sessão iniciada.

O Edendale não utiliza os dados de utilizador do Google para publicidade, não
os vende, não os utiliza para criar um perfil seu e não os utiliza para
desenvolver, melhorar ou treinar modelos generalizados de inteligência
artificial ou de aprendizagem automática. A BaBaSaMa nunca recebe os seus dados
de utilizador do Google, pelo que nenhuma pessoa da BaBaSaMa os pode ler.

**Como os dados de utilizador do Google são armazenados e protegidos**

- O token de atualização, o identificador da sua Conta Google, o seu endereço
  de e-mail e as permissões que concedeu são guardados no armazenamento
  protegido de credenciais da plataforma (secção 4.3). Nas plataformas Apple,
  podem sincronizar com os seus próprios dispositivos Apple através do Chaveiro
  do iCloud, que a Apple protege com encriptação ponto a ponto. Os tokens de
  acesso expiram no prazo de uma hora e são mantidos apenas na memória.
- Os metadados dos ficheiros de vídeo das pastas ligadas (ID, nome, tamanho,
  data e duração), juntamente com os títulos reconhecidos a partir dos
  respetivos nomes, são guardados na biblioteca local do Edendale no
  dispositivo. Não são sincronizados através do iCloud. A cópia de segurança do
  próprio dispositivo, como a Cópia de segurança em iCloud ou uma cópia de
  segurança num computador, pode incluí-los consoante as suas definições de
  cópia de segurança.
- O conteúdo dos vídeos é mantido apenas num pequeno buffer na memória enquanto
  vê. Nunca é gravado no armazenamento nem enviado.
- Todos os pedidos ao Google utilizam uma ligação HTTPS encriptada.

**Como os dados de utilizador do Google são partilhados**

O Edendale não transfere dados de utilizador do Google para a BaBaSaMa.
Partilha dados de utilizador do Google apenas das seguintes formas, sempre a
partir do seu dispositivo e para fornecer um recurso que utiliza:

- O **TMDB** recebe o título, o ano, a temporada e o número do episódio
  reconhecidos a partir do nome do ficheiro de um vídeo, para que a sua
  biblioteca possa mostrar os detalhes do filme ou da série correspondente. O
  TMDB não recebe o nome do ficheiro, o ID do ficheiro, o respetivo conteúdo
  nem os dados da sua Conta Google.
- O **TheIntroDB**, apenas se ativar os botões para saltar, recebe o
  identificador TMDB do título correspondente, os números da temporada e do
  episódio e a duração do vídeo (secção 9).
- O **Wyzie Subs**, apenas quando procura legendas, recebe o identificador TMDB
  do título correspondente e os números da temporada e do episódio (secção 8).
- A **Apple** armazena e sincroniza a credencial da sua conta Google, com
  encriptação ponto a ponto, se utilizar o Chaveiro do iCloud.
- As informações podem ser divulgadas quando exigido pela legislação aplicável
  ou por processo legal válido.

**Retenção e eliminação**

- Remova uma fonte do Google Drive no Edendale para remover os respetivos
  vídeos da biblioteca nesse dispositivo.
- Termine a sessão em **Definições → Contas** para eliminar a conta Google e os
  respetivos tokens do dispositivo e dos seus outros dispositivos Apple que a
  sincronizam. Escolha **Terminar Sessão e Revogar Acesso** para pedir também
  ao Google que ponha termo ao acesso do Edendale, o que termina igualmente o
  acesso de uma Apple TV que tenha recebido a conta do seu iPhone ou iPad.
- Pode remover o acesso do Edendale a qualquer momento na página
  [Ligações de terceiros](https://myaccount.google.com/connections) da sua Conta
  Google. Depois disso, o Edendale deixa de conseguir ler o seu Drive.
- Desinstalar o Edendale elimina a respetiva biblioteca local do dispositivo.
  Nas plataformas Apple, um item do Chaveiro pode permanecer após a
  desinstalação; por isso, termine primeiro a sessão no Edendale ou remova o
  acesso do Edendale no Google.

**Utilização Limitada**

A utilização pelo Edendale das informações recebidas das APIs do Google, e a
respetiva transferência para qualquer outra aplicação, cumprirão a
[Política de Dados do Utilizador dos Serviços de API do Google](https://developers.google.com/terms/api-services-user-data-policy),
incluindo os requisitos de Utilização Limitada.

O Google trata os dados da sua conta e do Drive conforme a
[Política de Privacidade do Google](https://policies.google.com/privacy). Abrir
um trailer do YouTube (secção 10) não utiliza uma conta Google que tenha ligado
para o Google Drive.

### 6.4 Microsoft OneDrive

O Edendale solicita estas permissões do Microsoft Graph:

| Permissão | Motivo pelo qual o Edendale a solicita |
|---|---|
| `User.Read` | Para identificar a conta Microsoft com que iniciou sessão e mostrá-la em Definições → Contas |
| `Files.Read` | Para mostrar as suas pastas e permitir que escolha uma, adicionar à sua biblioteca os vídeos das pastas que ligar e reproduzir esses vídeos |
| `offline_access` | Para manter a sessão iniciada sem lhe pedir para iniciar sessão novamente a cada hora |

O Edendale acede a:

- **Informações da conta:** o ID, o nome a apresentar e o endereço de e-mail ou
  nome principal de utilizador da sua conta Microsoft, e o ID do seu OneDrive.
- **Metadados de ficheiros e pastas** das pastas que abre ou liga: o ID, o
  nome, o tamanho, se é ficheiro ou pasta, a data e hora da última modificação
  de cada item e a duração do vídeo indicada pelo OneDrive.
- **Conteúdo dos ficheiros:** os ficheiros de vídeo que reproduz, transmitidos
  através de links de transferência de curta duração emitidos pelo OneDrive.

O Edendale funciona com contas Microsoft pessoais e com contas escolares ou
profissionais. No caso de uma conta escolar ou profissional, a sua organização
pode ver que iniciou sessão no Edendale e pode gerir ou registar esse acesso ao
abrigo das suas próprias políticas.

Terminar a sessão em **Definições → Contas** elimina a conta e os respetivos
tokens do dispositivo. A Microsoft não permite que uma aplicação revogue o seu
próprio acesso; por isso, para lhe pôr termo na Microsoft, remova o Edendale na
página de [permissões de aplicações](https://account.live.com/consent/Manage)
da sua conta pessoal ou, no caso de uma conta escolar ou profissional, através
do portal My Apps da sua organização ou do administrador. A Microsoft trata
estas informações conforme a
[Declaração de Privacidade da Microsoft](https://privacy.microsoft.com/privacystatement).

### 6.5 Dropbox

O Edendale solicita estas permissões do Dropbox:

| Permissão | Motivo pelo qual o Edendale a solicita |
|---|---|
| `account_info.read` | Para identificar a conta Dropbox com que iniciou sessão e mostrá-la em Definições → Contas |
| `files.metadata.read` | Para mostrar as suas pastas e permitir que escolha uma, e adicionar à sua biblioteca os vídeos das pastas que ligar |
| `files.content.read` | Para reproduzir esses vídeos |

O Edendale acede a:

- **Informações da conta:** o ID da sua conta Dropbox, o nome a apresentar e o
  endereço de e-mail.
- **Metadados de ficheiros e pastas** das pastas que abre e de tudo o que está
  dentro de uma pasta que liga (o Dropbox lista de uma só vez toda a árvore de
  uma pasta ligada): o ID, o nome, o caminho, o tamanho e a data de modificação
  de cada item.
- **Conteúdo dos ficheiros:** os ficheiros de vídeo que reproduz, transmitidos
  através de links temporários que expiram ao fim de quatro horas.

Terminar a sessão em **Definições → Contas** elimina a conta e os respetivos
tokens do dispositivo e pede ao Dropbox que revogue o acesso do Edendale. Também
pode remover o Edendale das
[aplicações ligadas](https://www.dropbox.com/account/connected_apps) do seu
Dropbox. O Dropbox trata estas informações conforme a sua
[Política de Privacidade](https://www.dropbox.com/privacy).

## 7. Solicitações ao TMDB e sincronização opcional de conta

O Edendale usa o TMDB para buscas no catálogo, imagens, sinopses, elenco,
avaliações, referências de trailers e enriquecimento da biblioteca. Quando
esses recursos são usados, o texto da busca e as informações de título deduzidas
são enviados ao TMDB. Isto também se aplica a ficheiros de servidores e de
armazenamento na nuvem: o TMDB recebe as informações de título reconhecidas a
partir de um nome de ficheiro, nunca o nome do ficheiro, a respetiva
localização ou a sua conta de armazenamento. As solicitações vão diretamente do
seu dispositivo ao TMDB; não passam por nenhum servidor da BaBaSaMa. O TMDB
pode receber informações comuns de ligação, como um endereço IP e detalhes do
dispositivo ou da solicitação.

Se você associar sua conta do TMDB, o Edendale pode ler e atualizar seus
favoritos, sua lista para assistir e suas avaliações no TMDB conforme você
determinar. Sua posição de reprodução e seu histórico não são enviados ao TMDB.

O TMDB trata as informações conforme sua
[Política de Privacidade](https://www.themoviedb.org/privacy-policy) e seus
[Termos de API](https://www.themoviedb.org/api-terms-of-use).

## 8. Busca de legendas

O Edendale pode buscar legendas pelo **Wyzie Subs** (`sub.wyzie.io`, operado
pela Wyzie). A solicitação só é feita se você abrir o painel de legendas durante
a reprodução e iniciar uma busca; nada é enviado apenas porque um vídeo está a
ser reproduzido.

Ao iniciar uma busca, o Edendale envia o identificador TMDB do título, os
números de temporada e episódio no caso de um episódio, o idioma de legenda
escolhido, os filtros de formato e de deficiência auditiva que você selecionou e
uma chave de API — a incluída na sua versão ou a que você inseriu nas definições.
Seu nome de ficheiro, seu caminho, os dados de vídeo e sua biblioteca não são
enviados. A Wyzie pode receber informações comuns de ligação, como um endereço
IP.

Se você escolher um resultado, o Edendale transfere esse ficheiro de legenda da
Wyzie ou do local indicado e guarda-o no seu dispositivo, para que possa ser
oferecido novamente sem nova transferência quando o mesmo vídeo for
reproduzido. O Edendale regista no dispositivo o vídeo a que a legenda pertence
— o título correspondente e o nome do ficheiro do vídeo. Nas plataformas Apple e
no Windows, uma legenda transferida que não seja utilizada durante cerca de um
mês é eliminada automaticamente; o Windows permite desativar isto em
Definições → Legendas.

A Wyzie trata as informações conforme seus próprios termos e práticas de
privacidade, fora do controlo da BaBaSaMa. Você pode evitar totalmente qualquer
contacto com a Wyzie não iniciando nenhuma busca de legendas.

## 9. Botões para saltar

O Edendale pode mostrar os botões **Saltar Genérico**, **Saltar resumo** e
**Saltar créditos** utilizando marcações de tempo da comunidade fornecidas pelo
**TheIntroDB** (`api.theintrodb.org`). Os botões para saltar estão desativados
por predefinição; pode ativá-los nas definições de reprodução do Edendale ou no
painel de ajustes do reprodutor. A reprodução nunca salta uma parte do vídeo, a
menos que prima o botão.

Quando os botões para saltar estão ativados e reproduz um título que o Edendale
identificou no TMDB, o Edendale envia ao TheIntroDB o identificador TMDB do
título — no caso de um episódio, o identificador da série com os números da
temporada e do episódio — e a duração do vídeo, para que possa devolver
marcações de tempo adequadas à sua cópia. Não é enviada nenhuma conta, chave de
API, nome de ficheiro, caminho de ficheiro, dados de vídeo nem biblioteca. O
TheIntroDB recebe informações comuns de ligação, como o seu endereço IP. Os
ficheiros que o Edendale não identificou nunca são consultados.

As marcações de tempo são mantidas na memória apenas enquanto o vídeo está a
ser reproduzido. Não são guardadas na sua biblioteca, no progresso de
reprodução nem em nenhum armazenamento sincronizado. O TheIntroDB trata as
informações conforme a sua
[Política de Privacidade](https://theintrodb.org/docs/privacy) e os seus
[Termos](https://theintrodb.org/docs/terms).

## 10. Reprodução de trailers

O Edendale não contata o YouTube apenas porque há um trailer disponível. Nenhum
trailer é reproduzido antes da sua ação.

Quando você escolhe expressamente assistir a um trailer, as versões para Apple e
Android abrem uma incorporação do YouTube com privacidade aprimorada
(`youtube-nocookie.com`), e o Windows entrega o trailer ao navegador do sistema,
de modo que a própria aplicação não faz nenhuma chamada ao YouTube. O Google e
o YouTube podem então tratar informações de ligação, dispositivo, origem,
visualização e publicidade conforme a
[Política de Privacidade do Google](https://policies.google.com/privacy) e os
termos do YouTube. O modo de privacidade aprimorada limita parte do uso de dados
pelo YouTube; ele não torna a solicitação anônima, e um vídeo incorporado pode
exibir publicidade.

## 11. Relatórios de plataformas e lojas

O Edendale não contém código de análise, telemetria ou relatório de falhas em
nenhuma plataforma. Seu manifesto de privacidade da Apple não declara nenhum
tipo de dado coletado nem rastreamento.

Independentemente do Edendale, a plataforma ou loja de onde você instala pode
fornecer à BaBaSaMa relatórios agregados sobre a aplicação. Esses dados vêm da
plataforma, não de algo que o Edendale envie, e você os controla pela própria
plataforma:

- **Apple.** O App Store Connect pode fornecer análises agregadas e relatórios
  de falhas para versões da App Store. A Apple só inclui os dados do seu
  dispositivo se você tiver ativado **Partilhar com Programadores** em
  Definições → Privacidade e Segurança → Análise e Melhorias. Desativar interrompe
  isso.
- **Android.** Onde o Edendale é distribuído pelo Google Play, o Play Console
  pode fornecer relatórios de falhas e de ANR ("a aplicação não responde") e
  métricas de qualidade agregadas. Controla isto em Definições → Google
  → Utilização e diagnóstico e pela opção oferecida ao relatar uma falha.
- **Windows.** Onde o Edendale é distribuído pela Microsoft Store, o Partner
  Center pode fornecer relatórios agregados de integridade e uso. Os dados de
  diagnóstico do Windows são controlados em Definições → Privacidade e
  segurança → Diagnóstico e comentários.
- **Transferências diretas.** Onde o Edendale é distribuído como transferência direta pelo
  GitHub, o GitHub recebe o pedido de transferência e informa à BaBaSaMa apenas
  contagens agregadas.

Esses relatórios são agregados ou de diagnóstico. Eles não dizem à BaBaSaMa o
que você assistiu, o que há na sua biblioteca ou no seu armazenamento, ou quem
você é.

## 12. Como as informações são usadas

| Finalidade | Informações | Base legal usual quando exigida |
|---|---|---|
| Indexar e reproduzir as mídias que você seleciona | Mídias e informações da biblioteca | Execução do Serviço que você solicita |
| Listar, indexar e reproduzir ficheiros de servidores e de armazenamento na nuvem que liga | Listagens de pastas, metadados e conteúdo de ficheiros dessa fonte | Execução do Serviço que você solicita |
| Iniciar sessão numa conta de armazenamento ligada e identificá-la | Identificador da conta, endereço de e-mail, nome a apresentar e tokens | Sua solicitação ou consentimento |
| Obter metadados e resultados de busca do TMDB | Texto da busca e informações de título deduzidas | Execução do Serviço; legítimo interesse |
| Encontrar e transferir uma legenda que você pediu | Identificador TMDB, temporada e episódio, idioma e filtros | Sua solicitação |
| Mostrar os botões para saltar que ativou | Identificador TMDB, temporada e episódio, duração do vídeo | Sua solicitação ou consentimento |
| Guardar progresso, preferências e avaliações | Registos pessoais | Execução do Serviço |
| Sincronizar registos pela sua conta de plataforma | Registos de reprodução e registos pessoais | Sua solicitação ou consentimento; execução do Serviço |
| Associar a uma conta opcional do TMDB ou a um servidor | Token de conta ou credenciais do servidor | Sua solicitação ou consentimento |
| Responder a pedidos de suporte | Dados de contacto e conteúdo das mensagens | Legítimo interesse; providências solicitadas por você |
| Manter e melhorar as aplicações | Relatórios agregados de plataforma ou loja | Legítimo interesse em qualidade e estabilidade |

Quando um tratamento se basear em consentimento, você pode retirá-lo terminando
a sessão ou desassociando a conta correspondente, removendo a fonte, desativando
o recurso ou alterando as permissões da plataforma.

## 13. Partilha e prestadores de serviço

A BaBaSaMa não vende suas informações. Como a BaBaSaMa não opera servidor para o
Edendale, as informações são divulgadas apenas na medida necessária:

- ao **TMDB** quando você busca, enriquece um título, carrega metadados ou usa
  uma conta opcional do TMDB associada;
- ao **Google**, à **Microsoft** ou ao **Dropbox** quando liga e utiliza uma
  conta do Google Drive, do OneDrive ou do Dropbox (secção 6);
- ao servidor que escolhe quando liga uma fonte SMB, NFS, SFTP, WebDAV ou
  compatível com S3;
- à **Wyzie** quando você inicia uma busca de legendas;
- ao **TheIntroDB** enquanto os botões para saltar estiverem ativados;
- à **Apple**, ao **Google** ou à **Microsoft** quando você ativa ou usa seus
  serviços de armazenamento, cópia de segurança, credenciais ou sincronização, ou quando
  eles fornecem os relatórios agregados descritos na secção 11;
- ao **YouTube/Google** depois que você abre expressamente um trailer;
- ao **GitHub**, que entrega o site e eventuais downloads diretos; e
- quando exigido pela legislação aplicável ou por processo legal válido.

Cada uma dessas organizações trata as informações como controladora
independente, sob seus próprios termos e política de privacidade. Nenhuma atua
como operadora sob instruções da BaBaSaMa, e a BaBaSaMa não recebe cópia do que
elas coletam além dos relatórios agregados descritos na secção 11.

## 14. Retenção e eliminação

- **Site:** não há nada a eliminar. O site não usa cookies nem armazenamento no
  navegador. Os dados de pedido que chegam ao GitHub são retidos conforme as
  políticas do GitHub e não ficam disponíveis à BaBaSaMa.
- **Armazenamento local dos apps:** remover uma fonte ou um registo afeta o
  índice da biblioteca local; não remove necessariamente registos de reprodução
  ou de conta. Limpar os dados da aplicação pode remover o contêiner local
  conforme os controlos daquela plataforma. O comportamento de desinstalação,
  cópia de segurança e recuperação varia por plataforma e não remove necessariamente cópias
  na nuvem ou de segurança.
- **Servidores e contas de armazenamento na nuvem ligados:** remover uma fonte
  remove os respetivos ficheiros da biblioteca, mas mantém as credenciais ou a
  conta, para que outras fontes as possam utilizar. Termine a sessão ou esqueça
  as credenciais em **Definições → Contas** para as eliminar. Terminar a sessão
  não elimina nada no seu armazenamento; para pôr termo ao acesso do Edendale
  num fornecedor de nuvem, utilize os controlos do fornecedor descritos na
  secção 6.
- **Apple:** registos privados do CloudKit e itens sincronizados do Chaveiro do
  iCloud podem permanecer após a desinstalação. Faça a gestão deles pelos controlos
  disponíveis do iCloud, do Chaveiro, do app ou do dispositivo. O Edendale não
  oferece hoje um único controlo multiplataforma para apagar tudo.
- **Android:** uma cópia de segurança da plataforma ou de transferência de
  dispositivo pode permanecer conforme os controlos e prazos do Google, do
  fabricante do dispositivo ou do seu fornecedor de cópias de segurança. As
  fileiras Watch Next no ecrã principal do Android TV são removidas quando
  desativa a definição.
- **Windows:** uma réplica na sua pasta do OneDrive `Apps/Edendale` permanece até
  que a elimine pelo OneDrive e por eventuais recursos de reciclagem ou
  recuperação.
- **As legendas transferidas** ficam no seu dispositivo até você removê-las ou,
  nas plataformas Apple e no Windows, até ficarem cerca de um mês sem serem
  utilizadas. A Wyzie não mantém conta em seu nome; qualquer registo de
  solicitação que ela guarde é regido pela Wyzie.
- **As marcações de tempo dos botões para saltar** são descartadas quando a
  reprodução termina. Qualquer registo de pedido que o TheIntroDB guarde é
  regido pelo TheIntroDB.
- Uma conta do TMDB associada retém informações conforme as definições e
  políticas do TMDB. Desassociar o Edendale não elimina automaticamente as
  informações já armazenadas na sua conta do TMDB; faça a gestão desses registos pelo
  TMDB.
- A correspondência de suporte é mantida apenas pelo tempo razoavelmente
  necessário para responder, manter um histórico de atendimento ou cumprir
  obrigações legais.

Como a BaBaSaMa em geral não consegue acessar informações armazenadas apenas no
seu dispositivo ou em uma conta privada de plataforma, use os controlos
específicos de cada plataforma indicados acima. Um pedido de privacidade à
BaBaSaMa não pode apagar diretamente informações às quais a BaBaSaMa não tem
acesso.

## 15. Transferências internacionais

GitHub, TMDB, Wyzie, TheIntroDB, Apple, Google, Microsoft e Dropbox podem tratar
informações em países diferentes do seu. Suas políticas de privacidade
descrevem as salvaguardas que aplicam a transferências internacionais. A
BaBaSaMa não transfere suas informações, porque não as recebe.

## 16. Segurança

O Edendale utiliza ligações encriptadas para o TMDB, a Wyzie, o TheIntroDB e
todos os fornecedores de armazenamento na nuvem, e guarda as credenciais no
armazenamento protegido da plataforma. O início de sessão na nuvem utiliza
OAuth 2.0 com PKCE na própria página do fornecedor, pelo que o Edendale nunca
lida com a sua palavra-passe da nuvem, e os tokens de acesso permanecem na
memória. O Edendale fixa a chave de anfitrião de cada servidor SFTP e
pergunta-lhe antes de confiar numa chave alterada.

Uma ligação ao seu próprio servidor só é tão privada quanto o protocolo e a
configuração deste o permitem. As ligações SFTP e HTTPS são encriptadas; o
NFS, o WebDAV através de `http://` e algumas configurações de SMB não o são,
pelo que deve utilizá-los apenas numa rede em que confie.

O Serviço mantém deliberadamente os dados de vídeo e os registos pessoais fora
de qualquer armazenamento operado pelo desenvolvedor — que não existe. Nenhuma
medida de segurança garante proteção absoluta, por isso proteja o seu
dispositivo, as suas contas de plataforma, as suas contas de armazenamento na
nuvem, os seus servidores e as suas cópias de segurança.

## 17. Privacidade de crianças

O Edendale é um utilitário de mídia para o público geral e não é dirigido a
crianças menores de 13 anos. A BaBaSaMa não coleta conscientemente informações
pessoais de crianças pelo Edendale. Um pai, mãe ou responsável que acredite que
uma criança enviou informações pessoais à BaBaSaMa pode nos contatar para
solicitar a sua eliminação.

## 18. Seus direitos

Dependendo de onde você mora, você pode ter direito à informação e a solicitar
acesso, correção, eliminação, restrição, portabilidade ou oposição, além de
retirar o consentimento ou apresentar reclamação a uma autoridade de proteção de
dados.

Quase todas as informações do Edendale estão sob seu controlo direto, porque
permanecem no seu dispositivo, na sua conta de plataforma ou no fornecedor de
armazenamento que escolheu. Pode pôr termo ao acesso do Edendale a uma conta de
armazenamento na nuvem a qualquer momento através dos controlos descritos na
secção 6. Para as informações em poder da BaBaSaMa, como uma mensagem de
suporte, escreva para **long@babasama.com**. Podemos precisar de dados
suficientes para verificar e responder ao seu pedido.

## 19. Alterações desta política

Podemos atualizar esta política quando os recursos, plataformas, fornecedores ou
obrigações legais do Edendale mudarem. Alteraremos a data de **Última
atualização** e daremos aviso adicional quando apropriado. Um tratamento
substancialmente diferente não será aplicado retroativamente quando for exigido
consentimento ou outra base legal.

## 20. Contacto

Dúvidas, pedidos de privacidade ou reclamações podem ser enviados para:

- **BaBaSaMa**
- **long@babasama.com**
