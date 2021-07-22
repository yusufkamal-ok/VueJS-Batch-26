var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
waktu__ = 10000
readBooksPromise(waktu__,books[0])
.then(sisa_waktu => readBooksPromise(sisa_waktu,books[1]))
.catch(sisa_waktu => readBooksPromise(sisa_waktu,books[1]))
.then(sisa_waktu => readBooksPromise(sisa_waktu,books[2]))
.catch(sisa_waktu => readBooksPromise(sisa_waktu,books[2]))
.then(sisa_waktu => readBooksPromise(sisa_waktu,books[3]))
.catch(sisa_waktu => readBooksPromise(sisa_waktu,books[3]))