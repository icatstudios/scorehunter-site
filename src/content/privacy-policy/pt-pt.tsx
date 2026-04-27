import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentPtPt() {
  return (
    <>
      <p>
        Na iCat Studios (&quot;nós&quot;, &quot;nosso&quot;)
        respeitamos a privacidade dos utilizadores (&quot;tu&quot;,
        &quot;teu&quot;) da aplicação móvel ScoreHunter
        (&quot;a Aplicação&quot;). A presente Política de Privacidade
        explica que dados pessoais recolhemos, como os utilizamos,
        com quem os partilhamos e quais os teus direitos ao utilizares
        a nossa Aplicação.
      </p>
      <p>
        Ao utilizar a Aplicação, aceitas a presente Política de
        Privacidade.
      </p>

      <Divider />

      <Section title="1. Dados que recolhemos">
        <SubHeading>1.1 Informações da conta</SubHeading>
        <p>
          Quando utilizas &quot;Iniciar sessão com a Apple&quot; ou
          &quot;Iniciar sessão com a Google&quot;, recebemos as
          seguintes informações da Apple ou da Google:
        </p>
        <List
          items={[
            <>
              <Strong>Endereço de e-mail</Strong> (a Apple fornece um
              e-mail de retransmissão se selecionares &quot;Ocultar o
              meu e-mail&quot;)
            </>,
            <>
              <Strong>Nome próprio e apelido</Strong> (a Apple
              disponibiliza apenas no primeiro início de sessão; a
              Google a cada início de sessão)
            </>,
            <>
              <Strong>Provider User ID</Strong> — um identificador
              único utilizado para reconhecer a tua conta
            </>,
          ]}
        />

        <SubHeading>1.2 Informações do perfil</SubHeading>
        <p>Informações que fornece diretamente na Aplicação:</p>
        <List
          items={[
            <>
              <Strong>Nome de utilizador</Strong> (nome a apresentar —
              visível nos rankings)
            </>,
            <>
              <Strong>País</Strong>
            </>,
            <>
              <Strong>Equipa de futebol favorita</Strong>
            </>,
            <>
              <Strong>Data de nascimento</Strong>
            </>,
            <>
              <Strong>Género</Strong> (opcional — opção &quot;prefiro
              não dizer&quot; disponível)
            </>,
            <>
              <Strong>Estado da subscrição Pro</Strong> — se tens uma
              subscrição Pro ativa e a respetiva data de validade
            </>,
          ]}
        />

        <SubHeading>1.3 Dados de utilização</SubHeading>
        <p>Dados gerados durante a utilização da Aplicação:</p>
        <List
          items={[
            <>
              <Strong>Listas de palpites</Strong> (jogos selecionados e
              palpites efetuados para Score Hunt e mini-jogos)
            </>,
            <>
              <Strong>Ligas a que aderes</Strong>
            </>,
            <>
              <Strong>Troféus e conquistas obtidos</Strong>
            </>,
            <>
              <Strong>Pontuações dos rankings semanais e da
              época</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Informações do dispositivo e da Aplicação</SubHeading>
        <List
          items={[
            <>
              <Strong>ID do dispositivo</Strong> (para a gestão anónima
              de sessões)
            </>,
            <>
              <Strong>Sistema operativo</Strong> (versão iOS/Android)
            </>,
            <>
              <Strong>Versão e plataforma da Aplicação</Strong>{" "}
              (código de versão, nome da versão e se estás em iOS ou
              Android) — utilizado para prestar suporte específico
              para a versão e identificar problemas de compatibilidade
            </>,
            <>
              <Strong>Token de notificações push</Strong> — um token
              único emitido pelo Apple Push Notification service
              (APNs) ou pelo Firebase Cloud Messaging (FCM) para que
              possamos enviar lembretes de jogos, notificações de
              prémios e avisos importantes. Podes desativar as
              notificações push em qualquer momento nas definições do
              teu dispositivo.
            </>,
          ]}
        />

        <SubHeading>1.5 Identificador publicitário</SubHeading>
        <p>
          A Aplicação pode recolher o teu{" "}
          <Strong>Identificador publicitário</Strong> (IDFA no iOS,
          GAID/Identificador de publicidade no Android){" "}
          <Strong>apenas com o teu consentimento explícito</Strong>:
        </p>
        <List
          items={[
            <>
              No <Strong>iOS</Strong>, ao abrir a Aplicação pela
              primeira vez será apresentado um aviso de{" "}
              <Strong>App Tracking Transparency (ATT)</Strong>. Se
              escolheres &quot;Pedir à app para não me localizar&quot;,
              o IDFA não é recolhido e os nossos parceiros de
              publicidade recebem apenas informações que preservam a
              privacidade através do SKAdNetwork da Apple.
            </>,
            <>
              No <Strong>Android</Strong>, o GAID é recolhido a menos
              que optes por não o fazer em{" "}
              <Strong>
                Definições → Google → Anúncios → Eliminar ID de
                publicidade
              </Strong>
              .
            </>,
            <>
              Quando recolhido, o Identificador publicitário é
              partilhado com os nossos parceiros de publicidade
              listados na secção 3.4 para atribuição de anúncios e
              limitação de frequência.
            </>,
          ]}
        />

        <SubHeading>1.6 Dados recolhidos automaticamente</SubHeading>
        <List
          items={[
            <>
              <Strong>Endereço IP</Strong> — utilizado para fins de
              segurança, incluindo limitação de taxa em endpoints de
              autenticação (por ex. até 15 tentativas de início de
              sessão por minuto por IP) e prevenção de abusos. Não
              utilizamos endereços IP para criar perfis publicitários.
            </>,
            <>
              <Strong>Relatórios de erros e falhas</Strong> —
              utilizados para monitorizar a estabilidade da Aplicação.
              Os relatórios são filtrados para excluir informações
              pessoais identificáveis.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Como utilizamos os teus dados">
        <p>Utilizamos os dados recolhidos para os seguintes fins:</p>
        <List
          items={[
            <>
              <Strong>Criação e gestão de conta</Strong>: para te
              permitir iniciar sessão e utilizar a Aplicação
            </>,
            <>
              <Strong>Experiência de jogo</Strong>: para guardar as
              tuas listas de palpites, calcular as pontuações e
              elaborar os rankings
            </>,
            <>
              <Strong>Personalização</Strong>: para mostrar a tua
              equipa favorita e o teu país nos rankings
            </>,
            <>
              <Strong>Gestão da subscrição Pro</Strong>: para
              verificar o estado da subscrição e disponibilizar as
              funcionalidades Pro
            </>,
            <>
              <Strong>Comunicação</Strong>: para enviar atualizações
              importantes, anúncios, notificações de prémios e push
              notifications relativas à Aplicação
            </>,
            <>
              <Strong>Entrega de prémios</Strong>: para enviar prémios
              físicos ou digitais aos vencedores de concursos (requer
              nome e e-mail)
            </>,
            <>
              <Strong>Segurança da conta</Strong>: para prevenir
              contas fraudulentas, verificar a identidade do
              utilizador e limitar atividades suspeitas
            </>,
            <>
              <Strong>Publicidade</Strong>: para mostrar anúncios
              dentro da Aplicação e medir o seu desempenho — ver
              secção 8 para detalhes
            </>,
            <>
              <Strong>Análise e melhoria</Strong>: para analisar
              estatísticas de utilização de forma anónima e melhorar
              a Aplicação
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Com quem partilhamos os teus dados">
        <p>
          O ScoreHunter{" "}
          <Strong>
            não vende nem aluga os teus dados pessoais a terceiros
          </Strong>
          . Apenas partilhamos dados com os fornecedores de serviços
          e parceiros de publicidade fidedignos listados abaixo, e
          unicamente na medida do necessário para operar a Aplicação.
        </p>

        <SubHeading>3.1 Fornecedores de serviços</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — alojamento
              de servidores e bases de dados (Frankfurt, Alemanha)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — serviço de terceiros que disponibiliza dados de
              jogos, informações de equipas e ligas e elementos
              visuais associados (logótipos e imagens). Não são
              partilhados quaisquer dados pessoais com a API-Football.
              O ScoreHunter não detém os direitos sobre os logótipos
              ou marcas fornecidos através deste serviço; ver
              secção 11 para mais detalhes.
            </>,
            <>
              <Strong>Apple</Strong> — autenticação Apple Sign-In
            </>,
            <>
              <Strong>Google</Strong> — autenticação Google Sign-In e
              Firebase Cloud Messaging (notificações push em Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — processa as compras e
              renovações da subscrição Pro em iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — processa as
              compras e renovações da subscrição Pro em Android
            </>,
            <>
              <Strong>Sentry</Strong> — monitorização de erros e
              exceções do back-end. A filtragem de informações
              pessoais identificáveis está ativada (não são enviados
              e-mails, nomes ou conteúdo do utilizador para o Sentry).
            </>,
          ]}
        />
        <p>
          Estes fornecedores apenas tratam dados em nosso nome e
          mediante as nossas instruções.
        </p>

        <SubHeading>3.2 Obrigações legais</SubHeading>
        <p>
          Os teus dados podem ser partilhados com autoridades em
          resposta a uma decisão judicial, investigação legal ou
          obrigação legal.
        </p>

        <SubHeading>
          3.3 Informações visíveis para outros utilizadores
        </SubHeading>
        <p>
          As seguintes informações são{" "}
          <Strong>visíveis para outros utilizadores</Strong> nos
          rankings e nas páginas de perfil:
        </p>
        <List
          items={[
            "O teu nome de utilizador",
            "A tua bandeira de país",
            "A tua equipa favorita",
            "Os troféus que conquistaste",
            "As tuas pontuações e estatísticas de palpites",
            "Um distintivo de subscrição Pro caso tenhas uma subscrição ativa",
          ]}
        />
        <p>
          As seguintes informações{" "}
          <Strong>nunca são apresentadas na Aplicação</Strong>:
        </p>
        <List
          items={[
            "O teu endereço de e-mail",
            "O teu nome próprio e apelido reais",
            "A tua data de nascimento",
            "O teu género",
            "As informações do teu dispositivo",
            "O teu identificador publicitário",
            "A data de validade da tua subscrição",
          ]}
        />

        <SubHeading>3.4 Parceiros de publicidade</SubHeading>
        <p>
          A Aplicação apresenta anúncios através de várias redes
          publicitárias (por vezes designadas <em>mediation</em>).
          Quando consentes a localização, o teu Identificador
          publicitário e dados técnicos limitados podem ser
          partilhados com os parceiros indicados abaixo para entrega
          de anúncios, atribuição e limitação de frequência. Cada
          parceiro tem a sua própria política de privacidade:
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

      <Section title="4. Onde e durante quanto tempo guardamos os teus dados">
        <SubHeading>4.1 Local de armazenamento</SubHeading>
        <p>
          Todos os dados dos utilizadores são armazenados nos data
          centers da{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>
          . Como serviço de base de dados, utilizamos o Amazon RDS
          PostgreSQL.
        </p>

        <SubHeading>4.2 Período de conservação</SubHeading>
        <List
          items={[
            <>
              <Strong>Contas ativas</Strong>: os teus dados são
              conservados enquanto a tua conta permanecer ativa
            </>,
            <>
              <Strong>Contas inativas</Strong>: as contas sem início
              de sessão durante 2 anos são eliminadas automaticamente
            </>,
            <>
              <Strong>Contas eliminadas</Strong>: ao eliminares a tua
              conta, os teus dados pessoais são apagados de forma
              permanente em 30 dias (incluindo cópias de segurança)
            </>,
            <>
              <Strong>Estatísticas anónimas</Strong>: podem ser
              mantidas estatísticas agregadas anónimas após a
              eliminação (não contêm informações pessoais)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Os teus direitos">
        <p>
          Ao abrigo do RGPD (Europa) e da KVKK (Turquia), tens os
          seguintes direitos:
        </p>
        <List
          items={[
            <>
              <Strong>Direito de acesso</Strong>: saber que dados
              tratamos sobre ti
            </>,
            <>
              <Strong>Direito de retificação</Strong>: solicitar a
              correção de dados imprecisos ou incompletos
            </>,
            <>
              <Strong>
                Direito ao apagamento (&quot;direito a ser
                esquecido&quot;)
              </Strong>
              : solicitar a eliminação dos teus dados
            </>,
            <>
              <Strong>Direito à limitação do tratamento</Strong>:
              limitar a forma como os teus dados são tratados
            </>,
            <>
              <Strong>Direito à portabilidade</Strong>: receber os
              teus dados num formato legível por máquina
            </>,
            <>
              <Strong>Direito de oposição</Strong>: opor-te ao
              tratamento dos dados
            </>,
            <>
              <Strong>Direito de retirar o consentimento</Strong>{" "}
              (rastreio publicitário): podes revogar a autorização ATT
              em iOS através de{" "}
              <Strong>
                Definições → Privacidade e segurança → Localização
              </Strong>
              , ou repor/eliminar o teu identificador publicitário em
              Android em qualquer momento
            </>,
          ]}
        />

        <SubHeading>Como eliminar a tua conta</SubHeading>
        <p>Podes eliminar a tua conta de três formas:</p>
        <OrderedList
          items={[
            <>
              <Strong>Na Aplicação</Strong>: página de Perfil →
              Definições da conta → Eliminar conta
            </>,
            <>
              <Strong>Pela web</Strong>:{" "}
              <Anchor href="/pt-pt/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Por e-mail</Strong>: envia um pedido para o
              endereço de contacto abaixo
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Privacidade dos menores">
        <p>
          O ScoreHunter{" "}
          <Strong>
            não se destina a utilizadores com menos de 13 anos
          </Strong>
          . Não recolhemos intencionalmente dados pessoais de
          crianças com menos de 13 anos. Se tomarmos conhecimento de
          que recolhemos dados pessoais de uma criança com menos de
          13 anos, eliminaremos esses dados o mais rapidamente
          possível.
        </p>
        <p>
          Para utilizadores entre os 13 e os 18 anos, recomendamos
          que esta Política de Privacidade seja consultada em conjunto
          com um pai, mãe ou tutor. A publicidade apresentada na
          Aplicação é configurada com{" "}
          <Strong>
            definições não personalizadas / family-safe
          </Strong>{" "}
          para utilizadores que aparentem ser menores com base na
          data de nascimento fornecida.
        </p>
        <p>
          Pais ou tutores que considerem que o seu educando está a
          utilizar a Aplicação podem entrar em contacto connosco.
        </p>
      </Section>

      <Divider />

      <Section title="7. Segurança dos dados">
        <p>
          Adotamos medidas de segurança alinhadas com os padrões da
          indústria para proteger os teus dados:
        </p>
        <List
          items={[
            <>
              <Strong>Encriptação HTTPS</Strong>: todo o tráfego de
              rede é encriptado via SSL/TLS
            </>,
            <>
              <Strong>Autenticação sem palavra-passe</Strong>: não
              guardamos palavras-passe; todos os inícios de sessão
              são feitos via Apple e Google
            </>,
            <>
              <Strong>Gestão de sessão baseada em JWT</Strong>: as
              sessões são geridas com tokens seguros e temporários
            </>,
            <>
              <Strong>Limitação de taxa</Strong>: os endpoints de
              autenticação e sensíveis estão limitados por IP para
              prevenir ataques de força bruta e abusos
            </>,
            <>
              <Strong>Controlo de acessos</Strong>: o acesso à base
              de dados está restrito a contas de sistema autorizadas
            </>,
            <>
              <Strong>Atualizações de segurança regulares</Strong>:
              os nossos sistemas são mantidos atualizados
            </>,
          ]}
        />
        <p>
          No entanto, deves ter em conta que nenhum método de
          transmissão pela Internet é 100% seguro.
        </p>
      </Section>

      <Divider />

      <Section title="8. Publicidade e localização">
        <SubHeading>8.1 Publicidade na Aplicação</SubHeading>
        <p>
          O ScoreHunter é parcialmente suportado por publicidade. A
          Aplicação apresenta anúncios através do{" "}
          <Strong>Google AdMob</Strong> e de redes adicionais por
          mediation (AppLovin, Liftoff/Vungle, IronSource, Unity Ads,
          Meta Audience Network, InMobi). Consulta a secção 3.4 para
          a lista completa de parceiros.
        </p>
        <p>
          Os anúncios podem assumir formatos banner, intersticial e
          com recompensa (rewarded). Os membros Pro podem ter uma
          experiência com menos publicidade ou sem publicidade,
          consoante o nível da subscrição.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          No iOS 14.5 e versões posteriores, a Apple exige que
          peçamos a tua autorização antes de te localizar entre
          aplicações e sites. Na primeira vez que abrires a Aplicação,
          será apresentado um aviso de{" "}
          <Strong>App Tracking Transparency</Strong>:
        </p>
        <List
          items={[
            <>
              Se selecionares <Strong>&quot;Permitir&quot;</Strong>,
              o teu IDFA pode ser partilhado com os nossos parceiros
              de publicidade para anúncios personalizados, atribuição
              e limitação de frequência.
            </>,
            <>
              Se selecionares{" "}
              <Strong>
                &quot;Pedir à app para não me localizar&quot;
              </Strong>
              , o IDFA não é recolhido. Para atribuição utilizamos a
              framework <Strong>SKAdNetwork</Strong> da Apple, que
              preserva a privacidade, e os anúncios apresentados
              serão não personalizados.
            </>,
          ]}
        />
        <p>
          Podes alterar a tua decisão a qualquer momento em{" "}
          <Strong>
            Definições → Privacidade e segurança → Localização
          </Strong>
          .
        </p>

        <SubHeading>8.3 ID de publicidade do Android</SubHeading>
        <p>
          No Android, o teu Google Advertising ID (GAID) pode ser
          utilizado pelos nossos parceiros de publicidade. Podes{" "}
          <Strong>repor</Strong> ou <Strong>eliminar</Strong> o teu
          identificador publicitário em qualquer momento em{" "}
          <Strong>Definições → Google → Anúncios</Strong>. Quando
          eliminado, os anúncios serão não personalizados.
        </p>

        <SubHeading>8.4 Cookies</SubHeading>
        <p>
          A aplicação móvel ScoreHunter{" "}
          <Strong>não utiliza cookies de navegador</Strong>. No
          ambiente móvel, a localização é regida pelos mecanismos da
          plataforma descritos acima, e não por cookies.
        </p>
      </Section>

      <Divider />

      <Section title="9. Transferências internacionais de dados">
        <p>
          Os teus dados podem ser tratados fora do teu país de
          residência (AWS Frankfurt — União Europeia, e os data
          centers dos parceiros de publicidade listados na secção
          3.4, que podem estar localizados fora da UE). Estas
          transferências cumprem os padrões de segurança exigidos
          pelo RGPD e pela KVKK.
        </p>
      </Section>

      <Divider />

      <Section title="10. Alterações a esta Política">
        <p>
          Podemos atualizar esta Política de Privacidade
          periodicamente. As alterações entram em vigor após a
          publicação nesta página, sendo a data &quot;Última
          atualização&quot; no topo atualizada. As alterações
          significativas serão comunicadas por meio de notificação
          na Aplicação.
        </p>
      </Section>

      <Divider />

      <Section title="11. Conteúdo de terceiros e marcas">
        <p>
          O ScoreHunter apresenta dados de jogos de futebol, nomes
          de equipas, nomes de ligas, nomes de jogadores e elementos
          visuais (como logótipos de equipas e ligas) provenientes do
          nosso fornecedor de dados API-Football. Esses nomes,
          logótipos e marcas são propriedade dos respetivos titulares
          — incluindo clubes, ligas, federações e outros titulares de
          direitos.
        </p>
        <p>
          O ScoreHunter{" "}
          <Strong>
            não é afiliado, apoiado, patrocinado nem oficialmente
            ligado a qualquer liga, federação, clube, organização ou
            competição apresentada na Aplicação
          </Strong>
          . Todos os nomes, logótipos e marcas de terceiros são
          utilizados exclusivamente para fins de identificação e
          descrição (uso nominativo justo), para ajudar os
          utilizadores a reconhecer os jogos e equipas que pretendem
          acompanhar.
        </p>
        <p>
          Se és titular de direitos e consideras que a tua marca ou
          material protegido por direitos de autor está a ser
          utilizado de forma indevida na Aplicação, contacta-nos
          através de{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Iremos analisar o pedido e responder prontamente,
          removendo ou substituindo o conteúdo sempre que adequado.
        </p>
      </Section>

      <Divider />

      <Section title="12. Contacto">
        <p>
          Para questões relacionadas com esta Política de
          Privacidade ou pedidos sobre o tratamento de dados:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-mail</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Programador</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Site</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Os pedidos ao abrigo do RGPD ou da KVKK podem ser enviados
          para o e-mail acima ou por correio. Responderemos no prazo
          de <Strong>30 dias</Strong>.
        </p>
      </Section>
    </>
  );
}
