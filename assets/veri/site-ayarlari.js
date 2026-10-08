/* ==========================================================================
   SİTE AYARLARI
   Kurum adı, iletişim bilgileri, üst ve alt bölümdeki sabit metinler.
   Boş bırakılan ("") alanlar sitede gösterilmez.
   ========================================================================== */
window.CU_AYARLAR = {
  siteAdi: "Çocuk Üniversitemiz",
  kurumAdi: "Küçükçekmece Belediyesi",
  tamAd: "Küçükçekmece Belediyesi Çocuk Üniversitesi",

  /* QR KODLARI İÇİN YAYIN ADRESİ
     Boş bırakılırsa site hangi adresten açıldıysa o adres kullanılır
     (GitHub Pages'te otomatik olarak doğru çalışır).
     Siteyi bilgisayarınızda açıp QR yazdıracaksanız sitenin yayın adresini yazın.
     Örnek: "https://aydinincekara.github.io/cocuk-universitemiz/" */
  yayinAdresi: "",

  iletisim: {
    adres: "Söğütlüçeşme Mah. Celildağ Cad. No:83, 34295 Küçükçekmece / İstanbul",
    telefon: "444 4 360 (Dahili 8230)",
    eposta: "",           /* Örnek: "cocukuniversitesi@ornek.bel.tr" */
    calismaSaatleri: "Hafta sonu programı: Cumartesi ve Pazar · GELİŞİM programı: Çarşamba, Perşembe, Cuma",
    kurumSitesi: "https://kucukcekmece.istanbul/",
    haritaBaglantisi: ""  /* Google Haritalar paylaşım bağlantısı */
  },

  /* Üst bölümün sağındaki vurgulu düğme */
  ustEylem: {
    baslik: "QR merkezi",
    yol: "sayfalar/olcme/qr-merkezi.html",
    ikon: "qr-code"
  },

  altBilgi: {
    tanitim:
      "Merakı bilgiye, bilgiyi üretime, yeteneği geleceğe dönüştüren; okulda 4. sınıftan 7. sınıfa kadar süren dört yıllık gelişim yolculuğu.",
    telif: "Küçükçekmece Belediyesi Çocuk Üniversitesi",
    ekBaglantilar: [
      { baslik: "İletişim", yol: "sayfalar/kurumsal/iletisim.html" },
      { baslik: "QR merkezi", yol: "sayfalar/olcme/qr-merkezi.html" }
    ]
  }
};
