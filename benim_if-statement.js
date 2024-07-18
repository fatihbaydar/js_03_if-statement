// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***");

/* ---------------------------------- */
/*              IF - ELSE             */
/* ---------------------------------- */

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

let sayi = 77
let kalan = sayi%2
console.log(kalan);
if (kalan == 0) {
    console.log("çift sayi")
}
else{
    console.log("tek sayi");
}

// let sayi = prompt("bir sayi giriniz")
// let kalan = sayi%2
// console.log(kalan);
// if (kalan == 0) {
//     console.log("çift sayi")
// }
// else{
//     console.log("tek sayi");
// }

// not web ortamında kullanıcıdan gelen bilgiler string gelir. Number(prompt("yazı")) ya da + işareti ile sayıya çevrilir.


// ELEKTRİK SİNYAL BİLGİSİNE LAMBA YANAR YA DA YANMAZ
// let sinyal = (0,1)
// if (sinyal == 1) {
//     console.log("lamba yanmaz")
// }
// else{
//     console.log("lamba yanar")
// }

// let sinyal1 = prompt("sinyal geliyor mu")
// if(sinyal1=="evet"){
//     console.log("lamba yanar");
// }
// else{
//     console.log("lamba yanmaz");
// }

// prompt girerken stringden sonra kulannıcıya seçenek belirtilmeli


/* ---------------------------------- */
/*               IF-ELSE              */
/* ---------------------------------- */

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

///ÖRNEK: GİRİLEN SAYI NEGATİF Mİ POZİTİF Mİ?

// let sayi2 = prompt("bir sayi giriniz:")
// if(sayi2 > 0){
//     console.log("sayi pozitiftir")
// }
// else if(sayi2 <0){
//     console.log("sayi negatiftir")
// }
// else if(sayi2 == 0){
//     console.log("sayi nötrdür")
// }
// else{
//     console.log("geçersiz değer girdiniz")
// }

//VERİLEN 3 SAYIDAN EN BÜYÜĞÜNÜ BULUN
//1.yöntem: built in fonksiyonu kullanma: Max komutu

let a = 78
let b = 8
let c = 90

const enb = Math.max(a,b,c)
console.log(enb);

// 2.yöntem nested if yapısı iç içe if yapısı bu pek ideal bir yapı değil
if(a>b){
    if(a>c){
        console.log("en büyük sayi:", a);
    }
}
if(b>a){
    if(b>c){
        console.log("en büyük sayi:", b);
    }
}
if(c>a){
    if(c>b){
        console.log("en büyük sayi:", c);
    }
}

// 3.yöntem mantıksal operatörler

if (a>b && a>c)
    console.log("en büyük sayi a")
else if(b>a && b>c)
    console.log("en büyük sayi b")
else{
    console.log("en büyük sayi c");
}