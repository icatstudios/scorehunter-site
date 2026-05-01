import {
  Section,
  SubHeading,
  List,
  Strong,
  Divider,
} from "@/components/PolicyComponents";

export function FeaturesContentTr() {
  return (
    <>
      <Section title="Score Hunt — haftalık av">
        <p>
          Score Hunt, uygulamanın kalbidir. Her hafta en çok takip edilen
          maçları seçer, başlamadan birkaç gün önce tahmine açarız. Bir
          slate seç, tahminlerini kilitle, maçlar oynanırken puanların
          canlı işlerken tadını çıkar.
        </p>
        <List
          items={[
            <>
              En büyük ligler ve turnuvalardan{" "}
              <Strong>haftalık seçilmiş maçlar</Strong>.
            </>,
            <>
              <Strong>Sonucu (1X2)</Strong>, <Strong>kesin skoru</Strong>{" "}
              ve <Strong>gol atanları</Strong> tahmin et.
            </>,
            <>
              Maç başlamadan kilitle — maç başladığı anda tahminin sabitlenir.
            </>,
            <>
              Goller geldikçe puanların canlı güncellenir, avı gerçek
              zamanlı takip et.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="Mini Oyunlar — maç günleri arasında hızlı turlar">
        <p>
          Mini Oyunlar, tam Score Hunt turlarının arasında çalışan kısa
          formatlı tahmin modlarıdır. Hareketi sürdürür, hızlı düşünmeyi
          ödüllendirir ve temel mantığı bozmadan çeşitlilik katar.
        </p>
        <List
          items={[
            <>
              Birkaç maç üzerinde <Strong>hızlı tahminler</Strong> — kahve
              molası için birebir.
            </>,
            <>
              <Strong>Tematik turlar</Strong>: derbiler, zirve mücadeleleri,
              küme düşme savaşları.
            </>,
            <>
              Score Hunt ile aynı beceri ilkesi — şans çarpanı yok, oran yok,
              her maç eşit.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="Ligler — halka açık veya sadece arkadaşlara özel">
        <p>
          Dünyayla yarış ya da sadece atışmak istediğin kişilerle. ScoreHunter
          hem küresel sıralamaları hem de kendi oluşturup arkadaşlarını davet
          edebileceğin özel ligleri destekler.
        </p>
        <SubHeading>Halka açık sıralamalar</SubHeading>
        <List
          items={[
            "Küresel haftalık ve sezonluk sıralamalar.",
            "Bölgendeki rekabeti görmen için ülke bazlı tablolar.",
            "Filtreli görünümler: ilk 10, ilk 100, sadece arkadaşlar.",
          ]}
        />
        <SubHeading>Özel ligler</SubHeading>
        <List
          items={[
            "Bir lig oluştur, davet bağlantısını paylaş — hazırsın.",
            "Özel lig ismi ve arkadaş, aile veya iş arkadaşları için odaklı küçük bir tablo.",
            "Lige özel haftalık kazananlar ve sezon sonu onurları.",
          ]}
        />
      </Section>

      <Divider />

      <Section title="Kupalar ve başarımlar">
        <p>
          Her tahminin bir karşılığı var — haftalık zirvede olmasan bile.
          Kupalar ve başarımlar, farklı oyun stillerine göre uzun vadeli
          hedefler sunar.
        </p>
        <List
          items={[
            <>
              <Strong>Haftalık kupalar</Strong>: sıralamada zirve, kusursuz
              hafta, kendi rekorunu kırma.
            </>,
            <>
              <Strong>Sezonluk onurlar</Strong>: seri tutturma, ilk %X
              içinde bitirme, lig şampiyonlukları.
            </>,
            <>
              <Strong>Ömür boyu başarımlar</Strong>: yüzlerce kesin skor,
              tahmin edilmiş derbiler, tamamlanan mini oyunlar.
            </>,
            <>
              Bazı kupalar <Strong>sadece Pro</Strong>'ya özel — derin
              koleksiyoner deneyimi isteyen Pro üyeler için.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="Pro Üyelik — opsiyonel, asla zorunlu değil">
        <p>
          Pro, daha akıcı ve derin bir deneyim isteyen oyuncular içindir.
          Ana oyun herkese ücretsiz kalır — Pro sadece cila ve koleksiyoncu
          katmanı ekler.
        </p>
        <List
          items={[
            <>
              Uygulama genelinde <Strong>azaltılmış reklam</Strong>.
            </>,
            <>
              <Strong>Pro'ya özel kupalar</Strong> ve sıralamalarda kullanıcı
              adının yanında gösterilen özel Pro rozeti.
            </>,
            <>
              <Strong>Öncelikli destek</Strong> — mesajların gelen kutumuzun
              en üstüne gelir.
            </>,
            <>
              <Strong>Yarışmaya etkisi yok</Strong>: Pro üyeler avantaj
              alır, asla haksız üstünlük değil. Tüm maçlar eşit değerde
              kalır.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="Canlı maç takibi">
        <p>
          ScoreHunter, gerçek zamanlı maç verisini çeker, böylece uygulama
          değiştirmen gerekmez. Maçlar oynanırken puanların canlı güncellenir
          ve sıralamada dakika dakika tırmanışını (veya sallantını)
          izleyebilirsin.
        </p>
        <List
          items={[
            "Gol atan bilgisiyle birlikte canlı skor güncellemeleri.",
            "Maç başına döküm: sonuç puanı, kesin skor puanı, gol atan puanı.",
            "Şu anda nerede olduğunu bilmen için canlı sıralama hareketi.",
          ]}
        />
      </Section>
    </>
  );
}
