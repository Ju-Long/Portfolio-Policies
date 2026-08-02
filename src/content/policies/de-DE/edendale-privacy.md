---
title: "Datenschutzerklärung"
app: "Edendale"
lastUpdated: "2. August 2026"
lastUpdatedLabel: "Zuletzt aktualisiert"
contentLanguage: "de-DE"
draft: false
---

> **Übersetzung des englischen Entwurfs.** Vor der Veröffentlichung sind der
> juristische Name und die Anschrift des Betreibers zu ergänzen und dieses
> Dokument rechtlich prüfen zu lassen. Diese Vorlage ersetzt keine
> Rechtsberatung. Bei Abweichungen zwischen den Sprachfassungen ist die
> englische Fassung maßgeblich.

## 1. Einleitung und Geltungsbereich

Diese Datenschutzerklärung beschreibt, wie **Edendale** mit Informationen
umgeht, wenn Sie eine offizielle Edendale-Anwendung oder die Edendale-Website
nutzen (zusammen der „**Dienst**“).

Edendale ist ein lokal ausgerichteter Videoplayer und persönlicher
Wiedergabe-Tracker. Sie können damit von Ihnen ausgewählte Medien abspielen,
eine private Mediathek aufbauen, Titel mit Informationen aus The Movie Database
(„**TMDB**“) anreichern, nach Untertiteln suchen und persönliche
Wiedergabedaten führen. Edendale stellt Ihnen keine Filme oder Fernsehfolgen
bereit, hostet sie nicht und lädt sie nicht hoch.

Die Edendale-Website ist eine reine Informationsseite. Sie beschreibt die
Anwendungen, verweist auf den Quellcode des Projekts und beantwortet App-Links,
damit ein geteilter Edendale-Link in einer installierten App geöffnet werden
kann. Sie ist kein Videoplayer, sie kennt keine Konten und sie speichert nichts
über Sie.

Diese Erklärung gilt für offizielle Builds und die offizielle Website.
Unabhängige Forks und selbst gehostete Kopien werden von ihren jeweiligen
Betreibern verantwortet und können Informationen anders behandeln.

## 2. Verantwortliche Stelle

Verantwortlich für den offiziellen Dienst ist:

- **BaBaSaMa**
- E-Mail: **long@babasama.com**
- **[Vor der Veröffentlichung: juristischen Namen und Postanschrift des
  Betreibers ergänzen, sofern in den Ländern erforderlich, in denen Edendale
  angeboten wird.]**

## 3. Zusammenfassung: lokal statt Cloud

Edendale ist darauf ausgelegt, so wenige Daten wie möglich zu erheben:

- Sie benötigen kein Edendale-Konto.
- BaBaSaMa betreibt für Edendale keinen Server, keine Datenbank und keinen
  Proxy. Es gibt keinen Ort, an den Ihre Mediathek-, Wiedergabe- oder
  Kontodaten an uns übermittelt werden könnten.
- Ihre Video- und Untertiteldateien werden weder an BaBaSaMa noch an Dritte
  hochgeladen.
- Edendale enthält auf keiner Plattform Werbung, Marketing-Analytics,
  Absturzberichterstattung oder verhaltensbezogenes Tracking. YouTube kann
  Werbung anzeigen, nachdem Sie einen Trailer geöffnet haben.
- BaBaSaMa verkauft oder vermietet keine personenbezogenen Daten.
- Der Mediathek-Index und Ihre persönlichen Datensätze werden auf Ihrem Gerät
  oder in einem Speicher gespeichert, der zu Ihrem eigenen Plattformkonto
  gehört, wie nachstehend beschrieben.
- Netzwerkzugriffe beschränken sich auf die von Ihnen genutzten Funktionen:
  TMDB-Metadaten und optionale Kontosynchronisierung, von Ihnen gestartete
  Untertitelsuche, selbst ausgewählte Netzwerkordner, Plattformspeicher oder
  -synchronisierung sowie ein durch Ihre ausdrückliche Handlung geöffneter
  Trailer.

Eine optionale TMDB-Kontoverbindung ist ein Konto bei TMDB, kein
Edendale-Konto.

## 4. Von Edendale verarbeitete Informationen

### 4.1 Lokale Medien- und Mediathekdaten

Wenn Sie eine Datei, einen Ordner oder eine Netzwerkfreigabe auswählen, kann
Edendale Folgendes verarbeiten:

- Datei- und Ordnernamen;
- relative Pfade, Datei-Kennungen der Plattform oder Security-Scoped Bookmarks;
- Dateityp, Größe und Änderungsdatum;
- aus einem Dateinamen abgeleiteten Titel, Erscheinungsjahr, Serienname,
  Staffel- und Episodennummer;
- eine selbst ausgewählte Netzwerkserver- und Freigabeadresse; sowie
- TMDB-Kennungen, Links zu Bildmaterial, Zusammenfassungen, Besetzung,
  Laufzeit und weitere Metadaten zur Anreicherung Ihrer lokalen Mediathek.

Die Auswertung von Dateinamen erfolgt lokal, bevor eine Metadatenabfrage
gestellt wird. Anschließend kann Edendale einen ermittelten Film- oder
Serientitel, ein Jahr, eine Staffel- oder Episodennummer an TMDB senden, um
passende Metadaten zu finden.

Ihre Video- und Untertiteldaten verbleiben an dem von Ihnen gewählten
Speicherort und werden für die Wiedergabe gelesen. Sie werden nicht an
BaBaSaMa oder an Dritte hochgeladen. Wenn Sie von einer Netzwerkfreigabe
abspielen, kommuniziert Ihr Gerät mit dieser Freigabe.

### 4.2 Wiedergabe- und persönliche Mediendatensätze

Je nach Funktion und Plattform kann Edendale Folgendes speichern:

- Wiedergabeposition, angesehene Dauer, Abschlussstatus und Zeitpunkt der
  letzten Wiedergabe;
- Favoriten und Merklisteneinträge;
- Ihre persönliche Bewertung;
- Player- und Oberflächeneinstellungen, einschließlich Ihrer
  Untertitelsprache und des Filters für Hörgeschädigte; sowie
- eine begrenzte Anzeigemomentaufnahme wie ein Titel oder ein Posterverweis,
  die für Home-Bildschirm-Widgets und Fortsetzungsleisten verwendet wird.

Diese Datensätze dienen ausschließlich Ihrer persönlichen Nutzung.

### 4.3 Zugangsdaten und Kontoinformationen

Wenn Sie ein optionales TMDB-Konto verbinden, erhält Edendale ein Zugriffstoken
und eine TMDB-Kontokennung, um unterstützte Favoriten, Merklisteneinträge und
Bewertungen zu synchronisieren. Edendale speichert diese Zugangsdaten im
geschützten Anmeldedatenspeicher der Plattform – der Schlüsselbund auf
Apple-Plattformen, ein durch den Android-Keystore abgesicherter
verschlüsselter Speicher unter Android und DPAPI unter Windows. Auf
Apple-Plattformen können Zugangsdaten über den iCloud-Schlüsselbund
synchronisiert werden, wenn Sie die Schlüsselbund-Synchronisierung aktiviert
haben.

Wenn Sie eine kennwortgeschützte Netzwerkfreigabe verbinden, speichert Edendale
die Freigabeadresse und die Zugangsdaten im selben geschützten
Plattformspeicher. Diese Zugangsdaten werden ausschließlich zur Verbindung mit
der von Ihnen gewählten Freigabe verwendet und weder an BaBaSaMa noch an Dritte
gesendet.

Wenn Sie Ihren eigenen API-Schlüssel für den Untertiteldienst eingeben, wird er
im selben geschützten Plattformspeicher abgelegt und nur an den in Abschnitt 7
beschriebenen Untertiteldienst gesendet.

### 4.4 Supportnachrichten

Wenn Sie BaBaSaMa kontaktieren, erhalten wir die von Ihnen verwendete Adresse,
Ihre Nachricht sowie alle Informationen oder Diagnoseunterlagen, die Sie
beifügen. Bitte senden Sie keine Videodateien, Kennwörter, Zugriffstoken oder
sonstigen sensiblen Materialien.

## 5. Wo Informationen gespeichert werden

### 5.1 Die Edendale-Website

Die Website besteht aus statischen Seiten, die über **GitHub Pages**
veröffentlicht werden, einen Dienst der GitHub, Inc. (ein Unternehmen von
Microsoft). Sie enthält keine Konten, keine Cookies, keinen Browser-Speicher,
keine Analytics und keine Skripte, Schriften oder Bilder von Dritten. Ihre
Sprachpräferenz wird aus den Spracheinstellungen abgeleitet, die Ihr Browser
ohnehin übermittelt, und nicht aufgezeichnet.

Um eine Seite auszuliefern, erhält GitHub zwangsläufig übliche
Anfrageinformationen wie Ihre IP- oder Netzwerkadresse, den angefragten Pfad,
einen Zeitstempel, Ihre User-Agent-Zeichenfolge und weitere übliche
HTTP-Header. GitHub verarbeitet diese Informationen als eigenständig
Verantwortlicher gemäß der
[GitHub-Datenschutzerklärung](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement).
GitHub Pages stellt Websitebetreibern keine Zugriffsprotokolle bereit; BaBaSaMa
erhält, speichert und analysiert daher keine Besucherdaten der Website.

Die App-Link-Seiten der Website (`/search`, `/media`, `/library`, `/play`)
existieren, damit ein Edendale-Link in einer installierten App geöffnet wird.
Eine in einem solchen Link enthaltene Kennung wird von Ihrem Gerät und der
installierten App verarbeitet; die Website übermittelt sie nirgendwohin.

### 5.2 Apple-Plattformen

Der lokale Mediathek-Index, Dateipfade und Security-Scoped Bookmarks verbleiben
in einem gerätelokalen Speicher und sind ausdrücklich von der
CloudKit-Spiegelung ausgenommen.

Wiedergabefortschritt sowie titelbezogene Angaben wie Favoriten,
Merklistenzugehörigkeit und Bewertungen werden im privaten iCloud-Container von
Edendale gespeichert, damit sie auf Ihren Apple-Geräten erscheinen können.
Zugangsdaten für TMDB, Netzwerkfreigaben und den Untertiteldienst können den
iCloud-Schlüsselbund nutzen. Apple verarbeitet diese Informationen gemäß seiner
[Datenschutzrichtlinie](https://www.apple.com/legal/privacy/) und Ihren
iCloud-Einstellungen.

### 5.3 Android

Android speichert Mediathek und persönliche Datensätze von Edendale im lokalen
Anwendungsspeicher. Je nach Ihren Einstellungen für Sicherung und
Geräteübertragung kann das Betriebssystem geeignete Anwendungsdaten in die
Plattformsicherung oder Geräteübertragung einbeziehen. Die geschützten
Speicher für die TMDB-Sitzung, die Netzwerkfreigabe-Zugangsdaten und den
Untertitelschlüssel sind durch die Sicherungsregeln von Edendale sowohl von der
Cloud-Sicherung als auch von der Geräteübertragung ausgenommen, da die
schützenden Schlüssel das Gerät niemals verlassen. Schutz und Aufbewahrung von
Sicherungen hängen von Ihrer Android-Version, Ihrem Gerät, Ihrem Konto und
Ihrem Sicherungsanbieter ab.

### 5.4 Windows

Windows speichert den lokalen Mediathek-Index im lokalen Anwendungsspeicher.
Wiedergabefortschritt, Favoriten, Merklisteneinträge und Bewertungen werden
ebenfalls lokal gespeichert; ist auf dem Gerät OneDrive eingerichtet, legt
Edendale zusätzlich eine Kopie dieser persönlichen Datensätze in Ihrem eigenen
OneDrive-Ordner `Apps/Edendale` ab, damit ein zweiter angemeldeter PC denselben
Stand erreicht. Ohne OneDrive bleibt die App rein lokal. Zugangsdaten bleiben
lokal geschützt und werden niemals in diese Kopie aufgenommen. Microsoft
verarbeitet OneDrive-Daten gemäß den Bedingungen Ihres Microsoft-Kontos und
Ihren Datenschutzeinstellungen.

## 6. TMDB-Anfragen und optionale Kontosynchronisierung

Edendale nutzt TMDB für Katalogsuchen, Bildmaterial, Zusammenfassungen,
Besetzung, Bewertungen, Trailerverweise und die Anreicherung der lokalen
Mediathek. Bei Nutzung dieser Funktionen werden Suchtext und ermittelte
Titelinformationen an TMDB gesendet. Die Anfragen gehen direkt von Ihrem Gerät
an TMDB; sie laufen nicht über einen Server von BaBaSaMa. TMDB kann übliche
Verbindungsinformationen wie eine IP-Adresse sowie Geräte- oder Anfragedetails
erhalten.

Wenn Sie Ihr TMDB-Konto verbinden, kann Edendale Ihre TMDB-Favoriten,
Merkliste und Bewertungen auf Ihre Veranlassung lesen und aktualisieren. Ihre
Wiedergabeposition und Ihr Wiedergabeverlauf werden nicht an TMDB übermittelt.

TMDB verarbeitet Informationen gemäß seiner
[Datenschutzrichtlinie](https://www.themoviedb.org/privacy-policy) und seinen
[API-Bedingungen](https://www.themoviedb.org/api-terms-of-use).

## 7. Untertitelsuche

Edendale kann über **Wyzie Subs** (`sub.wyzie.io`, betrieben von Wyzie) nach
Untertiteln suchen. Eine Anfrage erfolgt nur, wenn Sie während der Wiedergabe
das Untertitelfenster öffnen und eine Suche starten; allein weil ein Video
läuft, wird nichts gesendet.

Wenn Sie eine Suche starten, sendet Edendale die TMDB-Kennung des Titels, bei
einer Episode die Staffel- und Episodennummer, Ihre gewählte Untertitelsprache,
die von Ihnen gesetzten Format- und Hörgeschädigten-Filter sowie einen
API-Schlüssel – entweder einen in Ihrem Build enthaltenen oder einen von Ihnen
in den Einstellungen hinterlegten. Ihr Dateiname, Dateipfad, Ihre Videodaten
und Ihre Mediathek werden nicht gesendet. Wyzie kann übliche
Verbindungsinformationen wie eine IP-Adresse erhalten.

Wenn Sie ein Ergebnis auswählen, lädt Edendale diese Untertiteldatei von Wyzie
oder von dem verlinkten Speicherort herunter und legt sie für die Wiedergabe
ab. Wyzie verarbeitet Informationen nach seinen eigenen Bedingungen und
Datenschutzpraktiken, die BaBaSaMa nicht kontrolliert. Sie können jede
Kontaktaufnahme mit Wyzie vollständig vermeiden, indem Sie keine
Untertitelsuche starten.

## 8. Trailer-Wiedergabe

Edendale kontaktiert YouTube nicht allein deshalb, weil ein Trailer verfügbar
ist. Ein Trailer wird niemals vor Ihrer Handlung abgespielt.

Wenn Sie sich ausdrücklich für das Ansehen eines Trailers entscheiden, öffnen
Apple- und Android-Builds eine datenschutzfreundliche YouTube-Einbettung
(`youtube-nocookie.com`); unter Windows wird der Trailer an Ihren Systembrowser
übergeben, sodass die Anwendung selbst YouTube nicht aufruft. Google und
YouTube können dann Verbindungs-, Geräte-, Verweis-, Wiedergabe- und
Werbeinformationen gemäß der
[Google-Datenschutzerklärung](https://policies.google.com/privacy) und den
YouTube-Bedingungen verarbeiten. Der datenschutzfreundliche Modus begrenzt
einen Teil der YouTube-Datennutzung; er macht die Anfrage nicht anonym, und ein
eingebettetes Video kann Werbung zeigen.

## 9. Berichte von Plattformen und Stores

Edendale selbst enthält auf keiner Plattform Analytics-, Telemetrie- oder
Absturzberichtscode. Das Apple-Datenschutzmanifest der App deklariert keine
erhobenen Datentypen und kein Tracking.

Unabhängig von Edendale kann die Plattform oder der Store, aus dem Sie
installieren, BaBaSaMa aggregierte Berichte über die Anwendung bereitstellen.
Diese Daten stammen von der Plattform, nicht aus etwas, das Edendale sendet,
und Sie steuern sie über die Plattform:

- **Apple.** App Store Connect kann aggregierte Analysen und Absturzberichte
  für App-Store-Builds bereitstellen. Apple bezieht die Daten Ihres Geräts nur
  ein, wenn Sie unter Einstellungen → Datenschutz & Sicherheit → Analyse &
  Verbesserungen die Option **Mit App-Entwicklern teilen** aktiviert haben.
  Deaktivieren beendet dies.
- **Android.** Wo Edendale über Google Play vertrieben wird, kann die Play
  Console Absturz- und ANR-Berichte („Anwendung reagiert nicht“) sowie
  aggregierte Qualitätskennzahlen bereitstellen. Sie steuern dies über
  Einstellungen → Google → Nutzung & Diagnose sowie über die Auswahl, die Ihnen
  beim Melden eines Absturzes angeboten wird.
- **Windows.** Wo Edendale über den Microsoft Store vertrieben wird, kann
  Partner Center aggregierte Zustands- und Nutzungsberichte bereitstellen.
  Windows-Diagnosedaten steuern Sie unter Einstellungen → Datenschutz &
  Sicherheit → Diagnose & Feedback.
- **Direkte Downloads.** Wo Edendale als direkter Download über GitHub
  vertrieben wird, erhält GitHub die Downloadanfrage und meldet BaBaSaMa nur
  aggregierte Downloadzahlen.

Diese Berichte sind aggregiert oder diagnostisch. Sie verraten BaBaSaMa nicht,
was Sie angesehen haben, was sich in Ihrer Mediathek befindet oder wer Sie
sind.

## 10. Wie Informationen verwendet werden

| Zweck | Informationen | Übliche Rechtsgrundlage, sofern erforderlich |
|---|---|---|
| Von Ihnen ausgewählte Medien indexieren und abspielen | Lokale Medien- und Mediathekdaten | Erfüllung des von Ihnen gewünschten Dienstes |
| TMDB-Metadaten und Suchergebnisse abrufen | Suchtext und ermittelte Titelinformationen | Erfüllung des Dienstes; berechtigte Interessen |
| Von Ihnen angeforderte Untertitel finden und herunterladen | TMDB-Kennung, Staffel und Episode, Sprach- und Filterauswahl | Ihre Anfrage |
| Fortschritt, Einstellungen und Bewertungen speichern | Persönliche Mediendatensätze | Erfüllung des Dienstes |
| Datensätze über Ihr Plattformkonto synchronisieren | Wiedergabe- und persönliche Mediendatensätze | Ihre Anfrage oder Einwilligung; Erfüllung des Dienstes |
| Verbindung zu einem optionalen TMDB-Konto oder einer Netzwerkfreigabe herstellen | Konto-Token oder Freigabe-Zugangsdaten | Ihre Anfrage oder Einwilligung |
| Supportanfragen beantworten | Kontaktdaten und Nachrichteninhalte | Berechtigte Interessen; von Ihnen erbetene Schritte |
| Die Anwendungen pflegen und verbessern | Aggregierte Plattform- oder Store-Berichte | Berechtigte Interessen an Qualität und Stabilität |

Beruht eine Verarbeitung auf Ihrer Einwilligung, können Sie diese widerrufen,
indem Sie das betreffende Konto trennen, die Funktion deaktivieren oder die
Plattformberechtigungen ändern.

## 11. Weitergabe und Dienstleister

BaBaSaMa verkauft Ihre Informationen nicht. Da BaBaSaMa für Edendale keinen
Server betreibt, werden Informationen nur im erforderlichen Umfang
offengelegt:

- an **TMDB**, wenn Sie suchen, einen Titel anreichern, Metadaten laden oder
  ein optional verbundenes TMDB-Konto nutzen;
- an **Wyzie**, wenn Sie eine Untertitelsuche starten;
- an **Apple**, **Google** oder **Microsoft**, wenn Sie deren Plattformspeicher-,
  Sicherungs-, Anmeldedaten- oder Synchronisierungsdienste aktivieren oder
  nutzen oder wenn diese die in Abschnitt 9 beschriebenen aggregierten Berichte
  bereitstellen;
- an **YouTube/Google**, nachdem Sie ausdrücklich einen Trailer geöffnet haben;
- an den Netzwerkserver, den Sie beim Verbinden einer Freigabe auswählen;
- an **GitHub**, das die Website und etwaige direkte Downloads ausliefert; sowie
- soweit nach geltendem Recht oder aufgrund eines wirksamen Rechtsverfahrens
  erforderlich.

Jede dieser Organisationen verarbeitet Informationen als eigenständig
Verantwortlicher nach ihren eigenen Bedingungen und Datenschutzerklärungen.
Keine von ihnen handelt als Auftragsverarbeiter auf Weisung von BaBaSaMa, und
BaBaSaMa erhält über die in Abschnitt 9 beschriebenen aggregierten Berichte
hinaus keine Kopie der von ihnen erhobenen Daten.

## 12. Aufbewahrung und Löschung

- **Website:** Es gibt nichts zu löschen. Die Seite setzt keine Cookies und
  nutzt keinen Browser-Speicher. Anfragedaten, die GitHub erreichen, werden
  nach den Richtlinien von GitHub aufbewahrt und stehen BaBaSaMa nicht zur
  Verfügung.
- **Lokaler Speicher der Apps:** Das Entfernen einer Quelle oder eines
  Datensatzes betrifft den lokalen Mediathek-Index; Wiedergabe- oder
  Kontodatensätze werden dadurch nicht zwingend entfernt. Das Löschen der
  Anwendungsdaten kann den lokalen Container gemäß den Steuerungen der jeweiligen
  Plattform entfernen. Verhalten bei Deinstallation, Sicherung und
  Wiederherstellung unterscheidet sich je nach Plattform und entfernt nicht
  zwingend Cloud- oder Sicherungskopien.
- **Apple:** Private CloudKit-Datensätze und synchronisierte
  iCloud-Schlüsselbundeinträge können nach der Deinstallation bestehen bleiben.
  Verwalten Sie sie über die verfügbaren iCloud-, Schlüsselbund-, App- oder
  Gerätesteuerungen. Edendale bietet derzeit keine plattformübergreifende
  Funktion zum vollständigen Löschen.
- **Android:** Eine Plattformsicherung oder Geräteübertragungskopie kann gemäß
  den Steuerungen und Aufbewahrungsfristen von Google, Ihrem Gerätehersteller
  oder Ihrem Sicherungsanbieter bestehen bleiben.
- **Windows:** Eine Kopie in Ihrem OneDrive-Ordner `Apps/Edendale` bleibt
  bestehen, bis Sie sie über OneDrive und etwaige Papierkorb- oder
  Wiederherstellungsfunktionen löschen.
- **Heruntergeladene Untertitel** verbleiben auf Ihrem Gerät, bis Sie sie
  entfernen. Wyzie führt für Sie kein Konto; etwaige Anfrageprotokolle
  unterliegen Wyzie.
- Ein verbundenes TMDB-Konto bewahrt Informationen gemäß den Einstellungen und
  Richtlinien von TMDB auf. Das Trennen von Edendale löscht bereits in Ihrem
  TMDB-Konto gespeicherte Informationen nicht automatisch; verwalten Sie diese
  Datensätze über TMDB.
- Supportkorrespondenz wird nur so lange aufbewahrt, wie dies zur Beantwortung,
  zur Führung eines Supportvorgangs oder zur Erfüllung gesetzlicher Pflichten
  vernünftigerweise erforderlich ist.

Da BaBaSaMa auf Informationen, die ausschließlich auf Ihrem Gerät oder in einem
privaten Plattformkonto liegen, in der Regel nicht zugreifen kann, nutzen Sie
bitte die oben genannten plattformspezifischen Steuerungen. Ein
Datenschutzantrag an BaBaSaMa kann Informationen, auf die BaBaSaMa keinen
Zugriff hat, nicht unmittelbar löschen.

## 13. Internationale Übermittlungen

GitHub, TMDB, Wyzie, Apple, Google und Microsoft können Informationen in
anderen Ländern als Ihrem eigenen verarbeiten. Ihre Datenschutzerklärungen
beschreiben die Garantien, die sie für internationale Übermittlungen
verwenden. BaBaSaMa übermittelt Ihre Informationen nicht selbst, da BaBaSaMa
sie nicht erhält.

## 14. Sicherheit

Edendale verwendet verschlüsselte Netzwerkverbindungen für unterstützte
Onlinedienste, verweigert unverschlüsselten Datenverkehr und nutzt
plattformgeschützten Speicher für Zugangsdaten. Der Dienst hält Videodaten und
persönliche Datensätze bewusst außerhalb eines vom Entwickler betriebenen
Speichers – einen solchen gibt es nicht. Keine Sicherheitsmaßnahme kann
absoluten Schutz garantieren; schützen Sie daher Ihr Gerät, Ihre
Plattformkonten, Ihre Netzwerkfreigaben und Ihre Sicherungen.

## 15. Datenschutz von Kindern

Edendale ist ein Medienwerkzeug für ein allgemeines Publikum und richtet sich
nicht an Kinder unter 13 Jahren. BaBaSaMa erhebt über Edendale wissentlich
keine personenbezogenen Daten von Kindern. Erziehungsberechtigte, die
annehmen, dass ein Kind personenbezogene Daten an BaBaSaMa gesendet hat, können
uns kontaktieren und deren Löschung verlangen.

## 16. Ihre Datenschutzrechte

Je nach Wohnsitz haben Sie möglicherweise das Recht auf Information sowie auf
Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit oder
Widerspruch, ferner das Recht, eine Einwilligung zu widerrufen oder sich bei
einer Datenschutzaufsichtsbehörde zu beschweren.

Nahezu alle Edendale-Informationen unterliegen Ihrer unmittelbaren Kontrolle,
da sie auf Ihrem Gerät oder in Ihrem Plattformkonto verbleiben. Für
Informationen, die BaBaSaMa vorliegen, etwa eine Supportnachricht, wenden Sie
sich an **long@babasama.com**. Wir benötigen möglicherweise ausreichende
Angaben, um Ihre Anfrage zu prüfen und zu beantworten.

## 17. Änderungen dieser Erklärung

Wir können diese Erklärung aktualisieren, wenn sich Funktionen, Plattformen,
Anbieter oder rechtliche Pflichten von Edendale ändern. Wir passen dann das
Datum **Zuletzt aktualisiert** an und weisen, soweit angemessen, zusätzlich
darauf hin. Wesentlich abweichende Verarbeitungen werden nicht rückwirkend
angewendet, soweit eine Einwilligung oder eine andere Rechtsgrundlage
erforderlich ist.

## 18. Kontakt

Fragen, Datenschutzanträge oder Beschwerden richten Sie bitte an:

- **BaBaSaMa**
- **long@babasama.com**
