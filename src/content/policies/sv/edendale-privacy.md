---
title: "Integritetspolicy"
app: "Edendale"
lastUpdated: "5 oktober 2026"
lastUpdatedLabel: "Senast uppdaterad"
contentLanguage: "sv"
draft: false
---

## 1. Inledning och omfattning

Den här integritetspolicyn förklarar hur **Edendale** hanterar information när du
använder ett officiellt Edendale-program eller Edendales webbplats
(tillsammans "**Tjänsten**").

Edendale är en lokal videospelare och en personlig tittarlogg. Du kan spela upp
media som du själv väljer — från din enhet, från servrar du driver eller från
molnlagringskonton du kopplar — bygga ett privat bibliotek, berika titlar med
information från The Movie Database ("**TMDB**"), söka undertexter, visa valfria
hoppa över-knappar och föra egna tittaranteckningar. Edendale tillhandahåller,
lagrar eller laddar inte upp filmer eller tv-avsnitt åt dig.

Edendales webbplats är en informationssida. Den beskriver programmen, länkar till
projektets källkod och svarar på applänkar så att en delad Edendale-länk kan
öppnas i ett installerat program. Den är ingen videospelare, den har inga konton
och den lagrar ingenting om dig.

Policyn gäller officiella byggen och den officiella webbplatsen. Fristående
förgreningar och egenhostade kopior styrs av sina respektive operatörer och kan
hantera information annorlunda.

## 2. Personuppgiftsansvarig

Operatören som ansvarar för den officiella Tjänsten är:

- **BaBaSaMa**
- E-post: **long@babasama.com**

## 3. Sammanfattning: lokalt först

Edendale är utformat för att samla in så lite data som möjligt:

- Du behöver inget Edendale-konto.
- BaBaSaMa driver varken server, databas eller proxy för Edendale. Det finns
  ingenstans dit dina biblioteks-, tittar-, fil- eller kontouppgifter kan
  skickas till oss.
- Dina video- och undertextfiler laddas inte upp till BaBaSaMa eller till någon
  tredje part.
- När du kopplar Google Drive, Microsoft OneDrive eller Dropbox loggar du in
  direkt hos den leverantören, och Edendale begär endast läsåtkomst. Dina filer
  och inloggningstoken färdas bara mellan din enhet och den leverantören.
- Edendale innehåller ingen annonsering, marknadsanalys, kraschrapportering eller
  beteendespårning på någon plattform. YouTube kan visa annonser efter att du valt
  att öppna en trailer.
- BaBaSaMa säljer eller hyr inte ut personuppgifter.
- Biblioteksindexet och dina personliga uppgifter lagras på din enhet eller i
  lagring som hör till ditt eget plattformskonto, enligt beskrivningen nedan.
- Nätverksåtkomst begränsas till de funktioner du använder: TMDB-metadata och
  valfri kontosynkronisering, de servrar och lagringskonton du kopplar,
  undertextsökning som du startar, hoppa över-knappar om du slår på dem,
  plattformens lagring eller synkronisering, samt en trailer som du uttryckligen
  öppnar.

En valfri koppling till ett TMDB-, Google-, Microsoft- eller Dropbox-konto är ett
konto hos den leverantören, inte ett Edendale-konto.

## 4. Information som Edendale hanterar

### 4.1 Media och biblioteksinformation

När du väljer en fil eller mapp, eller kopplar en server eller en mapp i
molnlagring, kan Edendale behandla:

- fil- och mappnamn,
- relativa sökvägar, plattformens filidentifierare, säkerhetsavgränsade
  bokmärken eller de identifierare som en lagringsleverantör tilldelar varje fil
  och mapp,
- filtyp, storlek och ändringsdatum, och en videos speltid där
  lagringsleverantören anger den,
- titel, utgivningsår, serienamn, säsongsnummer och avsnittsnummer som tolkats ur
  ett filnamn,
- adressen till en server du kopplar och leverantör, konto och mapp för en
  molnlagringskälla, samt
- TMDB-identifierare, bildlänkar, handling, skådespelare, speltid och andra
  metadata som berikar ditt lokala bibliotek.

Tolkningen av filnamn sker lokalt, före varje metadataförfrågan. Därefter kan
Edendale skicka en tolkad film- eller serietitel, ett årtal, ett säsongs- eller
avsnittsnummer till TMDB för att hitta matchande metadata. Själva filnamnet
skickas inte.

Dina video- och undertextdata stannar på den plats du valt och läses för
uppspelning. När en video kommer från en server eller molnlagring läser Edendale
de delar som behövs medan du tittar och håller en kort förinläsningsbuffert i
minnet; ingen kopia av videon sparas. Videor laddas inte upp till BaBaSaMa eller
till någon tredje part.

### 4.2 Tittarhistorik och personliga uppgifter

Beroende på funktion och plattform kan Edendale lagra:

- uppspelningsposition, sedd speltid, slutförandestatus och tidpunkt för senaste
  visning,
- favoriter och val i tittarlistan,
- ditt eget betyg,
- spelar- och gränssnittsinställningar, till exempel undertextspråk och filtret
  för hörselnedsättning, undertexternas utseende, hopplängder och hastigheter vid
  nedhållning, ljud- och bildjusteringar samt det ljudspår, den undertext och den
  hastighet du senast valde för en titel,
- en förteckning över de undertexter du hämtat och vilken video var och en hör
  till, samt
- en begränsad visningsögonblicksbild, till exempel en titel eller en
  affischreferens, som används för hemskärmswidgetar, "fortsätt titta"-rader och,
  om du slår på det, Android TV:s hemskärm.

De här uppgifterna är till för ditt personliga bruk.

### 4.3 Inloggningsuppgifter och kontoinformation

Edendale lagrar alla inloggningsuppgifter i plattformens skyddade lagring för
inloggningsuppgifter: nyckelringen på Apple-plattformar, en krypterad lagring med
stöd av Android Keystore på Android och DPAPI i Windows. Inloggningsuppgifter
skrivs aldrig in i ditt bibliotek, i sparade länkar eller i loggar och skickas
aldrig till BaBaSaMa.

- **TMDB-konto.** Om du kopplar ett valfritt TMDB-konto får Edendale en
  åtkomsttoken och en TMDB-kontoidentifierare för att synkronisera de favoriter,
  tittarlisteposter och betyg som stöds.
- **Servrar du kopplar.** För en lösenordsskyddad SMB-resurs, SFTP-server eller
  WebDAV-server lagrar Edendale serverns adress, användarnamn och lösenord. För
  S3-kompatibel lagring lagras åtkomstnyckelns ID och den hemliga
  åtkomstnyckeln. För en SFTP-server lagras även fingeravtrycket för serverns
  värdnyckel, så att du kan varnas om nyckeln ändras. Dessa inloggningsuppgifter
  skickas bara till den server du kopplat.
- **Molnlagringskonton.** När du kopplar Google Drive, Microsoft OneDrive eller
  Dropbox lagrar Edendale en uppdateringstoken, kontoidentifieraren, den
  e-postadress och det visningsnamn som leverantören returnerar samt de
  behörigheter du beviljat. Kortlivade åtkomsttoken hålls bara i minnet.
  Avsnitt 6 beskriver vad varje leverantör delar med Edendale.
- **Nyckel för undertexttjänsten.** Om du anger en egen API-nyckel för
  undertexttjänsten skickas den endast till undertexttjänsten som beskrivs i
  avsnitt 8.

På Apple-plattformar kan dessa inloggningsuppgifter synkroniseras via
iCloud-nyckelringen om du har aktiverat synkronisering av nyckelringen, enligt
beskrivningen i avsnitt 5.2.

### 4.4 Supportmeddelanden

Om du kontaktar BaBaSaMa får vi den adress du använder, ditt meddelande och den
information eller det diagnostikmaterial du väljer att bifoga. Skicka inte
videofiler, lösenord, åtkomsttoken eller annat känsligt material.

## 5. Var informationen lagras

### 5.1 Edendales webbplats

Webbplatsen består av statiska sidor som publiceras via **GitHub Pages**, en
tjänst från GitHub, Inc. (ett Microsoft-bolag). Den innehåller inga konton, inga
kakor, ingen webbläsarlagring, ingen analys och inga skript, teckensnitt eller
bilder från tredje part. Ditt språkval härleds ur de språkinställningar webbläsaren
ändå skickar och registreras inte.

För att leverera en sida tar GitHub oundvikligen emot vanlig förfrågningsinformation
som din IP- eller nätverksadress, den begärda sökvägen, en tidsstämpel, din
user agent-sträng och andra vanliga HTTP-huvuden. GitHub behandlar den
informationen som självständigt personuppgiftsansvarig enligt
[GitHubs integritetspolicy](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement).
GitHub Pages ger inte webbplatsägaren några åtkomstloggar, så BaBaSaMa tar inte
emot, lagrar eller analyserar besöksdata.

Webbplatsens applänkssidor (`/search`, `/media`, `/library`, `/play`) finns för att
en Edendale-länk ska öppnas i ett installerat program. En identifierare i en sådan
länk hanteras av din enhet och det installerade programmet; webbplatsen skickar den
inte vidare någonstans.

### 5.2 Apple-plattformar

Det lokala biblioteksindexet — inklusive filsökvägar, säkerhetsavgränsade
bokmärken samt namn och identifierare för filer från kopplade servrar och
molnlagring — stannar i en enhetslokal lagring och är uttryckligen undantaget
från CloudKit-spegling. Hämtade undertexter och uppgiften om vilken video var och
en hör till sparas också bara på enheten.

Uppspelningsförlopp och val per titel — favoriter, tittarlistemedlemskap och betyg
— lagras i Edendales privata iCloud-container så att de kan visas på dina
Apple-enheter. Dessa poster identifierar titlar med deras TMDB-identifierare; de
innehåller inga filnamn, sökvägar eller identifierare från lagringsleverantörer.

Inloggningsuppgifter för TMDB, servrar, molnlagringskonton och undertexttjänsten
kan synkroniseras via iCloud-nyckelringen, så att en enda inloggning kan räcka
för din iPhone, iPad, Mac och Apple Vision Pro. Apple TV tar inte emot objekt
från iCloud-nyckelringen. För att koppla ett konto eller en server på Apple TV
kan du godkänna det på en iPhone eller iPad i närheten som har Edendale
installerat och är inloggad på ditt Apple-konto eller på Apple-kontot för en
medlem i din Familjedelning. Kontot skickas direkt mellan de två enheterna över
en krypterad anslutning i det lokala nätverket och passerar inte via BaBaSaMa.
Apple behandlar iCloud-information enligt sin
[integritetspolicy](https://www.apple.com/legal/privacy/) och dina
iCloud-inställningar.

### 5.3 Android

Android lagrar Edendales bibliotek och personliga uppgifter i appens lokala
lagring. Beroende på dina inställningar för säkerhetskopiering och enhetsöverföring
kan operativsystemet ta med behörig appdata i plattformens säkerhetskopia eller i
en enhetsöverföring. Edendales säkerhetskopieringsregler undantar dess skyddade
lagringar — TMDB-sessionen, serverinloggningar, SFTP-värdnycklar,
molnlagringskonton och undertextnyckeln — både från molnsäkerhetskopiering och
från enhetsöverföring, eftersom nycklarna som skyddar dem aldrig lämnar enheten.
Skydd och lagringstid för säkerhetskopior beror på din Android-version, enhet,
konto och leverantör av säkerhetskopiering.

På Android TV och Google TV är **Fortsätt titta på hemskärmen** avstängt som
standard. Om du slår på det skriver Edendale namn, bild och position för varje
påbörjad titel, eller en series nästa avsnitt, till hemskärmens Watch Next-rad
via systemets tv-dataleverantör. Raderna stannar på tv:n och Edendale skickar
ingenting över nätverket för dem, men hemskärmsappen (Googles app på Google TV)
kan läsa dem. Om du stänger av inställningen tas de bort.

### 5.4 Windows

Windows lagrar biblioteksindexet, uppspelningsförlopp, favoriter,
tittarlisteposter, betyg och spelarinställningar i appens lokala lagring. När
OneDrive är konfigurerat på enheten lägger Edendale en kopia av din
tittarhistorik och dina personliga uppgifter i din egen OneDrive-mapp
`Apps/Edendale`, så att en andra inloggad dator får samma innehåll. Utan OneDrive
förblir appen helt lokal. Inloggningsuppgifter och hämtade undertexter stannar på
enheten och ingår aldrig i kopian. Ett OneDrive-konto som du kopplar som
lagringskälla (avsnitt 6.4) är skilt från den här kopian: att logga ut kontot
lämnar kopian orörd, och att stänga av kopian lämnar källan orörd. Microsoft
behandlar OneDrive-data enligt villkoren för ditt Microsoft-konto och dina
integritetsinställningar.

## 6. Lagring du kopplar

Edendale kan spela upp videor från servrar du driver och från molnlagringskonton
du kopplar. Vilka tjänster som finns skiljer sig mellan plattformar. I samtliga
fall ansluter Edendale direkt från din enhet till servern eller leverantören;
ingenting passerar via en server hos BaBaSaMa.

Edendale listar innehållet i de mappar du bläddrar i eller kopplar, inklusive
deras undermappar, och läser de videofiler du spelar upp. En mapplistning
innehåller namn, storlek och datum för varje objekt i mappen; Edendale behåller
bara mappar och videofiler i sitt bibliotek och ignorerar allt annat. Edendale
skapar, ändrar, flyttar, delar eller raderar aldrig något i din lagring.

### 6.1 Dina egna servrar

SMB, NFS, SFTP, WebDAV och S3-kompatibel lagring (till exempel Amazon S3,
Backblaze B2, Cloudflare R2, Wasabi eller MinIO) nås på den adress du anger.
Servern — och, för en hostad tjänst, dess operatör — tar emot din inloggning, de
mapplistningar och filläsningar som Edendale begär samt vanlig
anslutningsinformation som din IP-adress. Den som driver servern bestämmer hur
den hanterar informationen.

### 6.2 Logga in hos en molnlagringsleverantör

Google Drive, Microsoft OneDrive och Dropbox använder leverantörens egen
inloggningssida, som öppnas i din systemwebbläsare eller i operativsystemets
säkra inloggningsfönster (OAuth 2.0 med PKCE). Edendale ser aldrig ditt lösenord.
När du har godkänt de begärda behörigheterna returnerar leverantören token till
Edendale på din enhet, och Edendale frågar leverantören vilket konto de hör till
så att kontot kan märkas i **Inställningar → Konton**.

På en tv kan du i stället godkänna en Microsoft-inloggning genom att ange en kod
på en annan enhet, eller, på Apple TV, godkänna kontot från din iPhone eller iPad
enligt beskrivningen i avsnitt 5.2.

Du kan se och ta bort kopplade konton i **Inställningar → Konton**. Att ta bort
en källa loggar inte ut dess konto, så andra källor som använder kontot fortsätter
att fungera.

### 6.3 Google Drive och Googles användardata

Google Drive är för närvarande tillgängligt i Edendale på Apple-plattformar. Om
det blir tillgängligt på en annan plattform kommer det att begära samma åtkomst
och hantera Googles användardata enligt beskrivningen i det här avsnittet.

**Behörigheter som Edendale begär**

| Behörighet (omfång) | Varför Edendale begär den |
|---|---|
| `openid` och `email` | För att identifiera det Google-konto du loggade in med och visa dess e-postadress i Inställningar → Konton |
| `https://www.googleapis.com/auth/drive.readonly` ("Se och ladda ned alla dina filer på Google Drive") | För att visa dina mappar så att du kan välja en, lägga till videorna i mappar du kopplar i ditt bibliotek och spela upp de videorna |

Edendale begär inte behörighet att skapa, redigera, flytta, dela eller radera
filer på Drive och kan inte göra det.

**Googles användardata som Edendale får åtkomst till**

- **Kontoinformation:** ditt Google-kontos unika identifierare och din
  e-postadress.
- **Metadata för filer och mappar** från "Min enhet", "Delas med mig" och dina
  delade enheter, begränsat till de mappar du öppnar i Edendale och de mappar du
  kopplar (med deras undermappar): varje objekts ID, namn, typ (MIME-typ),
  storlek och senaste ändringstid, och den videospeltid som Google Drive anger;
  för en genväg ID och typ för det objekt den pekar på; samt namn och ID för dina
  delade enheter.
- **Filinnehåll:** innehållet i de videofiler du spelar upp, som läses i delar
  medan du tittar.

Edendale begär endast dessa fält. Det läser inte filbeskrivningar, kommentarer,
delningsinställningar, ägare eller versionshistorik. Det hoppar över Google
Dokument, Google Kalkylark, Google Presentationer och andra Google-filformat och
öppnar ingen annan fil än en video du spelar upp.

**Hur Edendale använder Googles användardata**

Edendale använder Googles användardata endast för att tillhandahålla de Google
Drive-funktioner du använder i Edendale:

- att visa dina Drive-mappar så att du kan välja en,
- att lägga till videorna i kopplade mappar i ditt bibliotek och uppdatera det
  när du skannar om, vilket inkluderar att tolka deras filnamn på din enhet för
  att känna igen titel, år, säsong och avsnitt,
- att strömma en video när du spelar upp den, samt
- att märka det kopplade kontot och hålla det inloggat.

Edendale använder inte Googles användardata för annonsering, säljer dem inte,
använder dem inte för att skapa en profil av dig och använder dem inte för att
utveckla, förbättra eller träna generaliserade modeller för artificiell
intelligens eller maskininlärning. BaBaSaMa tar aldrig emot dina
Google-användardata, så ingen person hos BaBaSaMa kan läsa dem.

**Hur Googles användardata lagras och skyddas**

- Uppdateringstoken, din Google-kontoidentifierare, din e-postadress och de
  behörigheter du beviljat lagras i plattformens skyddade lagring för
  inloggningsuppgifter (avsnitt 4.3). På Apple-plattformar kan de synkroniseras
  till dina egna Apple-enheter via iCloud-nyckelringen, som Apple skyddar med
  totalsträckskryptering. Åtkomsttoken upphör att gälla inom en timme och hålls
  bara i minnet.
- Metadata för videofilerna i kopplade mappar (ID, namn, storlek, datum och
  speltid), tillsammans med de titlar som känts igen ur deras namn, lagras i
  Edendales enhetslokala bibliotek. De synkroniseras inte via iCloud. Din enhets
  egen säkerhetskopia, till exempel iCloud-säkerhetskopiering eller en
  säkerhetskopia på en dator, kan inkludera dem beroende på dina inställningar
  för säkerhetskopiering.
- Videoinnehåll hålls bara i en kort buffert i minnet medan du tittar. Det sparas
  aldrig till lagring och laddas aldrig upp.
- Alla förfrågningar till Google använder en krypterad HTTPS-anslutning.

**Hur Googles användardata delas**

Edendale överför inte Googles användardata till BaBaSaMa. Googles användardata
delas endast på följande sätt, alltid från din enhet för att tillhandahålla en
funktion du använder:

- **TMDB** tar emot den titel, det år, den säsong och det avsnittsnummer som
  känts igen ur en videos filnamn, så att ditt bibliotek kan visa uppgifter om
  motsvarande film eller tv-serie. TMDB tar inte emot filnamnet, filens ID, dess
  innehåll eller uppgifterna om ditt Google-konto.
- **TheIntroDB** tar, endast om du slår på hoppa över-knappar, emot den
  matchade titelns TMDB-identifierare, säsongs- och avsnittsnummer och videons
  speltid (avsnitt 9).
- **Wyzie Subs** tar, endast när du söker undertexter, emot den matchade titelns
  TMDB-identifierare samt säsongs- och avsnittsnummer (avsnitt 8).
- **Apple** lagrar och synkroniserar inloggningsuppgiften för ditt Google-konto,
  med totalsträckskryptering, om du använder iCloud-nyckelringen.
- Information kan lämnas ut där tillämplig lag eller giltig rättslig process
  kräver det.

**Lagring och radering**

- Ta bort en Google Drive-källa i Edendale för att ta bort dess videor från
  biblioteket på den enheten.
- Logga ut under **Inställningar → Konton** för att radera Google-kontot och dess
  token från enheten och från dina andra Apple-enheter som synkroniserar det.
  Välj **Logga ut och återkalla åtkomst** för att också be Google att avsluta
  Edendales åtkomst, vilket även avslutar åtkomsten för en Apple TV som har fått
  kontot från din iPhone eller iPad.
- Du kan när som helst ta bort Edendales åtkomst på sidan
  [Tredjepartsanslutningar](https://myaccount.google.com/connections) i ditt
  Google-konto. Därefter kan Edendale inte längre läsa din Drive.
- Om du avinstallerar Edendale raderas dess enhetslokala bibliotek. På
  Apple-plattformar kan ett objekt i nyckelringen finnas kvar efter
  avinstallation, så logga först ut i Edendale eller ta bort Edendales åtkomst
  hos Google.

**Begränsad användning**

Edendales användning av information som tas emot från Googles API:er, och
överföring av sådan information till någon annan app, kommer att följa
[Användardatapolicyn för Googles API-tjänster](https://developers.google.com/terms/api-services-user-data-policy),
inklusive kraven på begränsad användning (Limited Use).

Google behandlar dina konto- och Drive-data enligt
[Googles integritetspolicy](https://policies.google.com/privacy). När du öppnar
en YouTube-trailer (avsnitt 10) används inte ett Google-konto som du kopplat för
Google Drive.

### 6.4 Microsoft OneDrive

Edendale begär följande behörigheter i Microsoft Graph:

| Behörighet | Varför Edendale begär den |
|---|---|
| `User.Read` | För att identifiera det Microsoft-konto du loggade in med och visa det i Inställningar → Konton |
| `Files.Read` | För att visa dina mappar så att du kan välja en, lägga till videorna i mappar du kopplar i ditt bibliotek och spela upp de videorna |
| `offline_access` | För att förbli inloggad utan att fråga dig igen varje timme |

Edendale får åtkomst till:

- **Kontoinformation:** ditt Microsoft-kontos ID, visningsnamn och e-postadress
  eller användarens huvudnamn (UPN), samt ditt OneDrive-ID.
- **Metadata för filer och mappar** i de mappar du öppnar eller kopplar: varje
  objekts ID, namn, storlek, om det är en fil eller mapp, senaste ändringstid och
  den videospeltid som OneDrive anger.
- **Filinnehåll:** de videofiler du spelar upp, strömmade via kortlivade
  nedladdningslänkar som OneDrive utfärdar.

Edendale fungerar med personliga Microsoft-konton och med arbets- eller
skolkonton. För ett arbets- eller skolkonto kan din organisation se att du har
loggat in i Edendale och kan hantera eller registrera den åtkomsten enligt sina
egna policyer.

När du loggar ut under **Inställningar → Konton** raderas kontot och dess token
från enheten. Microsoft låter inte en app återkalla sin egen åtkomst, så för att
avsluta den hos Microsoft tar du bort Edendale på sidan
[appbehörigheter](https://account.live.com/consent/Manage) för ditt personliga
konto, eller, för ett arbets- eller skolkonto, via organisationens portal Mina
appar eller din administratör. Microsoft behandlar informationen enligt
[Microsofts sekretesspolicy](https://privacy.microsoft.com/privacystatement).

### 6.5 Dropbox

Edendale begär följande Dropbox-behörigheter:

| Behörighet | Varför Edendale begär den |
|---|---|
| `account_info.read` | För att identifiera det Dropbox-konto du loggade in med och visa det i Inställningar → Konton |
| `files.metadata.read` | För att visa dina mappar så att du kan välja en och lägga till videorna i mappar du kopplar i ditt bibliotek |
| `files.content.read` | För att spela upp de videorna |

Edendale får åtkomst till:

- **Kontoinformation:** ditt Dropbox-kontos ID, visningsnamn och e-postadress.
- **Metadata för filer och mappar** i de mappar du öppnar och för allt i en mapp
  du kopplar (Dropbox listar hela trädet för en kopplad mapp på en gång): varje
  objekts ID, namn, sökväg, storlek och ändringstid.
- **Filinnehåll:** de videofiler du spelar upp, strömmade via tillfälliga länkar
  som slutar gälla efter fyra timmar.

När du loggar ut under **Inställningar → Konton** raderas kontot och dess token
från enheten, och Dropbox ombeds att återkalla Edendales åtkomst. Du kan också ta
bort Edendale från dina
[anslutna appar](https://www.dropbox.com/account/connected_apps) i Dropbox.
Dropbox behandlar informationen enligt sin
[integritetspolicy](https://www.dropbox.com/privacy).

## 7. TMDB-förfrågningar och valfri kontosynkronisering

Edendale använder TMDB för katalogsökningar, bilder, handling, skådespelare, betyg,
trailerreferenser och för att berika biblioteket. När funktionerna används
skickas söktext och tolkad titelinformation till TMDB. Det gäller även filer från
servrar och molnlagring: TMDB tar emot den titelinformation som känts igen ur ett
filnamn, aldrig filnamnet, dess plats eller ditt lagringskonto. Förfrågningarna
går direkt från din enhet till TMDB; de passerar ingen server hos BaBaSaMa. TMDB
kan ta emot vanlig anslutningsinformation som en IP-adress och uppgifter om enhet
eller förfrågan.

Om du kopplar ditt TMDB-konto kan Edendale läsa och uppdatera dina favoriter, din
tittarlista och dina betyg på TMDB när du begär det. Din uppspelningsposition och
din tittarhistorik skickas inte till TMDB.

TMDB behandlar information enligt sin
[integritetspolicy](https://www.themoviedb.org/privacy-policy) och sina
[API-villkor](https://www.themoviedb.org/api-terms-of-use).

## 8. Undertextsökning

Edendale kan söka undertexter via **Wyzie Subs** (`sub.wyzie.io`, drivs av Wyzie).
En förfrågan görs bara om du öppnar undertextpanelen under uppspelning och startar
en sökning; ingenting skickas bara för att en video spelas.

När du startar en sökning skickar Edendale titelns TMDB-identifierare, för ett
avsnitt säsongs- och avsnittsnummer, det undertextspråk du valt, de filter för
format och hörselnedsättning du valt, samt en API-nyckel — antingen den som ingår i
ditt bygge eller den du angett i inställningarna. Ditt filnamn, din sökväg, dina
videodata och ditt bibliotek skickas inte. Wyzie kan ta emot vanlig
anslutningsinformation som en IP-adress.

Om du väljer ett resultat hämtar Edendale den undertextfilen från Wyzie eller från
platsen den pekar på och sparar den på din enhet, så att den kan erbjudas igen
utan ny nedladdning när samma video spelas upp. Edendale registrerar på enheten
vilken video undertexten hör till — den titel den matchades mot och videons
filnamn. På Apple-plattformar och Windows raderas en hämtad undertext som inte
har använts på ungefär en månad automatiskt; i Windows kan du stänga av detta
under Inställningar → Undertexter.

Wyzie behandlar information enligt sina egna villkor och integritetsrutiner,
utanför BaBaSaMas kontroll. Du kan undvika all kontakt med Wyzie genom att inte
starta någon undertextsökning.

## 9. Hoppa över-knappar

Edendale kan visa knapparna **Hoppa över intro**, **Hoppa över sammanfattning**
och **Hoppa över eftertexter** med hjälp av tidsstämplar från användargemenskapen
i **TheIntroDB** (`api.theintrodb.org`). Hoppa över-knapparna är avstängda som
standard; du kan slå på dem i Edendales uppspelningsinställningar eller i
spelarens justeringar. Uppspelningen hoppar aldrig över något om du inte trycker
på knappen.

När hoppa över-knapparna är påslagna och du spelar upp en titel som Edendale
har matchat i TMDB skickar Edendale titelns TMDB-identifierare till TheIntroDB —
för ett avsnitt seriens identifierare med säsongs- och avsnittsnummer — samt
videons speltid, så att tjänsten kan returnera tidsstämplar som passar din kopia.
Inget konto, ingen API-nyckel, inget filnamn, ingen sökväg, inga videodata och
inget bibliotek skickas. TheIntroDB tar emot vanlig anslutningsinformation som
din IP-adress. Filer som Edendale inte har matchat slås aldrig upp.

Tidsstämplarna hålls i minnet bara medan videon spelas. De sparas inte i ditt
bibliotek, ditt uppspelningsförlopp eller någon synkroniserad lagring.
TheIntroDB behandlar information enligt sin
[integritetspolicy](https://theintrodb.org/docs/privacy) och sina
[villkor](https://theintrodb.org/docs/terms).

## 10. Uppspelning av trailrar

Edendale kontaktar inte YouTube bara för att en trailer finns tillgänglig. En
trailer startar aldrig före din åtgärd.

När du uttryckligen väljer att se en trailer öppnar Apple- och Android-byggena en
YouTube-inbäddning med förbättrat integritetsskydd (`youtube-nocookie.com`), medan
Windows lämnar över trailern till din systemwebbläsare så att själva programmet
inte anropar YouTube. Google och YouTube kan sedan behandla information om
anslutning, enhet, hänvisning, visning och annonsering enligt
[Googles integritetspolicy](https://policies.google.com/privacy) och YouTubes
villkor. Läget med förbättrat integritetsskydd begränsar delar av YouTubes
dataanvändning; det gör inte förfrågan anonym, och en inbäddad video kan visa
annonser.

## 11. Rapporter från plattformar och butiker

Edendale innehåller själv ingen kod för analys, telemetri eller kraschrapportering
på någon plattform. Dess integritetsmanifest för Apple deklarerar varken insamlade
datatyper eller spårning.

Oberoende av Edendale kan den plattform eller butik du installerar från ge BaBaSaMa
aggregerade rapporter om programmet. Dessa data kommer från plattformen, inte från
något Edendale skickar, och du styr dem via plattformen:

- **Apple.** App Store Connect kan tillhandahålla aggregerad analys och
  kraschrapporter för App Store-byggen. Apple tar bara med data från din enhet om
  du har slagit på **Dela med apputvecklare** under Inställningar → Integritet och
  säkerhet → Analys och förbättringar. Att stänga av det stoppar detta.
- **Android.** Där Edendale distribueras via Google Play kan Play Console
  tillhandahålla krasch- och ANR-rapporter ("appen svarar inte") samt aggregerade
  kvalitetsmått. Du styr det under Inställningar → Google → Användning och
  diagnostik och genom valet du erbjuds när du rapporterar en krasch.
- **Windows.** Där Edendale distribueras via Microsoft Store kan Partner Center
  tillhandahålla aggregerade rapporter om hälsa och användning. Windows
  diagnostikdata styr du under Inställningar → Sekretess och säkerhet → Diagnostik
  och feedback.
- **Direkta nedladdningar.** Där Edendale distribueras som direkt nedladdning från
  GitHub tar GitHub emot nedladdningsförfrågan och rapporterar bara aggregerade
  nedladdningssiffror till BaBaSaMa.

Rapporterna är aggregerade eller diagnostiska. De berättar inte för BaBaSaMa vad du
har sett, vad som finns i ditt bibliotek eller din lagring eller vem du är.

## 12. Hur informationen används

| Ändamål | Information | Vanlig rättslig grund där sådan krävs |
|---|---|---|
| Indexera och spela upp media du väljer | Media och biblioteksinformation | Fullgörande av den Tjänst du begär |
| Lista, indexera och spela upp filer från servrar och molnlagring du kopplar | Mapplistningar, filmetadata och filinnehåll från den källan | Fullgörande av den Tjänst du begär |
| Logga in på och märka ett kopplat lagringskonto | Kontoidentifierare, e-postadress, visningsnamn och token | Din begäran eller ditt samtycke |
| Hämta TMDB-metadata och sökresultat | Söktext och tolkad titelinformation | Fullgörande av Tjänsten; berättigat intresse |
| Hitta och hämta en undertext du bett om | TMDB-identifierare, säsong och avsnitt, språk- och filterval | Din begäran |
| Visa hoppa över-knappar du slagit på | TMDB-identifierare, säsong och avsnitt, videons speltid | Din begäran eller ditt samtycke |
| Spara förlopp, inställningar och betyg | Personliga uppgifter | Fullgörande av Tjänsten |
| Synkronisera uppgifter via ditt plattformskonto | Tittarhistorik och personliga uppgifter | Din begäran eller ditt samtycke; fullgörande av Tjänsten |
| Ansluta till ett valfritt TMDB-konto eller en server | Kontotoken eller inloggningsuppgifter till servern | Din begäran eller ditt samtycke |
| Besvara supportärenden | Kontaktuppgifter och meddelandeinnehåll | Berättigat intresse; åtgärder du begärt |
| Underhålla och förbättra programmen | Aggregerade rapporter från plattform eller butik | Berättigat intresse av kvalitet och stabilitet |

När en behandling vilar på samtycke kan du återkalla det genom att logga ut från
eller koppla bort kontot, ta bort källan, stänga av funktionen eller ändra
plattformens behörigheter.

## 13. Delning och tjänsteleverantörer

BaBaSaMa säljer inte din information. Eftersom BaBaSaMa inte driver någon server
för Edendale lämnas information bara ut i den mån det behövs:

- till **TMDB** när du söker, berikar en titel, laddar metadata eller använder ett
  valfritt kopplat TMDB-konto,
- till **Google**, **Microsoft** eller **Dropbox** när du kopplar och använder
  ett Google Drive-, OneDrive- eller Dropbox-konto (avsnitt 6),
- till den server du väljer när du kopplar en SMB-, NFS-, SFTP-, WebDAV- eller
  S3-kompatibel källa,
- till **Wyzie** när du startar en undertextsökning,
- till **TheIntroDB** medan hoppa över-knapparna är påslagna,
- till **Apple**, **Google** eller **Microsoft** när du aktiverar eller använder
  deras tjänster för lagring, säkerhetskopiering, inloggningsuppgifter eller
  synkronisering, eller när de tillhandahåller de aggregerade rapporter som
  beskrivs i avsnitt 11,
- till **YouTube/Google** efter att du uttryckligen öppnat en trailer,
- till **GitHub**, som levererar webbplatsen och eventuella direkta nedladdningar,
  samt
- där tillämplig lag eller giltig rättslig process kräver det.

Var och en av dessa organisationer behandlar information som självständigt
personuppgiftsansvarig enligt sina egna villkor och sin integritetspolicy. Ingen av
dem agerar som personuppgiftsbiträde på BaBaSaMas instruktioner, och BaBaSaMa får
ingen kopia av det de samlar in utöver de aggregerade rapporterna i avsnitt 11.

## 14. Lagring och radering

- **Webbplatsen:** det finns ingenting att radera. Sidan använder varken kakor
  eller webbläsarlagring. Förfrågningsdata som når GitHub lagras enligt GitHubs
  egna policyer och är inte tillgängliga för BaBaSaMa.
- **Appernas lokala lagring:** att ta bort en källa eller post påverkar det lokala
  biblioteksindexet; det tar inte nödvändigtvis bort tittar- eller kontouppgifter.
  Att rensa appdata kan ta bort den lokala containern enligt plattformens
  inställningar. Beteendet vid avinstallation, säkerhetskopiering och återställning
  varierar mellan plattformar och tar inte nödvändigtvis bort kopior i molnet eller
  i säkerhetskopior.
- **Kopplade servrar och molnlagringskonton:** att ta bort en källa tar bort dess
  filer från biblioteket men behåller dess inloggning eller konto, så att andra
  källor kan använda det. Logga ut eller glöm inloggningen under
  **Inställningar → Konton** för att radera den. Utloggning raderar ingenting i
  din lagring; för att avsluta Edendales åtkomst hos en molnleverantör använder du
  leverantörens inställningar i avsnitt 6.
- **Apple:** privata CloudKit-poster och synkroniserade objekt i
  iCloud-nyckelringen kan finnas kvar efter avinstallation. Hantera dem via
  tillgängliga inställningar för iCloud, nyckelring, app eller enhet. Edendale
  erbjuder i dagsläget ingen samlad plattformsövergripande radering.
- **Android:** en säkerhetskopia från plattformen eller en kopia från
  enhetsöverföring kan finnas kvar enligt inställningar och lagringstider hos
  Google, enhetstillverkaren eller din leverantör av säkerhetskopiering. Watch
  Next-rader på en Android TV-hemskärm tas bort när du stänger av inställningen.
- **Windows:** en kopia i din OneDrive-mapp `Apps/Edendale` finns kvar tills du
  raderar den via OneDrive och eventuell papperskorg eller återställningsfunktion.
- **Hämtade undertexter** ligger kvar på din enhet tills du tar bort dem eller, på
  Apple-plattformar och Windows, tills de har varit oanvända i ungefär en månad.
  Wyzie har inget konto för dig; eventuella förfrågningsloggar de för styrs av
  Wyzie.
- **Tidsstämplar för hoppa över-knappar** kasseras när uppspelningen avslutas.
  Eventuella förfrågningsloggar som TheIntroDB för styrs av TheIntroDB.
- Ett kopplat TMDB-konto lagrar information enligt TMDB:s inställningar och
  policyer. Att koppla bort Edendale raderar inte automatiskt information som redan
  ligger i ditt TMDB-konto; hantera de uppgifterna via TMDB.
- Supportkorrespondens sparas bara så länge det rimligen behövs för att svara, föra
  supporthistorik eller uppfylla rättsliga skyldigheter.

Eftersom BaBaSaMa i regel inte kan komma åt information som bara finns på din enhet
eller i ett privat plattformskonto ber vi dig använda plattformsfunktionerna ovan.
En begäran till BaBaSaMa kan inte direkt radera information som BaBaSaMa inte har
tillgång till.

## 15. Internationella överföringar

GitHub, TMDB, Wyzie, TheIntroDB, Apple, Google, Microsoft och Dropbox kan behandla
information i andra länder än ditt. Deras integritetspolicyer beskriver de
skyddsåtgärder de använder vid internationella överföringar. BaBaSaMa överför inte
själv din information, eftersom den inte tas emot.

## 16. Säkerhet

Edendale använder krypterade anslutningar för TMDB, Wyzie, TheIntroDB och varje
molnlagringsleverantör och lagrar inloggningsuppgifter i plattformens skyddade
lagring. Molninloggning använder OAuth 2.0 med PKCE på leverantörens egen sida,
så Edendale hanterar aldrig ditt lösenord till molnlagringen, och åtkomsttoken
stannar i minnet. Edendale fäster varje SFTP-servers värdnyckel och frågar dig
innan en ändrad nyckel betros.

En anslutning till din egen server är bara så privat som dess protokoll och
konfiguration tillåter. SFTP- och HTTPS-anslutningar är krypterade; NFS, WebDAV
över `http://` och vissa SMB-konfigurationer är det inte, så använd dem bara i
ett nätverk du litar på.

Tjänsten håller medvetet videodata och personliga uppgifter utanför lagring som
utvecklaren driver — någon sådan finns inte. Ingen säkerhetsåtgärd kan garantera
fullständigt skydd, så skydda din enhet, dina plattformskonton, dina
molnlagringskonton, dina servrar och dina säkerhetskopior.

## 17. Barns integritet

Edendale är ett medieverktyg för en allmän publik och riktar sig inte till barn
under 13 år. BaBaSaMa samlar inte medvetet in personuppgifter från barn via
Edendale. En vårdnadshavare som tror att ett barn har skickat personuppgifter till
BaBaSaMa kan kontakta oss för att begära radering.

## 18. Dina rättigheter

Beroende på var du bor kan du ha rätt till information och att begära tillgång,
rättelse, radering, begränsning, dataportabilitet eller att invända, samt att
återkalla samtycke eller klaga hos en dataskyddsmyndighet.

Nästan all information i Edendale står under din direkta kontroll, eftersom den
stannar på din enhet, i ditt plattformskonto eller hos den lagringsleverantör du
valt. Du kan när som helst avsluta Edendales åtkomst till ett molnlagringskonto
med inställningarna i avsnitt 6. För information som BaBaSaMa har, till exempel
ett supportmeddelande, kontakta **long@babasama.com**. Vi kan behöva tillräckliga
uppgifter för att kunna verifiera och besvara din begäran.

## 19. Ändringar i policyn

Vi kan uppdatera policyn när Edendales funktioner, plattformar, leverantörer eller
rättsliga skyldigheter ändras. Vi ändrar då datumet **Senast uppdaterad** och
informerar ytterligare där det är lämpligt. Väsentligt annorlunda behandling
tillämpas inte retroaktivt där samtycke eller annan rättslig grund krävs.

## 20. Kontakt

Frågor, begäranden om integritet eller klagomål kan skickas till:

- **BaBaSaMa**
- **long@babasama.com**
