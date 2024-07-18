//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar

let sayi1 = 25
let sayi2 = 45
let operator = "+"

let sonuc = 0
switch (operator) {
    case "+":
        sonuc = sayi1 + sayi2
        break;
    case "-":
        sonuc = sayi1 - sayi2
        break;
    case "*":
        sonuc = sayi1 * sayi2
        break;
    case "/":
        sonuc = sayi1 / sayi2
        break;
    
    default:
        break;
}

console.log("sonuc:",sonuc.toFixed(2));