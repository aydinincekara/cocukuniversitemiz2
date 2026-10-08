/* ==========================================================================
   ALT BÖLÜM ŞABLONU — <cu-alt></cu-alt>
   Metinler: assets/veri/site-ayarlari.js   Görünüm: assets/css/alt-bolum.css
   Sütunlar menu.js dosyasındaki gruplardan otomatik oluşur.
   ========================================================================== */
(function () {
  "use strict";
  var CU = window.CU;

  CU.tanimla("cu-alt", class extends HTMLElement {
    connectedCallback() {
      if (this._hazir) return;
      this._hazir = true;

      var a = CU.ayarlar;
      var alt = a.altBilgi || {};

      var sutunlar = CU.menu.map(function (grup) {
        var baglantilar = (grup.sayfalar || []).filter(function (s) { return !s.gizli; }).map(function (s) {
          return '<li><a href="' + CU.url(s.yol) + '">' + CU.kacis(s.baslik) + "</a></li>";
        }).join("");
        return '<div class="alt__sutun"><h2 class="alt__baslik">' + CU.kacis(grup.baslik) + "</h2><ul>" + baglantilar + "</ul></div>";
      }).join("");

      var ekler = (alt.ekBaglantilar || []).map(function (b) {
        return '<a href="' + CU.url(b.yol) + '">' + CU.kacis(b.baslik) + "</a>";
      }).join("");

      this.innerHTML =
        '<footer class="alt">' +
        '<div class="alt__ust">' +
        '<div class="alt__kurum">' +
        '<a class="alt__logo" href="' + CU.url("index.html") + '">' +
        '<img src="' + CU.url("assets/img/logo.svg") + '" alt="" width="44" height="44">' +
        '<span><span class="alt__site-adi">' + CU.kacis(a.siteAdi) + "</span>" +
        '<span class="alt__kurum-adi">' + CU.kacis(a.kurumAdi) + "</span></span></a>" +
        (alt.tanitim ? '<p class="alt__tanitim">' + CU.kacis(alt.tanitim) + "</p>" : "") +
        CU.iletisimListesi("alt__iletisim") +
        "</div>" +
        '<nav class="alt__menuler" aria-label="Site haritası">' + sutunlar + "</nav>" +
        "</div>" +
        '<div class="alt__alt">' +
        "<p>© " + new Date().getFullYear() + " " + CU.kacis(alt.telif || a.tamAd) + "</p>" +
        (ekler ? '<p class="alt__ek">' + ekler + "</p>" : "") +
        "</div></footer>";
    }
  });
})();
