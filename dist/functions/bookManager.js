"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
const books_1 = require("../data/books");
// tambah buku
function addBook(title, author, publicationYear) {
    const newBook = {
        title,
        author,
        publicationYear,
    };
    books_1.books.push(newBook);
    console.log(`Buku "${title}" berhasil ditambahkan!`);
}
// tampil semua buku
function listBooks() {
    console.log("\nDAFTAR BUKU:\n");
    if (books_1.books.length === 0) {
        console.log("Belum ada buku");
        return;
    }
    books_1.books.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title}`);
        console.log(`   Penulis: ${book.author}`);
        console.log(`   Tahun Terbit: ${book.publicationYear}\n`);
    });
    console.log(`Total: ${books_1.books.length} buku`);
}
// cari buku
function searchBook(title) {
    // jika parameter kosong
    if (!title) {
        console.log("Parameter judul tidak diberikan. Menampilkan semua buku...\n");
        listBooks();
        return;
    }
    const foundBooks = books_1.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
    // jika tidak ditemukan
    if (foundBooks.length === 0) {
        console.log(`Tidak ada buku dengan judul yang mengandung "${title}"`);
        return;
    }
    console.log(`\nHASIL PENCARIAN untuk "${title}":\n`);
    foundBooks.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title}`);
        console.log(`   Penulis: ${book.author}`);
        console.log(`   Tahun Terbit: ${book.publicationYear}\n`);
    });
    console.log(`Ditemukan: ${foundBooks.length} buku`);
}
