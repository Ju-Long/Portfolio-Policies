---
title: "Privacybeleid"
app: "Edendale"
lastUpdated: "2 augustus 2026"
lastUpdatedLabel: "Laatst bijgewerkt"
contentLanguage: "nl-NL"
draft: true
---

> **Vertaling van het Engelse concept.** Bevestig vóór publicatie de
> statutaire naam en het adres van de exploitant en laat dit document juridisch
> toetsen. Dit model vervangt geen juridisch advies. Bij verschillen tussen de
> taalversies prevaleert de Engelse versie.

## 1. Inleiding en reikwijdte

Dit privacybeleid legt uit hoe **Edendale** omgaat met informatie wanneer je een
officiële Edendale-app of de Edendale-website gebruikt (samen de
"**Dienst**").

Edendale is een lokale videospeler en een persoonlijke kijkregistratie. Je kunt
er media mee afspelen die je zelf kiest, een privébibliotheek opbouwen, titels
verrijken met informatie van The Movie Database ("**TMDB**"), ondertitels zoeken
en je eigen kijkgegevens bijhouden. Edendale levert, host of uploadt geen films
of televisieafleveringen voor je.

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
- **[Vóór publicatie: statutaire naam en postadres van de exploitant toevoegen
  indien vereist in de landen waar Edendale wordt aangeboden.]**

## 3. Samenvatting: lokaal eerst

Edendale is ontworpen om zo min mogelijk gegevens te verzamelen:

- Je hebt geen Edendale-account nodig.
- BaBaSaMa beheert geen server, database of proxy voor Edendale. Er is dus geen
  plek waarheen je bibliotheek-, kijk- of accountgegevens naar ons verzonden
  zouden kunnen worden.
- Je video- en ondertitelbestanden worden niet geüpload naar BaBaSaMa of naar
  derden.
- Edendale bevat op geen enkel platform advertenties, marketinganalyse,
  crashrapportage of gedragsmatige tracking. YouTube kan advertenties tonen
  nadat je ervoor kiest een trailer te openen.
- BaBaSaMa verkoopt of verhuurt geen persoonsgegevens.
- De bibliotheekindex en je persoonlijke gegevens staan op je apparaat of in
  opslag die bij je eigen platformaccount hoort, zoals hieronder beschreven.
- Netwerktoegang blijft beperkt tot de functies die je gebruikt:
  TMDB-metagegevens en optionele accountsynchronisatie, een ondertitelzoekopdracht
  die jij start, netwerkmappen die je zelf kiest, platformopslag of
  -synchronisatie, en een trailer die je uitdrukkelijk opent.

Een optionele TMDB-koppeling is een account bij TMDB, geen Edendale-account.

## 4. Informatie die Edendale verwerkt

### 4.1 Lokale media- en bibliotheekgegevens

Wanneer je een bestand, map of netwerkshare kiest, kan Edendale verwerken:

- bestands- en mapnamen;
- relatieve paden, bestandsidentificatoren van het platform of
  security-scoped bladwijzers;
- bestandstype, -grootte en wijzigingsdatum;
- de titel, het releasejaar, de serienaam, het seizoensnummer en het
  afleveringsnummer die uit een bestandsnaam zijn afgeleid;
- het adres van een netwerkserver en share die je zelf kiest; en
- TMDB-identificatoren, links naar beeldmateriaal, samenvattingen, cast,
  speelduur en andere metagegevens waarmee je lokale bibliotheek wordt verrijkt.

Het herkennen van bestandsnamen gebeurt lokaal, vóór elke metagegevensaanvraag.
Daarna kan Edendale een zo afgeleide film- of serietitel, een jaartal, een
seizoens- of afleveringsnummer naar TMDB sturen om bijpassende metagegevens te
vinden.

Je video- en ondertitelgegevens blijven op de locatie die je hebt gekozen en
worden gelezen om af te spelen. Ze worden niet geüpload naar BaBaSaMa of naar
derden. Speel je af vanaf een netwerkshare, dan communiceert je apparaat met die
share.

### 4.2 Kijkgegevens en persoonlijke registraties

Afhankelijk van de functie en het platform kan Edendale bewaren:

- afspeelpositie, bekeken duur, voltooiingsstatus en het tijdstip van laatst
  bekeken;
- favorieten en items op je kijklijst;
- je persoonlijke beoordeling;
- speler- en interfacevoorkeuren, waaronder je ondertiteltaal en het filter voor
  slechthorenden; en
- een beperkte weergavemomentopname, zoals een titel of een posterverwijzing,
  gebruikt voor beginschermwidgets en "verder kijken"-rijen.

Deze registraties zijn voor je persoonlijke gebruik.

### 4.3 Inloggegevens en accountinformatie

Als je een optioneel TMDB-account koppelt, ontvangt Edendale een toegangstoken
en een TMDB-accountidentificatie om ondersteunde favorieten, kijklijstitems en
beoordelingen te synchroniseren. Edendale bewaart die inloggegevens in de
beveiligde opslag van het platform: de sleutelhanger op Apple-platforms, een met
de Android Keystore versleutelde opslag op Android en DPAPI op Windows. Op
Apple-platforms kunnen inloggegevens via iCloud-sleutelhanger synchroniseren als
je die synchronisatie hebt ingeschakeld.

Koppel je een met een wachtwoord beveiligde netwerkshare, dan bewaart Edendale
het shareadres en de inloggegevens in diezelfde beveiligde opslag. Die gegevens
worden uitsluitend gebruikt om verbinding te maken met de share die je hebt
gekozen en worden niet naar BaBaSaMa of derden gestuurd.

Voer je je eigen API-sleutel voor de ondertiteldienst in, dan wordt die in
diezelfde beveiligde opslag bewaard en alleen naar de in paragraaf 7 beschreven
ondertiteldienst gestuurd.

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

De lokale bibliotheekindex, bestandspaden en security-scoped bladwijzers blijven
in een apparaatlokale opslag en zijn uitdrukkelijk uitgesloten van
CloudKit-spiegeling.

Kijkvoortgang en keuzes per titel — favorieten, kijklijstlidmaatschap en
beoordelingen — worden bewaard in de privé-iCloud-container van Edendale, zodat
ze op je Apple-apparaten kunnen verschijnen. Inloggegevens voor TMDB,
netwerkshares en de ondertiteldienst kunnen iCloud-sleutelhanger gebruiken.
Apple verwerkt deze informatie volgens zijn
[privacybeleid](https://www.apple.com/legal/privacy/) en je iCloud-instellingen.

### 5.3 Android

Android bewaart de bibliotheek en persoonlijke gegevens van Edendale in de
lokale app-opslag. Afhankelijk van je back-up- en apparaatoverdrachtinstellingen
kan het besturingssysteem in aanmerking komende app-gegevens opnemen in een
platformback-up of apparaatoverdracht. De beveiligde opslag van de TMDB-sessie,
de netwerkshare-inloggegevens en de ondertitelsleutel is door de back-upregels
van Edendale uitgesloten van zowel cloudback-up als apparaatoverdracht, omdat de
sleutels die deze beschermen het apparaat nooit verlaten. Bescherming en
bewaartermijn van back-ups hangen af van je Android-versie, apparaat, account en
back-upaanbieder.

### 5.4 Windows

Windows bewaart de lokale bibliotheekindex in de lokale app-opslag.
Kijkvoortgang, favorieten, kijklijstitems en beoordelingen worden eveneens
lokaal bewaard en, als OneDrive op het apparaat is ingesteld, plaatst Edendale
een replica van die persoonlijke gegevens in je eigen OneDrive-map
`Apps/Edendale`, zodat een tweede aangemelde pc gelijkloopt. Zonder OneDrive
blijft de app volledig lokaal. Inloggegevens blijven lokaal beschermd en worden
nooit in die replica opgenomen. Microsoft verwerkt OneDrive-gegevens volgens de
voorwaarden van je Microsoft-account en je privacy-instellingen.

## 6. TMDB-aanvragen en optionele accountsynchronisatie

Edendale gebruikt TMDB voor catalogusaanvragen, beeldmateriaal, samenvattingen,
cast, beoordelingen, trailerverwijzingen en het verrijken van je lokale
bibliotheek. Bij gebruik van deze functies worden de zoektekst en de afgeleide
titelgegevens naar TMDB gestuurd. De aanvragen gaan rechtstreeks van je apparaat
naar TMDB; ze lopen niet via een server van BaBaSaMa. TMDB kan gebruikelijke
verbindingsgegevens ontvangen, zoals een IP-adres en apparaat- of
aanvraagdetails.

Koppel je je TMDB-account, dan kan Edendale op jouw aangeven je TMDB-favorieten,
kijklijst en beoordelingen lezen en bijwerken. Je afspeelpositie en
kijkgeschiedenis worden niet naar TMDB gestuurd.

TMDB verwerkt informatie volgens zijn
[privacybeleid](https://www.themoviedb.org/privacy-policy) en
[API-voorwaarden](https://www.themoviedb.org/api-terms-of-use).

## 7. Ondertitels zoeken

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
van de locatie waarnaar wordt verwezen en bewaart het om af te spelen. Wyzie
verwerkt informatie volgens zijn eigen voorwaarden en privacypraktijken, buiten
de invloed van BaBaSaMa. Je kunt elk contact met Wyzie volledig vermijden door
geen ondertitelzoekopdracht te starten.

## 8. Trailers afspelen

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

## 9. Rapportage van platforms en stores

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
je hebt gekeken, wat er in je bibliotheek staat of wie je bent.

## 10. Hoe informatie wordt gebruikt

| Doel | Informatie | Gebruikelijke grondslag waar vereist |
|---|---|---|
| Media indexeren en afspelen die je selecteert | Lokale media- en bibliotheekgegevens | Uitvoering van de door jou gevraagde Dienst |
| TMDB-metagegevens en zoekresultaten ophalen | Zoektekst en afgeleide titelgegevens | Uitvoering van de Dienst; gerechtvaardigd belang |
| Een door jou gevraagde ondertitel vinden en downloaden | TMDB-identificatie, seizoen en aflevering, taal- en filterkeuzes | Jouw verzoek |
| Voortgang, voorkeuren en beoordelingen bewaren | Persoonlijke registraties | Uitvoering van de Dienst |
| Gegevens synchroniseren via je platformaccount | Kijkgegevens en persoonlijke registraties | Jouw verzoek of toestemming; uitvoering van de Dienst |
| Verbinden met een optioneel TMDB-account of netwerkshare | Accounttoken of share-inloggegevens | Jouw verzoek of toestemming |
| Supportvragen beantwoorden | Contactgegevens en berichtinhoud | Gerechtvaardigd belang; door jou gevraagde stappen |
| De apps onderhouden en verbeteren | Geaggregeerde platform- of storerapporten | Gerechtvaardigd belang bij kwaliteit en stabiliteit |

Berust een verwerking op toestemming, dan kun je die intrekken door het
betreffende account los te koppelen, de functie uit te schakelen of de
platformmachtigingen te wijzigen.

## 11. Delen en dienstverleners

BaBaSaMa verkoopt je informatie niet. Omdat BaBaSaMa geen server voor Edendale
beheert, wordt informatie alleen verstrekt voor zover nodig:

- aan **TMDB** wanneer je zoekt, een titel verrijkt, metagegevens laadt of een
  optioneel gekoppeld TMDB-account gebruikt;
- aan **Wyzie** wanneer je een ondertitelzoekopdracht start;
- aan **Apple**, **Google** of **Microsoft** wanneer je hun opslag-, back-up-,
  inloggegevens- of synchronisatiediensten inschakelt of gebruikt, of wanneer zij
  de in paragraaf 9 beschreven geaggregeerde rapporten leveren;
- aan **YouTube/Google** nadat je uitdrukkelijk een trailer hebt geopend;
- aan de netwerkserver die je kiest wanneer je een share koppelt;
- aan **GitHub**, dat de website en eventuele directe downloads levert; en
- waar de toepasselijke wet of een geldige juridische procedure dit vereist.

Elk van deze organisaties verwerkt informatie als zelfstandig
verwerkingsverantwoordelijke onder haar eigen voorwaarden en privacybeleid.
Geen van hen treedt op als verwerker in opdracht van BaBaSaMa, en BaBaSaMa
ontvangt geen kopie van wat zij verzamelen, afgezien van de in paragraaf 9
beschreven geaggregeerde rapporten.

## 12. Bewaring en verwijdering

- **Website:** er valt niets te verwijderen. De site gebruikt geen cookies of
  browseropslag. Aanvraaggegevens die GitHub bereiken, worden bewaard volgens
  het beleid van GitHub en zijn voor BaBaSaMa niet beschikbaar.
- **Lokale opslag van de apps:** een bron of registratie verwijderen raakt de
  lokale bibliotheekindex; het verwijdert niet noodzakelijk kijk- of
  accountgegevens. App-gegevens wissen kan de lokale container verwijderen
  volgens de instellingen van dat platform. Gedrag bij verwijderen, back-up en
  herstel verschilt per platform en verwijdert niet noodzakelijk cloud- of
  back-upkopieën.
- **Apple:** privé-CloudKit-records en gesynchroniseerde
  iCloud-sleutelhangeritems kunnen na verwijdering van de app blijven bestaan.
  Beheer ze via de beschikbare iCloud-, sleutelhanger-, app- of
  apparaatinstellingen. Edendale biedt op dit moment geen enkele
  platformoverkoepelende knop om alles te wissen.
- **Android:** een platformback-up of apparaatoverdrachtkopie kan blijven bestaan
  volgens de instellingen en bewaartermijnen van Google, je apparaatfabrikant of
  je back-upaanbieder.
- **Windows:** een replica in je OneDrive-map `Apps/Edendale` blijft bestaan
  totdat je die via OneDrive en de eventuele prullenbak- of herstelfuncties
  verwijdert.
- **Gedownloade ondertitels** blijven op je apparaat tot je ze verwijdert. Wyzie
  houdt voor jou geen account bij; eventuele aanvraaglogboeken vallen onder
  Wyzie.
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

## 13. Internationale doorgiften

GitHub, TMDB, Wyzie, Apple, Google en Microsoft kunnen informatie verwerken in
andere landen dan het jouwe. Hun privacyverklaringen beschrijven de waarborgen
die zij voor internationale doorgiften hanteren. BaBaSaMa geeft je informatie
niet zelf door, omdat BaBaSaMa die niet ontvangt.

## 14. Beveiliging

Edendale gebruikt versleutelde netwerkverbindingen voor ondersteunde
onlinediensten, weigert onversleuteld verkeer en gebruikt de beveiligde opslag
van het platform voor inloggegevens. De Dienst houdt videogegevens en
persoonlijke registraties bewust buiten opslag die de ontwikkelaar beheert — die
bestaat niet. Geen enkele beveiligingsmaatregel biedt absolute bescherming,
dus bescherm je apparaat, je platformaccounts, je netwerkshares en je back-ups.

## 15. Privacy van kinderen

Edendale is een mediahulpmiddel voor een algemeen publiek en is niet gericht op
kinderen onder de 13 jaar. BaBaSaMa verzamelt via Edendale niet bewust
persoonsgegevens van kinderen. Een ouder of voogd die vermoedt dat een kind
persoonsgegevens naar BaBaSaMa heeft gestuurd, kan contact met ons opnemen om
verwijdering te vragen.

## 16. Je privacyrechten

Afhankelijk van waar je woont, heb je mogelijk recht op informatie en op inzage,
rectificatie, verwijdering, beperking, overdraagbaarheid of bezwaar, en het
recht toestemming in te trekken of een klacht in te dienen bij een
toezichthoudende autoriteit.

Vrijwel alle Edendale-informatie staat onder je directe controle, omdat die op
je apparaat of in je platformaccount blijft. Voor informatie die BaBaSaMa wél
heeft, zoals een supportbericht, mail je **long@babasama.com**. We hebben
mogelijk voldoende gegevens nodig om je verzoek te verifiëren en te
beantwoorden.

## 17. Wijzigingen in dit beleid

We kunnen dit beleid bijwerken wanneer functies, platforms, aanbieders of
wettelijke verplichtingen van Edendale veranderen. We passen dan de datum
**Laatst bijgewerkt** aan en informeren waar passend aanvullend. Wezenlijk
andere verwerkingen worden niet met terugwerkende kracht toegepast waar
toestemming of een andere grondslag vereist is.

## 18. Contact

Vragen, privacyverzoeken of klachten kun je sturen naar:

- **BaBaSaMa**
- **long@babasama.com**
