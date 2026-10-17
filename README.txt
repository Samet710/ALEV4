ALEV SERISI - ULTIMATE V19 EFFECTS
=================================

Bu surumde ana alev animasyonlari ve sayac sistemi korunmustur. Gunluk, renk degisimi ve kilometre tasi efektleri yeniden tasarlanmis, sesler onceden hazirlanmis WAV dosyalarina donusturulmustur.

PAKET ICERIGI
- index.html: uygulama arayuzu ve seri mantigi
- sw.js: v19 onbellek yonetimi
- manifest.webmanifest: ana ekrana ekleme ayarlari
- icon-192.png / icon-512.png: uygulama simgeleri
- flame-*.webp ve flame-*-poster.webp: ana alev animasyonlari ve sabit posterleri
- burst-*-a.webp / burst-*-b.webp: 20 cesit gunluk gorsel efekt (onceden render edilmis, seffaf arka planli animasyon)
- milestone-*.webp: 10 renk/kilometre tasi efekti
- legendary-*.webp: 10 buyuk kilometre tasi efekti
- sfx-*.wav: 11 farkli, onceden hazirlanmis ses efektleri

GITHUB PAGES'E YUKLEME
1. ZIP arsivini tamamen cikart.
2. Cikartilan klasordeki butun dosyalari GitHub deposunun ANA DIZININE yukle.
3. Dosyalari alt klasore tasima. index.html, sw.js, manifest ve butun medya dosyalari ayni dizinde kalmali.
4. GitHub deposunda Settings > Pages > Deploy from a branch > main > /(root) secip kaydet.
5. Yayinlandiktan sonra sayfayi yeniden ac. Service worker onbellegi v19 olarak degistirildi.

EFEKT SISTEMI
Telefon, efektlerin parcacik konumlarini canli hesaplamaz. Her efekt animasyonlu WebP dosyasindan oynatilir. Efekt varyasyonlari gun sayisina gore degisir; renk degisimleri milestone-*.webp, buyuk kilometre taslari legendary-*.webp kullanir.
Sesler kullanici etkilesimiyle calistirilir. Telefonun medya ses duzeyi acik olmalidir; uygulamadaki hoparlor dugmesi efekt seslerini acip kapatir.

NOT
Ilerleme tarayicinin yerel depolamasinda tutulur. Tarayici/site verilerini silmek kayitlari silebilir. Web uygulamasi APK degildir; GitHub Pages adresinden tarayici ile acilir ve Chrome ana ekrana ekleme ozelligi destekliyorsa kisayol olarak eklenebilir.
