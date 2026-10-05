---
title: "Privacybeleid"
app: "Edendale"
lastUpdated: "5 oktober 2026"
lastUpdatedLabel: "Laatst bijgewerkt"
contentLanguage: "nl-NL"
draft: false
---

## 1. Inleiding en reikwijdte

Dit privacybeleid legt uit hoe **Edendale** omgaat met informatie wanneer je een
officiële Edendale-app of de Edendale-website gebruikt (samen de
"**Dienst**").

Edendale is een lokale videospeler en een persoonlijke kijkregistratie. Je kunt
er media mee afspelen die je zelf kiest (vanaf je apparaat, vanaf servers die je
zelf beheert of vanuit cloudopslagaccounts die je koppelt), een
privébibliotheek opbouwen, titels verrijken met informatie van The Movie
Database ("**TMDB**"), ondertitels zoeken, optionele overslaanknoppen tonen en
je eigen kijkgegevens bijhouden. Edendale levert, host of uploadt geen films of
televisieafleveringen voor je.

De Edendale-website is een informatieve site. Hij beschrijft de apps, verwijst
naar de broncode van het project en beantwoordt app-links, zodat een gedeelde
Edendale-link in een geïnstalleerde app kan worden geopend. Het is geen
videospeler, er zijn geen accounts en er wordt niets over jou bewaard.

Dit beleid geldt voor officiële builds en de officiële website. Onafhankelijke
forks en zelf gehoste kopieën vallen onder hun eigen beheerders en kunnen
informatie anders behandelen.

## 2. Verwerkingsverantwoordelijke

De verantwoordelijke voor de officiële Dienst is:

- **BaBaSaMa**
- E-mail: **long@babasama.com**

## 3. Samenvatting: lokaal eerst

Edendale is ontworpen om zo min mogelijk gegevens te verzamelen:

- Je hebt geen Edendale-account nodig.
- BaBaSaMa beheert geen server, database of proxy voor Edendale. Er is dus geen
  plek waarheen je bibliotheek-, kijk-, bestands- of accountgegevens naar ons
  verzonden zouden kunnen worden.
- Je video- en ondertitelbestanden worden niet geüpload naar BaBaSaMa of naar
  derden.
- Koppel je Google Drive, Microsoft OneDrive of Dropbox, dan meld je je
  rechtstreeks aan bij die aanbieder en vraagt Edendale alleen leestoegang. Je
  bestanden en aanmeldtokens gaan uitsluitend tussen je apparaat en die
  aanbieder.
- Edendale bevat op geen enkel platform advertenties, marketinganalyse,
  crashrapportage of gedragsmatige tracking. YouTube kan advertenties tonen
  nadat je ervoor kiest een trailer te openen.
- BaBaSaMa verkoopt of verhuurt geen persoonsgegevens.
- De bibliotheekindex en je persoonlijke gegevens staan op je apparaat of in
  opslag die bij je eigen platformaccount hoort, zoals hieronder beschreven.
- Netwerktoegang blijft beperkt tot de functies die je gebruikt:
  TMDB-metagegevens en optionele accountsynchronisatie, de servers en
  opslagaccounts die je koppelt, een ondertitelzoekopdracht die jij start,
  overslaanknoppen als je die inschakelt, platformopslag of -synchronisatie, en
  een trailer die je uitdrukkelijk opent.

Een optionele koppeling met TMDB, Google, Microsoft of Dropbox is een account
bij die aanbieder, geen Edendale-account.

## 4. Informatie die Edendale verwerkt

### 4.1 Media- en bibliotheekgegevens

Wanneer je een bestand of map kiest, of een server of cloudopslagmap koppelt,
kan Edendale verwerken:

- bestands- en mapnamen;
- relatieve paden, bestandsidentificatoren van het platform, security-scoped
  bladwijzers of de identificatoren die een opslagaanbieder aan elk bestand en
  elke map toekent;
- bestandstype, -grootte en wijzigingsdatum, en de duur van een video als de
  opslagaanbieder die doorgeeft;
- de titel, het releasejaar, de serienaam, het seizoensnummer en het
  afleveringsnummer die uit een bestandsnaam zijn afgeleid;
- het adres van een server die je koppelt, en de aanbieder, het account en de
  map van een cloudopslagbron; en
- TMDB-identificatoren, links naar beeldmateriaal, samenvattingen, cast,
  speelduur en andere metagegevens waarmee je lokale bibliotheek wordt verrijkt.

Het herkennen van bestandsnamen gebeurt lokaal, vóór elke metagegevensaanvraag.
Daarna kan Edendale een zo afgeleide film- of serietitel, een jaartal, een
seizoens- of afleveringsnummer naar TMDB sturen om bijpassende metagegevens te
vinden. De bestandsnaam zelf wordt niet verstuurd.

Je video- en ondertitelgegevens blijven op de locatie die je hebt gekozen en
worden gelezen om af te spelen. Komt een video van een server of uit
cloudopslag, dan leest Edendale tijdens het kijken de delen die het nodig heeft
en houdt het een korte vooruitleesbuffer in het geheugen; er wordt geen kopie
van de video opgeslagen. Video's worden niet geüpload naar BaBaSaMa of naar
derden.

### 4.2 Kijkgegevens en persoonlijke registraties

Afhankelijk van de functie en het platform kan Edendale bewaren:

- afspeelpositie, bekeken duur, voltooiingsstatus en het tijdstip van laatst
  bekeken;
- favorieten en items op je kijklijst;
- je persoonlijke beoordeling;
- speler- en interfacevoorkeuren, zoals je ondertiteltaal en het filter voor
  slechthorenden, de weergave van ondertitels, spronglengtes en snelheden bij
  ingedrukt houden, audio- en beeldaanpassingen, en het audiospoor, de
  ondertitel en de snelheid die je het laatst voor een titel hebt gekozen;
- een overzicht van de ondertitels die je hebt gedownload en de video waar elk
  ervan bij hoort; en
- een beperkte weergavemomentopname, zoals een titel of een posterverwijzing,
  gebruikt voor beginschermwidgets, "verder kijken"-rijen en, als je dat
  inschakelt, het startscherm van Android TV.

Deze registraties zijn voor je persoonlijke gebruik.

### 4.3 Inloggegevens en accountinformatie

Edendale bewaart alle inloggegevens in de beveiligde opslag van het platform:
de sleutelhanger op Apple-platforms, een met de Android Keystore versleutelde
opslag op Android en DPAPI op Windows. Inloggegevens worden nooit in je
bibliotheek, opgeslagen links of logboeken geschreven en worden nooit naar
BaBaSaMa gestuurd.

- **TMDB-account.** Als je een optioneel TMDB-account koppelt, ontvangt
  Edendale een toegangstoken en een TMDB-accountidentificatie om ondersteunde
  favorieten, kijklijstitems en beoordelingen te synchroniseren.
- **Servers die je koppelt.** Voor een met een wachtwoord beveiligde SMB-share,
  SFTP-server of WebDAV-server bewaart Edendale het serveradres, de
  gebruikersnaam en het wachtwoord. Voor S3-compatibele opslag bewaart het de
  toegangssleutel-ID en de geheime toegangssleutel. Voor een SFTP-server
  bewaart het ook de vingerafdruk van de hostsleutel van de server, zodat het je
  kan waarschuwen als die sleutel verandert. Deze inloggegevens worden alleen
  naar de server gestuurd die je hebt gekoppeld.
- **Cloudopslagaccounts.** Wanneer je Google Drive, Microsoft OneDrive of
  Dropbox koppelt, bewaart Edendale een vernieuwingstoken, de
  accountidentificatie, het e-mailadres en de weergavenaam die de aanbieder
  teruggeeft, en de machtigingen die je hebt verleend. Kortlevende
  toegangstokens worden alleen in het geheugen bewaard. Paragraaf 6 beschrijft
  wat elke aanbieder met Edendale deelt.
- **Sleutel voor de ondertiteldienst.** Voer je je eigen API-sleutel voor de
  ondertiteldienst in, dan wordt die alleen naar de in paragraaf 8 beschreven
  ondertiteldienst gestuurd.

Op Apple-platforms kunnen deze inloggegevens via iCloud-sleutelhanger
synchroniseren als je die synchronisatie hebt ingeschakeld, zoals beschreven in
paragraaf 5.2.

### 4.4 Supportberichten

Als je contact opneemt met BaBaSaMa, ontvangen wij het adres dat je gebruikt, je
bericht en alle informatie of diagnostische gegevens die je zelf meestuurt.
Stuur geen videobestanden, wachtwoorden, toegangstokens of ander gevoelig
materiaal.

## 5. Waar informatie wordt bewaard

### 5.1 De Edendale-website

De site bestaat uit statische pagina's die worden gepubliceerd via **GitHub
Pages**, een dienst van GitHub, Inc. (een Microsoft-bedrijf). Er zijn geen
accounts, geen cookies, geen browseropslag, geen analysesoftware en geen
scripts, lettertypen of afbeeldingen van derden. Je taalvoorkeur wordt afgeleid
uit de taalinstellingen die je browser toch al meestuurt en wordt niet
vastgelegd.

Om een pagina te leveren ontvangt GitHub onvermijdelijk gebruikelijke
aanvraaggegevens, zoals je IP- of netwerkadres, het opgevraagde pad, een
tijdstempel, je user-agentreeks en andere gangbare HTTP-headers. GitHub verwerkt
die gegevens als zelfstandig verwerkingsverantwoordelijke onder de
[privacyverklaring van GitHub](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement).
GitHub Pages geeft de site-eigenaar geen toegangslogboeken, dus BaBaSaMa
ontvangt, bewaart en analyseert geen bezoekersgegevens.

De app-linkpagina's van de site (`/search`, `/media`, `/library`, `/play`)
bestaan zodat een Edendale-link in een geïnstalleerde app wordt geopend. Een
identificatie in zo'n link wordt afgehandeld door je apparaat en de
geïnstalleerde app; de website stuurt hem nergens heen.

### 5.2 Apple-platforms

De lokale bibliotheekindex — inclusief bestandspaden, security-scoped
bladwijzers en de namen en identificatoren van bestanden van gekoppelde servers
en cloudopslag — blijft in een apparaatlokale opslag en is uitdrukkelijk
uitgesloten van CloudKit-spiegeling. Gedownloade ondertitels en het overzicht
van de video waar elk ervan bij hoort, worden eveneens alleen op het apparaat
bewaard.

Kijkvoortgang en keuzes per titel — favorieten, kijklijstlidmaatschap en
beoordelingen — worden bewaard in de privé-iCloud-container van Edendale, zodat
ze op je Apple-apparaten kunnen verschijnen. Deze registraties identificeren
titels aan de hand van hun TMDB-identificatoren; ze bevatten geen
bestandsnamen, paden of identificatoren van opslagaanbieders.

Inloggegevens voor TMDB, servers, cloudopslagaccounts en de ondertiteldienst
kunnen via iCloud-sleutelhanger synchroniseren, zodat één keer aanmelden kan
volstaan voor je iPhone, iPad, Mac en Apple Vision Pro. Apple TV ontvangt geen
items uit iCloud-sleutelhanger. Om op Apple TV een account of server te
koppelen, kun je dat goedkeuren op een iPhone of iPad in de buurt waarop
Edendale is geïnstalleerd en die is aangemeld met je Apple Account of dat van
een gezinslid binnen Delen met gezin. Het account wordt via een versleutelde
verbinding op het lokale netwerk rechtstreeks tussen de twee apparaten
verstuurd en loopt niet via BaBaSaMa. Apple verwerkt iCloud-informatie volgens
zijn [privacybeleid](https://www.apple.com/legal/privacy/) en je
iCloud-instellingen.

### 5.3 Android

Android bewaart de bibliotheek en persoonlijke gegevens van Edendale in de
lokale app-opslag. Afhankelijk van je back-up- en apparaatoverdrachtinstellingen
kan het besturingssysteem in aanmerking komende app-gegevens opnemen in een
platformback-up of apparaatoverdracht. De back-upregels van Edendale sluiten de
beveiligde opslag — de TMDB-sessie, serveraanmeldingen, SFTP-hostsleutels,
cloudopslagaccounts en de ondertitelsleutel — uit van zowel cloudback-up als
apparaatoverdracht, omdat de sleutels die deze beschermen het apparaat nooit
verlaten. Bescherming en bewaartermijn van back-ups hangen af van je
Android-versie, apparaat, account en back-upaanbieder.

Op Android TV en Google TV staat **Verder kijken op het startscherm** standaard
uit. Schakel je het in, dan schrijft Edendale voor elke titel die je aan het
kijken bent de naam, het beeldmateriaal en de positie, of de volgende aflevering
van een serie, via de TV-provider van het systeem naar de Watch Next-rij van het
startscherm. Deze items blijven op de tv en Edendale verstuurt er niets voor via
het netwerk, maar de startscherm-app (op Google TV de app van Google) kan ze
lezen. Zet je de instelling uit, dan worden ze verwijderd.

### 5.4 Windows

Windows bewaart de bibliotheekindex, kijkvoortgang, favorieten, kijklijstitems,
beoordelingen en spelerinstellingen in de lokale app-opslag. Als OneDrive op het
apparaat is ingesteld, plaatst Edendale een replica van je kijkgegevens en
persoonlijke registraties in je eigen OneDrive-map `Apps/Edendale`, zodat een
tweede aangemelde pc gelijkloopt. Zonder OneDrive blijft de app volledig lokaal.
Inloggegevens en gedownloade ondertitels blijven op het apparaat en worden nooit
in die replica opgenomen. Een OneDrive-account dat je als opslagbron koppelt
(paragraaf 6.4), staat los van deze replica: als je je bij dat account afmeldt,
blijft de replica ongemoeid, en als je de replica uitschakelt, blijft de bron
ongemoeid. Microsoft verwerkt OneDrive-gegevens volgens de voorwaarden van je
Microsoft-account en je privacy-instellingen.

## 6. Opslag die je koppelt

Edendale kan video's afspelen vanaf servers die je zelf beheert en vanuit
cloudopslagaccounts die je koppelt. Welke diensten beschikbaar zijn, verschilt
per platform. In alle gevallen maakt Edendale rechtstreeks vanaf je apparaat
verbinding met de server of aanbieder; niets loopt via een server van BaBaSaMa.

Edendale vraagt de inhoud op van de mappen die je doorbladert of koppelt,
inclusief hun submappen, en leest de videobestanden die je afspeelt. Een
mapoverzicht bevat de namen, groottes en datums van elk item erin; Edendale
neemt alleen mappen en videobestanden op in zijn bibliotheek en negeert al het
andere. Edendale maakt nooit iets aan in je opslag en wijzigt, verplaatst, deelt
of verwijdert er nooit iets.

### 6.1 Je eigen servers

SMB, NFS, SFTP, WebDAV en S3-compatibele opslag (zoals Amazon S3, Backblaze B2,
Cloudflare R2, Wasabi of MinIO) worden bereikt via het adres dat je invoert. De
server — en bij een gehoste dienst de exploitant daarvan — ontvangt je
inloggegevens, de mapoverzichten en bestandsleesacties die Edendale opvraagt,
en gebruikelijke verbindingsgegevens, zoals je IP-adres. Hoe die informatie
wordt behandeld, bepaalt degene die de server beheert.

### 6.2 Aanmelden bij een cloudopslagaanbieder

Google Drive, Microsoft OneDrive en Dropbox gebruiken de eigen aanmeldpagina van
de aanbieder, die wordt geopend in je systeembrowser of in het beveiligde
aanmeldvenster van je besturingssysteem (OAuth 2.0 met PKCE). Edendale ziet je
wachtwoord nooit. Nadat je de gevraagde machtigingen hebt goedgekeurd, geeft de
aanbieder tokens terug aan Edendale op je apparaat, en vraagt Edendale de
aanbieder bij welk account ze horen, zodat het het account een label kan geven
in **Instellingen → Accounts**.

Op een tv kun je een Microsoft-aanmelding ook goedkeuren door op een ander
apparaat een code in te voeren, of op Apple TV het account goedkeuren vanaf je
iPhone of iPad, zoals beschreven in paragraaf 5.2.

In **Instellingen → Accounts** kun je gekoppelde accounts bekijken en
verwijderen. Een bron verwijderen meldt het bijbehorende account niet af, zodat
andere bronnen die dat account gebruiken blijven werken.

### 6.3 Google Drive en Google-gebruikersgegevens

Google Drive is in Edendale momenteel beschikbaar op Apple-platforms. Wordt het
beschikbaar op een ander platform, dan vraagt het daar dezelfde toegang en
behandelt het Google-gebruikersgegevens zoals in deze paragraaf beschreven.

**Machtigingen die Edendale vraagt**

| Machtiging (scope) | Waarom Edendale erom vraagt |
|---|---|
| `openid` en `email` | Om het Google-account te identificeren waarmee je bent aangemeld en het e-mailadres ervan te tonen in Instellingen → Accounts |
| `https://www.googleapis.com/auth/drive.readonly` ("Al je Google Drive-bestanden bekijken en downloaden") | Om je mappen te tonen zodat je er een kunt kiezen, de video's in mappen die je koppelt aan je bibliotheek toe te voegen en die video's af te spelen |

Edendale vraagt geen toestemming om Drive-bestanden aan te maken, te bewerken,
te verplaatsen, te delen of te verwijderen, en kan dat ook niet.

**Google-gebruikersgegevens waartoe Edendale toegang heeft**

- **Accountgegevens:** de unieke identificatie van je Google-account en je
  e-mailadres.
- **Metagegevens van bestanden en mappen** uit Mijn Drive, Gedeeld met mij en je
  gedeelde drives, beperkt tot de mappen die je in Edendale opent en de mappen
  die je koppelt (met hun submappen): van elk item de ID, de naam, het type
  (MIME-type), de grootte, het tijdstip van laatste wijziging en de videoduur
  die Google Drive doorgeeft; bij een snelkoppeling de ID en het type van het
  item waarnaar die verwijst; en de namen en ID's van je gedeelde drives.
- **Bestandsinhoud:** de inhoud van de videobestanden die je afspeelt, die
  tijdens het kijken in delen wordt gelezen.

Edendale vraagt alleen deze velden op. Het leest geen bestandsbeschrijvingen,
reacties, deelinstellingen, eigenaren of versiegeschiedenis. Het slaat Google
Documenten, Google Spreadsheets, Google Presentaties en andere
Google-bestandsindelingen over en opent geen enkel ander bestand dan een video
die je afspeelt.

**Hoe Edendale Google-gebruikersgegevens gebruikt**

Edendale gebruikt Google-gebruikersgegevens alleen om de Google Drive-functies
te leveren die je in Edendale gebruikt:

- je Drive-mappen tonen zodat je er een kunt kiezen;
- de video's in gekoppelde mappen aan je bibliotheek toevoegen en die bijwerken
  als je opnieuw scant, waarbij hun bestandsnamen op je apparaat worden
  geanalyseerd om titel, jaar, seizoen en aflevering te herkennen;
- een video streamen wanneer je die afspeelt; en
- het gekoppelde account een label geven en aangemeld houden.

Edendale gebruikt Google-gebruikersgegevens niet voor advertenties, verkoopt ze
niet, gebruikt ze niet om een profiel van je op te bouwen en gebruikt ze niet om
gegeneraliseerde modellen voor kunstmatige intelligentie of machine learning te
ontwikkelen, te verbeteren of te trainen. BaBaSaMa ontvangt je
Google-gebruikersgegevens nooit, dus niemand bij BaBaSaMa kan ze lezen.

**Hoe Google-gebruikersgegevens worden opgeslagen en beschermd**

- Het vernieuwingstoken, de identificatie van je Google-account, je e-mailadres
  en de machtigingen die je hebt verleend, worden bewaard in de beveiligde
  opslag van het platform voor inloggegevens (paragraaf 4.3). Op Apple-platforms
  kunnen ze via iCloud-sleutelhanger, die Apple met end-to-end-versleuteling
  beschermt, naar je eigen Apple-apparaten synchroniseren. Toegangstokens
  verlopen binnen een uur en worden alleen in het geheugen bewaard.
- De metagegevens van de videobestanden in gekoppelde mappen (ID, naam,
  grootte, datum en duur) worden samen met de titels die uit hun namen zijn
  herkend opgeslagen in de apparaatlokale bibliotheek van Edendale. Ze worden
  niet via iCloud gesynchroniseerd. De eigen back-up van je apparaat, zoals een
  iCloud-reservekopie of een back-up op een computer, kan ze bevatten,
  afhankelijk van je back-upinstellingen.
- Video-inhoud wordt tijdens het kijken alleen in een korte buffer in het
  geheugen gehouden. Die wordt nooit in de opslag bewaard of geüpload.
- Elke aanvraag aan Google gebruikt een versleutelde HTTPS-verbinding.

**Hoe Google-gebruikersgegevens worden gedeeld**

Edendale draagt geen Google-gebruikersgegevens over aan BaBaSaMa. Het deelt
Google-gebruikersgegevens alleen op de volgende manieren, telkens vanaf je
apparaat om een functie te leveren die je gebruikt:

- **TMDB** ontvangt de titel, het jaar en het seizoens- en afleveringsnummer die
  uit de bestandsnaam van een video zijn herkend, zodat je bibliotheek de
  bijpassende film- of seriegegevens kan tonen. TMDB ontvangt niet de
  bestandsnaam, de ID van het bestand, de inhoud ervan of de gegevens van je
  Google-account.
- **TheIntroDB** ontvangt, alleen als je overslaanknoppen inschakelt, de
  TMDB-identificatie van de herkende titel, het seizoens- en afleveringsnummer
  en de duur van de video (paragraaf 9).
- **Wyzie Subs** ontvangt, alleen wanneer je ondertitels zoekt, de
  TMDB-identificatie van de herkende titel en het seizoens- en
  afleveringsnummer (paragraaf 8).
- **Apple** bewaart en synchroniseert de inloggegevens van je Google-account,
  end-to-end versleuteld, als je iCloud-sleutelhanger gebruikt.
- Informatie kan worden verstrekt waar de toepasselijke wet of een geldige
  juridische procedure dit vereist.

**Bewaring en verwijdering**

- Verwijder een Google Drive-bron in Edendale om de video's ervan uit de
  bibliotheek op dat apparaat te verwijderen.
- Meld je af in **Instellingen → Accounts** om het Google-account en de tokens
  ervan te verwijderen van het apparaat en van je andere Apple-apparaten die het
  synchroniseren. Kies **Log uit en trek toegang in** om Google ook te vragen de
  toegang van Edendale te beëindigen; daarmee eindigt ook de toegang van een
  Apple TV die het account van je iPhone of iPad heeft ontvangen.
- Je kunt de toegang van Edendale op elk moment verwijderen via de pagina
  [Verbindingen met derden](https://myaccount.google.com/connections) van je
  Google-account. Daarna kan Edendale je Drive niet meer lezen.
- Als je Edendale verwijdert, wordt de apparaatlokale bibliotheek gewist. Op
  Apple-platforms kan een sleutelhangeritem achterblijven nadat je de app hebt
  verwijderd, dus meld je eerst af in Edendale of verwijder de toegang van
  Edendale bij Google.

**Beperkt gebruik**

Edendale houdt zich bij het gebruik van informatie die van Google API's is
ontvangen, en bij de overdracht daarvan naar andere apps, aan het
[Gebruikersgegevensbeleid voor Google API-services](https://developers.google.com/terms/api-services-user-data-policy),
inclusief de vereisten voor beperkt gebruik (Limited Use).

Google verwerkt je account- en Drive-gegevens volgens het
[privacybeleid van Google](https://policies.google.com/privacy). Het openen van
een YouTube-trailer (paragraaf 10) maakt geen gebruik van een Google-account dat
je voor Google Drive hebt gekoppeld.

### 6.4 Microsoft OneDrive

Edendale vraagt deze Microsoft Graph-machtigingen:

| Machtiging | Waarom Edendale erom vraagt |
|---|---|
| `User.Read` | Om het Microsoft-account te identificeren waarmee je bent aangemeld en het te tonen in Instellingen → Accounts |
| `Files.Read` | Om je mappen te tonen zodat je er een kunt kiezen, de video's in mappen die je koppelt aan je bibliotheek toe te voegen en die video's af te spelen |
| `offline_access` | Om aangemeld te blijven zonder het je elk uur opnieuw te vragen |

Edendale heeft toegang tot:

- **Accountgegevens:** de ID, de weergavenaam en het e-mailadres of de user
  principal name van je Microsoft-account, en de ID van je OneDrive.
- **Metagegevens van bestanden en mappen** voor de mappen die je opent of
  koppelt: van elk item de ID, de naam, de grootte, of het een bestand of map
  is, het tijdstip van laatste wijziging en de videoduur die OneDrive doorgeeft.
- **Bestandsinhoud:** de videobestanden die je afspeelt, gestreamd via
  kortlevende downloadlinks die OneDrive uitgeeft.

Edendale werkt met persoonlijke Microsoft-accounts en met werk- of
schoolaccounts. Bij een werk- of schoolaccount kan je organisatie zien dat je je
bij Edendale hebt aangemeld en die toegang volgens haar eigen beleid beheren of
vastleggen.

Afmelden in **Instellingen → Accounts** verwijdert het account en de tokens
ervan van het apparaat. Microsoft staat niet toe dat een app zijn eigen toegang
intrekt. Wil je die toegang bij Microsoft beëindigen, verwijder Edendale dan via
de pagina [app-machtigingen](https://account.live.com/consent/Manage) van je
persoonlijke account, of bij een werk- of schoolaccount via de portal Mijn apps
van je organisatie of via je beheerder. Microsoft verwerkt deze informatie
volgens de
[privacyverklaring van Microsoft](https://privacy.microsoft.com/privacystatement).

### 6.5 Dropbox

Edendale vraagt deze Dropbox-machtigingen:

| Machtiging | Waarom Edendale erom vraagt |
|---|---|
| `account_info.read` | Om het Dropbox-account te identificeren waarmee je bent aangemeld en het te tonen in Instellingen → Accounts |
| `files.metadata.read` | Om je mappen te tonen zodat je er een kunt kiezen, en de video's in mappen die je koppelt aan je bibliotheek toe te voegen |
| `files.content.read` | Om die video's af te spelen |

Edendale heeft toegang tot:

- **Accountgegevens:** je Dropbox-account-ID, weergavenaam en e-mailadres.
- **Metagegevens van bestanden en mappen** voor de mappen die je opent, en voor
  alles binnen een map die je koppelt (Dropbox geeft de hele structuur van een
  gekoppelde map in één keer weer): van elk item de ID, de naam, het pad, de
  grootte en het wijzigingstijdstip.
- **Bestandsinhoud:** de videobestanden die je afspeelt, gestreamd via
  tijdelijke links die na vier uur verlopen.

Afmelden in **Instellingen → Accounts** verwijdert het account en de tokens
ervan van het apparaat en vraagt Dropbox de toegang van Edendale in te trekken.
Je kunt Edendale ook verwijderen bij de
[gekoppelde apps](https://www.dropbox.com/account/connected_apps) van je
Dropbox. Dropbox verwerkt deze informatie volgens zijn
[privacybeleid](https://www.dropbox.com/privacy).

## 7. TMDB-aanvragen en optionele accountsynchronisatie

Edendale gebruikt TMDB voor catalogusaanvragen, beeldmateriaal, samenvattingen,
cast, beoordelingen, trailerverwijzingen en het verrijken van je bibliotheek.
Bij gebruik van deze functies worden de zoektekst en de afgeleide titelgegevens
naar TMDB gestuurd. Dat geldt ook voor bestanden van servers en uit
cloudopslag: TMDB ontvangt de titelgegevens die uit een bestandsnaam zijn
herkend, nooit de bestandsnaam, de locatie ervan of je opslagaccount. De
aanvragen gaan rechtstreeks van je apparaat naar TMDB; ze lopen niet via een
server van BaBaSaMa. TMDB kan gebruikelijke verbindingsgegevens ontvangen, zoals
een IP-adres en apparaat- of aanvraagdetails.

Koppel je je TMDB-account, dan kan Edendale op jouw aangeven je TMDB-favorieten,
kijklijst en beoordelingen lezen en bijwerken. Je afspeelpositie en
kijkgeschiedenis worden niet naar TMDB gestuurd.

TMDB verwerkt informatie volgens zijn
[privacybeleid](https://www.themoviedb.org/privacy-policy) en
[API-voorwaarden](https://www.themoviedb.org/api-terms-of-use).

## 8. Ondertitels zoeken

Edendale kan ondertitels zoeken via **Wyzie Subs** (`sub.wyzie.io`, beheerd door
Wyzie). Er wordt alleen een aanvraag gedaan als je tijdens het afspelen het
ondertitelpaneel opent en een zoekopdracht start; er wordt niets verstuurd
louter omdat een video speelt.

Wanneer je een zoekopdracht start, stuurt Edendale de TMDB-identificatie van de
titel, bij een aflevering het seizoens- en afleveringsnummer, de ondertiteltaal
die je hebt gekozen, de door jou ingestelde filters voor formaat en
slechthorenden, en een API-sleutel — die in je build zit of die je zelf in de
instellingen hebt ingevoerd. Je bestandsnaam, bestandspad, videogegevens en
bibliotheek worden niet verstuurd. Wyzie kan gebruikelijke verbindingsgegevens
ontvangen, zoals een IP-adres.

Kies je een resultaat, dan downloadt Edendale dat ondertitelbestand van Wyzie of
van de locatie waarnaar wordt verwezen en bewaart het op je apparaat, zodat het
opnieuw kan worden aangeboden zonder nieuwe download wanneer dezelfde video
wordt afgespeeld. Edendale legt op het apparaat vast bij welke video de
ondertitel hoort: de titel waarmee hij overeenkwam en de bestandsnaam van de
video. Op Apple-platforms en Windows wordt een gedownloade ondertitel die
ongeveer een maand niet is gebruikt automatisch verwijderd; op Windows kun je
dit uitschakelen in Instellingen → Ondertiteling.

Wyzie verwerkt informatie volgens zijn eigen voorwaarden en privacypraktijken,
buiten de invloed van BaBaSaMa. Je kunt elk contact met Wyzie volledig vermijden
door geen ondertitelzoekopdracht te starten.

## 9. Overslaanknoppen

Edendale kan de knoppen **Sla intro over**, **Sla samenvatting over** en **Sla
aftiteling over** tonen met behulp van door de community verzamelde
tijdstempels van **TheIntroDB** (`api.theintrodb.org`). Overslaanknoppen staan
standaard uit; je kunt ze inschakelen in de afspeelinstellingen van Edendale of
in de aanpassingen van de speler. Er wordt nooit iets overgeslagen tenzij je op
de knop drukt.

Als overslaanknoppen zijn ingeschakeld en je een titel afspeelt waarvoor
Edendale een overeenkomst in TMDB heeft gevonden, stuurt Edendale TheIntroDB de
TMDB-identificatie van de titel — bij een aflevering de identificatie van de
serie met het seizoens- en afleveringsnummer — en de duur van de video, zodat
TheIntroDB tijdstempels kan teruggeven die bij jouw versie passen. Er wordt geen
account, API-sleutel, bestandsnaam, bestandspad, videogegevens of bibliotheek
verstuurd. TheIntroDB ontvangt gebruikelijke verbindingsgegevens, zoals je
IP-adres. Bestanden waarvoor Edendale geen overeenkomst heeft gevonden, worden
nooit opgezocht.

De tijdstempels worden alleen in het geheugen bewaard zolang de video speelt. Ze
worden niet opgeslagen in je bibliotheek, je kijkvoortgang of gesynchroniseerde
opslag. TheIntroDB verwerkt informatie volgens zijn
[privacybeleid](https://theintrodb.org/docs/privacy) en
[voorwaarden](https://theintrodb.org/docs/terms).

## 10. Trailers afspelen

Edendale neemt geen contact op met YouTube louter omdat er een trailer
beschikbaar is. Een trailer start nooit vóór jouw handeling.

Kies je uitdrukkelijk om een trailer te bekijken, dan openen de Apple- en
Android-builds een YouTube-insluiting met verbeterde privacy
(`youtube-nocookie.com`), en geeft Windows de trailer door aan je
systeembrowser, zodat de app zelf geen aanroep naar YouTube doet. Google en
YouTube kunnen vervolgens verbindings-, apparaat-, verwijzings-, kijk- en
advertentiegegevens verwerken onder het
[privacybeleid van Google](https://policies.google.com/privacy) en de
YouTube-voorwaarden. De modus met verbeterde privacy beperkt een deel van het
datagebruik van YouTube; hij maakt de aanvraag niet anoniem en een ingesloten
video kan advertenties tonen.

## 11. Rapportage van platforms en stores

Edendale bevat zelf op geen enkel platform analyse-, telemetrie- of
crashrapportagecode. Het Apple-privacymanifest verklaart geen verzamelde
gegevenstypen en geen tracking.

Los van Edendale kan het platform of de store waaruit je installeert BaBaSaMa
geaggregeerde rapporten over de app verstrekken. Die gegevens komen van het
platform, niet uit iets dat Edendale verstuurt, en je beheert ze via het
platform:

- **Apple.** App Store Connect kan geaggregeerde analyses en crashrapporten voor
  App Store-builds leveren. Apple neemt de gegevens van jouw apparaat alleen mee
  als je **Deel met app-ontwikkelaars** hebt ingeschakeld bij Instellingen →
  Privacy en beveiliging → Analyse en verbeteringen. Uitschakelen stopt dit.
- **Android.** Waar Edendale via Google Play wordt verspreid, kan Play Console
  crash- en ANR-rapporten ("app reageert niet") en geaggregeerde
  kwaliteitsstatistieken leveren. Je beheert dit via Instellingen → Google →
  Gebruik en diagnostische gegevens en via de keuze die je krijgt bij het melden
  van een crash.
- **Windows.** Waar Edendale via de Microsoft Store wordt verspreid, kan Partner
  Center geaggregeerde rapporten over gezondheid en gebruik leveren. Windows-
  diagnostische gegevens beheer je bij Instellingen → Privacy en beveiliging →
  Diagnostische gegevens en feedback.
- **Directe downloads.** Waar Edendale als directe download via GitHub wordt
  verspreid, ontvangt GitHub het downloadverzoek en meldt het BaBaSaMa alleen
  geaggregeerde downloadaantallen.

Deze rapporten zijn geaggregeerd of diagnostisch. Ze vertellen BaBaSaMa niet wat
je hebt gekeken, wat er in je bibliotheek of opslag staat of wie je bent.

## 12. Hoe informatie wordt gebruikt

| Doel | Informatie | Gebruikelijke grondslag waar vereist |
|---|---|---|
| Media indexeren en afspelen die je selecteert | Media- en bibliotheekgegevens | Uitvoering van de door jou gevraagde Dienst |
| Bestanden van servers en cloudopslag die je koppelt weergeven, indexeren en afspelen | Mapoverzichten, bestandsmetagegevens en bestandsinhoud van die bron | Uitvoering van de door jou gevraagde Dienst |
| Aanmelden bij een gekoppeld opslagaccount en het een label geven | Accountidentificatie, e-mailadres, weergavenaam en tokens | Jouw verzoek of toestemming |
| TMDB-metagegevens en zoekresultaten ophalen | Zoektekst en afgeleide titelgegevens | Uitvoering van de Dienst; gerechtvaardigd belang |
| Een door jou gevraagde ondertitel vinden en downloaden | TMDB-identificatie, seizoen en aflevering, taal- en filterkeuzes | Jouw verzoek |
| Overslaanknoppen tonen die je hebt ingeschakeld | TMDB-identificatie, seizoen en aflevering, videoduur | Jouw verzoek of toestemming |
| Voortgang, voorkeuren en beoordelingen bewaren | Persoonlijke registraties | Uitvoering van de Dienst |
| Gegevens synchroniseren via je platformaccount | Kijkgegevens en persoonlijke registraties | Jouw verzoek of toestemming; uitvoering van de Dienst |
| Verbinden met een optioneel TMDB-account of een server | Accounttoken of serverinloggegevens | Jouw verzoek of toestemming |
| Supportvragen beantwoorden | Contactgegevens en berichtinhoud | Gerechtvaardigd belang; door jou gevraagde stappen |
| De apps onderhouden en verbeteren | Geaggregeerde platform- of storerapporten | Gerechtvaardigd belang bij kwaliteit en stabiliteit |

Berust een verwerking op toestemming, dan kun je die intrekken door je af te
melden bij het betreffende account of het los te koppelen, de bron te
verwijderen, de functie uit te schakelen of de platformmachtigingen te wijzigen.

## 13. Delen en dienstverleners

BaBaSaMa verkoopt je informatie niet. Omdat BaBaSaMa geen server voor Edendale
beheert, wordt informatie alleen verstrekt voor zover nodig:

- aan **TMDB** wanneer je zoekt, een titel verrijkt, metagegevens laadt of een
  optioneel gekoppeld TMDB-account gebruikt;
- aan **Google**, **Microsoft** of **Dropbox** wanneer je een Google Drive-,
  OneDrive- of Dropbox-account koppelt en gebruikt (paragraaf 6);
- aan de server die je kiest wanneer je een SMB-, NFS-, SFTP-, WebDAV- of
  S3-compatibele bron koppelt;
- aan **Wyzie** wanneer je een ondertitelzoekopdracht start;
- aan **TheIntroDB** zolang overslaanknoppen zijn ingeschakeld;
- aan **Apple**, **Google** of **Microsoft** wanneer je hun opslag-, back-up-,
  inloggegevens- of synchronisatiediensten inschakelt of gebruikt, of wanneer zij
  de in paragraaf 11 beschreven geaggregeerde rapporten leveren;
- aan **YouTube/Google** nadat je uitdrukkelijk een trailer hebt geopend;
- aan **GitHub**, dat de website en eventuele directe downloads levert; en
- waar de toepasselijke wet of een geldige juridische procedure dit vereist.

Elk van deze organisaties verwerkt informatie als zelfstandig
verwerkingsverantwoordelijke onder haar eigen voorwaarden en privacybeleid.
Geen van hen treedt op als verwerker in opdracht van BaBaSaMa, en BaBaSaMa
ontvangt geen kopie van wat zij verzamelen, afgezien van de in paragraaf 11
beschreven geaggregeerde rapporten.

## 14. Bewaring en verwijdering

- **Website:** er valt niets te verwijderen. De site gebruikt geen cookies of
  browseropslag. Aanvraaggegevens die GitHub bereiken, worden bewaard volgens
  het beleid van GitHub en zijn voor BaBaSaMa niet beschikbaar.
- **Lokale opslag van de apps:** een bron of registratie verwijderen raakt de
  lokale bibliotheekindex; het verwijdert niet noodzakelijk kijk- of
  accountgegevens. App-gegevens wissen kan de lokale container verwijderen
  volgens de instellingen van dat platform. Gedrag bij verwijderen, back-up en
  herstel verschilt per platform en verwijdert niet noodzakelijk cloud- of
  back-upkopieën.
- **Gekoppelde servers en cloudopslagaccounts:** een bron verwijderen haalt de
  bestanden ervan uit de bibliotheek, maar behoudt de aanmelding of het account,
  zodat andere bronnen die kunnen gebruiken. Meld je af of verwijder de
  opgeslagen aanmelding in **Instellingen → Accounts** om die te wissen.
  Afmelden verwijdert niets uit je opslag; gebruik de instellingen van de
  aanbieder uit paragraaf 6 om de toegang van Edendale bij een cloudaanbieder te
  beëindigen.
- **Apple:** privé-CloudKit-records en gesynchroniseerde
  iCloud-sleutelhangeritems kunnen na verwijdering van de app blijven bestaan.
  Beheer ze via de beschikbare iCloud-, sleutelhanger-, app- of
  apparaatinstellingen. Edendale biedt op dit moment geen enkele
  platformoverkoepelende knop om alles te wissen.
- **Android:** een platformback-up of apparaatoverdrachtkopie kan blijven bestaan
  volgens de instellingen en bewaartermijnen van Google, je apparaatfabrikant of
  je back-upaanbieder. Watch Next-rijen op het startscherm van een Android TV
  worden verwijderd wanneer je de instelling uitzet.
- **Windows:** een replica in je OneDrive-map `Apps/Edendale` blijft bestaan
  totdat je die via OneDrive en de eventuele prullenbak- of herstelfuncties
  verwijdert.
- **Gedownloade ondertitels** blijven op je apparaat tot je ze verwijdert of, op
  Apple-platforms en Windows, tot ze ongeveer een maand niet zijn gebruikt.
  Wyzie houdt voor jou geen account bij; eventuele aanvraaglogboeken vallen
  onder Wyzie.
- **Tijdstempels voor overslaanknoppen** worden verwijderd wanneer het afspelen
  stopt. Eventuele aanvraaglogboeken van TheIntroDB vallen onder TheIntroDB.
- Een gekoppeld TMDB-account bewaart informatie volgens de instellingen en het
  beleid van TMDB. Edendale loskoppelen verwijdert niet automatisch informatie
  die al in je TMDB-account staat; beheer die gegevens via TMDB.
- Supportcorrespondentie wordt alleen bewaard zolang dat redelijkerwijs nodig is
  om te reageren, een supportdossier bij te houden of aan wettelijke
  verplichtingen te voldoen.

Omdat BaBaSaMa doorgaans geen toegang heeft tot informatie die alleen op je
apparaat of in een privéplatformaccount staat, gebruik je de hierboven genoemde
platformspecifieke instellingen. Een privacyverzoek aan BaBaSaMa kan informatie
waartoe BaBaSaMa geen toegang heeft niet rechtstreeks wissen.

## 15. Internationale doorgiften

GitHub, TMDB, Wyzie, TheIntroDB, Apple, Google, Microsoft en Dropbox kunnen
informatie verwerken in andere landen dan het jouwe. Hun privacyverklaringen
beschrijven de waarborgen die zij voor internationale doorgiften hanteren.
BaBaSaMa geeft je informatie niet zelf door, omdat BaBaSaMa die niet ontvangt.

## 16. Beveiliging

Edendale gebruikt versleutelde verbindingen voor TMDB, Wyzie, TheIntroDB en elke
cloudopslagaanbieder, en bewaart inloggegevens in de beveiligde opslag van het
platform. Aanmelden bij de cloud gebeurt met OAuth 2.0 met PKCE op de eigen
pagina van de aanbieder, zodat Edendale nooit met je cloudwachtwoord in
aanraking komt, en toegangstokens blijven in het geheugen. Edendale pint de
hostsleutel van elke SFTP-server vast en vraagt het je voordat het een
gewijzigde sleutel vertrouwt.

Een verbinding met je eigen server is maar zo privé als het protocol en de
configuratie toelaten. SFTP- en HTTPS-verbindingen zijn versleuteld; NFS,
WebDAV via `http://` en sommige SMB-configuraties niet, dus gebruik die alleen op
een netwerk dat je vertrouwt.

De Dienst houdt videogegevens en persoonlijke registraties bewust buiten opslag
die de ontwikkelaar beheert — die bestaat niet. Geen enkele
beveiligingsmaatregel biedt absolute bescherming, dus bescherm je apparaat, je
platformaccounts, je cloudopslagaccounts, je servers en je back-ups.

## 17. Privacy van kinderen

Edendale is een mediahulpmiddel voor een algemeen publiek en is niet gericht op
kinderen onder de 13 jaar. BaBaSaMa verzamelt via Edendale niet bewust
persoonsgegevens van kinderen. Een ouder of voogd die vermoedt dat een kind
persoonsgegevens naar BaBaSaMa heeft gestuurd, kan contact met ons opnemen om
verwijdering te vragen.

## 18. Je privacyrechten

Afhankelijk van waar je woont, heb je mogelijk recht op informatie en op inzage,
rectificatie, verwijdering, beperking, overdraagbaarheid of bezwaar, en het
recht toestemming in te trekken of een klacht in te dienen bij een
toezichthoudende autoriteit.

Vrijwel alle Edendale-informatie staat onder je directe controle, omdat die op
je apparaat, in je platformaccount of bij de opslagaanbieder die je hebt gekozen
blijft. Je kunt de toegang van Edendale tot een cloudopslagaccount op elk moment
beëindigen met de instellingen uit paragraaf 6. Voor informatie die BaBaSaMa wél
heeft, zoals een supportbericht, mail je **long@babasama.com**. We hebben
mogelijk voldoende gegevens nodig om je verzoek te verifiëren en te
beantwoorden.

## 19. Wijzigingen in dit beleid

We kunnen dit beleid bijwerken wanneer functies, platforms, aanbieders of
wettelijke verplichtingen van Edendale veranderen. We passen dan de datum
**Laatst bijgewerkt** aan en informeren waar passend aanvullend. Wezenlijk
andere verwerkingen worden niet met terugwerkende kracht toegepast waar
toestemming of een andere grondslag vereist is.

## 20. Contact

Vragen, privacyverzoeken of klachten kun je sturen naar:

- **BaBaSaMa**
- **long@babasama.com**
