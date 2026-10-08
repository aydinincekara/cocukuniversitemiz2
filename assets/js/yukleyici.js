/* ==========================================================================
   ÇOCUK ÜNİVERSİTEMİZ — YÜKLEYİCİ
   --------------------------------------------------------------------------
   Her HTML sayfası yalnızca bu dosyayı çağırır:
     <script src="../../assets/js/yukleyici.js" defer></script>   (alt sayfalar)
     <script src="assets/js/yukleyici.js" defer></script>         (index.html)

   Sitenin kök adresini bu dosyanın konumundan kendisi hesaplar; bu yüzden
   site GitHub Pages'te, bir alt klasörde ya da bilgisayarda çift tıklanarak
   açıldığında da doğru çalışır.

   YENİ BİR VERİ YA DA BİLEŞEN DOSYASI EKLERSENİZ:
   Sadece aşağıdaki DOSYALAR listesine ekleyin. Sayfalara dokunmanız gerekmez.
   ========================================================================== */
(function () {
  "use strict";

  /* Dosyalarda değişiklik yaptığınızda bu numarayı artırın.
     Tarayıcı önbelleğindeki eski dosyaların kullanılmasını engeller. */
  var SURUM = "1.0.0";

  var DOSYALAR = [
    /* 1) Veriler — içerik güncellemelerinin çoğu bu dosyalarda yapılır */
    "assets/veri/site-ayarlari.js",
    "assets/veri/menu.js",
    "assets/veri/dersler.js",
    "assets/veri/qr-kodlari.js",
    "assets/veri/duyurular.js",

    /* 2) Çekirdek */
    "assets/js/ikonlar.js",
    "assets/js/cekirdek.js",

    /* 3) Bileşenler (şablonlar) */
    "assets/js/bilesenler/ust-bolum.js",
    "assets/js/bilesenler/alt-bolum.js",
    "assets/js/bilesenler/dokuman.js",
    "assets/js/bilesenler/dersler.js",
    "assets/js/bilesenler/qr.js",
    "assets/js/bilesenler/duyurular.js",

    /* 4) Sayfa etkileşimleri */
    "assets/js/etkilesim.js"
  ];

  var betik = document.currentScript;
  var kok = new URL("../../", betik.src).href;

  window.CU = window.CU || {};
  window.CU.kok = kok;
  window.CU.surum = SURUM;

  DOSYALAR.forEach(function (yol) {
    var s = document.createElement("script");
    s.src = kok + yol + "?v=" + SURUM;
    s.async = false; /* Sıra korunur */
    document.head.appendChild(s);
  });
})();
