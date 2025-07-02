/*
CHALLENGE 1:
Tüm <img> etiketlerine mouseenter ve mouseleave eventleri ekleyin.
- Mouse üzerine geldiğinde (mouseenter): ilgili resme "grayscale" class'ı ekleyin.
- Mouse çıktığında (mouseleave): "grayscale" class'ını kaldırın.
*/
const images = document.querySelectorAll("img");

images.forEach(function (image) {
  image.addEventListener("mouseenter", (e) => {
    image.classList.add("grayscale");
  });
  image.addEventListener("mouseleave", (e) => {
    image.classList.remove("grayscale");
  });
});
/*
CHALLENGE 2:
Sayfa aktifken (herhangi bir yere tıklandığında), klavye dinlemeye başlasın.
- Klavyeden "1" tuşuna basılırsa <body> elementine "theme1" class'ı eklensin
- "2" → "theme2", "3" → "theme3" olarak eklensin
- "Escape" (Esc) tuşuna basılırsa body'deki tüm bu class'lar kaldırılsın
NOT: Klavye eventlerini document yerine **window** nesnesine ekleyin.
*/

window.addEventListener("keydown", (e) => {
  if (e.key === "1") {
    document.body.classList.add("theme1");
  }
  if (e.key === "2") {
    document.body.classList.add("theme2");
  }
  if (e.key === "3") {
    document.body.classList.add("theme3");
  }
  if (e.key === "Escape") {
    document.body.classList.remove("theme1", "theme2", "theme3");
  }
});
/*
CHALLENGE 3:
<input id="full_name"> alanına yazı yazıldıkça: 
- Girilen metni otomatik olarak BÜYÜK HARFE çevirin
- Metin 5 karakterden UZUNSA <button> elementini "enabled" yapın
- Aksi halde (5 veya daha az karakter) buton "disabled" olmalı
*/

const input = document.getElementById("full_name");
const buton = document.querySelector("button");

input.addEventListener("input", (e) => {
  input.value = input.value.toUpperCase();

  if (input.value.length > 5) {
    buton.disabled = false;
  } else {
    buton.disabled = true;
  }
});
/*
CHALLENGE 4:
Form submit edildiğinde (Kaydet butonuna basıldığında):
- Input alanındaki metni alıp, <p id="submitResult"> içerisine şu metni yazın:
  "{inputa_yazılan_metin} başarı ile kaydedildi."
- Input alanını temizleyin
- <button> tekrar disabled hale gelsin
*/

const sonucDegeri = document.getElementById("submitResult");

buton.addEventListener("click", (e) => {
  e.preventDefault();
  sonucDegeri.textContent = `${input.value} başarı ile kaydedildi.`;
  input.value = "";
  buton.disabled = true;
});
