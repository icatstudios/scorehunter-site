import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentPtBr() {
  return (
    <>
      <p>
        Na iCat Studios (&quot;nós&quot;, &quot;nosso&quot;)
        respeitamos a privacidade dos usuários (&quot;você&quot;,
        &quot;seu&quot;) do aplicativo móvel ScoreHunter
        (&quot;Aplicativo&quot;). Esta Política de Privacidade explica
        quais dados pessoais coletamos, como os utilizamos, com quem os
        compartilhamos e quais são os seus direitos ao usar o
        Aplicativo.
      </p>
      <p>
        Ao utilizar o Aplicativo, você concorda com esta Política de
        Privacidade.
      </p>

      <Divider />

      <Section title="1. Dados que coletamos">
        <SubHeading>1.1 Informações da conta</SubHeading>
        <p>
          Quando você utiliza &quot;Entrar com a Apple&quot; ou
          &quot;Entrar com o Google&quot;, recebemos as seguintes
          informações da Apple ou do Google:
        </p>
        <List
          items={[
            <>
              <Strong>Endereço de e-mail</Strong> (a Apple fornece um
              e-mail de retransmissão se você selecionar &quot;Ocultar
              meu e-mail&quot;)
            </>,
            <>
              <Strong>Nome e sobrenome</Strong> (a Apple fornece somente
              no primeiro login; o Google fornece a cada login)
            </>,
            <>
              <Strong>Provider User ID</Strong> — um identificador único
              usado para reconhecer sua conta
            </>,
          ]}
        />

        <SubHeading>1.2 Informações do perfil</SubHeading>
        <p>Informações que você fornece diretamente no Aplicativo:</p>
        <List
          items={[
            <>
              <Strong>Nome de usuário</Strong> (nome de exibição —
              visível nos rankings)
            </>,
            <>
              <Strong>País</Strong>
            </>,
            <>
              <Strong>Time de futebol favorito</Strong>
            </>,
            <>
              <Strong>Data de nascimento</Strong>
            </>,
            <>
              <Strong>Gênero</Strong> (opcional — opção &quot;prefiro
              não dizer&quot; disponível)
            </>,
            <>
              <Strong>Status da assinatura Pro</Strong> — se você possui
              uma assinatura Pro ativa e a respectiva data de
              expiração
            </>,
          ]}
        />

        <SubHeading>1.3 Dados de uso</SubHeading>
        <p>Dados gerados durante o uso do Aplicativo:</p>
        <List
          items={[
            <>
              <Strong>Listas de palpites</Strong> (jogos selecionados e
              palpites feitos para Score Hunt e mini jogos)
            </>,
            <>
              <Strong>Ligas das quais você participa</Strong>
            </>,
            <>
              <Strong>Troféus e conquistas obtidos</Strong>
            </>,
            <>
              <Strong>Pontuação semanal e da temporada</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Informações do dispositivo e do Aplicativo</SubHeading>
        <List
          items={[
            <>
              <Strong>ID do dispositivo</Strong> (para gerenciamento
              anônimo de sessões)
            </>,
            <>
              <Strong>Sistema operacional</Strong> (versão iOS/Android)
            </>,
            <>
              <Strong>Versão e plataforma do Aplicativo</Strong> (código
              da versão, nome da versão e se você está em iOS ou
              Android) — usado para oferecer suporte específico da
              versão e identificar problemas de compatibilidade
            </>,
            <>
              <Strong>Token de notificação push</Strong> — um token
              único emitido pelo Apple Push Notification service (APNs)
              ou pelo Firebase Cloud Messaging (FCM) para que possamos
              enviar lembretes de jogos, notificações de prêmios e
              avisos importantes. Você pode desativar as notificações
              push a qualquer momento nas configurações do seu
              dispositivo.
            </>,
          ]}
        />

        <SubHeading>1.5 Identificador de publicidade</SubHeading>
        <p>
          O Aplicativo pode coletar seu{" "}
          <Strong>Identificador de publicidade</Strong> (IDFA no iOS,
          GAID/Identificador de Anúncios no Android){" "}
          <Strong>somente com seu consentimento explícito</Strong>:
        </p>
        <List
          items={[
            <>
              No <Strong>iOS</Strong>, ao abrir o Aplicativo pela
              primeira vez, será exibido um aviso de{" "}
              <Strong>App Tracking Transparency (ATT)</Strong>. Se você
              escolher &quot;Solicitar que o app não rastreie&quot;, o
              IDFA não é coletado e nossos parceiros de publicidade
              recebem apenas informações que preservam a privacidade
              via SKAdNetwork da Apple.
            </>,
            <>
              No <Strong>Android</Strong>, o GAID é coletado, a menos
              que você opte por não participar em{" "}
              <Strong>
                Configurações → Google → Anúncios → Excluir ID de
                publicidade
              </Strong>
              .
            </>,
            <>
              Quando coletado, o Identificador de publicidade é
              compartilhado com nossos parceiros de publicidade
              listados na seção 3.4 para atribuição de anúncios e
              limitação de frequência.
            </>,
          ]}
        />

        <SubHeading>1.6 Dados coletados automaticamente</SubHeading>
        <List
          items={[
            <>
              <Strong>Endereço IP</Strong> — usado para fins de
              segurança, incluindo a limitação de taxa nos endpoints
              de autenticação (por exemplo, até 15 tentativas de login
              por minuto por IP) e prevenção de abusos. Não usamos
              endereços IP para criar perfis publicitários.
            </>,
            <>
              <Strong>Relatórios de erros e falhas</Strong> — usados
              para monitorar a estabilidade do Aplicativo. Os
              relatórios são filtrados para excluir informações
              pessoais identificáveis.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Como usamos seus dados">
        <p>Utilizamos os dados coletados para os seguintes fins:</p>
        <List
          items={[
            <>
              <Strong>Criação e gerenciamento de conta</Strong>: para
              permitir que você faça login e use o Aplicativo
            </>,
            <>
              <Strong>Experiência de jogo</Strong>: para salvar suas
              listas de palpites, calcular suas pontuações e montar os
              rankings
            </>,
            <>
              <Strong>Personalização</Strong>: para exibir seu time
              favorito e país nos rankings
            </>,
            <>
              <Strong>Gerenciamento da assinatura Pro</Strong>: para
              verificar seu status de assinatura e liberar os recursos
              Pro
            </>,
            <>
              <Strong>Comunicação</Strong>: para enviar atualizações
              importantes, anúncios, notificações de prêmios e push
              notifications sobre o Aplicativo
            </>,
            <>
              <Strong>Entrega de prêmios</Strong>: para enviar prêmios
              físicos ou digitais aos vencedores de promoções (requer
              nome e e-mail)
            </>,
            <>
              <Strong>Segurança da conta</Strong>: para prevenir contas
              fraudulentas, verificar a identidade do usuário e limitar
              atividades suspeitas
            </>,
            <>
              <Strong>Publicidade</Strong>: para exibir anúncios dentro
              do Aplicativo e medir o desempenho deles — veja a seção
              8 para detalhes
            </>,
            <>
              <Strong>Análise e melhoria</Strong>: para analisar
              estatísticas de uso de forma anônima e melhorar o
              Aplicativo
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Com quem compartilhamos seus dados">
        <p>
          O ScoreHunter{" "}
          <Strong>
            não vende nem aluga seus dados pessoais a terceiros
          </Strong>
          . Compartilhamos dados apenas com os prestadores de serviços
          e parceiros de publicidade confiáveis listados abaixo, e
          somente na medida necessária para operar o Aplicativo.
        </p>

        <SubHeading>3.1 Prestadores de serviços</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — hospedagem
              de servidor e banco de dados (Frankfurt, Alemanha)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — serviço de terceiros que fornece dados de jogos,
              informações de times e ligas e recursos visuais
              associados (logos e imagens). Nenhum dado pessoal é
              compartilhado com a API-Football. O ScoreHunter não
              detém os direitos sobre logos ou marcas entregues por
              meio deste serviço; veja a seção 11 para detalhes.
            </>,
            <>
              <Strong>Apple</Strong> — autenticação Apple Sign-In
            </>,
            <>
              <Strong>Google</Strong> — autenticação Google Sign-In e
              Firebase Cloud Messaging (notificações push no Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — processa as compras e
              renovações da assinatura Pro no iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — processa as
              compras e renovações da assinatura Pro no Android
            </>,
            <>
              <Strong>Sentry</Strong> — monitoramento de erros e
              exceções do back-end. A filtragem de informações pessoais
              identificáveis está ativada (nenhum e-mail, nome ou
              conteúdo do usuário é enviado ao Sentry).
            </>,
          ]}
        />
        <p>
          Esses prestadores de serviços processam os dados apenas em
          nosso nome e seguindo nossas instruções.
        </p>

        <SubHeading>3.2 Exigências legais</SubHeading>
        <p>
          Seus dados podem ser compartilhados com autoridades em
          resposta a uma ordem judicial, investigação legal ou
          obrigação legal.
        </p>

        <SubHeading>
          3.3 Informações visíveis para outros usuários
        </SubHeading>
        <p>
          As seguintes informações são{" "}
          <Strong>visíveis para outros usuários</Strong> nos rankings e
          páginas de perfil:
        </p>
        <List
          items={[
            "Seu nome de usuário",
            "Sua bandeira de país",
            "Seu time favorito",
            "Os troféus que você conquistou",
            "Suas pontuações e estatísticas de palpites",
            "Um selo de assinatura Pro caso você tenha uma assinatura ativa",
          ]}
        />
        <p>
          As seguintes informações{" "}
          <Strong>nunca são exibidas no Aplicativo</Strong>:
        </p>
        <List
          items={[
            "Seu endereço de e-mail",
            "Seu nome e sobrenome reais",
            "Sua data de nascimento",
            "Seu gênero",
            "As informações do seu dispositivo",
            "Seu identificador de publicidade",
            "A data de expiração da sua assinatura",
          ]}
        />

        <SubHeading>3.4 Parceiros de publicidade</SubHeading>
        <p>
          O Aplicativo exibe anúncios por meio de várias redes de
          publicidade (às vezes chamadas de <em>mediation</em>). Quando
          você consente com o rastreamento, seu Identificador de
          publicidade e dados técnicos limitados podem ser
          compartilhados com os parceiros abaixo para entrega de
          anúncios, atribuição e limitação de frequência. Cada parceiro
          possui sua própria política de privacidade:
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

      <Section title="4. Onde e por quanto tempo armazenamos seus dados">
        <SubHeading>4.1 Local de armazenamento</SubHeading>
        <p>
          Todos os dados de usuários são armazenados nos data centers
          da{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>
          . Como serviço de banco de dados, utilizamos o Amazon RDS
          PostgreSQL.
        </p>

        <SubHeading>4.2 Período de retenção</SubHeading>
        <List
          items={[
            <>
              <Strong>Contas ativas</Strong>: seus dados são mantidos
              enquanto sua conta permanecer ativa
            </>,
            <>
              <Strong>Contas inativas</Strong>: contas sem login por 2
              anos são excluídas automaticamente
            </>,
            <>
              <Strong>Contas excluídas</Strong>: ao excluir sua conta,
              seus dados pessoais são apagados permanentemente em até
              30 dias (incluindo backups)
            </>,
            <>
              <Strong>Estatísticas anônimas</Strong>: estatísticas
              agregadas anônimas podem ser mantidas após a exclusão
              (não contêm informações pessoais)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Seus direitos">
        <p>
          De acordo com a LGPD (Brasil), o GDPR (Europa) e a KVKK
          (Turquia), você possui os seguintes direitos:
        </p>
        <List
          items={[
            <>
              <Strong>Direito de acesso</Strong>: saber quais dados
              processamos sobre você
            </>,
            <>
              <Strong>Direito de retificação</Strong>: solicitar a
              correção de dados imprecisos ou incompletos
            </>,
            <>
              <Strong>
                Direito à exclusão (&quot;direito ao esquecimento&quot;)
              </Strong>
              : solicitar a exclusão dos seus dados
            </>,
            <>
              <Strong>Direito de limitação do tratamento</Strong>:
              limitar a forma como seus dados são tratados
            </>,
            <>
              <Strong>Direito à portabilidade</Strong>: receber seus
              dados em um formato legível por máquina
            </>,
            <>
              <Strong>Direito de oposição</Strong>: opor-se ao
              tratamento dos dados
            </>,
            <>
              <Strong>Direito de retirar o consentimento</Strong>{" "}
              (rastreamento publicitário): você pode revogar a
              permissão ATT no iOS em{" "}
              <Strong>
                Ajustes → Privacidade e segurança → Rastreamento
              </Strong>
              , ou redefinir/excluir seu identificador de publicidade
              no Android a qualquer momento
            </>,
          ]}
        />

        <SubHeading>Como excluir sua conta</SubHeading>
        <p>Você pode excluir sua conta de três formas:</p>
        <OrderedList
          items={[
            <>
              <Strong>No Aplicativo</Strong>: Página de Perfil →
              Configurações da Conta → Excluir Conta
            </>,
            <>
              <Strong>Pela web</Strong>:{" "}
              <Anchor href="/pt-br/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Por e-mail</Strong>: envie uma solicitação para o
              endereço de contato abaixo
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Privacidade de crianças">
        <p>
          O ScoreHunter{" "}
          <Strong>
            não é destinado a usuários menores de 13 anos
          </Strong>
          . Não coletamos intencionalmente dados pessoais de crianças
          menores de 13 anos. Caso tomemos conhecimento de que
          coletamos dados pessoais de uma criança menor de 13 anos,
          esses dados serão excluídos o mais rápido possível.
        </p>
        <p>
          Para usuários entre 13 e 18 anos, recomendamos que esta
          Política de Privacidade seja revisada com um responsável. A
          publicidade exibida no Aplicativo é configurada com{" "}
          <Strong>
            ajustes não personalizados / family-safe
          </Strong>{" "}
          para usuários que aparentem ser menores de idade com base na
          data de nascimento informada.
        </p>
        <p>
          Pais ou responsáveis que acreditem que seu filho está usando
          o Aplicativo podem entrar em contato conosco.
        </p>
      </Section>

      <Divider />

      <Section title="7. Segurança dos dados">
        <p>
          Adotamos medidas de segurança padrão do setor para proteger
          seus dados:
        </p>
        <List
          items={[
            <>
              <Strong>Criptografia HTTPS</Strong>: todo o tráfego de
              rede é criptografado via SSL/TLS
            </>,
            <>
              <Strong>Autenticação sem senha</Strong>: não armazenamos
              senhas; todos os logins são feitos via Apple e Google
            </>,
            <>
              <Strong>Gerenciamento de sessão baseado em JWT</Strong>:
              as sessões são gerenciadas com tokens seguros e
              temporários
            </>,
            <>
              <Strong>Limitação de taxa</Strong>: os endpoints de
              autenticação e sensíveis têm limite de taxa por IP para
              prevenir ataques de força bruta e abusos
            </>,
            <>
              <Strong>Controle de acesso</Strong>: o acesso ao banco
              de dados é restrito a contas de sistema autorizadas
            </>,
            <>
              <Strong>Atualizações de segurança regulares</Strong>:
              nossos sistemas são mantidos atualizados
            </>,
          ]}
        />
        <p>
          Lembre-se, no entanto, de que nenhum método de transmissão
          pela internet é 100% seguro.
        </p>
      </Section>

      <Divider />

      <Section title="8. Publicidade e rastreamento">
        <SubHeading>8.1 Publicidade no Aplicativo</SubHeading>
        <p>
          O ScoreHunter é mantido em parte por publicidade. O
          Aplicativo exibe anúncios via{" "}
          <Strong>Google AdMob</Strong> e redes adicionais por
          mediation (AppLovin, Liftoff/Vungle, IronSource, Unity Ads,
          Meta Audience Network, InMobi). Veja a seção 3.4 para a
          lista completa.
        </p>
        <p>
          Os anúncios podem ser nos formatos banner, intersticial e
          recompensado (rewarded). Membros Pro podem ter uma
          experiência com menos anúncios ou sem anúncios, dependendo
          do plano de assinatura.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          No iOS 14.5 e versões mais recentes, a Apple exige que
          peçamos sua permissão antes de rastrear você entre apps e
          sites. Na primeira vez que você abrir o Aplicativo, será
          exibida uma solicitação de{" "}
          <Strong>App Tracking Transparency</Strong>:
        </p>
        <List
          items={[
            <>
              Se você selecionar <Strong>&quot;Permitir&quot;</Strong>,
              seu IDFA pode ser compartilhado com nossos parceiros de
              publicidade para anúncios personalizados, atribuição e
              limitação de frequência.
            </>,
            <>
              Se você selecionar{" "}
              <Strong>
                &quot;Solicitar que o app não rastreie&quot;
              </Strong>
              , o IDFA não é coletado. Para atribuição, usamos o
              framework <Strong>SKAdNetwork</Strong> da Apple, que
              preserva a privacidade, e os anúncios exibidos serão
              não personalizados.
            </>,
          ]}
        />
        <p>
          Você pode alterar sua decisão a qualquer momento em{" "}
          <Strong>
            Ajustes → Privacidade e segurança → Rastreamento
          </Strong>
          .
        </p>

        <SubHeading>8.3 ID de publicidade do Android</SubHeading>
        <p>
          No Android, seu Google Advertising ID (GAID) pode ser usado
          pelos nossos parceiros de publicidade. Você pode{" "}
          <Strong>redefinir</Strong> ou <Strong>excluir</Strong> seu
          identificador de publicidade a qualquer momento em{" "}
          <Strong>Configurações → Google → Anúncios</Strong>. Quando
          excluído, os anúncios serão não personalizados.
        </p>

        <SubHeading>8.4 Cookies</SubHeading>
        <p>
          O aplicativo móvel ScoreHunter{" "}
          <Strong>não utiliza cookies de navegador</Strong>. No
          ambiente mobile, o rastreamento é regido pelos mecanismos da
          plataforma descritos acima, não por cookies.
        </p>
      </Section>

      <Divider />

      <Section title="9. Transferências internacionais de dados">
        <p>
          Seus dados podem ser tratados fora do seu país de residência
          (AWS Frankfurt — União Europeia, e os data centers dos
          parceiros de publicidade listados na seção 3.4, que podem
          estar localizados fora da UE). Essas transferências cumprem
          os padrões de segurança exigidos pela LGPD, GDPR e KVKK.
        </p>
      </Section>

      <Divider />

      <Section title="10. Alterações nesta Política">
        <p>
          Podemos atualizar esta Política de Privacidade de tempos em
          tempos. As alterações entram em vigor após a publicação
          nesta página, e a data &quot;Última atualização&quot; no
          topo será atualizada. Alterações significativas serão
          comunicadas por meio de notificação no Aplicativo.
        </p>
      </Section>

      <Divider />

      <Section title="11. Conteúdo de terceiros e marcas">
        <p>
          O ScoreHunter exibe dados de partidas de futebol, nomes de
          times, nomes de ligas, nomes de jogadores e recursos visuais
          (como logos de times e ligas) provenientes do nosso
          fornecedor de dados API-Football. Esses nomes, logos e
          marcas pertencem aos seus respectivos titulares — incluindo
          clubes, ligas, federações e outros titulares de direitos.
        </p>
        <p>
          O ScoreHunter{" "}
          <Strong>
            não é afiliado, endossado, patrocinado nem oficialmente
            ligado a qualquer liga, federação, clube, organização ou
            competição apresentada no Aplicativo
          </Strong>
          . Todos os nomes, logos e marcas de terceiros são utilizados
          exclusivamente para fins de identificação e descrição (uso
          nominativo justo), para ajudar os usuários a reconhecer as
          partidas e os times que desejam acompanhar.
        </p>
        <p>
          Se você é titular de direitos e acredita que sua marca ou
          material protegido por direitos autorais está sendo usado
          de forma indevida no Aplicativo, entre em contato pelo
          e-mail{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Avaliaremos a solicitação e responderemos prontamente,
          removendo ou substituindo o conteúdo quando apropriado.
        </p>
      </Section>

      <Divider />

      <Section title="12. Contato">
        <p>
          Para dúvidas sobre esta Política de Privacidade ou
          solicitações relacionadas ao tratamento de dados:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-mail</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Desenvolvedor</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Site</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Solicitações sob a LGPD, GDPR ou KVKK podem ser enviadas
          para o e-mail acima ou por correio. Responderemos em até{" "}
          <Strong>30 dias</Strong>.
        </p>
      </Section>
    </>
  );
}
