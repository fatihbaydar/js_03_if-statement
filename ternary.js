// yaşı 18 den büyük olanların oy kullanabileceğini, değilse oy kullanmayacağını mesaj yazan program

let yas = 21
//1.yöntem
yas>18 ? console.log("oy kullanabilir") : console.log("oy kullanamaz")

//2.yöntem
const mesaj = yas>18 ? "oy kullan" : "oy kullanma"
console.log(mesaj);
mesaj == "oy kullan" ? console.log("sandığa git") : console.log("evde otur");

//sayı tek mi çift mi

let num = 89
num % 2 == 0 ? console.log("çift sayı") : console.log("tek sayı")
const mesaj1 = num % 2 == 0 ? "çift" : "tek"

//nested ternary
// yaş 14den küçükse çocuk, 14-18 arası ergen, 18 üstü yetişkin

const yas1 = 13
const sonuc1 = yas1 <= 14 ? "çocuk" : (yas1<=18 ? "ergen" : "yetişkin")
console.log(sonuc1);

// sayi negatif mi pozitif mi nötr mü

const sayi2 = 56
const sonuc2 = sayi2 > 0 ? "sayi pozitif" : sayi2<0 ? "sayi negatif" : "nötr"
console.log(sonuc2);


// SHORT CIRCUIT

let maas = 1000
let yil = 5

yil>4 && (maas = maas + maas*0.25)
console.log(maas);

//or
let yas3 = 25
durum = "cocuk"
yas3 >= 18 || (durum === "cocuk")
console.log(durum);