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
        kullanırken hangi kişisel verileri topladığımızı, nasıl kullandığımızı,
        kiminle paylaştığımızı ve haklarınızı açıklar.
      </p>
      <p>Uygulamayı kullanarak bu Gizlilik Politikası&apos;nı kabul etmiş olursunuz.</p>

      <Divider />

      <Section title="1. Topladığımız Veriler">
        <SubHeading>1.1 Hesap Bilgileri</SubHeading>
        <p>
          Apple ile Giriş Yap veya Google ile Giriş Yap özelliklerini
          kullandığınızda, aşağıdaki bilgileri Apple veya Google&apos;dan alırız:
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
              <Strong>Benzersiz kimlik (Provider User ID)</Strong> — hesabınızı
              tanımlamak için
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

        <SubHeading>1.4 Cihaz Bilgileri</SubHeading>
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
              <Strong>Uygulama sürümü</Strong>
            </>,
          ]}
        />

        <SubHeading>1.5 Otomatik Toplanan Veriler</SubHeading>
        <List
          items={[
            <>
              <Strong>IP adresi</Strong> (güvenlik ve bölgesel içerik için)
            </>,
            <>
              <Strong>Hata ve çökme raporları</Strong> (uygulama stabilitesi
              için)
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
              <Strong>İletişim</Strong>: Önemli güncellemeler, duyurular ve
              ödül bildirimleri göndermek
            </>,
            <>
              <Strong>Ödül teslimi</Strong>: Yarışma kazananlarına fiziksel
              veya dijital ödül göndermek (ad-soyad ve e-posta gerektirir)
            </>,
            <>
              <Strong>Hesap güvenliği</Strong>: Sahte hesapları önlemek ve
              kullanıcı kimliğini doğrulamak
            </>,
            <>
              <Strong>Analitik ve iyileştirme</Strong>: Kullanım istatistiklerini
              anonim olarak analiz etmek ve uygulamayı geliştirmek
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Verilerinizi Kimlerle Paylaşıyoruz?">
        <p>
          ScoreHunter kullanıcı verilerini{" "}
          <Strong>
            satmaz, kiralamaz veya ticari amaçla üçüncü taraflarla paylaşmaz
          </Strong>
          .
        </p>
        <p>Verilerinizi yalnızca aşağıdaki sınırlı durumlarda paylaşırız:</p>

        <SubHeading>3.1 Hizmet Sağlayıcılar</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — Sunucu ve
              veritabanı barındırma (Frankfurt, Almanya)
            </>,
            <>
              <Strong>API-Football</Strong> — Maç verileri için üçüncü taraf
              servisi (kişisel verileriniz paylaşılmaz)
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In kimlik doğrulama
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In kimlik doğrulama
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
              <Strong>
                Silme hakkı (&quot;unutulma hakkı&quot;)
              </Strong>
              : Verilerinizin silinmesini talep etme
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

      <Section title="8. Çerezler ve Takip Teknolojileri">
        <p>
          ScoreHunter mobil uygulaması <Strong>çerez kullanmaz</Strong>.
          Kullanıcı takibi için hiçbir üçüncü taraf analitik veya reklam
          SDK&apos;sı entegre edilmemiştir.
        </p>
      </Section>

      <Divider />

      <Section title="9. Uluslararası Veri Aktarımı">
        <p>
          Verileriniz Türkiye dışında (AWS Frankfurt — Avrupa Birliği)
          işlenebilir. Bu aktarımlar, GDPR ve KVKK&apos;nın gerekli güvenlik
          standartlarına uygundur.
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

      <Section title="11. İletişim">
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
