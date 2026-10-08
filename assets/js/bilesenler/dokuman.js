/* ==========================================================================
   DOKÜMAN DÜZENİ BİLEŞENLERİ
   <cu-sayfa-basligi seviye="3">  Konum satırı + başlık + (varsa) sınıf kesri
   <cu-bolum-menusu>              Bulunulan bölümün sayfaları (sol sütun)
   <cu-icindekiler>               "Bu sayfada" başlık listesi (sağ sütun)
   <cu-sayfa-gecis>               Önceki / sonraki sayfa
   <cu-iletisim>                  site-ayarlari.js iletişim bilgileri
   Görünüm: assets/css/dokuman.css
   ========================================================================== */
(function () {
  "use strict";
  var CU = window.CU;

  /* ---------------------------------------------------------------- Sayfa başlığı */
  CU.tanimla("cu-sayfa-basligi", class extends HTMLElement {
    connectedCallback() {
      if (this._hazir) return;
      this._hazir = true;

      var aktif = CU.aktifSayfa();
      var izi = '<li><a href="' + CU.url("index.html") + '">Ana sayfa</a></li>';
      if (aktif) {
        var ilk = (aktif.grup.sayfalar || []).filter(function (s) { return !s.gizli; })[0];
        izi += ilk && ilk !== aktif.sayfa
          ? '<li><a href="' + CU.url(ilk.yol) + '">' + CU.kacis(aktif.grup.baslik) + "</a></li>"
          : "<li><span>" + CU.kacis(aktif.grup.baslik) + "</span></li>";
        izi += '<li><span aria-current="page">' + CU.kacis(aktif.sayfa.baslik) + "</span></li>";
      }
      this.insertAdjacentHTML("afterbegin", '<nav class="yol-izi" aria-label="Konumunuz"><ol>' + izi + "</ol></nav>");

      var seviyeNo = this.getAttribute("seviye") || (aktif && aktif.sayfa.seviye);
      var sv = seviyeNo ? CU.seviye(seviyeNo) : null;
      if (sv) {
        this.classList.add("seviye-" + sv.no, "sayfa-basligi--seviyeli");
        this.insertAdjacentHTML("beforeend",
          '<div class="sayfa-basligi__seviye" aria-hidden="true">' + CU.kesir(sv) +
          '<span class="sayfa-basligi__seviye-adi">' + CU.kacis(sv.ad) + "</span></div>");
      }
    }
  });

  /* ---------------------------------------------------------------- Bölüm menüsü */
  CU.tanimla("cu-bolum-menusu", class extends HTMLElement {
    connectedCallback() {
      if (this._hazir) return;
      this._hazir = true;

      var aktif = CU.aktifSayfa();
      if (!aktif) { this.hidden = true; return; }
      var grup = aktif.grup;

      var ogeler = (grup.sayfalar || []).filter(function (s) { return !s.gizli; }).map(function (s) {
        var gecerli = s === aktif.sayfa;
        return '<li><a class="bolum-menusu__baglanti' + (s.seviye ? " seviye-" + s.seviye : "") + '" href="' + CU.url(s.yol) + '"' + (gecerli ? ' aria-current="page"' : "") + ">" +
          (s.seviye ? '<span class="bolum-menusu__nokta" aria-hidden="true"></span>' : CU.ikon(s.ikon || grup.ikon)) +
          "<span>" + CU.kacis(s.baslik) + "</span></a></li>";
      }).join("");

      this.innerHTML =
        '<nav class="bolum-menusu" aria-label="' + CU.kacis(grup.baslik) + ' sayfaları">' +
        '<p class="bolum-menusu__baslik">' + CU.ikon(grup.ikon) + "<span>" + CU.kacis(grup.baslik) + "</span></p>" +
        "<ul>" + ogeler + "</ul></nav>";

      var gecerli = this.querySelector('[aria-current="page"]');
      if (gecerli && window.matchMedia("(max-width: 959px)").matches) {
        var liste = this.querySelector("ul");
        liste.scrollLeft = gecerli.parentElement.offsetLeft - 16;
      }
    }
  });

  /* ---------------------------------------------------------------- İçindekiler */
  CU.tanimla("cu-icindekiler", class extends HTMLElement {
    connectedCallback() {
      if (this._hazir) return;
      this._hazir = true;

      var kaynak = document.querySelector(this.getAttribute("kaynak") || ".dokuman__icerik");
      if (!kaynak) { this.hidden = true; return; }
      var basliklar = Array.prototype.slice.call(kaynak.querySelectorAll("h2"));
      if (basliklar.length < 2) { this.hidden = true; return; }

      var kullanilan = {};
      var ogeler = basliklar.map(function (h) {
        if (!h.id) {
          var taban = CU.slug(h.textContent) || "bolum";
          var id = taban, n = 2;
          while (kullanilan[id] || document.getElementById(id)) id = taban + "-" + n++;
          h.id = id;
        }
        kullanilan[h.id] = true;
        return '<li><a href="#' + h.id + '">' + CU.kacis(h.textContent) + "</a></li>";
      }).join("");

      this.innerHTML = '<nav class="icindekiler" aria-label="Bu sayfada"><p class="icindekiler__baslik">Bu sayfada</p><ul>' + ogeler + "</ul></nav>";

      var baglantilar = {};
      Array.prototype.forEach.call(this.querySelectorAll("a"), function (a) {
        baglantilar[a.getAttribute("href").slice(1)] = a;
      });

      if (!("IntersectionObserver" in window)) return;
      var gorunenler = {};
      var gozlemci = new IntersectionObserver(function (kayitlar) {
        kayitlar.forEach(function (k) { gorunenler[k.target.id] = k.isIntersecting; });
        var secili = null;
        for (var i = 0; i < basliklar.length; i++) {
          if (gorunenler[basliklar[i].id]) { secili = basliklar[i].id; break; }
        }
        if (!secili) return;
        Object.keys(baglantilar).forEach(function (id) {
          baglantilar[id].classList.toggle("etkin", id === secili);
        });
      }, { rootMargin: "-90px 0px -60% 0px" });
      basliklar.forEach(function (h) { gozlemci.observe(h); });
    }
  });

  /* ---------------------------------------------------------------- Önceki / sonraki */
  CU.tanimla("cu-sayfa-gecis", class extends HTMLElement {
    connectedCallback() {
      if (this._hazir) return;
      this._hazir = true;

      var aktif = CU.aktifSayfa();
      if (!aktif) { this.hidden = true; return; }
      var onceki = aktif.liste[aktif.sira - 1];
      var sonraki = aktif.liste[aktif.sira + 1];

      function kutu(kayit, yon) {
        if (!kayit) return "<span></span>";
        return '<a class="sayfa-gecis__baglanti sayfa-gecis__baglanti--' + yon + '" href="' + CU.url(kayit.sayfa.yol) + '">' +
          '<span class="sayfa-gecis__yon">' + (yon === "onceki" ? CU.ikon("chevron-left") + "Önceki" : "Sonraki" + CU.ikon("chevron-right")) + "</span>" +
          '<span class="sayfa-gecis__baslik">' + CU.kacis(kayit.sayfa.baslik) + "</span></a>";
      }

      this.innerHTML = '<nav class="sayfa-gecis" aria-label="Sayfalar arası geçiş">' + kutu(onceki, "onceki") + kutu(sonraki, "sonraki") + "</nav>";
    }
  });

  /* ---------------------------------------------------------------- İletişim */
  CU.tanimla("cu-iletisim", class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = CU.iletisimListesi("iletisim-listesi--buyuk") ||
        '<p class="soluk">İletişim bilgileri eklendiğinde burada görünecek.</p>';
    }
  });
})();
