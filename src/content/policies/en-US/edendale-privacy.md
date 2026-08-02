---
title: "Privacy Policy"
app: "Edendale"
lastUpdated: "August 2, 2026"
lastUpdatedLabel: "Last updated"
contentLanguage: "en-US"
draft: false
---

> **English draft for review.** Before publishing, confirm the legal name and
> address of the operator and obtain legal review of this document. This
> template is not a substitute for legal advice.

## 1. Introduction and scope

This Privacy Policy explains how **Edendale** handles information when you use
an official Edendale application or the Edendale website (together, the
"**Service**").

Edendale is a local-first video player and personal watch tracker. It lets you
play media that you choose, build a private library, enrich titles with
information from The Movie Database ("**TMDB**"), search for subtitles, and
keep personal watch records. Edendale does not provide, host, or upload movies
or television episodes for you.

The Edendale website is an informational site. It describes the applications,
links to the project's source code, and answers app links so that a shared
Edendale link can open in an installed app. It is not a video player, it has no
accounts, and it stores nothing about you.

This policy applies to official builds and the official website. Independent
forks and self-hosted copies are controlled by their respective operators and
may handle information differently.

## 2. Who is responsible

The operator responsible for the official Service is:

- **BaBaSaMa**
- Email: **long@babasama.com**
- **[Before publication: add the operator's legal name and postal address if
  required in the countries where Edendale is offered.]**

## 3. Local-first privacy summary

Edendale is designed to minimize data collection:

- You do not need an Edendale account.
- BaBaSaMa operates no server, database, or proxy for Edendale. There is
  nowhere for your library, viewing, or account information to be sent to us.
- Your video and subtitle files are not uploaded to BaBaSaMa or to any third
  party.
- Edendale contains no advertising, marketing analytics, crash-reporting, or
  behavioral-tracking software on any platform. YouTube may display
  advertising after you choose to open a trailer.
- BaBaSaMa does not sell or rent personal information.
- The library index and your personal records are stored on your device or in
  storage attached to your own platform account, as described below.
- Network access is limited to features you use: TMDB metadata and optional
  account sync, subtitle search that you start, user-selected network folders,
  platform storage or sync, and a trailer opened by your explicit action.

An optional TMDB account connection is an account with TMDB, not an Edendale
account.

## 4. Information handled by Edendale

### 4.1 Local media and library information

When you choose a file, folder, or network share, Edendale may process:

- file and folder names;
- relative paths, platform file identifiers, or security-scoped bookmarks;
- file type, size, and modification date;
- the title, release year, show name, season number, and episode number parsed
  from a filename;
- a user-selected network server and share address; and
- TMDB identifiers, artwork links, summaries, cast, runtime, and other metadata
  used to enrich your local library.

Filename classification happens locally before any metadata request. Edendale
may then send a parsed movie or show title, year, season number, or episode
number to TMDB to find matching metadata.

Your video and subtitle bytes remain in the location you selected and are read
for playback. They are not uploaded to BaBaSaMa or to a third party. If you
play from a network share, your device communicates with that share.

### 4.2 Watch and personal media records

Depending on the feature and platform, Edendale may store:

- playback position, watched duration, completion status, and last-watched
  time;
- favorites and watchlist choices;
- your personal rating;
- player and interface preferences, including your subtitle language and
  hearing-impaired filter; and
- a limited display snapshot such as a title or poster reference, used for
  home-screen widgets and resume shelves.

These records are for your personal use.

### 4.3 Credentials and account information

If you connect an optional TMDB account, Edendale receives an access token and
TMDB account identifier so it can synchronize supported favorites, watchlist
entries, and ratings. Edendale stores this credential using the platform's
protected credential storage — the Keychain on Apple platforms, an
Android Keystore-backed encrypted store on Android, and DPAPI on Windows. On
Apple platforms, a credential may synchronize through iCloud Keychain when you
have enabled Keychain sync.

If you connect a password-protected network share, Edendale stores the share
address and credentials using the same protected platform storage. Those
credentials are used only to connect to the share you selected and are not sent
to BaBaSaMa or to any third party.

If you enter your own subtitle-service API key, it is stored in that same
protected platform storage and is sent only to the subtitle service described
in section 7.

### 4.4 Support messages

If you contact BaBaSaMa, we receive the address you use, your message, and any
information or diagnostic material you choose to include. Please do not send
video files, passwords, access tokens, or other sensitive material.

## 5. Where information is stored

### 5.1 The Edendale website

The website is a set of static pages published through **GitHub Pages**, a
service of GitHub, Inc. (a Microsoft company). It contains no accounts, no
cookies, no browser storage, no analytics, and no third-party scripts, fonts,
or images. Your language preference is matched from the language settings your
browser already sends and is not recorded.

To serve a page, GitHub necessarily receives ordinary request information such
as your IP or network address, the requested path, a timestamp, your user-agent
string, and other usual HTTP headers. GitHub processes that information as an
independent controller under the
[GitHub Privacy Statement](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement).
GitHub Pages does not give a site owner access logs, so BaBaSaMa does not
receive, retain, or analyze website visitor data.

The website's app-link pages (`/search`, `/media`, `/library`, `/play`) exist so
that an Edendale link opens in an installed app. Any identifier in such a link
is handled by your device and the installed app; the website does not transmit
it anywhere.

### 5.2 Apple platforms

The local library index, file paths, and security-scoped bookmarks remain in a
device-local store and are explicitly excluded from CloudKit mirroring.

Watch progress and per-title choices such as favorites, watchlist membership,
and ratings are stored in Edendale's private iCloud container so they can
appear on your Apple devices. TMDB, network-share, and subtitle-service
credentials may use iCloud Keychain. Apple processes this information under its
[Privacy Policy](https://www.apple.com/legal/privacy/) and your iCloud settings.

### 5.3 Android

Android stores Edendale's library and personal records in local application
storage. Depending on your Android backup and device-transfer settings, the
operating system may include eligible application data in platform backup or
device transfer. The protected TMDB session, network-share credential, and
subtitle-key stores are excluded from both cloud backup and device transfer by
Edendale's backup rules, because the keys that protect them never leave the
device. Backup protection and retention depend on your Android version, device,
account, and backup provider.

### 5.4 Windows

Windows stores the local library index in local application storage. Watch
progress, favorites, watchlist entries, and ratings are also stored locally
and, when OneDrive is configured on the device, Edendale places a replica of
those personal records in your own OneDrive `Apps/Edendale` folder so a second
signed-in PC converges. Without OneDrive the app stays local-only. Credentials
remain protected locally and are never included in that replica. Microsoft
processes OneDrive data under your Microsoft account terms and privacy
settings.

## 6. TMDB requests and optional account sync

Edendale uses TMDB for catalogue searches, artwork, summaries, cast, ratings,
trailer references, and local-library enrichment. Search text and parsed title
information are sent to TMDB when these features are used. Requests go directly
from your device to TMDB; they do not pass through a BaBaSaMa server. TMDB may
receive ordinary connection information such as an IP address and device or
request details.

If you connect your TMDB account, Edendale may read and update your TMDB
favorites, watchlist, and ratings at your direction. Your playback position
and watch history are not submitted to TMDB.

TMDB handles information under its
[Privacy Policy](https://www.themoviedb.org/privacy-policy) and
[API Terms](https://www.themoviedb.org/api-terms-of-use).

## 7. Subtitle search

Edendale can search for subtitles through **Wyzie Subs**
(`sub.wyzie.io`, operated by Wyzie). A request is made only when you open the
subtitle panel during playback and start a search; nothing is sent merely
because a video is playing.

When you start a search, Edendale sends the title's TMDB identifier, the season
and episode numbers for an episode, your chosen subtitle language, the format
and hearing-impaired filters you selected, and an API key — either one included
in your build or one you entered in Settings. Your filename, file path, video
data, and library are not sent. Wyzie may receive ordinary connection
information such as an IP address.

If you choose a result, Edendale downloads that subtitle file from Wyzie or the
location it points to and stores it for playback. Wyzie handles information
under its own terms and privacy practices, which are outside BaBaSaMa's
control. You can avoid contacting Wyzie entirely by not starting a subtitle
search.

## 8. Trailer playback

Edendale does not contact YouTube merely because a trailer is available. A
trailer never plays before your action.

When you explicitly choose to watch a trailer, Apple and Android builds open a
privacy-enhanced YouTube embed (`youtube-nocookie.com`), and Windows hands the
trailer to your system browser so the application itself makes no call to
YouTube. Google and YouTube may then process connection, device, referral,
viewing, and advertising information under the
[Google Privacy Policy](https://policies.google.com/privacy) and YouTube terms.
Privacy-enhanced mode limits some YouTube data use; it does not make the
request anonymous, and an embedded video may show advertising.

## 9. Platform and store reporting

Edendale itself contains no analytics, telemetry, or crash-reporting code on
any platform. Its Apple privacy manifest declares no collected data types and
no tracking.

Separately from Edendale, the platform or store you install from may give
BaBaSaMa aggregate reports about the application. This data comes from the
platform, not from anything Edendale sends, and you control it through the
platform:

- **Apple.** App Store Connect may provide aggregate analytics and crash
  reports for App Store builds. Apple only includes your device's data if you
  have turned on **Share With App Developers** in
  Settings → Privacy & Security → Analytics & Improvements. Turning it off
  stops it.
- **Android.** Where Edendale is distributed through Google Play, Play Console
  may provide crash and "application not responding" reports and aggregate
  quality metrics. You control this through Settings → Google → Usage &
  diagnostics and through the choice you are offered when reporting a crash.
- **Windows.** Where Edendale is distributed through the Microsoft Store,
  Partner Center may provide aggregate health and usage reports. You control
  Windows diagnostic data in Settings → Privacy & security → Diagnostics &
  feedback.
- **Direct downloads.** Where Edendale is distributed as a direct download from
  GitHub, GitHub receives the download request and reports only aggregate
  download counts to BaBaSaMa.

These reports are aggregate or diagnostic. They do not tell BaBaSaMa what you
watched, what is in your library, or who you are.

## 10. How information is used

| Purpose | Information | Typical legal basis where required |
|---|---|---|
| Index and play media you select | Local media and library information | Performance of the Service you request |
| Retrieve TMDB metadata and search results | Search text and parsed title information | Performance of the Service; legitimate interests |
| Find and download a subtitle you asked for | TMDB identifier, season and episode, language and filter choices | Your request |
| Save progress, preferences, and ratings | Personal media records | Performance of the Service |
| Synchronise records through your platform account | Watch and personal media records | Your request or consent; performance of the Service |
| Connect to an optional TMDB account or network share | Account token or share credentials | Your request or consent |
| Answer support requests | Contact details and message contents | Legitimate interests; steps requested by you |
| Maintain and improve the applications | Aggregate platform or store reports | Legitimate interests in quality and stability |

Where processing relies on consent, you may withdraw it by disconnecting the
relevant account, disabling the feature, or changing platform permissions.

## 11. Sharing and service providers

BaBaSaMa does not sell your information. Because BaBaSaMa operates no server
for Edendale, information is disclosed only as needed:

- to **TMDB** when you search, enrich a title, load metadata, or use an optional
  connected TMDB account;
- to **Wyzie** when you start a subtitle search;
- to **Apple**, **Google**, or **Microsoft** when you enable or use their
  platform storage, backup, credential, or sync services, or when they provide
  the aggregate reports described in section 9;
- to **YouTube/Google** after you explicitly open a trailer;
- to the network server you choose when you connect a share;
- to **GitHub**, which serves the website and any direct downloads; and
- where required by applicable law or valid legal process.

Each of these organizations processes information as an independent controller
under its own terms and privacy policy. None of them acts as a processor on
BaBaSaMa's instructions, and BaBaSaMa receives no copy of what they collect
beyond the aggregate reports described in section 9.

## 12. Retention and deletion

- **Website:** nothing to delete. The site keeps no cookies or browser storage.
  Request data reaching GitHub is retained under GitHub's own policies and is
  not available to BaBaSaMa.
- **Native local storage:** removing a source or record affects the local
  library index; it does not necessarily remove watch or account records.
  Clearing application data may remove the local container according to that
  platform's controls. Uninstall, backup, and recovery behavior varies by
  platform and does not necessarily remove cloud or backup copies.
- **Apple:** private CloudKit records and synchronized iCloud Keychain items may
  remain after uninstalling. Manage them through the available iCloud,
  Keychain, app, or device controls. Edendale does not currently provide one
  cross-platform erase-all control.
- **Android:** a platform backup or device-transfer copy may remain according
  to your Google, device-maker, or backup-provider controls and retention.
- **Windows:** a replica in your OneDrive `Apps/Edendale` folder remains until
  you delete it through OneDrive and any applicable recycle-bin or recovery
  controls.
- **Downloaded subtitles** stay on your device until you remove them. Wyzie has
  no account for you; any request record it keeps is governed by Wyzie.
- A connected TMDB account retains information according to TMDB's settings and
  policies. Disconnecting Edendale does not automatically delete information
  already stored in your TMDB account; manage those records through TMDB.
- Support correspondence is kept only as long as reasonably needed to respond,
  maintain a support record, or meet legal obligations.

Because BaBaSaMa generally cannot access information stored only on your device
or in a private platform account, use the platform-specific controls above. A
privacy request to BaBaSaMa cannot directly erase information that BaBaSaMa
cannot access.

## 13. International transfers

GitHub, TMDB, Wyzie, Apple, Google, and Microsoft may process information in
countries other than your own. Their privacy policies describe the safeguards
they use for international transfers. BaBaSaMa does not itself transfer your
information, because it does not receive it.

## 14. Security

Edendale uses encrypted network connections for supported online services,
refuses cleartext traffic, and uses platform-protected storage for credentials.
The Service deliberately keeps video bytes and personal records outside
developer-operated storage — there is no developer-operated storage. No security
measure can guarantee absolute protection, so you should protect your device,
platform accounts, network shares, and backups.

## 15. Children's privacy

Edendale is a general-audience media utility and is not directed to children
under 13. BaBaSaMa does not knowingly collect personal information from
children through Edendale. A parent or guardian who believes a child has sent
personal information to BaBaSaMa may contact us to request its deletion.

## 16. Your privacy rights

Depending on where you live, you may have rights to be informed and to request
access, correction, deletion, restriction, portability, or objection, and to
withdraw consent or complain to a data-protection authority.

Almost all Edendale information is under your direct control because it stays
on your device or in your platform account. For information that BaBaSaMa
holds, such as a support message, contact **long@babasama.com**. We may need
enough information to verify and answer your request.

## 17. Changes to this policy

We may update this policy when Edendale's features, platforms, providers, or
legal obligations change. We will revise the **Last updated** date and provide
additional notice where appropriate. Materially different processing will not
be applied retroactively where consent or another legal basis is required.

## 18. Contact

Questions, privacy requests, or complaints may be sent to:

- **BaBaSaMa**
- **long@babasama.com**
