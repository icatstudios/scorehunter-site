import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentEs() {
  return (
    <>
      <p>
        En iCat Studios (&quot;nosotros&quot;, &quot;nuestro&quot;)
        respetamos la privacidad de los usuarios (&quot;tú&quot;,
        &quot;tu&quot;) de la aplicación móvil ScoreHunter (&quot;la
        App&quot;). Esta Política de privacidad explica qué datos
        personales recopilamos, cómo los utilizamos, con quién los
        compartimos y cuáles son tus derechos al usar nuestra App.
      </p>
      <p>
        Al utilizar la App, aceptas esta Política de privacidad.
      </p>

      <Divider />

      <Section title="1. Datos que recopilamos">
        <SubHeading>1.1 Información de la cuenta</SubHeading>
        <p>
          Cuando utilizas &quot;Iniciar sesión con Apple&quot; o
          &quot;Iniciar sesión con Google&quot;, recibimos la siguiente
          información de Apple o Google:
        </p>
        <List
          items={[
            <>
              <Strong>Dirección de correo electrónico</Strong> (Apple
              proporciona un correo de retransmisión si seleccionas
              &quot;Ocultar mi correo&quot;)
            </>,
            <>
              <Strong>Nombre y apellido</Strong> (Apple los proporciona
              solo en el primer inicio de sesión; Google los proporciona
              en cada inicio de sesión)
            </>,
            <>
              <Strong>Provider User ID</Strong> — un identificador único
              utilizado para reconocer tu cuenta
            </>,
          ]}
        />

        <SubHeading>1.2 Información del perfil</SubHeading>
        <p>Información que proporcionas directamente en la App:</p>
        <List
          items={[
            <>
              <Strong>Nombre de usuario</Strong> (nombre visible en las
              clasificaciones)
            </>,
            <>
              <Strong>País</Strong>
            </>,
            <>
              <Strong>Equipo de fútbol favorito</Strong>
            </>,
            <>
              <Strong>Fecha de nacimiento</Strong>
            </>,
            <>
              <Strong>Género</Strong> (opcional — opción &quot;prefiero
              no decirlo&quot; disponible)
            </>,
            <>
              <Strong>Estado de la suscripción Pro</Strong> — si tienes
              una membresía Pro activa y su fecha de vencimiento
            </>,
          ]}
        />

        <SubHeading>1.3 Datos de uso</SubHeading>
        <p>Datos generados al utilizar la App:</p>
        <List
          items={[
            <>
              <Strong>Listas de pronósticos</Strong> (partidos
              seleccionados y pronósticos realizados para Score Hunt y
              los minijuegos)
            </>,
            <>
              <Strong>Ligas a las que te unes</Strong>
            </>,
            <>
              <Strong>Trofeos y logros obtenidos</Strong>
            </>,
            <>
              <Strong>Puntuaciones de las clasificaciones semanales y de
              temporada</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Información del dispositivo y de la App</SubHeading>
        <List
          items={[
            <>
              <Strong>Identificador del dispositivo</Strong> (para gestión
              anónima de sesiones)
            </>,
            <>
              <Strong>Sistema operativo</Strong> (versión iOS/Android)
            </>,
            <>
              <Strong>Versión y plataforma de la App</Strong> (código de
              versión, nombre de versión y si usas iOS o Android) — se
              utiliza para ofrecer soporte específico de la versión e
              identificar problemas de compatibilidad
            </>,
            <>
              <Strong>Token de notificaciones push</Strong> — un token
              único emitido por Apple Push Notification service (APNs)
              o Firebase Cloud Messaging (FCM) para enviarte
              recordatorios de partidos, notificaciones de premios y
              avisos importantes. Puedes desactivar las notificaciones
              push en cualquier momento desde los ajustes de tu
              dispositivo.
            </>,
          ]}
        />

        <SubHeading>1.5 Identificador publicitario</SubHeading>
        <p>
          La App puede recopilar tu{" "}
          <Strong>Identificador publicitario</Strong> (IDFA en iOS,
          GAID/Identificador de publicidad en Android){" "}
          <Strong>solo con tu consentimiento explícito</Strong>:
        </p>
        <List
          items={[
            <>
              En <Strong>iOS</Strong>, verás un aviso de{" "}
              <Strong>App Tracking Transparency (ATT)</Strong> la primera
              vez que abras la App. Si seleccionas &quot;Pedirle a la
              app que no me siga&quot;, no se recopila el IDFA y nuestros
              socios publicitarios reciben solo información que preserva
              la privacidad mediante SKAdNetwork de Apple.
            </>,
            <>
              En <Strong>Android</Strong>, el GAID se recopila salvo que
              te excluyas mediante{" "}
              <Strong>
                Ajustes → Google → Anuncios → Eliminar identificador de
                publicidad
              </Strong>
              .
            </>,
            <>
              Cuando se recopila, el Identificador publicitario se
              comparte con nuestros socios publicitarios indicados en la
              sección 3.4 para atribución y limitación de frecuencia.
            </>,
          ]}
        />

        <SubHeading>1.6 Datos recopilados automáticamente</SubHeading>
        <List
          items={[
            <>
              <Strong>Dirección IP</Strong> — utilizada con fines de
              seguridad, incluida la limitación de tasa en endpoints de
              autenticación (por ejemplo, hasta 15 intentos de inicio de
              sesión por minuto por IP) y la prevención de abusos. No
              utilizamos las direcciones IP para crear perfiles
              publicitarios.
            </>,
            <>
              <Strong>Informes de errores y fallos</Strong> — se utilizan
              para supervisar la estabilidad de la App. Los informes se
              filtran para excluir información personal identificable.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Cómo utilizamos tus datos">
        <p>Usamos los datos recopilados con los siguientes fines:</p>
        <List
          items={[
            <>
              <Strong>Creación y gestión de cuenta</Strong>: para que
              puedas iniciar sesión y usar la App
            </>,
            <>
              <Strong>Experiencia de juego</Strong>: para guardar tus
              listas de pronósticos, calcular tus puntuaciones y elaborar
              las clasificaciones
            </>,
            <>
              <Strong>Personalización</Strong>: para mostrar tu equipo
              favorito y país en las clasificaciones
            </>,
            <>
              <Strong>Gestión de la suscripción Pro</Strong>: para
              verificar el estado de tu suscripción y conceder acceso a
              las funciones Pro
            </>,
            <>
              <Strong>Comunicación</Strong>: para enviar actualizaciones
              importantes, anuncios, notificaciones de premios y
              notificaciones push relativas a la App
            </>,
            <>
              <Strong>Entrega de premios</Strong>: para enviar premios
              físicos o digitales a las personas ganadoras de los
              concursos (requiere nombre y correo electrónico)
            </>,
            <>
              <Strong>Seguridad de la cuenta</Strong>: para prevenir
              cuentas fraudulentas, verificar la identidad y limitar
              actividades sospechosas
            </>,
            <>
              <Strong>Publicidad</Strong>: para mostrar anuncios dentro
              de la App y medir su rendimiento — consulta la sección 8
              para más detalles
            </>,
            <>
              <Strong>Analítica y mejora</Strong>: para analizar las
              estadísticas de uso de forma anónima y mejorar la App
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Con quién compartimos tus datos">
        <p>
          ScoreHunter{" "}
          <Strong>
            no vende ni alquila tus datos personales a terceros
          </Strong>
          . Solo compartimos datos con los proveedores de servicios y
          socios publicitarios de confianza enumerados a continuación, y
          únicamente en la medida necesaria para operar la App.
        </p>

        <SubHeading>3.1 Proveedores de servicios</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — alojamiento
              de servidores y base de datos (Fráncfort, Alemania)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — servicio de terceros que proporciona datos de
              partidos, información de equipos y ligas, así como
              recursos visuales asociados (logotipos e imágenes). No se
              comparten datos personales con API-Football. ScoreHunter
              no posee los derechos sobre los logotipos o marcas
              entregados a través de este servicio; consulta la
              sección 11 para más detalles.
            </>,
            <>
              <Strong>Apple</Strong> — autenticación con Apple Sign-In
            </>,
            <>
              <Strong>Google</Strong> — autenticación con Google Sign-In
              y Firebase Cloud Messaging (notificaciones push en
              Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — procesa las compras y
              renovaciones de la suscripción Pro en iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — procesa las compras
              y renovaciones de la suscripción Pro en Android
            </>,
            <>
              <Strong>Sentry</Strong> — monitorización de errores y
              excepciones del back-end. El filtrado de información
              personal identificable está activado (no se envían correos
              electrónicos, nombres ni contenido del usuario a Sentry).
            </>,
          ]}
        />
        <p>
          Estos proveedores solo procesan datos en nuestro nombre y
          siguiendo nuestras instrucciones.
        </p>

        <SubHeading>3.2 Requisitos legales</SubHeading>
        <p>
          Tus datos pueden compartirse con autoridades en respuesta a
          una orden judicial, una investigación legal o una obligación
          legal.
        </p>

        <SubHeading>
          3.3 Información visible para otros usuarios
        </SubHeading>
        <p>
          La siguiente información es{" "}
          <Strong>visible para otros usuarios</Strong> en las
          clasificaciones y páginas de perfil:
        </p>
        <List
          items={[
            "Tu nombre de usuario",
            "Tu bandera de país",
            "Tu equipo favorito",
            "Los trofeos que has obtenido",
            "Tus puntuaciones y estadísticas de pronósticos",
            "Una insignia de membresía Pro si tienes una suscripción activa",
          ]}
        />
        <p>
          La siguiente información{" "}
          <Strong>nunca se muestra en la App</Strong>:
        </p>
        <List
          items={[
            "Tu dirección de correo electrónico",
            "Tu nombre y apellido reales",
            "Tu fecha de nacimiento",
            "Tu género",
            "La información de tu dispositivo",
            "Tu identificador publicitario",
            "La fecha de vencimiento de tu suscripción",
          ]}
        />

        <SubHeading>3.4 Socios publicitarios</SubHeading>
        <p>
          La App muestra anuncios a través de varias redes publicitarias
          (a veces denominadas <em>mediation</em>). Cuando hayas
          consentido el seguimiento, tu Identificador publicitario y
          datos técnicos limitados pueden compartirse con los socios
          siguientes para la entrega de anuncios, atribución y
          limitación de frecuencia. Cada socio cuenta con su propia
          política de privacidad:
        </p>
        <List
          items={[
            <>
              <Strong>Google AdMob</Strong> &amp; Google User Messaging
              Platform —{" "}
              <Anchor href="https://policies.google.com/privacy">
                policies.google.com/privacy
              </Anchor>
            </>,
            <>
              <Strong>AppLovin</Strong> —{" "}
              <Anchor href="https://www.applovin.com/privacy/">
                applovin.com/privacy
              </Anchor>
            </>,
            <>
              <Strong>Liftoff (Vungle)</Strong> —{" "}
              <Anchor href="https://liftoff.io/privacy-policy/">
                liftoff.io/privacy-policy
              </Anchor>
            </>,
            <>
              <Strong>IronSource</Strong> —{" "}
              <Anchor href="https://developers.is.com/ironsource-mobile/general/privacy-information/">
                developers.is.com/ironsource-mobile/general/privacy-information
              </Anchor>
            </>,
            <>
              <Strong>Unity Ads</Strong> —{" "}
              <Anchor href="https://unity.com/legal/game-player-and-app-user-privacy-policy">
                unity.com/legal/game-player-and-app-user-privacy-policy
              </Anchor>
            </>,
            <>
              <Strong>Meta Audience Network</Strong> —{" "}
              <Anchor href="https://www.facebook.com/about/privacy">
                facebook.com/about/privacy
              </Anchor>
            </>,
            <>
              <Strong>InMobi</Strong> —{" "}
              <Anchor href="https://www.inmobi.com/privacy-policy">
                inmobi.com/privacy-policy
              </Anchor>
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. Dónde y durante cuánto tiempo almacenamos tus datos">
        <SubHeading>4.1 Lugar de almacenamiento</SubHeading>
        <p>
          Todos los datos de los usuarios se almacenan en los centros
          de datos de{" "}
          <Strong>
            Amazon Web Services (AWS) Fráncfort (eu-central-1)
          </Strong>
          . Utilizamos Amazon RDS PostgreSQL como servicio de base de
          datos.
        </p>

        <SubHeading>4.2 Período de conservación</SubHeading>
        <List
          items={[
            <>
              <Strong>Cuentas activas</Strong>: tus datos se conservan
              mientras tu cuenta permanezca activa
            </>,
            <>
              <Strong>Cuentas inactivas</Strong>: las cuentas sin inicio
              de sesión durante 2 años se eliminan automáticamente
            </>,
            <>
              <Strong>Cuentas eliminadas</Strong>: cuando eliminas tu
              cuenta, tus datos personales se eliminan de forma
              permanente en un plazo de 30 días (incluidas las copias
              de seguridad)
            </>,
            <>
              <Strong>Estadísticas anónimas</Strong>: pueden conservarse
              estadísticas agregadas anónimas tras la eliminación (no
              contienen información personal)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Tus derechos">
        <p>
          Conforme al RGPD (Europa) y a la KVKK (Turquía), tienes los
          siguientes derechos:
        </p>
        <List
          items={[
            <>
              <Strong>Derecho de acceso</Strong>: conocer qué datos
              procesamos sobre ti
            </>,
            <>
              <Strong>Derecho de rectificación</Strong>: solicitar la
              corrección de datos inexactos o incompletos
            </>,
            <>
              <Strong>
                Derecho de supresión (&quot;derecho al olvido&quot;)
              </Strong>
              : solicitar la eliminación de tus datos
            </>,
            <>
              <Strong>Derecho de limitación del tratamiento</Strong>:
              limitar el modo en que se procesan tus datos
            </>,
            <>
              <Strong>Derecho a la portabilidad de los datos</Strong>:
              recibir tus datos en un formato legible por máquina
            </>,
            <>
              <Strong>Derecho de oposición</Strong>: oponerte al
              tratamiento de los datos
            </>,
            <>
              <Strong>Derecho a retirar el consentimiento</Strong>{" "}
              (seguimiento publicitario): puedes revocar el permiso ATT
              en iOS desde{" "}
              <Strong>
                Ajustes → Privacidad y seguridad → Seguimiento
              </Strong>
              , o restablecer/eliminar tu identificador publicitario en
              Android en cualquier momento
            </>,
          ]}
        />

        <SubHeading>Cómo eliminar tu cuenta</SubHeading>
        <p>Puedes eliminar tu cuenta de tres maneras:</p>
        <OrderedList
          items={[
            <>
              <Strong>Desde la App</Strong>: página de Perfil → Ajustes
              de la cuenta → Eliminar cuenta
            </>,
            <>
              <Strong>Desde la web</Strong>:{" "}
              <Anchor href="/es/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Por correo electrónico</Strong>: envía una
              solicitud a la dirección de contacto que figura más abajo
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Privacidad de los menores">
        <p>
          ScoreHunter{" "}
          <Strong>
            no está dirigido a usuarios menores de 13 años
          </Strong>
          . No recopilamos a sabiendas datos personales de menores de
          13 años. Si tenemos conocimiento de haber recopilado datos
          personales de un menor de 13 años, los eliminaremos lo antes
          posible.
        </p>
        <p>
          Para usuarios de entre 13 y 18 años, recomendamos revisar
          esta Política de privacidad junto con un padre, madre o
          tutor. La publicidad mostrada en la App está configurada con{" "}
          <Strong>
            ajustes no personalizados / aptos para toda la familia
          </Strong>{" "}
          para los usuarios que parezcan ser menores según la fecha de
          nacimiento proporcionada.
        </p>
        <p>
          Padres, madres o tutores que crean que su hijo está usando
          la App pueden ponerse en contacto con nosotros.
        </p>
      </Section>

      <Divider />

      <Section title="7. Seguridad de los datos">
        <p>
          Aplicamos medidas de seguridad estándar del sector para
          proteger tus datos:
        </p>
        <List
          items={[
            <>
              <Strong>Cifrado HTTPS</Strong>: todo el tráfico de red se
              cifra con SSL/TLS
            </>,
            <>
              <Strong>Autenticación sin contraseña</Strong>: no
              almacenamos contraseñas; todos los inicios de sesión se
              gestionan a través de Apple y Google
            </>,
            <>
              <Strong>Gestión de sesiones basada en JWT</Strong>: las
              sesiones se gestionan con tokens seguros y temporales
            </>,
            <>
              <Strong>Limitación de tasa</Strong>: los endpoints de
              autenticación y sensibles se limitan por IP para evitar
              ataques de fuerza bruta y abusos
            </>,
            <>
              <Strong>Control de acceso</Strong>: el acceso a la base
              de datos está limitado a cuentas de sistema autorizadas
            </>,
            <>
              <Strong>Actualizaciones de seguridad regulares</Strong>:
              nuestros sistemas se mantienen actualizados
            </>,
          ]}
        />
        <p>
          No obstante, ten en cuenta que ningún método de transmisión a
          través de Internet es 100 % seguro.
        </p>
      </Section>

      <Divider />

      <Section title="8. Publicidad y seguimiento">
        <SubHeading>8.1 Publicidad en la App</SubHeading>
        <p>
          ScoreHunter se financia en parte con publicidad. La App
          muestra anuncios a través de <Strong>Google AdMob</Strong> y
          de redes adicionales mediante mediation (AppLovin,
          Liftoff/Vungle, IronSource, Unity Ads, Meta Audience Network,
          InMobi). Consulta la sección 3.4 para la lista completa.
        </p>
        <p>
          Los anuncios pueden incluir formatos de banner, intersticial
          y con recompensa. Los miembros Pro pueden disfrutar de una
          experiencia con menos anuncios o sin anuncios según el nivel
          de suscripción.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          En iOS 14.5 y posteriores, Apple exige que solicitemos tu
          permiso antes de hacerte seguimiento entre apps y sitios web.
          La primera vez que abras la App verás un aviso de{" "}
          <Strong>App Tracking Transparency</Strong>:
        </p>
        <List
          items={[
            <>
              Si seleccionas <Strong>&quot;Permitir&quot;</Strong>, tu
              IDFA puede compartirse con nuestros socios publicitarios
              para anuncios personalizados, atribución y limitación de
              frecuencia.
            </>,
            <>
              Si seleccionas{" "}
              <Strong>
                &quot;Pedirle a la app que no me siga&quot;
              </Strong>
              , no se recopila el IDFA. Utilizamos el framework{" "}
              <Strong>SKAdNetwork</Strong> de Apple, que preserva la
              privacidad, para la atribución, y los anuncios mostrados
              serán no personalizados.
            </>,
          ]}
        />
        <p>
          Puedes cambiar tu decisión en cualquier momento en{" "}
          <Strong>
            Ajustes → Privacidad y seguridad → Seguimiento
          </Strong>
          .
        </p>

        <SubHeading>8.3 Identificador publicitario de Android</SubHeading>
        <p>
          En Android, nuestros socios publicitarios pueden utilizar tu
          identificador de publicidad de Google (GAID). Puedes{" "}
          <Strong>restablecer</Strong> o <Strong>eliminar</Strong> tu
          identificador publicitario en cualquier momento desde{" "}
          <Strong>Ajustes → Google → Anuncios</Strong>. Cuando se
          elimina, los anuncios serán no personalizados.
        </p>

        <SubHeading>8.4 Cookies</SubHeading>
        <p>
          La aplicación móvil ScoreHunter{" "}
          <Strong>no utiliza cookies de navegador</Strong>. En el
          entorno móvil, el seguimiento se rige por los mecanismos de
          la plataforma descritos arriba, no por cookies.
        </p>
      </Section>

      <Divider />

      <Section title="9. Transferencias internacionales de datos">
        <p>
          Tus datos pueden procesarse fuera de tu país de origen (AWS
          Fráncfort — Unión Europea, así como en los centros de datos
          de nuestros socios publicitarios indicados en la sección 3.4,
          que pueden estar fuera de la UE). Estas transferencias
          cumplen las normas de seguridad exigidas por el RGPD y la
          KVKK.
        </p>
      </Section>

      <Divider />

      <Section title="10. Cambios en esta Política">
        <p>
          Podemos actualizar esta Política de privacidad de vez en
          cuando. Los cambios entran en vigor una vez publicados en
          esta página, y la fecha &quot;Última actualización&quot; en
          la parte superior se actualizará. Los cambios significativos
          se anunciarán mediante notificación en la App.
        </p>
      </Section>

      <Divider />

      <Section title="11. Contenido de terceros y marcas">
        <p>
          ScoreHunter muestra datos de partidos de fútbol, nombres de
          equipos, nombres de ligas, nombres de jugadores y elementos
          visuales (como logotipos de equipos y ligas) procedentes de
          nuestro proveedor de datos API-Football. Estos nombres,
          logotipos y marcas son propiedad de sus respectivos
          titulares — incluidos clubes, ligas, federaciones y otros
          titulares de derechos.
        </p>
        <p>
          ScoreHunter{" "}
          <Strong>
            no está afiliado, respaldado, patrocinado ni oficialmente
            relacionado con ninguna liga, federación, club, organización
            o competición que aparezca en la App
          </Strong>
          . Todos los nombres, logotipos y marcas de terceros se
          utilizan únicamente con fines de identificación y descripción
          (uso nominativo justo), para ayudar a los usuarios a
          reconocer los partidos y equipos que desean seguir.
        </p>
        <p>
          Si eres titular de derechos y consideras que tu marca o
          material protegido por derechos de autor se está utilizando
          de forma incorrecta en la App, ponte en contacto con
          nosotros en{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Revisaremos la solicitud y responderemos con prontitud,
          retirando o reemplazando el contenido cuando proceda.
        </p>
      </Section>

      <Divider />

      <Section title="12. Contacto">
        <p>
          Para cualquier consulta sobre esta Política de privacidad o
          solicitudes relacionadas con el tratamiento de datos:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>Correo electrónico</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Desarrollador</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Sitio web</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Las solicitudes en virtud del RGPD o la KVKK pueden enviarse
          a la dirección de correo electrónico anterior o por correo
          postal. Responderemos en un plazo de{" "}
          <Strong>30 días</Strong>.
        </p>
      </Section>
    </>
  );
}
