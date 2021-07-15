//soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";
var a = pertama.substr(0,19);
var b = kedua.substr(0,8);
var c = kedua.substr(8,11).toUpperCase();
console.log(a);
console.log(b);
console.log(c);
console.log(a.concat(b,c));

//soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";
var hasil = (Number(10) - Number(6)) * (Number(4) + Number(2));
console.log(hasil);

//soal 3
var kalimat = "wah javascript itu keren sekali";
var katapertama = kalimat.substr(0,3);
var katakedua = kalimat.substr(4,10);
var kataketiga = kalimat.substr(15,3);
var katakeempat = kalimat.substr(19,5);
var katakelima = kalimat.substr(25,6);
console.log("katapertama: " + katapertama);
console.log("katakedua: " + katakedua);
console.log("kataketiga: " + kataketiga);
console.log("katakeempat: " + katakeempat);
console.log("katakelima: " + katakelima);