/* ==========================================================================
   QR KODLARI KAYDI
   --------------------------------------------------------------------------
   Sınav, anket, görüşme ve form bağlantıları YALNIZCA burada tutulur.
   Bir kayıt; ilgili sınav sayfasındaki QR alanında ve QR merkezinde
   aynı anda görünür. Bağlantıyı değiştirdiğinizde her yerde güncellenir.

   BİR SINAVI YAYINLAMAK İÇİN:
     1) Sınav/anket formunu hazırlayın (Google Forms, Microsoft Forms vb.).
     2) İlgili kaydın "baglanti" alanına bağlantıyı yapıştırın.
     3) "durum" alanını "aktif" yapın. QR kodu otomatik oluşur.
     Süresi bittiğinde "durum": "kapali" yapın.

   Alanlar:
     kod        : Benzersiz kısa ad (sayfalarda <cu-qr kod="..."> ile çağrılır)
     baslik     : Kartta görünen başlık
     aciklama   : Kısa açıklama
     kategori   : "sinav" | "anket" | "gorusme" | "form" | "bilgi" | "canli"
     sinif      : "aday" | 1 | 2 | 3 | 4 | "tum"
     gruplar    : Kaydın hangi sayfa QR alanlarında görüneceği
     baglanti   : Tam adres (https://...) ya da site içi yol (sayfalar/...)
     durum      : "aktif" | "yakinda" | "kapali"
     tarih      : Serbest metin, ör. "12–16 Mayıs 2027"

   ÖNEMLİ: Öğrenci adı, sonuç listesi gibi kişisel verileri içeren
   bağlantıları herkese açık bu siteye koymayın (KVKK).
   ========================================================================== */
window.CU_QR_KODLARI = [
  /* ---------------------------------------------------------- GENEL */
  {
    kod: "qr-merkezi",
    baslik: "QR merkezi",
    aciklama: "Yayındaki tüm sınav, anket ve formlara buradan ulaşılır.",
    kategori: "bilgi", sinif: "tum", gruplar: ["genel"],
    baglanti: "sayfalar/olcme/qr-merkezi.html", durum: "aktif", tarih: ""
  },

  /* ---------------------------------------------------------- SEÇME SINAVI */
  {
    kod: "secme-bilgilendirme",
    baslik: "Seçme sınavı bilgilendirme sayfası",
    aciklama: "Başvuru koşulları, sınav aşamaları ve sık sorulan sorular.",
    kategori: "bilgi", sinif: "aday", gruplar: ["secme"],
    baglanti: "sayfalar/olcme/secme-sinavi.html", durum: "aktif", tarih: ""
  },
  {
    kod: "secme-basvuru",
    baslik: "Seçme sınavı başvuru formu",
    aciklama: "Veli tarafından doldurulur. Aydınlatma metni formun başındadır.",
    kategori: "form", sinif: "aday", gruplar: ["secme"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "secme-demo-kitapcik",
    baslik: "Demo soru kitapçığı",
    aciklama: "Soru biçimlerini önceden tanımak için örnek kitapçık.",
    kategori: "bilgi", sinif: "aday", gruplar: ["secme"],
    baglanti: "", durum: "yakinda", tarih: ""
  },

  /* ---------------------------------------------------------- 1. SINIF */
  {
    kod: "s1-bilgilendirme",
    baslik: "1. sınıf değerlendirme sayfası",
    aciklama: "Yıl sonu sınavı, ürün sunumları ve ilgi haritası.",
    kategori: "bilgi", sinif: 1, gruplar: ["1-sinif"],
    baglanti: "sayfalar/olcme/1-sinif-degerlendirme.html", durum: "aktif", tarih: ""
  },
  {
    kod: "s1-akademik-atolye-anketi",
    baslik: "Akademik Atölye ilgi anketi",
    aciklama: "Her modül sonunda öğrenci doldurur; ilgi haritasının kaynağıdır.",
    kategori: "anket", sinif: 1, gruplar: ["1-sinif"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "s1-yil-sonu-sinavi",
    baslik: "1. sınıf yıl sonu sınavı",
    aciklama: "Yılın derslerini kapsayan çevrim içi bölüm.",
    kategori: "sinav", sinif: 1, gruplar: ["1-sinif"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "s1-veli-anketi",
    baslik: "1. sınıf veli görüş anketi",
    aciklama: "Yılın değerlendirilmesi ve öneriler.",
    kategori: "anket", sinif: 1, gruplar: ["1-sinif"],
    baglanti: "", durum: "yakinda", tarih: ""
  },

  /* ---------------------------------------------------------- 2. SINIF */
  {
    kod: "s2-bilgilendirme",
    baslik: "2. sınıf değerlendirme sayfası",
    aciklama: "Ürün sunumları, yıl sonu sınavı ve atölye tanıtımları.",
    kategori: "bilgi", sinif: 2, gruplar: ["2-sinif"],
    baglanti: "sayfalar/olcme/2-sinif-degerlendirme.html", durum: "aktif", tarih: ""
  },
  {
    kod: "s2-yil-sonu-sinavi",
    baslik: "2. sınıf yıl sonu sınavı",
    aciklama: "Yılın derslerini kapsayan çevrim içi bölüm.",
    kategori: "sinav", sinif: 2, gruplar: ["2-sinif"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "s2-urun-sunum-takvimi",
    baslik: "Ürün sunum takvimi",
    aciklama: "Derslere göre sunum günleri ve saatleri.",
    kategori: "bilgi", sinif: 2, gruplar: ["2-sinif"],
    baglanti: "", durum: "yakinda", tarih: ""
  },

  /* ---------------------------------------------------------- 3. SINIF DERS SEÇİMİ */
  {
    kod: "s3-secim-bilgilendirme",
    baslik: "Ders seçimi bilgilendirme sayfası",
    aciklama: "Seçim adımları, ölçütler ve sık sorulan sorular.",
    kategori: "bilgi", sinif: 3, gruplar: ["3-sinif-secim"],
    baglanti: "sayfalar/olcme/3-sinif-ders-secimi.html", durum: "aktif", tarih: ""
  },
  {
    kod: "s3-ilgi-anketi",
    baslik: "Öğrenci ilgi ve yönelim anketi",
    aciklama: "Öğrenci doldurur. Doğru ya da yanlış cevabı yoktur.",
    kategori: "anket", sinif: 3, gruplar: ["3-sinif-secim"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "s3-veli-anketi",
    baslik: "Veli görüş anketi",
    aciklama: "Veli, çocuğunun ilgi ve çalışma alışkanlıklarına dair gözlemini paylaşır.",
    kategori: "anket", sinif: 3, gruplar: ["3-sinif-secim"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "s3-secim-sinavi",
    baslik: "Uzmanlık atölyesi seçim sınavı",
    aciklama: "Dört atölyeye özgü kısa görevlerden oluşur.",
    kategori: "sinav", sinif: 3, gruplar: ["3-sinif-secim"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "s3-gorusme-randevu",
    baslik: "Görüşme randevu formu",
    aciklama: "Öğrenci ve veliyle yapılacak bireysel görüşme için gün ve saat seçimi.",
    kategori: "gorusme", sinif: 3, gruplar: ["3-sinif-secim"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "s3-tercih-formu",
    baslik: "Atölye tercih formu",
    aciklama: "Dört atölye tercih sırasına göre dizilir.",
    kategori: "form", sinif: 3, gruplar: ["3-sinif-secim"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "s3-yil-sonu",
    baslik: "3. sınıf atölye yıl sonu değerlendirmesi",
    aciklama: "Atölye ürün sergisi ve yıl sonu görevleri.",
    kategori: "sinav", sinif: 3, gruplar: ["3-sinif-yil-sonu"],
    baglanti: "", durum: "yakinda", tarih: ""
  },

  /* ---------------------------------------------------------- 4. SINIF */
  {
    kod: "s4-bilgilendirme",
    baslik: "4. sınıf mezuniyet sayfası",
    aciklama: "Proje yılı akışı, jüri ölçütleri ve mezuniyet dosyası.",
    kategori: "bilgi", sinif: 4, gruplar: ["4-sinif"],
    baglanti: "sayfalar/olcme/4-sinif-mezuniyet.html", durum: "aktif", tarih: ""
  },
  {
    kod: "s4-proje-oneri",
    baslik: "Proje öneri formu",
    aciklama: "Grup, danışman öğretmeniyle birlikte doldurur.",
    kategori: "form", sinif: 4, gruplar: ["4-sinif"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "s4-juri-takvimi",
    baslik: "Mezuniyet jürisi sunum takvimi",
    aciklama: "Grupların sunum günleri ve saatleri.",
    kategori: "bilgi", sinif: 4, gruplar: ["4-sinif"],
    baglanti: "", durum: "yakinda", tarih: ""
  },

  /* ---------------------------------------------------------- YABANCI DİL */
  {
    kod: "dil-seviye-tespit",
    baslik: "İngilizce seviye tespit sınavı",
    aciklama: "Yıl başında grupların belirlenmesi için yapılır.",
    kategori: "sinav", sinif: "tum", gruplar: ["dil"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "dil-yil-sonu",
    baslik: "İngilizce yıl sonu sınavı",
    aciklama: "Okuma, dinleme ve yazma bölümleri.",
    kategori: "sinav", sinif: "tum", gruplar: ["dil"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "dil-konusma-randevu",
    baslik: "Konuşma sınavı randevusu",
    aciklama: "Sözlü bölüm için gün ve saat seçimi.",
    kategori: "gorusme", sinif: "tum", gruplar: ["dil"],
    baglanti: "", durum: "yakinda", tarih: ""
  },

  /* ---------------------------------------------------------- ETKİNLİKLER */
  {
    kod: "etkinlik-takvimi",
    baslik: "Etkinlik takvimi",
    aciklama: "Yıl boyu etkinlikler ve belirli gün ve haftalar.",
    kategori: "bilgi", sinif: "tum", gruplar: ["etkinlik"],
    baglanti: "sayfalar/etkinlikler/etkinlik-takvimi.html", durum: "aktif", tarih: ""
  },
  {
    kod: "gece-gozlemi-canli",
    baslik: "360° canlı gökyüzü yayını",
    aciklama: "Gece gözlemlerinin 360° kamerayla canlı yayını.",
    kategori: "canli", sinif: "tum", gruplar: ["gece-gozlemi"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "gece-gozlemi-izin",
    baslik: "Gece gözlemi veli izin formu",
    aciklama: "Gece etkinliğine katılım için veli onayı.",
    kategori: "form", sinif: "tum", gruplar: ["gece-gozlemi"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "bilim-senligi-program",
    baslik: "Bilim şenliği programı",
    aciklama: "Stantlar, gösteriler ve sunum saatleri.",
    kategori: "bilgi", sinif: "tum", gruplar: ["bilim-senligi"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "bilim-senligi-geri-bildirim",
    baslik: "Ziyaretçi geri bildirim anketi",
    aciklama: "Şenliği ziyaret eden aileler ve konuklar için.",
    kategori: "anket", sinif: "tum", gruplar: ["bilim-senligi"],
    baglanti: "", durum: "yakinda", tarih: ""
  },
  {
    kod: "cocuk-gorus-anketi",
    baslik: "Öğrenci görüş anketi",
    aciklama: "Çocukların kurum hakkındaki görüş ve önerileri.",
    kategori: "anket", sinif: "tum", gruplar: ["cocuk-haklari"],
    baglanti: "", durum: "yakinda", tarih: ""
  }
];
