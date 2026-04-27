import {
  Section,
  SubHeading,
  List,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function TermsContentPtBr() {
  return (
    <>
      <p>
        Leia atentamente estes Termos de Uso (&quot;Termos&quot;)
        antes de usar o aplicativo móvel ScoreHunter
        (&quot;Aplicativo&quot;, &quot;Serviço&quot;). Ao baixar e
        usar o Aplicativo, você concorda em ficar vinculado a estes
        Termos. Se você não concordar com estes Termos, por favor
        não utilize o Aplicativo.
      </p>

      <Divider />

      <Section title="1. Definições">
        <List
          items={[
            <>
              <Strong>Aplicativo</Strong>: o aplicativo móvel
              ScoreHunter e os sites relacionados
            </>,
            <>
              <Strong>Desenvolvedor / Nós / Nosso</Strong>: iCat
              Studios
            </>,
            <>
              <Strong>Usuário / Você / Seu</Strong>: a pessoa que
              utiliza o Aplicativo
            </>,
            <>
              <Strong>Serviço</Strong>: todos os recursos e conteúdos
              oferecidos pelo Aplicativo
            </>,
            <>
              <Strong>Conteúdo</Strong>: dados de partidas, listas
              de palpites, rankings, troféus, perfis de usuário e
              quaisquer outros dados dentro do Aplicativo
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Natureza do Serviço — IMPORTANTE">
        <SubHeading>
          2.1 O ScoreHunter não é um aplicativo de apostas
        </SubHeading>
        <p>
          O ScoreHunter é um{" "}
          <Strong>
            aplicativo de palpites e entretenimento baseado no
            conhecimento sobre futebol
          </Strong>
          . Os pontos a seguir definem a natureza fundamental do
          Aplicativo e devem ser claramente compreendidos pelos
          usuários:
        </p>
        <List
          items={[
            <>
              O Aplicativo é um{" "}
              <Strong>jogo baseado em habilidade</Strong>, NÃO um
              jogo de azar
            </>,
            <>
              O Aplicativo NÃO contém{" "}
              <Strong>terminologia de apostas</Strong> (cupom, odd,
              handicap, margem, jackpot)
            </>,
            <>
              No Aplicativo não são oferecidas{" "}
              <Strong>odds de apostas</Strong> nem{" "}
              <Strong>multiplicadores de ganhos</Strong> para
              nenhuma partida
            </>,
            <>
              Todas as partidas têm o{" "}
              <Strong>mesmo valor</Strong> para fins de palpite —
              nenhuma partida vale mais do que outra
            </>,
            <>
              O Aplicativo permite que torcedores de futebol
              compitam usando seu conhecimento e intuição em um
              ambiente divertido
            </>,
            <>
              O propósito principal é{" "}
              <Strong>
                entretenimento, cultura do futebol, formação de
                comunidade e compartilhamento de conhecimento
              </Strong>
            </>,
          ]}
        />

        <SubHeading>
          2.2 Sem depósitos de dinheiro nem prêmios em dinheiro
        </SubHeading>
        <List
          items={[
            <>
              <Strong>NÃO é necessário</Strong> gastar dinheiro real
              para jogar no Aplicativo ou participar de promoções
            </>,
            <>
              O Aplicativo <Strong>NÃO</Strong> inclui recursos de{" "}
              <Strong>aposta com dinheiro real</Strong> ou{" "}
              <Strong>jogo de azar</Strong>
            </>,
            <>
              O Aplicativo{" "}
              <Strong>NÃO promete prêmios em dinheiro real</Strong> a
              vencedores
            </>,
            <>
              O Aplicativo{" "}
              <Strong>
                NÃO contém elementos de jogo de azar, loteria nem
                apostas
              </Strong>
            </>,
            <>
              Todos os usuários participam das promoções em{" "}
              <Strong>condições iguais</Strong>
            </>,
            <>
              Recursos pagos como a assinatura Pro{" "}
              <Strong>
                não influenciam os resultados das promoções
              </Strong>{" "}
              — oferecem apenas funcionalidades adicionais que
              melhoram a experiência do usuário
            </>,
          ]}
        />

        <SubHeading>2.3 Recompensas promocionais</SubHeading>
        <p>
          O Desenvolvedor pode, a seu exclusivo critério, conceder
          ocasionalmente <Strong>prêmios promocionais</Strong>{" "}
          (camisas, bolas de futebol, vales-presente digitais,
          brindes simbólicos etc.) aos usuários de melhor desempenho.
          Aplicam-se a esses prêmios as seguintes condições:
        </p>
        <List
          items={[
            <>
              Os prêmios têm{" "}
              <Strong>natureza promocional</Strong> e visam
              incentivar o engajamento dos usuários
            </>,
            <>
              Os prêmios <Strong>NÃO são garantidos</Strong> —
              somente são concedidos no âmbito de campanhas
              divulgadas pelo Desenvolvedor
            </>,
            <>
              Os prêmios{" "}
              <Strong>NÃO são pagos em dinheiro</Strong> — são
              entregues apenas como brindes físicos ou digitais
            </>,
            <>
              A concessão, distribuição e entrega dos prêmios é{" "}
              <Strong>
                de responsabilidade exclusiva do Desenvolvedor
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc., Apple App Store, Google LLC e Google
                Play Store não possuem qualquer responsabilidade em
                relação a esses prêmios
              </Strong>
            </>,
            <>
              Endereço, identidade ou outras informações podem ser
              solicitadas aos vencedores pelo Desenvolvedor apenas
              para fins de entrega do prêmio
            </>,
          ]}
        />

        <SubHeading>2.4 Restrição de idade</SubHeading>
        <p>
          O Aplicativo é destinado a usuários{" "}
          <Strong>maiores de 13 anos</Strong>. Pessoas com menos de
          13 anos não podem usar o Aplicativo. Ao usar o Aplicativo,
          o usuário declara ter mais de 13 anos.
        </p>
      </Section>

      <Divider />

      <Section title="3. Criação e uso da conta">
        <SubHeading>3.1 Criando uma conta</SubHeading>
        <p>
          Para usar certos recursos do Aplicativo, você deve criar
          uma conta utilizando &quot;Entrar com a Apple&quot; ou
          &quot;Entrar com o Google&quot;. Ao criar uma conta:
        </p>
        <List
          items={[
            "Você deve fornecer informações precisas e atualizadas",
            "Você deve declarar corretamente sua data de nascimento",
            "Você não pode criar uma conta usando a identidade de outra pessoa",
            "Você não pode criar uma conta com informações falsas ou enganosas",
            <>
              Cada pessoa pode ter apenas{" "}
              <Strong>uma conta</Strong>
            </>,
          ]}
        />

        <SubHeading>3.2 Segurança da conta</SubHeading>
        <p>
          Você é o <Strong>único responsável</Strong> por todas as
          atividades realizadas em sua conta. Para manter a
          segurança da conta:
        </p>
        <List
          items={[
            "Proteja seu Apple ID ou sua conta Google",
            "Não permita que outras pessoas acessem sua conta",
            "Informe imediatamente o Desenvolvedor sobre qualquer atividade suspeita",
          ]}
        />

        <SubHeading>3.3 Encerramento da conta</SubHeading>
        <p>
          O Desenvolvedor reserva-se o direito de{" "}
          <Strong>suspender ou encerrar</Strong> a conta de um
          usuário <Strong>sem aviso prévio</Strong> nos seguintes
          casos:
        </p>
        <List
          items={[
            "Violação destes Termos",
            "Fraude, trapaça ou comportamento enganoso",
            "Assédio, insultos ou discurso de ódio dirigido a outros usuários",
            "Criação de várias contas",
            "Uso de softwares automatizados, bots ou ferramentas de trapaça",
            "Comportamento contrário às leis aplicáveis",
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. Uso aceitável">
        <SubHeading>4.1 Comportamentos proibidos</SubHeading>
        <p>
          Os seguintes comportamentos são <Strong>proibidos</Strong>{" "}
          ao usar o Aplicativo:
        </p>
        <List
          items={[
            "Criar contas falsas ou se passar por outras pessoas",
            "Usar ferramentas automatizadas (bots, scripts) para fazer palpites",
            <>
              Utilizar{" "}
              <Strong>
                nomes de usuário inadequados, palavrões, insultos,
                assédio ou linguagem racista, sexista ou de ódio
              </Strong>{" "}
              contra outros usuários
            </>,
            "Tentar burlar os mecanismos de segurança do Aplicativo",
            "Realizar engenharia reversa, descompilar ou desmontar o Aplicativo",
            "Copiar, distribuir ou explorar comercialmente o conteúdo do Aplicativo sem autorização",
            "Compartilhar spam, publicidade ou conteúdo promocional (em nomes de ligas, nomes de usuário etc.)",
            "Tentar ações que sobrecarreguem os servidores ou prejudiquem o Serviço",
          ]}
        />

        <SubHeading>4.2 Sanções</SubHeading>
        <p>
          Caso tais comportamentos sejam detectados, o Desenvolvedor
          reserva-se o direito de suspender a conta do usuário,
          removê-lo dos rankings ou excluir permanentemente a conta
          sem aviso prévio.
        </p>
      </Section>

      <Divider />

      <Section title="5. Direitos de propriedade intelectual">
        <SubHeading>5.1 Propriedade do Aplicativo</SubHeading>
        <p>
          O nome ScoreHunter, o logotipo, os recursos visuais, o
          design, o código-fonte, o conteúdo e todos os direitos de
          propriedade intelectual{" "}
          <Strong>pertencem à iCat Studios</Strong>. Esses
          conteúdos são protegidos por:
        </p>
        <List
          items={[
            "Direitos autorais",
            "Registro de marca",
            "Segredos comerciais",
            "Outros direitos de propriedade intelectual aplicáveis",
          ]}
        />

        <SubHeading>5.2 Conteúdo de terceiros e marcas</SubHeading>
        <p>
          O Aplicativo exibe conteúdo de terceiros, incluindo, mas
          não se limitando a, dados de partidas de futebol, nomes
          de times e ligas, nomes de jogadores e recursos visuais
          como logos de times e ligas. Esse conteúdo é fornecido por
          meio do nosso parceiro de dados API-Football e pertence
          aos respectivos titulares — incluindo clubes, ligas,
          federações e demais titulares de direitos. O ScoreHunter
          não reivindica a propriedade de quaisquer marcas,
          logotipos ou materiais protegidos por direitos autorais
          de terceiros exibidos no Aplicativo.
        </p>
        <p>
          O ScoreHunter{" "}
          <Strong>
            não é afiliado, endossado, patrocinado nem oficialmente
            ligado a qualquer liga, federação, clube, competição ou
            organização referenciada ou exibida no Aplicativo
          </Strong>
          . Todos os nomes, logotipos e marcas de terceiros são
          utilizados exclusivamente para fins de identificação e
          descrição segundo o princípio do uso nominativo justo.
        </p>
        <p>Você concorda que:</p>
        <List
          items={[
            <>
              <Strong>não</Strong> irá extrair, copiar, redistribuir
              ou de outro modo reutilizar o conteúdo de terceiros
              exibido no Aplicativo fora do uso pessoal habitual;
            </>,
            <>
              <Strong>não</Strong> usará o Aplicativo para infringir
              os direitos de propriedade intelectual de terceiros;
            </>,
            <>
              qualquer <Strong>uso comercial</Strong> de conteúdo de
              terceiros exibido no Aplicativo exige que você obtenha
              sua própria licença ou autorização diretamente do
              titular dos direitos competente.
            </>,
          ]}
        />
        <p>
          Se você é titular de direitos e deseja relatar uso não
          autorizado de sua marca ou material protegido por direitos
          autorais no Aplicativo, entre em contato pelo e-mail{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Responderemos a solicitações legítimas de remoção em
          até <Strong>trinta (30) dias</Strong>, removendo ou
          substituindo o conteúdo contestado quando apropriado.
        </p>

        <SubHeading>5.3 Conteúdo do usuário</SubHeading>
        <p>
          O conteúdo que você cria ao usar o Aplicativo (listas de
          palpites, nomes de ligas, nome de usuário, informações de
          perfil) é de sua propriedade. Entretanto, ao usar o
          Aplicativo, você concede ao Desenvolvedor um{" "}
          <Strong>
            direito gratuito, ilimitado e transferível
          </Strong>{" "}
          de exibir, armazenar e compartilhar esse conteúdo dentro
          do Aplicativo e com outros usuários.
        </p>
      </Section>

      <Divider />

      <Section title="6. Isenção de responsabilidade">
        <SubHeading>
          6.1 Serviço fornecido &quot;como está&quot;
        </SubHeading>
        <p>
          O Aplicativo é fornecido &quot;<Strong>como está</Strong>
          &quot; e &quot;<Strong>conforme disponível</Strong>&quot;.
          O Desenvolvedor não oferece{" "}
          <Strong>nenhuma garantia</Strong> de que:
        </p>
        <List
          items={[
            "O Aplicativo funcionará livre de erros, sem interrupções ou de forma segura",
            <>
              Os dados das partidas, placares ou estatísticas estarão{" "}
              <Strong>sempre exatos e atualizados</Strong>
            </>,
            <>
              Os resultados dos palpites ou as pontuações serão{" "}
              <Strong>sempre calculados a tempo</Strong>
            </>,
            "Não haverá indisponibilidades de servidor",
            "O Aplicativo funcionará em determinado dispositivo ou sistema operacional",
          ]}
        />

        <SubHeading>6.2 Dados das partidas e conteúdo de terceiros</SubHeading>
        <p>
          Dados das partidas, placares, escalações, minutagem e
          estatísticas são obtidos por meio de um{" "}
          <Strong>
            serviço de API de terceiros (API-Football)
          </Strong>
          . O Desenvolvedor{" "}
          <Strong>não pode ser responsabilizado</Strong> pela
          exatidão, atualidade ou integridade desses dados. Ao usar
          o Aplicativo, o usuário aceita que pode haver atrasos,
          erros ou omissões nos dados.
        </p>
        <p>
          Na máxima extensão permitida por lei, o ScoreHunter e a
          iCat Studios não oferecem{" "}
          <Strong>nenhuma garantia</Strong> quanto à exatidão,
          integridade ou tempestividade dos dados das partidas, das
          informações dos times, das estatísticas ou de qualquer
          outro conteúdo de terceiros exibido no Aplicativo. Todos
          esses conteúdos são fornecidos &quot;
          <Strong>como estão</Strong>&quot; por meio dos nossos
          parceiros de dados, e o ScoreHunter não será responsável
          por erros, omissões ou atrasos em tais dados.
        </p>

        <SubHeading>6.3 Limitação de responsabilidade</SubHeading>
        <p>
          O Desenvolvedor{" "}
          <Strong>
            não é responsável por danos diretos, indiretos,
            incidentais, especiais ou consequenciais
          </Strong>{" "}
          decorrentes ou relacionados ao uso do Aplicativo. Isso
          inclui, sem limitação:
        </p>
        <List
          items={[
            "Perda de dados",
            "Danos materiais ou morais",
            "Perda de troféus, prêmios ou posições potenciais",
            "Mau funcionamento de dispositivos",
            "Interrupções de serviços de terceiros",
          ]}
        />
      </Section>

      <Divider />

      <Section title="7. Isenção da Apple e do Google">
        <SubHeading>7.1 Sobre a Apple Inc.</SubHeading>
        <p>
          Este Aplicativo é distribuído por meio da Apple App Store
          na versão iOS. Nesse contexto:
        </p>
        <List
          items={[
            <>
              <Strong>
                A Apple Inc. NÃO possui qualquer responsabilidade
                relativa a este Aplicativo ou ao seu conteúdo
              </Strong>
            </>,
            "A Apple não pode ser responsabilizada por mau funcionamento, erros, falta de entrega de prêmios ou qualquer outro assunto relacionado ao Aplicativo",
            <>
              A Apple Inc. não tem{" "}
              <Strong>nenhuma obrigação</Strong> caso o Aplicativo
              viole estes Termos de Uso
            </>,
            <>
              A manutenção, o suporte e os serviços ao usuário deste
              Aplicativo são{" "}
              <Strong>
                de responsabilidade exclusiva da iCat Studios
              </Strong>
            </>,
            <>
              <Strong>
                Quaisquer prêmios, concursos, campanhas ou promoções
                oferecidos no Aplicativo são independentes da Apple
                Inc.
              </Strong>{" "}
              — a Apple não é, em nenhuma hipótese, patrocinadora,
              organizadora ou administradora de tais ações
            </>,
            "A Apple Inc. está isenta de qualquer responsabilidade por questões legais ou reclamações que surjam dentro do Aplicativo",
            "O Aplicativo e seu conteúdo devem respeitar os direitos de propriedade intelectual da Apple",
            <>
              Os usuários do Aplicativo{" "}
              <Strong>
                não podem direcionar reclamações diretamente contra
                a Apple Inc.
              </Strong>
            </>,
            <>
              <Strong>
                A Apple Inc. é beneficiária terceira destes Termos
              </Strong>{" "}
              e pode aplicá-los quando necessário
            </>,
          ]}
        />

        <SubHeading>7.2 Sobre a Google LLC</SubHeading>
        <p>
          Este Aplicativo é distribuído por meio da Google Play
          Store na versão Android. Nesse contexto:
        </p>
        <List
          items={[
            <>
              <Strong>
                A Google LLC NÃO possui qualquer responsabilidade
                relativa a este Aplicativo ou ao seu conteúdo
              </Strong>
            </>,
            "O Google não pode ser responsabilizado por mau funcionamento, erros, falta de entrega de prêmios ou qualquer outro assunto relacionado ao Aplicativo",
            <>
              A manutenção, o suporte e os serviços ao usuário deste
              Aplicativo são{" "}
              <Strong>
                de responsabilidade exclusiva da iCat Studios
              </Strong>
            </>,
            <>
              <Strong>
                Quaisquer prêmios, concursos, campanhas ou promoções
                oferecidos no Aplicativo são independentes da Google
                LLC
              </Strong>{" "}
              — o Google não é, em nenhuma hipótese, patrocinador,
              organizador ou administrador de tais ações
            </>,
            "A Google Play Store é apenas uma plataforma de distribuição do Aplicativo e não tem qualquer responsabilidade pelo conteúdo ou funcionamento do Aplicativo",
          ]}
        />

        <SubHeading>7.3 Apple Sign-In e Google Sign-In</SubHeading>
        <p>
          O Aplicativo utiliza os serviços Apple Sign-In e Google
          Sign-In para autenticação. O funcionamento, a manutenção e
          a segurança desses serviços são de responsabilidade dos
          respectivos provedores. O Desenvolvedor não pode ser
          responsabilizado por interrupções ou problemas com esses
          serviços.
        </p>
      </Section>

      <Divider />

      <Section title="8. Recursos pagos e assinaturas">
        <p>
          O Aplicativo pode oferecer recursos pagos
          (&quot;Assinatura Pro&quot; ou similar). Quando recursos
          pagos forem adicionados:
        </p>
        <List
          items={[
            <>
              Todos os pagamentos são processados via{" "}
              <Strong>Apple App Store</Strong> ou{" "}
              <Strong>Google Play Store</Strong>
            </>,
            "Pagamentos, reembolsos e gerenciamento de assinaturas estão sujeitos às políticas da respectiva plataforma",
            <>
              <Strong>
                As solicitações de reembolso devem ser enviadas para
                a Apple ou para o Google
              </Strong>{" "}
              — não podem ser enviadas diretamente ao Desenvolvedor
            </>,
            <>
              Os recursos pagos oferecem ao usuário apenas uma{" "}
              <Strong>experiência adicional</Strong> — não afetam
              os resultados das promoções ou os rankings
            </>,
            <>
              Os recursos pagos{" "}
              <Strong>não garantem vitória</Strong> — todos os
              usuários estão em pé de igualdade nas promoções
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="9. Regras e mecânicas de jogo">
        <p>
          As regras de jogo, mecanismos de pontuação, descrições de
          mini jogos e métodos de cálculo de rankings em vigor no
          Aplicativo são exibidos{" "}
          <Strong>dentro do Aplicativo</Strong>. O Desenvolvedor
          reserva-se o direito de{" "}
          <Strong>
            alterar as regras do jogo sem aviso prévio
          </Strong>
          . Alterações relevantes serão comunicadas por meio de
          notificações no Aplicativo.
        </p>
      </Section>

      <Divider />

      <Section title="10. Modificação ou término do Serviço">
        <p>
          O Desenvolvedor pode, a qualquer momento e por qualquer
          motivo:
        </p>
        <List
          items={[
            "Modificar, adicionar ou remover recursos do Aplicativo",
            "Suspender temporariamente o Aplicativo",
            "Encerrar definitivamente o Aplicativo",
            "Interromper o Serviço em determinadas regiões",
          ]}
        />
        <p>
          Os usuários não poderão pleitear nenhuma indenização em
          razão de tais alterações.
        </p>
      </Section>

      <Divider />

      <Section title="11. Alterações destes Termos">
        <p>
          O Desenvolvedor reserva-se o direito de{" "}
          <Strong>
            atualizar estes Termos de Uso a qualquer momento
          </Strong>
          . As alterações relevantes:
        </p>
        <List
          items={[
            "Serão publicadas nesta página",
            <>
              Atualizarão a data &quot;Última atualização&quot; no
              topo
            </>,
            "Podem ser comunicadas por meio de notificações no Aplicativo",
          ]}
        />
        <p>
          Continuar usando o Aplicativo após a publicação das
          alterações significa que você aceita os Termos
          atualizados.
        </p>
      </Section>

      <Divider />

      <Section title="12. Lei aplicável e foro competente">
        <p>
          Estes Termos são regidos pelas{" "}
          <Strong>leis da República da Türkiye</Strong>. Quaisquer
          disputas decorrentes de ou relacionadas a estes Termos
          serão resolvidas pelos{" "}
          <Strong>
            tribunais e cartórios de execução de Istambul
          </Strong>
          .
        </p>
      </Section>

      <Divider />

      <Section title="13. Contato">
        <p>Para dúvidas sobre estes Termos de Uso:</p>
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
      </Section>
    </>
  );
}
