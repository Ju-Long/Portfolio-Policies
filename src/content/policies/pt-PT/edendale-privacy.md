---
title: "Política de Privacidade"
app: "Edendale"
lastUpdated: "2 de agosto de 2026"
lastUpdatedLabel: "Última atualização"
contentLanguage: "pt-PT"
draft: true
---

> **Tradução do rascunho em inglês.** Antes da publicação, confirme a razão
> social e o endereço do operador e submeta este documento a revisão jurídica.
> Este modelo não substitui aconselhamento jurídico. Em caso de divergência
> entre as versões, prevalece a versão em inglês.

## 1. Introdução e escopo

Esta Política de Privacidade explica como o **Edendale** trata as informações
quando você usa uma aplicação oficial do Edendale ou o site do Edendale (em
conjunto, o "**Serviço**").

O Edendale é um reprodutor de vídeo local e um registo pessoal do que você
assiste. Ele permite reproduzir as mídias que você escolher, montar uma
biblioteca privada, enriquecer títulos com informações do The Movie Database
("**TMDB**"), buscar legendas e manter seu histórico pessoal. O Edendale não
fornece, aloja nem envia filmes ou episódios de televisão para você.

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
- **[Antes da publicação: incluir a razão social e o endereço postal do operador
  se exigido nos países em que o Edendale é oferecido.]**

## 3. Resumo: primeiro o local

O Edendale foi projetado para minimizar a coleta de dados:

- Você não precisa de uma conta do Edendale.
- A BaBaSaMa não opera servidor, banco de dados ou proxy para o Edendale. Não há
  para onde enviar a nós os dados da sua biblioteca, das suas reproduções ou das
  suas contas.
- Seus ficheiros de vídeo e de legenda não são enviados à BaBaSaMa nem a
  terceiros.
- O Edendale não contém publicidade, análise de marketing, relatórios de falhas
  nem rastreamento comportamental em nenhuma plataforma. O YouTube pode exibir
  publicidade depois que você escolher abrir um trailer.
- A BaBaSaMa não vende nem aluga informações pessoais.
- O índice da biblioteca e seus registos pessoais ficam no seu dispositivo ou
  no armazenamento vinculado à sua própria conta de plataforma, conforme
  descrito abaixo.
- O acesso à rede se limita aos recursos que você usa: metadados do TMDB e
  sincronização opcional de conta, busca de legendas iniciada por você, pastas
  de rede que você seleciona, armazenamento ou sincronização da plataforma e um
  trailer aberto por ação explícita sua.

Uma ligação opcional com o TMDB é uma conta no TMDB, não uma conta do Edendale.

## 4. Informações tratadas pelo Edendale

### 4.1 Mídias locais e informações da biblioteca

Quando você escolhe um ficheiro, uma pasta ou uma partilha de rede, o
Edendale pode tratar:

- nomes de ficheiros e pastas;
- caminhos relativos, identificadores de ficheiro da plataforma ou marcadores com
  escopo de segurança;
- tipo, tamanho e data de modificação do ficheiro;
- o título, o ano de lançamento, o nome da série, o número da temporada e o
  número do episódio deduzidos do nome do ficheiro;
- o endereço de um servidor e partilha de rede que você selecionar; e
- identificadores do TMDB, links de imagens, sinopses, elenco, duração e outros
  metadados usados para enriquecer sua biblioteca local.

A classificação dos nomes de ficheiro acontece localmente, antes de qualquer
solicitação de metadados. Em seguida, o Edendale pode enviar ao TMDB um título
de filme ou série, um ano, um número de temporada ou de episódio assim deduzidos
para encontrar os metadados correspondentes.

Os dados dos seus vídeos e legendas permanecem no local que você escolheu e são
lidos para reprodução. Não são enviados à BaBaSaMa nem a terceiros. Se você
reproduzir a partir de uma partilha de rede, seu dispositivo se comunica
com essa partilha.

### 4.2 Registos de reprodução e registos pessoais

Dependendo do recurso e da plataforma, o Edendale pode armazenar:

- posição de reprodução, duração assistida, status de conclusão e data da última
  reprodução;
- favoritos e itens da lista para assistir;
- sua avaliação pessoal;
- preferências do reprodutor e da interface, incluindo o idioma das legendas e o
  filtro para pessoas com deficiência auditiva; e
- um instantâneo de exibição limitado, como um título ou uma referência de
  cartaz, usado em widgets da ecrã principal e nas fileiras de "continuar
  assistindo".

Esses registos são para seu uso pessoal.

### 4.3 Credenciais e informações de conta

Se você associar uma conta opcional do TMDB, o Edendale recebe um token de
acesso e um identificador de conta do TMDB para sincronizar favoritos, itens da
lista para assistir e avaliações compatíveis. O Edendale guarda essa credencial
no armazenamento protegido da plataforma: o Chaveiro nas plataformas Apple, um
armazenamento encriptado apoiado no Keystore do Android no Android e a DPAPI
no Windows. Nas plataformas Apple, uma credencial pode sincronizar pelo Chaveiro
do iCloud se você tiver ativado essa sincronização.

Se você associar uma partilha de rede protegida por palavra-passe, o Edendale
guarda o endereço da partilha e as credenciais nesse mesmo armazenamento
protegido. Essas credenciais servem apenas para o ligar à partilha escolhida e
não são enviadas à BaBaSaMa nem a terceiros.

Se você inserir sua própria chave de API do serviço de legendas, ela é guardada
nesse mesmo armazenamento protegido e enviada somente ao serviço de legendas
descrito na seção 7.

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

O índice da biblioteca local, os caminhos de ficheiro e os marcadores com escopo
de segurança permanecem em um armazenamento local do dispositivo e estão
explicitamente excluídos do espelhamento no CloudKit.

O progresso de reprodução e as escolhas por título — favoritos, participação na
lista para assistir e avaliações — ficam no contêiner privado do iCloud do
Edendale para aparecerem nos seus dispositivos Apple. As credenciais do TMDB, de
partilha de rede e do serviço de legendas podem usar o Chaveiro do
iCloud. A Apple trata essas informações conforme sua
[Política de Privacidade](https://www.apple.com/legal/privacy/) e suas
definições do iCloud.

### 5.3 Android

O Android guarda a biblioteca e os registos pessoais do Edendale no
armazenamento local da aplicação. Dependendo das suas definições de cópia de segurança e
transferência de dispositivo, o sistema operacional pode incluir dados de
aplicação elegíveis na cópia de segurança da plataforma ou na transferência. Os
armazenamentos protegidos da sessão do TMDB, das credenciais de rede e da chave
de legendas ficam excluídos tanto da cópia de segurança na nuvem quanto da transferência de
dispositivo pelas regras de cópia de segurança do Edendale, porque as chaves que os protegem
nunca saem do dispositivo. A proteção e a retenção das cópias de segurança dependem da sua
versão do Android, do dispositivo, da conta e do fornecedor de cópias de segurança.

### 5.4 Windows

O Windows guarda o índice da biblioteca local no armazenamento local do
aplicação. O progresso de reprodução, os favoritos, os itens da lista para
assistir e as avaliações também ficam localmente e, quando o OneDrive está
configurado no dispositivo, o Edendale coloca uma réplica desses registos
pessoais na sua própria pasta do OneDrive `Apps/Edendale`, para que um segundo
PC associado à mesma conta fique em sincronia. Sem o OneDrive, a aplicação
permanece somente local. As credenciais continuam protegidas localmente e nunca
entram nessa réplica. A Microsoft trata os dados do OneDrive conforme os termos
da sua conta Microsoft e as suas definições de privacidade.

## 6. Solicitações ao TMDB e sincronização opcional de conta

O Edendale usa o TMDB para buscas no catálogo, imagens, sinopses, elenco,
avaliações, referências de trailers e enriquecimento da biblioteca local. Quando
esses recursos são usados, o texto da busca e as informações de título deduzidas
são enviados ao TMDB. As solicitações vão diretamente do seu dispositivo ao
TMDB; não passam por nenhum servidor da BaBaSaMa. O TMDB pode receber
informações comuns de ligação, como um endereço IP e detalhes do dispositivo ou
da solicitação.

Se você associar sua conta do TMDB, o Edendale pode ler e atualizar seus
favoritos, sua lista para assistir e suas avaliações no TMDB conforme você
determinar. Sua posição de reprodução e seu histórico não são enviados ao TMDB.

O TMDB trata as informações conforme sua
[Política de Privacidade](https://www.themoviedb.org/privacy-policy) e seus
[Termos de API](https://www.themoviedb.org/api-terms-of-use).

## 7. Busca de legendas

O Edendale pode buscar legendas pelo **Wyzie Subs** (`sub.wyzie.io`, operado
pela Wyzie). A solicitação só é feita se você abrir o painel de legendas durante
a reprodução e iniciar uma busca; nada é enviado apenas porque um vídeo está
sendo reproduzido.

Ao iniciar uma busca, o Edendale envia o identificador TMDB do título, os
números de temporada e episódio no caso de um episódio, o idioma de legenda
escolhido, os filtros de formato e de deficiência auditiva que você selecionou e
uma chave de API — a incluída na sua versão ou a que você inseriu nas definições.
Seu nome de ficheiro, seu caminho, os dados de vídeo e sua biblioteca não são
enviados. A Wyzie pode receber informações comuns de ligação, como um endereço
IP.

Se você escolher um resultado, o Edendale transfere esse ficheiro de legenda da Wyzie
ou do local indicado e o guarda para reprodução. A Wyzie trata as informações
conforme seus próprios termos e práticas de privacidade, fora do controlo da
BaBaSaMa. Você pode evitar totalmente qualquer contacto com a Wyzie não iniciando
nenhuma busca de legendas.

## 8. Reprodução de trailers

O Edendale não contata o YouTube apenas porque há um trailer disponível. Nenhum
trailer é reproduzido antes da sua ação.

Quando você escolhe expressamente assistir a um trailer, as versões para Apple e
Android abrem uma incorporação do YouTube com privacidade aprimorada
(`youtube-nocookie.com`), e o Windows entrega o trailer ao navegador do sistema,
de modo que o próprio aplicação não faz nenhuma chamada ao YouTube. O Google e
o YouTube podem então tratar informações de ligação, dispositivo, origem,
visualização e publicidade conforme a
[Política de Privacidade do Google](https://policies.google.com/privacy) e os
termos do YouTube. O modo de privacidade aprimorada limita parte do uso de dados
pelo YouTube; ele não torna a solicitação anônima, e um vídeo incorporado pode
exibir publicidade.

## 9. Relatórios de plataformas e lojas

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
que você assistiu, o que há na sua biblioteca ou quem você é.

## 10. Como as informações são usadas

| Finalidade | Informações | Base legal usual quando exigida |
|---|---|---|
| Indexar e reproduzir as mídias que você seleciona | Mídias locais e informações da biblioteca | Execução do Serviço que você solicita |
| Obter metadados e resultados de busca do TMDB | Texto da busca e informações de título deduzidas | Execução do Serviço; legítimo interesse |
| Encontrar e transferir uma legenda que você pediu | Identificador TMDB, temporada e episódio, idioma e filtros | Sua solicitação |
| Guardar progresso, preferências e avaliações | Registos pessoais | Execução do Serviço |
| Sincronizar registos pela sua conta de plataforma | Registos de reprodução e registos pessoais | Sua solicitação ou consentimento; execução do Serviço |
| Associar a uma conta opcional do TMDB ou a uma partilha de rede | Token de conta ou credenciais da partilha | Sua solicitação ou consentimento |
| Responder a pedidos de suporte | Dados de contacto e conteúdo das mensagens | Legítimo interesse; providências solicitadas por você |
| Manter e melhorar as aplicações | Relatórios agregados de plataforma ou loja | Legítimo interesse em qualidade e estabilidade |

Quando um tratamento se basear em consentimento, você pode retirá-lo
desassociando a conta correspondente, desativando o recurso ou alterando as
permissões da plataforma.

## 11. Partilha e prestadores de serviço

A BaBaSaMa não vende suas informações. Como a BaBaSaMa não opera servidor para o
Edendale, as informações são divulgadas apenas na medida necessária:

- ao **TMDB** quando você busca, enriquece um título, carrega metadados ou usa
  uma conta opcional do TMDB associada;
- à **Wyzie** quando você inicia uma busca de legendas;
- à **Apple**, ao **Google** ou à **Microsoft** quando você ativa ou usa seus
  serviços de armazenamento, cópia de segurança, credenciais ou sincronização, ou quando
  eles fornecem os relatórios agregados descritos na seção 9;
- ao **YouTube/Google** depois que você abre expressamente um trailer;
- ao servidor de rede que você escolhe ao associar uma partilha;
- ao **GitHub**, que entrega o site e eventuais downloads diretos; e
- quando exigido pela legislação aplicável ou por processo legal válido.

Cada uma dessas organizações trata as informações como controladora
independente, sob seus próprios termos e política de privacidade. Nenhuma atua
como operadora sob instruções da BaBaSaMa, e a BaBaSaMa não recebe cópia do que
elas coletam além dos relatórios agregados descritos na seção 9.

## 12. Retenção e eliminação

- **Site:** não há nada a eliminar. O site não usa cookies nem armazenamento no
  navegador. Os dados de pedido que chegam ao GitHub são retidos conforme as
  políticas do GitHub e não ficam disponíveis à BaBaSaMa.
- **Armazenamento local dos apps:** remover uma fonte ou um registo afeta o
  índice da biblioteca local; não remove necessariamente registos de reprodução
  ou de conta. Limpar os dados da aplicação pode remover o contêiner local
  conforme os controlos daquela plataforma. O comportamento de desinstalação,
  cópia de segurança e recuperação varia por plataforma e não remove necessariamente cópias
  na nuvem ou de segurança.
- **Apple:** registos privados do CloudKit e itens sincronizados do Chaveiro do
  iCloud podem permanecer após a desinstalação. Faça a gestão deles pelos controlos
  disponíveis do iCloud, do Chaveiro, do app ou do dispositivo. O Edendale não
  oferece hoje um único controlo multiplataforma para apagar tudo.
- **Android:** uma cópia de segurança da plataforma ou de transferência de
  dispositivo pode permanecer conforme os controlos e prazos do Google, do
  fabricante do dispositivo ou do seu fornecedor de cópias de segurança.
- **Windows:** uma réplica na sua pasta do OneDrive `Apps/Edendale` permanece até
  que a elimine pelo OneDrive e por eventuais recursos de reciclagem ou
  recuperação.
- **As legendas transferidas** ficam no seu dispositivo até você removê-las. A Wyzie
  não mantém conta em seu nome; qualquer registo de solicitação que ela guarde
  é regido pela Wyzie.
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

## 13. Transferências internacionais

GitHub, TMDB, Wyzie, Apple, Google e Microsoft podem tratar informações em
países diferentes do seu. Suas políticas de privacidade descrevem as
salvaguardas que aplicam a transferências internacionais. A BaBaSaMa não
transfere suas informações, porque não as recebe.

## 14. Segurança

O Edendale usa ligações de rede encriptadas para os serviços on-line
compatíveis, recusa tráfego sem encriptação e usa o armazenamento protegido da
plataforma para credenciais. O Serviço mantém deliberadamente os dados de vídeo
e os registos pessoais fora de qualquer armazenamento operado pelo
desenvolvedor — que não existe. Nenhuma medida de segurança garante proteção
absoluta, por isso proteja seu dispositivo, suas contas de plataforma, seus
partilhas de rede e as suas cópias de segurança.

## 15. Privacidade de crianças

O Edendale é um utilitário de mídia para o público geral e não é dirigido a
crianças menores de 13 anos. A BaBaSaMa não coleta conscientemente informações
pessoais de crianças pelo Edendale. Um pai, mãe ou responsável que acredite que
uma criança enviou informações pessoais à BaBaSaMa pode nos contatar para
solicitar a sua eliminação.

## 16. Seus direitos

Dependendo de onde você mora, você pode ter direito à informação e a solicitar
acesso, correção, eliminação, restrição, portabilidade ou oposição, além de
retirar o consentimento ou apresentar reclamação a uma autoridade de proteção de
dados.

Quase todas as informações do Edendale estão sob seu controlo direto, porque
permanecem no seu dispositivo ou na sua conta de plataforma. Para as informações
em poder da BaBaSaMa, como uma mensagem de suporte, escreva para
**long@babasama.com**. Podemos precisar de dados suficientes para verificar e
responder ao seu pedido.

## 17. Alterações desta política

Podemos atualizar esta política quando os recursos, plataformas, fornecedores ou
obrigações legais do Edendale mudarem. Alteraremos a data de **Última
atualização** e daremos aviso adicional quando apropriado. Um tratamento
substancialmente diferente não será aplicado retroativamente quando for exigido
consentimento ou outra base legal.

## 18. Contacto

Dúvidas, pedidos de privacidade ou reclamações podem ser enviados para:

- **BaBaSaMa**
- **long@babasama.com**
