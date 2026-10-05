---
title: "Informativa sulla privacy"
app: "Edendale"
lastUpdated: "5 ottobre 2026"
lastUpdatedLabel: "Ultimo aggiornamento"
contentLanguage: "it"
draft: false
---

## 1. Introduzione e ambito di applicazione

La presente informativa spiega come **Edendale** tratta le informazioni quando
utilizzi un'applicazione Edendale ufficiale o il sito web di Edendale
(complessivamente, il «**Servizio**»).

Edendale è un lettore video locale e un registro personale delle visioni. Ti
permette di riprodurre i contenuti che scegli — dal tuo dispositivo, da server
che gestisci o da account di archiviazione cloud che colleghi —, creare una
videoteca privata, arricchire i titoli con informazioni di The Movie Database
(«**TMDB**»), cercare sottotitoli, mostrare pulsanti facoltativi per saltare e
conservare i tuoi dati di visione. Edendale non fornisce, non ospita e non
carica film o episodi televisivi per tuo conto.

Il sito web di Edendale è un sito informativo. Descrive le applicazioni, rimanda
al codice sorgente del progetto e risponde ai link applicativi affinché un link
Edendale condiviso possa aprirsi in un'app installata. Non è un lettore video,
non prevede account e non conserva nulla su di te.

La presente informativa si applica alle build ufficiali e al sito ufficiale. I
fork indipendenti e le copie self-hosted sono gestiti dai rispettivi operatori e
possono trattare le informazioni in modo diverso.

## 2. Titolare del trattamento

Il soggetto responsabile del Servizio ufficiale è:

- **BaBaSaMa**
- E-mail: **long@babasama.com**

## 3. Sintesi: prima il locale

Edendale è progettato per ridurre al minimo la raccolta di dati:

- Non serve alcun account Edendale.
- BaBaSaMa non gestisce alcun server, database o proxy per Edendale. Non esiste
  alcun luogo in cui i dati della tua videoteca, delle tue visioni, dei tuoi
  file o dei tuoi account possano esserci inviati.
- I tuoi file video e di sottotitoli non vengono caricati né su BaBaSaMa né
  presso terzi.
- Quando colleghi Google Drive, Microsoft OneDrive o Dropbox, accedi
  direttamente presso quel fornitore ed Edendale chiede solo l'accesso in sola
  lettura. I tuoi file e i token di autenticazione transitano solo tra il tuo
  dispositivo e quel fornitore.
- Edendale non contiene pubblicità, analisi di marketing, segnalazione dei crash
  o tracciamento comportamentale su nessuna piattaforma. YouTube può mostrare
  pubblicità dopo che hai scelto di aprire un trailer.
- BaBaSaMa non vende né affitta informazioni personali.
- L'indice della videoteca e i tuoi dati personali restano sul tuo dispositivo o
  nello spazio di archiviazione collegato al tuo account di piattaforma, come
  descritto di seguito.
- L'accesso alla rete è limitato alle funzioni che utilizzi: metadati TMDB e
  sincronizzazione facoltativa dell'account, server e account di archiviazione
  che colleghi, ricerca di sottotitoli avviata da te, pulsanti per saltare se li
  attivi, archiviazione o sincronizzazione della piattaforma e un trailer aperto
  per tua esplicita azione.

Un collegamento facoltativo a un account TMDB, Google, Microsoft o Dropbox è un
account presso quel fornitore, non un account Edendale.

## 4. Informazioni trattate da Edendale

### 4.1 Contenuti e dati della videoteca

Quando scegli un file o una cartella, oppure colleghi un server o una cartella
di archiviazione cloud, Edendale può trattare:

- nomi di file e cartelle;
- percorsi relativi, identificatori di file della piattaforma, segnalibri con
  ambito di sicurezza o gli identificatori che un fornitore di archiviazione
  assegna a ciascun file e cartella;
- tipo, dimensione e data di modifica del file e, se il fornitore di
  archiviazione la indica, la durata di un video;
- titolo, anno di uscita, nome della serie, numero di stagione e numero di
  episodio ricavati dal nome del file;
- l'indirizzo di un server che colleghi e il fornitore, l'account e la cartella
  di una sorgente di archiviazione cloud; e
- identificatori TMDB, link alle immagini, trame, cast, durata e altri metadati
  usati per arricchire la tua videoteca locale.

L'analisi dei nomi dei file avviene localmente prima di qualsiasi richiesta di
metadati. Edendale può poi inviare a TMDB un titolo di film o serie, un anno, un
numero di stagione o di episodio così ricavati per trovare i metadati
corrispondenti. Il nome del file in sé non viene inviato.

I dati dei tuoi video e sottotitoli restano nella posizione che hai scelto e
vengono letti per la riproduzione. Quando un video proviene da un server o da un
archivio cloud, Edendale legge le parti che gli servono man mano che guardi e
mantiene in memoria un breve buffer di lettura anticipata; non salva alcuna
copia del video. I video non vengono caricati né su BaBaSaMa né presso terzi.

### 4.2 Dati di visione e registrazioni personali

A seconda della funzione e della piattaforma, Edendale può conservare:

- posizione di riproduzione, durata vista, stato di completamento e data
  dell'ultima visione;
- preferiti e voci della lista di visione;
- la tua valutazione personale;
- preferenze del lettore e dell'interfaccia, come la lingua dei sottotitoli e il
  filtro per non udenti, l'aspetto dei sottotitoli, la durata dei salti e le
  velocità a pressione prolungata, le regolazioni audio e immagine e la traccia
  audio, i sottotitoli e la velocità che hai scelto per ultimi per un titolo;
- un registro dei sottotitoli che hai scaricato e del video a cui ciascuno
  appartiene; e
- un'istantanea di visualizzazione limitata, come un titolo o un riferimento a
  una locandina, usata per i widget della schermata Home, per le righe «continua
  a guardare» e, se lo attivi, per la schermata Home di Android TV.

Queste registrazioni sono destinate al tuo uso personale.

### 4.3 Credenziali e informazioni sull'account

Edendale conserva ogni credenziale nell'archivio protetto della piattaforma: il
portachiavi sulle piattaforme Apple, un archivio cifrato basato sul Keystore di
Android su Android e DPAPI su Windows. Le credenziali non vengono mai scritte
nella tua videoteca, nei link salvati o nei log e non vengono mai inviate a
BaBaSaMa.

- **Account TMDB.** Se colleghi un account TMDB facoltativo, Edendale riceve un
  token di accesso e un identificatore dell'account TMDB per sincronizzare
  preferiti, voci della lista di visione e valutazioni supportate.
- **Server che colleghi.** Per una condivisione SMB, un server SFTP o un server
  WebDAV protetti da password, Edendale conserva l'indirizzo del server, il nome
  utente e la password. Per un archivio compatibile con S3, conserva l'ID della
  chiave di accesso e la chiave di accesso segreta. Per un server SFTP conserva
  anche l'impronta della chiave host del server, così da poterti avvisare se
  tale chiave cambia. Queste credenziali vengono inviate solo al server che hai
  collegato.
- **Account di archiviazione cloud.** Quando colleghi Google Drive, Microsoft
  OneDrive o Dropbox, Edendale conserva un token di aggiornamento,
  l'identificatore dell'account, l'indirizzo e-mail e il nome visualizzato
  restituiti dal fornitore e le autorizzazioni che hai concesso. I token di
  accesso a breve durata sono conservati solo in memoria. La sezione 6 descrive
  che cosa ciascun fornitore condivide con Edendale.
- **Chiave del servizio di sottotitoli.** Se inserisci una tua chiave API per il
  servizio di sottotitoli, viene inviata soltanto al servizio di sottotitoli
  descritto nella sezione 8.

Sulle piattaforme Apple queste credenziali possono sincronizzarsi tramite il
portachiavi iCloud se hai attivato la sincronizzazione del portachiavi, come
descritto nella sezione 5.2.

### 4.4 Messaggi di assistenza

Se contatti BaBaSaMa, riceviamo l'indirizzo che utilizzi, il tuo messaggio e
qualsiasi informazione o materiale diagnostico che decidi di allegare. Non
inviare file video, password, token di accesso o altro materiale sensibile.

## 5. Dove sono conservate le informazioni

### 5.1 Il sito web di Edendale

Il sito è un insieme di pagine statiche pubblicate tramite **GitHub Pages**, un
servizio di GitHub, Inc. (società del gruppo Microsoft). Non contiene account,
cookie, archiviazione nel browser, strumenti di analisi né script, font o
immagini di terze parti. La tua preferenza linguistica è dedotta dalle
impostazioni di lingua che il browser già trasmette e non viene registrata.

Per servire una pagina, GitHub riceve necessariamente le consuete informazioni
di richiesta, quali indirizzo IP o di rete, percorso richiesto, marca temporale,
stringa dello user agent e altre intestazioni HTTP ordinarie. GitHub tratta tali
informazioni come titolare autonomo ai sensi dell'
[informativa sulla privacy di GitHub](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement).
GitHub Pages non mette a disposizione del proprietario del sito alcun log di
accesso: BaBaSaMa non riceve, non conserva e non analizza quindi dati di
visita.

Le pagine di link applicativo del sito (`/search`, `/media`, `/library`,
`/play`) esistono affinché un link Edendale si apra in un'app installata. Ogni
identificatore contenuto in tale link è gestito dal tuo dispositivo e dall'app
installata; il sito non lo trasmette da nessuna parte.

### 5.2 Piattaforme Apple

L'indice della videoteca locale — compresi i percorsi dei file, i segnalibri con
ambito di sicurezza e i nomi e gli identificatori dei file provenienti da server
e archivi cloud collegati — resta in un archivio locale del dispositivo ed è
esplicitamente escluso dalla replica su CloudKit. Anche i sottotitoli scaricati
e il registro del video a cui ciascuno appartiene sono conservati solo sul
dispositivo.

L'avanzamento della riproduzione e le scelte per singolo titolo — preferiti,
appartenenza alla lista di visione e valutazioni — sono conservati nel container
iCloud privato di Edendale per comparire sui tuoi dispositivi Apple. Queste
registrazioni identificano i titoli tramite i rispettivi identificatori TMDB;
non contengono nomi di file, percorsi né identificatori del fornitore di
archiviazione.

Le credenziali di TMDB, dei server, degli account di archiviazione cloud e del
servizio di sottotitoli possono sincronizzarsi tramite il portachiavi iCloud,
così che un solo accesso valga per iPhone, iPad, Mac e Apple Vision Pro. Apple
TV non riceve gli elementi del portachiavi iCloud. Per collegare un account o un
server su Apple TV, puoi approvarlo da un iPhone o iPad vicino su cui è
installato Edendale e che ha eseguito l'accesso al tuo Account Apple o a quello
di un membro di In famiglia. L'account viene inviato direttamente tra i due
dispositivi tramite una connessione cifrata sulla rete locale e non passa da
BaBaSaMa. Apple tratta le informazioni di iCloud ai sensi della propria
[informativa sulla privacy](https://www.apple.com/legal/privacy/) e delle tue
impostazioni iCloud.

### 5.3 Android

Android conserva la videoteca e le registrazioni personali di Edendale
nell'archiviazione locale dell'applicazione. A seconda delle tue impostazioni di
backup e di trasferimento del dispositivo, il sistema operativo può includere i
dati applicativi idonei nel backup di piattaforma o nel trasferimento. Le regole
di backup di Edendale escludono i suoi archivi protetti — la sessione TMDB, le
credenziali di accesso ai server, le chiavi host SFTP, gli account di
archiviazione cloud e la chiave dei sottotitoli — sia dal backup su cloud sia
dal trasferimento del dispositivo, poiché le chiavi che li proteggono non
lasciano mai il dispositivo. Protezione e conservazione dei backup dipendono
dalla versione di Android, dal dispositivo, dall'account e dal fornitore di
backup.

Su Android TV e Google TV, **Continua a guardare nella schermata Home** è
disattivato per impostazione predefinita. Se lo attivi, Edendale scrive il nome,
l'immagine e la posizione di ciascun titolo in corso, oppure l'episodio
successivo di una serie, nella riga Watch Next della schermata Home tramite il
provider TV di sistema. Queste righe restano sul televisore ed Edendale non
invia nulla in rete per esse, ma l'app della schermata Home (l'app di Google, su
Google TV) può leggerle. Disattivando l'impostazione vengono rimosse.

### 5.4 Windows

Windows conserva l'indice della videoteca, l'avanzamento della riproduzione, i
preferiti, le voci della lista di visione, le valutazioni e le impostazioni del
lettore nell'archiviazione locale dell'applicazione. Quando OneDrive è
configurato sul dispositivo, Edendale colloca una replica dei tuoi dati di
visione e delle tue registrazioni personali nella tua cartella OneDrive
`Apps/Edendale`, così che un secondo PC con lo stesso accesso converga. Senza
OneDrive l'app resta solo locale. Le credenziali e i sottotitoli scaricati
restano sul dispositivo e non sono mai inclusi in quella replica. Un account
OneDrive che colleghi come sorgente di archiviazione (sezione 6.4) è distinto da
questa replica: uscire da quell'account non tocca la replica e disattivare la
replica non tocca la sorgente. Microsoft tratta i dati di OneDrive secondo le
condizioni del tuo account Microsoft e le tue impostazioni sulla privacy.

## 6. Spazi di archiviazione che colleghi

Edendale può riprodurre video da server che gestisci e da account di
archiviazione cloud che colleghi. I servizi disponibili variano a seconda della
piattaforma. In ogni caso Edendale si connette direttamente dal tuo dispositivo
al server o al fornitore; nulla transita da un server di BaBaSaMa.

Edendale elenca il contenuto delle cartelle che sfogli o colleghi, comprese le
relative sottocartelle, e legge i file video che riproduci. L'elenco di una
cartella include nome, dimensione e date di ogni elemento in essa contenuto;
Edendale conserva nella videoteca solo cartelle e file video e ignora tutto il
resto. Edendale non crea, non modifica, non sposta, non condivide e non elimina
mai nulla nel tuo spazio di archiviazione.

### 6.1 I tuoi server

SMB, NFS, SFTP, WebDAV e gli archivi compatibili con S3 (come Amazon S3,
Backblaze B2, Cloudflare R2, Wasabi o MinIO) vengono raggiunti all'indirizzo che
inserisci. Il server — e, per un servizio in hosting, il suo gestore — riceve le
tue credenziali di accesso, gli elenchi delle cartelle e le letture dei file
richiesti da Edendale e le consuete informazioni di connessione, come il tuo
indirizzo IP. Il modo in cui tali informazioni vengono trattate dipende da chi
gestisce quel server.

### 6.2 Accesso a un fornitore di archiviazione cloud

Google Drive, Microsoft OneDrive e Dropbox usano la pagina di accesso del
fornitore stesso, aperta nel browser di sistema o nella finestra di accesso
sicuro del sistema operativo (OAuth 2.0 con PKCE). Edendale non vede mai la tua
password. Dopo che hai approvato le autorizzazioni richieste, il fornitore
restituisce i token a Edendale sul tuo dispositivo ed Edendale chiede al
fornitore a quale account appartengono, così da poter etichettare l'account in
**Impostazioni → Account**.

Su un televisore puoi invece approvare un accesso Microsoft inserendo un codice
su un altro dispositivo oppure, su Apple TV, approvare l'account dal tuo iPhone
o iPad, come descritto nella sezione 5.2.

Puoi vedere e rimuovere gli account collegati in **Impostazioni → Account**. La
rimozione di una sorgente non disconnette il relativo account, quindi le altre
sorgenti che usano quell'account continuano a funzionare.

### 6.3 Google Drive e dati utente di Google

Google Drive è attualmente disponibile in Edendale sulle piattaforme Apple. Se
diventerà disponibile su un'altra piattaforma, richiederà lo stesso accesso e
tratterà i dati utente di Google come descritto in questa sezione.

**Autorizzazioni richieste da Edendale**

| Autorizzazione (ambito) | Perché Edendale la richiede |
|---|---|
| `openid` e `email` | Per identificare l'Account Google con cui hai eseguito l'accesso e mostrarne l'indirizzo e-mail in Impostazioni → Account |
| `https://www.googleapis.com/auth/drive.readonly` («Visualizzare e scaricare tutti i tuoi file di Google Drive») | Per mostrare le tue cartelle così che tu possa sceglierne una, aggiungere alla videoteca i video delle cartelle che colleghi e riprodurre tali video |

Edendale non richiede l'autorizzazione a creare, modificare, spostare,
condividere o eliminare file di Drive e non è in grado di farlo.

**Dati utente di Google a cui Edendale accede**

- **Informazioni sull'account:** l'identificatore univoco del tuo Account Google
  e il tuo indirizzo e-mail.
- **Metadati di file e cartelle**, da Il mio Drive, Condivisi con me e dai tuoi
  Drive condivisi, limitati alle cartelle che apri in Edendale e alle cartelle
  che colleghi (con le relative sottocartelle): ID, nome, tipo (tipo MIME),
  dimensione e data dell'ultima modifica di ciascun elemento e durata del video
  indicata da Google Drive; per una scorciatoia, l'ID e il tipo dell'elemento a
  cui rimanda; e i nomi e gli ID dei tuoi Drive condivisi.
- **Contenuto dei file:** il contenuto dei file video che riproduci, letto a
  porzioni man mano che guardi.

Edendale richiede solo questi campi. Non legge descrizioni dei file, commenti,
impostazioni di condivisione, proprietari né cronologia delle revisioni. Ignora
Documenti, Fogli e Presentazioni Google e gli altri formati di file Google e non
apre alcun file diverso da un video che riproduci.

**Come Edendale usa i dati utente di Google**

Edendale usa i dati utente di Google solo per fornire le funzioni di Google
Drive che utilizzi in Edendale:

- mostrare le tue cartelle di Drive così che tu possa sceglierne una;
- aggiungere alla videoteca i video delle cartelle collegate e aggiornarla
  quando ripeti la scansione, il che include la classificazione dei nomi dei
  file sul tuo dispositivo per riconoscere titolo, anno, stagione ed episodio;
- trasmettere un video in streaming quando lo riproduci; e
- etichettare l'account collegato e mantenerne attivo l'accesso.

Edendale non usa i dati utente di Google per la pubblicità, non li vende, non
li usa per creare un tuo profilo e non li usa per sviluppare, migliorare o
addestrare modelli generalizzati di intelligenza artificiale o di apprendimento
automatico. BaBaSaMa non riceve mai i tuoi dati utente di Google, quindi nessuna
persona di BaBaSaMa può leggerli.

**Come vengono conservati e protetti i dati utente di Google**

- Il token di aggiornamento, l'identificatore del tuo Account Google, il tuo
  indirizzo e-mail e le autorizzazioni che hai concesso sono conservati
  nell'archivio protetto della piattaforma (sezione 4.3). Sulle piattaforme
  Apple possono sincronizzarsi con i tuoi dispositivi Apple tramite il
  portachiavi iCloud, che Apple protegge con la crittografia end-to-end. I token
  di accesso scadono entro un'ora e sono conservati solo in memoria.
- I metadati dei file video nelle cartelle collegate (ID, nome, dimensione, data
  e durata), insieme ai titoli riconosciuti dai loro nomi, sono conservati nella
  videoteca locale del dispositivo di Edendale. Non vengono sincronizzati
  tramite iCloud. Il backup del tuo dispositivo, come il backup di iCloud o un
  backup su computer, può includerli in base alle tue impostazioni di backup.
- Il contenuto video è mantenuto solo in un breve buffer in memoria mentre
  guardi. Non viene mai salvato in un archivio né caricato.
- Ogni richiesta a Google usa una connessione HTTPS cifrata.

**Come vengono condivisi i dati utente di Google**

Edendale non trasferisce dati utente di Google a BaBaSaMa. Condivide dati utente
di Google solo nei modi seguenti, ciascuno dal tuo dispositivo per fornire una
funzione che utilizzi:

- **TMDB** riceve titolo, anno, stagione e numero di episodio riconosciuti dal
  nome del file di un video, così che la tua videoteca possa mostrare i dettagli
  del film o della serie TV corrispondenti. TMDB non riceve il nome del file,
  l'ID del file, il suo contenuto né i dati del tuo Account Google.
- **TheIntroDB**, solo se attivi i pulsanti per saltare, riceve l'identificatore
  TMDB del titolo abbinato, i numeri di stagione ed episodio e la durata del
  video (sezione 9).
- **Wyzie Subs**, solo quando cerchi sottotitoli, riceve l'identificatore TMDB
  del titolo abbinato e i numeri di stagione ed episodio (sezione 8).
- **Apple** conserva e sincronizza la credenziale del tuo Account Google, con
  crittografia end-to-end, se usi il portachiavi iCloud.
- Le informazioni possono essere comunicate ove richiesto dalla legge
  applicabile o da un valido procedimento legale.

**Conservazione e cancellazione**

- Rimuovi una sorgente Google Drive in Edendale per rimuoverne i video dalla
  videoteca su quel dispositivo.
- Esci in **Impostazioni → Account** per eliminare l'account Google e i relativi
  token dal dispositivo e dagli altri tuoi dispositivi Apple che lo
  sincronizzano. Scegli **Esci e revoca l’accesso** per chiedere anche a Google
  di porre fine all'accesso di Edendale, il che pone fine anche all'accesso di
  un'Apple TV che ha ricevuto l'account dal tuo iPhone o iPad.
- Puoi rimuovere in qualsiasi momento l'accesso di Edendale dalla pagina
  [App e servizi di terze parti](https://myaccount.google.com/connections) del
  tuo Account Google. Dopodiché Edendale non potrà più leggere il tuo Drive.
- La disinstallazione di Edendale elimina la sua videoteca locale del
  dispositivo. Sulle piattaforme Apple un elemento del portachiavi può
  permanere dopo la disinstallazione, quindi esci prima dall'account in
  Edendale o rimuovi l'accesso di Edendale presso Google.

**Uso limitato**

L'uso e il trasferimento ad altre app, da parte di Edendale, delle informazioni
ricevute dalle API di Google rispetteranno le
[Norme sui dati utente dei servizi API di Google](https://developers.google.com/terms/api-services-user-data-policy),
inclusi i requisiti di Uso limitato.

Google tratta i dati del tuo account e di Drive ai sensi delle
[norme sulla privacy di Google](https://policies.google.com/privacy).
L'apertura di un trailer di YouTube (sezione 10) non usa un Account Google che
hai collegato per Google Drive.

### 6.4 Microsoft OneDrive

Edendale richiede le seguenti autorizzazioni di Microsoft Graph:

| Autorizzazione | Perché Edendale la richiede |
|---|---|
| `User.Read` | Per identificare l'account Microsoft con cui hai eseguito l'accesso e mostrarlo in Impostazioni → Account |
| `Files.Read` | Per mostrare le tue cartelle così che tu possa sceglierne una, aggiungere alla videoteca i video delle cartelle che colleghi e riprodurre tali video |
| `offline_access` | Per mantenere l'accesso senza richiedertelo di nuovo ogni ora |

Edendale accede a:

- **Informazioni sull'account:** ID, nome visualizzato e indirizzo e-mail o nome
  dell'entità utente (UPN) del tuo account Microsoft, e l'ID del tuo OneDrive.
- **Metadati di file e cartelle** per le cartelle che apri o colleghi: ID, nome
  e dimensione di ciascun elemento, se si tratta di un file o di una cartella,
  data dell'ultima modifica e durata del video indicata da OneDrive.
- **Contenuto dei file:** i file video che riproduci, trasmessi in streaming
  tramite link di download a breve durata emessi da OneDrive.

Edendale funziona con account Microsoft personali e con account aziendali o
dell'istituto di istruzione. Per un account aziendale o dell'istituto di
istruzione, la tua organizzazione può vedere che hai eseguito l'accesso a
Edendale e può gestire o registrare tale accesso secondo le proprie politiche.

L'uscita in **Impostazioni → Account** elimina l'account e i relativi token dal
dispositivo. Microsoft non consente a un'app di revocare il proprio accesso,
quindi per porvi fine presso Microsoft rimuovi Edendale dalla pagina
[autorizzazioni delle app](https://account.live.com/consent/Manage) del tuo
account personale oppure, per un account aziendale o dell'istituto di
istruzione, tramite il portale App personali della tua organizzazione o
l'amministratore. Microsoft tratta queste informazioni ai sensi dell'
[informativa sulla privacy di Microsoft](https://privacy.microsoft.com/privacystatement).

### 6.5 Dropbox

Edendale richiede le seguenti autorizzazioni di Dropbox:

| Autorizzazione | Perché Edendale la richiede |
|---|---|
| `account_info.read` | Per identificare l'account Dropbox con cui hai eseguito l'accesso e mostrarlo in Impostazioni → Account |
| `files.metadata.read` | Per mostrare le tue cartelle così che tu possa sceglierne una e aggiungere alla videoteca i video delle cartelle che colleghi |
| `files.content.read` | Per riprodurre tali video |

Edendale accede a:

- **Informazioni sull'account:** ID, nome visualizzato e indirizzo e-mail del
  tuo account Dropbox.
- **Metadati di file e cartelle** per le cartelle che apri e per tutto il
  contenuto di una cartella che colleghi (Dropbox elenca in una sola volta
  l'intera struttura di una cartella collegata): ID, nome, percorso, dimensione
  e data di modifica di ciascun elemento.
- **Contenuto dei file:** i file video che riproduci, trasmessi in streaming
  tramite link temporanei che scadono dopo quattro ore.

L'uscita in **Impostazioni → Account** elimina l'account e i relativi token dal
dispositivo e chiede a Dropbox di revocare l'accesso di Edendale. Puoi anche
rimuovere Edendale dalle
[app collegate](https://www.dropbox.com/account/connected_apps) di Dropbox.
Dropbox tratta queste informazioni ai sensi della propria
[informativa sulla privacy](https://www.dropbox.com/privacy).

## 7. Richieste a TMDB e sincronizzazione facoltativa dell'account

Edendale usa TMDB per ricerche nel catalogo, immagini, trame, cast, valutazioni,
riferimenti ai trailer e arricchimento della videoteca. Quando usi queste
funzioni, a TMDB vengono inviati il testo della ricerca e le informazioni di
titolo ricavate. Questo vale anche per i file provenienti da server e archivi
cloud: TMDB riceve le informazioni di titolo riconosciute da un nome di file,
mai il nome del file, la sua posizione o il tuo account di archiviazione. Le
richieste partono direttamente dal tuo dispositivo verso TMDB; non transitano da
alcun server di BaBaSaMa. TMDB può ricevere le consuete informazioni di
connessione, quali un indirizzo IP e dettagli sul dispositivo o sulla richiesta.

Se colleghi il tuo account TMDB, Edendale può leggere e aggiornare i tuoi
preferiti, la tua lista di visione e le tue valutazioni TMDB su tua indicazione.
La tua posizione di riproduzione e la tua cronologia non vengono inviate a
TMDB.

TMDB tratta le informazioni ai sensi della propria
[informativa sulla privacy](https://www.themoviedb.org/privacy-policy) e delle
[condizioni API](https://www.themoviedb.org/api-terms-of-use).

## 8. Ricerca di sottotitoli

Edendale può cercare sottotitoli tramite **Wyzie Subs** (`sub.wyzie.io`, gestito
da Wyzie). Una richiesta viene effettuata solo se apri il pannello dei
sottotitoli durante la riproduzione e avvii una ricerca; nulla viene inviato per
il solo fatto che un video sia in riproduzione.

Quando avvii una ricerca, Edendale invia l'identificatore TMDB del titolo, i
numeri di stagione ed episodio nel caso di un episodio, la lingua dei
sottotitoli che hai scelto, i filtri di formato e per non udenti che hai
selezionato e una chiave API — quella inclusa nella tua build oppure quella che
hai inserito nelle impostazioni. Il nome del file, il percorso, i dati video e
la tua videoteca non vengono inviati. Wyzie può ricevere le consuete
informazioni di connessione, quale un indirizzo IP.

Se scegli un risultato, Edendale scarica quel file di sottotitoli da Wyzie o
dalla posizione a cui rimanda e lo conserva sul tuo dispositivo, così da poterlo
riproporre senza un nuovo download quando viene riprodotto lo stesso video.
Edendale registra sul dispositivo a quale video appartiene il sottotitolo — il
titolo abbinato e il nome del file del video. Sulle piattaforme Apple e su
Windows, un sottotitolo scaricato che non viene usato da circa un mese viene
eliminato automaticamente; Windows ti consente di disattivare questa funzione in
Impostazioni → Sottotitoli.

Wyzie tratta le informazioni secondo le proprie condizioni e prassi in materia
di privacy, al di fuori del controllo di BaBaSaMa. Puoi evitare del tutto
qualsiasi contatto con Wyzie non avviando alcuna ricerca di sottotitoli.

## 9. Pulsanti per saltare

Edendale può mostrare i pulsanti **Salta intro**, **Salta riassunto** e
**Salta i titoli di coda** usando marche temporali fornite dalla comunità di
**TheIntroDB** (`api.theintrodb.org`). I pulsanti per saltare sono disattivati per
impostazione predefinita; puoi attivarli nelle impostazioni di riproduzione di
Edendale o nelle regolazioni del lettore. La riproduzione non salta mai nulla
se non premi il pulsante.

Quando i pulsanti per saltare sono attivi e riproduci un titolo che Edendale ha
abbinato su TMDB, Edendale invia a TheIntroDB l'identificatore TMDB del titolo —
per un episodio, l'identificatore della serie con i numeri di stagione ed
episodio — e la durata del video, così che possa restituire marche temporali
adatte alla tua copia. Non vengono inviati account, chiavi API, nomi di file,
percorsi, dati video né la videoteca. TheIntroDB riceve le consuete
informazioni di connessione, come il tuo indirizzo IP. I file che Edendale non
ha abbinato non vengono mai cercati.

Le marche temporali sono mantenute in memoria solo durante la riproduzione del
video. Non vengono salvate nella videoteca, nell'avanzamento della riproduzione
né in alcun archivio sincronizzato. TheIntroDB tratta le informazioni ai sensi
della propria [informativa sulla privacy](https://theintrodb.org/docs/privacy)
e dei propri [termini](https://theintrodb.org/docs/terms).

## 10. Riproduzione dei trailer

Edendale non contatta YouTube per il solo fatto che un trailer sia disponibile.
Nessun trailer parte prima di una tua azione.

Quando scegli espressamente di guardare un trailer, le build Apple e Android
aprono un player YouTube incorporato in modalità con privacy avanzata
(`youtube-nocookie.com`), mentre Windows affida il trailer al browser di
sistema, così che l'applicazione stessa non effettui alcuna chiamata a YouTube.
Google e YouTube potranno quindi trattare informazioni di connessione,
dispositivo, provenienza, visione e pubblicità ai sensi delle
[norme sulla privacy di Google](https://policies.google.com/privacy) e delle
condizioni di YouTube. La modalità con privacy avanzata limita parte dell'uso
dei dati da parte di YouTube; non rende anonima la richiesta e un video
incorporato può mostrare pubblicità.

## 11. Report di piattaforme e store

Edendale non contiene codice di analisi, telemetria o segnalazione dei crash su
alcuna piattaforma. Il suo manifest sulla privacy di Apple non dichiara alcun
tipo di dato raccolto né alcun tracciamento.

Indipendentemente da Edendale, la piattaforma o lo store da cui installi possono
fornire a BaBaSaMa report aggregati sull'applicazione. Tali dati provengono
dalla piattaforma, non da qualcosa che Edendale invia, e li controlli dalla
piattaforma stessa:

- **Apple.** App Store Connect può fornire analisi aggregate e report sui crash
  per le build dell'App Store. Apple include i dati del tuo dispositivo solo se
  hai attivato **Condividi con gli sviluppatori** in Impostazioni → Privacy e
  sicurezza → Analisi e miglioramenti. Disattivandolo, l'invio cessa.
- **Android.** Dove Edendale è distribuito tramite Google Play, Play Console può
  fornire report sui crash e sugli ANR («l'applicazione non risponde») e
  metriche di qualità aggregate. Puoi controllarlo in Impostazioni → Google →
  Utilizzo e diagnostica e tramite la scelta che ti viene proposta quando segnali
  un crash.
- **Windows.** Dove Edendale è distribuito tramite Microsoft Store, Partner
  Center può fornire report aggregati su integrità e utilizzo. I dati diagnostici
  di Windows si controllano in Impostazioni → Privacy e sicurezza → Feedback e
  diagnostica.
- **Download diretti.** Dove Edendale è distribuito come download diretto da
  GitHub, GitHub riceve la richiesta di download e comunica a BaBaSaMa solo
  conteggi aggregati.

Questi report sono aggregati o diagnostici. Non dicono a BaBaSaMa che cosa hai
guardato, che cosa contengono la tua videoteca o il tuo spazio di archiviazione
o chi sei.

## 12. Come vengono usate le informazioni

| Finalità | Informazioni | Base giuridica abituale ove richiesta |
|---|---|---|
| Indicizzare e riprodurre i contenuti che selezioni | Contenuti e dati della videoteca | Esecuzione del Servizio da te richiesto |
| Elencare, indicizzare e riprodurre i file da server e archivi cloud che colleghi | Elenchi delle cartelle, metadati e contenuto dei file di quella sorgente | Esecuzione del Servizio da te richiesto |
| Accedere a un account di archiviazione collegato ed etichettarlo | Identificatore dell'account, indirizzo e-mail, nome visualizzato e token | Tua richiesta o consenso |
| Recuperare metadati e risultati di ricerca da TMDB | Testo della ricerca e informazioni di titolo ricavate | Esecuzione del Servizio; legittimo interesse |
| Trovare e scaricare un sottotitolo che hai richiesto | Identificatore TMDB, stagione ed episodio, lingua e filtri | La tua richiesta |
| Mostrare i pulsanti per saltare che hai attivato | Identificatore TMDB, stagione ed episodio, durata del video | Tua richiesta o consenso |
| Salvare avanzamento, preferenze e valutazioni | Registrazioni personali | Esecuzione del Servizio |
| Sincronizzare le registrazioni tramite il tuo account di piattaforma | Dati di visione e registrazioni personali | Tua richiesta o consenso; esecuzione del Servizio |
| Collegarsi a un account TMDB facoltativo o a un server | Token dell'account o credenziali del server | Tua richiesta o consenso |
| Rispondere alle richieste di assistenza | Dati di contatto e contenuto dei messaggi | Legittimo interesse; misure da te richieste |
| Mantenere e migliorare le applicazioni | Report aggregati di piattaforma o store | Legittimo interesse a qualità e stabilità |

Quando un trattamento si fonda sul consenso, puoi revocarlo uscendo
dall'account interessato o scollegandolo, rimuovendo la sorgente, disattivando
la funzione o modificando le autorizzazioni della piattaforma.

## 13. Comunicazione a terzi e fornitori

BaBaSaMa non vende le tue informazioni. Poiché BaBaSaMa non gestisce alcun
server per Edendale, le informazioni sono comunicate solo nella misura
necessaria:

- a **TMDB** quando effettui una ricerca, arricchisci un titolo, carichi
  metadati o usi un account TMDB collegato facoltativo;
- a **Google**, **Microsoft** o **Dropbox** quando colleghi e usi un account
  Google Drive, OneDrive o Dropbox (sezione 6);
- al server che scegli quando colleghi una sorgente SMB, NFS, SFTP, WebDAV o
  compatibile con S3;
- a **Wyzie** quando avvii una ricerca di sottotitoli;
- a **TheIntroDB** finché i pulsanti per saltare sono attivi;
- ad **Apple**, **Google** o **Microsoft** quando attivi o usi i loro servizi di
  archiviazione, backup, credenziali o sincronizzazione, oppure quando
  forniscono i report aggregati descritti nella sezione 11;
- a **YouTube/Google** dopo che hai espressamente aperto un trailer;
- a **GitHub**, che serve il sito web e gli eventuali download diretti; e
- ove richiesto dalla legge applicabile o da un valido procedimento legale.

Ciascuna di queste organizzazioni tratta le informazioni come titolare autonomo,
secondo le proprie condizioni e la propria informativa. Nessuna agisce come
responsabile su istruzione di BaBaSaMa e BaBaSaMa non riceve copia di quanto
raccolgono, oltre ai report aggregati descritti nella sezione 11.

## 14. Conservazione e cancellazione

- **Sito web:** non c'è nulla da cancellare. Il sito non usa cookie né
  archiviazione nel browser. I dati di richiesta che raggiungono GitHub sono
  conservati secondo le politiche di GitHub e non sono a disposizione di
  BaBaSaMa.
- **Archiviazione locale delle app:** rimuovere una sorgente o una registrazione
  incide sull'indice della videoteca locale; non rimuove necessariamente i dati
  di visione o di account. Cancellare i dati dell'applicazione può eliminare il
  container locale secondo i controlli di quella piattaforma. Il comportamento in
  caso di disinstallazione, backup e ripristino varia da piattaforma a
  piattaforma e non elimina necessariamente le copie su cloud o di backup.
- **Server e account di archiviazione cloud collegati:** rimuovere una sorgente
  ne rimuove i file dalla videoteca ma mantiene le credenziali di accesso o
  l'account, così che altre sorgenti possano usarli. Esci o dimentica le
  credenziali di accesso in **Impostazioni → Account** per eliminarle. L'uscita
  non elimina nulla nel tuo spazio di archiviazione; per porre fine all'accesso
  di Edendale presso un fornitore cloud, usa i controlli del fornitore indicati
  nella sezione 6.
- **Apple:** i record CloudKit privati e gli elementi sincronizzati del
  portachiavi iCloud possono permanere dopo la disinstallazione. Gestiscili
  tramite i controlli disponibili di iCloud, portachiavi, app o dispositivo.
  Edendale non offre attualmente un unico comando di cancellazione totale
  multipiattaforma.
- **Android:** una copia di backup di piattaforma o di trasferimento del
  dispositivo può permanere secondo i controlli e i tempi di conservazione di
  Google, del produttore del dispositivo o del tuo fornitore di backup. Le righe
  Watch Next sulla schermata Home di Android TV vengono rimosse quando disattivi
  l'impostazione.
- **Windows:** una replica nella tua cartella OneDrive `Apps/Edendale` permane
  finché non la elimini tramite OneDrive e le eventuali funzioni di cestino o
  ripristino.
- **I sottotitoli scaricati** restano sul tuo dispositivo finché non li rimuovi
  oppure, sulle piattaforme Apple e su Windows, finché non restano inutilizzati
  per circa un mese. Wyzie non tiene alcun account a tuo nome; ogni eventuale
  log di richiesta è disciplinato da Wyzie.
- **Le marche temporali dei pulsanti per saltare** vengono eliminate al termine
  della riproduzione. Ogni eventuale log di richiesta conservato da TheIntroDB è
  disciplinato da TheIntroDB.
- Un account TMDB collegato conserva le informazioni secondo le impostazioni e le
  politiche di TMDB. Scollegare Edendale non elimina automaticamente le
  informazioni già memorizzate nel tuo account TMDB; gestisci tali dati tramite
  TMDB.
- La corrispondenza di assistenza è conservata solo per il tempo ragionevolmente
  necessario a rispondere, a mantenere uno storico di assistenza o ad adempiere
  obblighi di legge.

Poiché BaBaSaMa in genere non può accedere alle informazioni conservate solo sul
tuo dispositivo o in un account di piattaforma privato, utilizza i controlli
specifici di piattaforma sopra indicati. Una richiesta rivolta a BaBaSaMa non può
cancellare direttamente informazioni cui BaBaSaMa non ha accesso.

## 15. Trasferimenti internazionali

GitHub, TMDB, Wyzie, TheIntroDB, Apple, Google, Microsoft e Dropbox possono
trattare informazioni in Paesi diversi dal tuo. Le loro informative descrivono
le garanzie applicate ai trasferimenti internazionali. BaBaSaMa non trasferisce
direttamente le tue informazioni, poiché non le riceve.

## 16. Sicurezza

Edendale usa connessioni cifrate per TMDB, Wyzie, TheIntroDB e ogni fornitore
di archiviazione cloud e conserva le credenziali nell'archiviazione protetta
della piattaforma. L'accesso al cloud usa OAuth 2.0 con PKCE sulla pagina del
fornitore stesso, quindi Edendale non gestisce mai la password del tuo account
cloud e i token di accesso restano in memoria. Edendale vincola ogni server SFTP
alla relativa chiave host e ti chiede conferma prima di considerare attendibile
una chiave cambiata.

Una connessione al tuo server è riservata solo quanto lo consentono il suo
protocollo e la sua configurazione. Le connessioni SFTP e HTTPS sono cifrate;
NFS, WebDAV su `http://` e alcune configurazioni SMB non lo sono, quindi usali
solo su una rete di cui ti fidi.

Il Servizio mantiene deliberatamente i dati video e le registrazioni personali
al di fuori di qualsiasi archiviazione gestita dallo sviluppatore — che non
esiste. Nessuna misura di sicurezza può garantire una protezione assoluta:
proteggi quindi il tuo dispositivo, i tuoi account di piattaforma, i tuoi
account di archiviazione cloud, i tuoi server e i tuoi backup.

## 17. Privacy dei minori

Edendale è un'utilità multimediale destinata al pubblico generale e non è
rivolta a minori di 13 anni. BaBaSaMa non raccoglie consapevolmente dati
personali di minori tramite Edendale. Un genitore o tutore che ritenga che un
minore abbia inviato dati personali a BaBaSaMa può contattarci per chiederne la
cancellazione.

## 18. I tuoi diritti

A seconda del luogo in cui risiedi, puoi avere il diritto di essere informato e
di chiedere accesso, rettifica, cancellazione, limitazione, portabilità o
opposizione, nonché di revocare il consenso o di proporre reclamo a un'autorità
di controllo.

Quasi tutte le informazioni di Edendale sono sotto il tuo controllo diretto,
perché restano sul tuo dispositivo, nel tuo account di piattaforma o presso il
fornitore di archiviazione che hai scelto. Puoi porre fine in qualsiasi momento
all'accesso di Edendale a un account di archiviazione cloud usando i controlli
indicati nella sezione 6. Per le informazioni in possesso di BaBaSaMa, come un
messaggio di assistenza, scrivi a **long@babasama.com**. Potremmo aver bisogno
di elementi sufficienti per verificare e riscontrare la tua richiesta.

## 19. Modifiche alla presente informativa

Possiamo aggiornare la presente informativa quando cambiano funzioni,
piattaforme, fornitori od obblighi di legge di Edendale. Aggiorneremo la data di
**Ultimo aggiornamento** e forniremo, ove opportuno, un avviso ulteriore. Un
trattamento sostanzialmente diverso non sarà applicato retroattivamente ove sia
richiesto il consenso o un'altra base giuridica.

## 20. Contatti

Domande, richieste in materia di privacy o reclami possono essere inviati a:

- **BaBaSaMa**
- **long@babasama.com**
