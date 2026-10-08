/* ==========================================================================
   DUYURU BİLEŞENİ — veriler: assets/veri/duyurular.js
   <cu-duyurular sinir="3"></cu-duyurular>   En yeni 3 duyuru
   <cu-duyurular></cu-duyurular>             Tüm duyurular
   ========================================================================== */
(function () {
  "use strict";
  var CU = window.CU;

  CU.tanimla("cu-duyurular", class extends HTMLElement {
    connectedCallback() {
      if (this._hazir) return;
      this._hazir = true;

      var sinir = parseInt(this.getAttribute("sinir"), 10) || 0;
      var duzey = this.getAttribute("baslik-duzeyi") || "3";
      var liste = CU.duyurular.slice().sort(function (a, b) { return a.tarih < b.tarih ? 1 : a.tarih > b.tarih ? -1 : 0; });
      if (sinir) liste = liste.slice(0, sinir);

      if (!liste.length) {
        this.innerHTML = '<p class="soluk">Şu anda yayında duyuru yok.</p>';
        return;
      }

      this.innerHTML = '<ul class="duyurular">' + liste.map(function (d) {
        var baslik = d.baglanti
          ? '<a href="' + CU.kacis(CU.url(d.baglanti)) + '"' + (CU.disBaglanti(d.baglanti) ? ' target="_blank" rel="noopener"' : "") + ">" + CU.kacis(d.baslik) + "</a>"
          : CU.kacis(d.baslik);
        return '<li class="duyuru">' +
          '<p class="duyuru__ust"><time datetime="' + CU.kacis(d.tarih) + '">' + CU.tarihYaz(d.tarih) + "</time>" +
          (d.etiket ? '<span class="etiket">' + CU.kacis(d.etiket) + "</span>" : "") + "</p>" +
          "<h" + duzey + ' class="duyuru__baslik">' + baslik + "</h" + duzey + ">" +
          (d.ozet ? '<p class="duyuru__ozet">' + CU.kacis(d.ozet) + "</p>" : "") +
          "</li>";
      }).join("") + "</ul>";
    }
  });
})();
