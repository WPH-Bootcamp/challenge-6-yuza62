// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

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
import { books } from "../data/books";
import { Book } from "../types";

// tambah buku
export function addBook(
  title: string,
  author: string,
  publicationYear: number,
): void {
  const newBook: Book = {
    title,
    author,
    publicationYear,
  };

  books.push(newBook);

  console.log(`Buku "${title}" berhasil ditambahkan!`);
}

// tampil semua buku
export function listBooks(): void {
  console.log("\nDAFTAR BUKU:\n");

  if (books.length === 0) {
    console.log("Belum ada buku");
    return;
  }

  books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
    console.log(`   Penulis: ${book.author}`);
    console.log(`   Tahun Terbit: ${book.publicationYear}\n`);
  });

  console.log(`Total: ${books.length} buku`);
}

// cari buku
export function searchBook(title?: string): void {
  // jika parameter kosong
  if (!title) {
    console.log("Parameter judul tidak diberikan. Menampilkan semua buku...\n");

    listBooks();
    return;
  }

  const foundBooks = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase()),
  );

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