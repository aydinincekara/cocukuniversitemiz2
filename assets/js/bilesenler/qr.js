/* ==========================================================================
   QR BİLEŞENLERİ — kayıtlar: assets/veri/qr-kodlari.js
   <cu-qr kod="s3-ilgi-anketi"></cu-qr>                 Tek kart
   <cu-qr kod="qr-merkezi" sade></cu-qr>                Yalnızca QR görseli + başlık
   <cu-qr-panosu grup="3-sinif-secim"></cu-qr-panosu>   Bir sayfanın QR alanı
   <cu-qr-panosu filtreli></cu-qr-panosu>               QR merkezi (tüm kayıtlar)
   Görünüm: assets/css/qr.css   Yazdırma: assets/css/yazdir.css
   ========================================================================== */
(function () {
  "use strict";
  var CU = window.CU;

  var KATEGORILER = {
    sinav: { ad: "Sınav", ikon: "clipboard-check" },
    anket: { ad: "Anket", ikon: "list-checks" },
    gorusme: { ad: "Görüşme", ikon: "messages-square" },
    form: { ad: "Form", ikon: "file-text" },
    bilgi: { ad: "Bilgi sayfası", ikon: "info" },
    canli: { ad: "Canlı yayın", ikon: "telescope" }
  };
  var DURUMLAR = { aktif: "Yayında", yakinda: "Yakında", kapali: "Süresi doldu" };

  function sinifAdi(sinif) {
    if (sinif === "aday") return "Aday öğrenciler";
    if (sinif === "tum") return "Tüm sınıflar";
    return sinif + ". sınıf";
  }

  function kayitBul(kod) {
    for (var i = 0; i < CU.qrKodlari.length; i++) if (CU.qrKodlari[i].kod === kod) return CU.qrKodlari[i];
    return null;
  }

  function yayinda(k) { return k.durum === "aktif" && !!k.baglanti; }

  /* ---------------------------------------------------------------- QR kütüphanesi (ihtiyaç olunca yüklenir) */
  var kutuphaneSozu = null;
  function kutuphane() {
    if (window.qrcode && window.qrcode.stringToBytesFuncs) return Promise.resolve(window.qrcode);
    if (!kutuphaneSozu) {
      kutuphaneSozu = new Promise(function (coz, reddet) {
        var s = document.createElement("script");
        s.src = CU.kok + "assets/js/vendor/qrcode.js?v=" + CU.surum;
        s.onload = function () {
          window.qrcode.stringToBytes = window.qrcode.stringToBytesFuncs["UTF-8"];
          coz(window.qrcode);
        };
        s.onerror = reddet;
        document.head.appendChild(s);
      });
    }
    return kutuphaneSozu;
  }

  function svgUret(qrcode, metin, baslik) {
    var qr = qrcode(0, "M");
    qr.addData(metin);
    qr.make();
    var n = qr.getModuleCount();
    var bosluk = 4;
    var boyut = n + bosluk * 2;
    var yol = "";
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        if (qr.isDark(r, c)) yol += "M" + (c + bosluk) + " " + (r + bosluk) + "h1v1h-1z";
      }
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + boyut + " " + boyut + '" shape-rendering="crispEdges" role="img" aria-label="' + CU.kacis("QR kodu: " + baslik) + '">' +
      '<rect width="' + boyut + '" height="' + boyut + '" fill="#ffffff"/><path d="' + yol + '" fill="#0E1742"/></svg>';
  }

  CU.qrDoldur = function (kapsam) {
    var alanlar = (kapsam || document).querySelectorAll("[data-qr-adres]:not([data-qr-hazir])");
    if (!alanlar.length) return;
    kutuphane().then(function (qrcode) {
      Array.prototype.forEach.call(alanlar, function (alan) {
        alan.setAttribute("data-qr-hazir", "");
        try {
          alan.innerHTML = svgUret(qrcode, alan.getAttribute("data-qr-adres"), alan.getAttribute("data-qr-baslik") || "");
        } catch (e) {
          alan.innerHTML = '<p class="qr-kart__hata">QR kodu oluşturulamadı. Bağlantı çok uzun olabilir.</p>';
        }
      });
    }).catch(function () {
      Array.prototype.forEach.call(alanlar, function (alan) {
        alan.innerHTML = '<p class="qr-kart__hata">QR kütüphanesi yüklenemedi. assets/js/vendor/qrcode.js dosyasını kontrol edin.</p>';
      });
    });
  };

  /* ---------------------------------------------------------------- Kart */
  function kartHTML(k, secenek) {
    secenek = secenek || {};
    var kat = KATEGORILER[k.kategori] || KATEGORILER.bilgi;
    var acik = yayinda(k);
    var adres = acik ? CU.yayinUrl(k.baglanti) : "";
    var seviyeSinifi = typeof k.sinif === "number" ? " seviye-" + k.sinif : "";

    var kodAlani = acik
      ? '<div class="qr-kart__kod" data-qr-adres="' + CU.kacis(adres) + '" data-qr-baslik="' + CU.kacis(k.baslik) + '"><span class="qr-kart__yukleniyor">QR hazırlanıyor</span></div>'
      : '<div class="qr-kart__kod qr-kart__kod--bos">' + CU.ikon("qr-code") + "<span>" + (k.durum === "kapali" ? "Süresi doldu" : "Bağlantı eklenince QR burada görünür") + "</span></div>";

    if (secenek.sade) {
      return '<figure class="qr-sade">' + kodAlani + "<figcaption>" + CU.kacis(k.baslik) + "</figcaption></figure>";
    }

    var eylemler = acik
      ? '<div class="qr-kart__eylemler">' +
        '<a class="dugme dugme--kucuk" href="' + CU.kacis(CU.disBaglanti(k.baglanti) ? k.baglanti : CU.url(k.baglanti)) + '"' + (CU.disBaglanti(k.baglanti) ? ' target="_blank" rel="noopener"' : "") + ">" + CU.ikon(CU.disBaglanti(k.baglanti) ? "external-link" : "chevron-right") + "<span>Aç</span></a>" +
        '<button class="dugme dugme--kucuk dugme--ikincil" type="button" data-qr-indir>' + CU.ikon("download") + "<span>SVG indir</span></button>" +
        '<button class="dugme dugme--kucuk dugme--ikincil" type="button" data-qr-yazdir>' + CU.ikon("printer") + "<span>Yazdır</span></button>" +
        "</div>"
      : "";

    return '<article class="qr-kart qr-kart--' + CU.kacis(k.durum) + seviyeSinifi + '" data-kod="' + CU.kacis(k.kod) + '" data-kategori="' + CU.kacis(k.kategori) + '" data-sinif="' + CU.kacis(k.sinif) + '" data-durum="' + CU.kacis(k.durum) + '">' +
      kodAlani +
      '<div class="qr-kart__bilgi">' +
      '<p class="qr-kart__etiketler">' +
      '<span class="etiket">' + CU.ikon(kat.ikon) + kat.ad + "</span>" +
      '<span class="etiket etiket--seviye">' + sinifAdi(k.sinif) + "</span>" +
      '<span class="etiket etiket--durum etiket--' + CU.kacis(k.durum) + '">' + (DURUMLAR[k.durum] || "") + "</span>" +
      "</p>" +
      '<h3 class="qr-kart__baslik">' + CU.kacis(k.baslik) + "</h3>" +
      (k.aciklama ? '<p class="qr-kart__aciklama">' + CU.kacis(k.aciklama) + "</p>" : "") +
      (k.tarih ? '<p class="qr-kart__tarih">' + CU.ikon("calendar-days") + "<span>" + CU.kacis(k.tarih) + "</span></p>" : "") +
      (acik ? '<p class="qr-kart__adres">' + CU.kacis(adres) + "</p>" : "") +
      "</div>" + eylemler + "</article>";
  }

  /* ---------------------------------------------------------------- <cu-qr> */
  CU.tanimla("cu-qr", class extends HTMLElement {
    connectedCallback() {
      if (this._hazir) return;
      this._hazir = true;
      var k = kayitBul(this.getAttribute("kod"));
      if (!k) {
        this.innerHTML = '<p class="soluk">"' + CU.kacis(this.getAttribute("kod")) + '" kodlu QR kaydı bulunamadı. assets/veri/qr-kodlari.js dosyasını kontrol edin.</p>';
        return;
      }
      this.innerHTML = kartHTML(k, { sade: this.hasAttribute("sade") });
      CU.qrDoldur(this);
    }
  });

  /* ---------------------------------------------------------------- <cu-qr-panosu> */
  CU.tanimla("cu-qr-panosu", class extends HTMLElement {
    connectedCallback() {
      if (this._hazir) return;
      this._hazir = true;

      if (!this.hasAttribute("filtreli")) {
        var grup = this.getAttribute("grup");
        var kayitlar = CU.qrKodlari.filter(function (k) { return (k.gruplar || []).indexOf(grup) !== -1; });
        this.innerHTML = kayitlar.length
          ? '<div class="qr-izgara">' + kayitlar.map(function (k) { return kartHTML(k); }).join("") + "</div>"
          : '<p class="soluk">Bu bölüm için QR kaydı yok. assets/veri/qr-kodlari.js dosyasında "gruplar" alanına "' + CU.kacis(grup) + '" ekleyin.</p>';
        CU.qrDoldur(this);
        return;
      }
      this.filtreliKur();
    }

    filtreliKur() {
      var sinifSecenekleri = [["", "Tümü"], ["aday", "Aday öğrenciler"], ["1", "1. sınıf"], ["2", "2. sınıf"], ["3", "3. sınıf"], ["4", "4. sınıf"], ["tum", "Tüm sınıflar"]];
      var turSecenekleri = [["", "Tümü"]].concat(Object.keys(KATEGORILER).map(function (k) { return [k, KATEGORILER[k].ad]; }));
      var durumSecenekleri = [["", "Tümü"], ["aktif", "Yayında"], ["yakinda", "Yakında"], ["kapali", "Süresi doldu"]];
      function secim(ad, etiket, secenekler) {
        return '<label class="alan"><span class="alan__etiket">' + etiket + '</span><select data-filtre="' + ad + '">' +
          secenekler.map(function (s) { return '<option value="' + s[0] + '">' + s[1] + "</option>"; }).join("") + "</select></label>";
      }

      var yerelUyari = location.protocol === "file:" && !String(CU.ayarlar.yayinAdresi || "").trim()
        ? '<div class="not not--uyari">' + CU.ikon("info") + '<p>Site bilgisayardan açıldığı için site içi sayfaların QR kodları yerel dosya yolunu gösteriyor ve telefonda açılmaz. Yazdırmadan önce <code>assets/veri/site-ayarlari.js</code> dosyasındaki <code>yayinAdresi</code> alanına sitenin GitHub Pages adresini yazın.</p></div>'
        : "";

      this.innerHTML = yerelUyari +
        '<div class="qr-filtre">' +
        secim("sinif", "Sınıf", sinifSecenekleri) +
        secim("kategori", "Tür", turSecenekleri) +
        secim("durum", "Durum", durumSecenekleri) +
        '<label class="alan alan--ara"><span class="alan__etiket">Ara</span><input type="search" data-filtre="ara" placeholder="Başlıkta ara"></label>' +
        '<button class="dugme dugme--ikincil" type="button" data-qr-toplu-yazdir>' + CU.ikon("printer") + "<span>Yayındakileri yazdır</span></button>" +
        "</div>" +
        '<p class="qr-filtre__sonuc" aria-live="polite"></p>' +
        '<div class="qr-izgara">' + CU.qrKodlari.map(function (k) { return kartHTML(k); }).join("") + "</div>" +
        '<p class="qr-bos soluk" hidden>Bu ölçütlere uyan kayıt yok. Filtreleri değiştirip yeniden deneyin.</p>';

      var kok = this;
      var kartlar = Array.prototype.slice.call(this.querySelectorAll(".qr-kart"));
      var sonuc = this.querySelector(".qr-filtre__sonuc");
      var bos = this.querySelector(".qr-bos");

      function uygula() {
        var f = {};
        Array.prototype.forEach.call(kok.querySelectorAll("[data-filtre]"), function (el) { f[el.getAttribute("data-filtre")] = el.value.trim(); });
        var aranan = f.ara.toLocaleLowerCase("tr-TR");
        var sayi = 0;
        kartlar.forEach(function (kart) {
          var baslik = kart.querySelector(".qr-kart__baslik").textContent.toLocaleLowerCase("tr-TR");
          var uygun = (!f.sinif || kart.getAttribute("data-sinif") === f.sinif) &&
            (!f.kategori || kart.getAttribute("data-kategori") === f.kategori) &&
            (!f.durum || kart.getAttribute("data-durum") === f.durum) &&
            (!aranan || baslik.indexOf(aranan) !== -1);
          kart.hidden = !uygun;
          if (uygun) sayi++;
        });
        var yayindaSayi = kartlar.filter(function (k) { return !k.hidden && k.getAttribute("data-durum") === "aktif"; }).length;
        sonuc.textContent = sayi + " kayıt gösteriliyor, " + yayindaSayi + " tanesi yayında.";
        bos.hidden = sayi !== 0;
      }

      Array.prototype.forEach.call(this.querySelectorAll("[data-filtre]"), function (el) {
        el.addEventListener(el.tagName === "INPUT" ? "input" : "change", uygula);
      });
      uygula();
      CU.qrDoldur(this);
    }
  });

  /* ---------------------------------------------------------------- İndir / yazdır
     Yazdırılacak kartlar sayfanın sonundaki ayrı bir alana kopyalanır;
     yazdırma sırasında yalnızca bu alan görünür (bkz. yazdir.css). */
  function yazdirmaAlaniHazirla(kartlar, tek) {
    var alan = document.getElementById("qr-yazdirma-alani");
    if (!alan) {
      alan = document.createElement("div");
      alan.id = "qr-yazdirma-alani";
      document.body.appendChild(alan);
    }
    alan.className = tek ? "qr-yazdirma qr-yazdirma--tek" : "qr-yazdirma qr-yazdirma--toplu";
    alan.innerHTML =
      '<p class="qr-yazdirma__kurum">' + CU.kacis(CU.ayarlar.tamAd || CU.ayarlar.siteAdi) + "</p>" +
      kartlar.map(function (k) { return k.outerHTML; }).join("");
    document.documentElement.classList.add("qr-yazdiriliyor");
    window.print();
  }
  window.addEventListener("afterprint", function () {
    document.documentElement.classList.remove("qr-yazdiriliyor");
  });

  document.addEventListener("click", function (olay) {
    var indir = olay.target.closest("[data-qr-indir]");
    var yazdir = olay.target.closest("[data-qr-yazdir]");
    var toplu = olay.target.closest("[data-qr-toplu-yazdir]");

    if (indir) {
      var kart = indir.closest(".qr-kart");
      var svg = kart && kart.querySelector(".qr-kart__kod svg");
      if (!svg) return;
      var blob = new Blob([svg.outerHTML], { type: "image/svg+xml" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "qr-" + kart.getAttribute("data-kod") + ".svg";
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    }

    if (yazdir) {
      yazdirmaAlaniHazirla([yazdir.closest(".qr-kart")], true);
    }

    if (toplu) {
      var pano = toplu.closest("cu-qr-panosu") || document;
      var secilenler = Array.prototype.filter.call(pano.querySelectorAll(".qr-kart"), function (k) {
        return !k.hidden && k.querySelector(".qr-kart__kod svg");
      });
      if (!secilenler.length) {
        window.alert("Yazdırılacak yayında QR kodu yok. Filtreleri değiştirin ya da qr-kodlari.js dosyasında kayıtları yayına alın.");
        return;
      }
      yazdirmaAlaniHazirla(secilenler, false);
    }
  });
})();
