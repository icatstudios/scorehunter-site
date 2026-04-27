import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentTr() {
  return (
    <>
      <p>
        iCat Studios (&quot;biz&quot;, &quot;bize&quot;, &quot;bizim&quot;)
        olarak, ScoreHunter mobil uygulamasını (&quot;Uygulama&quot;)
        kullanan kullanıcılarımızın (&quot;siz&quot;, &quot;sizin&quot;)
        gizliliğine önem veriyoruz. Bu Gizlilik Politikası, uygulamayı
        kullanırken hangi kişisel verileri topladığımızı, nasıl
        kullandığımızı, kiminle paylaştığımızı ve haklarınızı açıklar.
      </p>
      <p>
        Uygulamayı kullanarak bu Gizlilik Politikası&apos;nı kabul etmiş
        olursunuz.
      </p>

      <Divider />

      <Section title="1. Topladığımız Veriler">
        <SubHeading>1.1 Hesap Bilgileri</SubHeading>
        <p>
          Apple ile Giriş Yap veya Google ile Giriş Yap özelliklerini
          kullandığınızda, aşağıdaki bilgileri Apple veya Google&apos;dan
          alırız:
        </p>
        <List
          items={[
            <>
              <Strong>E-posta adresi</Strong> (Apple &quot;E-postamı
              Gizle&quot; seçeneğini kullanırsanız relay email alınır)
            </>,
            <>
              <Strong>Ad ve soyad</Strong> (Apple yalnızca ilk giriş
              sırasında, Google her giriş sırasında sağlar)
            </>,
            <>
              <Strong>Benzersiz kimlik (Provider User ID)</Strong> —
              hesabınızı tanımlamak için
            </>,
          ]}
        />

        <SubHeading>1.2 Profil Bilgileri</SubHeading>
        <p>Uygulama içinde sizden doğrudan aldığımız bilgiler:</p>
        <List
          items={[
            <>
              <Strong>Kullanıcı adı</Strong> (gösterim adı — sıralamalarda
              görünür)
            </>,
            <>
              <Strong>Ülke</Strong>
            </>,
            <>
              <Strong>Favori futbol takımı</Strong>
            </>,
            <>
              <Strong>Doğum tarihi</Strong>
            </>,
            <>
              <Strong>Cinsiyet</Strong> (opsiyonel — &quot;belirtmek
              istemiyorum&quot; seçeneği mevcuttur)
            </>,
            <>
              <Strong>Pro abonelik durumu</Strong> — aktif bir Pro
              üyeliğinizin olup olmadığı ve son kullanma tarihi
            </>,
          ]}
        />

        <SubHeading>1.3 Kullanım Verileri</SubHeading>
        <p>Uygulamayı kullanırken oluşturduğunuz veriler:</p>
        <List
          items={[
            <>
              <Strong>Tahmin listeleri</Strong> (Score Hunt ve mini oyunlar
              için seçtiğiniz maçlar ve tahminleriniz)
            </>,
            <>
              <Strong>Katıldığınız ligler</Strong>
            </>,
            <>
              <Strong>Kazandığınız kupalar ve başarılar</Strong>
            </>,
            <>
              <Strong>Haftalık ve sezonluk sıralama puanlarınız</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Cihaz ve Uygulama Bilgileri</SubHeading>
        <List
          items={[
            <>
              <Strong>Cihaz kimliği</Strong> (Device ID — anonim oturum
              yönetimi için)
            </>,
            <>
              <Strong>İşletim sistemi bilgisi</Strong> (iOS/Android sürümü)
            </>,
            <>
              <Strong>Uygulama sürümü ve platform</Strong> (sürüm kodu, sürüm
              adı ve iOS mu Android mi olduğu) — sürüme özel destek sağlamak
              ve uyumluluk sorunlarını tespit etmek için kullanılır
            </>,
            <>
              <Strong>Push bildirim tokenı</Strong> — Apple Push Notification
              service (APNs) veya Firebase Cloud Messaging (FCM) tarafından
              verilen benzersiz bir token; maç hatırlatmaları, ödül
              bildirimleri ve önemli duyuruları size iletmek için
              kullanılır. Push bildirimlerini cihaz ayarlarınızdan dilediğiniz
              zaman kapatabilirsiniz.
            </>,
          ]}
        />

        <SubHeading>1.5 Reklam Tanımlayıcısı</SubHeading>
        <p>
          Uygulama, <Strong>yalnızca açık rızanızla</Strong>{" "}
          <Strong>Reklam Tanımlayıcınızı</Strong> (iOS&apos;ta IDFA,
          Android&apos;de GAID/Reklam Kimliği) toplayabilir:
        </p>
        <List
          items={[
            <>
              <Strong>iOS</Strong>&apos;ta, Uygulamayı ilk kez başlattığınızda{" "}
              <Strong>App Tracking Transparency (ATT)</Strong> izin penceresi
              gösterilir. &quot;Uygulamanın İzlememesini İste&quot; seçeneğini
              seçerseniz IDFA toplanmaz ve reklam ortaklarımız yalnızca
              Apple&apos;ın gizliliği koruyan SKAdNetwork bilgisini alır.
            </>,
            <>
              <Strong>Android</Strong>&apos;de, GAID&apos;i{" "}
              <Strong>
                Ayarlar → Google → Reklamlar → Reklam kimliğini sil
              </Strong>{" "}
              yolundan kaldırmadığınız sürece toplanır.
            </>,
            <>
              Toplandığında, Reklam Tanımlayıcısı reklam atıfı ve frekans
              sınırlandırma için 3.4 numaralı bölümde listelenen reklam
              ortaklarımızla paylaşılır.
            </>,
          ]}
        />

        <SubHeading>1.6 Otomatik Toplanan Veriler</SubHeading>
        <List
          items={[
            <>
              <Strong>IP adresi</Strong> — kimlik doğrulama uç noktalarında
              hız sınırlandırması (örn. IP başına dakikada en fazla 15 giriş
              denemesi) ve kötüye kullanım önleme dahil güvenlik amaçlarıyla
              kullanılır. IP adreslerini reklam profili oluşturmak için
              kullanmıyoruz.
            </>,
            <>
              <Strong>Hata ve çökme raporları</Strong> — uygulama
              stabilitesini izlemek için kullanılır. Raporlar, kişisel
              tanımlayıcı bilgileri içermeyecek şekilde filtrelenir.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Verilerinizi Nasıl Kullanıyoruz?">
        <p>Topladığımız verileri aşağıdaki amaçlarla kullanırız:</p>
        <List
          items={[
            <>
              <Strong>Hesap oluşturma ve yönetimi</Strong>: Uygulamaya giriş
              yapmanızı sağlamak
            </>,
            <>
              <Strong>Oyun deneyimi</Strong>: Tahmin listelerinizi kaydetmek,
              puanlarınızı hesaplamak, sıralamaları oluşturmak
            </>,
            <>
              <Strong>Kişiselleştirme</Strong>: Favori takımınızı ve ülkenizi
              sıralamalarda göstermek
            </>,
            <>
              <Strong>Pro abonelik yönetimi</Strong>: Abonelik durumunuzu
              doğrulamak ve Pro özelliklerine erişiminizi sağlamak
            </>,
            <>
              <Strong>İletişim</Strong>: Önemli güncellemeler, duyurular,
              ödül bildirimleri ve uygulama hakkında push bildirimleri
              göndermek
            </>,
            <>
              <Strong>Ödül teslimi</Strong>: Yarışma kazananlarına fiziksel
              veya dijital ödül göndermek (ad-soyad ve e-posta gerektirir)
            </>,
            <>
              <Strong>Hesap güvenliği</Strong>: Sahte hesapları önlemek,
              kullanıcı kimliğini doğrulamak ve şüpheli aktivitelere hız
              sınırı uygulamak
            </>,
            <>
              <Strong>Reklamcılık</Strong>: Uygulama içinde reklam göstermek
              ve performansını ölçmek — ayrıntılar için 8. bölüme bakın
            </>,
            <>
              <Strong>Analitik ve iyileştirme</Strong>: Kullanım
              istatistiklerini anonim olarak analiz etmek ve uygulamayı
              geliştirmek
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Verilerinizi Kimlerle Paylaşıyoruz?">
        <p>
          ScoreHunter,{" "}
          <Strong>
            kişisel verilerinizi üçüncü taraflara satmaz veya kiralamaz
          </Strong>
          . Verilerinizi yalnızca aşağıda listelenen güvenilir hizmet
          sağlayıcılar ve reklam ortakları ile, yalnızca uygulamanın
          işletilmesi için gerekli olduğu ölçüde paylaşırız.
        </p>

        <SubHeading>3.1 Hizmet Sağlayıcılar</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — Sunucu ve
              veritabanı barındırma (Frankfurt, Almanya)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — Maç verileri, takım ve lig bilgileri ile bunlara ait
              görsel materyalleri (logolar ve görseller) sağlayan üçüncü
              taraf servis. API-Football ile kişisel verileriniz
              paylaşılmaz. ScoreHunter, bu hizmet üzerinden gelen logolar
              veya markalar üzerinde mülkiyet hakkına sahip değildir;
              ayrıntılar için 11. bölüme bakın.
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In kimlik doğrulama
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In kimlik doğrulama ve
              Firebase Cloud Messaging (Android&apos;de push bildirimleri)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — iOS&apos;ta Pro abonelik
              satın alımlarını ve yenilemelerini işler
            </>,
            <>
              <Strong>Google Play Billing</Strong> — Android&apos;de Pro
              abonelik satın alımlarını ve yenilemelerini işler
            </>,
            <>
              <Strong>Sentry</Strong> — Backend hata ve istisna izleme
              servisi. Kişisel tanımlayıcı bilgi filtreleme aktiftir
              (Sentry&apos;ye e-posta, isim veya kullanıcı içeriği
              gönderilmez).
            </>,
          ]}
        />
        <p>
          Bu hizmet sağlayıcılar yalnızca bizim adımıza ve talimatlarımız
          doğrultusunda veri işler.
        </p>

        <SubHeading>3.2 Yasal Gereklilikler</SubHeading>
        <p>
          Mahkeme kararı, yasal soruşturma veya yasal bir yükümlülük söz
          konusu olduğunda verileriniz yetkili mercilerle paylaşılabilir.
        </p>

        <SubHeading>3.3 Diğer Kullanıcılara Görünen Bilgiler</SubHeading>
        <p>
          Aşağıdaki bilgileriniz uygulamanın sıralama ve profil ekranlarında{" "}
          <Strong>diğer kullanıcılar tarafından görülebilir</Strong>:
        </p>
        <List
          items={[
            "Kullanıcı adınız (gösterim adı)",
            "Ülke bayrağınız",
            "Favori takımınız",
            "Kazandığınız kupalar",
            "Tahmin puanlarınız ve istatistikleriniz",
            "Aktif bir aboneliğiniz varsa Pro üyelik rozeti",
          ]}
        />
        <p>
          Aşağıdaki bilgileriniz{" "}
          <Strong>hiçbir zaman uygulama içinde gösterilmez</Strong>:
        </p>
        <List
          items={[
            "E-posta adresiniz",
            "Gerçek adınız ve soyadınız",
            "Doğum tarihiniz",
            "Cinsiyetiniz",
            "Cihaz bilgileriniz",
            "Reklam tanımlayıcınız",
            "Aboneliğinizin son kullanma tarihi",
          ]}
        />

        <SubHeading>3.4 Reklam Ortakları</SubHeading>
        <p>
          Uygulama, çeşitli reklam ağları üzerinden (zaman zaman{" "}
          <em>mediation</em> olarak adlandırılan yöntemle) reklam
          göstermektedir. Takip edilmeye onay verdiğinizde, Reklam
          Tanımlayıcınız ve sınırlı teknik veri reklam sunumu, atıf ve
          frekans sınırlandırma amacıyla aşağıdaki ortaklarla paylaşılabilir.
          Her ortağın kendi gizlilik politikası vardır:
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

      <Section title="4. Verilerinizi Nerede ve Ne Kadar Süre Saklıyoruz?">
        <SubHeading>4.1 Veri Saklama Yeri</SubHeading>
        <p>
          Tüm kullanıcı verileri{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>{" "}
          veri merkezlerinde saklanır. Veritabanı olarak Amazon RDS PostgreSQL
          hizmeti kullanılır.
        </p>

        <SubHeading>4.2 Saklama Süresi</SubHeading>
        <List
          items={[
            <>
              <Strong>Aktif hesaplar</Strong>: Hesabınız aktif olduğu sürece
              verileriniz saklanır
            </>,
            <>
              <Strong>Pasif hesaplar</Strong>: 2 yıl boyunca uygulamaya giriş
              yapmayan hesaplar otomatik olarak silinir
            </>,
            <>
              <Strong>Silinmiş hesaplar</Strong>: Hesabınızı sildiğinizde
              kişisel verileriniz 30 gün içinde kalıcı olarak silinir
              (yedeklerden de)
            </>,
            <>
              <Strong>Anonim istatistikler</Strong>: Silme sonrasında anonim
              toplu istatistikler saklanabilir (kişisel bilgi içermez)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Haklarınız">
        <p>
          KVKK (Türkiye) ve GDPR (Avrupa) kapsamında aşağıdaki haklara
          sahipsiniz:
        </p>
        <List
          items={[
            <>
              <Strong>Erişim hakkı</Strong>: Hangi verilerinizi işlediğimizi
              öğrenme
            </>,
            <>
              <Strong>Düzeltme hakkı</Strong>: Yanlış veya eksik verilerinizin
              düzeltilmesini isteme
            </>,
            <>
              <Strong>Silme hakkı (&quot;unutulma hakkı&quot;)</Strong>:
              Verilerinizin silinmesini talep etme
            </>,
            <>
              <Strong>İşlemeyi kısıtlama hakkı</Strong>: Verilerinizin belirli
              amaçlarla işlenmesini sınırlama
            </>,
            <>
              <Strong>Veri taşınabilirliği hakkı</Strong>: Verilerinizin
              makine tarafından okunabilir formatta size verilmesini isteme
            </>,
            <>
              <Strong>İtiraz hakkı</Strong>: Veri işlemeye itiraz etme
            </>,
            <>
              <Strong>Onayı geri çekme hakkı</Strong> (reklam takibi):
              iOS&apos;ta ATT iznini{" "}
              <Strong>
                Ayarlar → Gizlilik ve Güvenlik → İzleme
              </Strong>{" "}
              yolundan dilediğiniz zaman geri alabilir veya
              Android&apos;de reklam kimliğinizi sıfırlayıp silebilirsiniz
            </>,
          ]}
        />

        <SubHeading>Hesabınızı Nasıl Silebilirsiniz?</SubHeading>
        <p>Hesabınızı silmek için üç yöntem mevcuttur:</p>
        <OrderedList
          items={[
            <>
              <Strong>Uygulama içinden</Strong>: Profil sayfası → Hesap
              Ayarları → Hesabı Sil
            </>,
            <>
              <Strong>Web üzerinden</Strong>:{" "}
              <Anchor href="/tr/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>E-posta ile</Strong>: Aşağıdaki iletişim adresine talep
              gönderin
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Çocukların Gizliliği">
        <p>
          ScoreHunter <Strong>13 yaşın altındaki</Strong> kullanıcılara
          yönelik tasarlanmamıştır. 13 yaşın altındaki bir çocuktan bilerek
          kişisel veri toplamayız. 13 yaşın altındaki bir çocuğun kişisel
          verilerinin bize iletildiğinden haberdar olursak, bu verileri
          mümkün olan en kısa sürede sileriz.
        </p>
        <p>
          13 ile 18 yaş arası kullanıcılara, bu Gizlilik Politikası&apos;nı
          ebeveyn veya vasileri ile birlikte gözden geçirmelerini öneririz.
          Doğum tarihi bilgisine göre küçük yaşta görünen kullanıcılara
          uygulama içinde gösterilen reklamlar{" "}
          <Strong>
            kişiselleştirilmemiş / aile dostu ayarlarla
          </Strong>{" "}
          yapılandırılır.
        </p>
        <p>
          Ebeveynler veya velayet sahipleri, çocuklarının bu uygulamayı
          kullandığını düşünüyorlarsa bizimle iletişime geçebilirler.
        </p>
      </Section>

      <Divider />

      <Section title="7. Veri Güvenliği">
        <p>
          Verilerinizi korumak için endüstri standardı güvenlik önlemleri
          alıyoruz:
        </p>
        <List
          items={[
            <>
              <Strong>HTTPS şifrelemesi</Strong>: Tüm ağ trafiği SSL/TLS ile
              şifrelenir
            </>,
            <>
              <Strong>Parolasız kimlik doğrulama</Strong>: Parola
              saklamıyoruz; tüm girişler Apple ve Google üzerinden yapılır
            </>,
            <>
              <Strong>JWT tabanlı oturum yönetimi</Strong>: Oturumlar güvenli
              ve geçici token&apos;larla yönetilir
            </>,
            <>
              <Strong>Hız sınırlandırma</Strong>: Kimlik doğrulama ve hassas
              uç noktalar, brute-force ve kötüye kullanımı önlemek için IP
              başına hız sınırlandırılır
            </>,
            <>
              <Strong>Erişim kontrolü</Strong>: Veritabanı erişimi yalnızca
              yetkilendirilmiş sistem hesaplarıyla yapılır
            </>,
            <>
              <Strong>Düzenli güvenlik güncellemeleri</Strong>: Sistemlerimiz
              güncel tutulur
            </>,
          ]}
        />
        <p>
          Ancak, internet üzerinden hiçbir iletim yönteminin %100 güvenli
          olmadığını unutmayın.
        </p>
      </Section>

      <Divider />

      <Section title="8. Reklamcılık ve İzleme">
        <SubHeading>8.1 Uygulama İçi Reklamlar</SubHeading>
        <p>
          ScoreHunter, kısmen reklam gelirleri ile desteklenmektedir. Uygulama{" "}
          <Strong>Google AdMob</Strong> ve mediation üzerinden ek ağlar
          aracılığıyla reklam gösterir (AppLovin, Liftoff/Vungle, IronSource,
          Unity Ads, Meta Audience Network, InMobi). Tam ortak listesi için
          3.4 numaralı bölüme bakın.
        </p>
        <p>
          Reklamlar banner, geçiş (interstitial) ve ödüllü (rewarded)
          formatlarında olabilir. Pro üyeler, abonelik kademesine bağlı
          olarak azaltılmış reklam veya reklamsız bir deneyim yaşayabilir.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          iOS 14.5 ve sonrası sürümlerde Apple, sizi uygulamalar ve web
          siteleri arasında izleyebilmemiz için izninizi istemekle bizi
          yükümlü tutar. Uygulamayı ilk kez başlattığınızda{" "}
          <Strong>App Tracking Transparency</Strong> izin penceresi
          gösterilir:
        </p>
        <List
          items={[
            <>
              <Strong>&quot;İzin Ver&quot;</Strong> seçerseniz, IDFA&apos;nız
              kişiselleştirilmiş reklamlar, atıf ve frekans sınırlandırma
              için reklam ortaklarımızla paylaşılabilir.
            </>,
            <>
              <Strong>&quot;Uygulamanın İzlememesini İste&quot;</Strong>{" "}
              seçerseniz, IDFA toplanmaz. Atıf için Apple&apos;ın gizliliği
              koruyan <Strong>SKAdNetwork</Strong> çerçevesini kullanırız ve
              gördüğünüz reklamlar kişiselleştirilmemiş olur.
            </>,
          ]}
        />
        <p>
          Kararınızı dilediğiniz zaman{" "}
          <Strong>
            Ayarlar → Gizlilik ve Güvenlik → İzleme
          </Strong>{" "}
          yolundan değiştirebilirsiniz.
        </p>

        <SubHeading>8.3 Android Reklam Kimliği</SubHeading>
        <p>
          Android&apos;de, Google Reklam Kimliğiniz (GAID) reklam ortaklarımız
          tarafından kullanılabilir. Reklam kimliğinizi dilediğiniz zaman{" "}
          <Strong>Ayarlar → Google → Reklamlar</Strong> yolundan{" "}
          <Strong>sıfırlayabilir</Strong> veya{" "}
          <Strong>silebilirsiniz</Strong>. Silindiğinde, gösterilen reklamlar
          kişiselleştirilmemiş olur.
        </p>

        <SubHeading>8.4 Çerezler</SubHeading>
        <p>
          ScoreHunter mobil uygulaması{" "}
          <Strong>tarayıcı çerezi kullanmaz</Strong>. Mobilde izleme,
          çerezler değil yukarıda açıklanan platform düzeyindeki
          mekanizmalarla yönetilir.
        </p>
      </Section>

      <Divider />

      <Section title="9. Uluslararası Veri Aktarımı">
        <p>
          Verileriniz Türkiye dışında (AWS Frankfurt — Avrupa Birliği ve 3.4
          bölümünde listelenen, AB dışında bulunabilen reklam ortaklarımızın
          veri merkezleri) işlenebilir. Bu aktarımlar, GDPR ve KVKK&apos;nın
          gerekli güvenlik standartlarına uygundur.
        </p>
      </Section>

      <Divider />

      <Section title="10. Politika Değişiklikleri">
        <p>
          Bu Gizlilik Politikası&apos;nı zaman zaman güncelleyebiliriz.
          Değişiklikler bu sayfada yayımlandıktan sonra geçerli olur ve
          sayfanın üstündeki &quot;Son güncelleme&quot; tarihi yenilenir.
          Önemli değişikliklerde uygulama içi bildirim gönderilir.
        </p>
      </Section>

      <Divider />

      <Section title="11. Üçüncü Taraf İçerikleri ve Markalar">
        <p>
          ScoreHunter, futbol maç verilerini, takım isimlerini, lig
          isimlerini, oyuncu isimlerini ve görsel materyalleri (takım ve
          lig logoları gibi) veri sağlayıcımız API-Football aracılığıyla
          göstermektedir. Bu isimler, logolar ve markalar; futbol kulüpleri,
          ligler, federasyonlar ve diğer hak sahipleri dahil olmak üzere
          ilgili sahiplerinin mülkiyetindedir.
        </p>
        <p>
          ScoreHunter, uygulamada yer alan herhangi bir spor ligi,
          federasyon, kulüp, organizasyon veya turnuva ile{" "}
          <Strong>
            bağlantılı, tarafından onaylanan, sponsorluğu altında veya
            resmi olarak ilişkili değildir
          </Strong>
          . Tüm üçüncü taraf isimleri, logoları ve markaları yalnızca
          tanımlama ve betimleme amacıyla (nominative fair use)
          kullanılmaktadır; kullanıcıların takip etmek istedikleri maçları
          ve takımları tanımalarına yardımcı olmak için.
        </p>
        <p>
          Bir hak sahibiyseniz ve markanızın veya telif hakkıyla korunan
          materyalinizin uygulama içinde yanlış kullanıldığını
          düşünüyorsanız, lütfen{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>{" "}
          adresinden bizimle iletişime geçin. Talebinizi inceleyeceğiz,
          yanıtlayacağız ve uygun olduğu durumlarda içeriği kaldıracak veya
          değiştireceğiz.
        </p>
      </Section>

      <Divider />

      <Section title="12. İletişim">
        <p>
          Gizlilik politikamız hakkında sorularınız veya veri işleme
          talepleriniz için:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-posta</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Geliştirici</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Web</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          KVKK kapsamındaki başvurularınızı yukarıdaki e-posta adresine veya
          posta yoluyla iletebilirsiniz. Başvurularınız en geç{" "}
          <Strong>30 gün içinde</Strong> yanıtlanır.
        </p>
      </Section>
    </>
  );
}
