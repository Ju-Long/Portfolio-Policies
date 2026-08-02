---
title: "Integritetspolicy"
app: "Edendale"
lastUpdated: "2 augusti 2026"
lastUpdatedLabel: "Senast uppdaterad"
contentLanguage: "sv"
draft: true
---

> **Översättning av det engelska utkastet.** Bekräfta operatörens juridiska namn
> och adress före publicering och låt en jurist granska dokumentet. Den här
> mallen ersätter inte juridisk rådgivning. Vid avvikelser mellan språkversioner
> har den engelska versionen företräde.

## 1. Inledning och omfattning

Den här integritetspolicyn förklarar hur **Edendale** hanterar information när du
använder ett officiellt Edendale-program eller Edendales webbplats
(tillsammans "**Tjänsten**").

Edendale är en lokal videospelare och en personlig tittarlogg. Du kan spela upp
media som du själv väljer, bygga ett privat bibliotek, berika titlar med
information från The Movie Database ("**TMDB**"), söka undertexter och föra egna
tittaranteckningar. Edendale tillhandahåller, lagrar eller laddar inte upp filmer
eller tv-avsnitt åt dig.

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
- **[Före publicering: lägg till operatörens juridiska namn och postadress om det
  krävs i de länder där Edendale erbjuds.]**

## 3. Sammanfattning: lokalt först

Edendale är utformat för att samla in så lite data som möjligt:

- Du behöver inget Edendale-konto.
- BaBaSaMa driver varken server, databas eller proxy för Edendale. Det finns
  ingenstans dit dina biblioteks-, tittar- eller kontouppgifter kan skickas till
  oss.
- Dina video- och undertextfiler laddas inte upp till BaBaSaMa eller till någon
  tredje part.
- Edendale innehåller ingen annonsering, marknadsanalys, kraschrapportering eller
  beteendespårning på någon plattform. YouTube kan visa annonser efter att du valt
  att öppna en trailer.
- BaBaSaMa säljer eller hyr inte ut personuppgifter.
- Biblioteksindexet och dina personliga uppgifter lagras på din enhet eller i
  lagring som hör till ditt eget plattformskonto, enligt beskrivningen nedan.
- Nätverksåtkomst begränsas till de funktioner du använder: TMDB-metadata och
  valfri kontosynkronisering, undertextsökning som du startar, nätverksmappar du
  själv väljer, plattformens lagring eller synkronisering, samt en trailer som du
  uttryckligen öppnar.

En valfri TMDB-koppling är ett konto hos TMDB, inte ett Edendale-konto.

## 4. Information som Edendale hanterar

### 4.1 Lokal media och biblioteksinformation

När du väljer en fil, mapp eller nätverksresurs kan Edendale behandla:

- fil- och mappnamn,
- relativa sökvägar, plattformens filidentifierare eller säkerhetsavgränsade
  bokmärken,
- filtyp, storlek och ändringsdatum,
- titel, utgivningsår, serienamn, säsongsnummer och avsnittsnummer som tolkats ur
  ett filnamn,
- adressen till en nätverksserver och resurs som du väljer, samt
- TMDB-identifierare, bildlänkar, handling, skådespelare, speltid och andra
  metadata som berikar ditt lokala bibliotek.

Tolkningen av filnamn sker lokalt, före varje metadataförfrågan. Därefter kan
Edendale skicka en tolkad film- eller serietitel, ett årtal, ett säsongs- eller
avsnittsnummer till TMDB för att hitta matchande metadata.

Dina video- och undertextdata stannar på den plats du valt och läses för
uppspelning. De laddas inte upp till BaBaSaMa eller till någon tredje part. Om du
spelar upp från en nätverksresurs kommunicerar din enhet med den resursen.

### 4.2 Tittarhistorik och personliga uppgifter

Beroende på funktion och plattform kan Edendale lagra:

- uppspelningsposition, sedd speltid, slutförandestatus och tidpunkt för senaste
  visning,
- favoriter och val i tittarlistan,
- ditt eget betyg,
- spelar- och gränssnittsinställningar, inklusive undertextspråk och filtret för
  hörselnedsättning, samt
- en begränsad visningsögonblicksbild, till exempel en titel eller en
  affischreferens, som används för hemskärmswidgetar och "fortsätt titta"-rader.

De här uppgifterna är till för ditt personliga bruk.

### 4.3 Inloggningsuppgifter och kontoinformation

Om du kopplar ett valfritt TMDB-konto får Edendale en åtkomsttoken och en
TMDB-kontoidentifierare för att synkronisera de favoriter, tittarlisteposter och
betyg som stöds. Edendale lagrar uppgiften i plattformens skyddade lagring:
nyckelringen på Apple-plattformar, en krypterad lagring med stöd av Android
Keystore på Android och DPAPI i Windows. På Apple-plattformar kan en uppgift
synkroniseras via iCloud-nyckelringen om du har aktiverat den synkroniseringen.

Om du ansluter en lösenordsskyddad nätverksresurs lagrar Edendale resursens adress
och inloggningsuppgifterna i samma skyddade lagring. Uppgifterna används enbart
för att ansluta till den resurs du valt och skickas inte till BaBaSaMa eller till
någon tredje part.

Om du anger en egen API-nyckel för undertexttjänsten lagras även den i samma
skyddade lagring och skickas endast till undertexttjänsten som beskrivs i
avsnitt 7.

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

Det lokala biblioteksindexet, filsökvägar och säkerhetsavgränsade bokmärken stannar
i en enhetslokal lagring och är uttryckligen undantagna från CloudKit-spegling.

Uppspelningsförlopp och val per titel — favoriter, tittarlistemedlemskap och betyg
— lagras i Edendales privata iCloud-container så att de kan visas på dina
Apple-enheter. Uppgifter för TMDB, nätverksresurser och undertexttjänsten kan
använda iCloud-nyckelringen. Apple behandlar informationen enligt sin
[integritetspolicy](https://www.apple.com/legal/privacy/) och dina
iCloud-inställningar.

### 5.3 Android

Android lagrar Edendales bibliotek och personliga uppgifter i appens lokala
lagring. Beroende på dina inställningar för säkerhetskopiering och enhetsöverföring
kan operativsystemet ta med behörig appdata i plattformens säkerhetskopia eller i
en enhetsöverföring. De skyddade lagringarna för TMDB-sessionen, uppgifterna till
nätverksresursen och undertextnyckeln är undantagna både från molnsäkerhetskopiering
och från enhetsöverföring genom Edendales säkerhetskopieringsregler, eftersom
nycklarna som skyddar dem aldrig lämnar enheten. Skydd och lagringstid för
säkerhetskopior beror på din Android-version, enhet, konto och leverantör av
säkerhetskopiering.

### 5.4 Windows

Windows lagrar det lokala biblioteksindexet i appens lokala lagring.
Uppspelningsförlopp, favoriter, tittarlisteposter och betyg lagras också lokalt,
och när OneDrive är konfigurerat på enheten lägger Edendale en kopia av de
personliga uppgifterna i din egen OneDrive-mapp `Apps/Edendale`, så att en andra
inloggad dator får samma innehåll. Utan OneDrive förblir appen helt lokal.
Inloggningsuppgifter förblir skyddade lokalt och ingår aldrig i kopian. Microsoft
behandlar OneDrive-data enligt villkoren för ditt Microsoft-konto och dina
integritetsinställningar.

## 6. TMDB-förfrågningar och valfri kontosynkronisering

Edendale använder TMDB för katalogsökningar, bilder, handling, skådespelare, betyg,
trailerreferenser och för att berika det lokala biblioteket. När funktionerna
används skickas söktext och tolkad titelinformation till TMDB. Förfrågningarna går
direkt från din enhet till TMDB; de passerar ingen server hos BaBaSaMa. TMDB kan ta
emot vanlig anslutningsinformation som en IP-adress och uppgifter om enhet eller
förfrågan.

Om du kopplar ditt TMDB-konto kan Edendale läsa och uppdatera dina favoriter, din
tittarlista och dina betyg på TMDB när du begär det. Din uppspelningsposition och
din tittarhistorik skickas inte till TMDB.

TMDB behandlar information enligt sin
[integritetspolicy](https://www.themoviedb.org/privacy-policy) och sina
[API-villkor](https://www.themoviedb.org/api-terms-of-use).

## 7. Undertextsökning

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
platsen den pekar på och sparar den för uppspelning. Wyzie behandlar information
enligt sina egna villkor och integritetsrutiner, utanför BaBaSaMas kontroll. Du kan
undvika all kontakt med Wyzie genom att inte starta någon undertextsökning.

## 8. Uppspelning av trailrar

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

## 9. Rapporter från plattformar och butiker

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
har sett, vad som finns i ditt bibliotek eller vem du är.

## 10. Hur informationen används

| Ändamål | Information | Vanlig rättslig grund där sådan krävs |
|---|---|---|
| Indexera och spela upp media du väljer | Lokal media och biblioteksinformation | Fullgörande av den Tjänst du begär |
| Hämta TMDB-metadata och sökresultat | Söktext och tolkad titelinformation | Fullgörande av Tjänsten; berättigat intresse |
| Hitta och hämta en undertext du bett om | TMDB-identifierare, säsong och avsnitt, språk- och filterval | Din begäran |
| Spara förlopp, inställningar och betyg | Personliga uppgifter | Fullgörande av Tjänsten |
| Synkronisera uppgifter via ditt plattformskonto | Tittarhistorik och personliga uppgifter | Din begäran eller ditt samtycke; fullgörande av Tjänsten |
| Ansluta till ett valfritt TMDB-konto eller en nätverksresurs | Kontotoken eller inloggningsuppgifter till resursen | Din begäran eller ditt samtycke |
| Besvara supportärenden | Kontaktuppgifter och meddelandeinnehåll | Berättigat intresse; åtgärder du begärt |
| Underhålla och förbättra programmen | Aggregerade rapporter från plattform eller butik | Berättigat intresse av kvalitet och stabilitet |

När en behandling vilar på samtycke kan du återkalla det genom att koppla bort
kontot, stänga av funktionen eller ändra plattformens behörigheter.

## 11. Delning och tjänsteleverantörer

BaBaSaMa säljer inte din information. Eftersom BaBaSaMa inte driver någon server
för Edendale lämnas information bara ut i den mån det behövs:

- till **TMDB** när du söker, berikar en titel, laddar metadata eller använder ett
  valfritt kopplat TMDB-konto,
- till **Wyzie** när du startar en undertextsökning,
- till **Apple**, **Google** eller **Microsoft** när du aktiverar eller använder
  deras tjänster för lagring, säkerhetskopiering, inloggningsuppgifter eller
  synkronisering, eller när de tillhandahåller de aggregerade rapporter som
  beskrivs i avsnitt 9,
- till **YouTube/Google** efter att du uttryckligen öppnat en trailer,
- till den nätverksserver du väljer när du ansluter en resurs,
- till **GitHub**, som levererar webbplatsen och eventuella direkta nedladdningar,
  samt
- där tillämplig lag eller giltig rättslig process kräver det.

Var och en av dessa organisationer behandlar information som självständigt
personuppgiftsansvarig enligt sina egna villkor och sin integritetspolicy. Ingen av
dem agerar som personuppgiftsbiträde på BaBaSaMas instruktioner, och BaBaSaMa får
ingen kopia av det de samlar in utöver de aggregerade rapporterna i avsnitt 9.

## 12. Lagring och radering

- **Webbplatsen:** det finns ingenting att radera. Sidan använder varken kakor
  eller webbläsarlagring. Förfrågningsdata som når GitHub lagras enligt GitHubs
  egna policyer och är inte tillgängliga för BaBaSaMa.
- **Appernas lokala lagring:** att ta bort en källa eller post påverkar det lokala
  biblioteksindexet; det tar inte nödvändigtvis bort tittar- eller kontouppgifter.
  Att rensa appdata kan ta bort den lokala containern enligt plattformens
  inställningar. Beteendet vid avinstallation, säkerhetskopiering och återställning
  varierar mellan plattformar och tar inte nödvändigtvis bort kopior i molnet eller
  i säkerhetskopior.
- **Apple:** privata CloudKit-poster och synkroniserade objekt i
  iCloud-nyckelringen kan finnas kvar efter avinstallation. Hantera dem via
  tillgängliga inställningar för iCloud, nyckelring, app eller enhet. Edendale
  erbjuder i dagsläget ingen samlad plattformsövergripande radering.
- **Android:** en säkerhetskopia från plattformen eller en kopia från
  enhetsöverföring kan finnas kvar enligt inställningar och lagringstider hos
  Google, enhetstillverkaren eller din leverantör av säkerhetskopiering.
- **Windows:** en kopia i din OneDrive-mapp `Apps/Edendale` finns kvar tills du
  raderar den via OneDrive och eventuell papperskorg eller återställningsfunktion.
- **Hämtade undertexter** ligger kvar på din enhet tills du tar bort dem. Wyzie har
  inget konto för dig; eventuella förfrågningsloggar de för styrs av Wyzie.
- Ett kopplat TMDB-konto lagrar information enligt TMDB:s inställningar och
  policyer. Att koppla bort Edendale raderar inte automatiskt information som redan
  ligger i ditt TMDB-konto; hantera de uppgifterna via TMDB.
- Supportkorrespondens sparas bara så länge det rimligen behövs för att svara, föra
  supporthistorik eller uppfylla rättsliga skyldigheter.

Eftersom BaBaSaMa i regel inte kan komma åt information som bara finns på din enhet
eller i ett privat plattformskonto ber vi dig använda plattformsfunktionerna ovan.
En begäran till BaBaSaMa kan inte direkt radera information som BaBaSaMa inte har
tillgång till.

## 13. Internationella överföringar

GitHub, TMDB, Wyzie, Apple, Google och Microsoft kan behandla information i andra
länder än ditt. Deras integritetspolicyer beskriver de skyddsåtgärder de använder
vid internationella överföringar. BaBaSaMa överför inte själv din information,
eftersom den inte tas emot.

## 14. Säkerhet

Edendale använder krypterade nätverksanslutningar för de onlinetjänster som stöds,
avvisar okrypterad trafik och använder plattformens skyddade lagring för
inloggningsuppgifter. Tjänsten håller medvetet videodata och personliga uppgifter
utanför lagring som utvecklaren driver — någon sådan finns inte. Ingen
säkerhetsåtgärd kan garantera fullständigt skydd, så skydda din enhet, dina
plattformskonton, dina nätverksresurser och dina säkerhetskopior.

## 15. Barns integritet

Edendale är ett medieverktyg för en allmän publik och riktar sig inte till barn
under 13 år. BaBaSaMa samlar inte medvetet in personuppgifter från barn via
Edendale. En vårdnadshavare som tror att ett barn har skickat personuppgifter till
BaBaSaMa kan kontakta oss för att begära radering.

## 16. Dina rättigheter

Beroende på var du bor kan du ha rätt till information och att begära tillgång,
rättelse, radering, begränsning, dataportabilitet eller att invända, samt att
återkalla samtycke eller klaga hos en dataskyddsmyndighet.

Nästan all information i Edendale står under din direkta kontroll, eftersom den
stannar på din enhet eller i ditt plattformskonto. För information som BaBaSaMa har,
till exempel ett supportmeddelande, kontakta **long@babasama.com**. Vi kan behöva
tillräckliga uppgifter för att kunna verifiera och besvara din begäran.

## 17. Ändringar i policyn

Vi kan uppdatera policyn när Edendales funktioner, plattformar, leverantörer eller
rättsliga skyldigheter ändras. Vi ändrar då datumet **Senast uppdaterad** och
informerar ytterligare där det är lämpligt. Väsentligt annorlunda behandling
tillämpas inte retroaktivt där samtycke eller annan rättslig grund krävs.

## 18. Kontakt

Frågor, begäranden om integritet eller klagomål kan skickas till:

- **BaBaSaMa**
- **long@babasama.com**
