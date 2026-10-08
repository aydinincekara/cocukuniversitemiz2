# Çocuk Üniversitemiz

Küçükçekmece Belediyesi Çocuk Üniversitesi web sitesi. Derleme aracı gerektirmeyen, GitHub Pages'te doğrudan yayınlanan statik bir sitedir. Üst bölüm, alt bölüm ve menüler tek bir yerden yönetilir; yeni sayfa eklemek için mevcut sayfaları tek tek düzenlemeniz gerekmez.

## Klasör yapısı

```
cocuk-universitemiz/
├── index.html                  Ana sayfa
├── 404.html                    Bulunamayan sayfa
├── .nojekyll                   GitHub Pages'in dosyaları olduğu gibi yayınlaması için
├── assets/
│   ├── veri/                   ← İÇERİK GÜNCELLEMELERİNİN ÇOĞU BURADA
│   │   ├── site-ayarlari.js    Kurum adı, iletişim, yayın adresi, alt bölüm metni
│   │   ├── menu.js             Sitenin haritası (tüm menüler buradan üretilir)
│   │   ├── dersler.js          Sınıf seviyeleri ve dersler
│   │   ├── qr-kodlari.js       Sınav, anket, görüşme ve form bağlantıları
│   │   └── duyurular.js        Duyurular
│   ├── css/
│   │   ├── ana.css             Sayfaların çağırdığı tek dosya (katman sırası)
│   │   ├── degiskenler.css     Renkler, yazı tipleri, ölçüler
│   │   ├── temel.css           Sıfırlama ve tipografi
│   │   ├── duzen.css           Kapsayıcı ve sayfa ızgarası
│   │   ├── dokuman.css         Sayfa başlığı, sol menü, "Bu sayfada", sayfa geçişi
│   │   ├── bilesenler.css      Düğme, tablo, adımlar, ders kartları vb.
│   │   ├── ust-bolum.css       Üst bölüm (header)
│   │   ├── alt-bolum.css       Alt bölüm (footer)
│   │   ├── qr.css              QR kartları ve QR merkezi
│   │   ├── sayfalar.css        Ana sayfa ve özel sayfa düzenleri
│   │   ├── ekler.css           Kuruma özel eklemeler (en son katman)
│   │   └── yazdir.css          Yazıcı görünümü ve QR afişleri
│   ├── js/
│   │   ├── yukleyici.js        Sayfaların çağırdığı tek betik
│   │   ├── cekirdek.js         Ortak yardımcılar
│   │   ├── ikonlar.js          İkon çizimleri (Lucide)
│   │   ├── etkilesim.js        Küçük sayfa davranışları
│   │   ├── bilesenler/
│   │   │   ├── ust-bolum.js    Üst bölüm şablonu   <cu-ust>
│   │   │   ├── alt-bolum.js    Alt bölüm şablonu   <cu-alt>
│   │   │   ├── dokuman.js      <cu-sayfa-basligi> <cu-bolum-menusu> <cu-icindekiler> <cu-sayfa-gecis>
│   │   │   ├── dersler.js      <cu-dersler>
│   │   │   ├── qr.js           <cu-qr> <cu-qr-panosu>
│   │   │   └── duyurular.js    <cu-duyurular>
│   │   └── vendor/qrcode.js    QR kod üretici (MIT)
│   ├── fonts/                  Bricolage Grotesque ve Lexend (sitede barındırılır)
│   └── img/                    Logo ve site simgesi
└── sayfalar/
    ├── kurumsal/               Hakkımızda, Duyurular, İletişim
    ├── egitim/                 Eğitim modeli, Dersler, 1–4. sınıflar, Hafta içi GELİŞİM, Yabancı dil
    ├── atolyeler/              Uzmanlık atölyeleri (4 laboratuvar), Bitirme projesi, Öğrenci portfolyosu
    ├── olcme/                  Genel bakış, Seçme sınavı, sınıf değerlendirmeleri, QR merkezi
    ├── etkinlikler/            Etkinlik takvimi, Robot yarışmaları, Gece gözlemi, Bilim şenliği, Çocuk hakları
    └── sablonlar/yeni-sayfa.html
```

## GitHub Pages'te yayınlama

1. GitHub'da yeni bir depo oluşturun (ör. `cocuk-universitemiz`).
2. Bu klasörün **içindeki** tüm dosyaları deponun köküne yükleyin (`index.html` depo kökünde olmalı). `.nojekyll` dosyasını da yüklediğinizden emin olun.
3. Depoda **Settings → Pages** bölümüne gidin.
4. **Source**: `Deploy from a branch`, **Branch**: `main`, klasör: `/ (root)` seçip kaydedin.
5. Birkaç dakika içinde site `https://KULLANICI-ADI.github.io/cocuk-universitemiz/` adresinde yayında olur.

Bilgisayarda denemek için `index.html` dosyasını çift tıklayarak açabilirsiniz. Her şey çalışır; yalnızca site içi sayfaların QR kodları yerel dosya yolunu gösterir (aşağıya bakın).

## Sık yapılan işler

### Yeni sayfa eklemek

1. `sayfalar/sablonlar/yeni-sayfa.html` dosyasını ilgili klasöre kopyalayıp adlandırın.
2. Başlığı ve içeriği düzenleyin.
3. `assets/veri/menu.js` içinde ilgili gruba bir satır ekleyin:

```js
{ baslik: "Satranç turnuvası", yol: "sayfalar/etkinlikler/satranc-turnuvasi.html",
  aciklama: "Kurum içi turnuva kuralları", ikon: "chess-knight" },
```

Üst menü, alt bölüm, soldaki bölüm menüsü, konum satırı ve önceki/sonraki bağlantıları kendiliğinden güncellenir. Yeni bir menü grubu da aynı şekilde eklenebilir; grubun adı üst menüye sığmıyorsa gruba `kisaBaslik` ekleyin (üst menüde kısa ad, diğer yerlerde tam ad görünür).

### Sınav, anket ya da form yayınlamak (QR)

`assets/veri/qr-kodlari.js` dosyasında ilgili kaydı bulun:

```js
{
  kod: "s3-ilgi-anketi",
  baslik: "Öğrenci ilgi ve yönelim anketi",
  ...
  baglanti: "https://forms.gle/....",   // formun bağlantısını yapıştırın
  durum: "aktif",                        // "yakinda" → "aktif"
  tarih: "12–16 Mayıs 2027"
}
```

QR kodu hem ilgili sayfanın QR alanında hem de QR merkezinde otomatik oluşur. Süresi bittiğinde `durum: "kapali"` yapın. Yeni bir kayıt eklerken `gruplar` alanına, kaydın görüneceği sayfadaki `<cu-qr-panosu grup="...">` değerini yazın.

**QR kodlarını bilgisayardan yazdıracaksanız** `assets/veri/site-ayarlari.js` içindeki `yayinAdresi` alanına sitenin GitHub Pages adresini yazın. Site GitHub Pages'ten açıldığında bu gerekmez.

### Ders eklemek ya da değiştirmek

`assets/veri/dersler.js` dosyasını düzenleyin. Bir ders; Dersler sayfasında, sınıf sayfasında, ders programı tablolarında, değerlendirme sayfasındaki ürün tablosunda ve ana sayfadaki dört yıllık yolda aynı anda güncellenir.

Her dersin `program` alanı vardır: `"haftasonu"`, `"haftaici"` ya da her ikisinde de veriliyorsa `"her-ikisi"`. `saat` ve `mekan` alanları ders programı tablolarını besler; `portfolyo` alanı dersin portfolyoya bıraktığı çalışmaları listeler. Bir dersin ayrıntılı kendi sayfası varsa `sayfa` alanına yolunu yazın; ders kartı o sayfaya bağlanır.

`sinif: "tum"` olan dersler (Yabancı Dil Atölyesi) her sınıf seviyesinin listesinde ve ders programı toplamında görünür. Bir listede yalnızca o yıla özgü dersleri göstermek isterseniz etikete `tum-haric` ekleyin.

Ders bileşeninin görünümleri:

```html
<cu-dersler sinif="1" program="haftasonu"></cu-dersler>                  <!-- kartlar -->
<cu-dersler sinif="1" program="haftasonu" gorunum="program"></cu-dersler> <!-- ders programı tablosu -->
<cu-dersler sinif="2" gorunum="tablo"></cu-dersler>                      <!-- ders – ürün tablosu -->
<cu-dersler sinif="3" gorunum="portfolyo" tum-haric></cu-dersler>        <!-- ders – portfolyo tablosu -->
<cu-dersler sinif="3" gorunum="liste"></cu-dersler>                      <!-- kısa liste -->
<cu-dersler gorunum="yol"></cu-dersler>                                  <!-- dört yıllık yol -->
<cu-dersler gorunum="akis" guncel="3"></cu-dersler>                      <!-- yılın yoldaki yeri -->
```

### Sınıf seviyelerini değiştirmek

Aynı dosyadaki `CU_SEVIYELER` listesi dört yılın adını, temasını (TANI, KEŞFET, DERİNLEŞ, ÜRET), yıl sorusunu ve haftalık düzenini tutar. Buradaki bir değişiklik ana sayfadaki yol, sınıf sayfalarındaki akış şeridi ve sayfa başlıklarındaki sınıf kesri için geçerli olur.

### Duyuru eklemek

`assets/veri/duyurular.js` dosyasına en üste yeni bir kayıt ekleyin. Ana sayfada en yeni üç duyuru gösterilir.

### Renk ve yazı tipini değiştirmek

`assets/css/degiskenler.css` dosyasındaki değişkenleri düzenleyin. Sınıf seviyesi renkleri `--s1` … `--s4` değişkenleridir.

### Kendi stillerinizi eklemek

`assets/css/ekler.css` dosyasına yazın. CSS katmanları (`@layer`) sayesinde bu dosyadaki kurallar diğer dosyaları bozmadan önceliklidir; yeni CSS dosyası eklerseniz `ana.css` içinde katman sırasına yerleştirin.

### Önbellek sorunu

Yayınladığınız değişiklik tarayıcıda görünmüyorsa `assets/js/yukleyici.js` içindeki `SURUM` numarasını artırın (ör. `"1.0.1"`).

## İçerik ve kişisel veriler

- Site herkese açıktır. Öğrenci adları, sınav sonuçları, veli iletişim bilgileri gibi kişisel verileri siteye ya da `qr-kodlari.js` bağlantılarına koymayın (KVKK).
- Formlarda aydınlatma metni formun başında yer almalıdır.
- Tarihler, kontenjanlar ve değerlendirme ağırlıkları her yıl güncellenmelidir; sayfalarda bu bilgiler için Duyurular sayfasına yönlendirme yapılmıştır.

## Lisanslar

Kullanılan yazı tipi, ikon ve QR kütüphanesi lisansları `assets/vendor-lisanslari.txt` dosyasındadır.
