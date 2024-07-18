// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***");

//! ************ IF - ELSE

// Programlama dillerinde kodlar yukarıdan aşağıya çalışır.Bu yapıyı değiştiren bazı durumlar vardır. Bunlardan biri karar yapılarıdır.
/*
if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

// Ornek girilen sayının tek mi çift mi?

let sayi = 60;
let kalan = sayi % 2;
console.log(kalan);

if (kalan == 0) {
  console.log("sayi cifttir");
} else {
  console.log("sayi tektir");
}

// let sayma=prompt("bir sayi giriniz")
// let sinyal=Number(prompt("bir sayi giriniz:"))

if (sayi < 0) {
  console.log("sayi negatiftir");
} else if (sayi === 0) {
  console.log("sayi sifirdir");
} else if (sayi > 0) {
  console.log("sayi pozitiftir");
} else {
  console.log("geçersiz giriş");
}

let a = 5;
let b = 6;
let c = 7;

const enb = Math.max(a, b, c);
console.log(enb);

let sayim = 20;
sayi % 2 === 0 ? console.log("sayi cifttir") : console.log("sayi tektir");

const age = 13;

const sonuc = age <= 14 ? "cocuk" : age <= 18 ? "ergen" : "yetişkin";
console.log(sonuc);

const sayı1 = 16;
const sonuc1 = sayı1 > 0 ? "pozitif" : sayı1 < 0 ? "negatif" : "nötr";
console.log(sonuc1);

let say = -12;
const verilen = say < 0 ? "negatif" : say > 0 ? "pozitif" : "sifir";
console.log(verilen);

const sayis = 24;
const sonuc2 = sayis < 0 ? "Negatif" : sayis > 0 ? "pozitif" : "sifir";
console.log(sonuc2);

const number = -12;
const result1 = number < 0 ? "negatif" : number > 0 ? "pozitif" : "Sayı 0";
console.log(result1);

// &&

let maas = 9000;
let yıl = 12;

yıl > 10 && (maas = maas * 1.5);

yıl > 10 ? (maas = maas * 1.5) : null;

console.log(maas);

// || OR

durum = "cocuk";

age >= 18 || durum === "cocuk";
console.log(durum);
console.clear();

let sayilar1 = 25;
let sayilar2 = 45;
let operator = "/";

let sonuc3 = 0;
switch (operator) {
  case "+":
    sonuc3 = sayilar1 + sayilar2;
    break;
  case "-":
    sonuc3 = sayilar1 - sayilar2;
    break;
  case "*":
    sonuc3 = sayilar1 * sayilar2;
    break;
  case "/":
    sonuc3 = sayilar1 / sayilar2;
    break;

  default:
    break;
}

console.log(sonuc3,sonuc3.toFixed(2));

const g = 5;
const h = 10;

if ((g+h) %g && h < 15){
    console.log("both con");
}
else{
    console.log("at leas");
}

console.log(0);
console.log(Boolean(0));