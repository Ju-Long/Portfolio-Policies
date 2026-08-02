---
title: "Informativa sulla privacy"
app: "Edendale"
lastUpdated: "2 agosto 2026"
lastUpdatedLabel: "Ultimo aggiornamento"
contentLanguage: "it"
draft: true
---

> **Traduzione della bozza in inglese.** Prima della pubblicazione, confermare
> la denominazione legale e l'indirizzo del titolare e sottoporre il documento a
> revisione legale. Questo modello non sostituisce una consulenza legale. In
> caso di discordanza tra le versioni linguistiche prevale la versione inglese.

## 1. Introduzione e ambito di applicazione

La presente informativa spiega come **Edendale** tratta le informazioni quando
utilizzi un'applicazione Edendale ufficiale o il sito web di Edendale
(complessivamente, il «**Servizio**»).

Edendale è un lettore video locale e un registro personale delle visioni. Ti
permette di riprodurre i contenuti che scegli, creare una videoteca privata,
arricchire i titoli con informazioni di The Movie Database («**TMDB**»), cercare
sottotitoli e conservare i tuoi dati di visione. Edendale non fornisce, non
ospita e non carica film o episodi televisivi per tuo conto.

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
- **[Prima della pubblicazione: aggiungere la denominazione legale e l'indirizzo
  postale del titolare, se richiesto nei Paesi in cui Edendale è offerto.]**

## 3. Sintesi: prima il locale

Edendale è progettato per ridurre al minimo la raccolta di dati:

- Non serve alcun account Edendale.
- BaBaSaMa non gestisce alcun server, database o proxy per Edendale. Non esiste
  alcun luogo in cui i dati della tua videoteca, delle tue visioni o dei tuoi
  account possano esserci inviati.
- I tuoi file video e di sottotitoli non vengono caricati né su BaBaSaMa né
  presso terzi.
- Edendale non contiene pubblicità, analisi di marketing, segnalazione dei crash
  o tracciamento comportamentale su nessuna piattaforma. YouTube può mostrare
  pubblicità dopo che hai scelto di aprire un trailer.
- BaBaSaMa non vende né affitta informazioni personali.
- L'indice della videoteca e i tuoi dati personali restano sul tuo dispositivo o
  nello spazio di archiviazione collegato al tuo account di piattaforma, come
  descritto di seguito.
- L'accesso alla rete è limitato alle funzioni che utilizzi: metadati TMDB e
  sincronizzazione facoltativa dell'account, ricerca di sottotitoli avviata da
  te, cartelle di rete che selezioni, archiviazione o sincronizzazione della
  piattaforma e un trailer aperto per tua esplicita azione.

Un collegamento facoltativo a TMDB è un account presso TMDB, non un account
Edendale.

## 4. Informazioni trattate da Edendale

### 4.1 Contenuti locali e dati della videoteca

Quando scegli un file, una cartella o una condivisione di rete, Edendale può
trattare:

- nomi di file e cartelle;
- percorsi relativi, identificatori di file della piattaforma o segnalibri con
  ambito di sicurezza;
- tipo, dimensione e data di modifica del file;
- titolo, anno di uscita, nome della serie, numero di stagione e numero di
  episodio ricavati dal nome del file;
- l'indirizzo di un server e di una condivisione di rete da te selezionati; e
- identificatori TMDB, link alle immagini, trame, cast, durata e altri metadati
  usati per arricchire la tua videoteca locale.

L'analisi dei nomi dei file avviene localmente prima di qualsiasi richiesta di
metadati. Edendale può poi inviare a TMDB un titolo di film o serie, un anno, un
numero di stagione o di episodio così ricavati per trovare i metadati
corrispondenti.

I dati dei tuoi video e sottotitoli restano nella posizione che hai scelto e
vengono letti per la riproduzione. Non vengono caricati né su BaBaSaMa né presso
terzi. Se riproduci da una condivisione di rete, il tuo dispositivo comunica con
tale condivisione.

### 4.2 Dati di visione e registrazioni personali

A seconda della funzione e della piattaforma, Edendale può conservare:

- posizione di riproduzione, durata vista, stato di completamento e data
  dell'ultima visione;
- preferiti e voci della lista di visione;
- la tua valutazione personale;
- preferenze del lettore e dell'interfaccia, inclusi la lingua dei sottotitoli e
  il filtro per non udenti; e
- un'istantanea di visualizzazione limitata, come un titolo o un riferimento a
  una locandina, usata per i widget della schermata Home e per le righe «continua
  a guardare».

Queste registrazioni sono destinate al tuo uso personale.

### 4.3 Credenziali e informazioni sull'account

Se colleghi un account TMDB facoltativo, Edendale riceve un token di accesso e
un identificatore dell'account TMDB per sincronizzare preferiti, voci della
lista di visione e valutazioni supportate. Edendale conserva questa credenziale
nell'archivio protetto della piattaforma: il portachiavi sulle piattaforme
Apple, un archivio cifrato basato sul Keystore di Android su Android e DPAPI su
Windows. Sulle piattaforme Apple una credenziale può sincronizzarsi tramite il
portachiavi iCloud se hai attivato la sincronizzazione.

Se colleghi una condivisione di rete protetta da password, Edendale conserva
l'indirizzo della condivisione e le credenziali nello stesso archivio protetto.
Tali credenziali servono solo a connetterti alla condivisione che hai scelto e
non vengono inviate a BaBaSaMa né a terzi.

Se inserisci una tua chiave API per il servizio di sottotitoli, viene conservata
nello stesso archivio protetto e inviata soltanto al servizio di sottotitoli
descritto nella sezione 7.

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

L'indice della videoteca locale, i percorsi dei file e i segnalibri con ambito
di sicurezza restano in un archivio locale del dispositivo e sono esplicitamente
esclusi dalla replica su CloudKit.

L'avanzamento della riproduzione e le scelte per singolo titolo — preferiti,
appartenenza alla lista di visione e valutazioni — sono conservati nel container
iCloud privato di Edendale per comparire sui tuoi dispositivi Apple. Le
credenziali TMDB, di condivisione di rete e del servizio di sottotitoli possono
usare il portachiavi iCloud. Apple tratta queste informazioni ai sensi della
propria [informativa sulla privacy](https://www.apple.com/legal/privacy/) e
delle tue impostazioni iCloud.

### 5.3 Android

Android conserva la videoteca e le registrazioni personali di Edendale
nell'archiviazione locale dell'applicazione. A seconda delle tue impostazioni di
backup e di trasferimento del dispositivo, il sistema operativo può includere i
dati applicativi idonei nel backup di piattaforma o nel trasferimento. Gli
archivi protetti della sessione TMDB, delle credenziali di rete e della chiave
dei sottotitoli sono esclusi sia dal backup su cloud sia dal trasferimento del
dispositivo dalle regole di backup di Edendale, poiché le chiavi che li
proteggono non lasciano mai il dispositivo. Protezione e conservazione dei
backup dipendono dalla versione di Android, dal dispositivo, dall'account e dal
fornitore di backup.

### 5.4 Windows

Windows conserva l'indice della videoteca locale nell'archiviazione locale
dell'applicazione. Anche avanzamento della riproduzione, preferiti, voci della
lista di visione e valutazioni sono conservati localmente e, quando OneDrive è
configurato sul dispositivo, Edendale colloca una replica di tali registrazioni
personali nella tua cartella OneDrive `Apps/Edendale`, così che un secondo PC
con lo stesso accesso converga. Senza OneDrive l'app resta solo locale. Le
credenziali restano protette localmente e non sono mai incluse in quella
replica. Microsoft tratta i dati di OneDrive secondo le condizioni del tuo
account Microsoft e le tue impostazioni sulla privacy.

## 6. Richieste a TMDB e sincronizzazione facoltativa dell'account

Edendale usa TMDB per ricerche nel catalogo, immagini, trame, cast, valutazioni,
riferimenti ai trailer e arricchimento della videoteca locale. Quando usi queste
funzioni, a TMDB vengono inviati il testo della ricerca e le informazioni di
titolo ricavate. Le richieste partono direttamente dal tuo dispositivo verso
TMDB; non transitano da alcun server di BaBaSaMa. TMDB può ricevere le consuete
informazioni di connessione, quali un indirizzo IP e dettagli sul dispositivo o
sulla richiesta.

Se colleghi il tuo account TMDB, Edendale può leggere e aggiornare i tuoi
preferiti, la tua lista di visione e le tue valutazioni TMDB su tua indicazione.
La tua posizione di riproduzione e la tua cronologia non vengono inviate a
TMDB.

TMDB tratta le informazioni ai sensi della propria
[informativa sulla privacy](https://www.themoviedb.org/privacy-policy) e delle
[condizioni API](https://www.themoviedb.org/api-terms-of-use).

## 7. Ricerca di sottotitoli

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
dalla posizione a cui rimanda e lo conserva per la riproduzione. Wyzie tratta le
informazioni secondo le proprie condizioni e prassi in materia di privacy, al di
fuori del controllo di BaBaSaMa. Puoi evitare del tutto qualsiasi contatto con
Wyzie non avviando alcuna ricerca di sottotitoli.

## 8. Riproduzione dei trailer

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

## 9. Report di piattaforme e store

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
guardato, che cosa contiene la tua videoteca o chi sei.

## 10. Come vengono usate le informazioni

| Finalità | Informazioni | Base giuridica abituale ove richiesta |
|---|---|---|
| Indicizzare e riprodurre i contenuti che selezioni | Contenuti locali e dati della videoteca | Esecuzione del Servizio da te richiesto |
| Recuperare metadati e risultati di ricerca da TMDB | Testo della ricerca e informazioni di titolo ricavate | Esecuzione del Servizio; legittimo interesse |
| Trovare e scaricare un sottotitolo che hai richiesto | Identificatore TMDB, stagione ed episodio, lingua e filtri | La tua richiesta |
| Salvare avanzamento, preferenze e valutazioni | Registrazioni personali | Esecuzione del Servizio |
| Sincronizzare le registrazioni tramite il tuo account di piattaforma | Dati di visione e registrazioni personali | Tua richiesta o consenso; esecuzione del Servizio |
| Collegarsi a un account TMDB facoltativo o a una condivisione di rete | Token dell'account o credenziali della condivisione | Tua richiesta o consenso |
| Rispondere alle richieste di assistenza | Dati di contatto e contenuto dei messaggi | Legittimo interesse; misure da te richieste |
| Mantenere e migliorare le applicazioni | Report aggregati di piattaforma o store | Legittimo interesse a qualità e stabilità |

Quando un trattamento si fonda sul consenso, puoi revocarlo scollegando
l'account interessato, disattivando la funzione o modificando le autorizzazioni
della piattaforma.

## 11. Comunicazione a terzi e fornitori

BaBaSaMa non vende le tue informazioni. Poiché BaBaSaMa non gestisce alcun
server per Edendale, le informazioni sono comunicate solo nella misura
necessaria:

- a **TMDB** quando effettui una ricerca, arricchisci un titolo, carichi
  metadati o usi un account TMDB collegato facoltativo;
- a **Wyzie** quando avvii una ricerca di sottotitoli;
- ad **Apple**, **Google** o **Microsoft** quando attivi o usi i loro servizi di
  archiviazione, backup, credenziali o sincronizzazione, oppure quando
  forniscono i report aggregati descritti nella sezione 9;
- a **YouTube/Google** dopo che hai espressamente aperto un trailer;
- al server di rete che scegli quando colleghi una condivisione;
- a **GitHub**, che serve il sito web e gli eventuali download diretti; e
- ove richiesto dalla legge applicabile o da un valido procedimento legale.

Ciascuna di queste organizzazioni tratta le informazioni come titolare autonomo,
secondo le proprie condizioni e la propria informativa. Nessuna agisce come
responsabile su istruzione di BaBaSaMa e BaBaSaMa non riceve copia di quanto
raccolgono, oltre ai report aggregati descritti nella sezione 9.

## 12. Conservazione e cancellazione

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
- **Apple:** i record CloudKit privati e gli elementi sincronizzati del
  portachiavi iCloud possono permanere dopo la disinstallazione. Gestiscili
  tramite i controlli disponibili di iCloud, portachiavi, app o dispositivo.
  Edendale non offre attualmente un unico comando di cancellazione totale
  multipiattaforma.
- **Android:** una copia di backup di piattaforma o di trasferimento del
  dispositivo può permanere secondo i controlli e i tempi di conservazione di
  Google, del produttore del dispositivo o del tuo fornitore di backup.
- **Windows:** una replica nella tua cartella OneDrive `Apps/Edendale` permane
  finché non la elimini tramite OneDrive e le eventuali funzioni di cestino o
  ripristino.
- **I sottotitoli scaricati** restano sul tuo dispositivo finché non li rimuovi.
  Wyzie non tiene alcun account a tuo nome; ogni eventuale log di richiesta è
  disciplinato da Wyzie.
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

## 13. Trasferimenti internazionali

GitHub, TMDB, Wyzie, Apple, Google e Microsoft possono trattare informazioni in
Paesi diversi dal tuo. Le loro informative descrivono le garanzie applicate ai
trasferimenti internazionali. BaBaSaMa non trasferisce direttamente le tue
informazioni, poiché non le riceve.

## 14. Sicurezza

Edendale utilizza connessioni di rete cifrate per i servizi online supportati,
rifiuta il traffico in chiaro e usa l'archiviazione protetta della piattaforma
per le credenziali. Il Servizio mantiene deliberatamente i dati video e le
registrazioni personali al di fuori di qualsiasi archiviazione gestita dallo
sviluppatore — che non esiste. Nessuna misura di sicurezza può garantire una
protezione assoluta: proteggi quindi il tuo dispositivo, i tuoi account di
piattaforma, le tue condivisioni di rete e i tuoi backup.

## 15. Privacy dei minori

Edendale è un'utilità multimediale destinata al pubblico generale e non è
rivolta a minori di 13 anni. BaBaSaMa non raccoglie consapevolmente dati
personali di minori tramite Edendale. Un genitore o tutore che ritenga che un
minore abbia inviato dati personali a BaBaSaMa può contattarci per chiederne la
cancellazione.

## 16. I tuoi diritti

A seconda del luogo in cui risiedi, puoi avere il diritto di essere informato e
di chiedere accesso, rettifica, cancellazione, limitazione, portabilità o
opposizione, nonché di revocare il consenso o di proporre reclamo a un'autorità
di controllo.

Quasi tutte le informazioni di Edendale sono sotto il tuo controllo diretto,
perché restano sul tuo dispositivo o nel tuo account di piattaforma. Per le
informazioni in possesso di BaBaSaMa, come un messaggio di assistenza, scrivi a
**long@babasama.com**. Potremmo aver bisogno di elementi sufficienti per
verificare e riscontrare la tua richiesta.

## 17. Modifiche alla presente informativa

Possiamo aggiornare la presente informativa quando cambiano funzioni,
piattaforme, fornitori od obblighi di legge di Edendale. Aggiorneremo la data di
**Ultimo aggiornamento** e forniremo, ove opportuno, un avviso ulteriore. Un
trattamento sostanzialmente diverso non sarà applicato retroattivamente ove sia
richiesto il consenso o un'altra base giuridica.

## 18. Contatti

Domande, richieste in materia di privacy o reclami possono essere inviati a:

- **BaBaSaMa**
- **long@babasama.com**
