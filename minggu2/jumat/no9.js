const bank = {
  nasabah: [], 
  tambahNasabah: function (nama, saldo) {
    this.nasabah.push({ nama: nama, saldo: saldo });
    console.log(`Nasabah ${nama} berhasil ditambahkan dengan saldo Rp${saldo}`);
  },
  cariNasabah: function (nama) {
    const hasil = this.nasabah.find((n) => n.nama === nama);
    if (!hasil) {
      console.log(`Nasabah ${nama} tidak ditemukan.`);
    }
    return hasil;
  },

  transfer: function (dariNama, keNama, jumlah) {
    const pengirim = this.cariNasabah(dariNama);
    const penerima = this.cariNasabah(keNama);

    if (!pengirim || !penerima) {
      console.log("Transfer gagal, salah satu nasabah tidak ditemukan.");
      return;
    }

    if (pengirim.saldo < jumlah) {
      console.log(`Transfer gagal, saldo ${pengirim.nama} tidak cukup.`);
      return;
    }

    pengirim.saldo -= jumlah;
    penerima.saldo += jumlah;
    console.log(`Transfer Rp${jumlah} dari ${pengirim.nama} ke ${penerima.nama} berhasil.`);
  },
  tampilkanSemua: function () {
    console.log("=== Daftar Nasabah ===");
    for (const n of this.nasabah) {
      console.log(`Nama: ${n.nama}, Saldo: Rp${n.saldo}`);
    }
  }
};
bank.tambahNasabah("Andi", 100000);
bank.tambahNasabah("Budi", 50000);
bank.tambahNasabah("Citra", 75000);
bank.tampilkanSemua();
bank.transfer("Andi", "Budi", 30000); 
bank.transfer("Citra", "Budi", 100000); 
bank.tampilkanSemua();

