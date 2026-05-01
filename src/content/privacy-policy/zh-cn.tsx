import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentZhCn() {
  return (
    <>
      <p>
        在 iCat Studios（以下简称&quot;我们&quot;），我们尊重 ScoreHunter
        移动应用程序（以下简称&quot;本应用&quot;）用户（以下简称&quot;您&quot;）
        的隐私。本隐私政策说明我们收集哪些个人数据、如何使用、与谁共享，
        以及您在使用本应用时享有的权利。
      </p>
      <p>使用本应用即表示您接受本隐私政策。</p>

      <Divider />

      <Section title="1. 我们收集的数据">
        <SubHeading>1.1 账户信息</SubHeading>
        <p>
          当您使用 Apple 登录或 Google 登录时，我们会从 Apple 或 Google
          收到以下信息：
        </p>
        <List
          items={[
            <>
              <Strong>电子邮件地址</Strong>（如果您在 Apple
              中选择&quot;隐藏我的电子邮件&quot;，则提供中转电子邮件）
            </>,
            <>
              <Strong>姓和名</Strong>（Apple 仅在首次登录时提供，Google
              在每次登录时提供）
            </>,
            <>
              <Strong>Provider User ID</Strong> — 用于识别您账户的唯一标识符
            </>,
          ]}
        />

        <SubHeading>1.2 个人资料信息</SubHeading>
        <p>您在本应用中直接提供的信息：</p>
        <List
          items={[
            <>
              <Strong>用户名</Strong>（显示名称 — 在排行榜中可见）
            </>,
            <>
              <Strong>国家</Strong>
            </>,
            <>
              <Strong>喜爱的足球队</Strong>
            </>,
            <>
              <Strong>出生日期</Strong>
            </>,
            <>
              <Strong>性别</Strong>（可选 — 提供&quot;不愿透露&quot;选项）
            </>,
            <>
              <Strong>Pro 订阅状态</Strong> — 是否拥有有效的 Pro
              会员资格及到期日期
            </>,
          ]}
        />

        <SubHeading>1.3 使用数据</SubHeading>
        <p>使用本应用过程中产生的数据：</p>
        <List
          items={[
            <>
              <Strong>预测列表</Strong>（您为 Score Hunt
              和小游戏选择的比赛和预测）
            </>,
            <>
              <Strong>加入的联赛</Strong>
            </>,
            <>
              <Strong>获得的奖杯和成就</Strong>
            </>,
            <>
              <Strong>每周和赛季排名分数</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 设备和应用程序信息</SubHeading>
        <List
          items={[
            <>
              <Strong>设备 ID</Strong>（用于匿名会话管理）
            </>,
            <>
              <Strong>操作系统</Strong>（iOS/Android 版本）
            </>,
            <>
              <Strong>应用版本和平台</Strong>（版本代码、版本名称，以及
              iOS 还是 Android）— 用于提供版本相关支持并识别兼容性问题
            </>,
            <>
              <Strong>推送通知令牌</Strong> — 由 Apple Push Notification
              service（APNs）或 Firebase Cloud
              Messaging（FCM）颁发的唯一令牌，用于向您发送比赛提醒、
              奖品通知和重要公告。您可以随时在设备设置中关闭推送通知。
            </>,
          ]}
        />

        <SubHeading>1.5 广告标识符</SubHeading>
        <p>
          本应用<Strong>仅在获得您明确同意的情况下</Strong>，可能收集您的
          <Strong>广告标识符</Strong>（iOS 上为 IDFA，Android 上为
          GAID／广告 ID）：
        </p>
        <List
          items={[
            <>
              在 <Strong>iOS</Strong> 上，您首次启动本应用时会看到
              <Strong>App Tracking Transparency（ATT）</Strong>
              授权对话框。如果您选择&quot;要求 App 不要跟踪&quot;，
              则不会收集 IDFA，我们的广告合作伙伴只会通过 Apple 的
              SKAdNetwork 收到保护隐私的信息。
            </>,
            <>
              在 <Strong>Android</Strong> 上，除非您通过
              <Strong>设置 → Google → 广告 → 删除广告 ID</Strong>
              进行选择退出，否则将收集 GAID。
            </>,
            <>
              一旦收集，广告标识符将与第 3.4 节列出的广告合作伙伴共享，
              用于广告归因和频次控制。
            </>,
          ]}
        />

        <SubHeading>1.6 自动收集的数据</SubHeading>
        <List
          items={[
            <>
              <Strong>IP 地址</Strong> —
              用于安全目的，包括对身份验证端点的速率限制（例如每个 IP
              每分钟最多 15
              次登录尝试）以及防止滥用。我们不会使用 IP 地址构建广告
              画像。
            </>,
            <>
              <Strong>错误和崩溃报告</Strong> —
              用于监测应用稳定性。报告会经过过滤以排除可识别个人身份的
              信息。
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. 我们如何使用您的数据">
        <p>我们将收集的数据用于以下目的：</p>
        <List
          items={[
            <>
              <Strong>账户创建和管理</Strong>：使您能够登录并使用本应用
            </>,
            <>
              <Strong>游戏体验</Strong>：保存您的预测列表、计算分数并构建
              排行榜
            </>,
            <>
              <Strong>个性化</Strong>：在排行榜中显示您喜爱的球队和国家
            </>,
            <>
              <Strong>Pro 订阅管理</Strong>：核对您的订阅状态并授予 Pro
              功能的使用权限
            </>,
            <>
              <Strong>沟通</Strong>：发送重要更新、公告、奖品通知以及与
              本应用相关的推送通知
            </>,
            <>
              <Strong>奖品配送</Strong>：向比赛获奖者寄送实物或数字奖品
              （需要姓名和电子邮件）
            </>,
            <>
              <Strong>账户安全</Strong>：防止欺诈账户、验证用户身份并对
              可疑活动进行速率限制
            </>,
            <>
              <Strong>广告</Strong>：在本应用内展示广告并衡量其效果 —
              详见第 8 节
            </>,
            <>
              <Strong>分析和改进</Strong>：以匿名方式分析使用统计数据并
              改进本应用
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. 我们与谁共享您的数据">
        <p>
          ScoreHunter
          <Strong>不会向第三方出售或出租您的个人数据</Strong>
          。我们仅在运营本应用所必需的范围内，与下方列出的可信赖的服务
          提供商和广告合作伙伴共享数据。
        </p>

        <SubHeading>3.1 服务提供商</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services（AWS）</Strong> —
              服务器和数据库托管（德国法兰克福）
            </>,
            <>
              <Strong>API-Football</Strong>（
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ） — 提供比赛数据、球队和联赛信息以及相关视觉素材
              （徽标和图片）的第三方服务。我们不会与 API-Football
              共享任何个人数据。ScoreHunter 不拥有通过该服务交付的徽标
              或商标的权利；详见第 11 节。
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In 身份验证
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In 身份验证以及
              Firebase Cloud Messaging（Android 上的推送通知）
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — 处理 iOS 上 Pro
              订阅的购买和续订
            </>,
            <>
              <Strong>Google Play Billing</Strong> — 处理 Android 上 Pro
              订阅的购买和续订
            </>,
            <>
              <Strong>Sentry</Strong> —
              后端错误和异常监测。已启用可识别个人身份信息的过滤功能
              （不会将电子邮件、姓名或用户内容发送至 Sentry）。
            </>,
          ]}
        />
        <p>
          这些服务提供商仅代表我们并按照我们的指示处理数据。
        </p>

        <SubHeading>3.2 法律要求</SubHeading>
        <p>
          根据法院命令、法律调查或法定义务，您的数据可能被分享给相关
          当局。
        </p>

        <SubHeading>3.3 对其他用户可见的信息</SubHeading>
        <p>
          以下信息在排行榜和个人资料页面上
          <Strong>对其他用户可见</Strong>：
        </p>
        <List
          items={[
            "您的用户名（显示名称）",
            "您的国旗",
            "您喜爱的球队",
            "您获得的奖杯",
            "您的预测分数和统计数据",
            "如有有效订阅，则显示 Pro 会员徽章",
          ]}
        />
        <p>
          以下信息<Strong>绝不会在本应用中显示</Strong>：
        </p>
        <List
          items={[
            "您的电子邮件地址",
            "您的真实姓名",
            "您的出生日期",
            "您的性别",
            "您的设备信息",
            "您的广告标识符",
            "您的订阅到期日期",
          ]}
        />

        <SubHeading>3.4 广告合作伙伴</SubHeading>
        <p>
          本应用通过多个广告网络（有时称为<em>聚合（mediation）</em>）
          展示广告。当您同意跟踪后，您的广告标识符和有限的技术数据可能
          会与下列合作伙伴共享，用于广告投放、归因和频次控制。每个合作
          伙伴都有自己的隐私政策：
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

      <Section title="4. 我们在何处以及保存多久您的数据">
        <SubHeading>4.1 数据存储位置</SubHeading>
        <p>
          所有用户数据都存储在
          <Strong>
            Amazon Web Services（AWS）法兰克福（eu-central-1）
          </Strong>
          数据中心。我们使用 Amazon RDS PostgreSQL 作为数据库服务。
        </p>

        <SubHeading>4.2 保留期限</SubHeading>
        <List
          items={[
            <>
              <Strong>有效账户</Strong>：只要您的账户保持有效，您的数据
              将一直保留
            </>,
            <>
              <Strong>非活跃账户</Strong>：超过 2
              年未登录的账户将被自动删除
            </>,
            <>
              <Strong>已删除账户</Strong>：当您删除账户时，您的个人数据
              将在 30 天内（包括备份）被永久删除
            </>,
            <>
              <Strong>匿名统计</Strong>：删除后可能保留匿名汇总统计
              （不包含个人信息）
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. 您的权利">
        <p>
          根据 GDPR（欧洲）和 KVKK（土耳其），您享有以下权利：
        </p>
        <List
          items={[
            <>
              <Strong>访问权</Strong>：了解我们处理的与您相关的数据
            </>,
            <>
              <Strong>更正权</Strong>：要求更正不准确或不完整的数据
            </>,
            <>
              <Strong>删除权（&quot;被遗忘权&quot;）</Strong>
              ：要求删除您的数据
            </>,
            <>
              <Strong>限制处理权</Strong>：限制我们处理您数据的方式
            </>,
            <>
              <Strong>数据可携权</Strong>：以机器可读的格式接收您的数据
            </>,
            <>
              <Strong>反对权</Strong>：反对数据处理
            </>,
            <>
              <Strong>撤回同意权</Strong>（广告跟踪）：您可以随时在 iOS
              上通过{" "}
              <Strong>设置 → 隐私与安全 → 跟踪</Strong>{" "}
              撤回 ATT 授权，或在 Android 上重置/删除您的广告 ID
            </>,
          ]}
        />

        <SubHeading>如何删除您的账户</SubHeading>
        <p>您可以通过以下三种方式删除账户：</p>
        <OrderedList
          items={[
            <>
              <Strong>应用内</Strong>：个人资料页面 → 账户设置 → 删除账户
            </>,
            <>
              <Strong>网页</Strong>：{" "}
              <Anchor href="/zh-cn/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>电子邮件</Strong>：向下方的联系地址发送请求
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. 儿童隐私">
        <p>
          ScoreHunter
          <Strong>不面向 13 岁以下的用户</Strong>
          。我们不会有意收集 13 岁以下儿童的个人数据。如果我们意识到
          已经收集了 13 岁以下儿童的个人数据，将尽快删除该等数据。
        </p>
        <p>
          对于 13 至 18 岁的用户，建议与家长或监护人共同阅读本隐私
          政策。对于根据所提供的出生日期看似为未成年人的用户，本应用
          内显示的广告将以
          <Strong>非个性化／家庭友好的设置</Strong>进行配置。
        </p>
        <p>
          认为自己的孩子正在使用本应用的家长或监护人可以与我们联系。
        </p>
      </Section>

      <Divider />

      <Section title="7. 数据安全">
        <p>我们采用行业标准的安全措施来保护您的数据：</p>
        <List
          items={[
            <>
              <Strong>HTTPS 加密</Strong>：所有网络流量均通过 SSL/TLS
              加密
            </>,
            <>
              <Strong>无密码身份验证</Strong>：我们不存储密码；所有登录
              均通过 Apple 和 Google 处理
            </>,
            <>
              <Strong>基于 JWT 的会话管理</Strong>：会话使用安全的临时
              令牌进行管理
            </>,
            <>
              <Strong>速率限制</Strong>：身份验证及敏感端点按 IP
              进行速率限制，以防止暴力破解和滥用
            </>,
            <>
              <Strong>访问控制</Strong>：数据库访问仅限于授权的系统账户
            </>,
            <>
              <Strong>定期安全更新</Strong>：我们的系统保持最新状态
            </>,
          ]}
        />
        <p>
          但请注意，互联网上的任何传输方式都不是 100% 安全的。
        </p>
      </Section>

      <Divider />

      <Section title="8. 广告与跟踪">
        <SubHeading>8.1 应用内广告</SubHeading>
        <p>
          ScoreHunter 部分由广告支持。本应用通过{" "}
          <Strong>Google AdMob</Strong>{" "}
          以及通过聚合方式接入的额外网络（AppLovin、Liftoff/Vungle、
          IronSource、Unity Ads、Meta Audience Network、InMobi）展示
          广告。完整的合作伙伴列表请参见第 3.4 节。
        </p>
        <p>
          广告可能包括横幅、插页式和奖励式形式。Pro 会员可根据订阅级别
          享受减少广告或无广告的体验。
        </p>

        <SubHeading>8.2 App Tracking Transparency（iOS）</SubHeading>
        <p>
          在 iOS 14.5 及更高版本上，Apple 要求我们在跨应用和网站跟踪
          您之前征得您的许可。您首次启动本应用时会看到{" "}
          <Strong>App Tracking Transparency</Strong> 授权对话框：
        </p>
        <List
          items={[
            <>
              如果您选择 <Strong>&quot;允许&quot;</Strong>，您的 IDFA
              可能会被分享给我们的广告合作伙伴，用于个性化广告、归因和
              频次控制。
            </>,
            <>
              如果您选择{" "}
              <Strong>
                &quot;要求 App 不要跟踪&quot;
              </Strong>
              ，则不会收集 IDFA。归因方面，我们使用 Apple
              注重隐私保护的{" "}
              <Strong>SKAdNetwork</Strong> 框架，所展示的广告将为
              非个性化广告。
            </>,
          ]}
        />
        <p>
          您可以随时在{" "}
          <Strong>设置 → 隐私与安全 → 跟踪</Strong>{" "}
          中更改您的选择。
        </p>

        <SubHeading>8.3 Android 广告 ID</SubHeading>
        <p>
          在 Android 上，我们的广告合作伙伴可能会使用您的 Google 广告
          ID（GAID）。您可以随时通过{" "}
          <Strong>设置 → Google → 广告</Strong> <Strong>重置</Strong>
          或<Strong>删除</Strong>您的广告 ID。删除后，所展示的广告将
          为非个性化广告。
        </p>

        <SubHeading>8.4 Cookie</SubHeading>
        <p>
          ScoreHunter 移动应用<Strong>不使用浏览器 Cookie</Strong>。
          移动端的跟踪由上述平台级机制管理，而非 Cookie。
        </p>
      </Section>

      <Divider />

      <Section title="9. 国际数据传输">
        <p>
          您的数据可能会在您所在国家以外（AWS 法兰克福 ―
          欧盟，以及第 3.4
          节列出的可能位于欧盟以外的广告合作伙伴的数据中心）进行处理。
          这些传输符合 GDPR 和 KVKK 所要求的安全标准。
        </p>
      </Section>

      <Divider />

      <Section title="10. 本政策的变更">
        <p>
          我们可能会不时更新本隐私政策。变更自在本页发布之时起生效，
          顶部的&quot;最后更新&quot;日期将随之刷新。重大变更将通过应用
          内通知发布。
        </p>
      </Section>

      <Divider />

      <Section title="11. 第三方内容与商标">
        <p>
          ScoreHunter 显示的足球比赛数据、球队名称、联赛名称、球员
          姓名以及视觉素材（如球队和联赛徽标）来源于我们的数据合作伙伴
          API-Football。这些名称、徽标和商标归各自所有者所有 —
          包括足球俱乐部、联赛、协会和其他权利人。
        </p>
        <p>
          ScoreHunter 与本应用中出现的任何体育联赛、协会、俱乐部、组织
          或赛事
          <Strong>
            没有任何关联、未获其认可、未受其赞助，亦无任何官方关系
          </Strong>
          。所有第三方名称、徽标和商标仅用于识别和描述目的（合理的
          指称性使用），以帮助用户辨识他们想要关注的比赛和球队。
        </p>
        <p>
          如果您是权利人并认为您的商标或受版权保护的资料在本应用中被
          错误使用，请通过{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>{" "}
          与我们联系。我们将审核您的请求并迅速回复，在适当情况下移除
          或替换该内容。
        </p>
      </Section>

      <Divider />

      <Section title="12. 联系我们">
        <p>
          如对本隐私政策或数据处理请求有任何疑问，请通过以下方式联系：
        </p>
        <div className="space-y-1">
          <p>
            <Strong>电子邮件</Strong>：{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>开发者</Strong>：iCat Studios
          </p>
          <p>
            <Strong>网站</Strong>：{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          根据 GDPR 或 KVKK
          的请求可发送至上述电子邮件地址或通过邮寄方式提交。我们将在
          <Strong>30 天内</Strong>回复。
        </p>
      </Section>
    </>
  );
}
