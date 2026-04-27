import {
  Section,
  SubHeading,
  List,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function TermsContentPtPt() {
  return (
    <>
      <p>
        Lê com atenção os presentes Termos de Utilização
        (&quot;Termos&quot;) antes de utilizar a aplicação móvel
        ScoreHunter (&quot;Aplicação&quot;, &quot;Serviço&quot;).
        Ao descarregar e utilizar a Aplicação, aceitas ficar
        vinculado a estes Termos. Se não concordares com estes
        Termos, por favor não utilizes a Aplicação.
      </p>

      <Divider />

      <Section title="1. Definições">
        <List
          items={[
            <>
              <Strong>Aplicação</Strong>: a aplicação móvel
              ScoreHunter e os sítios web relacionados
            </>,
            <>
              <Strong>Programador / Nós / Nosso</Strong>: iCat
              Studios
            </>,
            <>
              <Strong>Utilizador / Tu / Teu</Strong>: a pessoa que
              utiliza a Aplicação
            </>,
            <>
              <Strong>Serviço</Strong>: todas as funcionalidades e
              conteúdos disponibilizados pela Aplicação
            </>,
            <>
              <Strong>Conteúdo</Strong>: dados de jogos, listas de
              palpites, classificações, troféus, perfis de
              utilizador e quaisquer outros dados na Aplicação
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Natureza do Serviço — IMPORTANTE">
        <SubHeading>
          2.1 O ScoreHunter não é uma aplicação de apostas
        </SubHeading>
        <p>
          O ScoreHunter é uma{" "}
          <Strong>
            aplicação de palpites e entretenimento baseada no
            conhecimento sobre futebol
          </Strong>
          . Os pontos seguintes definem a natureza fundamental da
          Aplicação e devem ser claramente compreendidos pelos
          utilizadores:
        </p>
        <List
          items={[
            <>
              A Aplicação é um{" "}
              <Strong>jogo baseado em competência</Strong>, NÃO um
              jogo de azar
            </>,
            <>
              A Aplicação NÃO contém{" "}
              <Strong>terminologia de apostas</Strong> (cupão, odd,
              handicap, margem, jackpot)
            </>,
            <>
              Na Aplicação não são disponibilizadas{" "}
              <Strong>odds de apostas</Strong> nem{" "}
              <Strong>multiplicadores de ganhos</Strong> para
              qualquer jogo
            </>,
            <>
              Todos os jogos têm o{" "}
              <Strong>mesmo valor</Strong> para efeitos de palpite —
              nenhum jogo &quot;vale mais&quot; do que outro
            </>,
            <>
              A Aplicação permite que adeptos de futebol compitam
              utilizando o seu conhecimento e a sua intuição num
              ambiente divertido
            </>,
            <>
              O propósito principal é{" "}
              <Strong>
                entretenimento, cultura do futebol, criação de
                comunidade e partilha de conhecimento
              </Strong>
            </>,
          ]}
        />

        <SubHeading>
          2.2 Sem depósitos de dinheiro nem prémios em dinheiro
        </SubHeading>
        <List
          items={[
            <>
              <Strong>NÃO é necessário</Strong> gastar dinheiro real
              para jogar na Aplicação ou participar em concursos
            </>,
            <>
              A Aplicação <Strong>NÃO</Strong> inclui funcionalidades
              de <Strong>aposta com dinheiro real</Strong> nem de{" "}
              <Strong>jogo de azar</Strong>
            </>,
            <>
              A Aplicação{" "}
              <Strong>NÃO promete prémios em dinheiro real</Strong>{" "}
              aos vencedores
            </>,
            <>
              A Aplicação{" "}
              <Strong>
                NÃO contém elementos de jogo de azar, lotaria ou
                apostas
              </Strong>
            </>,
            <>
              Todos os utilizadores participam nos concursos em{" "}
              <Strong>condições iguais</Strong>
            </>,
            <>
              Funcionalidades pagas como a subscrição Pro{" "}
              <Strong>
                não influenciam os resultados dos concursos
              </Strong>{" "}
              — apenas oferecem funcionalidades adicionais que
              melhoram a experiência do utilizador
            </>,
          ]}
        />

        <SubHeading>2.3 Recompensas promocionais</SubHeading>
        <p>
          O Programador pode, ao seu exclusivo critério, atribuir
          ocasionalmente <Strong>prémios promocionais</Strong>{" "}
          (camisolas, bolas de futebol, vales-presente digitais,
          ofertas simbólicas, etc.) aos utilizadores com melhor
          desempenho. Aplicam-se a estes prémios as seguintes
          condições:
        </p>
        <List
          items={[
            <>
              Os prémios têm{" "}
              <Strong>natureza promocional</Strong> e visam
              incentivar o envolvimento dos utilizadores
            </>,
            <>
              Os prémios <Strong>NÃO são garantidos</Strong> — apenas
              são atribuídos no âmbito de campanhas anunciadas pelo
              Programador
            </>,
            <>
              Os prémios{" "}
              <Strong>NÃO são entregues em dinheiro</Strong> —
              são fornecidos apenas como ofertas físicas ou digitais
            </>,
            <>
              A atribuição, distribuição e entrega dos prémios é{" "}
              <Strong>
                da exclusiva responsabilidade do Programador
              </Strong>
            </>,
            <>
              <Strong>
                A Apple Inc., a Apple App Store, a Google LLC e a
                Google Play Store não têm qualquer responsabilidade
                relativamente a estes prémios
              </Strong>
            </>,
            <>
              A morada, identidade ou outras informações podem ser
              solicitadas aos vencedores pelo Programador apenas
              para efeitos de entrega do prémio
            </>,
          ]}
        />

        <SubHeading>2.4 Limite de idade</SubHeading>
        <p>
          A Aplicação destina-se a utilizadores com{" "}
          <Strong>mais de 13 anos</Strong>. Pessoas com menos de 13
          anos não podem utilizar a Aplicação. Ao utilizar a
          Aplicação, o utilizador declara ter mais de 13 anos.
        </p>
      </Section>

      <Divider />

      <Section title="3. Criação e utilização da conta">
        <SubHeading>3.1 Criar uma conta</SubHeading>
        <p>
          Para utilizar determinadas funcionalidades da Aplicação,
          tens de criar uma conta utilizando &quot;Iniciar sessão
          com a Apple&quot; ou &quot;Iniciar sessão com a
          Google&quot;. Ao criar uma conta:
        </p>
        <List
          items={[
            "Deves fornecer informações precisas e atualizadas",
            "Deves declarar corretamente a tua data de nascimento",
            "Não podes criar uma conta utilizando a identidade de outra pessoa",
            "Não podes criar uma conta com informações falsas ou enganosas",
            <>
              Cada pessoa só pode ter <Strong>uma conta</Strong>
            </>,
          ]}
        />

        <SubHeading>3.2 Segurança da conta</SubHeading>
        <p>
          És o <Strong>único responsável</Strong> por todas as
          atividades realizadas na tua conta. Para manter a
          segurança da conta:
        </p>
        <List
          items={[
            "Protege o teu Apple ID ou a tua conta Google",
            "Não permitas que outras pessoas acedam à tua conta",
            "Informa imediatamente o Programador sobre qualquer atividade suspeita",
          ]}
        />

        <SubHeading>3.3 Cessação da conta</SubHeading>
        <p>
          O Programador reserva-se o direito de{" "}
          <Strong>suspender ou cessar</Strong> a conta de um
          utilizador <Strong>sem aviso prévio</Strong> nos seguintes
          casos:
        </p>
        <List
          items={[
            "Violação dos presentes Termos",
            "Fraude, batota ou comportamento enganoso",
            "Assédio, insultos ou discurso de ódio dirigido a outros utilizadores",
            "Criação de várias contas",
            "Utilização de software automatizado, bots ou ferramentas de batota",
            "Comportamento contrário às leis aplicáveis",
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. Utilização aceitável">
        <SubHeading>4.1 Comportamentos proibidos</SubHeading>
        <p>
          Os seguintes comportamentos são <Strong>proibidos</Strong>{" "}
          ao utilizar a Aplicação:
        </p>
        <List
          items={[
            "Criar contas falsas ou fazer-se passar por outras pessoas",
            "Utilizar ferramentas automatizadas (bots, scripts) para fazer palpites",
            <>
              Utilizar{" "}
              <Strong>
                nomes de utilizador inadequados, palavrões, insultos,
                assédio ou linguagem racista, sexista ou de ódio
              </Strong>{" "}
              contra outros utilizadores
            </>,
            "Tentar contornar os mecanismos de segurança da Aplicação",
            "Efetuar engenharia inversa, descompilar ou desmontar a Aplicação",
            "Copiar, distribuir ou explorar comercialmente o conteúdo da Aplicação sem autorização",
            "Partilhar spam, publicidade ou conteúdo promocional (em nomes de ligas, nomes de utilizador, etc.)",
            "Tentar ações que sobrecarreguem os servidores ou perturbem o Serviço",
          ]}
        />

        <SubHeading>4.2 Sanções</SubHeading>
        <p>
          Caso tais comportamentos sejam detetados, o Programador
          reserva-se o direito de suspender a conta do utilizador,
          remover-lhe a presença nos rankings ou eliminar
          definitivamente a conta sem aviso prévio.
        </p>
      </Section>

      <Divider />

      <Section title="5. Direitos de propriedade intelectual">
        <SubHeading>5.1 Propriedade da Aplicação</SubHeading>
        <p>
          O nome ScoreHunter, o logótipo, os elementos visuais, o
          design, o código-fonte, os conteúdos e todos os direitos
          de propriedade intelectual{" "}
          <Strong>pertencem à iCat Studios</Strong>. Estes
          conteúdos estão protegidos por:
        </p>
        <List
          items={[
            "Direitos de autor",
            "Registo de marca",
            "Segredos comerciais",
            "Outros direitos de propriedade intelectual aplicáveis",
          ]}
        />

        <SubHeading>5.2 Conteúdo de terceiros e marcas</SubHeading>
        <p>
          A Aplicação apresenta conteúdo de terceiros, incluindo,
          mas não se limitando a, dados de jogos de futebol, nomes
          de equipas e ligas, nomes de jogadores e elementos visuais
          como logótipos de equipas e ligas. Esse conteúdo é
          fornecido através do nosso parceiro de dados API-Football
          e é propriedade dos respetivos titulares — incluindo
          clubes, ligas, federações e outros titulares de direitos.
          O ScoreHunter não reivindica a propriedade de quaisquer
          marcas, logótipos ou material protegido por direitos de
          autor de terceiros apresentados na Aplicação.
        </p>
        <p>
          O ScoreHunter{" "}
          <Strong>
            não é afiliado, apoiado, patrocinado nem oficialmente
            ligado a qualquer liga, federação, clube, competição ou
            organização referida ou apresentada na Aplicação
          </Strong>
          . Todos os nomes, logótipos e marcas de terceiros são
          utilizados apenas para fins de identificação e descrição,
          ao abrigo do princípio do uso nominativo justo.
        </p>
        <p>Aceitas que:</p>
        <List
          items={[
            <>
              <Strong>não</Strong> irás extrair, copiar,
              redistribuir nem reutilizar de outra forma o conteúdo
              de terceiros apresentado na Aplicação fora do uso
              pessoal habitual;
            </>,
            <>
              <Strong>não</Strong> irás utilizar a Aplicação para
              violar os direitos de propriedade intelectual de
              terceiros;
            </>,
            <>
              qualquer <Strong>uso comercial</Strong> de conteúdo
              de terceiros apresentado na Aplicação exige que
              obtenhas a tua própria licença ou autorização
              diretamente do titular dos direitos competente.
            </>,
          ]}
        />
        <p>
          Se és titular de direitos e pretendes reportar uma
          utilização não autorizada da tua marca ou de material
          protegido por direitos de autor na Aplicação, contacta-nos
          através de{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Iremos responder a pedidos legítimos de remoção no prazo
          de <Strong>trinta (30) dias</Strong>, removendo ou
          substituindo o conteúdo em causa quando adequado.
        </p>

        <SubHeading>5.3 Conteúdo do utilizador</SubHeading>
        <p>
          O conteúdo que crias ao utilizar a Aplicação (listas de
          palpites, nomes de ligas, nome de utilizador, informações
          de perfil) é da tua propriedade. Contudo, ao utilizar a
          Aplicação, concedes ao Programador um{" "}
          <Strong>
            direito gratuito, ilimitado e transmissível
          </Strong>{" "}
          para apresentar, armazenar e partilhar esse conteúdo
          dentro da Aplicação e com outros utilizadores.
        </p>
      </Section>

      <Divider />

      <Section title="6. Exclusão de responsabilidade">
        <SubHeading>
          6.1 Serviço prestado &quot;tal como está&quot;
        </SubHeading>
        <p>
          A Aplicação é fornecida &quot;<Strong>tal como
          está</Strong>&quot; e &quot;<Strong>conforme
          disponível</Strong>&quot;. O Programador não presta{" "}
          <Strong>qualquer garantia</Strong> de que:
        </p>
        <List
          items={[
            "A Aplicação irá funcionar sem erros, sem interrupções ou em segurança",
            <>
              Os dados dos jogos, resultados ou estatísticas estarão{" "}
              <Strong>sempre exatos e atualizados</Strong>
            </>,
            <>
              Os resultados dos palpites ou as pontuações serão{" "}
              <Strong>sempre calculados em tempo útil</Strong>
            </>,
            "Não ocorrerão interrupções de servidor",
            "A Aplicação irá funcionar num determinado dispositivo ou sistema operativo",
          ]}
        />

        <SubHeading>
          6.2 Dados dos jogos e conteúdo de terceiros
        </SubHeading>
        <p>
          Os dados dos jogos, resultados, plantéis, minutagem e
          estatísticas são obtidos através de um{" "}
          <Strong>
            serviço de API de terceiros (API-Football)
          </Strong>
          . O Programador{" "}
          <Strong>não pode ser responsabilizado</Strong> pela
          exatidão, atualidade ou completude desses dados. Ao
          utilizar a Aplicação, o utilizador aceita que possam
          ocorrer atrasos, erros ou omissões nos dados.
        </p>
        <p>
          Na máxima medida permitida pela lei, o ScoreHunter e a
          iCat Studios não prestam{" "}
          <Strong>qualquer garantia</Strong> quanto à exatidão,
          completude ou atualidade dos dados dos jogos, das
          informações das equipas, das estatísticas ou de qualquer
          outro conteúdo de terceiros apresentado na Aplicação.
          Todos esses conteúdos são fornecidos &quot;
          <Strong>tal como estão</Strong>&quot; através dos nossos
          parceiros de dados; o ScoreHunter não será responsável por
          quaisquer erros, omissões ou atrasos nesses dados.
        </p>

        <SubHeading>6.3 Limitação de responsabilidade</SubHeading>
        <p>
          O Programador{" "}
          <Strong>
            não é responsável por danos diretos, indiretos,
            incidentais, especiais ou consequenciais
          </Strong>{" "}
          decorrentes ou relacionados com a utilização da Aplicação.
          Tal inclui, sem limitação:
        </p>
        <List
          items={[
            "Perda de dados",
            "Danos materiais ou morais",
            "Perda de troféus, prémios ou classificações potenciais",
            "Mau funcionamento de dispositivos",
            "Interrupções de serviços de terceiros",
          ]}
        />
      </Section>

      <Divider />

      <Section title="7. Exclusão de responsabilidade da Apple e da Google">
        <SubHeading>7.1 Quanto à Apple Inc.</SubHeading>
        <p>
          Esta Aplicação é distribuída através da Apple App Store na
          versão iOS. Neste contexto:
        </p>
        <List
          items={[
            <>
              <Strong>
                A Apple Inc. NÃO tem qualquer responsabilidade
                relativamente a esta Aplicação ou ao seu conteúdo
              </Strong>
            </>,
            "A Apple não pode ser responsabilizada por mau funcionamento da Aplicação, erros, falta de entrega de prémios ou qualquer outra questão",
            <>
              A Apple Inc. não tem{" "}
              <Strong>qualquer obrigação</Strong> caso a Aplicação
              viole os presentes Termos de Utilização
            </>,
            <>
              A manutenção, o apoio e os serviços ao utilizador
              desta Aplicação são{" "}
              <Strong>
                da exclusiva responsabilidade da iCat Studios
              </Strong>
            </>,
            <>
              <Strong>
                Quaisquer prémios, concursos, campanhas ou promoções
                disponibilizados na Aplicação são independentes da
                Apple Inc.
              </Strong>{" "}
              — a Apple não é, em caso algum, patrocinadora,
              organizadora ou administradora dessas iniciativas
            </>,
            "A Apple Inc. está isenta de qualquer responsabilidade por questões legais ou reclamações que surjam dentro da Aplicação",
            "A Aplicação e o seu conteúdo devem respeitar os direitos de propriedade intelectual da Apple",
            <>
              Os utilizadores da Aplicação{" "}
              <Strong>
                não podem dirigir reclamações diretamente contra a
                Apple Inc.
              </Strong>
            </>,
            <>
              <Strong>
                A Apple Inc. é beneficiária terceira destes Termos
              </Strong>{" "}
              e pode invocá-los quando necessário
            </>,
          ]}
        />

        <SubHeading>7.2 Quanto à Google LLC</SubHeading>
        <p>
          Esta Aplicação é distribuída através da Google Play Store
          na versão Android. Neste contexto:
        </p>
        <List
          items={[
            <>
              <Strong>
                A Google LLC NÃO tem qualquer responsabilidade
                relativamente a esta Aplicação ou ao seu conteúdo
              </Strong>
            </>,
            "A Google não pode ser responsabilizada por mau funcionamento da Aplicação, erros, falta de entrega de prémios ou qualquer outra questão",
            <>
              A manutenção, o apoio e os serviços ao utilizador
              desta Aplicação são{" "}
              <Strong>
                da exclusiva responsabilidade da iCat Studios
              </Strong>
            </>,
            <>
              <Strong>
                Quaisquer prémios, concursos, campanhas ou promoções
                disponibilizados na Aplicação são independentes da
                Google LLC
              </Strong>{" "}
              — a Google não é, em caso algum, patrocinadora,
              organizadora ou administradora dessas iniciativas
            </>,
            "A Google Play Store é apenas uma plataforma de distribuição da Aplicação e não tem qualquer responsabilidade pelo conteúdo ou funcionamento da Aplicação",
          ]}
        />

        <SubHeading>7.3 Apple Sign-In e Google Sign-In</SubHeading>
        <p>
          A Aplicação utiliza os serviços Apple Sign-In e Google
          Sign-In para autenticação. O funcionamento, a manutenção
          e a segurança destes serviços pertencem aos respetivos
          fornecedores. O Programador não pode ser responsabilizado
          por interrupções ou problemas relacionados com estes
          serviços.
        </p>
      </Section>

      <Divider />

      <Section title="8. Funcionalidades pagas e subscrições">
        <p>
          A Aplicação pode oferecer funcionalidades pagas
          (&quot;Subscrição Pro&quot; ou similar). Quando forem
          adicionadas funcionalidades pagas:
        </p>
        <List
          items={[
            <>
              Todos os pagamentos são processados através da{" "}
              <Strong>Apple App Store</Strong> ou da{" "}
              <Strong>Google Play Store</Strong>
            </>,
            "O pagamento, o reembolso e a gestão de subscrições estão sujeitos às políticas da respetiva plataforma",
            <>
              <Strong>
                Os pedidos de reembolso devem ser apresentados à
                Apple ou à Google
              </Strong>{" "}
              — não podem ser apresentados diretamente ao Programador
            </>,
            <>
              As funcionalidades pagas oferecem ao utilizador apenas
              uma <Strong>experiência adicional</Strong> — não
              influenciam os resultados dos concursos nem os
              rankings
            </>,
            <>
              As funcionalidades pagas{" "}
              <Strong>não garantem vitória</Strong> — todos os
              utilizadores estão em pé de igualdade nos concursos
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="9. Regras e mecânicas de jogo">
        <p>
          As regras de jogo, mecanismos de pontuação, descrições de
          mini-jogos e métodos de cálculo dos rankings em vigor na
          Aplicação são apresentados{" "}
          <Strong>dentro da Aplicação</Strong>. O Programador
          reserva-se o direito de{" "}
          <Strong>
            alterar as regras de jogo sem aviso prévio
          </Strong>
          . As alterações relevantes serão comunicadas através de
          notificações in-app.
        </p>
      </Section>

      <Divider />

      <Section title="10. Modificação ou cessação do Serviço">
        <p>
          O Programador pode, a qualquer momento e por qualquer
          motivo:
        </p>
        <List
          items={[
            "Modificar, adicionar ou remover funcionalidades da Aplicação",
            "Suspender temporariamente a Aplicação",
            "Cessar definitivamente a Aplicação",
            "Interromper o Serviço em determinadas regiões",
          ]}
        />
        <p>
          Os utilizadores não poderão reclamar qualquer
          indemnização em virtude dessas alterações.
        </p>
      </Section>

      <Divider />

      <Section title="11. Alterações aos presentes Termos">
        <p>
          O Programador reserva-se o direito de{" "}
          <Strong>
            atualizar a qualquer momento os presentes Termos de
            Utilização
          </Strong>
          . As alterações relevantes:
        </p>
        <List
          items={[
            "Serão publicadas nesta página",
            <>
              Atualizam a data &quot;Última atualização&quot; no topo
            </>,
            "Podem ser comunicadas por meio de notificações in-app",
          ]}
        />
        <p>
          Continuar a utilizar a Aplicação após a publicação das
          alterações significa que aceitas os Termos atualizados.
        </p>
      </Section>

      <Divider />

      <Section title="12. Lei aplicável e foro competente">
        <p>
          Os presentes Termos são regidos pela{" "}
          <Strong>lei da República da Türkiye</Strong>. Quaisquer
          litígios decorrentes ou relacionados com os presentes
          Termos serão dirimidos pelos{" "}
          <Strong>
            tribunais e serviços de execução de Istambul
          </Strong>
          .
        </p>
      </Section>

      <Divider />

      <Section title="13. Contacto">
        <p>
          Para questões relativas aos presentes Termos de Utilização:
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
      </Section>
    </>
  );
}
