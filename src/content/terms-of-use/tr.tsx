import {
  Section,
  SubHeading,
  List,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function TermsContentTr() {
  return (
    <>
      <p>
        ScoreHunter mobil uygulamasını (&quot;Uygulama&quot;,
        &quot;Hizmet&quot;) kullanmaya başlamadan önce lütfen bu Kullanım
        Koşullarını (&quot;Koşullar&quot;) dikkatlice okuyun. Uygulamayı
        indirip kullanarak bu Koşulları kabul etmiş sayılırsınız. Bu Koşulları
        kabul etmiyorsanız lütfen Uygulamayı kullanmayın.
      </p>

      <Divider />

      <Section title="1. Tanımlar">
        <List
          items={[
            <>
              <Strong>Uygulama</Strong>: ScoreHunter mobil uygulaması ve
              ilgili web siteleri
            </>,
            <>
              <Strong>Geliştirici / Biz / Bize</Strong>: iCat Studios
            </>,
            <>
              <Strong>Kullanıcı / Siz / Sizin</Strong>: Uygulamayı kullanan
              kişi
            </>,
            <>
              <Strong>Hizmet</Strong>: Uygulamanın sunduğu tüm özellikler ve
              içerikler
            </>,
            <>
              <Strong>İçerik</Strong>: Maç verileri, tahmin listeleri,
              sıralamalar, kupalar, kullanıcı profilleri ve diğer tüm uygulama
              içi veriler
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Hizmetin Niteliği — ÖNEMLİ">
        <SubHeading>
          2.1 ScoreHunter Bir Bahis Uygulaması Değildir
        </SubHeading>
        <p>
          ScoreHunter,{" "}
          <Strong>
            futbol bilgisine dayalı bir tahmin ve eğlence uygulamasıdır
          </Strong>
          . Aşağıdaki hususlar Uygulamanın temel yapısını oluşturur ve
          kullanıcılar tarafından açıkça anlaşılmalıdır:
        </p>
        <List
          items={[
            <>
              Uygulama bir <Strong>beceri oyunudur</Strong> (skill-based
              game), şans oyunu <Strong>değildir</Strong>
            </>,
            <>
              Uygulamada <Strong>bahis terminolojisi</Strong> (kupon, oran,
              handikap, marj, jackpot) yer <Strong>almaz</Strong>
            </>,
            <>
              Uygulamada hiçbir maç için <Strong>bahis oranı</Strong> veya{" "}
              <Strong>kazanç çarpanı</Strong> sunulmaz
            </>,
            <>
              Tüm maçlar tahmin açısından <Strong>eşit değerdedir</Strong> —
              herhangi bir maçın tahmini diğerinden daha &quot;değerli&quot;
              değildir
            </>,
            <>
              Uygulama, futbol takipçilerinin bilgisini ve futbol sezgilerini
              eğlenceli bir ortamda yarıştırmasına olanak tanır
            </>,
            <>
              Ana amaç{" "}
              <Strong>
                eğlence, futbol kültürü, topluluk oluşturma ve bilgi paylaşımı
              </Strong>
              dır
            </>,
          ]}
        />

        <SubHeading>2.2 Para Yatırma veya Para Ödülü Yoktur</SubHeading>
        <List
          items={[
            <>
              Uygulamayı oynamak veya yarışmalara katılmak için{" "}
              <Strong>gerçek para harcamak GEREKMEZ</Strong>
            </>,
            <>
              Uygulama içinde{" "}
              <Strong>gerçek para ile tahmin yapma</Strong> veya{" "}
              <Strong>bahis oynama</Strong> özelliği <Strong>YOKTUR</Strong>
            </>,
            <>
              Uygulama, kazananlara{" "}
              <Strong>gerçek para ödülü vaat ETMEZ</Strong>
            </>,
            <>
              Uygulama içinde{" "}
              <Strong>kumar, talih oyunu, çekiliş veya bahis</Strong>{" "}
              unsurları <Strong>YOKTUR</Strong>
            </>,
            <>
              Tüm kullanıcılar yarışmalara{" "}
              <Strong>eşit koşullarda</Strong> katılır
            </>,
            <>
              Pro üyelik gibi ücretli özellikler{" "}
              <Strong>yarışma sonuçlarını etkilemez</Strong>, yalnızca
              kullanıcı deneyimini iyileştiren ek özellikler sunar
            </>,
          ]}
        />

        <SubHeading>2.3 Promosyon Ödülleri</SubHeading>
        <p>
          Geliştirici zaman zaman, tamamen kendi takdirine bağlı olarak, en
          başarılı kullanıcılara{" "}
          <Strong>promosyon nitelikli ödüller</Strong> (forma, futbol topu,
          dijital hediye kartı, sembolik hediyeler vb.) verebilir. Bu ödüller
          hakkında aşağıdaki hususlar geçerlidir:
        </p>
        <List
          items={[
            <>
              Ödüller <Strong>promosyon amaçlıdır</Strong> ve kullanıcıların
              oyuna katılımını teşvik etmek içindir
            </>,
            <>
              Ödüllerin verilmesi <Strong>garanti edilmez</Strong> — yalnızca
              Geliştiricinin duyurduğu kampanyalar dahilinde verilir
            </>,
            <>
              Ödüller <Strong>gerçek nakit para olarak verilmez</Strong>,
              yalnızca fiziksel veya dijital hediye olarak temin edilir
            </>,
            <>
              Ödüllerin verilmesi, dağıtılması ve teslimi{" "}
              <Strong>tamamen Geliştiricinin sorumluluğundadır</Strong>
            </>,
            <>
              <Strong>
                Apple Inc., Apple App Store, Google LLC ve Google Play Store
                bu ödüllerden hiçbir şekilde sorumlu değildir
              </Strong>
            </>,
            <>
              Ödül kazanan kullanıcıların adres, kimlik veya diğer bilgileri
              Geliştirici tarafından yalnızca ödül teslimi amacıyla
              istenebilir
            </>,
          ]}
        />

        <SubHeading>2.4 Yaş Sınırı</SubHeading>
        <p>
          Uygulama, <Strong>13 yaşın üzerindeki</Strong> kullanıcılara
          yöneliktir. 13 yaşın altındaki kişiler Uygulamayı kullanamaz.
          Kullanıcı, Uygulamayı kullanırken 13 yaşın üzerinde olduğunu beyan
          eder.
        </p>
      </Section>

      <Divider />

      <Section title="3. Hesap Oluşturma ve Kullanımı">
        <SubHeading>3.1 Hesap Açma</SubHeading>
        <p>
          Uygulamanın bazı özelliklerini kullanabilmek için Apple ile Giriş
          Yap veya Google ile Giriş Yap özelliklerinden birini kullanarak
          hesap oluşturmanız gerekir. Hesap oluştururken:
        </p>
        <List
          items={[
            "Doğru ve güncel bilgiler vermelisiniz",
            "Doğum tarihinizi doğru beyan etmelisiniz",
            "Başkasının kimliği ile hesap açamazsınız",
            "Sahte veya yanıltıcı bilgilerle hesap açamazsınız",
            <>
              Bir kişi yalnızca <Strong>bir hesap</Strong> açabilir
            </>,
          ]}
        />

        <SubHeading>3.2 Hesap Güvenliği</SubHeading>
        <p>
          Hesabınızla yapılan tüm işlemlerden{" "}
          <Strong>siz sorumlusunuz</Strong>. Hesabınızın güvenliğini sağlamak
          için:
        </p>
        <List
          items={[
            "Apple ID veya Google hesabınızın güvenliğini sağlamalısınız",
            "Hesap erişiminizin başkaları tarafından kullanılmasına izin vermemelisiniz",
            "Şüpheli bir durumda Geliştiriciye derhal bilgi vermelisiniz",
          ]}
        />

        <SubHeading>3.3 Hesap Feshi</SubHeading>
        <p>
          Aşağıdaki durumlarda Geliştirici, kullanıcının hesabını{" "}
          <Strong>uyarıda bulunmaksızın askıya alma veya feshetme</Strong>{" "}
          hakkını saklı tutar:
        </p>
        <List
          items={[
            "Bu Koşulların ihlali",
            "Sahtekarlık, hile veya yanıltıcı davranış",
            "Diğer kullanıcılara yönelik taciz, hakaret veya nefret söylemi",
            "Birden fazla hesap açma",
            "Otomatik yazılım, bot veya hile aracı kullanımı",
            "Yasal mevzuata aykırı davranış",
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. Kabul Edilebilir Kullanım">
        <SubHeading>4.1 Yasaklanan Davranışlar</SubHeading>
        <p>
          Uygulamayı kullanırken aşağıdaki davranışlar{" "}
          <Strong>yasaktır</Strong>:
        </p>
        <List
          items={[
            "Sahte hesap açmak veya başkasının kimliğine bürünmek",
            "Otomatik araçlar (bot, script) kullanarak tahmin yapmak",
            <>
              Diğer kullanıcılara yönelik{" "}
              <Strong>
                uygunsuz kullanıcı adı, küfür, hakaret, taciz, ırkçı,
                cinsiyetçi veya nefret içeren ifadeler
              </Strong>{" "}
              kullanmak
            </>,
            "Uygulamanın güvenlik mekanizmalarını aşmaya çalışmak",
            "Uygulamayı reverse engineer, decompile veya disassemble etmek",
            "Uygulama içeriğini izinsiz kopyalamak, dağıtmak veya ticari amaçla kullanmak",
            "Spam, reklam veya promosyon içerikli mesajlar paylaşmak (lig isimlerinde, kullanıcı adlarında vb.)",
            "Sunucuları aşırı yükleyecek veya hizmeti aksatacak girişimlerde bulunmak",
          ]}
        />

        <SubHeading>4.2 Yaptırımlar</SubHeading>
        <p>
          Yukarıdaki davranışlar tespit edildiğinde Geliştirici, kullanıcının
          hesabını uyarıda bulunmaksızın askıya alma, sıralamadan çıkarma veya
          kalıcı olarak silme hakkını saklı tutar.
        </p>
      </Section>

      <Divider />

      <Section title="5. Fikri Mülkiyet Hakları">
        <SubHeading>5.1 Uygulamanın Mülkiyeti</SubHeading>
        <p>
          ScoreHunter ismi, logosu, görselleri, tasarımı, kaynak kodu, içeriği
          ve tüm fikri mülkiyet hakları{" "}
          <Strong>iCat Studios&apos;a aittir</Strong>. Bu içerikler aşağıdaki
          şekilde korunur:
        </p>
        <List
          items={[
            "Telif hakları",
            "Marka tescili",
            "Ticari sır",
            "İlgili diğer fikri mülkiyet hakları",
          ]}
        />

        <SubHeading>5.2 Üçüncü Taraf İçerikleri</SubHeading>
        <p>
          Uygulamada gösterilen futbol takım logoları, oyuncu fotoğrafları, lig
          isimleri ve maç verileri ilgili kulüplere, liglere ve API-Football
          hizmetine aittir. Bu içerikler eğitim ve eğlence amaçlı
          kullanılmaktadır.
        </p>

        <SubHeading>5.3 Kullanıcı İçeriği</SubHeading>
        <p>
          Uygulamayı kullanırken oluşturduğunuz içerik (tahmin listeleri, lig
          isimleri, kullanıcı adı, profil bilgileri) sizin mülkiyetinizdedir.
          Ancak Uygulamayı kullanarak, bu içeriklerin uygulama içinde
          gösterilmesi, saklanması ve diğer kullanıcılarla paylaşılması için
          Geliştiriciye{" "}
          <Strong>
            ücretsiz, sınırsız ve devredilebilir bir kullanım hakkı
          </Strong>{" "}
          vermiş sayılırsınız.
        </p>
      </Section>

      <Divider />

      <Section title="6. Sorumluluk Reddi">
        <SubHeading>6.1 Hizmet &quot;Olduğu Gibi&quot; Sunulur</SubHeading>
        <p>
          Uygulama &quot;<Strong>olduğu gibi</Strong>&quot; ve &quot;
          <Strong>mevcut haliyle</Strong>&quot; sunulur. Geliştirici,
          aşağıdakilere ilişkin <Strong>hiçbir garanti vermez</Strong>:
        </p>
        <List
          items={[
            "Uygulamanın hatasız, kesintisiz veya güvenli çalışacağı",
            <>
              Maç verilerinin, skorların veya istatistiklerin{" "}
              <Strong>her zaman doğru ve güncel</Strong> olacağı
            </>,
            <>
              Tahmin sonuçlarının veya puanlamaların{" "}
              <Strong>her zaman zamanında hesaplanacağı</Strong>
            </>,
            "Sunucu kesintilerinin yaşanmayacağı",
            "Uygulamanın belirli bir cihazda veya işletim sisteminde çalışacağı",
          ]}
        />

        <SubHeading>6.2 Maç Verileri</SubHeading>
        <p>
          Maç verileri, skorlar, kadrolar, dakika ve istatistikler{" "}
          <Strong>üçüncü taraf bir API hizmetinden (API-Football)</Strong>{" "}
          alınmaktadır. Geliştirici, bu verilerin doğruluğundan,
          güncelliğinden veya eksiksizliğinden{" "}
          <Strong>sorumlu tutulamaz</Strong>. Verilerde gecikme, hata veya
          eksiklik olması durumunda kullanıcı bunu kabul etmiş sayılır.
        </p>

        <SubHeading>6.3 Sorumluluk Sınırı</SubHeading>
        <p>
          Geliştirici, Uygulamanın kullanımından doğan veya kullanımıyla
          ilgili{" "}
          <Strong>
            doğrudan, dolaylı, arızi, özel veya sonuç olarak ortaya çıkan
            zararlardan sorumlu değildir
          </Strong>
          . Bu kapsam, aşağıdakilerle sınırlı olmamak üzere şunları içerir:
        </p>
        <List
          items={[
            "Veri kaybı",
            "Maddi veya manevi zarar",
            "Kazanılması muhtemel kupa, ödül veya sıralama kaybı",
            "Cihaz arızaları",
            "Üçüncü taraf hizmet kesintileri",
          ]}
        />
      </Section>

      <Divider />

      <Section title="7. Apple ve Google Sorumluluk Reddi">
        <SubHeading>7.1 Apple Inc. Hakkında</SubHeading>
        <p>
          Bu Uygulama, iOS sürümü için Apple App Store üzerinden
          dağıtılmaktadır. Bu kapsamda:
        </p>
        <List
          items={[
            <>
              <Strong>
                Apple Inc., bu Uygulama veya içeriği ile ilgili hiçbir şekilde
                sorumlu değildir
              </Strong>
            </>,
            <>
              Apple, Uygulamanın hatalı çalışması, hata içermesi, ödüllerin
              verilmemesi veya başka herhangi bir konuda{" "}
              <Strong>sorumlu tutulamaz</Strong>
            </>,
            <>
              Uygulamanın bu Kullanım Koşullarını ihlal etmesi durumunda,
              Apple Inc.&apos;in <Strong>hiçbir yükümlülüğü yoktur</Strong>
            </>,
            <>
              Bu Uygulamanın bakım, destek veya kullanıcı hizmetlerinin
              sağlanması{" "}
              <Strong>tamamen iCat Studios&apos;un sorumluluğundadır</Strong>
            </>,
            <>
              Uygulama içinde verilecek{" "}
              <Strong>
                her türlü ödül, yarışma, kampanya veya promosyon Apple
                Inc.&apos;ten bağımsızdır
              </Strong>{" "}
              — Apple bu konularda hiçbir şekilde sponsor, organizatör veya
              yönetici değildir
            </>,
            "Uygulama içinde gerçekleşen herhangi bir yasal sorun veya talep durumunda Apple Inc., her türlü sorumluluktan muaftır",
            "Uygulama veya içeriği, Apple'ın fikri mülkiyet haklarına saygı göstermek zorundadır",
            <>
              Uygulamanın kullanıcıları, Apple Inc.&apos;e karşı{" "}
              <Strong>doğrudan herhangi bir talep yöneltemez</Strong>
            </>,
            <>
              Bu Koşulların{" "}
              <Strong>üçüncü taraf yararlanıcısı Apple Inc.&apos;tir</Strong>{" "}
              ve Apple, gerektiğinde bu Koşulları uygulayabilir
            </>,
          ]}
        />

        <SubHeading>7.2 Google LLC Hakkında</SubHeading>
        <p>
          Bu Uygulama, Android sürümü için Google Play Store üzerinden
          dağıtılmaktadır. Bu kapsamda:
        </p>
        <List
          items={[
            <>
              <Strong>
                Google LLC, bu Uygulama veya içeriği ile ilgili hiçbir şekilde
                sorumlu değildir
              </Strong>
            </>,
            <>
              Google, Uygulamanın hatalı çalışması, hata içermesi, ödüllerin
              verilmemesi veya başka herhangi bir konuda{" "}
              <Strong>sorumlu tutulamaz</Strong>
            </>,
            <>
              Uygulamanın bakım, destek veya kullanıcı hizmetlerinin
              sağlanması{" "}
              <Strong>tamamen iCat Studios&apos;un sorumluluğundadır</Strong>
            </>,
            <>
              Uygulama içinde verilecek{" "}
              <Strong>
                her türlü ödül, yarışma, kampanya veya promosyon Google
                LLC&apos;den bağımsızdır
              </Strong>{" "}
              — Google bu konularda hiçbir şekilde sponsor, organizatör veya
              yönetici değildir
            </>,
            "Google Play Store, yalnızca Uygulamanın dağıtım platformudur — Uygulamanın içeriği veya işleyişi ile ilgili hiçbir sorumluluğu yoktur",
          ]}
        />

        <SubHeading>7.3 Apple Sign-In ve Google Sign-In</SubHeading>
        <p>
          Uygulama, kimlik doğrulama için Apple Sign-In ve Google Sign-In
          hizmetlerini kullanmaktadır. Bu hizmetlerin çalışması, bakımı ve
          güvenliği ilgili hizmet sağlayıcılarına aittir. Bu hizmetlerde
          yaşanan kesinti veya sorunlardan Geliştirici sorumlu tutulamaz.
        </p>
      </Section>

      <Divider />

      <Section title="8. Ücretli Özellikler ve Abonelikler">
        <p>
          Uygulama, ücretli özellikler (&quot;Pro Üyelik&quot; veya benzeri)
          sunabilir. Ücretli özellikler eklendiğinde:
        </p>
        <List
          items={[
            <>
              Tüm ödemeler <Strong>Apple App Store</Strong> veya{" "}
              <Strong>Google Play Store</Strong> üzerinden gerçekleşir
            </>,
            "Ödeme, iade ve abonelik yönetimi ilgili platformun politikalarına tabidir",
            <>
              <Strong>
                İade talepleri Apple veya Google&apos;a yapılmalıdır
              </Strong>
              , Geliştiriciye doğrudan iade talebi gönderilemez
            </>,
            <>
              Ücretli özellikler, kullanıcıya{" "}
              <Strong>yalnızca ek deneyim</Strong> sunar — yarışma sonuçlarını
              veya sıralamayı etkilemez
            </>,
            <>
              Ücretli özellikler, kullanıcıya{" "}
              <Strong>kazanma garantisi vermez</Strong> — tüm kullanıcılar
              yarışmalarda eşit konumdadır
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="9. Oyun Kuralları ve Mekaniği">
        <p>
          Uygulamanın güncel oyun kuralları, puanlama mekanizmaları, mini oyun
          açıklamaları ve sıralama hesaplama yöntemleri{" "}
          <Strong>uygulama içinde</Strong> gösterilir. Geliştirici, oyun
          kurallarını{" "}
          <Strong>önceden bildirimde bulunmaksızın değiştirme</Strong> hakkını
          saklı tutar. Önemli değişiklikler uygulama içi bildirim ile
          duyurulur.
        </p>
      </Section>

      <Divider />

      <Section title="10. Hizmet Değişikliği veya Sonlandırılması">
        <p>Geliştirici, herhangi bir zamanda ve herhangi bir nedenle:</p>
        <List
          items={[
            "Uygulamanın özelliklerini değiştirebilir, ekleyebilir veya kaldırabilir",
            "Uygulamayı geçici olarak askıya alabilir",
            "Uygulamayı tamamen sonlandırabilir",
            "Belirli bölgelerde Hizmeti durdurabilir",
          ]}
        />
        <p>
          Bu değişiklikler nedeniyle kullanıcılar herhangi bir tazminat
          talebinde bulunamaz.
        </p>
      </Section>

      <Divider />

      <Section title="11. Koşulların Değiştirilmesi">
        <p>
          Geliştirici, bu Kullanım Koşullarını{" "}
          <Strong>dilediği zaman güncelleme</Strong> hakkını saklı tutar.
          Önemli değişiklikler:
        </p>
        <List
          items={[
            "Bu sayfada yayımlanır",
            <>
              Sayfanın üstündeki &quot;Son güncelleme&quot; tarihi yenilenir
            </>,
            "Uygulama içi bildirim olarak gönderilebilir",
          ]}
        />
        <p>
          Değişikliklerin yayımlanmasından sonra Uygulamayı kullanmaya devam
          etmeniz, güncel Koşulları kabul ettiğiniz anlamına gelir.
        </p>
      </Section>

      <Divider />

      <Section title="12. Uygulanacak Hukuk ve Yetkili Mahkeme">
        <p>
          Bu Koşullar{" "}
          <Strong>Türkiye Cumhuriyeti hukukuna</Strong> tabidir. Bu
          Koşullardan kaynaklanan veya bunlarla ilgili her türlü uyuşmazlığın
          çözümünde{" "}
          <Strong>İstanbul Mahkemeleri ve İcra Daireleri</Strong> yetkilidir.
        </p>
      </Section>

      <Divider />

      <Section title="13. İletişim">
        <p>Bu Kullanım Koşulları hakkında sorularınız için:</p>
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
      </Section>
    </>
  );
}
