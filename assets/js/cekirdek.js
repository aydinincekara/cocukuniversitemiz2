/* ==========================================================================
   ÇEKİRDEK — tüm bileşenlerin kullandığı ortak yardımcılar
   Bu dosyada içerik yoktur; genellikle değiştirmeniz gerekmez.
   ========================================================================== */
(function () {
  "use strict";

  var CU = window.CU;
  CU.ayarlar = window.CU_AYARLAR || {};
  CU.menu = window.CU_MENU || [];
  CU.seviyeler = window.CU_SEVIYELER || [];
  CU.dersler = window.CU_DERSLER || [];
  CU.qrKodlari = window.CU_QR_KODLARI || [];
  CU.duyurular = window.CU_DUYURULAR || [];
  var IKONLAR = window.CU_IKONLAR || {};

  /* HTML'e güvenle yazmak için */
  CU.kacis = function (metin) {
    return String(metin == null ? "" : metin).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  CU.disBaglanti = function (yol) {
    return /^(https?:)?\/\//i.test(yol) || /^(mailto|tel):/i.test(yol);
  };

  /* Site köküne göre yolu tam adrese çevirir: "sayfalar/x.html" → ".../sayfalar/x.html" */
  CU.url = function (yol) {
    if (!yol) return "#";
    if (CU.disBaglanti(yol) || yol.charAt(0) === "#") return yol;
    return new URL(yol, CU.kok).href;
  };

  /* QR kodlarında kullanılacak adres (site-ayarlari.js > yayinAdresi) */
  CU.yayinUrl = function (yol) {
    if (!yol) return "";
    if (/^https?:\/\//i.test(yol)) return yol;
    var taban = String(CU.ayarlar.yayinAdresi || "").trim();
    if (taban) {
      if (!/\/$/.test(taban)) taban += "/";
      return new URL(yol, taban).href;
    }
    return CU.url(yol);
  };

  /* İki adresin aynı sayfayı gösterip göstermediğini anlamak için */
  CU.yolAnahtari = function (adres) {
    var yol = new URL(adres, location.href).pathname;
    try { yol = decodeURIComponent(yol); } catch (e) { /* olduğu gibi bırak */ }
    return yol.replace(/\/index(\.html)?$/, "/").replace(/\.html$/, "").replace(/\/+$/, "") || "/";
  };

  CU.tumSayfalar = function () {
    var liste = [];
    CU.menu.forEach(function (grup) {
      (grup.sayfalar || []).forEach(function (sayfa) {
        if (!sayfa.gizli) liste.push({ grup: grup, sayfa: sayfa });
      });
    });
    return liste;
  };

  var aktifOnbellek;
  CU.aktifSayfa = function () {
    if (aktifOnbellek !== undefined) return aktifOnbellek;
    var anahtar = CU.yolAnahtari(location.href);
    var liste = CU.tumSayfalar();
    aktifOnbellek = null;
    for (var i = 0; i < liste.length; i++) {
      if (CU.yolAnahtari(CU.url(liste[i].sayfa.yol)) === anahtar) {
        aktifOnbellek = { grup: liste[i].grup, sayfa: liste[i].sayfa, sira: i, liste: liste };
        break;
      }
    }
    return aktifOnbellek;
  };

  CU.seviye = function (no) {
    no = Number(no);
    for (var i = 0; i < CU.seviyeler.length; i++) {
      if (CU.seviyeler[i].no === no) return CU.seviyeler[i];
    }
    return null;
  };

  /* "1/4" gösterimi: Çocuk Üniversitesi yılı / okuldaki sınıf */
  CU.kesir = function (seviye, ekSinif) {
    if (!seviye) return "";
    return '<span class="kesir' + (ekSinif ? " " + ekSinif : "") + '" aria-label="' + seviye.no + ". sınıf, okulda " + seviye.okulSinifi + '. sınıf">' +
      '<span class="kesir__ust">' + seviye.no + '</span><span class="kesir__cizgi">/</span><span class="kesir__alt">' + seviye.okulSinifi + "</span></span>";
  };

  CU.ikon = function (ad, ekSinif) {
    var ic = IKONLAR[ad];
    if (!ic) return "";
    return '<svg class="ikon' + (ekSinif ? " " + ekSinif : "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + ic + "</svg>";
  };

  CU.slug = function (metin) {
    var harita = { "ç": "c", "ğ": "g", "ı": "i", "İ": "i", "ö": "o", "ş": "s", "ü": "u", "Ç": "c", "Ğ": "g", "Ö": "o", "Ş": "s", "Ü": "u" };
    return String(metin)
      .replace(/[çğıİöşüÇĞÖŞÜ]/g, function (c) { return harita[c]; })
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  CU.tarihYaz = function (iso) {
    var t = new Date(iso + "T12:00:00");
    if (isNaN(t)) return iso;
    return t.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  };

  /* İletişim bilgilerini (boş olmayanları) liste olarak üretir */
  CU.iletisimListesi = function (sinif) {
    var i = CU.ayarlar.iletisim || {};
    var satirlar = [];
    if (i.adres) {
      var adres = CU.kacis(i.adres);
      if (i.haritaBaglantisi) adres = '<a href="' + CU.kacis(i.haritaBaglantisi) + '" target="_blank" rel="noopener">' + adres + "</a>";
      satirlar.push("<li>" + CU.ikon("map-pin") + "<span>" + adres + "</span></li>");
    }
    if (i.telefon) satirlar.push('<li>' + CU.ikon("phone") + '<a href="tel:' + CU.kacis(i.telefon.replace(/\s+/g, "")) + '">' + CU.kacis(i.telefon) + "</a></li>");
    if (i.eposta) satirlar.push('<li>' + CU.ikon("mail") + '<a href="mailto:' + CU.kacis(i.eposta) + '">' + CU.kacis(i.eposta) + "</a></li>");
    if (i.calismaSaatleri) satirlar.push("<li>" + CU.ikon("clock") + "<span>" + CU.kacis(i.calismaSaatleri) + "</span></li>");
    if (i.kurumSitesi) satirlar.push('<li>' + CU.ikon("globe") + '<a href="' + CU.kacis(i.kurumSitesi) + '" target="_blank" rel="noopener">' + CU.kacis(i.kurumSitesi.replace(/^https?:\/\//, "").replace(/\/$/, "")) + "</a></li>");
    if (!satirlar.length) return "";
    return '<ul class="iletisim-listesi' + (sinif ? " " + sinif : "") + '">' + satirlar.join("") + "</ul>";
  };

  CU.tanimla = function (ad, sinif) {
    if (!customElements.get(ad)) customElements.define(ad, sinif);
  };

  /* <cu-ikon ad="telescope"></cu-ikon> */
  CU.tanimla("cu-ikon", class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = CU.ikon(this.getAttribute("ad"));
    }
  });

  /* <cu-kesir seviye="3"></cu-kesir> */
  CU.tanimla("cu-kesir", class extends HTMLElement {
    connectedCallback() {
      var sv = CU.seviye(this.getAttribute("seviye"));
      if (sv) {
        this.classList.add("seviye-" + sv.no);
        this.innerHTML = CU.kesir(sv);
      }
    }
  });
})();
