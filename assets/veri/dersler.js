/* ==========================================================================
   SINIF SEVİYELERİ VE DERSLER
   --------------------------------------------------------------------------
   Kaynak: 2026–2027 Tanıtım ve Veli Bilgilendirme Sunumları
           (hafta sonu 4 yıllık program + hafta içi GELİŞİM programı)

   Bu dosyadaki bir ders; Dersler sayfasında, ilgili sınıf sayfasında,
   değerlendirme sayfalarındaki "ders çıktıları" tablosunda, ders programı
   tablolarında ve ana sayfadaki dört yıllık yolda aynı anda güncellenir.

   Ders alanları:
     id         : Benzersiz kısa ad (sayfa içi bağlantı: dersler.html#ders-<id>)
     ad         : Dersin adı
     sinif      : 1, 2, 3, 4 ya da "tum" (tüm yıllar boyunca süren dersler)
     program    : "haftasonu" | "haftaici" | "her-ikisi"
     ikon       : assets/js/ikonlar.js içindeki ikon adı
     saat       : Haftalık ders saati (sayı)
     mekan      : Dersin işlendiği atölye ya da sınıf
     amac       : 1–2 cümlelik amaç
     hedefler   : Öğrencinin ders sonunda yapabilecekleri
     moduller   : (isteğe bağlı) Dersin modülleri
     cikti      : Dersin yıl sonunda ortaya koyduğu ürün
     portfolyo  : (isteğe bağlı) Dersin portfolyoya giren çalışmaları
     sayfa      : (isteğe bağlı) Dersin ayrıntı sayfası
   ========================================================================== */

window.CU_SEVIYELER = [
  {
    no: 1, okulSinifi: 4, ad: "Keşif yılı",
    tema: "TANI", soru: "Ben kimim?",
    ozet: "Öğrenciyi tanıma, gözlemleme ve farklı alanlarla buluşturma yılı. Akademik Atölye'de altı alanı kısa modüllerle dener.",
    duzen: "Hafta sonu bir tam gün · 10 ders saati + 3 saat Yabancı Dil",
    sayfa: "sayfalar/egitim/1-sinif.html",
    degerlendirme: "sayfalar/olcme/1-sinif-degerlendirme.html"
  },
  {
    no: 2, okulSinifi: 5, ad: "Beceri yılı",
    tema: "KEŞFET", soru: "Neleri seviyorum?",
    ozet: "İlgi alanlarını ve güçlü yönleri keşfetme yılı. Üretim araçlarıyla tanışır; her derste ayrı bir ürün ortaya koyar.",
    duzen: "Hafta sonu iki gün · her gün 6 ders + 3 saat Yabancı Dil",
    sayfa: "sayfalar/egitim/2-sinif.html",
    degerlendirme: "sayfalar/olcme/2-sinif-degerlendirme.html"
  },
  {
    no: 3, okulSinifi: 6, ad: "Uzmanlık yılı",
    tema: "DERİNLEŞ", soru: "Neyi geliştireyim?",
    ozet: "Dört uzmanlık laboratuvarından ikisini seçer, aynı öğretmenle uzun bloklar hâlinde çalışır ve proje düzeyinde üretmeye başlar.",
    duzen: "Seçilen 2 atölye · 6'şar ders saati + 3 saat Yabancı Dil",
    sayfa: "sayfalar/egitim/3-sinif.html",
    degerlendirme: "sayfalar/olcme/3-sinif-ders-secimi.html"
  },
  {
    no: 4, okulSinifi: 7, ad: "Proje yılı",
    tema: "ÜRET", soru: "Nasıl ürüne dönüşür?",
    ozet: "Grup hâlinde bitirme projesi yürütür; problemden ürüne giden beş aşamayı tamamlar ve kurum jürisi önünde savunur.",
    duzen: "Haftalık 6 ders saati proje + 3 saat Yabancı Dil",
    sayfa: "sayfalar/egitim/4-sinif.html",
    degerlendirme: "sayfalar/olcme/4-sinif-mezuniyet.html"
  }
];

window.CU_DERSLER = [
  /* ---------------------------------------------------------------- 1. SINIF */
  {
    id: "cu101-dijital-dunya",
    ad: "Çocuk Üniversitesi 101 ve Dijital Dünya 101",
    sinif: 1, program: "haftasonu", saat: 2,
    mekan: "Bilgisayar Laboratuvarı",
    ikon: "graduation-cap",
    amac: "Üniversite kültürüyle tanışma, araştırma alışkanlığı, takım çalışması ve bilimsel etik; dijital teknolojileri bilinçli ve üretken biçimde kullanma.",
    hedefler: [
      "Merak eden, soru soran ve kendini ifade eden bir öğrenme alışkanlığı kazanır.",
      "Araştırma yaparken kaynak seçer ve çalışmasını kayıt altına alır.",
      "Yapay zekâyı doğru amaçla ve sorumlu biçimde kullanır.",
      "Güvenli internet davranışlarını, dijital etiği ve içerik üretimini uygular."
    ],
    cikti: "Öğrenme günlüğü ve dijital içerik çalışması",
    portfolyo: ["Öğrenme günlüğü sayfaları", "Dijital güvenlik çalışması", "İlk dijital içerik denemesi"]
  },
  {
    id: "bilimsel-dusunceye-giris",
    ad: "Bilimsel Düşünceye Giriş",
    sinif: 1, program: "her-ikisi", saat: 2,
    mekan: "Fen Bilimleri Sınıfı",
    ikon: "flask-conical",
    amac: "Bakmakla görmek arasındaki farkı kavratmak; güçlü soru sormaktan hipotez kurmaya, deney tasarlamaktan veriyi konuşturmaya uzanan bilimsel süreci işletmek.",
    hedefler: [
      "Bilim, teknoloji, sanat ve girişimcilik alanlarını tanır.",
      "Güçlü soru sorar, hipotez kurar ve deney tasarlar.",
      "Verisini grafikle sunar ve yorumlar.",
      "Haftalık araştırma günlüğü tutar."
    ],
    cikti: "Araştırma günlüğü ve deney posteri",
    portfolyo: ["Araştırma günlüğü", "Deney posteri", "Veri tablosu ve grafiği"]
  },
  {
    id: "felsefe-p4c",
    ad: "Çocuklar için Felsefe — P4C",
    sinif: 1, program: "her-ikisi", saat: 2,
    mekan: "Felsefe Sınıfı",
    ikon: "message-circle-question",
    amac: "Öğrencilerin eleştirel, yaratıcı, özenli ve iş birlikçi düşünme becerilerini geliştirmek; soru sorma, gerekçe sunma, farklı görüşleri dinleme ve kendi düşüncelerini temellendirerek ifade etme alışkanlığı kazandırmak.",
    hedefler: [
      "Bir hikâye, resim ya da nesneden felsefi soru üretir.",
      "Görüşünü gerekçeleriyle ifade eder.",
      "Farklı görüşleri dinler ve değerlendirir.",
      "Kavramları örnek ve karşı örnekle sınar."
    ],
    cikti: "Sorgulama oturumu ve düşünce haritası",
    portfolyo: ["Düşünce haritası", "Sorgulama oturumu notları", "Ürettiği felsefi sorular"]
  },
  {
    id: "akademik-atolye",
    ad: "Akademik Atölye",
    sinif: 1, program: "haftasonu", saat: 2,
    mekan: "Fen Atölyesi ve ilgili laboratuvarlar",
    ikon: "layers",
    amac: "Öğrencilerin farklı akademik disiplinleri ve laboratuvar ortamlarını deneyimleyerek ilgi ve yetenek alanlarını keşfetmesini sağlar.",
    moduller: ["Fen ve Bilim 101", "Astronomi", "Tasarım", "Robotik", "Sanat ve Müzik", "Girişimcilik"],
    hedefler: [
      "Her modülün temel çalışma biçimini deneyimler.",
      "Farklı laboratuvar kültürlerini tanır.",
      "Her modülde mini bir ürün ortaya koyar.",
      "Hangi alanlarda neden daha istekli olduğunu ifade eder."
    ],
    cikti: "Modül ürünleri ve kişisel ilgi haritası",
    portfolyo: ["Altı modülün mini ürünleri", "Modül fotoğrafları", "Kişisel ilgi haritası"]
  },
  {
    id: "strateji-akil-oyunlari",
    ad: "Strateji ve Akıl Oyunları",
    sinif: 1, program: "haftasonu", saat: 2,
    mekan: "Akıl ve Zekâ Atölyesi",
    ikon: "chess-knight",
    amac: "Oyun → düşünme → strateji → çözüm. Amaç oyun oynamak değil, çözüm bulmak: mantık, dikkat, hafıza ve sabırla farklı yolları deneme alışkanlığı kazandırmak.",
    hedefler: [
      "Kuralı öğrenir ve deneyerek çözüm arar.",
      "Hamle yapmadan önce seçenekleri karşılaştırır.",
      "Strateji geliştirir ve sonucu değerlendirir.",
      "Kazanmayı ve kaybetmeyi sportmence karşılar."
    ],
    cikti: "Sınıf turnuvası ve oyun analizi",
    portfolyo: ["Turnuva kaydı", "Oyun analiz notları"]
  },

  /* ---------------------------------------------------------------- 2. SINIF */
  {
    id: "tasarim-odakli-dusunme",
    ad: "Tasarım Odaklı Düşünme",
    sinif: 2, program: "her-ikisi", saat: 2,
    mekan: "Bilgisayar Laboratuvarı",
    ikon: "compass",
    amac: "Öğrencilerin çevrelerindeki problemleri fark etmelerini, kullanıcı odaklı düşünmelerini, yaratıcı fikirler geliştirmelerini, prototip üretmelerini ve çözüm önerilerini test ederek geliştirmelerini sağlar.",
    hedefler: [
      "İhtiyacı kullanıcının gözünden tanımlar.",
      "Çok sayıda fikir üretir ve birini gerekçesiyle seçer.",
      "Hızlı prototip hazırlar.",
      "Kullanıcıyla test eder ve geri bildirimle geliştirir."
    ],
    cikti: "Prototip ve tasarım süreci panosu",
    portfolyo: ["Empati ve fikir notları", "Prototip fotoğrafları", "Kullanıcı testi geri bildirimi"]
  },
  {
    id: "kodlama-ve-robotik",
    ad: "Kodlama ve Robotik",
    sinif: 2, program: "her-ikisi", saat: 2,
    mekan: "Robotik Kodlama Atölyesi",
    ikon: "bot",
    amac: "Algoritmik düşünme ve problem çözme becerisi geliştirir; kodlama mantığını robotlarla fiziksel dünyaya taşır.",
    hedefler: [
      "Problemleri adımlara ayırarak çözüm üretir.",
      "Döngü, koşul ve değişken gibi temel programlama kavramlarını kullanır.",
      "Robotların çalışma prensiplerini ve temel bileşenlerini tanır.",
      "Sensör, motor ve kontrol sistemlerini kullanarak görev çözer."
    ],
    cikti: "Görev çözen robot projesi",
    portfolyo: ["Robot proje videosu", "Kod dosyaları", "Görev çözüm kaydı"]
  },
  {
    id: "dijital-tasarim-lab",
    ad: "Dijital Tasarım Laboratuvarı",
    sinif: 2, program: "haftasonu", saat: 2,
    mekan: "3D Tasarım Sınıfı",
    ikon: "box",
    amac: "Fikirleri dijital ortamda üç boyutlu modellere dönüştürmeyi ve bu modelleri 3D baskı ile gerçek ürüne çevirmeyi öğretir.",
    hedefler: [
      "Ölçülü iki ve üç boyutlu çizim hazırlar.",
      "Modelini 3D baskıya hazırlar.",
      "Maker atölyesi uygulamalarıyla üretim yapar.",
      "Ürününü ölçü ve işlev açısından değerlendirir."
    ],
    cikti: "Üretilmiş 3D model",
    portfolyo: ["3D model dosyası", "Baskı öncesi ve sonrası fotoğraflar"]
  },
  {
    id: "bilimsel-arastirmalar-atolyesi",
    ad: "Bilimsel Araştırmalar Atölyesi",
    sinif: 2, program: "haftasonu", saat: 2,
    mekan: "Fen Bilimleri Sınıfı",
    ikon: "microscope",
    amac: "Öğrencinin kendi araştırma sorusunu seçip veri toplayarak, kayıt tutarak ve sonuç çıkararak küçük ölçekli bir araştırma yürütmesini sağlar.",
    hedefler: [
      "Araştırılabilir bir soru seçer.",
      "Güvenilir kaynağı güvenilmez kaynaktan ayırt eder.",
      "Ölçüm ya da anketle veri toplar ve kayıt tutar.",
      "Bulgularını poster ve kısa sunumla paylaşır."
    ],
    cikti: "Araştırma posteri ve sunumu",
    portfolyo: ["Araştırma posteri", "Veri kayıt formu", "Sunum videosu"]
  },
  {
    id: "sanat-terapisi",
    ad: "Sanat Terapisi",
    sinif: 2, program: "haftasonu", saat: 2,
    mekan: "Sanat ve Sanat Terapisi Sınıfı",
    ikon: "palette",
    amac: "Duyguyu ifade etme, üretim yoluyla rahatlama ve öz farkındalık geliştirme.",
    hedefler: [
      "Duygularını renk, biçim ve malzemeyle ifade eder.",
      "Farklı sanat malzemeleri ve teknikleriyle çalışır.",
      "Grup çalışmalarında paylaşımı deneyimler.",
      "Kendi ve arkadaşlarının çalışmalarına saygıyla yaklaşır."
    ],
    cikti: "Kişisel sanat dosyası ve grup çalışması",
    portfolyo: ["Kişisel sanat dosyası", "Grup çalışması fotoğrafları"]
  },
  {
    id: "strateji-ve-zeka-oyunlari",
    ad: "Strateji ve Zekâ Oyunları",
    sinif: 2, program: "haftasonu", saat: 2,
    mekan: "Akıl ve Zekâ Atölyesi",
    ikon: "puzzle",
    amac: "Birinci yılda kazanılan oyun becerilerini uzun vadeli plan kurma ve turnuva deneyimiyle derinleştirir.",
    hedefler: [
      "Oyunlarda kısa ve uzun vadeli plan kurar.",
      "Rakibinin olası hamlelerini hesaba katar.",
      "Kendi oyununu kaydeder ve analiz eder.",
      "Turnuva formatındaki karşılaşmalarda sorumluluk alır."
    ],
    cikti: "Turnuva katılımı ve oyun analiz defteri",
    portfolyo: ["Oyun analiz defteri", "Turnuva sonuçları"]
  },

  /* ---------------------------------------------------- 3. SINIF — UZMANLIK ATÖLYELERİ */
  {
    id: "yazilim-ve-yz-lab",
    ad: "Yazılım ve Yapay Zekâ Laboratuvarı",
    sinif: 3, program: "haftasonu", saat: 6,
    mekan: "Bilgisayar Laboratuvarı",
    ikon: "brain-circuit",
    sayfa: "sayfalar/atolyeler/yazilim-yapay-zeka.html",
    amac: "Python ile programlamayı, yapay zekâ araçlarını sorumlu biçimde kullanmayı ve üretilen projeleri internette yayınlamayı öğretir; ekip hâlinde çalışmayı ve portfolyo sunmayı alışkanlık hâline getirir.",
    hedefler: [
      "Python ile veri işleyen programlar yazar.",
      "Yapay zekâ araçlarıyla web sayfası üretir ve sayfayı kendisi revize eder.",
      "Projesini Streamlit gibi araçlarla çevrim içi yayınlar.",
      "Dışarıdan veri çeken küçük otomasyonlar kurar.",
      "Çalışmalarını GitHub'da portfolyo olarak yayınlar ve sunar."
    ],
    cikti: "Yayında olan proje ve dijital portfolyo",
    portfolyo: ["Yayındaki projenin bağlantısı", "GitHub deposu ve kod dosyaları", "Ekip içindeki görev kaydı", "Proje tanıtım videosu"]
  },
  {
    id: "bilim-kesif-astronomi",
    ad: "Bilim, Keşif ve Astronomi Laboratuvarı",
    sinif: 3, program: "haftasonu", saat: 6,
    mekan: "Fen Bilimleri Sınıfı ve Uzay ve Astronomi Araştırmaları Lab.",
    ikon: "telescope",
    sayfa: "sayfalar/atolyeler/bilim-kesif-astronomi.html",
    amac: "Gökyüzünü gözlemleyerek, simülasyonla modelleyerek ve roket üreterek bilim ve uzay araştırmalarını uygulamalı yürütür.",
    hedefler: [
      "Stellarium ile gözlem planı hazırlar.",
      "Gece ve güneş gözlemlerinde güvenlik kurallarına uyarak gözlem kaydı tutar.",
      "Planetaryum çalışmalarında gök olaylarını açıklar.",
      "Mini roket tasarlar, üretir ve fırlatma verilerini değerlendirir.",
      "Deney sonuçlarını bilimsel bir raporla sunar."
    ],
    cikti: "Gözlem defteri, mini roket ve araştırma raporu",
    portfolyo: ["Gözlem defteri ve gözlem fotoğrafları", "Mini roket üretim dosyası ve fırlatma verileri", "Araştırma raporu", "Deney videoları"]
  },
  {
    id: "tasarim-ve-3d-studyo",
    ad: "Tasarım ve 3D Stüdyo",
    sinif: 3, program: "haftasonu", saat: 6,
    mekan: "3D Tasarım Sınıfı",
    ikon: "shapes",
    sayfa: "sayfalar/atolyeler/tasarim-3d-studyo.html",
    amac: "Dijital tasarımı 3D baskı, lazer kesim ve maker uygulamalarıyla birleştirerek fikirden çalışan ürüne uzanan üretim sürecini öğretir.",
    hedefler: [
      "Ölçülü ve düzenlenebilir 3D model hazırlar.",
      "Modelini baskıya hazırlar ve 3D yazıcıyla üretir.",
      "3D tarayıcı, lazer kesim ve el aletleriyle çalışır.",
      "Parçaları birleştirir, test eder ve tasarımını iyileştirir."
    ],
    cikti: "Üretilmiş ürün ve tasarım dosyası",
    portfolyo: ["Model dosyaları ve sürümleri", "Üretilmiş ürünün fotoğrafları", "Ölçü ve revizyon notları", "Montaj videosu"]
  },
  {
    id: "havacilik-model-ucak-iha",
    ad: "Havacılık, Model Uçak ve İHA Laboratuvarı",
    sinif: 3, program: "haftasonu", saat: 6,
    mekan: "Model Uçak Atölyesi",
    ikon: "plane",
    sayfa: "sayfalar/atolyeler/havacilik-model-ucak-iha.html",
    amac: "Uçuşun temel ilkelerini model uçak üretimi, insansız hava aracı sistemleri ve uçuş simülatörleriyle deneyerek öğretir.",
    hedefler: [
      "Uçuşu etkileyen kuvvetleri açıklar.",
      "Model uçak parçalarını keserek ve birleştirerek üretir.",
      "Uçuş simülatöründe temel manevraları uygular.",
      "İHA bileşenlerini tanır ve güvenli uçuş kurallarına uyar."
    ],
    cikti: "Uçan model ve uçuş kayıt defteri",
    portfolyo: ["Model uçak üretim fotoğrafları", "Uçuş kayıt defteri", "Simülatör uçuş kaydı", "Uçuş denemesi videoları"]
  },

  /* ---------------------------------------------------------------- 4. SINIF */
  {
    id: "bitirme-projesi",
    ad: "Bitirme Projesi",
    sinif: 4, program: "haftasonu", saat: 6,
    mekan: "Projenin alanına göre ilgili laboratuvar",
    ikon: "rocket",
    sayfa: "sayfalar/atolyeler/bitirme-projesi.html",
    amac: "Öğrenciler grup hâlinde gerçek bir problem seçer, çözüm tasarlar, ürüne dönüştürür ve kurum jürisi önünde savunur. Her proje grubunun bir mentörü vardır.",
    hedefler: [
      "Grubuyla bir problem seçer ve çalışma planı kurar.",
      "Kaynak taraması yaparak çözümünü temellendirir.",
      "Tasarımını fiziksel ya da dijital bir ürüne dönüştürür.",
      "Takım içinde görev paylaşır ve süreci kayıt altına alır.",
      "Projesini jüri önünde savunur ve Bilim Şenliği'nde sergiler."
    ],
    cikti: "Bitirme projesi ve dijital portfolyo",
    portfolyo: ["Proje öneri formu", "Araştırma ve tasarım notları", "Prototip ve test kayıtları", "Proje dosyası (poster, rapor ya da web sayfası)", "Jüri sunumu videosu"]
  },

  /* ---------------------------------------------------- HAFTA İÇİ GELİŞİM PROGRAMI */
  {
    id: "yasam-ve-sosyal-beceriler",
    ad: "Yaşam ve Sosyal Beceriler",
    sinif: 1, program: "haftaici", saat: 2,
    mekan: "Derslik-1",
    ikon: "hand-heart",
    amac: "Çocukların yalnızca vatandaşlık kavramlarını öğrenmesini değil; günlük yaşamda adil karar vermesini, ortak kurallara katılmasını, haklarını savunurken başkalarının haklarını gözetmesini ve yaşadığı çevreye karşı sorumluluk üstlenmesini amaçlar.",
    hedefler: [
      "Günlük yaşamda adil karar verir.",
      "Ortak kuralların oluşturulmasına katılır.",
      "Haklarını savunurken başkalarının haklarını gözetir.",
      "Yaşadığı çevreye karşı sorumluluk üstlenir."
    ],
    cikti: "Sınıf anlaşması ve sorumluluk projesi",
    portfolyo: ["Sınıf anlaşması", "Sorumluluk projesi kaydı"]
  },
  {
    id: "satranc-ve-akil-oyunlari",
    ad: "Satranç ve Akıl Oyunları",
    sinif: 1, program: "haftaici", saat: 2,
    mekan: "Akıl ve Zekâ Atölyesi",
    ikon: "chess-knight",
    amac: "Kurallı, eğlenceli ve düşündürücü problem çözme etkinlikleriyle mantık ve akıl yürütmeyi geliştirir; dikkat, hafıza ve odaklanmayı destekler.",
    hedefler: [
      "Satrancın kurallarını ve temel açılış ilkelerini uygular.",
      "Strateji kurar ve doğru karar verme becerisi geliştirir.",
      "Sabır, deneme ve farklı yollar düşünme alışkanlığı kazanır.",
      "Sonucu değerlendirir ve oyununu analiz eder."
    ],
    cikti: "Turnuva katılımı ve oyun analizi",
    portfolyo: ["Turnuva kaydı", "Oyun analizi"]
  },

  /* ---------------------------------------------------------- TÜM YILLAR */
  {
    id: "yabanci-dil",
    ad: "Yabancı Dil Atölyesi (İngilizce)",
    sinif: "tum", program: "haftasonu", saat: 3,
    mekan: "İngilizce ve Dil Sınıfı",
    ikon: "languages",
    amac: "İngilizce, uluslararası iletişimin vazgeçilmezi hâline gelmiş küresel bir dildir. Atölye, çocukların İngilizce dil yeterliliğini ideal seviyeye taşımayı hedefler.",
    hedefler: [
      "Seviye Belirleme Sınavı ile uygun kura yerleşir.",
      "Avrupa çerçevesi standartlarında (A1, A2, B1) seviyesine uygun ilerler.",
      "Seviyesine uygun dinlediğini ve okuduğunu anlar.",
      "Kendini tanıtır, sınıf içi iletişime katılır ve kısa sunum yapar."
    ],
    cikti: "Seviye sınavları ve İngilizce proje sunumu",
    portfolyo: ["Seviye belirleme ve yıl sonu sınavı sonuçları", "İngilizce proje sunumu", "Konuşma kaydı"]
  }
];
