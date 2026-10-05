---
title: "Política de Privacidade"
app: "Edendale"
lastUpdated: "5 de outubro de 2026"
lastUpdatedLabel: "Última atualização"
contentLanguage: "pt-BR"
draft: false
---

## 1. Introdução e escopo

Esta Política de Privacidade explica como o **Edendale** trata as informações
quando você usa um aplicativo oficial do Edendale ou o site do Edendale (em
conjunto, o "**Serviço**").

O Edendale é um reprodutor de vídeo local e um registro pessoal do que você
assiste. Ele permite reproduzir as mídias que você escolher — do seu
dispositivo, de servidores que você mantém ou de contas de armazenamento em
nuvem que você vincular —, montar uma biblioteca privada, enriquecer títulos com
informações do The Movie Database ("**TMDB**"), buscar legendas, exibir botões
opcionais para pular trechos e manter seu histórico pessoal. O Edendale não
fornece, hospeda nem envia filmes ou episódios de televisão para você.

O site do Edendale é um site informativo. Ele descreve os aplicativos, aponta
para o código-fonte do projeto e responde a links de aplicativo para que um link
do Edendale compartilhado possa abrir em um app instalado. Não é um reprodutor
de vídeo, não tem contas e não armazena nada sobre você.

Esta política se aplica às versões oficiais e ao site oficial. Forks
independentes e cópias auto-hospedadas são controlados por seus respectivos
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
  seus arquivos ou das suas contas.
- Seus arquivos de vídeo e de legenda não são enviados à BaBaSaMa nem a
  terceiros.
- Quando você vincula o Google Drive, o Microsoft OneDrive ou o Dropbox, você
  faz login diretamente nesse provedor, e o Edendale pede apenas acesso somente
  leitura. Seus arquivos e tokens de login trafegam apenas entre o seu
  dispositivo e esse provedor.
- O Edendale não contém publicidade, análise de marketing, relatórios de falhas
  nem rastreamento comportamental em nenhuma plataforma. O YouTube pode exibir
  publicidade depois que você escolher abrir um trailer.
- A BaBaSaMa não vende nem aluga informações pessoais.
- O índice da biblioteca e seus registros pessoais ficam no seu dispositivo ou
  no armazenamento vinculado à sua própria conta de plataforma, conforme
  descrito abaixo.
- O acesso à rede se limita aos recursos que você usa: metadados do TMDB e
  sincronização opcional de conta, os servidores e as contas de armazenamento
  que você vincula, busca de legendas iniciada por você, botões para pular, se
  você os ativar, armazenamento ou sincronização da plataforma e um trailer
  aberto por ação explícita sua.

Uma conexão opcional com o TMDB, o Google, a Microsoft ou o Dropbox é uma conta
nesse provedor, não uma conta do Edendale.

## 4. Informações tratadas pelo Edendale

### 4.1 Mídias e informações da biblioteca

Quando você escolhe um arquivo ou uma pasta, ou vincula um servidor ou uma pasta
de armazenamento em nuvem, o Edendale pode tratar:

- nomes de arquivos e pastas;
- caminhos relativos, identificadores de arquivo da plataforma, marcadores com
  escopo de segurança ou os identificadores que um provedor de armazenamento
  atribui a cada arquivo e pasta;
- tipo, tamanho e data de modificação do arquivo e, quando o provedor de
  armazenamento a informa, a duração de um vídeo;
- o título, o ano de lançamento, o nome da série, o número da temporada e o
  número do episódio deduzidos do nome do arquivo;
- o endereço de um servidor que você vincular e o provedor, a conta e a pasta de
  uma fonte de armazenamento em nuvem; e
- identificadores do TMDB, links de imagens, sinopses, elenco, duração e outros
  metadados usados para enriquecer sua biblioteca local.

A classificação dos nomes de arquivo acontece localmente, antes de qualquer
solicitação de metadados. Em seguida, o Edendale pode enviar ao TMDB um título
de filme ou série, um ano, um número de temporada ou de episódio assim deduzidos
para encontrar os metadados correspondentes. O nome do arquivo em si não é
enviado.

Os dados dos seus vídeos e legendas permanecem no local que você escolheu e são
lidos para reprodução. Quando um vídeo vem de um servidor ou de um armazenamento
em nuvem, o Edendale lê as partes de que precisa enquanto você assiste e mantém
na memória um pequeno buffer de leitura antecipada; ele não salva uma cópia do
vídeo. Os vídeos não são enviados à BaBaSaMa nem a terceiros.

### 4.2 Registros de reprodução e registros pessoais

Dependendo do recurso e da plataforma, o Edendale pode armazenar:

- posição de reprodução, duração assistida, status de conclusão e data da última
  reprodução;
- favoritos e itens da lista para assistir;
- sua avaliação pessoal;
- preferências do reprodutor e da interface, como o idioma das legendas e o
  filtro para pessoas com deficiência auditiva, a aparência das legendas, a
  duração dos saltos e as velocidades ao manter pressionado, os ajustes de áudio
  e imagem, e a faixa de áudio, a legenda e a velocidade que você escolheu por
  último para um título;
- um registro das legendas que você baixou e do vídeo a que cada uma pertence; e
- um instantâneo de exibição limitado, como um título ou uma referência de
  pôster, usado em widgets da tela de início, nas fileiras de "continuar
  assistindo" e, se você ativar esse recurso, na tela inicial do Android TV.

Esses registros são para seu uso pessoal.

### 4.3 Credenciais e informações de conta

O Edendale guarda todas as credenciais no armazenamento protegido de credenciais
da plataforma: o Chaveiro nas plataformas Apple, um armazenamento criptografado
apoiado no Keystore do Android no Android e a DPAPI no Windows. As credenciais
nunca são gravadas na sua biblioteca, nos links armazenados nem em logs, e nunca
são enviadas à BaBaSaMa.

- **Conta do TMDB.** Se você conectar uma conta opcional do TMDB, o Edendale
  recebe um token de acesso e um identificador de conta do TMDB para sincronizar
  favoritos, itens da lista para assistir e avaliações compatíveis.
- **Servidores que você vincula.** Para um compartilhamento SMB, um servidor
  SFTP ou um servidor WebDAV protegido por senha, o Edendale guarda o endereço
  do servidor, o nome de usuário e a senha. Para armazenamento compatível com
  S3, ele guarda o ID da chave de acesso e a chave de acesso secreta. Para um
  servidor SFTP, ele também guarda a impressão digital da chave de host do
  servidor, para poder avisar você se essa chave mudar. Essas credenciais são
  enviadas somente ao servidor que você vinculou.
- **Contas de armazenamento em nuvem.** Quando você vincula o Google Drive, o
  Microsoft OneDrive ou o Dropbox, o Edendale guarda um token de atualização, o
  identificador da conta, o endereço de e-mail e o nome de exibição retornados
  pelo provedor e as permissões que você concedeu. Os tokens de acesso de curta
  duração ficam apenas na memória. A seção 6 descreve o que cada provedor
  compartilha com o Edendale.
- **Chave do serviço de legendas.** Se você inserir sua própria chave de API do
  serviço de legendas, ela é enviada somente ao serviço de legendas descrito na
  seção 8.

Nas plataformas Apple, essas credenciais podem sincronizar pelo Chaveiro do
iCloud se você tiver ativado a sincronização do Chaveiro, conforme descrito na
seção 5.2.

### 4.4 Mensagens de suporte

Se você entrar em contato com a BaBaSaMa, recebemos o endereço que você usar,
sua mensagem e quaisquer informações ou materiais de diagnóstico que você
decidir incluir. Não envie arquivos de vídeo, senhas, tokens de acesso ou outro
material sensível.

## 5. Onde as informações ficam armazenadas

### 5.1 O site do Edendale

O site é um conjunto de páginas estáticas publicadas pelo **GitHub Pages**, um
serviço da GitHub, Inc. (uma empresa da Microsoft). Ele não tem contas, cookies,
armazenamento no navegador, análise de audiência nem scripts, fontes ou imagens
de terceiros. Sua preferência de idioma é deduzida das configurações de idioma
que seu navegador já envia e não é registrada.

Para entregar uma página, o GitHub necessariamente recebe informações comuns de
requisição, como seu endereço IP ou de rede, o caminho solicitado, um carimbo de
data e hora, sua cadeia de agente de usuário e outros cabeçalhos HTTP usuais. O
GitHub trata essas informações como controlador independente, nos termos da
[declaração de privacidade do GitHub](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement).
O GitHub Pages não disponibiliza registros de acesso ao dono do site, portanto a
BaBaSaMa não recebe, não retém e não analisa dados de visitantes.

As páginas de links de aplicativo do site (`/search`, `/media`, `/library`,
`/play`) existem para que um link do Edendale abra em um app instalado. Qualquer
identificador contido nesse link é tratado pelo seu dispositivo e pelo app
instalado; o site não o transmite a lugar algum.

### 5.2 Plataformas Apple

O índice da biblioteca local — incluindo caminhos de arquivo, marcadores com
escopo de segurança e os nomes e identificadores de arquivos de servidores e
armazenamento em nuvem vinculados — permanece em um armazenamento local do
dispositivo e está explicitamente excluído do espelhamento no CloudKit. As
legendas baixadas e o registro do vídeo a que cada uma pertence também ficam
apenas no dispositivo.

O progresso de reprodução e as escolhas por título — favoritos, participação na
lista para assistir e avaliações — ficam no contêiner privado do iCloud do
Edendale para aparecerem nos seus dispositivos Apple. Esses registros
identificam os títulos pelos identificadores do TMDB; não contêm nomes de
arquivo, caminhos nem identificadores de provedores de armazenamento.

As credenciais do TMDB, de servidores, de contas de armazenamento em nuvem e do
serviço de legendas podem sincronizar pelo Chaveiro do iCloud, de modo que um
único login vale para seu iPhone, iPad, Mac e Apple Vision Pro. A Apple TV não
recebe itens do Chaveiro do iCloud. Para vincular uma conta ou um servidor na
Apple TV, você pode aprová-lo em um iPhone ou iPad próximo que tenha o Edendale
instalado e esteja conectado à sua Conta Apple ou à de um membro do
Compartilhamento Familiar. A conta é enviada diretamente entre os dois
dispositivos por uma conexão criptografada na rede local e não passa pela
BaBaSaMa. A Apple trata as informações do iCloud conforme sua
[Política de Privacidade](https://www.apple.com/legal/privacy/) e suas
configurações do iCloud.

### 5.3 Android

O Android guarda a biblioteca e os registros pessoais do Edendale no
armazenamento local do aplicativo. Dependendo das suas configurações de backup e
transferência de dispositivo, o sistema operacional pode incluir dados de
aplicativo elegíveis no backup da plataforma ou na transferência. As regras de
backup do Edendale excluem seus armazenamentos protegidos — a sessão do TMDB, os
logins de servidores, as chaves de host SFTP, as contas de armazenamento em
nuvem e a chave de legendas — tanto do backup na nuvem quanto da transferência
de dispositivo, porque as chaves que os protegem nunca saem do dispositivo. A
proteção e a retenção dos backups dependem da sua versão do Android, do
dispositivo, da conta e do provedor de backup.

No Android TV e no Google TV, **Continuar assistindo na tela inicial** vem
desativado por padrão. Se você ativá-lo, o Edendale grava o nome, a imagem e a
posição de cada título em andamento, ou o próximo episódio de uma série, na
fileira Watch Next da tela inicial, por meio do provedor de TV do sistema. Essas
fileiras ficam na TV e o Edendale não envia nada pela rede para elas, mas o app
da tela inicial (o app do Google, no Google TV) pode lê-las. Desativar essa
configuração as remove.

### 5.4 Windows

O Windows guarda o índice da biblioteca, o progresso de reprodução, os
favoritos, os itens da lista para assistir, as avaliações e as configurações do
reprodutor no armazenamento local do aplicativo. Quando o OneDrive está
configurado no dispositivo, o Edendale coloca uma réplica dos seus registros de
reprodução e registros pessoais na sua própria pasta do OneDrive
`Apps/Edendale`, para que um segundo PC conectado à mesma conta fique em
sincronia. Sem o OneDrive, o aplicativo permanece somente local. As credenciais
e as legendas baixadas ficam no dispositivo e nunca entram nessa réplica. Uma
conta do OneDrive que você vincula como fonte de armazenamento (seção 6.4) é
separada dessa réplica: finalizar a sessão dessa conta não afeta a réplica, e
desativar a réplica não afeta a fonte. A Microsoft trata os dados do OneDrive
conforme os termos da sua conta Microsoft e suas configurações de privacidade.

## 6. Armazenamento que você vincula

O Edendale pode reproduzir vídeos de servidores que você mantém e de contas de
armazenamento em nuvem que você vincula. Os serviços disponíveis variam conforme
a plataforma. Em todos os casos, o Edendale se conecta diretamente do seu
dispositivo ao servidor ou provedor; nada passa por um servidor da BaBaSaMa.

O Edendale lista o conteúdo das pastas que você navega ou vincula, incluindo
suas subpastas, e lê os arquivos de vídeo que você reproduz. A listagem de uma
pasta inclui os nomes, tamanhos e datas de todos os itens que ela contém; o
Edendale mantém na biblioteca apenas pastas e arquivos de vídeo e ignora todo o
resto. O Edendale nunca cria, altera, move, compartilha nem exclui nada no seu
armazenamento.

### 6.1 Seus próprios servidores

Servidores SMB, NFS, SFTP e WebDAV e armazenamento compatível com S3 (como
Amazon S3, Backblaze B2, Cloudflare R2, Wasabi ou MinIO) são acessados no
endereço que você informar. O servidor — e, no caso de um serviço hospedado, seu
operador — recebe seu login, as listagens de pastas e leituras de arquivos que o
Edendale solicita e informações comuns de conexão, como seu endereço IP. Quem
opera esse servidor determina como essas informações são tratadas.

### 6.2 Login em um provedor de armazenamento em nuvem

O Google Drive, o Microsoft OneDrive e o Dropbox usam a própria página de login
do provedor, aberta no navegador do sistema ou na janela de login segura do seu
sistema operacional (OAuth 2.0 com PKCE). O Edendale nunca vê sua senha. Depois
que você aprova as permissões solicitadas, o provedor retorna tokens ao Edendale
no seu dispositivo, e o Edendale pergunta ao provedor a qual conta eles
pertencem para poder identificar a conta em **Ajustes → Contas**.

Em uma TV, você pode, em vez disso, aprovar um login da Microsoft digitando um
código em outro dispositivo ou, na Apple TV, aprovar a conta pelo seu iPhone ou
iPad, conforme descrito na seção 5.2.

Você pode ver e remover contas vinculadas em **Ajustes → Contas**. Remover uma
fonte não finaliza a sessão da conta dela, portanto as outras fontes que usam
essa conta continuam funcionando.

### 6.3 Google Drive e dados de usuário do Google

No momento, o Google Drive está disponível no Edendale nas plataformas Apple. Se
ele ficar disponível em outra plataforma, solicitará o mesmo acesso e tratará os
dados de usuário do Google conforme descrito nesta seção.

**Permissões que o Edendale solicita**

| Permissão (escopo) | Por que o Edendale a solicita |
|---|---|
| `openid` e `email` | Para identificar a Conta do Google com que você fez login e mostrar o endereço de e-mail dela em Ajustes → Contas |
| `https://www.googleapis.com/auth/drive.readonly` ("Ver e baixar todos os seus arquivos do Google Drive") | Para mostrar suas pastas e permitir que você escolha uma, adicionar à sua biblioteca os vídeos das pastas que você vincular e reproduzir esses vídeos |

O Edendale não solicita permissão para criar, editar, mover, compartilhar ou
excluir arquivos do Drive, e não é capaz de fazer isso.

**Dados de usuário do Google que o Edendale acessa**

- **Informações da conta:** o identificador exclusivo da sua Conta do Google e
  seu endereço de e-mail.
- **Metadados de arquivos e pastas**, do Meu Drive, de Compartilhados comigo e
  dos seus drives compartilhados, limitados às pastas que você abre no Edendale
  e às pastas que você vincula (com suas subpastas): o ID, o nome, o tipo (tipo
  MIME), o tamanho, a data e hora da última modificação de cada item e a duração
  do vídeo informada pelo Google Drive; no caso de um atalho, o ID e o tipo do
  item para o qual ele aponta; e os nomes e IDs dos seus drives compartilhados.
- **Conteúdo dos arquivos:** o conteúdo dos arquivos de vídeo que você
  reproduz, lido em partes enquanto você assiste.

O Edendale solicita apenas esses campos. Ele não lê descrições de arquivos,
comentários, configurações de compartilhamento, proprietários nem histórico de
revisões. Ele ignora arquivos do Google Docs, Sheets e Slides e de outros
formatos de arquivo do Google, e não abre nenhum arquivo além de um vídeo que
você reproduz.

**Como o Edendale usa os dados de usuário do Google**

O Edendale usa os dados de usuário do Google apenas para fornecer os recursos do
Google Drive que você usa no Edendale:

- mostrar suas pastas do Drive para que você escolha uma;
- adicionar à sua biblioteca os vídeos das pastas vinculadas e atualizá-la
  quando você faz uma nova verificação, o que inclui classificar os nomes dos
  arquivos no seu dispositivo para reconhecer o título, o ano, a temporada e o
  episódio;
- transmitir um vídeo quando você o reproduz; e
- identificar a conta vinculada e manter a sessão dela iniciada.

O Edendale não usa os dados de usuário do Google para publicidade, não os vende,
não os usa para criar um perfil seu e não os usa para desenvolver, melhorar ou
treinar modelos generalizados de inteligência artificial ou de aprendizado de
máquina. A BaBaSaMa nunca recebe seus dados de usuário do Google, portanto
nenhuma pessoa da BaBaSaMa pode lê-los.

**Como os dados de usuário do Google são armazenados e protegidos**

- O token de atualização, o identificador da sua Conta do Google, seu endereço
  de e-mail e as permissões que você concedeu são armazenados no armazenamento
  protegido de credenciais da plataforma (seção 4.3). Nas plataformas Apple,
  eles podem sincronizar com seus próprios dispositivos Apple pelo Chaveiro do
  iCloud, que a Apple protege com criptografia de ponta a ponta. Os tokens de
  acesso expiram em até uma hora e ficam apenas na memória.
- Os metadados dos arquivos de vídeo das pastas vinculadas (ID, nome, tamanho,
  data e duração), junto com os títulos reconhecidos a partir dos nomes deles,
  ficam na biblioteca local do Edendale no dispositivo. Eles não são
  sincronizados pelo iCloud. O backup do próprio dispositivo, como o Backup do
  iCloud ou um backup no computador, pode incluí-los conforme suas configurações
  de backup.
- O conteúdo dos vídeos fica apenas em um pequeno buffer na memória enquanto
  você assiste. Ele nunca é gravado no armazenamento nem enviado.
- Todas as solicitações ao Google usam uma conexão HTTPS criptografada.

**Como os dados de usuário do Google são compartilhados**

O Edendale não transfere dados de usuário do Google para a BaBaSaMa. Ele
compartilha dados de usuário do Google apenas das formas a seguir, sempre a
partir do seu dispositivo e para fornecer um recurso que você usa:

- O **TMDB** recebe o título, o ano, a temporada e o número do episódio
  reconhecidos a partir do nome do arquivo de um vídeo, para que sua biblioteca
  possa mostrar os detalhes do filme ou da série correspondente. O TMDB não
  recebe o nome do arquivo, o ID do arquivo, seu conteúdo nem os dados da sua
  Conta do Google.
- O **TheIntroDB**, somente se você ativar os botões para pular, recebe o
  identificador TMDB do título correspondente, os números da temporada e do
  episódio e a duração do vídeo (seção 9).
- O **Wyzie Subs**, somente quando você busca legendas, recebe o identificador
  TMDB do título correspondente e os números da temporada e do episódio
  (seção 8).
- A **Apple** armazena e sincroniza a credencial da sua conta do Google, com
  criptografia de ponta a ponta, se você usar o Chaveiro do iCloud.
- As informações podem ser divulgadas quando exigido pela legislação aplicável
  ou por processo legal válido.

**Retenção e exclusão**

- Remova uma fonte do Google Drive no Edendale para remover os vídeos dela da
  biblioteca nesse dispositivo.
- Finalize a sessão em **Ajustes → Contas** para excluir a conta do Google e
  seus tokens do dispositivo e dos seus outros dispositivos Apple que a
  sincronizam. Escolha **Finalizar Sessão e Revogar Acesso** para também pedir
  ao Google que encerre o acesso do Edendale, o que encerra também o acesso de
  uma Apple TV que tenha recebido a conta do seu iPhone ou iPad.
- Você pode remover o acesso do Edendale a qualquer momento na página
  [Conexões de terceiros](https://myaccount.google.com/connections) da sua Conta
  do Google. Depois disso, o Edendale não consegue mais ler seu Drive.
- Desinstalar o Edendale exclui a biblioteca local dele no dispositivo. Nas
  plataformas Apple, um item do Chaveiro pode permanecer após a desinstalação;
  por isso, finalize a sessão no Edendale antes ou remova o acesso do Edendale
  no Google.

**Uso Limitado**

O uso pelo Edendale das informações recebidas das APIs do Google, e a
transferência delas para qualquer outro app, obedecerão à
[Política de Dados do Usuário dos Serviços de API do Google](https://developers.google.com/terms/api-services-user-data-policy),
incluindo os requisitos de Uso Limitado.

O Google trata os dados da sua conta e do Drive conforme a
[Política de Privacidade do Google](https://policies.google.com/privacy). Abrir
um trailer do YouTube (seção 10) não usa uma conta do Google que você vinculou
para o Google Drive.

### 6.4 Microsoft OneDrive

O Edendale solicita estas permissões do Microsoft Graph:

| Permissão | Por que o Edendale a solicita |
|---|---|
| `User.Read` | Para identificar a conta Microsoft com que você fez login e mostrá-la em Ajustes → Contas |
| `Files.Read` | Para mostrar suas pastas e permitir que você escolha uma, adicionar à sua biblioteca os vídeos das pastas que você vincular e reproduzir esses vídeos |
| `offline_access` | Para manter a sessão iniciada sem pedir que você faça login de novo a cada hora |

O Edendale acessa:

- **Informações da conta:** o ID, o nome de exibição e o endereço de e-mail ou
  nome principal de usuário da sua conta Microsoft, e o ID do seu OneDrive.
- **Metadados de arquivos e pastas** das pastas que você abre ou vincula: o ID,
  o nome, o tamanho, se é arquivo ou pasta, a data e hora da última modificação
  de cada item e a duração do vídeo informada pelo OneDrive.
- **Conteúdo dos arquivos:** os arquivos de vídeo que você reproduz,
  transmitidos por links de download de curta duração emitidos pelo OneDrive.

O Edendale funciona com contas Microsoft pessoais e com contas corporativas ou
de estudante. No caso de uma conta corporativa ou de estudante, sua organização
pode ver que você fez login no Edendale e pode gerenciar ou registrar esse
acesso conforme suas próprias políticas.

Finalizar a sessão em **Ajustes → Contas** exclui a conta e seus tokens do
dispositivo. A Microsoft não permite que um app revogue o próprio acesso; para
encerrá-lo na Microsoft, remova o Edendale da página de
[permissões de aplicativos](https://account.live.com/consent/Manage) da sua
conta pessoal ou, no caso de uma conta corporativa ou de estudante, pelo portal
My Apps da sua organização ou pelo administrador. A Microsoft trata essas
informações conforme a
[Política de Privacidade da Microsoft](https://privacy.microsoft.com/privacystatement).

### 6.5 Dropbox

O Edendale solicita estas permissões do Dropbox:

| Permissão | Por que o Edendale a solicita |
|---|---|
| `account_info.read` | Para identificar a conta do Dropbox com que você fez login e mostrá-la em Ajustes → Contas |
| `files.metadata.read` | Para mostrar suas pastas e permitir que você escolha uma, e adicionar à sua biblioteca os vídeos das pastas que você vincular |
| `files.content.read` | Para reproduzir esses vídeos |

O Edendale acessa:

- **Informações da conta:** o ID da sua conta do Dropbox, o nome de exibição e
  o endereço de e-mail.
- **Metadados de arquivos e pastas** das pastas que você abre e de tudo o que
  está dentro de uma pasta que você vincula (o Dropbox lista de uma só vez toda
  a árvore de uma pasta vinculada): o ID, o nome, o caminho, o tamanho e a data
  de modificação de cada item.
- **Conteúdo dos arquivos:** os arquivos de vídeo que você reproduz,
  transmitidos por links temporários que expiram após quatro horas.

Finalizar a sessão em **Ajustes → Contas** exclui a conta e seus tokens do
dispositivo e pede ao Dropbox que revogue o acesso do Edendale. Você também pode
remover o Edendale dos
[apps conectados](https://www.dropbox.com/account/connected_apps) do seu
Dropbox. O Dropbox trata essas informações conforme sua
[Política de Privacidade](https://www.dropbox.com/privacy).

## 7. Solicitações ao TMDB e sincronização opcional de conta

O Edendale usa o TMDB para buscas no catálogo, imagens, sinopses, elenco,
avaliações, referências de trailers e enriquecimento da biblioteca. Quando esses
recursos são usados, o texto da busca e as informações de título deduzidas são
enviados ao TMDB. Isso também vale para arquivos de servidores e de
armazenamento em nuvem: o TMDB recebe as informações de título reconhecidas a
partir de um nome de arquivo, nunca o nome do arquivo, sua localização ou sua
conta de armazenamento. As solicitações vão diretamente do seu dispositivo ao
TMDB; não passam por nenhum servidor da BaBaSaMa. O TMDB pode receber
informações comuns de conexão, como um endereço IP e detalhes do dispositivo ou
da solicitação.

Se você conectar sua conta do TMDB, o Edendale pode ler e atualizar seus
favoritos, sua lista para assistir e suas avaliações no TMDB conforme você
determinar. Sua posição de reprodução e seu histórico não são enviados ao TMDB.

O TMDB trata as informações conforme sua
[Política de Privacidade](https://www.themoviedb.org/privacy-policy) e seus
[Termos de API](https://www.themoviedb.org/api-terms-of-use).

## 8. Busca de legendas

O Edendale pode buscar legendas pelo **Wyzie Subs** (`sub.wyzie.io`, operado
pela Wyzie). A solicitação só é feita se você abrir o painel de legendas durante
a reprodução e iniciar uma busca; nada é enviado apenas porque um vídeo está
sendo reproduzido.

Ao iniciar uma busca, o Edendale envia o identificador TMDB do título, os
números de temporada e episódio no caso de um episódio, o idioma de legenda
escolhido, os filtros de formato e de deficiência auditiva que você selecionou e
uma chave de API — a incluída na sua versão ou a que você inseriu nos ajustes.
Seu nome de arquivo, seu caminho, os dados de vídeo e sua biblioteca não são
enviados. A Wyzie pode receber informações comuns de conexão, como um endereço
IP.

Se você escolher um resultado, o Edendale baixa esse arquivo de legenda da Wyzie
ou do local indicado e o guarda no seu dispositivo, para que ele possa ser
oferecido novamente sem um novo download quando o mesmo vídeo for reproduzido.
O Edendale registra no dispositivo a qual vídeo a legenda pertence — o título
correspondente e o nome do arquivo do vídeo. Nas plataformas Apple e no Windows,
uma legenda baixada que não for usada por cerca de um mês é excluída
automaticamente; o Windows permite desativar isso em Ajustes → Legendas.

A Wyzie trata as informações conforme seus próprios termos e práticas de
privacidade, fora do controle da BaBaSaMa. Você pode evitar totalmente qualquer
contato com a Wyzie não iniciando nenhuma busca de legendas.

## 9. Botões para pular

O Edendale pode exibir os botões **Pular Abertura**, **Pular resumo** e
**Pular créditos** usando marcações de tempo da comunidade fornecidas pelo
**TheIntroDB** (`api.theintrodb.org`). Os botões para pular vêm desativados por
padrão; você pode ativá-los nos ajustes de reprodução do Edendale ou no painel
de ajustes do reprodutor. A reprodução nunca pula um trecho a menos que você
pressione o botão.

Quando os botões para pular estão ativados e você reproduz um título que o
Edendale identificou no TMDB, o Edendale envia ao TheIntroDB o identificador
TMDB do título — no caso de um episódio, o identificador da série com os números
da temporada e do episódio — e a duração do vídeo, para que ele possa retornar
marcações de tempo adequadas à sua cópia. Nenhuma conta, chave de API, nome de
arquivo, caminho de arquivo, dado de vídeo ou biblioteca é enviado. O TheIntroDB
recebe informações comuns de conexão, como seu endereço IP. Arquivos que o
Edendale não identificou nunca são consultados.

As marcações de tempo ficam na memória apenas enquanto o vídeo é reproduzido.
Elas não são salvas na sua biblioteca, no progresso de reprodução nem em nenhum
armazenamento sincronizado. O TheIntroDB trata as informações conforme sua
[Política de Privacidade](https://theintrodb.org/docs/privacy) e seus
[Termos](https://theintrodb.org/docs/terms).

## 10. Reprodução de trailers

O Edendale não contata o YouTube apenas porque há um trailer disponível. Nenhum
trailer é reproduzido antes da sua ação.

Quando você escolhe expressamente assistir a um trailer, as versões para Apple e
Android abrem uma incorporação do YouTube com privacidade aprimorada
(`youtube-nocookie.com`), e o Windows entrega o trailer ao navegador do sistema,
de modo que o próprio aplicativo não faz nenhuma chamada ao YouTube. O Google e
o YouTube podem então tratar informações de conexão, dispositivo, origem,
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
fornecer à BaBaSaMa relatórios agregados sobre o aplicativo. Esses dados vêm da
plataforma, não de algo que o Edendale envie, e você os controla pela própria
plataforma:

- **Apple.** O App Store Connect pode fornecer análises agregadas e relatórios
  de falhas para versões da App Store. A Apple só inclui os dados do seu
  dispositivo se você tiver ativado **Compartilhar com Desenvolvedores** em
  Ajustes → Privacidade e Segurança → Análise e Melhorias. Desativar interrompe
  isso.
- **Android.** Onde o Edendale é distribuído pelo Google Play, o Play Console
  pode fornecer relatórios de falhas e de ANR ("o aplicativo não responde") e
  métricas de qualidade agregadas. Você controla isso em Configurações → Google
  → Uso e diagnóstico e pela opção oferecida ao relatar uma falha.
- **Windows.** Onde o Edendale é distribuído pela Microsoft Store, o Partner
  Center pode fornecer relatórios agregados de integridade e uso. Os dados de
  diagnóstico do Windows são controlados em Configurações → Privacidade e
  segurança → Diagnóstico e comentários.
- **Downloads diretos.** Onde o Edendale é distribuído como download direto pelo
  GitHub, o GitHub recebe a solicitação de download e informa à BaBaSaMa apenas
  contagens agregadas.

Esses relatórios são agregados ou de diagnóstico. Eles não dizem à BaBaSaMa o
que você assistiu, o que há na sua biblioteca ou no seu armazenamento, ou quem
você é.

## 12. Como as informações são usadas

| Finalidade | Informações | Base legal usual quando exigida |
|---|---|---|
| Indexar e reproduzir as mídias que você seleciona | Mídias e informações da biblioteca | Execução do Serviço que você solicita |
| Listar, indexar e reproduzir arquivos de servidores e de armazenamento em nuvem que você vincula | Listagens de pastas, metadados e conteúdo de arquivos dessa fonte | Execução do Serviço que você solicita |
| Fazer login em uma conta de armazenamento vinculada e identificá-la | Identificador da conta, endereço de e-mail, nome de exibição e tokens | Sua solicitação ou consentimento |
| Obter metadados e resultados de busca do TMDB | Texto da busca e informações de título deduzidas | Execução do Serviço; legítimo interesse |
| Encontrar e baixar uma legenda que você pediu | Identificador TMDB, temporada e episódio, idioma e filtros | Sua solicitação |
| Exibir os botões para pular que você ativou | Identificador TMDB, temporada e episódio, duração do vídeo | Sua solicitação ou consentimento |
| Salvar progresso, preferências e avaliações | Registros pessoais | Execução do Serviço |
| Sincronizar registros pela sua conta de plataforma | Registros de reprodução e registros pessoais | Sua solicitação ou consentimento; execução do Serviço |
| Conectar a uma conta opcional do TMDB ou a um servidor | Token de conta ou credenciais do servidor | Sua solicitação ou consentimento |
| Responder a pedidos de suporte | Dados de contato e conteúdo das mensagens | Legítimo interesse; providências solicitadas por você |
| Manter e melhorar os aplicativos | Relatórios agregados de plataforma ou loja | Legítimo interesse em qualidade e estabilidade |

Quando um tratamento se basear em consentimento, você pode retirá-lo finalizando
a sessão ou desconectando a conta correspondente, removendo a fonte, desativando
o recurso ou alterando as permissões da plataforma.

## 13. Compartilhamento e prestadores de serviço

A BaBaSaMa não vende suas informações. Como a BaBaSaMa não opera servidor para o
Edendale, as informações são divulgadas apenas na medida necessária:

- ao **TMDB** quando você busca, enriquece um título, carrega metadados ou usa
  uma conta opcional do TMDB conectada;
- ao **Google**, à **Microsoft** ou ao **Dropbox** quando você vincula e usa uma
  conta do Google Drive, do OneDrive ou do Dropbox (seção 6);
- ao servidor que você escolhe quando vincula uma fonte SMB, NFS, SFTP, WebDAV
  ou compatível com S3;
- à **Wyzie** quando você inicia uma busca de legendas;
- ao **TheIntroDB** enquanto os botões para pular estiverem ativados;
- à **Apple**, ao **Google** ou à **Microsoft** quando você ativa ou usa seus
  serviços de armazenamento, backup, credenciais ou sincronização, ou quando
  eles fornecem os relatórios agregados descritos na seção 11;
- ao **YouTube/Google** depois que você abre expressamente um trailer;
- ao **GitHub**, que entrega o site e eventuais downloads diretos; e
- quando exigido pela legislação aplicável ou por processo legal válido.

Cada uma dessas organizações trata as informações como controladora
independente, sob seus próprios termos e política de privacidade. Nenhuma atua
como operadora sob instruções da BaBaSaMa, e a BaBaSaMa não recebe cópia do que
elas coletam além dos relatórios agregados descritos na seção 11.

## 14. Retenção e exclusão

- **Site:** não há nada a excluir. O site não usa cookies nem armazenamento no
  navegador. Os dados de requisição que chegam ao GitHub são retidos conforme as
  políticas do GitHub e não ficam disponíveis à BaBaSaMa.
- **Armazenamento local dos apps:** remover uma fonte ou um registro afeta o
  índice da biblioteca local; não remove necessariamente registros de reprodução
  ou de conta. Limpar os dados do aplicativo pode remover o contêiner local
  conforme os controles daquela plataforma. O comportamento de desinstalação,
  backup e recuperação varia por plataforma e não remove necessariamente cópias
  na nuvem ou em backup.
- **Servidores e contas de armazenamento em nuvem vinculados:** remover uma
  fonte remove seus arquivos da biblioteca, mas mantém o login ou a conta, para
  que outras fontes possam usá-los. Finalize a sessão ou esqueça o login em
  **Ajustes → Contas** para excluí-lo. Finalizar a sessão não exclui nada no seu
  armazenamento; para encerrar o acesso do Edendale em um provedor de nuvem, use
  os controles do provedor descritos na seção 6.
- **Apple:** registros privados do CloudKit e itens sincronizados do Chaveiro do
  iCloud podem permanecer após a desinstalação. Gerencie-os pelos controles
  disponíveis do iCloud, do Chaveiro, do app ou do dispositivo. O Edendale não
  oferece hoje um único controle multiplataforma para apagar tudo.
- **Android:** uma cópia de backup da plataforma ou de transferência de
  dispositivo pode permanecer conforme os controles e prazos do Google, do
  fabricante do dispositivo ou do seu provedor de backup. As fileiras Watch Next
  na tela inicial do Android TV são removidas quando você desativa a
  configuração.
- **Windows:** uma réplica na sua pasta do OneDrive `Apps/Edendale` permanece até
  que você a exclua pelo OneDrive e por eventuais recursos de lixeira ou
  recuperação.
- **As legendas baixadas** ficam no seu dispositivo até você removê-las ou, nas
  plataformas Apple e no Windows, até ficarem cerca de um mês sem uso. A Wyzie
  não mantém conta em seu nome; qualquer registro de solicitação que ela guarde
  é regido pela Wyzie.
- **As marcações de tempo dos botões para pular** são descartadas quando a
  reprodução termina. Qualquer registro de solicitação que o TheIntroDB guarde é
  regido pelo TheIntroDB.
- Uma conta do TMDB conectada retém informações conforme as configurações e
  políticas do TMDB. Desconectar o Edendale não exclui automaticamente as
  informações já armazenadas na sua conta do TMDB; gerencie esses registros pelo
  TMDB.
- A correspondência de suporte é mantida apenas pelo tempo razoavelmente
  necessário para responder, manter um histórico de atendimento ou cumprir
  obrigações legais.

Como a BaBaSaMa em geral não consegue acessar informações armazenadas apenas no
seu dispositivo ou em uma conta privada de plataforma, use os controles
específicos de cada plataforma indicados acima. Um pedido de privacidade à
BaBaSaMa não pode apagar diretamente informações às quais a BaBaSaMa não tem
acesso.

## 15. Transferências internacionais

GitHub, TMDB, Wyzie, TheIntroDB, Apple, Google, Microsoft e Dropbox podem tratar
informações em países diferentes do seu. Suas políticas de privacidade
descrevem as salvaguardas que aplicam a transferências internacionais. A
BaBaSaMa não transfere suas informações, porque não as recebe.

## 16. Segurança

O Edendale usa conexões criptografadas para o TMDB, a Wyzie, o TheIntroDB e
todos os provedores de armazenamento em nuvem, e guarda as credenciais no
armazenamento protegido da plataforma. O login na nuvem usa OAuth 2.0 com PKCE
na própria página do provedor, de modo que o Edendale nunca lida com sua senha
da nuvem, e os tokens de acesso ficam na memória. O Edendale fixa a chave de
host de cada servidor SFTP e pergunta a você antes de confiar em uma chave
alterada.

Uma conexão com seu próprio servidor só é tão privada quanto o protocolo e a
configuração dele permitem. As conexões SFTP e HTTPS são criptografadas; NFS,
WebDAV via `http://` e algumas configurações de SMB não são, portanto use-os
apenas em uma rede de sua confiança.

O Serviço mantém deliberadamente os dados de vídeo e os registros pessoais fora
de qualquer armazenamento operado pelo desenvolvedor — que não existe. Nenhuma
medida de segurança garante proteção absoluta, por isso proteja seu dispositivo,
suas contas de plataforma, suas contas de armazenamento em nuvem, seus
servidores e seus backups.

## 17. Privacidade de crianças

O Edendale é um utilitário de mídia para o público geral e não é dirigido a
crianças menores de 13 anos. A BaBaSaMa não coleta conscientemente informações
pessoais de crianças pelo Edendale. Um pai, mãe ou responsável que acredite que
uma criança enviou informações pessoais à BaBaSaMa pode nos contatar para
solicitar sua exclusão.

## 18. Seus direitos

Dependendo de onde você mora, você pode ter direito à informação e a solicitar
acesso, correção, exclusão, restrição, portabilidade ou oposição, além de
retirar o consentimento ou apresentar reclamação a uma autoridade de proteção de
dados.

Quase todas as informações do Edendale estão sob seu controle direto, porque
permanecem no seu dispositivo, na sua conta de plataforma ou no provedor de
armazenamento que você escolheu. Você pode encerrar o acesso do Edendale a uma
conta de armazenamento em nuvem a qualquer momento usando os controles descritos
na seção 6. Para as informações em poder da BaBaSaMa, como uma mensagem de
suporte, escreva para **long@babasama.com**. Podemos precisar de dados
suficientes para verificar e responder ao seu pedido.

## 19. Alterações desta política

Podemos atualizar esta política quando os recursos, plataformas, fornecedores ou
obrigações legais do Edendale mudarem. Alteraremos a data de **Última
atualização** e daremos aviso adicional quando apropriado. Um tratamento
substancialmente diferente não será aplicado retroativamente quando for exigido
consentimento ou outra base legal.

## 20. Contato

Dúvidas, pedidos de privacidade ou reclamações podem ser enviados para:

- **BaBaSaMa**
- **long@babasama.com**
