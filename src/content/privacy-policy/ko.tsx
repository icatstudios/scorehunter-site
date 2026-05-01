import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentKo() {
  return (
    <>
      <p>
        iCat Studios(이하 &quot;당사&quot;, &quot;저희&quot;)는 모바일
        애플리케이션 ScoreHunter(이하 &quot;본 앱&quot;) 사용자(이하
        &quot;귀하&quot;)의 개인정보를 존중합니다. 본 개인정보
        처리방침은 당사가 수집하는 개인 데이터의 종류, 그 이용 방법,
        공유 대상 및 본 앱 이용 시 귀하의 권리를 설명합니다.
      </p>
      <p>
        본 앱을 이용함으로써 귀하는 본 개인정보 처리방침에 동의한 것으로
        간주됩니다.
      </p>

      <Divider />

      <Section title="1. 수집하는 데이터">
        <SubHeading>1.1 계정 정보</SubHeading>
        <p>
          Apple로 로그인 또는 Google로 로그인을 사용하시면, 당사는 Apple
          또는 Google로부터 다음 정보를 받습니다:
        </p>
        <List
          items={[
            <>
              <Strong>이메일 주소</Strong>(Apple에서 &quot;내 이메일
              가리기&quot;를 선택한 경우 릴레이 이메일이 제공됩니다)
            </>,
            <>
              <Strong>이름과 성</Strong>(Apple은 최초 로그인 시에만,
              Google은 매 로그인마다 제공합니다)
            </>,
            <>
              <Strong>Provider User ID</Strong> — 계정을 식별하는 데
              사용되는 고유 식별자
            </>,
          ]}
        />

        <SubHeading>1.2 프로필 정보</SubHeading>
        <p>본 앱 내에서 직접 제공하시는 정보:</p>
        <List
          items={[
            <>
              <Strong>사용자명</Strong>(표시 이름 — 리더보드에 노출됩니다)
            </>,
            <>
              <Strong>국가</Strong>
            </>,
            <>
              <Strong>좋아하는 축구팀</Strong>
            </>,
            <>
              <Strong>생년월일</Strong>
            </>,
            <>
              <Strong>성별</Strong>(선택사항 — &quot;응답하지 않음&quot;
              옵션이 있습니다)
            </>,
            <>
              <Strong>Pro 구독 상태</Strong> — 활성화된 Pro 멤버십 보유
              여부 및 만료일
            </>,
          ]}
        />

        <SubHeading>1.3 이용 데이터</SubHeading>
        <p>본 앱을 사용하는 동안 생성되는 데이터:</p>
        <List
          items={[
            <>
              <Strong>예측 목록</Strong>(Score Hunt 및 미니게임에 대해
              선택한 경기 및 예측)
            </>,
            <>
              <Strong>참여한 리그</Strong>
            </>,
            <>
              <Strong>획득한 트로피와 업적</Strong>
            </>,
            <>
              <Strong>주간 및 시즌 랭킹 점수</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 기기 및 앱 정보</SubHeading>
        <List
          items={[
            <>
              <Strong>기기 ID</Strong>(익명 세션 관리에 사용)
            </>,
            <>
              <Strong>운영체제</Strong>(iOS/Android 버전)
            </>,
            <>
              <Strong>앱 버전 및 플랫폼</Strong>(버전 코드, 버전 이름,
              iOS인지 Android인지) — 버전별 지원 제공 및 호환성 문제
              파악에 사용됩니다
            </>,
            <>
              <Strong>푸시 알림 토큰</Strong> — Apple Push Notification
              service(APNs) 또는 Firebase Cloud Messaging(FCM)이
              발급하는 고유 토큰으로, 경기 알림, 상품 알림, 중요 공지를
              전달하는 데 사용됩니다. 푸시 알림은 기기 설정에서 언제든
              비활성화할 수 있습니다.
            </>,
          ]}
        />

        <SubHeading>1.5 광고 식별자</SubHeading>
        <p>
          본 앱은 귀하의 <Strong>광고 식별자</Strong>(iOS의 IDFA,
          Android의 GAID/광고 ID)를 <Strong>명시적인 동의가 있을 경우에만
          </Strong> 수집할 수 있습니다:
        </p>
        <List
          items={[
            <>
              <Strong>iOS</Strong>에서는 본 앱을 처음 실행할 때{" "}
              <Strong>App Tracking Transparency(ATT)</Strong> 동의 창이
              표시됩니다. &quot;앱이 추적하지 않도록 요청&quot;을
              선택하시면 IDFA가 수집되지 않으며, 광고 파트너는 Apple의
              SKAdNetwork를 통해 개인정보를 보호하는 정보만 받습니다.
            </>,
            <>
              <Strong>Android</Strong>에서는{" "}
              <Strong>설정 → Google → 광고 → 광고 ID 삭제</Strong>를 통해
              거부하지 않는 한 GAID가 수집됩니다.
            </>,
            <>
              수집되는 경우, 광고 식별자는 광고 어트리뷰션과 노출 빈도
              제한을 위해 3.4항에 명시된 광고 파트너와 공유됩니다.
            </>,
          ]}
        />

        <SubHeading>1.6 자동 수집 데이터</SubHeading>
        <List
          items={[
            <>
              <Strong>IP 주소</Strong> — 인증 엔드포인트의 속도
              제한(예: IP당 분당 최대 15회의 로그인 시도) 및 남용 방지를
              포함한 보안 목적으로 사용됩니다. IP 주소는 광고 프로필
              구축에 사용되지 않습니다.
            </>,
            <>
              <Strong>오류 및 충돌 보고서</Strong> — 앱 안정성을
              모니터링하는 데 사용됩니다. 보고서는 개인 식별 정보를
              제외하도록 필터링됩니다.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. 데이터 사용 방법">
        <p>수집된 데이터는 다음 목적으로 사용됩니다:</p>
        <List
          items={[
            <>
              <Strong>계정 생성 및 관리</Strong>: 로그인 및 본 앱 이용을
              가능하게 하기 위해
            </>,
            <>
              <Strong>게임 경험 제공</Strong>: 예측 목록 저장, 점수 계산,
              리더보드 구성을 위해
            </>,
            <>
              <Strong>개인화</Strong>: 좋아하는 팀 및 국가를 리더보드에
              표시하기 위해
            </>,
            <>
              <Strong>Pro 구독 관리</Strong>: 구독 상태를 확인하고 Pro
              기능에 대한 접근 권한을 부여하기 위해
            </>,
            <>
              <Strong>커뮤니케이션</Strong>: 중요 업데이트, 공지사항,
              상품 알림 및 본 앱 관련 푸시 알림을 발송하기 위해
            </>,
            <>
              <Strong>상품 발송</Strong>: 콘테스트 당첨자에게 실물 또는
              디지털 상품을 발송하기 위해(이름과 이메일이 필요합니다)
            </>,
            <>
              <Strong>계정 보안</Strong>: 부정 계정 방지, 사용자 신원
              확인, 의심스러운 활동에 대한 속도 제한을 위해
            </>,
            <>
              <Strong>광고</Strong>: 본 앱 내 광고 노출 및 성과 측정을
              위해 — 자세한 내용은 8항을 참고하세요
            </>,
            <>
              <Strong>분석 및 개선</Strong>: 사용 통계를 익명으로 분석하여
              본 앱을 개선하기 위해
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. 데이터 공유 대상">
        <p>
          ScoreHunter는{" "}
          <Strong>
            귀하의 개인 데이터를 제3자에게 판매하거나 임대하지 않습니다
          </Strong>
          . 데이터는 본 앱 운영에 필요한 범위 내에서만, 아래 명시된
          신뢰할 수 있는 서비스 제공자 및 광고 파트너와 공유됩니다.
        </p>

        <SubHeading>3.1 서비스 제공자</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services(AWS)</Strong> — 서버 및
              데이터베이스 호스팅(독일 프랑크푸르트)
            </>,
            <>
              <Strong>API-Football</Strong>(
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — 경기 데이터, 팀 및 리그 정보, 관련 시각 자료(로고와
              이미지)를 제공하는 제3자 서비스. API-Football과는 어떠한
              개인 데이터도 공유되지 않습니다. 본 서비스를 통해 제공되는
              로고 또는 상표에 대한 권리는 ScoreHunter에 없습니다.
              자세한 내용은 11항을 참고하세요.
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In 인증
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In 인증 및 Firebase
              Cloud Messaging(Android의 푸시 알림)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — iOS의 Pro 구독 결제 및
              갱신 처리
            </>,
            <>
              <Strong>Google Play Billing</Strong> — Android의 Pro 구독
              결제 및 갱신 처리
            </>,
            <>
              <Strong>Sentry</Strong> — 백엔드 오류 및 예외 모니터링.
              개인 식별 정보 필터링이 활성화되어 있습니다(이메일,
              이름, 사용자 콘텐츠는 Sentry에 전송되지 않습니다).
            </>,
          ]}
        />
        <p>
          이러한 서비스 제공자는 당사의 대리인으로서, 당사의 지시에
          따라서만 데이터를 처리합니다.
        </p>

        <SubHeading>3.2 법적 요구사항</SubHeading>
        <p>
          법원의 명령, 법적 조사 또는 법적 의무에 따라 귀하의 데이터가
          관계 당국에 공유될 수 있습니다.
        </p>

        <SubHeading>3.3 다른 사용자에게 노출되는 정보</SubHeading>
        <p>
          다음 정보는 리더보드 및 프로필 페이지에서{" "}
          <Strong>다른 사용자에게 노출됩니다</Strong>:
        </p>
        <List
          items={[
            "사용자명(표시 이름)",
            "국가 깃발",
            "좋아하는 팀",
            "획득한 트로피",
            "예측 점수 및 통계",
            "활성화된 구독이 있을 경우 Pro 멤버십 배지",
          ]}
        />
        <p>
          다음 정보는 <Strong>본 앱 내에 절대 표시되지 않습니다</Strong>:
        </p>
        <List
          items={[
            "이메일 주소",
            "실제 이름과 성",
            "생년월일",
            "성별",
            "기기 정보",
            "광고 식별자",
            "구독 만료일",
          ]}
        />

        <SubHeading>3.4 광고 파트너</SubHeading>
        <p>
          본 앱은 여러 광고 네트워크(때때로 <em>미디에이션</em>이라고도
          함)를 통해 광고를 표시합니다. 추적에 동의하신 경우, 광고 노출,
          어트리뷰션 및 노출 빈도 제한을 위해 귀하의 광고 식별자와 제한된
          기술 데이터가 아래 파트너와 공유될 수 있습니다. 각 파트너는
          자체 개인정보 처리방침을 보유하고 있습니다:
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

      <Section title="4. 데이터 보관 위치 및 보관 기간">
        <SubHeading>4.1 보관 위치</SubHeading>
        <p>
          모든 사용자 데이터는{" "}
          <Strong>
            Amazon Web Services(AWS) 프랑크푸르트(eu-central-1)
          </Strong>{" "}
          데이터센터에 보관됩니다. 데이터베이스 서비스로 Amazon RDS
          PostgreSQL을 사용합니다.
        </p>

        <SubHeading>4.2 보관 기간</SubHeading>
        <List
          items={[
            <>
              <Strong>활성 계정</Strong>: 계정이 활성 상태인 동안 데이터가
              보관됩니다
            </>,
            <>
              <Strong>비활성 계정</Strong>: 2년 동안 로그인하지 않은
              계정은 자동으로 삭제됩니다
            </>,
            <>
              <Strong>삭제된 계정</Strong>: 계정을 삭제하시면 개인
              데이터는 30일 이내에 영구적으로 삭제됩니다(백업 포함)
            </>,
            <>
              <Strong>익명 통계</Strong>: 삭제 이후에도 익명의 집계
              통계는 보관될 수 있습니다(개인정보를 포함하지 않습니다)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. 귀하의 권리">
        <p>
          GDPR(유럽) 및 KVKK(터키)에 따라 귀하는 다음 권리를 갖습니다:
        </p>
        <List
          items={[
            <>
              <Strong>접근권</Strong>: 당사가 처리 중인 데이터의 내용을
              알 권리
            </>,
            <>
              <Strong>정정권</Strong>: 부정확하거나 불완전한 데이터의
              수정을 요청할 권리
            </>,
            <>
              <Strong>삭제권(&quot;잊혀질 권리&quot;)</Strong>: 데이터의
              삭제를 요청할 권리
            </>,
            <>
              <Strong>처리 제한권</Strong>: 데이터 처리 방식을 제한할
              권리
            </>,
            <>
              <Strong>데이터 이동권</Strong>: 기계 판독이 가능한 형식으로
              데이터를 받을 권리
            </>,
            <>
              <Strong>이의제기권</Strong>: 데이터 처리에 이의를 제기할
              권리
            </>,
            <>
              <Strong>동의 철회권</Strong>(광고 추적): iOS에서{" "}
              <Strong>설정 → 개인정보 보호 및 보안 → 추적</Strong>에서
              ATT 권한을 언제든 철회하거나, Android에서 광고 ID를 언제든
              재설정/삭제할 수 있습니다
            </>,
          ]}
        />

        <SubHeading>계정 삭제 방법</SubHeading>
        <p>계정은 다음 세 가지 방법으로 삭제할 수 있습니다:</p>
        <OrderedList
          items={[
            <>
              <Strong>앱 내</Strong>: 프로필 페이지 → 계정 설정 → 계정
              삭제
            </>,
            <>
              <Strong>웹</Strong>:{" "}
              <Anchor href="/ko/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>이메일</Strong>: 아래 연락처로 요청을 보내주세요
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. 아동의 개인정보">
        <p>
          ScoreHunter는{" "}
          <Strong>13세 미만 사용자를 대상으로 하지 않습니다</Strong>.
          당사는 13세 미만 아동의 개인 데이터를 알면서 수집하지 않습니다.
          13세 미만 아동의 개인 데이터를 수집한 사실을 인지하면, 가능한
          한 빨리 해당 데이터를 삭제합니다.
        </p>
        <p>
          13세에서 18세 사이의 사용자에게는 본 개인정보 처리방침을
          보호자와 함께 검토할 것을 권장합니다. 제공된 생년월일을
          기준으로 미성년자로 보이는 사용자에게는 본 앱 내에서{" "}
          <Strong>비개인화/가족 친화적 설정</Strong>으로 광고가
          노출됩니다.
        </p>
        <p>
          자녀가 본 앱을 이용하고 있다고 생각하시는 보호자는 당사에
          문의하실 수 있습니다.
        </p>
      </Section>

      <Divider />

      <Section title="7. 데이터 보안">
        <p>
          당사는 귀하의 데이터를 보호하기 위해 업계 표준 보안 조치를
          시행합니다:
        </p>
        <List
          items={[
            <>
              <Strong>HTTPS 암호화</Strong>: 모든 네트워크 트래픽은
              SSL/TLS로 암호화됩니다
            </>,
            <>
              <Strong>비밀번호 없는 인증</Strong>: 비밀번호를 저장하지
              않으며, 모든 로그인은 Apple과 Google을 통해 처리됩니다
            </>,
            <>
              <Strong>JWT 기반 세션 관리</Strong>: 세션은 안전한 임시
              토큰으로 관리됩니다
            </>,
            <>
              <Strong>속도 제한</Strong>: 무차별 대입 공격 및 남용을
              방지하기 위해 인증 및 민감한 엔드포인트는 IP별로 속도가
              제한됩니다
            </>,
            <>
              <Strong>접근 제어</Strong>: 데이터베이스 접근은 인가된
              시스템 계정으로 제한됩니다
            </>,
            <>
              <Strong>정기적인 보안 업데이트</Strong>: 당사 시스템은
              최신 상태로 유지됩니다
            </>,
          ]}
        />
        <p>
          다만, 인터넷을 통한 어떠한 전송 방식도 100% 안전하지 않다는
          점을 유념해 주시기 바랍니다.
        </p>
      </Section>

      <Divider />

      <Section title="8. 광고 및 추적">
        <SubHeading>8.1 본 앱의 광고</SubHeading>
        <p>
          ScoreHunter는 일부 광고로 운영됩니다. 본 앱은{" "}
          <Strong>Google AdMob</Strong>과 미디에이션을 통한 추가
          네트워크(AppLovin, Liftoff/Vungle, IronSource, Unity Ads,
          Meta Audience Network, InMobi)를 통해 광고를 표시합니다. 전체
          파트너 목록은 3.4항을 참고하세요.
        </p>
        <p>
          광고는 배너, 전면(인터스티셜), 보상형(리워드) 형식이 포함될 수
          있습니다. Pro 회원은 구독 등급에 따라 광고가 적거나 광고 없는
          경험을 누릴 수 있습니다.
        </p>

        <SubHeading>8.2 App Tracking Transparency(iOS)</SubHeading>
        <p>
          iOS 14.5 이상에서는 앱과 웹사이트 전반에 걸친 추적을 위해
          Apple이 사용자 권한 요청을 요구합니다. 본 앱을 처음 실행하면{" "}
          <Strong>App Tracking Transparency</Strong> 동의 창이
          표시됩니다:
        </p>
        <List
          items={[
            <>
              <Strong>&quot;허용&quot;</Strong>을 선택하시면, 개인화
              광고, 어트리뷰션, 노출 빈도 제한을 위해 IDFA가 광고
              파트너와 공유될 수 있습니다.
            </>,
            <>
              <Strong>
                &quot;앱이 추적하지 않도록 요청&quot;
              </Strong>
              을 선택하시면 IDFA가 수집되지 않습니다. 어트리뷰션은
              Apple의 개인정보 보호 프레임워크인{" "}
              <Strong>SKAdNetwork</Strong>를 사용하며, 표시되는 광고는
              비개인화됩니다.
            </>,
          ]}
        />
        <p>
          선택은{" "}
          <Strong>설정 → 개인정보 보호 및 보안 → 추적</Strong>에서
          언제든 변경할 수 있습니다.
        </p>

        <SubHeading>8.3 Android 광고 ID</SubHeading>
        <p>
          Android에서는 Google 광고 ID(GAID)가 광고 파트너에 의해 사용될
          수 있습니다. <Strong>설정 → Google → 광고</Strong>에서 광고
          ID를 언제든 <Strong>재설정</Strong> 또는{" "}
          <Strong>삭제</Strong>할 수 있습니다. 삭제하면 광고는
          비개인화로 표시됩니다.
        </p>

        <SubHeading>8.4 쿠키</SubHeading>
        <p>
          ScoreHunter 모바일 앱은{" "}
          <Strong>브라우저 쿠키를 사용하지 않습니다</Strong>. 모바일
          환경의 추적은 위에서 설명한 플랫폼 차원의 메커니즘에 따라
          이루어지며, 쿠키에 의해 수행되지 않습니다.
        </p>
      </Section>

      <Divider />

      <Section title="9. 국제 데이터 이전">
        <p>
          귀하의 데이터는 거주 국가 외부(AWS 프랑크푸르트 ― 유럽 연합과
          3.4항에 명시된 EU 외에 위치할 수 있는 광고 파트너의
          데이터센터)에서 처리될 수 있습니다. 이러한 이전은 GDPR 및
          KVKK가 요구하는 보안 표준을 준수합니다.
        </p>
      </Section>

      <Divider />

      <Section title="10. 본 방침의 변경">
        <p>
          당사는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다.
          변경 사항은 본 페이지에 게시된 시점부터 효력이 발생하며, 상단의
          &quot;최종 업데이트&quot; 날짜가 갱신됩니다. 중요한 변경
          사항은 앱 내 알림으로 안내됩니다.
        </p>
      </Section>

      <Divider />

      <Section title="11. 제3자 콘텐츠 및 상표">
        <p>
          ScoreHunter는 데이터 제공자인 API-Football로부터 제공되는
          축구 경기 데이터, 팀명, 리그명, 선수명 및 시각 자료(팀 및 리그
          로고 등)를 표시합니다. 이러한 명칭, 로고 및 상표는 축구 클럽,
          리그, 연맹 및 기타 권리자를 포함한 각 소유자에게 귀속됩니다.
        </p>
        <p>
          ScoreHunter는 본 앱에 등장하는 어떤 스포츠 리그, 연맹, 클럽,
          조직 또는 대회와도{" "}
          <Strong>
            제휴, 보증, 후원 또는 공식적인 관련이 없습니다
          </Strong>
          . 모든 제3자 명칭, 로고 및 상표는 사용자가 따라가고자 하는
          경기와 팀을 식별할 수 있도록, 식별 및 설명 목적(노미네이티브
          페어 유스)으로만 사용됩니다.
        </p>
        <p>
          귀하가 권리자이시고 본 앱 내에서 귀하의 상표 또는 저작물이
          부적절하게 사용되고 있다고 판단되시면,{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          으로 문의해 주시기 바랍니다. 당사는 요청을 검토하고 신속히
          회신하며, 적절한 경우 해당 콘텐츠를 삭제하거나 교체하겠습니다.
        </p>
      </Section>

      <Divider />

      <Section title="12. 연락처">
        <p>
          본 개인정보 처리방침이나 데이터 처리 요청에 관한 문의:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>이메일</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>개발자</Strong>: iCat Studios
          </p>
          <p>
            <Strong>웹사이트</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          GDPR 또는 KVKK에 따른 요청은 위 이메일 주소 또는 우편으로
          보내실 수 있습니다. <Strong>30일 이내</Strong>에
          답변드리겠습니다.
        </p>
      </Section>
    </>
  );
}
