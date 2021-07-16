// soal 1
var nilai = 78;
if(nilai >= 85){
    console.log("indeks A")
}else if (nilai >=75 && nilai <85){
    console.log("indeks B")
}else if (nilai >=65 && nilai <75){
    console.log("indeks C")
}else if (nilai >=55 && nilai <65){
    console.log("indeks D")
}else if (nilai < 55){
    console.log("indeks E")
}

// soal 2
var tanggal = "20";
var bulan = 10;
var tahun = "2001";
switch(bulan){
    case 1 : {console.log(tanggal,"Januari",tahun); break;}
    case 2 : {console.log(tanggal,"Februari",tahun); break;}
    case 3 :{console.log(tanggal,"Mare",tahun); break;}
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

// soal 3
var n = 10;
var a = " ";
while(n > 0){
    a += "#";
    console.log(a);
    n--;
}

// soal 4
var m = 10;
var n = 1;
while(n <= m){
    console.log(n,"- I love programming");
    n++;
    if(n > m){
        break;
    }
    console.log(n,"- I love Javascript");
    n++;
    if(n > m){
        break;
    }
    console.log(n,"- I love VueJs");
    if(n > m){
        break;
    }
    console.log("===");
    n++;
}