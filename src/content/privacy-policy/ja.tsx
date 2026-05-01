import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentJa() {
  return (
    <>
      <p>
        iCat Studios（以下「当社」「私たち」）は、モバイルアプリケーション
        ScoreHunter（以下「本アプリ」）のユーザー（以下「お客様」）の
        プライバシーを尊重します。本プライバシーポリシーは、当社が収集する
        個人データの種類、その利用方法、共有先、および本アプリ利用時の
        お客様の権利について説明します。
      </p>
      <p>
        本アプリを利用することで、本プライバシーポリシーに同意したものと
        みなされます。
      </p>

      <Divider />

      <Section title="1. 収集するデータ">
        <SubHeading>1.1 アカウント情報</SubHeading>
        <p>
          Apple でサインインまたは Google でサインインを利用される場合、
          当社は Apple または Google から次の情報を受け取ります：
        </p>
        <List
          items={[
            <>
              <Strong>メールアドレス</Strong>（Apple
              で「メールを非公開」を選択された場合はリレーアドレスが提供されます）
            </>,
            <>
              <Strong>姓名</Strong>（Apple
              は初回サインイン時のみ、Google
              はサインインのたびに提供します）
            </>,
            <>
              <Strong>Provider User ID</Strong> —
              アカウントを識別するための一意の識別子
            </>,
          ]}
        />

        <SubHeading>1.2 プロフィール情報</SubHeading>
        <p>本アプリ内でお客様が直接ご提供いただく情報：</p>
        <List
          items={[
            <>
              <Strong>ユーザー名</Strong>（表示名 —
              リーダーボードに表示されます）
            </>,
            <>
              <Strong>国</Strong>
            </>,
            <>
              <Strong>好きなサッカーチーム</Strong>
            </>,
            <>
              <Strong>生年月日</Strong>
            </>,
            <>
              <Strong>性別</Strong>（任意 —
              「回答しない」も選択できます）
            </>,
            <>
              <Strong>Pro サブスクリプションのステータス</Strong> —
              有効な Pro 会員かどうか、および有効期限
            </>,
          ]}
        />

        <SubHeading>1.3 利用データ</SubHeading>
        <p>本アプリのご利用にあたって生成されるデータ：</p>
        <List
          items={[
            <>
              <Strong>予想リスト</Strong>（Score Hunt
              およびミニゲームで選択した試合と予想）
            </>,
            <>
              <Strong>参加したリーグ</Strong>
            </>,
            <>
              <Strong>獲得したトロフィーや実績</Strong>
            </>,
            <>
              <Strong>週次・シーズンランキングのスコア</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 デバイスおよびアプリ情報</SubHeading>
        <List
          items={[
            <>
              <Strong>デバイス ID</Strong>（匿名のセッション管理のため）
            </>,
            <>
              <Strong>オペレーティングシステム</Strong>（iOS / Android
              のバージョン）
            </>,
            <>
              <Strong>アプリのバージョンとプラットフォーム</Strong>
              （バージョンコード、バージョン名、iOS か Android か）
              — バージョン固有のサポート提供および互換性問題の特定に使用します
            </>,
            <>
              <Strong>プッシュ通知トークン</Strong> — Apple
              Push Notification service（APNs）または Firebase Cloud
              Messaging（FCM）が発行する一意のトークンで、試合のリマインダー、
              賞品通知、重要なお知らせをお届けするために使用します。
              プッシュ通知はデバイスの設定からいつでも無効にできます。
            </>,
          ]}
        />

        <SubHeading>1.5 広告識別子</SubHeading>
        <p>
          本アプリは、お客様の<Strong>広告識別子</Strong>（iOS は
          IDFA、Android は GAID／広告 ID）を、
          <Strong>明示的な同意がある場合に限り</Strong>収集します：
        </p>
        <List
          items={[
            <>
              <Strong>iOS</Strong>
              では、初回起動時に
              <Strong>App Tracking Transparency（ATT）</Strong>
              の許可ダイアログが表示されます。「アプリにトラッキングしないように要求」
              を選択された場合、IDFA は収集されず、広告パートナーは Apple の
              SKAdNetwork を通じてプライバシー保護された情報のみを受け取ります。
            </>,
            <>
              <Strong>Android</Strong>
              では、
              <Strong>
                設定 → Google → 広告 → 広告 ID を削除
              </Strong>
              からオプトアウトされない限り、GAID
              が収集されます。
            </>,
            <>
              収集された場合、広告識別子は広告のアトリビューションおよびフリークエンシー
              キャップを目的として、第 3.4 項に記載の広告パートナーと共有されます。
            </>,
          ]}
        />

        <SubHeading>1.6 自動的に収集されるデータ</SubHeading>
        <List
          items={[
            <>
              <Strong>IP アドレス</Strong> —
              認証エンドポイントにおけるレート制限（例：IP
              あたり毎分 15 回までのサインイン試行）や不正利用防止など、
              セキュリティ目的で使用します。広告プロファイルの作成には
              使用しません。
            </>,
            <>
              <Strong>エラーおよびクラッシュレポート</Strong> —
              アプリの安定性を監視するために使用します。レポートは
              個人を特定できる情報を除外するようフィルタリングされます。
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. データの利用方法">
        <p>収集したデータは次の目的で利用します：</p>
        <List
          items={[
            <>
              <Strong>アカウントの作成・管理</Strong>：サインインおよび
              本アプリのご利用を可能にするため
            </>,
            <>
              <Strong>ゲーム体験の提供</Strong>：予想リストの保存、スコアの
              算出、リーダーボードの構築のため
            </>,
            <>
              <Strong>パーソナライズ</Strong>：リーダーボードに好きなチームや
              国を表示するため
            </>,
            <>
              <Strong>Pro サブスクリプションの管理</Strong>：サブスクリプション
              のステータスを確認し、Pro 機能へのアクセスを許可するため
            </>,
            <>
              <Strong>コミュニケーション</Strong>：重要なアップデート、
              お知らせ、賞品通知、本アプリに関するプッシュ通知の送信のため
            </>,
            <>
              <Strong>賞品の発送</Strong>：コンテスト当選者へ物品または
              デジタル賞品を発送するため（氏名およびメールアドレスが必要です）
            </>,
            <>
              <Strong>アカウントセキュリティ</Strong>：不正アカウントの防止、
              本人確認、不審な行為のレート制限のため
            </>,
            <>
              <Strong>広告</Strong>：本アプリ内での広告表示および効果測定の
              ため — 詳細は第 8 項をご参照ください
            </>,
            <>
              <Strong>分析および改善</Strong>：利用状況の統計を匿名で分析し、
              本アプリを改善するため
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. データの共有先">
        <p>
          ScoreHunter は
          <Strong>
            お客様の個人データを第三者に販売または貸与しません
          </Strong>
          。データは、本アプリの運営に必要な範囲で、以下に記載する信頼できる
          サービスプロバイダーおよび広告パートナーとのみ共有します。
        </p>

        <SubHeading>3.1 サービスプロバイダー</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services（AWS）</Strong> —
              サーバーおよびデータベースのホスティング（ドイツ・フランクフルト）
            </>,
            <>
              <Strong>API-Football</Strong>（
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ） —
              試合データ、チーム・リーグ情報、関連するビジュアル素材
              （ロゴおよび画像）を提供する第三者サービス。API-Football
              に個人データは共有されません。本サービスを通じて配信される
              ロゴまたは商標について、ScoreHunter は権利を保有していません。
              詳細は第 11 項をご参照ください。
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In 認証
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In 認証および
              Firebase Cloud Messaging（Android のプッシュ通知）
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — iOS における Pro
              サブスクリプションの購入および更新を処理
            </>,
            <>
              <Strong>Google Play Billing</Strong> — Android における
              Pro サブスクリプションの購入および更新を処理
            </>,
            <>
              <Strong>Sentry</Strong> —
              バックエンドのエラーおよび例外監視。個人を特定できる情報の
              フィルタリングは有効です（メールアドレス、氏名、ユーザーコンテンツは
              Sentry に送信されません）。
            </>,
          ]}
        />
        <p>
          これらのサービスプロバイダーは、当社の代理として、当社の指示に
          従ってのみデータを処理します。
        </p>

        <SubHeading>3.2 法的要件</SubHeading>
        <p>
          裁判所命令、法的調査、または法的義務への対応として、お客様の
          データを当局と共有する場合があります。
        </p>

        <SubHeading>3.3 他のユーザーに表示される情報</SubHeading>
        <p>
          以下の情報は、リーダーボードおよびプロフィールページにおいて
          <Strong>他のユーザーに表示されます</Strong>：
        </p>
        <List
          items={[
            "ユーザー名（表示名）",
            "国旗",
            "好きなチーム",
            "獲得したトロフィー",
            "予想スコアおよび統計情報",
            "有効なサブスクリプションがある場合の Pro 会員バッジ",
          ]}
        />
        <p>
          以下の情報は、
          <Strong>本アプリ内に決して表示されません</Strong>：
        </p>
        <List
          items={[
            "メールアドレス",
            "実名（姓名）",
            "生年月日",
            "性別",
            "デバイス情報",
            "広告識別子",
            "サブスクリプションの有効期限",
          ]}
        />

        <SubHeading>3.4 広告パートナー</SubHeading>
        <p>
          本アプリは複数の広告ネットワーク（メディエーションと呼ばれることが
          あります）を通じて広告を表示します。トラッキングに同意いただいた
          場合、広告配信、アトリビューション、フリークエンシーキャップを目的に、
          お客様の広告識別子と限定的な技術データを以下のパートナーと共有する
          ことがあります。各パートナーは独自のプライバシーポリシーを定めて
          います：
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

      <Section title="4. データの保管場所と保管期間">
        <SubHeading>4.1 保管場所</SubHeading>
        <p>
          すべてのユーザーデータは
          <Strong>
            Amazon Web Services（AWS）フランクフルト（eu-central-1）
          </Strong>
          のデータセンターに保管されます。データベースサービスとして
          Amazon RDS PostgreSQL を利用しています。
        </p>

        <SubHeading>4.2 保管期間</SubHeading>
        <List
          items={[
            <>
              <Strong>有効なアカウント</Strong>：アカウントが有効である
              限り、データは保管されます
            </>,
            <>
              <Strong>非アクティブなアカウント</Strong>：2
              年間サインインのなかったアカウントは自動的に削除されます
            </>,
            <>
              <Strong>削除されたアカウント</Strong>：アカウントを削除すると、
              個人データは 30 日以内に（バックアップを含めて）完全に削除されます
            </>,
            <>
              <Strong>匿名統計情報</Strong>：削除後も匿名の集計統計情報を
              保持する場合があります（個人情報は含みません）
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. お客様の権利">
        <p>
          GDPR（欧州）および KVKK（トルコ）に基づき、お客様は次の権利を
          有します：
        </p>
        <List
          items={[
            <>
              <Strong>アクセス権</Strong>：当社が処理しているデータの
              内容を知る権利
            </>,
            <>
              <Strong>訂正権</Strong>：不正確または不完全なデータの修正を
              求める権利
            </>,
            <>
              <Strong>消去権（「忘れられる権利」）</Strong>：データの削除を
              求める権利
            </>,
            <>
              <Strong>処理の制限権</Strong>：データの処理方法を制限する権利
            </>,
            <>
              <Strong>データポータビリティ権</Strong>：機械可読形式での
              データ提供を求める権利
            </>,
            <>
              <Strong>異議申立権</Strong>：データ処理に異議を唱える権利
            </>,
            <>
              <Strong>同意撤回権</Strong>（広告のトラッキング）：iOS では
              <Strong>
                設定 → プライバシーとセキュリティ → トラッキング
              </Strong>
              から ATT
              許可をいつでも取り消すことができ、Android
              では広告 ID をいつでもリセットまたは削除できます
            </>,
          ]}
        />

        <SubHeading>アカウントの削除方法</SubHeading>
        <p>アカウントは次の 3 つの方法で削除できます：</p>
        <OrderedList
          items={[
            <>
              <Strong>アプリ内</Strong>：プロフィール → アカウント設定 →
              アカウントを削除
            </>,
            <>
              <Strong>ウェブ</Strong>：{" "}
              <Anchor href="/ja/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>メール</Strong>：下記の連絡先までリクエストを
              送信してください
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. 子どものプライバシー">
        <p>
          ScoreHunter は
          <Strong>13 歳未満のユーザーを対象としていません</Strong>。
          当社は 13 歳未満の子どもから故意に個人データを収集することは
          ありません。13 歳未満の子どもの個人データを収集していたことが
          判明した場合、当社は可能な限り速やかに当該データを削除します。
        </p>
        <p>
          13 歳から 18 歳のユーザーには、本プライバシーポリシーを保護者と
          一緒にご確認いただくことを推奨します。提供された生年月日に基づき
          未成年と判断されるユーザーには、本アプリ内で表示される広告は
          <Strong>
            非パーソナライズ／ファミリーセーフ設定
          </Strong>
          で配信されます。
        </p>
        <p>
          お子様が本アプリを利用していると思われる場合、保護者の方は
          当社までご連絡ください。
        </p>
      </Section>

      <Divider />

      <Section title="7. データのセキュリティ">
        <p>
          当社は業界標準のセキュリティ対策によりお客様のデータを
          保護しています：
        </p>
        <List
          items={[
            <>
              <Strong>HTTPS 暗号化</Strong>：すべての通信は SSL/TLS
              で暗号化されます
            </>,
            <>
              <Strong>パスワードレス認証</Strong>：パスワードは保管せず、
              すべてのサインインは Apple および Google を通じて行われます
            </>,
            <>
              <Strong>JWT ベースのセッション管理</Strong>：セッションは
              安全な一時的トークンで管理されます
            </>,
            <>
              <Strong>レート制限</Strong>：ブルートフォースおよび
              不正利用を防ぐため、認証および機微なエンドポイントは IP
              ごとにレート制限されます
            </>,
            <>
              <Strong>アクセス制御</Strong>：データベースへのアクセスは
              認可されたシステムアカウントのみに限定されます
            </>,
            <>
              <Strong>定期的なセキュリティアップデート</Strong>：
              当社のシステムは常に最新の状態に保たれます
            </>,
          ]}
        />
        <p>
          ただし、インターネットを介する送信方法に 100%
          安全なものはないことをご了承ください。
        </p>
      </Section>

      <Divider />

      <Section title="8. 広告およびトラッキング">
        <SubHeading>8.1 本アプリ内の広告</SubHeading>
        <p>
          ScoreHunter は広告収益によって部分的に支えられています。本アプリは
          <Strong>Google AdMob</Strong>{" "}
          およびメディエーションを通じた追加ネットワーク（AppLovin、
          Liftoff/Vungle、IronSource、Unity Ads、Meta Audience Network、
          InMobi）を通じて広告を表示します。完全なパートナーリストは
          第 3.4 項をご参照ください。
        </p>
        <p>
          広告にはバナー、インタースティシャル、リワードの形式が含まれます。
          Pro 会員はサブスクリプションのプランに応じて、広告の少ない、
          または広告なしの体験を享受できる場合があります。
        </p>

        <SubHeading>8.2 App Tracking Transparency（iOS）</SubHeading>
        <p>
          iOS 14.5 以降では、アプリやウェブサイトをまたいだトラッキングを
          行う前に Apple がお客様の許可を求めることを要求しています。
          本アプリの初回起動時に
          <Strong>App Tracking Transparency</Strong>
          の許可ダイアログが表示されます：
        </p>
        <List
          items={[
            <>
              <Strong>「許可」</Strong>を選択された場合、IDFA
              はパーソナライズ広告、アトリビューション、フリークエンシー
              キャップのために広告パートナーと共有されることがあります。
            </>,
            <>
              <Strong>
                「アプリにトラッキングしないように要求」
              </Strong>
              を選択された場合、IDFA は収集されません。アトリビューションには
              Apple のプライバシー保護フレームワーク
              <Strong>SKAdNetwork</Strong>{" "}
              を使用し、表示される広告は非パーソナライズとなります。
            </>,
          ]}
        />
        <p>
          選択は{" "}
          <Strong>
            設定 → プライバシーとセキュリティ → トラッキング
          </Strong>{" "}
          からいつでも変更できます。
        </p>

        <SubHeading>8.3 Android の広告 ID</SubHeading>
        <p>
          Android では、Google 広告 ID（GAID）が広告パートナーによって
          利用される場合があります。
          <Strong>設定 → Google → 広告</Strong> から、広告 ID を
          いつでも<Strong>リセット</Strong>または
          <Strong>削除</Strong>
          できます。削除すると、表示される広告は非パーソナライズとなります。
        </p>

        <SubHeading>8.4 Cookie</SubHeading>
        <p>
          ScoreHunter モバイルアプリは
          <Strong>ブラウザの Cookie を使用しません</Strong>。
          モバイルにおけるトラッキングは、Cookie ではなく、上記の
          プラットフォームレベルの仕組みによって規律されています。
        </p>
      </Section>

      <Divider />

      <Section title="9. 国際データ移転">
        <p>
          お客様のデータは、お住まいの国外（AWS フランクフルト ―
          欧州連合、および第 3.4 項に記載の広告パートナーの EU
          外に所在し得るデータセンター）で処理される場合があります。
          これらの移転は、GDPR および KVKK
          が定める安全基準に準拠しています。
        </p>
      </Section>

      <Divider />

      <Section title="10. 本ポリシーの変更">
        <p>
          当社は、本プライバシーポリシーを随時更新することがあります。
          変更は本ページに公開された時点で効力を生じ、ページ上部の
          「最終更新日」が更新されます。重要な変更については、アプリ内
          通知でお知らせします。
        </p>
      </Section>

      <Divider />

      <Section title="11. 第三者コンテンツおよび商標">
        <p>
          ScoreHunter
          は、データプロバイダーである API-Football
          より提供される、サッカーの試合データ、チーム名、リーグ名、
          選手名、ビジュアル素材（チームおよびリーグのロゴなど）を表示します。
          これらの名称、ロゴおよび商標は、サッカークラブ、リーグ、連盟、
          その他の権利者を含む、それぞれの所有者に帰属します。
        </p>
        <p>
          ScoreHunter は、本アプリで取り上げるいかなるスポーツリーグ、
          連盟、クラブ、組織、または競技会とも
          <Strong>
            提携、推薦、後援、または公式な関係を有しません
          </Strong>
          。すべての第三者の名称、ロゴ、および商標は、ユーザーが追いたい
          試合やチームを認識できるよう、もっぱら識別および記述目的
          （ノミナティブ・フェアユース）で使用されています。
        </p>
        <p>
          権利者の方で、ご自身の商標または著作権物が本アプリ内で不適切に
          使用されているとお考えの場合は、{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>{" "}
          までご連絡ください。当社はリクエストを審査し、速やかにご対応の上、
          適切な場合にはコンテンツを削除または差し替えます。
        </p>
      </Section>

      <Divider />

      <Section title="12. お問い合わせ">
        <p>
          本プライバシーポリシーまたはデータ処理に関するご質問は次の
          連絡先までお願いします：
        </p>
        <div className="space-y-1">
          <p>
            <Strong>メール</Strong>：{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>開発者</Strong>：iCat Studios
          </p>
          <p>
            <Strong>ウェブサイト</Strong>：{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          GDPR または KVKK に基づくリクエストは、上記メールアドレスまたは
          郵送でお送りいただけます。<Strong>30 日以内</Strong>
          に回答いたします。
        </p>
      </Section>
    </>
  );
}
