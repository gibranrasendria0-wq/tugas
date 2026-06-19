function checkout(...barang) {

 
    console.log("Jumlah barang:", barang.length);
    console.log("Daftar barang:", barang);
    console.log("Barang pertama:", barang[0]);
}

 checkout(
    "Buku", "Pensil", "Penghapus"
);
