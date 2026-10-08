/* ==========================================================================
   ÜST BÖLÜM ŞABLONU — <cu-ust></cu-ust>
   Menü içeriği: assets/veri/menu.js   Görünüm: assets/css/ust-bolum.css
   ========================================================================== */
(function () {
  "use strict";
  var CU = window.CU;

  function panelHTML(grup, sira, aktif) {
    var kimlik = "ust-panel-" + (grup.kimlik || sira);
    var gorunur = (grup.sayfalar || []).filter(function (s) { return !s.gizli; });
    var aktifGrup = aktif && aktif.grup === grup;

    var baglantilar = gorunur.map(function (s) {
      var gecerli = aktif && aktif.sayfa === s;
      return '<li><a class="ust-panel__baglanti' + (s.seviye ? " seviye-" + s.seviye : "") + '" href="' + CU.url(s.yol) + '"' + (gecerli ? ' aria-current="page"' : "") + ">" +
        '<span class="ust-panel__ikon">' + CU.ikon(s.ikon || grup.ikon) + "</span>" +
        '<span class="ust-panel__metin"><span class="ust-panel__baslik">' + CU.kacis(s.baslik) + "</span>" +
        (s.aciklama ? '<span class="ust-panel__aciklama">' + CU.kacis(s.aciklama) + "</span>" : "") +
        "</span></a></li>";
    }).join("");

    return '<li class="ust-menu__oge' + (aktifGrup ? " ust-menu__oge--aktif" : "") + '">' +
      '<button class="ust-menu__dugme" type="button" aria-expanded="false" aria-controls="' + kimlik + '">' +
      "<span>" + CU.kacis(grup.kisaBaslik || grup.baslik) + "</span>" + CU.ikon("chevron-down", "ust-menu__ok") + "</button>" +
      '<div class="ust-panel" id="' + kimlik + '">' +
      '<ul class="ust-panel__liste' + (gorunur.length > 4 ? " ust-panel__liste--iki" : "") + '">' + baglantilar + "</ul>" +
      "</div></li>";
  }

  CU.tanimla("cu-ust", class extends HTMLElement {
    connectedCallback() {
      if (this._hazir) return;
      this._hazir = true;

      var a = CU.ayarlar;
      var aktif = CU.aktifSayfa();
      var eylem = a.ustEylem;

      this.innerHTML =
        '<a class="atla-baglanti" href="#icerik">İçeriğe geç</a>' +
        '<header class="ust">' +
        '<div class="ust__ic">' +
        '<a class="ust__logo" href="' + CU.url("index.html") + '">' +
        '<img src="' + CU.url("assets/img/logo.svg") + '" alt="" width="40" height="40">' +
        '<span class="ust__logo-metin"><span class="ust__site-adi">' + CU.kacis(a.siteAdi) + "</span>" +
        '<span class="ust__kurum-adi">' + CU.kacis(a.kurumAdi) + "</span></span></a>" +
        '<nav class="ust__nav" id="ust-nav" aria-label="Ana menü">' +
        '<ul class="ust-menu">' + CU.menu.map(function (g, i) { return panelHTML(g, i, aktif); }).join("") + "</ul>" +
        (eylem ? '<a class="dugme dugme--vurgu ust__eylem ust__eylem--mobil" href="' + CU.url(eylem.yol) + '">' + CU.ikon(eylem.ikon) + "<span>" + CU.kacis(eylem.baslik) + "</span></a>" : "") +
        "</nav>" +
        '<div class="ust__sag">' +
        (eylem ? '<a class="dugme dugme--vurgu ust__eylem" href="' + CU.url(eylem.yol) + '">' + CU.ikon(eylem.ikon) + "<span>" + CU.kacis(eylem.baslik) + "</span></a>" : "") +
        '<button class="ust__menu-dugmesi" type="button" aria-expanded="false" aria-controls="ust-nav">' +
        CU.ikon("menu", "ust__ac") + CU.ikon("x", "ust__kapat") + '<span class="gorunmez">Menü</span></button>' +
        "</div></div></header>";

      this.baglan();
    }

    baglan() {
      var kok = this;
      var ogeler = Array.prototype.slice.call(this.querySelectorAll(".ust-menu__oge"));
      var mobilDugme = this.querySelector(".ust__menu-dugmesi");
      var genis = window.matchMedia("(min-width: 1080px)");
      var fareli = window.matchMedia("(hover: hover)");
      var kapatmaZamani = null;

      function ac(oge, durum) {
        oge.classList.toggle("acik", durum);
        oge.querySelector(".ust-menu__dugme").setAttribute("aria-expanded", String(durum));
      }
      function hepsiniKapat(haric) {
        ogeler.forEach(function (o) { if (o !== haric) ac(o, false); });
      }
      function mobilMenu(durum) {
        kok.classList.toggle("menu-acik", durum);
        mobilDugme.setAttribute("aria-expanded", String(durum));
        document.documentElement.classList.toggle("kaydirma-kilitli", durum);
        if (!durum) hepsiniKapat();
      }

      ogeler.forEach(function (oge) {
        var dugme = oge.querySelector(".ust-menu__dugme");
        dugme.addEventListener("click", function () {
          var acilacak = !oge.classList.contains("acik");
          if (genis.matches) hepsiniKapat(oge);
          ac(oge, acilacak);
        });
        oge.addEventListener("mouseenter", function () {
          if (!genis.matches || !fareli.matches) return;
          clearTimeout(kapatmaZamani);
          hepsiniKapat(oge);
          ac(oge, true);
        });
        oge.addEventListener("mouseleave", function () {
          if (!genis.matches || !fareli.matches) return;
          kapatmaZamani = setTimeout(function () { ac(oge, false); }, 160);
        });
      });

      mobilDugme.addEventListener("click", function () {
        mobilMenu(!kok.classList.contains("menu-acik"));
      });

      document.addEventListener("click", function (olay) {
        if (genis.matches && !kok.contains(olay.target)) hepsiniKapat();
      });

      document.addEventListener("keydown", function (olay) {
        if (olay.key !== "Escape") return;
        var acikOge = kok.querySelector(".ust-menu__oge.acik");
        if (acikOge && genis.matches) {
          ac(acikOge, false);
          acikOge.querySelector(".ust-menu__dugme").focus();
        } else if (kok.classList.contains("menu-acik")) {
          mobilMenu(false);
          mobilDugme.focus();
        }
      });

      genis.addEventListener("change", function () { mobilMenu(false); });

      var ust = this.querySelector(".ust");
      function kaydirma() { ust.classList.toggle("ust--kaydirildi", window.scrollY > 8); }
      window.addEventListener("scroll", kaydirma, { passive: true });
      kaydirma();
    }
  });
})();
