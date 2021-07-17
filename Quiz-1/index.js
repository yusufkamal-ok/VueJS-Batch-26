// soal 2
function  jumlah_kata(a){
    var n = a.length;
    var i = 0;
    var jumlah = 0;
    while(i < n){
        if(a[i] == " "){
            jumlah += 1;
            i++;
        }else {
            i++;
        }
    }
    jumlah += 1;
    console.log(jumlah);
}
var kalimat_1 = "Halo nama saya Muhammad Iqbal Mubarok";
var kalimat_2 = "Saya Iqbal";
jumlah_kata(kalimat_1);
jumlah_kata(kalimat_2) ;