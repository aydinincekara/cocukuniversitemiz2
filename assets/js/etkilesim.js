/* ==========================================================================
   SAYFA ETKİLEŞİMLERİ
   Bileşenler hazırlandıktan sonra çalışan küçük davranışlar.
   ========================================================================== */
(function () {
  "use strict";

  /* Adres çubuğunda #bolum varsa, başlık kimlikleri bileşenlerce üretildikten
     sonra o bölüme git */
  if (location.hash.length > 1) {
    var hedef = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (hedef) {
      requestAnimationFrame(function () { hedef.scrollIntoView(); });
      if (hedef.tagName === "DETAILS") hedef.open = true;
      var detay = hedef.querySelector("details");
      if (detay && hedef.classList.contains("ders")) detay.open = true;
    }
  }

  /* Yeni sekmede açılan dış bağlantılara güvenlik özniteliği */
  Array.prototype.forEach.call(document.querySelectorAll('a[target="_blank"]:not([rel])'), function (a) {
    a.setAttribute("rel", "noopener");
  });

  document.documentElement.classList.add("js-hazir");
})();
