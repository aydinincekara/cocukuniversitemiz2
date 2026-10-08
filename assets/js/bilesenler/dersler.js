/* ==========================================================================
   DERS BİLEŞENİ — veriler: assets/veri/dersler.js
   <cu-dersler sinif="1"></cu-dersler>                      Ders kartları
   <cu-dersler program="haftaici"></cu-dersler>             Programa göre kartlar
   <cu-dersler sinif="1" gorunum="program"></cu-dersler>    Ders programı tablosu
   <cu-dersler sinif="2" gorunum="tablo"></cu-dersler>      Ders – çıktı tablosu
   <cu-dersler sinif="3" gorunum="portfolyo"></cu-dersler>   Ders – portfolyo konuları tablosu
   <cu-dersler gorunum="liste" sinif="3"></cu-dersler>      Kısa liste
   <cu-dersler gorunum="yol"></cu-dersler>                  Dört yıllık yol
   <cu-dersler gorunum="akis" guncel="2"></cu-dersler>      Dört yıl içinde bulunulan yer

   "program" özniteliği: "haftasonu" ya da "haftaici".
   sinif="tum" olan dersler (Yabancı Dil) her sınıf listesinde görünür;
   yalnızca o yıla özgü dersler için tum-haric özniteliğini ekleyin.
   Her iki programda da verilen dersler ("her-ikisi") ikisinde de görünür.
   ========================================================================== */
(function () {
  "use strict";
  var CU = window.CU;

  function sinifEtiketi(sinif) {
    return sinif === "tum" ? "Tüm yıllar" : sinif + ". sınıf";
  }

  function filtrele(el) {
    var sinif = el.getAttribute("sinif");
    var program = el.getAttribute("program");
    var tumHaric = el.hasAttribute("tum-haric");
    return CU.dersler.filter(function (d) {
      /* sinif="tum" dersler (ör. Yabancı Dil) her sınıf seviyesinin listesine girer;
         yalnızca o yıla özgü dersler isteniyorsa tum-haric özniteliğini kullanın. */
      var sinifUyar = !sinif || String(d.sinif) === sinif || (d.sinif === "tum" && !tumHaric && sinif !== "tum");
      if (!sinifUyar) return false;
      if (program && d.program !== program && d.program !== "her-ikisi") return false;
      return true;
    });
  }

  function dersBaglantisi(d) {
    return d.sayfa ? CU.url(d.sayfa) : CU.url("sayfalar/egitim/dersler.html") + "#ders-" + d.id;
  }

  function kartHTML(d, dersSayfasi) {
    var seviyeSinifi = typeof d.sinif === "number" ? " seviye-" + d.sinif : "";
    var adres = dersBaglantisi(d);
    var buSayfa = dersSayfasi && !d.sayfa;

    var etiketler = '<span class="etiket etiket--seviye">' + sinifEtiketi(d.sinif) + "</span>" +
      (d.saat ? '<span class="etiket">' + CU.ikon("clock") + "Haftada " + d.saat + " saat</span>" : "") +
      (d.program === "her-ikisi" ? '<span class="etiket">Hafta içi grupta da var</span>' : "") +
      (d.program === "haftaici" ? '<span class="etiket">Hafta içi GELİŞİM</span>' : "");

    var moduller = d.moduller
      ? '<ul class="ders__moduller" aria-label="Modüller">' + d.moduller.map(function (m) { return "<li>" + CU.kacis(m) + "</li>"; }).join("") + "</ul>"
      : "";
    var hedefler = (d.hedefler || []).map(function (h) { return "<li>" + CU.kacis(h) + "</li>"; }).join("");
    var kunye = [];
    if (d.mekan) kunye.push(CU.ikon("map-pin") + "<span>" + CU.kacis(d.mekan) + "</span>");

    return '<article class="ders' + seviyeSinifi + '" id="ders-' + CU.kacis(d.id) + '">' +
      '<div class="ders__ust">' +
      '<span class="ders__ikon">' + CU.ikon(d.ikon || "book-open") + "</span>" +
      '<div class="ders__kimlik"><h3 class="ders__ad">' +
      (buSayfa ? CU.kacis(d.ad) : '<a href="' + adres + '">' + CU.kacis(d.ad) + "</a>") +
      '</h3><p class="ders__etiketler">' + etiketler + "</p></div></div>" +
      '<p class="ders__amac">' + CU.kacis(d.amac) + "</p>" +
      moduller +
      (kunye.length ? '<p class="ders__kunye">' + kunye.join("") + "</p>" : "") +
      '<details class="ders__ayrinti"><summary>' + CU.ikon("chevron-right", "ders__ok") + "Hedefler ve ders çıktısı</summary>" +
      '<ul class="isaretli-liste">' + hedefler + "</ul>" +
      (d.cikti ? '<p class="ders__cikti">' + CU.ikon("star") + "<span><strong>Ders çıktısı:</strong> " + CU.kacis(d.cikti) + "</span></p>" : "") +
      (d.portfolyo ? '<p class="ders__portfolyo">' + CU.ikon("notebook-pen") + "<span><strong>Portfolyoya girer:</strong> " + CU.kacis(d.portfolyo.join(" · ")) + "</span></p>" : "") +
      (d.sayfa ? '<p class="ders__devam"><a href="' + adres + '">Atölye sayfasına gidin' + CU.ikon("chevron-right") + "</a></p>" : "") +
      "</details></article>";
  }

  /* Ders programı tablosu: Ders · Haftalık saat · İşlendiği mekân */
  function programHTML(dersler, baslik) {
    var toplam = dersler.reduce(function (t, d) { return t + (d.saat || 0); }, 0);
    var satirlar = dersler.map(function (d) {
      return '<tr><th scope="row"><a href="' + dersBaglantisi(d) + '">' + CU.kacis(d.ad) + "</a></th>" +
        '<td class="tablo__sayi">' + (d.saat || "") + "</td>" +
        "<td>" + CU.kacis(d.mekan || "") + "</td></tr>";
    }).join("");
    return '<div class="tablo-kap"><table class="tablo">' +
      (baslik ? "<caption>" + CU.kacis(baslik) + "</caption>" : "") +
      '<thead><tr><th scope="col">Ders</th><th scope="col">Haftalık saat</th><th scope="col">İşlendiği mekân</th></tr></thead>' +
      "<tbody>" + satirlar + "</tbody>" +
      '<tfoot><tr><th scope="row">TOPLAM</th><td class="tablo__sayi">' + toplam + "</td><td></td></tr></tfoot>" +
      "</table></div>";
  }

  /* Portfolyo tablosu: Ders · Portfolyoya giren çalışmalar */
  function portfolyoHTML(dersler, baslik) {
    var satirlar = dersler.filter(function (d) { return d.portfolyo; }).map(function (d) {
      return '<tr><th scope="row"><a href="' + dersBaglantisi(d) + '">' + CU.kacis(d.ad) + "</a></th><td>" +
        '<ul class="satir-listesi">' + d.portfolyo.map(function (k) { return "<li>" + CU.kacis(k) + "</li>"; }).join("") + "</ul></td></tr>";
    }).join("");
    return '<div class="tablo-kap"><table class="tablo">' +
      (baslik ? "<caption>" + CU.kacis(baslik) + "</caption>" : "") +
      '<thead><tr><th scope="col">Ders</th><th scope="col">Portfolyoya giren çalışmalar</th></tr></thead>' +
      "<tbody>" + satirlar + "</tbody></table></div>";
  }

  function tabloHTML(dersler) {
    var satirlar = dersler.map(function (d) {
      return '<tr><th scope="row">' + CU.kacis(d.ad) + "</th><td>" + CU.kacis(d.cikti || "") + "</td></tr>";
    }).join("");
    return '<div class="tablo-kap"><table class="tablo"><thead><tr><th scope="col">Ders</th><th scope="col">Yıl sonunda ortaya konan ürün</th></tr></thead><tbody>' + satirlar + "</tbody></table></div>";
  }

  function listeHTML(dersler) {
    return '<ul class="ders-listesi">' + dersler.map(function (d) {
      var seviyeSinifi = typeof d.sinif === "number" ? " seviye-" + d.sinif : "";
      return '<li class="' + seviyeSinifi.trim() + '"><a href="' + dersBaglantisi(d) + '">' +
        CU.ikon(d.ikon || "book-open") + "<span>" + CU.kacis(d.ad) + "</span></a></li>";
    }).join("") + "</ul>";
  }

  function yolHTML() {
    return '<ol class="program-yolu">' + CU.seviyeler.map(function (sv) {
      var dersler = CU.dersler.filter(function (d) {
        return (d.sinif === sv.no || d.sinif === "tum") && d.program !== "haftaici";
      });
      var not = sv.no === 3 ? '<p class="program-yolu__not">Öğrenci bu dört atölyeden ikisini seçer.</p>' : "";
      return '<li class="program-yolu__adim seviye-' + sv.no + '">' +
        '<a class="program-yolu__kesir" href="' + CU.url(sv.sayfa) + '" tabindex="-1" aria-hidden="true">' + CU.kesir(sv) + "</a>" +
        '<div class="program-yolu__metin">' +
        (sv.tema ? '<p class="program-yolu__tema">' + CU.kacis(sv.tema) + "</p>" : "") +
        '<h3 class="program-yolu__ad"><a href="' + CU.url(sv.sayfa) + '">' + CU.kacis(sv.soru || sv.ad) + "</a></h3>" +
        '<p class="program-yolu__okul">' + sv.no + ". sınıf · okulda " + sv.okulSinifi + ". sınıf · " + CU.kacis(sv.ad) + "</p>" +
        '<p class="program-yolu__duzen">' + CU.ikon("clock") + "<span>" + CU.kacis(sv.duzen) + "</span></p>" +
        "<p>" + CU.kacis(sv.ozet) + "</p></div>" +
        '<div class="program-yolu__dersler">' + listeHTML(dersler) + not + "</div>" +
        "</li>";
    }).join("") + "</ol>";
  }

  function akisHTML(guncel) {
    return '<ol class="seviye-akisi">' + CU.seviyeler.map(function (sv) {
      var bu = String(sv.no) === String(guncel);
      return '<li class="seviye-akisi__oge seviye-' + sv.no + '"' + (bu ? ' aria-current="step"' : "") + ">" +
        CU.kesir(sv) +
        '<span class="seviye-akisi__tema">' + CU.kacis(sv.tema || "") + "</span>" +
        "<strong>" + (bu ? CU.kacis(sv.soru || sv.ad) : '<a href="' + CU.url(sv.sayfa) + '">' + CU.kacis(sv.soru || sv.ad) + "</a>") + "</strong>" +
        "<p>" + (bu ? "Bu sayfadaki yıl" : "Okulda " + sv.okulSinifi + ". sınıf") + "</p></li>";
    }).join("") + "</ol>";
  }

  CU.tanimla("cu-dersler", class extends HTMLElement {
    connectedCallback() {
      if (this._hazir) return;
      this._hazir = true;

      var gorunum = this.getAttribute("gorunum") || "kart";
      if (gorunum === "yol") { this.innerHTML = yolHTML(); return; }
      if (gorunum === "akis") { this.innerHTML = akisHTML(this.getAttribute("guncel")); return; }

      var dersler = filtrele(this);
      if (!dersler.length) {
        this.innerHTML = '<p class="soluk">Bu seçime uyan ders yok. Dersler assets/veri/dersler.js dosyasından eklenir.</p>';
        return;
      }
      if (gorunum === "program") this.innerHTML = programHTML(dersler, this.getAttribute("baslik"));
      else if (gorunum === "portfolyo") this.innerHTML = portfolyoHTML(dersler, this.getAttribute("baslik"));
      else if (gorunum === "tablo") this.innerHTML = tabloHTML(dersler);
      else if (gorunum === "liste") this.innerHTML = listeHTML(dersler);
      else {
        var dersSayfasi = CU.yolAnahtari(location.href) === CU.yolAnahtari(CU.url("sayfalar/egitim/dersler.html"));
        this.innerHTML = '<div class="ders-izgara">' + dersler.map(function (d) { return kartHTML(d, dersSayfasi); }).join("") + "</div>";
      }
    }
  });
})();
