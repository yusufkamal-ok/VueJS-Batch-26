// soal 1
function next_date(tanggal, bulan, tahun){
    var baru = tanggal + 1;
    if (bulan==1 && baru > 30 ){
        bulan += 1;
        tanggal = 1;
    } else if (bulan==2 && baru > 28 || bulan==1 && baru > 29){
        bulan += 1;
        tanggal = 1;
    }else if (bulan==3 &&  baru > 31){
        bulan += 1;
        tanggal = 1;
    }
    else if (bulan==4 &&  baru > 30){
        bulan += 1;
        tanggal = 1;
    }
    else if (bulan==5 &&  baru > 29){
        bulan += 1;
        tanggal = 1;
    }else if (bulan==6 &&  baru > 30){
        bulan += 1;
        tanggal = 1;
    }else if (bulan==7 &&  baru > 31){
        bulan += 1;
        tanggal = 1;
    }else if (bulan==8 &&  baru > 31){
        bulan += 1;
        tanggal = 1;
    }else if (bulan==9 &&  baru > 30){
        bulan += 1;
        tanggal = 1;
    }else if (bulan==10 &&  baru > 30){
        bulan += 1;
        tanggal = 1;
    }else if (bulan==11 &&  baru > 30){
        bulan += 1;
        tanggal = 1;
    }else if (bulan==12 &&  baru > 31){
        bulan = 1;
        tanggal = 1;
        tahun +=1
    }else{
        tanggal += 1;
    }
    switch(bulan){
        case 1 : {console.log(tanggal,"Januari",tahun); break;}
        case 2 : {console.log(tanggal,"Februari",tahun); break;}
        case 3 :{console.log(tanggal,"Maret",tahun); break;}
        case 4 :{console.log(tanggal,"April",tahun); break;}
        case 5 :{console.log(tanggal,"Mei",tahun); break;}
        case 6 :{console.log(tanggal,"Juni",tahun); break;}
        case 7 :{console.log(tanggal,"Juli",tahun); break;}
        case 8 :{console.log(tanggal,"Agustus",tahun); break;}
        case 9 :{console.log(tanggal,"September",tahun); break;}
        case 10 :{console.log(tanggal,"Oktober",tahun); break;}
        case 11 :{console.log(tanggal,"November",tahun); break;}
        case 12 :{console.log(tanggal,"Desember",tahun); break;}
    }
}
// contoh inputan
var tanggal = 31;
var bulan = 12;
var tahun = 2020;
next_date(tanggal , bulan , tahun );

var tanggal = 29;
var bulan = 2;
var tahun = 2020;
next_date(tanggal , bulan , tahun ) ;

var tanggal = 28;
var bulan = 2;
var tahun = 2021;
next_date(tanggal , bulan , tahun );

var tanggal = 20
var bulan = 1
var tahun = 2021
next_date(tanggal , bulan , tahun ); 


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