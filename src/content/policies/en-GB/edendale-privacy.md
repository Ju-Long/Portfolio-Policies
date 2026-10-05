---
title: "Privacy Policy"
app: "Edendale"
lastUpdated: "5 October 2026"
lastUpdatedLabel: "Last updated"
contentLanguage: "en-GB"
draft: false
---

## 1. Introduction and scope

This Privacy Policy explains how **Edendale** handles information when you use
an official Edendale application or the Edendale website (together, the
"**Service**").

Edendale is a local-first video player and personal watch tracker. It lets you
play media that you choose — from your device, from servers you run, or from
cloud storage accounts you link — build a private library, enrich titles with
information from The Movie Database ("**TMDB**"), search for subtitles, show
optional skip prompts, and keep personal watch records. Edendale does not
provide, host, or upload movies or television episodes for you.

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

## 3. Local-first privacy summary

Edendale is designed to minimise data collection:

- You do not need an Edendale account.
- BaBaSaMa operates no server, database, or proxy for Edendale. There is
  nowhere for your library, viewing, files, or account information to be sent
  to us.
- Your video and subtitle files are not uploaded to BaBaSaMa or to any third
  party.
- When you link Google Drive, Microsoft OneDrive, or Dropbox, you sign in
  directly with that provider and Edendale asks only for read-only access.
  Your files and sign-in tokens travel only between your device and that
  provider.
- Edendale contains no advertising, marketing analytics, crash-reporting, or
  behavioural-tracking software on any platform. YouTube may display
  advertising after you choose to open a trailer.
- BaBaSaMa does not sell or rent personal information.
- The library index and your personal records are stored on your device or in
  storage attached to your own platform account, as described below.
- Network access is limited to features you use: TMDB metadata and optional
  account sync, the servers and storage accounts you link, subtitle search
  that you start, skip prompts if you turn them on, platform storage or sync,
  and a trailer opened by your explicit action.

An optional TMDB, Google, Microsoft, or Dropbox account connection is an
account with that provider, not an Edendale account.

## 4. Information handled by Edendale

### 4.1 Media and library information

When you choose a file or folder, or link a server or cloud storage folder,
Edendale may process:

- file and folder names;
- relative paths, platform file identifiers, security-scoped bookmarks, or the
  identifiers a storage provider assigns to each file and folder;
- file type, size, and modification date, and a video's duration where the
  storage provider reports it;
- the title, release year, show name, season number, and episode number parsed
  from a filename;
- the address of a server you link, and the provider, account, and folder of a
  cloud storage source; and
- TMDB identifiers, artwork links, summaries, cast, runtime, and other metadata
  used to enrich your local library.

Filename classification happens locally before any metadata request. Edendale
may then send a parsed movie or show title, year, season number, or episode
number to TMDB to find matching metadata. The filename itself is not sent.

Your video and subtitle bytes remain in the location you selected and are read
for playback. When a video comes from a server or cloud storage, Edendale reads
the parts it needs as you watch and holds a short read-ahead buffer in memory;
it does not save a copy of the video. Videos are not uploaded to BaBaSaMa or to
a third party.

### 4.2 Watch and personal media records

Depending on the feature and platform, Edendale may store:

- playback position, watched duration, completion status, and last-watched
  time;
- favourites and watchlist choices;
- your personal rating;
- player and interface preferences, such as your subtitle language and
  hearing-impaired filter, subtitle appearance, skip lengths and hold speeds,
  audio and picture adjustments, and the audio track, subtitle, and speed you
  last chose for a title;
- a record of the subtitles you downloaded and the video each belongs to; and
- a limited display snapshot such as a title or poster reference, used for
  home-screen widgets, resume shelves, and, if you turn it on, the Android TV
  home screen.

These records are for your personal use.

### 4.3 Credentials and account information

Edendale stores every credential in the platform's protected credential
storage — the Keychain on Apple platforms, an Android Keystore-backed encrypted
store on Android, and DPAPI on Windows. Credentials are never written into your
library, stored links, or logs, and are never sent to BaBaSaMa.

- **TMDB account.** If you connect an optional TMDB account, Edendale receives
  an access token and TMDB account identifier so it can synchronise supported
  favourites, watchlist entries, and ratings.
- **Servers you link.** For a password-protected SMB share, SFTP server, or
  WebDAV server, Edendale stores the server address, user name, and password.
  For S3-compatible storage, it stores the access key ID and secret access key.
  For an SFTP server, it also stores the fingerprint of the server's host key
  so it can warn you if that key changes. These credentials are sent only to
  the server you linked.
- **Cloud storage accounts.** When you link Google Drive, Microsoft OneDrive,
  or Dropbox, Edendale stores a refresh token, the account identifier, the
  email address and display name the provider returns, and the permissions you
  granted. Short-lived access tokens are kept only in memory. Section 6
  describes what each provider shares with Edendale.
- **Subtitle-service key.** If you enter your own subtitle-service API key, it
  is sent only to the subtitle service described in section 8.

On Apple platforms, these credentials may synchronise through iCloud Keychain
when you have enabled Keychain sync, as described in section 5.2.

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
receive, retain, or analyse website visitor data.

The website's app-link pages (`/search`, `/media`, `/library`, `/play`) exist so
that an Edendale link opens in an installed app. Any identifier in such a link
is handled by your device and the installed app; the website does not transmit
it anywhere.

### 5.2 Apple platforms

The local library index — including file paths, security-scoped bookmarks, and
the names and identifiers of files from linked servers and cloud storage —
remains in a device-local store and is explicitly excluded from CloudKit
mirroring. Downloaded subtitles and the record of which video each belongs to
are also kept only on the device.

Watch progress and per-title choices such as favourites, watchlist membership,
and ratings are stored in Edendale's private iCloud container so they can
appear on your Apple devices. These records identify titles by their TMDB
identifiers; they contain no filenames, paths, or storage-provider
identifiers.

Credentials for TMDB, servers, cloud storage accounts, and the subtitle service
may synchronise through iCloud Keychain, so one sign-in can cover your iPhone,
iPad, Mac, and Apple Vision Pro. Apple TV does not receive iCloud Keychain
items. To link an account or server on Apple TV, you can approve it on a nearby
iPhone or iPad that has Edendale installed and is signed in to your Apple
Account or a Family Sharing member's. The account is sent directly between the
two devices over an encrypted local-network connection and does not pass
through BaBaSaMa. Apple processes iCloud information under its
[Privacy Policy](https://www.apple.com/legal/privacy/) and your iCloud settings.

### 5.3 Android

Android stores Edendale's library and personal records in local application
storage. Depending on your Android backup and device-transfer settings, the
operating system may include eligible application data in platform backup or
device transfer. Edendale's backup rules exclude its protected stores — the
TMDB session, server logins, SFTP host keys, cloud storage accounts, and the
subtitle key — from both cloud backup and device transfer, because the keys
that protect them never leave the device. Backup protection and retention
depend on your Android version, device, account, and backup provider.

On Android TV and Google TV, **Continue Watching on Home Screen** is off by
default. If you turn it on, Edendale writes each in-progress title's name,
artwork, and position, or a show's next episode, to the home screen's Watch
Next row through the system TV provider. These rows stay on the TV and
Edendale sends nothing over the network for them, but the home-screen app
(Google's app, on Google TV) can read them. Turning the setting off removes
them.

### 5.4 Windows

Windows stores the library index, watch progress, favourites, watchlist
entries, ratings, and player settings in local application storage. When
OneDrive is configured on the device, Edendale places a replica of your watch
and personal media records in your own OneDrive `Apps/Edendale` folder so a
second signed-in PC converges. Without OneDrive the app stays local-only.
Credentials and downloaded subtitles remain on the device and are never
included in that replica. A OneDrive account you link as a storage source
(section 6.4) is separate from this replica: signing it out leaves the replica
alone, and turning the replica off leaves the source alone. Microsoft processes
OneDrive data under your Microsoft account terms and privacy settings.

## 6. Storage you link

Edendale can play videos from servers you run and from cloud storage accounts
you link. The services available differ by platform. In every case, Edendale
connects directly from your device to the server or provider; nothing passes
through a BaBaSaMa server.

Edendale lists the contents of the folders you browse or link, including their
subfolders, and reads the video files you play. A folder listing includes the
names, sizes, and dates of every item in it; Edendale keeps only folders and
video files in its library and ignores everything else. Edendale never creates,
changes, moves, shares, or deletes anything in your storage.

### 6.1 Your own servers

SMB, NFS, SFTP, WebDAV, and S3-compatible storage (such as Amazon S3, Backblaze
B2, Cloudflare R2, Wasabi, or MinIO) are reached at the address you enter. The
server — and, for a hosted service, its operator — receives your login, the
folder listings and file reads Edendale requests, and ordinary connection
information such as your IP address. Whoever runs that server governs how it
handles this information.

### 6.2 Signing in to a cloud storage provider

Google Drive, Microsoft OneDrive, and Dropbox use the provider's own sign-in
page, opened in your system browser or your operating system's secure sign-in
window (OAuth 2.0 with PKCE). Edendale never sees your password. After you
approve the requested permissions, the provider returns tokens to Edendale on
your device, and Edendale asks the provider which account they belong to so it
can label the account in **Settings → Accounts**.

On a TV, you may instead approve a Microsoft sign-in by entering a code on
another device, or, on Apple TV, approve the account from your iPhone or iPad
as described in section 5.2.

You can see and remove linked accounts in **Settings → Accounts**. Removing a
source does not sign its account out, so other sources using that account keep
working.

### 6.3 Google Drive and Google user data

Google Drive is currently available in Edendale on Apple platforms. If it
becomes available on another platform, it will request the same access and
handle Google user data as described in this section.

**Permissions Edendale requests**

| Permission (scope) | Why Edendale requests it |
|---|---|
| `openid` and `email` | To identify the Google Account you signed in with and show its email address in Settings → Accounts |
| `https://www.googleapis.com/auth/drive.readonly` ("See and download all your Google Drive files") | To show your folders so you can choose one, add the videos in folders you link to your library, and play those videos |

Edendale does not request permission to create, edit, move, share, or delete
Drive files, and it cannot do so.

**Google user data Edendale accesses**

- **Account information:** your Google Account's unique identifier and your
  email address.
- **File and folder metadata**, from My Drive, Shared with me, and your shared
  drives, limited to the folders you open in Edendale and the folders you link
  (with their subfolders): each item's ID, name, type (MIME type), size,
  last-modified time, and the video duration Google Drive reports; for a
  shortcut, the ID and type of the item it points to; and the names and IDs of
  your shared drives.
- **File content:** the content of the video files you play, read in parts as
  you watch.

Edendale requests only these fields. It does not read file descriptions,
comments, sharing settings, owners, or revision history. It skips Google Docs,
Sheets, Slides, and other Google file formats, and it opens no file other than
a video you play.

**How Edendale uses Google user data**

Edendale uses Google user data only to provide the Google Drive features you
use in Edendale:

- showing your Drive folders so you can choose one;
- adding the videos in linked folders to your library and updating it when you
  rescan, which includes classifying their filenames on your device to
  recognise the title, year, season, and episode;
- streaming a video when you play it; and
- labelling the linked account and keeping it signed in.

Edendale does not use Google user data for advertising, does not sell it, does
not use it to build a profile of you, and does not use it to develop, improve,
or train generalised artificial-intelligence or machine-learning models.
BaBaSaMa never receives your Google user data, so no person at BaBaSaMa can read
it.

**How Google user data is stored and protected**

- The refresh token, your Google Account identifier, your email address, and
  the permissions you granted are stored in the platform's protected credential
  storage (section 4.3). On Apple platforms, they may synchronise to your own
  Apple devices through iCloud Keychain, which Apple protects with end-to-end
  encryption. Access tokens expire within an hour and are kept only in memory.
- The metadata of the video files in linked folders (ID, name, size, date, and
  duration), together with the titles recognised from their names, is stored
  in Edendale's device-local library. It is not synchronised through iCloud.
  Your device's own backup, such as iCloud Backup or a computer backup, may
  include it according to your backup settings.
- Video content is held only in a short in-memory buffer while you watch. It is
  never saved to storage or uploaded.
- Every request to Google uses an encrypted HTTPS connection.

**How Google user data is shared**

Edendale does not transfer Google user data to BaBaSaMa. It shares Google user
data only in the following ways, each made from your device to provide a
feature you use:

- **TMDB** receives the title, year, season, and episode number recognised from
  a video's filename, so your library can show the matching movie or TV
  details. TMDB does not receive the filename, the file's ID, its content, or
  your Google Account details.
- **TheIntroDB**, only if you turn on skip prompts, receives the matched
  title's TMDB identifier, season and episode numbers, and the video's duration
  (section 9).
- **Wyzie Subs**, only when you search for subtitles, receives the matched
  title's TMDB identifier and season and episode numbers (section 8).
- **Apple** stores and synchronises your Google account credential, end-to-end
  encrypted, if you use iCloud Keychain.
- Information may be disclosed where required by applicable law or valid legal
  process.

**Retention and deletion**

- Remove a Google Drive source in Edendale to remove its videos from the
  library on that device.
- Sign out in **Settings → Accounts** to delete the Google account and its
  tokens from the device and from your other Apple devices that sync it.
  Choose **Sign Out and Revoke Access** to also ask Google to end Edendale's
  access, which also ends access for an Apple TV that received the account
  from your iPhone or iPad.
- You can remove Edendale's access at any time from your Google Account's
  [Third-party connections](https://myaccount.google.com/connections) page.
  After that, Edendale can no longer read your Drive.
- Uninstalling Edendale deletes its device-local library. On Apple platforms, a
  Keychain item can remain after uninstalling, so sign out in Edendale first or
  remove Edendale's access at Google.

**Limited Use**

Edendale's use and transfer to any other app of information received from
Google APIs will adhere to the
[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy),
including the Limited Use requirements.

Google processes your account and Drive data under the
[Google Privacy Policy](https://policies.google.com/privacy). Opening a YouTube
trailer (section 10) does not use a Google account you linked for Google Drive.

### 6.4 Microsoft OneDrive

Edendale requests these Microsoft Graph permissions:

| Permission | Why Edendale requests it |
|---|---|
| `User.Read` | To identify the Microsoft account you signed in with and show it in Settings → Accounts |
| `Files.Read` | To show your folders so you can choose one, add the videos in folders you link to your library, and play those videos |
| `offline_access` | To stay signed in without asking you again each hour |

Edendale accesses:

- **Account information:** your Microsoft account's ID, display name, and email
  address or user principal name, and your OneDrive's ID.
- **File and folder metadata** for the folders you open or link: each item's ID,
  name, size, whether it is a file or folder, last-modified time, and the video
  duration OneDrive reports.
- **File content:** the video files you play, streamed through short-lived
  download links that OneDrive issues.

Edendale works with personal Microsoft accounts and with work or school
accounts. For a work or school account, your organisation may see that you
signed in to Edendale and may manage or record that access under its own
policies.

Signing out in **Settings → Accounts** deletes the account and its tokens from
the device. Microsoft does not let an app revoke its own access, so to end it
at Microsoft, remove Edendale from your personal account's
[app permissions](https://account.live.com/consent/Manage) page, or, for a
work or school account, through your organisation's My Apps portal or
administrator. Microsoft processes this information under the
[Microsoft Privacy Statement](https://privacy.microsoft.com/privacystatement).

### 6.5 Dropbox

Edendale requests these Dropbox permissions:

| Permission | Why Edendale requests it |
|---|---|
| `account_info.read` | To identify the Dropbox account you signed in with and show it in Settings → Accounts |
| `files.metadata.read` | To show your folders so you can choose one and add the videos in folders you link to your library |
| `files.content.read` | To play those videos |

Edendale accesses:

- **Account information:** your Dropbox account ID, display name, and email
  address.
- **File and folder metadata** for the folders you open, and for everything
  inside a folder you link (Dropbox lists a linked folder's whole tree at
  once): each item's ID, name, path, size, and modification time.
- **File content:** the video files you play, streamed through temporary links
  that expire after four hours.

Signing out in **Settings → Accounts** deletes the account and its tokens from
the device and asks Dropbox to revoke Edendale's access. You can also remove
Edendale from your Dropbox
[connected apps](https://www.dropbox.com/account/connected_apps). Dropbox
processes this information under its
[Privacy Policy](https://www.dropbox.com/privacy).

## 7. TMDB requests and optional account sync

Edendale uses TMDB for catalogue searches, artwork, summaries, cast, ratings,
trailer references, and library enrichment. Search text and parsed title
information are sent to TMDB when these features are used. This applies to
files from servers and cloud storage too: TMDB receives the title information
recognised from a filename, never the filename, its location, or your storage
account. Requests go directly from your device to TMDB; they do not pass
through a BaBaSaMa server. TMDB may receive ordinary connection information
such as an IP address and device or request details.

If you connect your TMDB account, Edendale may read and update your TMDB
favourites, watchlist, and ratings at your direction. Your playback position
and watch history are not submitted to TMDB.

TMDB handles information under its
[Privacy Policy](https://www.themoviedb.org/privacy-policy) and
[API Terms](https://www.themoviedb.org/api-terms-of-use).

## 8. Subtitle search

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
location it points to and keeps it on your device, so it can be offered again
without another download when the same video plays. Edendale records on the
device which video the subtitle belongs to — the title it matched and the
video's filename. On Apple platforms and Windows, a downloaded subtitle that
has not been used for about a month is deleted automatically; Windows lets you
turn this off in Settings → Subtitles.

Wyzie handles information under its own terms and privacy practices, which are
outside BaBaSaMa's control. You can avoid contacting Wyzie entirely by not
starting a subtitle search.

## 9. Skip prompts

Edendale can show **Skip Intro**, **Skip Recap**, and **Skip Credits** buttons
using community timestamps from **TheIntroDB** (`api.theintrodb.org`). Skip
prompts are off by default; you can turn them on in Edendale's playback
settings or in the player's adjustments. Playback never skips unless you press
the button.

When skip prompts are on and you play a title that Edendale has matched in
TMDB, Edendale sends TheIntroDB the title's TMDB identifier — for an episode,
the show's identifier with the season and episode numbers — and the video's
duration, so it can return timestamps that fit your copy. No account, API key,
filename, file path, video data, or library is sent. TheIntroDB receives
ordinary connection information such as your IP address. Files Edendale has not
matched are never looked up.

The timestamps are kept in memory only while the video plays. They are not
saved to your library, watch progress, or any synchronised storage.
TheIntroDB handles information under its
[Privacy Policy](https://theintrodb.org/docs/privacy) and
[Terms](https://theintrodb.org/docs/terms).

## 10. Trailer playback

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

## 11. Platform and store reporting

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
watched, what is in your library or storage, or who you are.

## 12. How information is used

| Purpose | Information | Typical legal basis where required |
|---|---|---|
| Index and play media you select | Media and library information | Performance of the Service you request |
| List, index, and play files from servers and cloud storage you link | Folder listings, file metadata, and file content from that source | Performance of the Service you request |
| Sign in to and label a linked storage account | Account identifier, email address, display name, and tokens | Your request or consent |
| Retrieve TMDB metadata and search results | Search text and parsed title information | Performance of the Service; legitimate interests |
| Find and download a subtitle you asked for | TMDB identifier, season and episode, language and filter choices | Your request |
| Show skip prompts you turned on | TMDB identifier, season and episode, video duration | Your request or consent |
| Save progress, preferences, and ratings | Personal media records | Performance of the Service |
| Synchronise records through your platform account | Watch and personal media records | Your request or consent; performance of the Service |
| Connect to an optional TMDB account or a server | Account token or server credentials | Your request or consent |
| Answer support requests | Contact details and message contents | Legitimate interests; steps requested by you |
| Maintain and improve the applications | Aggregate platform or store reports | Legitimate interests in quality and stability |

Where processing relies on consent, you may withdraw it by signing out of or
disconnecting the relevant account, removing the source, disabling the
feature, or changing platform permissions.

## 13. Sharing and service providers

BaBaSaMa does not sell your information. Because BaBaSaMa operates no server
for Edendale, information is disclosed only as needed:

- to **TMDB** when you search, enrich a title, load metadata, or use an optional
  connected TMDB account;
- to **Google**, **Microsoft**, or **Dropbox** when you link and use a Google
  Drive, OneDrive, or Dropbox account (section 6);
- to the server you choose when you link an SMB, NFS, SFTP, WebDAV, or
  S3-compatible source;
- to **Wyzie** when you start a subtitle search;
- to **TheIntroDB** while skip prompts are turned on;
- to **Apple**, **Google**, or **Microsoft** when you enable or use their
  platform storage, backup, credential, or sync services, or when they provide
  the aggregate reports described in section 11;
- to **YouTube/Google** after you explicitly open a trailer;
- to **GitHub**, which serves the website and any direct downloads; and
- where required by applicable law or valid legal process.

Each of these organisations processes information as an independent controller
under its own terms and privacy policy. None of them acts as a processor on
BaBaSaMa's instructions, and BaBaSaMa receives no copy of what they collect
beyond the aggregate reports described in section 11.

## 14. Retention and deletion

- **Website:** nothing to delete. The site keeps no cookies or browser storage.
  Request data reaching GitHub is retained under GitHub's own policies and is
  not available to BaBaSaMa.
- **Native local storage:** removing a source or record affects the local
  library index; it does not necessarily remove watch or account records.
  Clearing application data may remove the local container according to that
  platform's controls. Uninstall, backup, and recovery behaviour varies by
  platform and does not necessarily remove cloud or backup copies.
- **Linked servers and cloud storage accounts:** removing a source removes its
  files from the library but keeps its login or account, so other sources can
  use it. Sign out or forget the login in **Settings → Accounts** to delete it.
  Signing out does not delete anything in your storage; to end Edendale's
  access at a cloud provider, use the provider controls in section 6.
- **Apple:** private CloudKit records and synchronised iCloud Keychain items may
  remain after uninstalling. Manage them through the available iCloud,
  Keychain, app, or device controls. Edendale does not currently provide one
  cross-platform erase-all control.
- **Android:** a platform backup or device-transfer copy may remain according
  to your Google, device-maker, or backup-provider controls and retention.
  Watch Next rows on an Android TV home screen are removed when you turn the
  setting off.
- **Windows:** a replica in your OneDrive `Apps/Edendale` folder remains until
  you delete it through OneDrive and any applicable recycle-bin or recovery
  controls.
- **Downloaded subtitles** stay on your device until you remove them or, on
  Apple platforms and Windows, until they go unused for about a month. Wyzie
  has no account for you; any request record it keeps is governed by Wyzie.
- **Skip-prompt timestamps** are discarded when playback ends. Any request
  record TheIntroDB keeps is governed by TheIntroDB.
- A connected TMDB account retains information according to TMDB's settings and
  policies. Disconnecting Edendale does not automatically delete information
  already stored in your TMDB account; manage those records through TMDB.
- Support correspondence is kept only as long as reasonably needed to respond,
  maintain a support record, or meet legal obligations.

Because BaBaSaMa generally cannot access information stored only on your device
or in a private platform account, use the platform-specific controls above. A
privacy request to BaBaSaMa cannot directly erase information that BaBaSaMa
cannot access.

## 15. International transfers

GitHub, TMDB, Wyzie, TheIntroDB, Apple, Google, Microsoft, and Dropbox may
process information in countries other than your own. Their privacy policies
describe the safeguards they use for international transfers. BaBaSaMa does not
itself transfer your information, because it does not receive it.

## 16. Security

Edendale uses encrypted connections for TMDB, Wyzie, TheIntroDB, and every
cloud storage provider, and stores credentials in platform-protected storage.
Cloud sign-in uses OAuth 2.0 with PKCE on the provider's own page, so Edendale
never handles your cloud password, and access tokens stay in memory. Edendale
pins each SFTP server's host key and asks you before trusting a changed key.

A connection to your own server is only as private as its protocol and
configuration allow. SFTP and HTTPS connections are encrypted; NFS, WebDAV over
`http://`, and some SMB configurations are not, so use those only on a network
you trust.

The Service deliberately keeps video bytes and personal records outside
developer-operated storage — there is no developer-operated storage. No
security measure can guarantee absolute protection, so you should protect your
device, platform accounts, cloud storage accounts, servers, and backups.

## 17. Children's privacy

Edendale is a general-audience media utility and is not directed to children
under 13. BaBaSaMa does not knowingly collect personal information from
children through Edendale. A parent or guardian who believes a child has sent
personal information to BaBaSaMa may contact us to request its deletion.

## 18. Your privacy rights

Depending on where you live, you may have rights to be informed and to request
access, correction, deletion, restriction, portability, or objection, and to
withdraw consent or complain to a data-protection authority.

Almost all Edendale information is under your direct control because it stays
on your device, in your platform account, or with the storage provider you
chose. You can end Edendale's access to a cloud storage account at any time
using the controls in section 6. For information that BaBaSaMa holds, such as a
support message, contact **long@babasama.com**. We may need enough information
to verify and answer your request.

## 19. Changes to this policy

We may update this policy when Edendale's features, platforms, providers, or
legal obligations change. We will revise the **Last updated** date and provide
additional notice where appropriate. Materially different processing will not
be applied retroactively where consent or another legal basis is required.

## 20. Contact

Questions, privacy requests, or complaints may be sent to:

- **BaBaSaMa**
- **long@babasama.com**
