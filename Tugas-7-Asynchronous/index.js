var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
waktu = 10000
readBooks(waktu,books[0],sisa_waktu_1 => {
    readBooks(sisa_waktu_1,books[1],sisa_waktu_2 => {
        readBooks(sisa_waktu_2,books[2],sisa_waktu_3 => {
            readBooks(sisa_waktu_3,books[3], sisa_waktu_4 =>{
            })
        })
    })
})