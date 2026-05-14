"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Book Management Application - Week 6");
console.log("=====================================");
// Mulai pengujian di bawah ini
const bookManager_1 = require("./functions/bookManager");
console.log("TAHAP 1: Menambahkan Buku ke Koleksi\n");
// tambah buku
(0, bookManager_1.addBook)("Head First Java", "Kathy Sierra & Bert Bates", 2005);
(0, bookManager_1.addBook)("Design Patterns", "Erich Gamma", 1994);
(0, bookManager_1.addBook)("Introduction to Algorithms", "Thomas H. Cormen", 2009);
(0, bookManager_1.addBook)("You Don't Know JS", "Kyle Simpson", 2015);
(0, bookManager_1.addBook)("JavaScript: The Good Parts", "Douglas Crockford", 2008);
(0, bookManager_1.addBook)("The Hobbit", "J.R.R. Tolkien", 1937);
(0, bookManager_1.addBook)("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997);
(0, bookManager_1.addBook)("The Lord of the Rings", "J.R.R. Tolkien", 1954);
(0, bookManager_1.addBook)("Dilan Itb", "Pidi Baiq", 1998);
(0, bookManager_1.addBook)("Dilan Unpad", "Yuza Abd", 2026);
(0, bookManager_1.addBook)("Clean Code", "Robert C. Martin", 2008);
console.log("\n----------------------------------");
console.log("\nTAHAP 2: Menampilkan Semua Buku");
// tampil semua
(0, bookManager_1.listBooks)();
console.log("\n----------------------------------");
console.log("\nTAHAP 3: Mencari Buku\n");
// cari buku
(0, bookManager_1.searchBook)("Dilan");
console.log("\n----------------------------------\n");
(0, bookManager_1.searchBook)("the");
console.log("\n----------------------------------\n");
(0, bookManager_1.searchBook)("abc");
console.log("\n----------------------------------\n");
console.log("Test searchBook tanpa parameter:");
(0, bookManager_1.searchBook)();
