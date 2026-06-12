const barang = {
  namaBarang: "Indomie Goreng",
  stok: 100,
  harga: 3000,

  tambahStok: function (jumlah) {
    this.stok += jumlah;
    console.log(`Stok ditambah ${jumlah}. Stok sekarang: ${this.stok}`);
  },
  kurangiStok: function (jumlah) {
    if (jumlah > this.stok) {
      console.log("Gagal mengurangi stok, jumlah melebihi stok yang ada.");
    } else {
      this.stok -= jumlah;
      console.log(`Stok dikurangi ${jumlah}. Stok sekarang: ${this.stok}`);
    }
  },
  totalNilaiBarang: function () {
    const total = this.stok * this.harga;
    console.log(`Total nilai barang ${this.namaBarang}: Rp${total}`);
  }
};
console.log(`Data awal -> Stok: ${barang.stok}, Harga: Rp${barang.harga}`);

barang.tambahStok(50);   
barang.totalNilaiBarang();   

barang.kurangiStok(30);     
barang.totalNilaiBarang();   

barang.kurangiStok(1000);  