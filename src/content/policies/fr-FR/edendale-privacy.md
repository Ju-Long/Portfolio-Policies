---
title: "Politique de confidentialité"
app: "Edendale"
lastUpdated: "2 août 2026"
lastUpdatedLabel: "Dernière mise à jour"
contentLanguage: "fr-FR"
draft: false
---

> **Traduction du projet en anglais.** Avant publication, confirmer la
> dénomination sociale et l'adresse de l'exploitant et faire relire ce document
> par un juriste. Ce modèle ne remplace pas un conseil juridique. En cas de
> divergence entre les versions linguistiques, la version anglaise prévaut.

## 1. Introduction et champ d'application

La présente politique de confidentialité explique comment **Edendale** traite
les informations lorsque vous utilisez une application Edendale officielle ou
le site web Edendale (ensemble, le « **Service** »).

Edendale est un lecteur vidéo local et un suivi personnel de visionnage. Il vous
permet de lire les médias que vous choisissez, de constituer une médiathèque
privée, d'enrichir vos titres avec les informations de The Movie Database
(« **TMDB** »), de rechercher des sous-titres et de conserver un historique de
visionnage personnel. Edendale ne fournit, n'héberge ni ne téléverse de films ou
d'épisodes de télévision pour vous.

Le site web Edendale est un site d'information. Il présente les applications,
renvoie au code source du projet et répond aux liens d'application afin qu'un
lien Edendale partagé puisse s'ouvrir dans une application installée. Ce n'est
pas un lecteur vidéo, il ne comporte aucun compte et il ne conserve rien à votre
sujet.

La présente politique s'applique aux versions officielles et au site officiel.
Les forks indépendants et les copies auto-hébergées relèvent de leurs
exploitants respectifs et peuvent traiter les informations différemment.

## 2. Responsable du traitement

L'exploitant responsable du Service officiel est :

- **BaBaSaMa**
- Courriel : **long@babasama.com**
- **[Avant publication : ajouter la dénomination sociale et l'adresse postale de
  l'exploitant si la réglementation l'exige dans les pays où Edendale est
  proposé.]**

## 3. Synthèse : la priorité au local

Edendale est conçu pour réduire la collecte de données au minimum :

- Aucun compte Edendale n'est nécessaire.
- BaBaSaMa n'exploite ni serveur, ni base de données, ni proxy pour Edendale. Il
  n'existe aucun endroit où vos informations de médiathèque, de visionnage ou de
  compte pourraient nous être transmises.
- Vos fichiers vidéo et de sous-titres ne sont téléversés ni vers BaBaSaMa ni
  vers un tiers.
- Edendale ne contient, sur aucune plateforme, de publicité, d'analyse
  marketing, de remontée de plantages ni de suivi comportemental. YouTube peut
  afficher de la publicité une fois que vous avez choisi d'ouvrir une
  bande-annonce.
- BaBaSaMa ne vend ni ne loue de données personnelles.
- L'index de la médiathèque et vos enregistrements personnels sont conservés sur
  votre appareil ou dans un espace de stockage rattaché à votre propre compte de
  plateforme, comme décrit ci-dessous.
- L'accès réseau se limite aux fonctions que vous utilisez : métadonnées TMDB et
  synchronisation facultative de compte, recherche de sous-titres que vous
  lancez, dossiers réseau que vous sélectionnez, stockage ou synchronisation de
  la plateforme, et une bande-annonce ouverte par votre action explicite.

Une connexion facultative à un compte TMDB est un compte auprès de TMDB, et non
un compte Edendale.

## 4. Informations traitées par Edendale

### 4.1 Médias locaux et informations de médiathèque

Lorsque vous choisissez un fichier, un dossier ou un partage réseau, Edendale
peut traiter :

- les noms de fichiers et de dossiers ;
- les chemins relatifs, identifiants de fichiers de la plateforme ou signets à
  portée de sécurité ;
- le type, la taille et la date de modification du fichier ;
- le titre, l'année de sortie, le nom de la série, le numéro de saison et le
  numéro d'épisode déduits d'un nom de fichier ;
- l'adresse d'un serveur et d'un partage réseau que vous sélectionnez ; et
- les identifiants TMDB, liens vers les visuels, résumés, distribution, durée et
  autres métadonnées servant à enrichir votre médiathèque locale.

L'analyse des noms de fichiers a lieu localement avant toute requête de
métadonnées. Edendale peut ensuite envoyer à TMDB un titre de film ou de série,
une année, un numéro de saison ou d'épisode ainsi déduits afin de trouver les
métadonnées correspondantes.

Vos données vidéo et de sous-titres restent à l'emplacement que vous avez choisi
et sont lues pour la lecture. Elles ne sont téléversées ni vers BaBaSaMa ni vers
un tiers. Si vous lisez depuis un partage réseau, votre appareil communique avec
ce partage.

### 4.2 Historique de visionnage et enregistrements personnels

Selon la fonction et la plateforme, Edendale peut conserver :

- la position de lecture, la durée visionnée, l'état d'achèvement et la date du
  dernier visionnage ;
- vos favoris et vos choix de liste de suivi ;
- votre note personnelle ;
- les préférences du lecteur et de l'interface, y compris votre langue de
  sous-titres et le filtre pour personnes malentendantes ; et
- un aperçu d'affichage limité, tel qu'un titre ou une référence d'affiche,
  utilisé pour les widgets d'écran d'accueil et les rangées de reprise.

Ces enregistrements sont destinés à votre usage personnel.

### 4.3 Identifiants et informations de compte

Si vous connectez un compte TMDB facultatif, Edendale reçoit un jeton d'accès et
un identifiant de compte TMDB afin de synchroniser les favoris, les entrées de
liste de suivi et les notes pris en charge. Edendale conserve cet identifiant
dans le stockage protégé de la plateforme : le trousseau sur les plateformes
Apple, un stockage chiffré adossé au Keystore Android sur Android et DPAPI sur
Windows. Sur les plateformes Apple, un identifiant peut se synchroniser via le
trousseau iCloud si vous avez activé la synchronisation du trousseau.

Si vous connectez un partage réseau protégé par mot de passe, Edendale conserve
l'adresse du partage et les identifiants dans ce même stockage protégé. Ces
identifiants servent uniquement à vous connecter au partage que vous avez choisi
et ne sont envoyés ni à BaBaSaMa ni à un tiers.

Si vous saisissez votre propre clé d'API pour le service de sous-titres, elle
est conservée dans ce même stockage protégé et n'est envoyée qu'au service de
sous-titres décrit à la section 7.

### 4.4 Messages d'assistance

Si vous contactez BaBaSaMa, nous recevons l'adresse que vous utilisez, votre
message et toute information ou tout élément de diagnostic que vous choisissez
d'y joindre. Merci de ne pas envoyer de fichiers vidéo, de mots de passe, de
jetons d'accès ni d'autres éléments sensibles.

## 5. Où les informations sont conservées

### 5.1 Le site web Edendale

Le site est un ensemble de pages statiques publiées via **GitHub Pages**, un
service de GitHub, Inc. (société du groupe Microsoft). Il ne comporte aucun
compte, aucun cookie, aucun stockage navigateur, aucune analyse d'audience et
aucun script, police ou image tiers. Votre préférence de langue est déduite des
réglages linguistiques que votre navigateur transmet déjà et n'est pas
enregistrée.

Pour servir une page, GitHub reçoit nécessairement des informations de requête
habituelles telles que votre adresse IP ou réseau, le chemin demandé, un
horodatage, votre chaîne d'agent utilisateur et les autres en-têtes HTTP usuels.
GitHub traite ces informations en qualité de responsable de traitement
indépendant, conformément à la
[déclaration de confidentialité de GitHub](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement).
GitHub Pages ne met aucun journal d'accès à la disposition du propriétaire du
site : BaBaSaMa ne reçoit, ne conserve ni n'analyse donc aucune donnée de
visiteur.

Les pages de liens d'application du site (`/search`, `/media`, `/library`,
`/play`) existent pour qu'un lien Edendale s'ouvre dans une application
installée. Tout identifiant contenu dans un tel lien est traité par votre
appareil et l'application installée ; le site ne le transmet nulle part.

### 5.2 Plateformes Apple

L'index de la médiathèque locale, les chemins de fichiers et les signets à
portée de sécurité restent dans un magasin local à l'appareil et sont
explicitement exclus de la réplication CloudKit.

La progression de lecture ainsi que les choix par titre — favoris, appartenance
à la liste de suivi et notes — sont conservés dans le conteneur iCloud privé
d'Edendale afin d'apparaître sur vos appareils Apple. Les identifiants TMDB, de
partage réseau et du service de sous-titres peuvent utiliser le trousseau
iCloud. Apple traite ces informations conformément à sa
[politique de confidentialité](https://www.apple.com/legal/privacy/) et à vos
réglages iCloud.

### 5.3 Android

Android conserve la médiathèque et les enregistrements personnels d'Edendale
dans le stockage applicatif local. Selon vos réglages de sauvegarde et de
transfert d'appareil, le système d'exploitation peut inclure les données
applicatives éligibles dans la sauvegarde de plateforme ou le transfert
d'appareil. Les magasins protégés de la session TMDB, des identifiants de
partage réseau et de la clé de sous-titres sont exclus à la fois de la
sauvegarde dans le cloud et du transfert d'appareil par les règles de sauvegarde
d'Edendale, car les clés qui les protègent ne quittent jamais l'appareil. La
protection et la conservation des sauvegardes dépendent de votre version
d'Android, de votre appareil, de votre compte et de votre fournisseur de
sauvegarde.

### 5.4 Windows

Windows conserve l'index de la médiathèque locale dans le stockage applicatif
local. La progression de lecture, les favoris, les entrées de liste de suivi et
les notes sont également conservés localement et, lorsque OneDrive est
configuré sur l'appareil, Edendale place une réplique de ces enregistrements
personnels dans votre propre dossier OneDrive `Apps/Edendale` afin qu'un second
PC connecté converge. Sans OneDrive, l'application reste purement locale. Les
identifiants demeurent protégés localement et ne sont jamais inclus dans cette
réplique. Microsoft traite les données OneDrive conformément aux conditions de
votre compte Microsoft et à vos réglages de confidentialité.

## 6. Requêtes TMDB et synchronisation facultative de compte

Edendale utilise TMDB pour les recherches dans le catalogue, les visuels, les
résumés, la distribution, les notes, les références de bandes-annonces et
l'enrichissement de la médiathèque locale. Le texte de recherche et les
informations de titre déduites sont envoyés à TMDB lorsque ces fonctions sont
utilisées. Les requêtes partent directement de votre appareil vers TMDB ; elles
ne transitent par aucun serveur de BaBaSaMa. TMDB peut recevoir des informations
de connexion habituelles telles qu'une adresse IP et des détails d'appareil ou
de requête.

Si vous connectez votre compte TMDB, Edendale peut lire et mettre à jour vos
favoris, votre liste de suivi et vos notes TMDB à votre initiative. Votre
position de lecture et votre historique de visionnage ne sont pas transmis à
TMDB.

TMDB traite les informations conformément à sa
[politique de confidentialité](https://www.themoviedb.org/privacy-policy) et à
ses [conditions d'API](https://www.themoviedb.org/api-terms-of-use).

## 7. Recherche de sous-titres

Edendale peut rechercher des sous-titres via **Wyzie Subs** (`sub.wyzie.io`,
exploité par Wyzie). Une requête n'est émise que si vous ouvrez le panneau de
sous-titres pendant la lecture et lancez une recherche ; rien n'est envoyé du
seul fait qu'une vidéo est en cours de lecture.

Lorsque vous lancez une recherche, Edendale envoie l'identifiant TMDB du titre,
les numéros de saison et d'épisode pour un épisode, la langue de sous-titres que
vous avez choisie, les filtres de format et « malentendants » que vous avez
sélectionnés, ainsi qu'une clé d'API — soit incluse dans votre version, soit
saisie par vous dans les réglages. Votre nom de fichier, votre chemin d'accès,
vos données vidéo et votre médiathèque ne sont pas envoyés. Wyzie peut recevoir
des informations de connexion habituelles telles qu'une adresse IP.

Si vous choisissez un résultat, Edendale télécharge ce fichier de sous-titres
depuis Wyzie ou depuis l'emplacement indiqué et le conserve pour la lecture.
Wyzie traite les informations selon ses propres conditions et pratiques de
confidentialité, qui échappent au contrôle de BaBaSaMa. Vous pouvez éviter tout
contact avec Wyzie en ne lançant aucune recherche de sous-titres.

## 8. Lecture des bandes-annonces

Edendale ne contacte pas YouTube du seul fait qu'une bande-annonce est
disponible. Une bande-annonce ne démarre jamais avant votre action.

Lorsque vous choisissez explicitement de regarder une bande-annonce, les
versions Apple et Android ouvrent une intégration YouTube en mode de
confidentialité avancée (`youtube-nocookie.com`), et Windows confie la
bande-annonce à votre navigateur système, de sorte que l'application elle-même
n'appelle pas YouTube. Google et YouTube peuvent alors traiter des informations
de connexion, d'appareil, de provenance, de visionnage et de publicité
conformément aux
[règles de confidentialité de Google](https://policies.google.com/privacy) et
aux conditions de YouTube. Le mode de confidentialité avancée limite certains
usages de données par YouTube ; il ne rend pas la requête anonyme, et une vidéo
intégrée peut afficher de la publicité.

## 9. Rapports des plateformes et des boutiques

Edendale ne contient lui-même aucun code d'analyse, de télémétrie ou de remontée
de plantages, sur aucune plateforme. Son manifeste de confidentialité Apple ne
déclare aucun type de données collectées ni aucun suivi.

Indépendamment d'Edendale, la plateforme ou la boutique depuis laquelle vous
installez peut fournir à BaBaSaMa des rapports agrégés sur l'application. Ces
données proviennent de la plateforme et non de quoi que ce soit qu'Edendale
envoie ; vous les contrôlez depuis la plateforme :

- **Apple.** App Store Connect peut fournir des analyses agrégées et des
  rapports de plantage pour les versions de l'App Store. Apple n'y inclut les
  données de votre appareil que si vous avez activé **Partager avec les
  développeurs d'apps** dans Réglages → Confidentialité et sécurité → Analyse et
  améliorations. Le désactiver y met fin.
- **Android.** Lorsque Edendale est distribué via Google Play, la Play Console
  peut fournir des rapports de plantage et d'ANR (« l'application ne répond
  pas ») ainsi que des indicateurs de qualité agrégés. Vous contrôlez cela dans
  Paramètres → Google → Utilisation et diagnostics, ainsi que par le choix qui
  vous est proposé lors du signalement d'un plantage.
- **Windows.** Lorsque Edendale est distribué via le Microsoft Store, Partner
  Center peut fournir des rapports agrégés d'intégrité et d'utilisation. Vous
  contrôlez les données de diagnostic Windows dans Paramètres → Confidentialité
  et sécurité → Commentaires et diagnostics.
- **Téléchargements directs.** Lorsque Edendale est distribué en téléchargement
  direct depuis GitHub, GitHub reçoit la requête de téléchargement et ne
  communique à BaBaSaMa que des compteurs de téléchargements agrégés.

Ces rapports sont agrégés ou de diagnostic. Ils n'indiquent pas à BaBaSaMa ce
que vous avez regardé, ce que contient votre médiathèque ni qui vous êtes.

## 10. Utilisation des informations

| Finalité | Informations | Base légale habituelle lorsqu'elle est requise |
|---|---|---|
| Indexer et lire les médias que vous sélectionnez | Médias locaux et informations de médiathèque | Exécution du Service que vous demandez |
| Récupérer les métadonnées et résultats de recherche TMDB | Texte de recherche et informations de titre déduites | Exécution du Service ; intérêts légitimes |
| Trouver et télécharger un sous-titre que vous avez demandé | Identifiant TMDB, saison et épisode, choix de langue et de filtres | Votre demande |
| Enregistrer progression, préférences et notes | Enregistrements personnels | Exécution du Service |
| Synchroniser des enregistrements via votre compte de plateforme | Historique de visionnage et enregistrements personnels | Votre demande ou consentement ; exécution du Service |
| Se connecter à un compte TMDB facultatif ou à un partage réseau | Jeton de compte ou identifiants de partage | Votre demande ou consentement |
| Répondre aux demandes d'assistance | Coordonnées et contenu des messages | Intérêts légitimes ; mesures demandées par vous |
| Maintenir et améliorer les applications | Rapports agrégés de plateforme ou de boutique | Intérêts légitimes de qualité et de stabilité |

Lorsqu'un traitement repose sur le consentement, vous pouvez le retirer en
déconnectant le compte concerné, en désactivant la fonction ou en modifiant les
autorisations de la plateforme.

## 11. Partage et prestataires

BaBaSaMa ne vend pas vos informations. Comme BaBaSaMa n'exploite aucun serveur
pour Edendale, les informations ne sont divulguées que dans la mesure
nécessaire :

- à **TMDB** lorsque vous effectuez une recherche, enrichissez un titre, chargez
  des métadonnées ou utilisez un compte TMDB connecté facultatif ;
- à **Wyzie** lorsque vous lancez une recherche de sous-titres ;
- à **Apple**, **Google** ou **Microsoft** lorsque vous activez ou utilisez
  leurs services de stockage, de sauvegarde, d'identifiants ou de
  synchronisation, ou lorsqu'ils fournissent les rapports agrégés décrits à la
  section 9 ;
- à **YouTube/Google** après que vous avez explicitement ouvert une
  bande-annonce ;
- au serveur réseau que vous choisissez lorsque vous connectez un partage ;
- à **GitHub**, qui sert le site web et les éventuels téléchargements directs ;
  et
- lorsque la loi applicable ou une procédure judiciaire valable l'exige.

Chacune de ces organisations traite les informations en qualité de responsable
de traitement indépendant, selon ses propres conditions et sa politique de
confidentialité. Aucune n'agit en tant que sous-traitant sur instruction de
BaBaSaMa, et BaBaSaMa ne reçoit aucune copie de ce qu'elles collectent au-delà
des rapports agrégés décrits à la section 9.

## 12. Conservation et suppression

- **Site web :** rien à supprimer. Le site n'utilise ni cookies ni stockage
  navigateur. Les données de requête parvenant à GitHub sont conservées selon
  les politiques de GitHub et ne sont pas accessibles à BaBaSaMa.
- **Stockage local des applications :** supprimer une source ou un
  enregistrement affecte l'index de la médiathèque locale ; cela ne supprime pas
  nécessairement les enregistrements de visionnage ou de compte. L'effacement
  des données de l'application peut supprimer le conteneur local selon les
  réglages de la plateforme. Le comportement en cas de désinstallation, de
  sauvegarde et de restauration varie selon les plateformes et ne supprime pas
  nécessairement les copies dans le cloud ou en sauvegarde.
- **Apple :** les enregistrements CloudKit privés et les éléments du trousseau
  iCloud synchronisés peuvent subsister après la désinstallation. Gérez-les via
  les réglages iCloud, trousseau, application ou appareil disponibles. Edendale
  ne propose pas actuellement de commande unique d'effacement total
  multiplateforme.
- **Android :** une copie de sauvegarde de plateforme ou de transfert d'appareil
  peut subsister selon les réglages et les durées de conservation de Google, du
  fabricant de l'appareil ou de votre fournisseur de sauvegarde.
- **Windows :** une réplique dans votre dossier OneDrive `Apps/Edendale`
  subsiste jusqu'à ce que vous la supprimiez via OneDrive et les éventuelles
  fonctions de corbeille ou de récupération.
- **Les sous-titres téléchargés** restent sur votre appareil jusqu'à ce que vous
  les supprimiez. Wyzie ne tient aucun compte à votre nom ; tout journal de
  requête qu'il conserverait relève de Wyzie.
- Un compte TMDB connecté conserve les informations selon les réglages et les
  politiques de TMDB. Déconnecter Edendale ne supprime pas automatiquement les
  informations déjà enregistrées dans votre compte TMDB ; gérez ces
  enregistrements via TMDB.
- La correspondance d'assistance n'est conservée que le temps raisonnablement
  nécessaire pour répondre, tenir un historique d'assistance ou satisfaire à des
  obligations légales.

Comme BaBaSaMa ne peut généralement pas accéder aux informations conservées
uniquement sur votre appareil ou dans un compte de plateforme privé, utilisez
les commandes propres à chaque plateforme indiquées ci-dessus. Une demande
adressée à BaBaSaMa ne peut pas effacer directement des informations auxquelles
BaBaSaMa n'a pas accès.

## 13. Transferts internationaux

GitHub, TMDB, Wyzie, Apple, Google et Microsoft peuvent traiter des informations
dans des pays autres que le vôtre. Leurs politiques de confidentialité décrivent
les garanties qu'ils appliquent aux transferts internationaux. BaBaSaMa ne
transfère pas lui-même vos informations, puisqu'il ne les reçoit pas.

## 14. Sécurité

Edendale utilise des connexions réseau chiffrées pour les services en ligne pris
en charge, refuse le trafic en clair et recourt au stockage protégé de la
plateforme pour les identifiants. Le Service maintient délibérément les données
vidéo et les enregistrements personnels hors de tout stockage exploité par le
développeur — il n'en existe aucun. Aucune mesure de sécurité ne peut garantir
une protection absolue : protégez donc votre appareil, vos comptes de
plateforme, vos partages réseau et vos sauvegardes.

## 15. Protection des mineurs

Edendale est un utilitaire multimédia destiné au grand public et ne s'adresse
pas aux enfants de moins de 13 ans. BaBaSaMa ne collecte pas sciemment de
données personnelles d'enfants via Edendale. Un parent ou tuteur qui estime
qu'un enfant a transmis des données personnelles à BaBaSaMa peut nous contacter
pour en demander la suppression.

## 16. Vos droits

Selon votre lieu de résidence, vous pouvez disposer de droits à l'information,
d'accès, de rectification, d'effacement, de limitation, de portabilité ou
d'opposition, ainsi que du droit de retirer votre consentement ou d'introduire
une réclamation auprès d'une autorité de protection des données.

La quasi-totalité des informations d'Edendale relève de votre contrôle direct,
car elles restent sur votre appareil ou dans votre compte de plateforme. Pour
les informations détenues par BaBaSaMa, telles qu'un message d'assistance,
écrivez à **long@babasama.com**. Nous pourrons avoir besoin d'éléments
suffisants pour vérifier et traiter votre demande.

## 17. Modifications de la présente politique

Nous pouvons mettre à jour la présente politique lorsque les fonctionnalités,
plateformes, prestataires ou obligations légales d'Edendale évoluent. Nous
modifierons alors la date de **Dernière mise à jour** et fournirons, le cas
échéant, une information complémentaire. Un traitement substantiellement
différent ne sera pas appliqué rétroactivement lorsqu'un consentement ou une
autre base légale est requis.

## 18. Contact

Vos questions, demandes ou réclamations peuvent être adressées à :

- **BaBaSaMa**
- **long@babasama.com**
