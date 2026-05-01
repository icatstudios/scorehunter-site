import {
  Section,
  SubHeading,
  List,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function TermsContentKo() {
  return (
    <>
      <p>
        모바일 애플리케이션 ScoreHunter(이하 &quot;본 앱&quot;,
        &quot;서비스&quot;)을(를) 사용하기 전에 본 이용약관(이하
        &quot;약관&quot;)을 주의 깊게 읽어 주십시오. 본 앱을 다운로드하고
        사용하면 본 약관에 동의한 것으로 간주됩니다. 본 약관에 동의하지
        않으시면 본 앱을 사용하지 마십시오.
      </p>

      <Divider />

      <Section title="1. 정의">
        <List
          items={[
            <>
              <Strong>본 앱</Strong>: 모바일 애플리케이션 ScoreHunter 및
              관련 웹사이트
            </>,
            <>
              <Strong>개발자 / 당사 / 저희</Strong>: iCat Studios
            </>,
            <>
              <Strong>사용자 / 귀하</Strong>: 본 앱을 사용하는 자
            </>,
            <>
              <Strong>서비스</Strong>: 본 앱이 제공하는 모든 기능 및
              콘텐츠
            </>,
            <>
              <Strong>콘텐츠</Strong>: 경기 데이터, 예측 목록, 리더보드,
              트로피, 사용자 프로필 및 본 앱 내의 모든 기타 데이터
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. 서비스의 성격 — 중요">
        <SubHeading>2.1 ScoreHunter는 도박 애플리케이션이 아닙니다</SubHeading>
        <p>
          ScoreHunter는{" "}
          <Strong>축구 지식 기반의 예측 및 엔터테인먼트
          애플리케이션</Strong>
          입니다. 다음 사항은 본 앱의 본질적 성격이며 사용자께서 명확히
          이해하셔야 합니다:
        </p>
        <List
          items={[
            <>
              본 앱은 <Strong>실력 기반 게임</Strong>이며, 운에 의한
              게임이 아닙니다
            </>,
            <>
              본 앱에는{" "}
              <Strong>베팅 용어</Strong>(쿠폰, 배당률, 핸디캡, 마진,
              잭팟)가 포함되어 있지 않습니다
            </>,
            <>
              본 앱은 어떠한 경기에 대해서도{" "}
              <Strong>베팅 배당률</Strong>이나{" "}
              <Strong>당첨 배수</Strong>를 제공하지 않습니다
            </>,
            <>
              모든 경기는 예측 목적상{" "}
              <Strong>가치가 동일</Strong>합니다 — 어떤 경기도 다른
              경기보다 &quot;더 가치 있다&quot;고 할 수 없습니다
            </>,
            <>
              본 앱은 축구 팬이 즐거운 환경에서 지식과 직감을 겨룰 수
              있도록 합니다
            </>,
            <>
              주된 목적은{" "}
              <Strong>
                엔터테인먼트, 축구 문화, 커뮤니티 형성 및 지식 공유
              </Strong>
              입니다
            </>,
          ]}
        />

        <SubHeading>2.2 입금 또는 현금 상금이 없습니다</SubHeading>
        <List
          items={[
            <>
              본 앱을 플레이하거나 콘테스트에 참가하기 위해 실제 비용을
              지출할 <Strong>필요가 없습니다</Strong>
            </>,
            <>
              본 앱에는 <Strong>실제 돈으로 베팅</Strong>하거나{" "}
              <Strong>도박</Strong>을 할 수 있는 기능이{" "}
              <Strong>없습니다</Strong>
            </>,
            <>
              본 앱은 우승자에게{" "}
              <Strong>실제 현금 상금을 약속하지 않습니다</Strong>
            </>,
            <>
              본 앱에는{" "}
              <Strong>
                도박, 우연 게임, 복권 또는 베팅 요소가 일체 없습니다
              </Strong>
            </>,
            <>
              모든 사용자는{" "}
              <Strong>동등한 조건</Strong>으로 콘테스트에 참가합니다
            </>,
            <>
              Pro 멤버십과 같은 유료 기능은{" "}
              <Strong>
                콘테스트 결과에 영향을 주지 않습니다
              </Strong>{" "}
              — 사용자 경험을 향상시키는 추가 기능만을 제공합니다
            </>,
          ]}
        />

        <SubHeading>2.3 프로모션 보상</SubHeading>
        <p>
          개발자는 자체 재량으로, 우수한 사용자에게{" "}
          <Strong>프로모션성 상품</Strong>(유니폼, 축구공, 디지털
          상품권, 상징적인 선물 등)을 가끔 제공할 수 있습니다. 이러한
          상품에는 다음 조건이 적용됩니다:
        </p>
        <List
          items={[
            <>
              상품은{" "}
              <Strong>프로모션의 성격</Strong>을 가지며, 사용자의 참여를
              장려하는 데 목적이 있습니다
            </>,
            <>
              상품은 <Strong>보장되지 않습니다</Strong> — 개발자가
              공지하는 캠페인 범위 내에서만 제공됩니다
            </>,
            <>
              상품은 <Strong>실제 현금으로 지급되지 않습니다</Strong> —
              실물 또는 디지털 선물 형태로만 제공됩니다
            </>,
            <>
              상품의 부여, 분배, 배송은{" "}
              <Strong>전적으로 개발자의 책임입니다</Strong>
            </>,
            <>
              <Strong>
                Apple Inc., Apple App Store, Google LLC 및 Google Play
                Store는 이러한 상품에 대해 어떠한 책임도 지지 않습니다
              </Strong>
            </>,
            <>
              상품 수령자에 대해 주소, 신분 또는 기타 정보는 상품 배송
              목적에 한해 개발자가 요청할 수 있습니다
            </>,
          ]}
        />

        <SubHeading>2.4 연령 제한</SubHeading>
        <p>
          본 앱은{" "}
          <Strong>13세 이상</Strong>의 사용자를 대상으로 합니다. 13세
          미만은 본 앱을 사용할 수 없습니다. 본 앱을 사용함으로써
          사용자는 13세 이상임을 진술합니다.
        </p>
      </Section>

      <Divider />

      <Section title="3. 계정 생성 및 사용">
        <SubHeading>3.1 계정 생성</SubHeading>
        <p>
          본 앱의 일부 기능을 사용하려면 Apple로 로그인 또는 Google로
          로그인을 사용하여 계정을 생성해야 합니다. 계정 생성 시:
        </p>
        <List
          items={[
            "정확하고 최신의 정보를 제공해야 합니다",
            "생년월일을 정확히 신고해야 합니다",
            "다른 사람의 신원을 사용하여 계정을 만들 수 없습니다",
            "거짓되거나 오해를 일으키는 정보로 계정을 만들 수 없습니다",
            <>
              한 사람당 <Strong>하나의 계정</Strong>만 보유할 수 있습니다
            </>,
          ]}
        />

        <SubHeading>3.2 계정 보안</SubHeading>
        <p>
          귀하의 계정에서 발생하는 모든 활동은{" "}
          <Strong>전적으로 귀하의 책임</Strong>입니다. 계정 보안을
          유지하려면:
        </p>
        <List
          items={[
            "Apple ID 또는 Google 계정을 안전하게 보호하세요",
            "다른 사람이 계정에 접근하지 못하도록 하세요",
            "의심스러운 활동이 발견되면 즉시 개발자에게 알려야 합니다",
          ]}
        />

        <SubHeading>3.3 계정 해지</SubHeading>
        <p>
          개발자는 다음과 같은 경우 사용자의 계정을{" "}
          <Strong>사전 통지 없이 정지하거나 해지할</Strong> 권리를
          보유합니다:
        </p>
        <List
          items={[
            "본 약관 위반",
            "사기, 부정행위 또는 기만적 행위",
            "다른 사용자에 대한 괴롭힘, 모욕 또는 혐오 발언",
            "다중 계정 생성",
            "자동화 소프트웨어, 봇 또는 부정 도구 사용",
            "관련 법령에 위배되는 행위",
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. 적절한 사용">
        <SubHeading>4.1 금지 행위</SubHeading>
        <p>
          본 앱 사용 시 다음 행위는 <Strong>금지</Strong>됩니다:
        </p>
        <List
          items={[
            "허위 계정을 만들거나 다른 사람을 사칭하는 행위",
            "자동화 도구(봇, 스크립트)를 사용해 예측을 입력하는 행위",
            <>
              다른 사용자에게{" "}
              <Strong>
                부적절한 사용자명, 욕설, 모욕, 괴롭힘, 인종차별적,
                성차별적 또는 혐오적 표현
              </Strong>
              을 사용하는 행위
            </>,
            "본 앱의 보안 메커니즘을 우회하려는 시도",
            "본 앱의 리버스 엔지니어링, 디컴파일 또는 디스어셈블 행위",
            "허가 없이 본 앱의 콘텐츠를 복제, 배포 또는 상업적으로 이용하는 행위",
            "스팸, 광고 또는 홍보 콘텐츠를 공유하는 행위(리그명, 사용자명 등에 게재 포함)",
            "서버에 과도한 부하를 주거나 서비스를 방해하는 시도",
          ]}
        />

        <SubHeading>4.2 제재</SubHeading>
        <p>
          이러한 행위가 확인되면 개발자는 사전 통지 없이 사용자의
          계정을 정지하거나 리더보드에서 제외하거나 영구적으로 삭제할
          권리를 보유합니다.
        </p>
      </Section>

      <Divider />

      <Section title="5. 지식재산권">
        <SubHeading>5.1 본 앱의 소유권</SubHeading>
        <p>
          ScoreHunter의 명칭, 로고, 비주얼, 디자인, 소스 코드, 콘텐츠
          및 모든 지식재산권은{" "}
          <Strong>iCat Studios에 귀속됩니다</Strong>. 이러한 콘텐츠는
          다음과 같이 보호됩니다:
        </p>
        <List
          items={[
            "저작권",
            "상표 등록",
            "영업 비밀",
            "기타 적용되는 지식재산권",
          ]}
        />

        <SubHeading>5.2 제3자 콘텐츠 및 상표</SubHeading>
        <p>
          본 앱은 축구 경기 데이터, 팀 및 리그 명, 선수명, 팀 및 리그
          로고와 같은 시각 자료를 포함하되 이에 한정되지 않는 제3자
          콘텐츠를 표시합니다. 이러한 콘텐츠는 데이터 파트너인
          API-Football을 통해 제공되며, 축구 클럽, 리그, 연맹 및 기타
          권리자를 포함한 각 소유자에게 귀속됩니다. ScoreHunter는 본
          앱 내에 표시된 제3자의 상표, 로고 또는 저작물에 대한
          소유권을 주장하지 않습니다.
        </p>
        <p>
          ScoreHunter는 본 앱에 언급되거나 표시된 어떠한 리그, 연맹,
          클럽, 대회 또는 조직과도{" "}
          <Strong>
            제휴, 보증, 후원되거나 어떠한 공식적 관련도 없습니다
          </Strong>
          . 모든 제3자 명칭, 로고, 상표는 사용자가 따라가고자 하는
          경기와 팀을 식별할 수 있도록 노미네이티브 페어 유스 원칙에
          따라 식별 및 설명 목적으로만 사용됩니다.
        </p>
        <p>귀하는 다음에 동의합니다:</p>
        <List
          items={[
            <>
              본 앱에 표시된 제3자 콘텐츠를 통상적인 개인적 사용 범위를
              벗어나 추출, 복사, 재배포 또는 기타 방식으로 재사용
              <Strong>하지 않을 것</Strong>;
            </>,
            <>
              본 앱을 이용해 어떠한 제3자의 지식재산권도 침해
              <Strong>하지 않을 것</Strong>;
            </>,
            <>
              본 앱에 표시된 제3자 콘텐츠를{" "}
              <Strong>상업적으로 이용</Strong>하기 위해서는 해당
              권리자로부터 직접 라이선스 또는 허가를 받아야 합니다.
            </>,
          ]}
        />
        <p>
          귀하가 권리자이시고 귀하의 상표 또는 저작물의 무단 사용을
          본 앱에서 신고하시려면{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          으로 문의해 주십시오. 당사는 정당한 삭제 요청에 대해{" "}
          <Strong>30일(30) 이내</Strong>에 응답하며, 적절한 경우 해당
          콘텐츠를 삭제하거나 교체합니다.
        </p>

        <SubHeading>5.3 사용자 콘텐츠</SubHeading>
        <p>
          본 앱을 사용하는 동안 귀하가 생성한 콘텐츠(예측 목록, 리그
          이름, 사용자명, 프로필 정보)는 귀하의 소유입니다. 그러나 본
          앱을 사용함으로써 귀하는 개발자에게 본 앱 내에서 그리고 다른
          사용자에게 해당 콘텐츠를 표시, 저장, 공유할 수 있는{" "}
          <Strong>
            무료, 무제한, 양도 가능한 사용권
          </Strong>
          을 부여합니다.
        </p>
      </Section>

      <Divider />

      <Section title="6. 면책 조항">
        <SubHeading>6.1 &quot;있는 그대로&quot; 제공</SubHeading>
        <p>
          본 앱은 &quot;<Strong>있는 그대로</Strong>&quot; 그리고
          &quot;<Strong>제공 가능한 상태</Strong>&quot;로
          제공됩니다. 개발자는 다음 사항에 관하여{" "}
          <Strong>어떠한 보장도 하지 않습니다</Strong>:
        </p>
        <List
          items={[
            "본 앱이 오류 없이, 중단 없이 또는 안전하게 작동할 것",
            <>
              경기 데이터, 점수 또는 통계가{" "}
              <Strong>항상 정확하고 최신일 것</Strong>
            </>,
            <>
              예측 결과 또는 점수가{" "}
              <Strong>항상 제때 계산될 것</Strong>
            </>,
            "서버 중단이 발생하지 않을 것",
            "본 앱이 특정 기기 또는 운영체제에서 작동할 것",
          ]}
        />

        <SubHeading>6.2 경기 데이터 및 제3자 콘텐츠</SubHeading>
        <p>
          경기 데이터, 점수, 라인업, 시간 정보 및 통계는{" "}
          <Strong>
            제3자 API 서비스(API-Football)
          </Strong>
          로부터 받습니다. 개발자는 이러한 데이터의 정확성, 최신성,
          완전성에 대해{" "}
          <Strong>책임을 지지 않습니다</Strong>. 본 앱을 사용함으로써
          사용자는 데이터에서 지연, 오류 또는 누락이 발생할 수 있음을
          인정합니다.
        </p>
        <p>
          법이 허용하는 최대 범위에서, ScoreHunter와 iCat Studios는 본
          앱에 표시되는 경기 데이터, 팀 정보, 통계 또는 기타 제3자
          콘텐츠의 정확성, 완전성 또는 적시성에 대하여{" "}
          <Strong>어떠한 보장도 하지 않습니다</Strong>. 그러한
          콘텐츠는 모두 데이터 파트너를 통해 &quot;
          <Strong>있는 그대로</Strong>&quot;
          제공되며, ScoreHunter는 해당 데이터의 오류, 누락 또는
          지연에 대해 책임을 지지 않습니다.
        </p>

        <SubHeading>6.3 책임의 제한</SubHeading>
        <p>
          개발자는 본 앱의 사용으로 인해 발생하거나 그와 관련된{" "}
          <Strong>
            직접적, 간접적, 부수적, 특별 또는 결과적 손해에 대해 책임을
            지지 않습니다
          </Strong>
          . 이는 다음을 포함하되 이에 한정되지 않습니다:
        </p>
        <List
          items={[
            "데이터 손실",
            "유무형의 손해",
            "획득 가능했던 트로피, 상품 또는 순위의 상실",
            "기기의 오작동",
            "제3자 서비스의 중단",
          ]}
        />
      </Section>

      <Divider />

      <Section title="7. Apple 및 Google 면책">
        <SubHeading>7.1 Apple Inc.에 관하여</SubHeading>
        <p>
          본 앱은 iOS 버전의 경우 Apple App Store를 통해 배포됩니다.
          이와 관련하여:
        </p>
        <List
          items={[
            <>
              <Strong>
                Apple Inc.는 본 앱이나 그 콘텐츠에 대해 어떠한 책임도
                지지 않습니다
              </Strong>
            </>,
            "Apple은 앱의 오작동, 오류, 상품 미배송 또는 기타 모든 사항에 대해 책임을 지지 않습니다",
            <>
              본 앱이 본 이용약관을 위반하더라도 Apple Inc.는{" "}
              <Strong>어떠한 의무도 지지 않습니다</Strong>
            </>,
            <>
              본 앱의 유지관리, 지원 및 사용자 서비스 제공은{" "}
              <Strong>
                전적으로 iCat Studios의 책임입니다
              </Strong>
            </>,
            <>
              <Strong>
                본 앱 내에서 제공되는 모든 상품, 콘테스트, 캠페인 또는
                프로모션은 Apple Inc.와 무관합니다
              </Strong>{" "}
              — Apple은 어떠한 형태로도 후원자, 주최자 또는 관리자가
              아닙니다
            </>,
            "Apple Inc.는 본 앱 내에서 발생하는 법적 문제 또는 청구에 대해 일체의 책임이 면제됩니다",
            "본 앱과 그 콘텐츠는 Apple의 지식재산권을 존중해야 합니다",
            <>
              본 앱의 사용자는{" "}
              <Strong>
                Apple Inc.를 상대로 직접 청구를 제기할 수 없습니다
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc.는 본 약관의 제3자 수익자
              </Strong>
              로서 필요한 경우 본 약관을 집행할 수 있습니다
            </>,
          ]}
        />

        <SubHeading>7.2 Google LLC에 관하여</SubHeading>
        <p>
          본 앱은 Android 버전의 경우 Google Play Store를 통해
          배포됩니다. 이와 관련하여:
        </p>
        <List
          items={[
            <>
              <Strong>
                Google LLC는 본 앱이나 그 콘텐츠에 대해 어떠한 책임도
                지지 않습니다
              </Strong>
            </>,
            "Google은 앱의 오작동, 오류, 상품 미배송 또는 기타 모든 사항에 대해 책임을 지지 않습니다",
            <>
              본 앱의 유지관리, 지원 및 사용자 서비스 제공은{" "}
              <Strong>
                전적으로 iCat Studios의 책임입니다
              </Strong>
            </>,
            <>
              <Strong>
                본 앱 내에서 제공되는 모든 상품, 콘테스트, 캠페인 또는
                프로모션은 Google LLC와 무관합니다
              </Strong>{" "}
              — Google은 어떠한 형태로도 후원자, 주최자 또는 관리자가
              아닙니다
            </>,
            "Google Play Store는 본 앱의 배포 플랫폼일 뿐이며 본 앱의 콘텐츠나 운영에 대해 어떠한 책임도 지지 않습니다",
          ]}
        />

        <SubHeading>7.3 Apple Sign-In 및 Google Sign-In</SubHeading>
        <p>
          본 앱은 인증을 위해 Apple Sign-In 및 Google Sign-In 서비스를
          이용합니다. 이러한 서비스의 운영, 유지관리 및 보안은 각
          제공자에게 있습니다. 이러한 서비스의 중단이나 문제에 대해
          개발자는 책임을 지지 않습니다.
        </p>
      </Section>

      <Divider />

      <Section title="8. 유료 기능 및 구독">
        <p>
          본 앱은 유료 기능(&quot;Pro 멤버십&quot; 또는 유사한 항목)을
          제공할 수 있습니다. 유료 기능이 추가되는 경우:
        </p>
        <List
          items={[
            <>
              모든 결제는 <Strong>Apple App Store</Strong> 또는{" "}
              <Strong>Google Play Store</Strong>를 통해 처리됩니다
            </>,
            "결제, 환불, 구독 관리는 해당 플랫폼의 정책을 따릅니다",
            <>
              <Strong>
                환불 요청은 Apple 또는 Google에 제출해야 합니다
              </Strong>{" "}
              — 환불 요청을 개발자에게 직접 보낼 수 없습니다
            </>,
            <>
              유료 기능은 사용자에게{" "}
              <Strong>추가적인 경험</Strong>만을 제공하며, 콘테스트
              결과나 순위에 영향을 주지 않습니다
            </>,
            <>
              유료 기능은{" "}
              <Strong>승리를 보장하지 않습니다</Strong> — 모든 사용자는
              콘테스트에서 동등합니다
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="9. 게임 규칙 및 메커니즘">
        <p>
          본 앱의 현재 게임 규칙, 점수 산정 메커니즘, 미니 게임 설명
          및 순위 산정 방식은 <Strong>본 앱 내</Strong>에 표시됩니다.
          개발자는{" "}
          <Strong>
            사전 통지 없이 게임 규칙을 변경할
          </Strong>{" "}
          권리를 보유합니다. 중요한 변경 사항은 앱 내 알림으로
          공지됩니다.
        </p>
      </Section>

      <Divider />

      <Section title="10. 서비스의 변경 또는 종료">
        <p>
          개발자는 어떠한 시기에 어떠한 사유로든 다음을 할 수 있습니다:
        </p>
        <List
          items={[
            "본 앱의 기능 변경, 추가 또는 삭제",
            "본 앱의 일시 중단",
            "본 앱의 완전 종료",
            "특정 지역에서의 서비스 중단",
          ]}
        />
        <p>
          사용자는 그러한 변경을 이유로 어떠한 보상도 청구할 수
          없습니다.
        </p>
      </Section>

      <Divider />

      <Section title="11. 본 약관의 변경">
        <p>
          개발자는{" "}
          <Strong>
            언제든지 본 이용약관을 업데이트할
          </Strong>{" "}
          권리를 보유합니다. 중요한 변경 사항은:
        </p>
        <List
          items={[
            "본 페이지에 게시됩니다",
            <>
              상단의 &quot;최종 업데이트&quot; 날짜를 갱신합니다
            </>,
            "앱 내 알림으로 전송될 수 있습니다",
          ]}
        />
        <p>
          변경 사항이 게시된 후에도 본 앱을 계속 사용하시면 업데이트된
          약관에 동의한 것으로 간주됩니다.
        </p>
      </Section>

      <Divider />

      <Section title="12. 준거법 및 관할">
        <p>
          본 약관은 <Strong>튀르키예 공화국 법률</Strong>의 적용을
          받습니다. 본 약관에서 발생하거나 이와 관련된 분쟁은{" "}
          <Strong>이스탄불 법원 및 집행 사무소</Strong>에서 해결됩니다.
        </p>
      </Section>

      <Divider />

      <Section title="13. 연락처">
        <p>본 이용약관에 관한 문의:</p>
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
      </Section>
    </>
  );
}
