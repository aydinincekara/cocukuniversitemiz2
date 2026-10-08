/* ==========================================================================
   MENÜ — SİTENİN HARİTASI
   --------------------------------------------------------------------------
   Üst menü, alt bölüm, soldaki bölüm menüsü, "konumunuz" satırı ve
   "önceki / sonraki sayfa" bağlantıları BU LİSTEDEN otomatik üretilir.

   YENİ SAYFA EKLEMEK İÇİN:
   1) sayfalar/sablonlar/yeni-sayfa.html dosyasını ilgili klasöre kopyalayın.
   2) Aşağıda ilgili grubun "sayfalar" listesine bir satır ekleyin.
   Başka hiçbir dosyayı değiştirmeniz gerekmez.

   Grup alanları:
     baslik      : Alt bölümde ve sol menüde görünen tam ad
     kisaBaslik  : (isteğe bağlı) Üst menüde görünen kısa ad
     ikon        : Grubun ikonu

   Sayfa alanları:
     baslik   : Menüde görünen ad
     yol      : Site köküne göre dosya yolu
     aciklama : Açılır menüde başlığın altındaki kısa açıklama
     ikon     : assets/js/ikonlar.js içindeki ikon adı
     seviye   : 1–4 arası ise sayfa o sınıf seviyesinin rengini alır
     gizli    : true ise menülerde görünmez (sayfa yine açılabilir)
   ========================================================================== */
window.CU_MENU = [
  {
    kimlik: "kurumsal",
    baslik: "Kurumsal",
    ikon: "landmark",
    sayfalar: [
      { baslik: "Hakkımızda", yol: "sayfalar/kurumsal/hakkimizda.html", aciklama: "Tanıtım, misyon, vizyon ve atölyeler", ikon: "school" },
      { baslik: "Duyurular", yol: "sayfalar/kurumsal/duyurular.html", aciklama: "Süreç ve etkinlik duyuruları", ikon: "megaphone" },
      { baslik: "İletişim", yol: "sayfalar/kurumsal/iletisim.html", aciklama: "Adres ve iletişim bilgileri", ikon: "mail" }
    ]
  },
  {
    kimlik: "egitim",
    baslik: "Eğitim",
    ikon: "graduation-cap",
    sayfalar: [
      { baslik: "Eğitim modeli", yol: "sayfalar/egitim/egitim-modeli.html", aciklama: "Dört yıllık yol, öğrenme tasarımı ve haftalık düzen", ikon: "route" },
      { baslik: "Dersler", yol: "sayfalar/egitim/dersler.html", aciklama: "Tüm derslerin amaçları ve hedefleri", ikon: "book-open" },
      { baslik: "1. sınıf: Tanı", yol: "sayfalar/egitim/1-sinif.html", aciklama: "Okulda 4. sınıf — “Ben kimim?”", ikon: "sprout", seviye: 1 },
      { baslik: "2. sınıf: Keşfet", yol: "sayfalar/egitim/2-sinif.html", aciklama: "Okulda 5. sınıf — “Neleri seviyorum?”", ikon: "wrench", seviye: 2 },
      { baslik: "3. sınıf: Derinleş", yol: "sayfalar/egitim/3-sinif.html", aciklama: "Okulda 6. sınıf — “Neyi geliştireyim?”", ikon: "target", seviye: 3 },
      { baslik: "4. sınıf: Üret", yol: "sayfalar/egitim/4-sinif.html", aciklama: "Okulda 7. sınıf — “Nasıl ürüne dönüşür?”", ikon: "rocket", seviye: 4 },
      { baslik: "Hafta içi GELİŞİM programı", yol: "sayfalar/egitim/hafta-ici-gelisim.html", aciklama: "Okulda 4. sınıf için bir yıllık hafta içi program", ikon: "clock" },
      { baslik: "Yabancı dil", yol: "sayfalar/egitim/yabanci-dil.html", aciklama: "İngilizce atölyesi ve seviye sınavları", ikon: "languages" }
    ]
  },
  {
    kimlik: "atolyeler",
    baslik: "Atölyeler ve Proje",
    kisaBaslik: "Atölyeler",
    ikon: "flask-conical",
    sayfalar: [
      { baslik: "Uzmanlık atölyeleri", yol: "sayfalar/atolyeler/uzmanlik-atolyeleri.html", aciklama: "3. sınıfta seçilen dört laboratuvar", ikon: "layers", seviye: 3 },
      { baslik: "Yazılım ve Yapay Zekâ Lab.", yol: "sayfalar/atolyeler/yazilim-yapay-zeka.html", aciklama: "Python, yapay zekâ ve yayında proje", ikon: "brain-circuit", seviye: 3 },
      { baslik: "Bilim, Keşif ve Astronomi Lab.", yol: "sayfalar/atolyeler/bilim-kesif-astronomi.html", aciklama: "Gözlem, deney ve mini roket", ikon: "telescope", seviye: 3 },
      { baslik: "Tasarım ve 3D Stüdyo", yol: "sayfalar/atolyeler/tasarim-3d-studyo.html", aciklama: "Modelden üretime, 3D baskı ve maker", ikon: "shapes", seviye: 3 },
      { baslik: "Havacılık, Model Uçak ve İHA Lab.", yol: "sayfalar/atolyeler/havacilik-model-ucak-iha.html", aciklama: "Uçuş, model üretimi ve simülatör", ikon: "plane", seviye: 3 },
      { baslik: "Bitirme projesi", yol: "sayfalar/atolyeler/bitirme-projesi.html", aciklama: "4. sınıfta beş aşamalı grup projesi", ikon: "rocket", seviye: 4 },
      { baslik: "Öğrenci portfolyosu", yol: "sayfalar/atolyeler/portfolyo.html", aciklama: "Dört yıllık gelişimin dijital arşivi", ikon: "notebook-pen" }
    ]
  },
  {
    kimlik: "olcme",
    baslik: "Ölçme ve Değerlendirme",
    kisaBaslik: "Ölçme",
    ikon: "clipboard-check",
    sayfalar: [
      { baslik: "Genel bakış", yol: "sayfalar/olcme/genel-bakis.html", aciklama: "Değerlendirme yaklaşımı ve yıllık takvim", ikon: "layers" },
      { baslik: "Seçme sınavı", yol: "sayfalar/olcme/secme-sinavi.html", aciklama: "1. sınıfa öğrenci alım süreci", ikon: "clipboard-list" },
      { baslik: "1. sınıf değerlendirme", yol: "sayfalar/olcme/1-sinif-degerlendirme.html", aciklama: "Ürünler, ilgi haritası, yıl sonu sınavı", ikon: "clipboard-check", seviye: 1 },
      { baslik: "2. sınıf değerlendirme", yol: "sayfalar/olcme/2-sinif-degerlendirme.html", aciklama: "Ürünler, yıl sonu sınavı, atölye tanıtımları", ikon: "clipboard-check", seviye: 2 },
      { baslik: "3. sınıf ders seçimi", yol: "sayfalar/olcme/3-sinif-ders-secimi.html", aciklama: "Sınav, anket ve görüşmeyle atölye seçimi", ikon: "list-checks", seviye: 3 },
      { baslik: "4. sınıf mezuniyet", yol: "sayfalar/olcme/4-sinif-mezuniyet.html", aciklama: "Proje jürisi ve mezuniyet programı", ikon: "medal", seviye: 4 },
      { baslik: "QR merkezi", yol: "sayfalar/olcme/qr-merkezi.html", aciklama: "Tüm sınav, anket ve form kodları", ikon: "qr-code" }
    ]
  },
  {
    kimlik: "etkinlikler",
    baslik: "Etkinlikler",
    ikon: "calendar-days",
    sayfalar: [
      { baslik: "Etkinlik takvimi", yol: "sayfalar/etkinlikler/etkinlik-takvimi.html", aciklama: "Yıl boyu etkinlikler ve belirli günler", ikon: "calendar-days" },
      { baslik: "Robot yarışmaları", yol: "sayfalar/etkinlikler/robot-yarismalari.html", aciklama: "Ulusal ve uluslararası yarışma takımları", ikon: "trophy" },
      { baslik: "Gece gözlemi", yol: "sayfalar/etkinlikler/gece-gozlemi.html", aciklama: "Gökyüzü gözlemleri ve astronomi etkinlikleri", ikon: "moon-star" },
      { baslik: "Bilim şenliği", yol: "sayfalar/etkinlikler/bilim-senligi.html", aciklama: "Yıl sonu ürün sergisi ve gösteriler", ikon: "flask-conical" },
      { baslik: "Çocuk hakları", yol: "sayfalar/etkinlikler/cocuk-haklari.html", aciklama: "Haklar, katılım ve güvenli ortam", ikon: "heart-handshake" }
    ]
  }
];
