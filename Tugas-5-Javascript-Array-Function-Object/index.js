// soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
var i = 0 ;
daftarHewan.sort();
for(var n = daftarHewan.length; n > 0 ; n--){
    console.log(daftarHewan[i]);
    i++;
}


// soal 2
function  introduce(name, age, address, hobby){
  return("Nama saya "+data.name+", umur saya "+data.age+" tahun, alamat saya di "+data.address+", dan saya punya hobby yaitu "+data.hobby);
}
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
var perkenalan = introduce(data);
console.log(perkenalan);


// soal 3
function hitung_huruf_vokal(hitung){
    var i = 0;
    var jumlah = 0;
    var baru = hitung.toLowerCase();
    while(i<hitung.length){
        if(baru[i]== "a" || baru[i]== "i" || baru[i]== "u" || baru[i] == "e" || baru[i]== "o"){
            jumlah += 1;
            i++;
        }
        else {
            i++;
        }
    }
    return jumlah;
}
var hitung_1 = hitung_huruf_vokal("Muhammad");
var hitung_2 = hitung_huruf_vokal("Iqbal");
console.log(hitung_1 , hitung_2);


// soal 4
function hitung(a){
    var i = -2;
    return (2 * a) + i;
}
console.log( hitung(0) ) 
console.log( hitung(1) ) 
console.log( hitung(2) ) 
console.log( hitung(3) ) 
console.log( hitung(5) ) 