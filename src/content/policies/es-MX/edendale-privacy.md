---
title: "Política de privacidad"
app: "Edendale"
lastUpdated: "2 de agosto de 2026"
lastUpdatedLabel: "Última actualización"
contentLanguage: "es-MX"
draft: true
---

> **Traducción del borrador en inglés.** Antes de publicar, confirma la
> denominación legal y la dirección del responsable y somete este documento a
> revisión jurídica. Esta plantilla no sustituye al asesoramiento legal. En caso
> de discrepancia entre las versiones lingüísticas, prevalecerá la versión en
> inglés.

## 1. Introducción y ámbito

Esta política de privacidad explica cómo **Edendale** trata la información
cuando utilizas una aplicación oficial de Edendale o el sitio web de Edendale
(conjuntamente, el «**Servicio**»).

Edendale es un reproductor de video local y un registro personal de lo que ves.
Te permite reproducir los medios que elijas, crear una biblioteca privada,
enriquecer títulos con información de The Movie Database («**TMDB**»), buscar
subtítulos y mantener un historial personal de reproducción. Edendale no te
proporciona, aloja ni sube películas o episodios de televisión.

El sitio web de Edendale es un sitio informativo. Describe las aplicaciones,
enlaza al código fuente del proyecto y responde a los enlaces de aplicación para
que un enlace de Edendale compartido pueda abrirse en una aplicación instalada.
No es un reproductor de video, no tiene cuentas y no almacena nada sobre ti.

Esta política se aplica a las versiones oficiales y al sitio web oficial. Los
forks independientes y las copias autoalojadas dependen de sus respectivos
operadores y pueden tratar la información de otra manera.

## 2. Responsable

El responsable del Servicio oficial es:

- **BaBaSaMa**
- Correo electrónico: **long@babasama.com**
- **[Antes de publicar: añadir la denominación legal y la dirección postal del
  responsable si resulta obligatorio en los países donde se ofrece Edendale.]**

## 3. Resumen: primero lo local

Edendale está diseñado para reducir al mínimo la recopilación de datos:

- No necesitas una cuenta de Edendale.
- BaBaSaMa no opera ningún servidor, base de datos ni proxy para Edendale. No
  existe ningún lugar al que puedan enviarse a nosotros los datos de tu
  biblioteca, tu reproducción o tus cuentas.
- Tus archivos de video y de subtítulos no se suben a BaBaSaMa ni a terceros.
- Edendale no incluye publicidad, analítica de marketing, notificación de
  fallos ni seguimiento del comportamiento en ninguna plataforma. YouTube puede
  mostrar publicidad después de que elijas abrir un tráiler.
- BaBaSaMa no vende ni alquila información personal.
- El índice de la biblioteca y tus registros personales se guardan en tu
  dispositivo o en el almacenamiento asociado a tu propia cuenta de plataforma,
  tal y como se describe más abajo.
- El acceso a la red se limita a las funciones que utilizas: metadatos de TMDB y
  sincronización opcional de cuenta, la búsqueda de subtítulos que inicies, las
  carpetas de red que selecciones, el almacenamiento o la sincronización de la
  plataforma y un tráiler abierto por tu acción expresa.

Una conexión opcional con TMDB es una cuenta en TMDB, no una cuenta de Edendale.

## 4. Información que trata Edendale

### 4.1 Medios locales e información de la biblioteca

Cuando eliges un archivo, una carpeta o un recurso compartido de red, Edendale
puede tratar:

- nombres de archivos y carpetas;
- rutas relativas, identificadores de archivo de la plataforma o marcadores con
  ámbito de seguridad;
- tipo, tamaño y fecha de modificación del archivo;
- el título, el año de estreno, el nombre de la serie, el número de temporada y
  el número de episodio deducidos del nombre de archivo;
- la dirección de un servidor y recurso compartido de red que selecciones; y
- identificadores de TMDB, enlaces a imágenes, sinopsis, reparto, duración y
  otros metadatos empleados para enriquecer tu biblioteca local.

La clasificación de nombres de archivo se realiza localmente antes de cualquier
solicitud de metadatos. Después, Edendale puede enviar a TMDB un título de
película o serie, un año, un número de temporada o de episodio así deducidos
para localizar los metadatos correspondientes.

Los datos de tus videos y subtítulos permanecen en la ubicación que hayas
elegido y se leen para la reproducción. No se suben a BaBaSaMa ni a terceros. Si
reproduces desde un recurso compartido de red, tu dispositivo se comunica con
dicho recurso.

### 4.2 Historial de reproducción y registros personales

Según la función y la plataforma, Edendale puede guardar:

- posición de reproducción, duración vista, estado de finalización y fecha de la
  última reproducción;
- favoritos y elementos de la lista de pendientes;
- tu valoración personal;
- preferencias del reproductor y de la interfaz, incluidos el idioma de
  subtítulos y el filtro para personas con discapacidad auditiva; y
- una instantánea de visualización limitada, como un título o una referencia de
  póster, utilizada en los widgets de la pantalla de inicio y en las filas de
  «continuar viendo».

Estos registros son para tu uso personal.

### 4.3 Credenciales e información de cuenta

Si conectas una cuenta opcional de TMDB, Edendale recibe un token de acceso y un
identificador de cuenta de TMDB para sincronizar los favoritos, las entradas de
la lista de pendientes y las valoraciones compatibles. Edendale guarda esa
credencial en el almacén protegido de la plataforma: el llavero en plataformas
Apple, un almacén cifrado respaldado por el Keystore de Android en Android y
DPAPI en Windows. En plataformas Apple, una credencial puede sincronizarse
mediante el llavero de iCloud si has activado su sincronización.

Si conectas un recurso compartido de red protegido con contraseña, Edendale
guarda la dirección del recurso y las credenciales en ese mismo almacén
protegido. Esas credenciales se usan únicamente para conectarte al recurso que
hayas elegido y no se envían a BaBaSaMa ni a terceros.

Si introduces tu propia clave de API para el servicio de subtítulos, se guarda
en ese mismo almacén protegido y solo se envía al servicio de subtítulos
descrito en la sección 7.

### 4.4 Mensajes de soporte

Si contactas a BaBaSaMa, recibimos la dirección que utilices, tu mensaje y
cualquier información o material de diagnóstico que decidas incluir. No envíes
archivos de video, contraseñas, tokens de acceso ni otro material sensible.

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

El índice de la biblioteca local, las rutas de archivo y los marcadores con
ámbito de seguridad permanecen en un almacén local del dispositivo y están
excluidos expresamente de la replicación en CloudKit.

El progreso de reproducción y las decisiones por título —favoritos, pertenencia
a la lista de pendientes y valoraciones— se guardan en el contenedor privado de
iCloud de Edendale para que aparezcan en tus dispositivos Apple. Las credenciales
de TMDB, de recursos compartidos de red y del servicio de subtítulos pueden usar
el llavero de iCloud. Apple trata esta información conforme a su
[política de privacidad](https://www.apple.com/legal/privacy/) y a tu
configuración de iCloud.

### 5.3 Android

Android guarda la biblioteca y los registros personales de Edendale en el
almacenamiento local de la aplicación. Según tu configuración de copia de
seguridad y transferencia de dispositivo, el sistema operativo puede incluir los
datos de aplicación admisibles en la copia de seguridad de la plataforma o en la
transferencia. Los almacenes protegidos de la sesión de TMDB, de las credenciales
de red y de la clave de subtítulos quedan excluidos tanto de la copia de
seguridad en la nube como de la transferencia de dispositivo por las reglas de
copia de seguridad de Edendale, porque las claves que los protegen nunca
abandonan el dispositivo. La protección y la conservación de las copias dependen
de tu versión de Android, tu dispositivo, tu cuenta y tu proveedor de copias de
seguridad.

### 5.4 Windows

Windows guarda el índice de la biblioteca local en el almacenamiento local de la
aplicación. El progreso de reproducción, los favoritos, las entradas de la lista
de pendientes y las valoraciones también se guardan localmente y, cuando OneDrive
está configurado en el dispositivo, Edendale coloca una réplica de esos registros
personales en tu propia carpeta de OneDrive `Apps/Edendale`, de modo que un
segundo PC con la misma sesión converja. Sin OneDrive, la aplicación funciona
solo en local. Las credenciales permanecen protegidas localmente y nunca se
incluyen en esa réplica. Microsoft trata los datos de OneDrive conforme a las
condiciones de tu cuenta de Microsoft y a tu configuración de privacidad.

## 6. Solicitudes a TMDB y sincronización opcional de cuenta

Edendale utiliza TMDB para búsquedas en el catálogo, imágenes, sinopsis,
reparto, valoraciones, referencias de tráileres y enriquecimiento de la biblioteca
local. Cuando usas estas funciones, se envían a TMDB el texto de búsqueda y la
información de título deducida. Las solicitudes van directamente de tu
dispositivo a TMDB; no pasan por ningún servidor de BaBaSaMa. TMDB puede recibir
información de conexión habitual, como una dirección IP y detalles del
dispositivo o de la solicitud.

Si conectas tu cuenta de TMDB, Edendale puede leer y actualizar tus favoritos,
tu lista de pendientes y tus valoraciones de TMDB cuando tú lo indiques. Tu
posición de reproducción y tu historial no se envían a TMDB.

TMDB trata la información conforme a su
[política de privacidad](https://www.themoviedb.org/privacy-policy) y a sus
[condiciones de API](https://www.themoviedb.org/api-terms-of-use).

## 7. Búsqueda de subtítulos

Edendale puede buscar subtítulos a través de **Wyzie Subs** (`sub.wyzie.io`,
operado por Wyzie). Solo se realiza una solicitud si abres el panel de subtítulos
durante la reproducción e inicias una búsqueda; no se envía nada por el mero
hecho de que un video se esté reproduciendo.

Cuando inicias una búsqueda, Edendale envía el identificador de TMDB del título,
los números de temporada y episodio en el caso de un episodio, el idioma de
subtítulos que hayas elegido, los filtros de formato y de discapacidad auditiva
que hayas seleccionado y una clave de API: la incluida en tu versión o la que
hayas introducido en la configuración. No se envían tu nombre de archivo, tu
ruta, los datos de video ni tu biblioteca. Wyzie puede recibir información de
conexión habitual, como una dirección IP.

Si eliges un resultado, Edendale descarga ese archivo de subtítulos desde Wyzie
o desde la ubicación a la que apunte y lo guarda para la reproducción. Wyzie
trata la información conforme a sus propias condiciones y prácticas de
privacidad, ajenas al control de BaBaSaMa. Puedes evitar por completo el
contacto con Wyzie no iniciando ninguna búsqueda de subtítulos.

## 8. Reproducción de tráileres

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
datos por YouTube; no hace anónima la solicitud, y un video insertado puede
mostrar publicidad.

## 9. Informes de plataformas y tiendas

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
  Configuración → Privacidad y seguridad → Análisis y mejoras. Al desactivarlo,
  deja de hacerlo.
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
visto, qué contiene tu biblioteca ni quién eres.

## 10. Cómo se utiliza la información

| Finalidad | Información | Base jurídica habitual cuando se exige |
|---|---|---|
| Indexar y reproducir los medios que selecciones | Medios locales e información de la biblioteca | Ejecución del Servicio que solicitas |
| Obtener metadatos y resultados de búsqueda de TMDB | Texto de búsqueda e información de título deducida | Ejecución del Servicio; interés legítimo |
| Encontrar y descargar un subtítulo que hayas pedido | Identificador de TMDB, temporada y episodio, idioma y filtros | Tu solicitud |
| Guardar progreso, preferencias y valoraciones | Registros personales | Ejecución del Servicio |
| Sincronizar registros mediante tu cuenta de plataforma | Historial y registros personales | Tu solicitud o consentimiento; ejecución del Servicio |
| Conectarse a una cuenta opcional de TMDB o un recurso de red | Token de cuenta o credenciales del recurso | Tu solicitud o consentimiento |
| Atender solicitudes de soporte | Datos de contacto y contenido de los mensajes | Interés legítimo; medidas solicitadas por ti |
| Mantener y mejorar las aplicaciones | Informes agregados de plataforma o tienda | Interés legítimo en la calidad y la estabilidad |

Cuando un tratamiento se base en el consentimiento, puedes retirarlo
desconectando la cuenta correspondiente, desactivando la función o cambiando los
permisos de la plataforma.

## 11. Comunicación de datos y proveedores

BaBaSaMa no vende tu información. Dado que BaBaSaMa no opera ningún servidor para
Edendale, la información solo se comunica en la medida necesaria:

- a **TMDB** cuando buscas, enriqueces un título, cargas metadatos o usas una
  cuenta opcional de TMDB conectada;
- a **Wyzie** cuando inicias una búsqueda de subtítulos;
- a **Apple**, **Google** o **Microsoft** cuando activas o utilizas sus servicios
  de almacenamiento, copia de seguridad, credenciales o sincronización, o cuando
  facilitan los informes agregados descritos en la sección 9;
- a **YouTube/Google** después de que abras expresamente un tráiler;
- al servidor de red que elijas al conectar un recurso compartido;
- a **GitHub**, que sirve el sitio web y las descargas directas; y
- cuando lo exija la legislación aplicable o un procedimiento legal válido.

Cada una de estas organizaciones trata la información como responsable
independiente, conforme a sus propias condiciones y política de privacidad.
Ninguna actúa como encargada por cuenta de BaBaSaMa, y BaBaSaMa no recibe copia
alguna de lo que recopilan más allá de los informes agregados descritos en la
sección 9.

## 12. Conservación y supresión

- **Sitio web:** no hay nada que borrar. El sitio no usa cookies ni
  almacenamiento del navegador. Los datos de solicitud que llegan a GitHub se
  conservan según las políticas de GitHub y no están a disposición de BaBaSaMa.
- **Almacenamiento local de las apps:** eliminar una fuente o un registro afecta
  al índice de la biblioteca local; no elimina necesariamente los registros de
  reproducción o de cuenta. Borrar los datos de la aplicación puede eliminar el
  contenedor local según los controles de esa plataforma. El comportamiento al
  desinstalar, respaldar y restaurar varía según la plataforma y no elimina
  necesariamente las copias en la nube o de seguridad.
- **Apple:** los registros privados de CloudKit y los elementos sincronizados del
  llavero de iCloud pueden permanecer tras la desinstalación. Gestiónalos con los
  controles disponibles de iCloud, llavero, aplicación o dispositivo. Edendale no
  ofrece por ahora un control único de borrado total multiplataforma.
- **Android:** una copia de seguridad de la plataforma o de transferencia de
  dispositivo puede permanecer según los controles y plazos de Google, del
  fabricante del dispositivo o de tu proveedor de copias.
- **Windows:** una réplica en tu carpeta de OneDrive `Apps/Edendale` permanece
  hasta que la elimines mediante OneDrive y las funciones de papelera o
  recuperación aplicables.
- **Los subtítulos descargados** permanecen en tu dispositivo hasta que los
  elimines. Wyzie no mantiene ninguna cuenta tuya; cualquier registro de
  solicitud que conserve se rige por Wyzie.
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

## 13. Transferencias internacionales

GitHub, TMDB, Wyzie, Apple, Google y Microsoft pueden tratar información en
países distintos del tuyo. Sus políticas de privacidad describen las garantías
que aplican a las transferencias internacionales. BaBaSaMa no transfiere por sí
mismo tu información, porque no la recibe.

## 14. Seguridad

Edendale utiliza conexiones de red cifradas para los servicios en línea
compatibles, rechaza el tráfico sin cifrar y emplea almacenamiento protegido de
la plataforma para las credenciales. El Servicio mantiene deliberadamente los
datos de video y los registros personales fuera de cualquier almacenamiento
operado por el desarrollador: no existe tal almacenamiento. Ninguna medida de
seguridad puede garantizar una protección absoluta, así que protege tu
dispositivo, tus cuentas de plataforma, tus recursos compartidos de red y tus
copias de seguridad.

## 15. Privacidad de los menores

Edendale es una utilidad multimedia para el público general y no está dirigida a
menores de 13 años. BaBaSaMa no recopila conscientemente información personal de
menores a través de Edendale. Cualquier madre, padre o tutor que crea que un
menor ha enviado información personal a BaBaSaMa puede contactarnos
para solicitar su supresión.

## 16. Tus derechos

Según dónde residas, puedes tener derecho a ser informado y a solicitar acceso,
rectificación, supresión, limitación, portabilidad u oposición, así como a
retirar el consentimiento o a reclamar ante una autoridad de protección de
datos.

Casi toda la información de Edendale está bajo tu control directo, porque
permanece en tu dispositivo o en tu cuenta de plataforma. Para la información que
obra en poder de BaBaSaMa, como un mensaje de soporte, escribe a
**long@babasama.com**. Es posible que necesitemos datos suficientes para
verificar y atender tu solicitud.

## 17. Cambios en esta política

Podemos actualizar esta política cuando cambien las funciones, plataformas,
proveedores u obligaciones legales de Edendale. Modificaremos la fecha de
**Última actualización** y avisaremos adicionalmente cuando proceda. Un
tratamiento sustancialmente distinto no se aplicará de forma retroactiva cuando
se requiera consentimiento u otra base jurídica.

## 18. Contacto

Puedes enviar tus preguntas, solicitudes o reclamaciones a:

- **BaBaSaMa**
- **long@babasama.com**
