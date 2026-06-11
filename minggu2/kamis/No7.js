// Data awal buku
const daftarBuku = ["Laskar Pelangi", "Bumi", "Dilan", "Ayat-Ayat Cinta"];

// 1. Tambah buku baru
function tambahBuku(buku) {
  daftarBuku.push(buku);
  console.log(`Buku "${buku}" berhasil ditambahkan.`);
}

// 2. Hapus buku berdasarkan nama
function hapusBuku(buku) {
  const index = daftarBuku.indexOf(buku);

  if (index !== -1) {
    daftarBuku.splice(index, 1);
    console.log(`Buku "${buku}" berhasil dihapus.`);
  } else {
    console.log(`Buku "${buku}" tidak ditemukan.`);
  }
}

// 3. Cek ketersediaan buku
function cekBuku(buku) {
  const tersedia = daftarBuku.includes(buku);

  if (tersedia) {
    console.log(`Buku "${buku}" tersedia `);
  } else {
    console.log(`Buku "${buku}" tidak tersedia `);
  }
}

// 4. Tampilkan seluruh daftar buku
function tampilkanBuku() {
  console.log("=== Daftar Buku ===");
  daftarBuku.forEach(function(buku, index) {
    console.log(`${index + 1}. ${buku}`);
  });
}

// ======= Jalankan =======
tampilkanBuku();

tambahBuku("Harry Potter");
hapusBuku("Dilan");
cekBuku("Bumi");
cekBuku("Dilan");

tampilkanBuku();