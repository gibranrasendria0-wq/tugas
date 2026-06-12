const dompet = {
  pemilik: "Gibran Rasendria",
  saldo: 50000,

  topUp: function (jumlah) {
    this.saldo += jumlah;
    console.log(`Top up sebesar Rp${jumlah} berhasil. Saldo sekarang: Rp${this.saldo}`);
  },

  bayar: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log("Transaksi gagal, saldo tidak cukup.");
    } else {
      this.saldo -= jumlah;
      console.log(`Pembayaran sebesar Rp${jumlah} berhasil. Saldo sekarang: Rp${this.saldo}`);
    }
  },

 
  cekSaldo: function () {
    console.log(`Saldo ${this.pemilik} saat ini: Rp${this.saldo}`);
  }
};
dompet.cekSaldo();     
dompet.topUp(20000);   
dompet.bayar(30000);   
dompet.bayar(100000);   
dompet.cekSaldo();      