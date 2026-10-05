---
title: "Política de privacidad"
app: "Edendale"
lastUpdated: "5 de octubre de 2026"
lastUpdatedLabel: "Última actualización"
contentLanguage: "es-ES"
draft: false
---

## 1. Introducción y ámbito

Esta política de privacidad explica cómo **Edendale** trata la información
cuando utilizas una aplicación oficial de Edendale o el sitio web de Edendale
(conjuntamente, el «**Servicio**»).

Edendale es un reproductor de vídeo local y un registro personal de lo que ves.
Te permite reproducir los medios que elijas —desde tu dispositivo, desde
servidores que gestiones o desde cuentas de almacenamiento en la nube que
vincules—, crear una videoteca privada, enriquecer títulos con información de
The Movie Database («**TMDB**»), buscar subtítulos, mostrar avisos opcionales
para omitir y mantener un historial personal de reproducción. Edendale no te
proporciona, aloja ni sube películas o episodios de televisión.

El sitio web de Edendale es un sitio informativo. Describe las aplicaciones,
enlaza al código fuente del proyecto y responde a los enlaces de aplicación para
que un enlace de Edendale compartido pueda abrirse en una aplicación instalada.
No es un reproductor de vídeo, no tiene cuentas y no almacena nada sobre ti.

Esta política se aplica a las versiones oficiales y al sitio web oficial. Los
forks independientes y las copias autoalojadas dependen de sus respectivos
operadores y pueden tratar la información de otra manera.

## 2. Responsable

El responsable del Servicio oficial es:

- **BaBaSaMa**
- Correo electrónico: **long@babasama.com**

## 3. Resumen: primero lo local

Edendale está diseñado para reducir al mínimo la recogida de datos:

- No necesitas una cuenta de Edendale.
- BaBaSaMa no opera ningún servidor, base de datos ni proxy para Edendale. No
  existe ningún lugar al que puedan enviarse a nosotros los datos de tu
  videoteca, tu reproducción, tus archivos o tus cuentas.
- Tus archivos de vídeo y de subtítulos no se suben a BaBaSaMa ni a terceros.
- Cuando vinculas Google Drive, Microsoft OneDrive o Dropbox, inicias sesión
  directamente con ese proveedor y Edendale únicamente solicita acceso de solo
  lectura. Tus archivos y tus tokens de inicio de sesión circulan únicamente
  entre tu dispositivo y ese proveedor.
- Edendale no incluye publicidad, analítica de marketing, notificación de
  fallos ni seguimiento del comportamiento en ninguna plataforma. YouTube puede
  mostrar publicidad después de que elijas abrir un tráiler.
- BaBaSaMa no vende ni alquila información personal.
- El índice de la videoteca y tus registros personales se guardan en tu
  dispositivo o en el almacenamiento asociado a tu propia cuenta de plataforma,
  tal y como se describe más abajo.
- El acceso a la red se limita a las funciones que utilizas: metadatos de TMDB y
  sincronización opcional de cuenta, los servidores y las cuentas de
  almacenamiento que vincules, la búsqueda de subtítulos que inicies, los avisos
  para omitir si los activas, el almacenamiento o la sincronización de la
  plataforma y un tráiler abierto por tu acción expresa.

Una conexión opcional con TMDB, Google, Microsoft o Dropbox es una cuenta en ese
proveedor, no una cuenta de Edendale.

## 4. Información que trata Edendale

### 4.1 Medios e información de la videoteca

Cuando eliges un archivo o una carpeta, o vinculas un servidor o una carpeta de
almacenamiento en la nube, Edendale puede tratar:

- nombres de archivos y carpetas;
- rutas relativas, identificadores de archivo de la plataforma, marcadores con
  ámbito de seguridad o los identificadores que un proveedor de almacenamiento
  asigna a cada archivo y carpeta;
- tipo, tamaño y fecha de modificación del archivo, y la duración de un vídeo
  cuando el proveedor de almacenamiento la indica;
- el título, el año de estreno, el nombre de la serie, el número de temporada y
  el número de episodio deducidos del nombre de archivo;
- la dirección de un servidor que vincules, y el proveedor, la cuenta y la
  carpeta de una fuente de almacenamiento en la nube; y
- identificadores de TMDB, enlaces a imágenes, sinopsis, reparto, duración y
  otros metadatos empleados para enriquecer tu videoteca local.

La clasificación de nombres de archivo se realiza localmente antes de cualquier
solicitud de metadatos. Después, Edendale puede enviar a TMDB un título de
película o serie, un año, un número de temporada o de episodio así deducidos
para localizar los metadatos correspondientes. El nombre de archivo en sí no se
envía.

Los datos de tus vídeos y subtítulos permanecen en la ubicación que hayas
elegido y se leen para la reproducción. Cuando un vídeo procede de un servidor o
de un almacenamiento en la nube, Edendale lee las partes que necesita a medida
que lo ves y mantiene en memoria un breve búfer de lectura anticipada; no guarda
ninguna copia del vídeo. Los vídeos no se suben a BaBaSaMa ni a terceros.

### 4.2 Historial de reproducción y registros personales

Según la función y la plataforma, Edendale puede guardar:

- posición de reproducción, duración vista, estado de finalización y fecha de la
  última reproducción;
- favoritos y elementos de la lista de pendientes;
- tu valoración personal;
- preferencias del reproductor y de la interfaz, como el idioma de subtítulos y
  el filtro para personas con discapacidad auditiva, el aspecto de los
  subtítulos, la duración de los saltos y las velocidades al mantener pulsado,
  los ajustes de audio e imagen, y la pista de audio, los subtítulos y la
  velocidad que elegiste por última vez para un título;
- un registro de los subtítulos que has descargado y del vídeo al que
  corresponde cada uno; y
- una instantánea de visualización limitada, como un título o una referencia de
  póster, utilizada en los widgets de la pantalla de inicio, en las filas de
  «continuar viendo» y, si lo activas, en la pantalla de inicio de Android TV.

Estos registros son para tu uso personal.

### 4.3 Credenciales e información de cuenta

Edendale guarda todas las credenciales en el almacén protegido de credenciales de
la plataforma: el llavero en plataformas Apple, un almacén cifrado respaldado por
el Keystore de Android en Android y DPAPI en Windows. Las credenciales nunca se
escriben en tu videoteca, en los enlaces guardados ni en los archivos de
registro, y nunca se envían a BaBaSaMa.

- **Cuenta de TMDB.** Si conectas una cuenta opcional de TMDB, Edendale recibe
  un token de acceso y un identificador de cuenta de TMDB para sincronizar los
  favoritos, las entradas de la lista de pendientes y las valoraciones
  compatibles.
- **Servidores que vinculas.** En el caso de un recurso compartido SMB, un
  servidor SFTP o un servidor WebDAV protegidos con contraseña, Edendale guarda
  la dirección del servidor, el nombre de usuario y la contraseña. En el caso
  del almacenamiento compatible con S3, guarda el ID de clave de acceso y la
  clave de acceso secreta. En el caso de un servidor SFTP, también guarda la
  huella digital de la clave de host del servidor para poder avisarte si esa
  clave cambia. Estas credenciales solo se envían al servidor que hayas
  vinculado.
- **Cuentas de almacenamiento en la nube.** Cuando vinculas Google Drive,
  Microsoft OneDrive o Dropbox, Edendale guarda un token de actualización, el
  identificador de la cuenta, la dirección de correo electrónico y el nombre
  visible que devuelve el proveedor, y los permisos que hayas concedido. Los
  tokens de acceso de corta duración solo se conservan en memoria. La sección 6
  describe lo que cada proveedor comparte con Edendale.
- **Clave del servicio de subtítulos.** Si introduces tu propia clave de API
  para el servicio de subtítulos, solo se envía al servicio de subtítulos
  descrito en la sección 8.

En plataformas Apple, estas credenciales pueden sincronizarse mediante el
llavero de iCloud si has activado su sincronización, tal y como se describe en
la sección 5.2.

### 4.4 Mensajes de soporte

Si contactas con BaBaSaMa, recibimos la dirección que utilices, tu mensaje y
cualquier información o material de diagnóstico que decidas incluir. No envíes
archivos de vídeo, contraseñas, tokens de acceso ni otro material sensible.

## 5. Dónde se almacena la información

### 5.1 El sitio web de Edendale

El sitio es un conjunto de páginas estáticas publicadas a través de **GitHub
Pages**, un servicio de GitHub, Inc. (una empresa de Microsoft). No contiene
cuentas, cookies, almacenamiento en el navegador, analítica ni scripts, fuentes
o imágenes de terceros. Tu preferencia de idioma se deduce de la configuración
lingüística que tu navegador ya envía y no se registra.

Para servir una página, GitHub recibe necesariamente información habitual de la
solicitud, como tu dirección IP o de red, la ruta solicitada, una marca de
tiempo, la cadena de agente de usuario y otras cabeceras HTTP normales. GitHub
trata esa información como responsable independiente conforme a la
[declaración de privacidad de GitHub](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement).
GitHub Pages no facilita registros de acceso al propietario del sitio, por lo
que BaBaSaMa no recibe, conserva ni analiza datos de las visitas.

Las páginas de enlaces de aplicación del sitio (`/search`, `/media`, `/library`,
`/play`) existen para que un enlace de Edendale se abra en una aplicación
instalada. Cualquier identificador incluido en ese enlace lo gestionan tu
dispositivo y la aplicación instalada; el sitio no lo transmite a ninguna parte.

### 5.2 Plataformas Apple

El índice de la videoteca local —incluidas las rutas de archivo, los marcadores
con ámbito de seguridad y los nombres e identificadores de los archivos de los
servidores y del almacenamiento en la nube vinculados— permanece en un almacén
local del dispositivo y está excluido expresamente de la replicación en
CloudKit. Los subtítulos descargados y el registro del vídeo al que corresponde
cada uno también se conservan solo en el dispositivo.

El progreso de reproducción y las decisiones por título —favoritos, pertenencia
a la lista de pendientes y valoraciones— se guardan en el contenedor privado de
iCloud de Edendale para que aparezcan en tus dispositivos Apple. Estos registros
identifican los títulos por sus identificadores de TMDB; no contienen nombres de
archivo, rutas ni identificadores de proveedores de almacenamiento.

Las credenciales de TMDB, de los servidores, de las cuentas de almacenamiento en
la nube y del servicio de subtítulos pueden sincronizarse mediante el llavero de
iCloud, de modo que un solo inicio de sesión sirva para tu iPhone, iPad, Mac y
Apple Vision Pro. El Apple TV no recibe elementos del llavero de iCloud. Para
vincular una cuenta o un servidor en el Apple TV, puedes aprobarlo desde un
iPhone o iPad cercano que tenga Edendale instalado y haya iniciado sesión con tu
cuenta de Apple o con la de un miembro de tu grupo de En familia. La cuenta se
envía directamente entre los dos dispositivos mediante una conexión cifrada de
red local y no pasa por BaBaSaMa. Apple trata la información de iCloud conforme
a su [política de privacidad](https://www.apple.com/legal/privacy/) y a tu
configuración de iCloud.

### 5.3 Android

Android guarda la videoteca y los registros personales de Edendale en el
almacenamiento local de la aplicación. Según tu configuración de copia de
seguridad y transferencia de dispositivo, el sistema operativo puede incluir los
datos de aplicación admisibles en la copia de seguridad de la plataforma o en la
transferencia. Las reglas de copia de seguridad de Edendale excluyen sus
almacenes protegidos —la sesión de TMDB, los inicios de sesión de servidores,
las claves de host SFTP, las cuentas de almacenamiento en la nube y la clave de
subtítulos— tanto de la copia de seguridad en la nube como de la transferencia
de dispositivo, porque las claves que los protegen nunca abandonan el
dispositivo. La protección y la conservación de las copias dependen de tu
versión de Android, tu dispositivo, tu cuenta y tu proveedor de copias de
seguridad.

En Android TV y Google TV, la opción **Seguir viendo en la pantalla de inicio**
está desactivada de forma predeterminada. Si la activas, Edendale escribe el
nombre, la imagen y la posición de cada título en curso, o el siguiente episodio
de una serie, en la fila Watch Next de la pantalla de inicio a través del
proveedor de TV del sistema. Estas entradas permanecen en el televisor y
Edendale no envía nada por la red para ellas, pero la aplicación de la pantalla
de inicio (la aplicación de Google, en Google TV) puede leerlas. Al desactivar
el ajuste, se eliminan.

### 5.4 Windows

Windows guarda el índice de la videoteca, el progreso de reproducción, los
favoritos, las entradas de la lista de pendientes, las valoraciones y los
ajustes del reproductor en el almacenamiento local de la aplicación. Cuando
OneDrive está configurado en el dispositivo, Edendale coloca una réplica de tu
historial de reproducción y tus registros personales en tu propia carpeta de
OneDrive `Apps/Edendale`, de modo que un segundo PC con la misma sesión
converja. Sin OneDrive, la aplicación funciona solo en local. Las credenciales y
los subtítulos descargados permanecen en el dispositivo y nunca se incluyen en
esa réplica. Una cuenta de OneDrive que vincules como fuente de almacenamiento
(sección 6.4) es independiente de esta réplica: cerrar su sesión no afecta a la
réplica, y desactivar la réplica no afecta a la fuente. Microsoft trata los
datos de OneDrive conforme a las condiciones de tu cuenta de Microsoft y a tu
configuración de privacidad.

## 6. Almacenamiento que vinculas

Edendale puede reproducir vídeos desde servidores que gestiones y desde cuentas
de almacenamiento en la nube que vincules. Los servicios disponibles varían
según la plataforma. En todos los casos, Edendale se conecta directamente desde
tu dispositivo al servidor o al proveedor; nada pasa por un servidor de
BaBaSaMa.

Edendale lista el contenido de las carpetas que exploras o vinculas, incluidas
sus subcarpetas, y lee los archivos de vídeo que reproduces. El listado de una
carpeta incluye el nombre, el tamaño y la fecha de todos los elementos que
contiene; Edendale solo conserva en su videoteca las carpetas y los archivos de
vídeo, e ignora todo lo demás. Edendale nunca crea, modifica, mueve, comparte ni
elimina nada en tu almacenamiento.

### 6.1 Tus propios servidores

Edendale accede a los servidores SMB, NFS, SFTP y WebDAV y al almacenamiento
compatible con S3 (como Amazon S3, Backblaze B2, Cloudflare R2, Wasabi o MinIO)
en la dirección que introduzcas. El servidor —y, en el caso de un servicio
alojado, su operador— recibe tus datos de inicio de sesión, los listados de
carpetas y las lecturas de archivos que solicita Edendale, y la información de
conexión habitual, como tu dirección IP. Quien gestione ese servidor determina
cómo se trata esta información.

### 6.2 Inicio de sesión en un proveedor de almacenamiento en la nube

Google Drive, Microsoft OneDrive y Dropbox utilizan la página de inicio de
sesión del propio proveedor, que se abre en el navegador del sistema o en la
ventana de inicio de sesión segura de tu sistema operativo (OAuth 2.0 con PKCE).
Edendale nunca ve tu contraseña. Después de que apruebes los permisos
solicitados, el proveedor devuelve los tokens a Edendale en tu dispositivo, y
Edendale pregunta al proveedor a qué cuenta pertenecen para poder etiquetar la
cuenta en **Ajustes → Cuentas**.

En un televisor, también puedes aprobar un inicio de sesión de Microsoft
introduciendo un código en otro dispositivo o, en el Apple TV, aprobar la cuenta
desde tu iPhone o iPad, tal y como se describe en la sección 5.2.

Puedes ver y eliminar las cuentas vinculadas en **Ajustes → Cuentas**. Eliminar
una fuente no cierra la sesión de su cuenta, de modo que las demás fuentes que
usan esa cuenta siguen funcionando.

### 6.3 Google Drive y datos de usuario de Google

Google Drive está disponible actualmente en Edendale en las plataformas Apple.
Si pasa a estar disponible en otra plataforma, solicitará el mismo acceso y
tratará los datos de usuario de Google tal y como se describe en esta sección.

**Permisos que solicita Edendale**

| Permiso (ámbito) | Por qué lo solicita Edendale |
|---|---|
| `openid` y `email` | Para identificar la cuenta de Google con la que has iniciado sesión y mostrar su dirección de correo electrónico en Ajustes → Cuentas |
| `https://www.googleapis.com/auth/drive.readonly` («Ver y descargar todos tus archivos de Google Drive») | Para mostrar tus carpetas y que puedas elegir una, añadir a tu videoteca los vídeos de las carpetas que vincules y reproducir esos vídeos |

Edendale no solicita permiso para crear, editar, mover, compartir ni eliminar
archivos de Drive, y no puede hacerlo.

**Datos de usuario de Google a los que accede Edendale**

- **Información de la cuenta:** el identificador único de tu cuenta de Google y
  tu dirección de correo electrónico.
- **Metadatos de archivos y carpetas**, de Mi unidad, Compartido conmigo y tus
  unidades compartidas, limitados a las carpetas que abres en Edendale y a las
  carpetas que vinculas (con sus subcarpetas): de cada elemento, su ID, nombre,
  tipo (tipo MIME), tamaño, fecha y hora de la última modificación y la duración
  del vídeo que indica Google Drive; en el caso de un acceso directo, el ID y el
  tipo del elemento al que apunta; y los nombres e ID de tus unidades
  compartidas.
- **Contenido de los archivos:** el contenido de los archivos de vídeo que
  reproduces, leído por partes a medida que lo ves.

Edendale solo solicita estos campos. No lee las descripciones, los comentarios,
la configuración de uso compartido, los propietarios ni el historial de
revisiones de los archivos. Ignora los Documentos de Google, las Hojas de
cálculo de Google, las Presentaciones de Google y otros formatos de archivo de
Google, y no abre ningún archivo que no sea un vídeo que reproduzcas.

**Cómo utiliza Edendale los datos de usuario de Google**

Edendale utiliza los datos de usuario de Google únicamente para ofrecer las
funciones de Google Drive que usas en Edendale:

- mostrar tus carpetas de Drive para que puedas elegir una;
- añadir a tu videoteca los vídeos de las carpetas vinculadas y actualizarla
  cuando vuelves a escanearlas, lo que incluye clasificar sus nombres de archivo
  en tu dispositivo para reconocer el título, el año, la temporada y el
  episodio;
- transmitir un vídeo en streaming cuando lo reproduces; y
- etiquetar la cuenta vinculada y mantener su sesión iniciada.

Edendale no utiliza los datos de usuario de Google con fines publicitarios, no
los vende, no los utiliza para elaborar un perfil sobre ti y no los utiliza para
desarrollar, mejorar ni entrenar modelos generalizados de inteligencia
artificial o de aprendizaje automático. BaBaSaMa nunca recibe tus datos de
usuario de Google, por lo que ninguna persona de BaBaSaMa puede leerlos.

**Cómo se almacenan y protegen los datos de usuario de Google**

- El token de actualización, el identificador de tu cuenta de Google, tu
  dirección de correo electrónico y los permisos que hayas concedido se guardan
  en el almacén protegido de credenciales de la plataforma (sección 4.3). En
  plataformas Apple, pueden sincronizarse con tus propios dispositivos Apple
  mediante el llavero de iCloud, que Apple protege con cifrado de extremo a
  extremo. Los tokens de acceso caducan en menos de una hora y solo se conservan
  en memoria.
- Los metadatos de los archivos de vídeo de las carpetas vinculadas (ID, nombre,
  tamaño, fecha y duración), junto con los títulos reconocidos a partir de sus
  nombres, se guardan en la videoteca local de Edendale en el dispositivo. No se
  sincronizan mediante iCloud. La copia de seguridad de tu propio dispositivo,
  como la copia de seguridad de iCloud o una copia en el ordenador, puede
  incluirlos según tu configuración de copias de seguridad.
- El contenido de los vídeos solo se mantiene en un breve búfer en memoria
  mientras lo ves. Nunca se guarda en el almacenamiento ni se sube.
- Todas las solicitudes a Google utilizan una conexión HTTPS cifrada.

**Cómo se comparten los datos de usuario de Google**

Edendale no transfiere datos de usuario de Google a BaBaSaMa. Solo comparte
datos de usuario de Google de las siguientes formas, cada una realizada desde tu
dispositivo para ofrecer una función que usas:

- **TMDB** recibe el título, el año, la temporada y el número de episodio
  reconocidos a partir del nombre de archivo de un vídeo, para que tu videoteca
  pueda mostrar los datos de la película o serie correspondiente. TMDB no recibe
  el nombre de archivo, el ID del archivo, su contenido ni los datos de tu
  cuenta de Google.
- **TheIntroDB**, solo si activas los avisos para omitir, recibe el
  identificador de TMDB del título identificado, los números de temporada y
  episodio y la duración del vídeo (sección 9).
- **Wyzie Subs**, solo cuando buscas subtítulos, recibe el identificador de TMDB
  del título identificado y los números de temporada y episodio (sección 8).
- **Apple** almacena y sincroniza la credencial de tu cuenta de Google, con
  cifrado de extremo a extremo, si utilizas el llavero de iCloud.
- La información puede divulgarse cuando lo exija la legislación aplicable o un
  procedimiento legal válido.

**Conservación y supresión**

- Elimina una fuente de Google Drive en Edendale para quitar sus vídeos de la
  videoteca de ese dispositivo.
- Cierra sesión en **Ajustes → Cuentas** para eliminar la cuenta de Google y sus
  tokens del dispositivo y de tus otros dispositivos Apple que la sincronizan.
  Elige **Cerrar sesión y revocar acceso** para pedir también a Google que ponga
  fin al acceso de Edendale, lo que también pone fin al acceso de un Apple TV
  que haya recibido la cuenta desde tu iPhone o iPad.
- Puedes retirar el acceso de Edendale en cualquier momento desde la página
  [Conexiones de terceros](https://myaccount.google.com/connections) de tu
  cuenta de Google. A partir de ese momento, Edendale ya no puede leer tu Drive.
- Desinstalar Edendale elimina su videoteca local del dispositivo. En las
  plataformas Apple, un elemento del llavero puede permanecer tras la
  desinstalación, así que cierra sesión primero en Edendale o retira el acceso
  de Edendale en Google.

**Uso limitado**

El uso que haga Edendale de la información recibida de las API de Google, y su
transferencia a cualquier otra aplicación, cumplirán la
[Política de datos de usuario de los servicios de API de Google](https://developers.google.com/terms/api-services-user-data-policy),
incluidos los requisitos de Uso limitado.

Google trata los datos de tu cuenta y de Drive conforme a la
[política de privacidad de Google](https://policies.google.com/privacy). Abrir
un tráiler de YouTube (sección 10) no utiliza ninguna cuenta de Google que hayas
vinculado para Google Drive.

### 6.4 Microsoft OneDrive

Edendale solicita estos permisos de Microsoft Graph:

| Permiso | Por qué lo solicita Edendale |
|---|---|
| `User.Read` | Para identificar la cuenta de Microsoft con la que has iniciado sesión y mostrarla en Ajustes → Cuentas |
| `Files.Read` | Para mostrar tus carpetas y que puedas elegir una, añadir a tu videoteca los vídeos de las carpetas que vincules y reproducir esos vídeos |
| `offline_access` | Para mantener la sesión iniciada sin volver a pedírtelo cada hora |

Edendale accede a:

- **Información de la cuenta:** el ID, el nombre visible y la dirección de
  correo electrónico o nombre principal de usuario de tu cuenta de Microsoft, y
  el ID de tu OneDrive.
- **Metadatos de archivos y carpetas** de las carpetas que abres o vinculas: de
  cada elemento, su ID, nombre, tamaño, si es un archivo o una carpeta, fecha y
  hora de la última modificación y la duración del vídeo que indica OneDrive.
- **Contenido de los archivos:** los archivos de vídeo que reproduces,
  transmitidos mediante enlaces de descarga de corta duración que emite
  OneDrive.

Edendale funciona con cuentas personales de Microsoft y con cuentas
profesionales o educativas. En el caso de una cuenta profesional o educativa, tu
organización puede ver que has iniciado sesión en Edendale y puede gestionar o
registrar ese acceso conforme a sus propias políticas.

Cerrar sesión en **Ajustes → Cuentas** elimina la cuenta y sus tokens del
dispositivo. Microsoft no permite que una aplicación revoque su propio acceso,
así que, para ponerle fin en Microsoft, elimina Edendale de la página de
[permisos de aplicaciones](https://account.live.com/consent/Manage) de tu cuenta
personal o, en el caso de una cuenta profesional o educativa, a través del
portal Mis aplicaciones de tu organización o de su administrador. Microsoft
trata esta información conforme a la
[declaración de privacidad de Microsoft](https://privacy.microsoft.com/privacystatement).

### 6.5 Dropbox

Edendale solicita estos permisos de Dropbox:

| Permiso | Por qué lo solicita Edendale |
|---|---|
| `account_info.read` | Para identificar la cuenta de Dropbox con la que has iniciado sesión y mostrarla en Ajustes → Cuentas |
| `files.metadata.read` | Para mostrar tus carpetas y que puedas elegir una, y añadir a tu videoteca los vídeos de las carpetas que vincules |
| `files.content.read` | Para reproducir esos vídeos |

Edendale accede a:

- **Información de la cuenta:** el ID, el nombre visible y la dirección de
  correo electrónico de tu cuenta de Dropbox.
- **Metadatos de archivos y carpetas** de las carpetas que abres y de todo lo
  que contiene una carpeta que vinculas (Dropbox lista de una sola vez todo el
  árbol de una carpeta vinculada): de cada elemento, su ID, nombre, ruta, tamaño
  y fecha de modificación.
- **Contenido de los archivos:** los archivos de vídeo que reproduces,
  transmitidos mediante enlaces temporales que caducan al cabo de cuatro horas.

Cerrar sesión en **Ajustes → Cuentas** elimina la cuenta y sus tokens del
dispositivo y pide a Dropbox que revoque el acceso de Edendale. También puedes
eliminar Edendale de tus
[aplicaciones conectadas](https://www.dropbox.com/account/connected_apps) de
Dropbox. Dropbox trata esta información conforme a su
[política de privacidad](https://www.dropbox.com/privacy).

## 7. Solicitudes a TMDB y sincronización opcional de cuenta

Edendale utiliza TMDB para búsquedas en el catálogo, imágenes, sinopsis,
reparto, valoraciones, referencias de tráileres y enriquecimiento de la
videoteca. Cuando usas estas funciones, se envían a TMDB el texto de búsqueda y
la información de título deducida. Esto también se aplica a los archivos de
servidores y de almacenamiento en la nube: TMDB recibe la información de título
reconocida a partir de un nombre de archivo, nunca el nombre de archivo, su
ubicación ni tu cuenta de almacenamiento. Las solicitudes van directamente de tu
dispositivo a TMDB; no pasan por ningún servidor de BaBaSaMa. TMDB puede recibir
información de conexión habitual, como una dirección IP y detalles del
dispositivo o de la solicitud.

Si conectas tu cuenta de TMDB, Edendale puede leer y actualizar tus favoritos,
tu lista de pendientes y tus valoraciones de TMDB cuando tú lo indiques. Tu
posición de reproducción y tu historial no se envían a TMDB.

TMDB trata la información conforme a su
[política de privacidad](https://www.themoviedb.org/privacy-policy) y a sus
[condiciones de API](https://www.themoviedb.org/api-terms-of-use).

## 8. Búsqueda de subtítulos

Edendale puede buscar subtítulos a través de **Wyzie Subs** (`sub.wyzie.io`,
operado por Wyzie). Solo se realiza una solicitud si abres el panel de subtítulos
durante la reproducción e inicias una búsqueda; no se envía nada por el mero
hecho de que un vídeo se esté reproduciendo.

Cuando inicias una búsqueda, Edendale envía el identificador de TMDB del título,
los números de temporada y episodio en el caso de un episodio, el idioma de
subtítulos que hayas elegido, los filtros de formato y de discapacidad auditiva
que hayas seleccionado y una clave de API: la incluida en tu versión o la que
hayas introducido en los ajustes. No se envían tu nombre de archivo, tu ruta, los
datos de vídeo ni tu videoteca. Wyzie puede recibir información de conexión
habitual, como una dirección IP.

Si eliges un resultado, Edendale descarga ese archivo de subtítulos desde Wyzie
o desde la ubicación a la que apunte y lo guarda en tu dispositivo, para poder
ofrecerlo de nuevo sin otra descarga cuando se reproduzca el mismo vídeo.
Edendale registra en el dispositivo a qué vídeo corresponde el subtítulo: el
título con el que se identificó y el nombre de archivo del vídeo. En las
plataformas Apple y en Windows, un subtítulo descargado que no se ha utilizado
durante aproximadamente un mes se elimina automáticamente; Windows te permite
desactivarlo en Ajustes → Subtítulos.

Wyzie trata la información conforme a sus propias condiciones y prácticas de
privacidad, ajenas al control de BaBaSaMa. Puedes evitar por completo el
contacto con Wyzie no iniciando ninguna búsqueda de subtítulos.

## 9. Avisos para omitir

Edendale puede mostrar los botones **Omitir intro**, **Omitir resumen** y
**Omitir créditos** usando marcas de tiempo aportadas por la comunidad de
**TheIntroDB** (`api.theintrodb.org`). Los avisos para omitir están desactivados
de forma predeterminada; puedes activarlos en los ajustes de reproducción de
Edendale o en las opciones de ajuste del reproductor. La reproducción nunca
salta ninguna parte a menos que pulses el botón.

Cuando los avisos para omitir están activados y reproduces un título que
Edendale ha identificado en TMDB, Edendale envía a TheIntroDB el identificador
de TMDB del título —en el caso de un episodio, el identificador de la serie con
los números de temporada y episodio— y la duración del vídeo, para que pueda
devolver marcas de tiempo que se ajusten a tu copia. No se envía ninguna cuenta,
clave de API, nombre de archivo, ruta de archivo, dato de vídeo ni videoteca.
TheIntroDB recibe información de conexión habitual, como tu dirección IP. Nunca
se consultan los archivos que Edendale no ha identificado.

Las marcas de tiempo solo se conservan en memoria mientras se reproduce el
vídeo. No se guardan en tu videoteca, en tu progreso de reproducción ni en
ningún almacenamiento sincronizado. TheIntroDB trata la información conforme a
su [política de privacidad](https://theintrodb.org/docs/privacy) y a sus
[condiciones](https://theintrodb.org/docs/terms).

## 10. Reproducción de tráileres

Edendale no contacta con YouTube por el mero hecho de que haya un tráiler
disponible. Ningún tráiler se reproduce antes de tu acción.

Cuando eliges expresamente ver un tráiler, las versiones para Apple y Android
abren una inserción de YouTube con privacidad mejorada
(`youtube-nocookie.com`), y Windows entrega el tráiler al navegador del sistema,
de modo que la propia aplicación no realiza ninguna llamada a YouTube. Google y
YouTube podrán entonces tratar información de conexión, dispositivo, procedencia,
visualización y publicidad conforme a la
[política de privacidad de Google](https://policies.google.com/privacy) y a las
condiciones de YouTube. El modo de privacidad mejorada limita parte del uso de
datos por YouTube; no hace anónima la solicitud, y un vídeo insertado puede
mostrar publicidad.

## 11. Informes de plataformas y tiendas

Edendale no contiene código de analítica, telemetría ni notificación de fallos en
ninguna plataforma. Su manifiesto de privacidad de Apple no declara ningún tipo
de dato recopilado ni ningún seguimiento.

Con independencia de Edendale, la plataforma o tienda desde la que instales puede
facilitar a BaBaSaMa informes agregados sobre la aplicación. Esos datos proceden
de la plataforma, no de nada que Edendale envíe, y los controlas desde la propia
plataforma:

- **Apple.** App Store Connect puede facilitar analíticas agregadas e informes de
  fallos de las versiones de la App Store. Apple solo incluye los datos de tu
  dispositivo si has activado **Compartir con desarrolladores de apps** en
  Ajustes → Privacidad y seguridad → Análisis y mejoras. Al desactivarlo, deja de
  hacerlo.
- **Android.** Cuando Edendale se distribuye mediante Google Play, Play Console
  puede facilitar informes de fallos y de ANR («la aplicación no responde») y
  métricas de calidad agregadas. Lo controlas en Ajustes → Google → Uso y
  diagnóstico y mediante la opción que se te ofrece al notificar un fallo.
- **Windows.** Cuando Edendale se distribuye mediante Microsoft Store, Partner
  Center puede facilitar informes agregados de estado y uso. Los datos de
  diagnóstico de Windows se controlan en Configuración → Privacidad y seguridad →
  Diagnóstico y comentarios.
- **Descargas directas.** Cuando Edendale se distribuye como descarga directa
  desde GitHub, GitHub recibe la solicitud de descarga y solo comunica a
  BaBaSaMa recuentos agregados de descargas.

Estos informes son agregados o de diagnóstico. No indican a BaBaSaMa qué has
visto, qué contiene tu videoteca o tu almacenamiento ni quién eres.

## 12. Cómo se utiliza la información

| Finalidad | Información | Base jurídica habitual cuando se exige |
|---|---|---|
| Indexar y reproducir los medios que selecciones | Medios e información de la videoteca | Ejecución del Servicio que solicitas |
| Listar, indexar y reproducir archivos de los servidores y del almacenamiento en la nube que vincules | Listados de carpetas, metadatos y contenido de los archivos de esa fuente | Ejecución del Servicio que solicitas |
| Iniciar sesión en una cuenta de almacenamiento vinculada y etiquetarla | Identificador de cuenta, dirección de correo electrónico, nombre visible y tokens | Tu solicitud o consentimiento |
| Obtener metadatos y resultados de búsqueda de TMDB | Texto de búsqueda e información de título deducida | Ejecución del Servicio; interés legítimo |
| Encontrar y descargar un subtítulo que hayas pedido | Identificador de TMDB, temporada y episodio, idioma y filtros | Tu solicitud |
| Mostrar los avisos para omitir que hayas activado | Identificador de TMDB, temporada y episodio, duración del vídeo | Tu solicitud o consentimiento |
| Guardar progreso, preferencias y valoraciones | Registros personales | Ejecución del Servicio |
| Sincronizar registros mediante tu cuenta de plataforma | Historial y registros personales | Tu solicitud o consentimiento; ejecución del Servicio |
| Conectar con una cuenta opcional de TMDB o un servidor | Token de cuenta o credenciales del servidor | Tu solicitud o consentimiento |
| Atender solicitudes de soporte | Datos de contacto y contenido de los mensajes | Interés legítimo; medidas solicitadas por ti |
| Mantener y mejorar las aplicaciones | Informes agregados de plataforma o tienda | Interés legítimo en la calidad y la estabilidad |

Cuando un tratamiento se base en el consentimiento, puedes retirarlo cerrando la
sesión o desconectando la cuenta correspondiente, eliminando la fuente,
desactivando la función o cambiando los permisos de la plataforma.

## 13. Comunicación de datos y proveedores

BaBaSaMa no vende tu información. Dado que BaBaSaMa no opera ningún servidor para
Edendale, la información solo se comunica en la medida necesaria:

- a **TMDB** cuando buscas, enriqueces un título, cargas metadatos o usas una
  cuenta opcional de TMDB conectada;
- a **Google**, **Microsoft** o **Dropbox** cuando vinculas y usas una cuenta de
  Google Drive, OneDrive o Dropbox (sección 6);
- al servidor que elijas cuando vinculas una fuente SMB, NFS, SFTP, WebDAV o
  compatible con S3;
- a **Wyzie** cuando inicias una búsqueda de subtítulos;
- a **TheIntroDB** mientras los avisos para omitir estén activados;
- a **Apple**, **Google** o **Microsoft** cuando activas o utilizas sus servicios
  de almacenamiento, copia de seguridad, credenciales o sincronización, o cuando
  facilitan los informes agregados descritos en la sección 11;
- a **YouTube/Google** después de que abras expresamente un tráiler;
- a **GitHub**, que sirve el sitio web y las descargas directas; y
- cuando lo exija la legislación aplicable o un procedimiento legal válido.

Cada una de estas organizaciones trata la información como responsable
independiente, conforme a sus propias condiciones y política de privacidad.
Ninguna actúa como encargada por cuenta de BaBaSaMa, y BaBaSaMa no recibe copia
alguna de lo que recopilan más allá de los informes agregados descritos en la
sección 11.

## 14. Conservación y supresión

- **Sitio web:** no hay nada que borrar. El sitio no usa cookies ni
  almacenamiento del navegador. Los datos de solicitud que llegan a GitHub se
  conservan según las políticas de GitHub y no están a disposición de BaBaSaMa.
- **Almacenamiento local de las apps:** eliminar una fuente o un registro afecta
  al índice de la videoteca local; no elimina necesariamente los registros de
  reproducción o de cuenta. Borrar los datos de la aplicación puede eliminar el
  contenedor local según los controles de esa plataforma. El comportamiento al
  desinstalar, respaldar y restaurar varía según la plataforma y no elimina
  necesariamente las copias en la nube o de seguridad.
- **Servidores y cuentas de almacenamiento en la nube vinculados:** eliminar una
  fuente quita sus archivos de la videoteca, pero conserva su inicio de sesión o
  su cuenta para que otras fuentes puedan usarlos. Para eliminarlos, cierra
  sesión u olvida el inicio de sesión en **Ajustes → Cuentas**. Cerrar sesión no
  elimina nada de tu almacenamiento; para poner fin al acceso de Edendale en un
  proveedor de la nube, utiliza los controles del proveedor descritos en la
  sección 6.
- **Apple:** los registros privados de CloudKit y los elementos sincronizados del
  llavero de iCloud pueden permanecer tras la desinstalación. Gestiónalos con los
  controles disponibles de iCloud, llavero, aplicación o dispositivo. Edendale no
  ofrece por ahora un control único de borrado total multiplataforma.
- **Android:** una copia de seguridad de la plataforma o de transferencia de
  dispositivo puede permanecer según los controles y plazos de Google, del
  fabricante del dispositivo o de tu proveedor de copias. Las entradas de Watch
  Next de la pantalla de inicio de Android TV se eliminan al desactivar el
  ajuste.
- **Windows:** una réplica en tu carpeta de OneDrive `Apps/Edendale` permanece
  hasta que la elimines mediante OneDrive y las funciones de papelera o
  recuperación aplicables.
- **Los subtítulos descargados** permanecen en tu dispositivo hasta que los
  elimines o, en las plataformas Apple y en Windows, hasta que pase
  aproximadamente un mes sin que se usen. Wyzie no mantiene ninguna cuenta tuya;
  cualquier registro de solicitud que conserve se rige por Wyzie.
- **Las marcas de tiempo de los avisos para omitir** se descartan al terminar la
  reproducción. Cualquier registro de solicitud que conserve TheIntroDB se rige
  por TheIntroDB.
- Una cuenta de TMDB conectada conserva la información según los ajustes y
  políticas de TMDB. Desconectar Edendale no elimina automáticamente la
  información ya almacenada en tu cuenta de TMDB; gestiona esos registros a
  través de TMDB.
- La correspondencia de soporte se conserva solo el tiempo razonablemente
  necesario para responder, mantener un historial de soporte o cumplir
  obligaciones legales.

Dado que BaBaSaMa por lo general no puede acceder a información almacenada solo
en tu dispositivo o en una cuenta privada de plataforma, utiliza los controles
específicos de cada plataforma indicados arriba. Una solicitud de privacidad a
BaBaSaMa no puede borrar directamente información a la que BaBaSaMa no tiene
acceso.

## 15. Transferencias internacionales

GitHub, TMDB, Wyzie, TheIntroDB, Apple, Google, Microsoft y Dropbox pueden
tratar información en países distintos del tuyo. Sus políticas de privacidad
describen las garantías que aplican a las transferencias internacionales.
BaBaSaMa no transfiere por sí mismo tu información, porque no la recibe.

## 16. Seguridad

Edendale utiliza conexiones cifradas para TMDB, Wyzie, TheIntroDB y todos los
proveedores de almacenamiento en la nube, y guarda las credenciales en
almacenamiento protegido de la plataforma. El inicio de sesión en la nube
utiliza OAuth 2.0 con PKCE en la propia página del proveedor, por lo que
Edendale nunca maneja la contraseña de tu servicio en la nube, y los tokens de
acceso permanecen en memoria. Edendale fija la clave de host de cada servidor
SFTP y te pregunta antes de confiar en una clave que haya cambiado.

Una conexión con tu propio servidor solo es tan privada como lo permitan su
protocolo y su configuración. Las conexiones SFTP y HTTPS están cifradas; NFS,
WebDAV sobre `http://` y algunas configuraciones de SMB no lo están, así que
utilízalos solo en una red de confianza.

El Servicio mantiene deliberadamente los datos de vídeo y los registros
personales fuera de cualquier almacenamiento operado por el desarrollador: no
existe tal almacenamiento. Ninguna medida de seguridad puede garantizar una
protección absoluta, así que protege tu dispositivo, tus cuentas de plataforma,
tus cuentas de almacenamiento en la nube, tus servidores y tus copias de
seguridad.

## 17. Privacidad de los menores

Edendale es una utilidad multimedia para el público general y no está dirigida a
menores de 13 años. BaBaSaMa no recopila conscientemente información personal de
menores a través de Edendale. Cualquier madre, padre o tutor que crea que un
menor ha enviado información personal a BaBaSaMa puede contactar con nosotros
para solicitar su supresión.

## 18. Tus derechos

Según dónde residas, puedes tener derecho a ser informado y a solicitar acceso,
rectificación, supresión, limitación, portabilidad u oposición, así como a
retirar el consentimiento o a reclamar ante una autoridad de protección de
datos.

Casi toda la información de Edendale está bajo tu control directo, porque
permanece en tu dispositivo, en tu cuenta de plataforma o en el proveedor de
almacenamiento que hayas elegido. Puedes poner fin en cualquier momento al
acceso de Edendale a una cuenta de almacenamiento en la nube con los controles
descritos en la sección 6. Para la información que obra en poder de BaBaSaMa,
como un mensaje de soporte, escribe a **long@babasama.com**. Es posible que
necesitemos datos suficientes para verificar y atender tu solicitud.

## 19. Cambios en esta política

Podemos actualizar esta política cuando cambien las funciones, plataformas,
proveedores u obligaciones legales de Edendale. Modificaremos la fecha de
**Última actualización** y avisaremos adicionalmente cuando proceda. Un
tratamiento sustancialmente distinto no se aplicará de forma retroactiva cuando
se requiera consentimiento u otra base jurídica.

## 20. Contacto

Puedes enviar tus preguntas, solicitudes o reclamaciones a:

- **BaBaSaMa**
- **long@babasama.com**
