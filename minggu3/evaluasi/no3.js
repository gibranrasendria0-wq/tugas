function buatBank(namaBank) {
  let nomorRekeningTerakhir = 0;
  const rekeningList = [];

  function cariRekening(nomor) {
    return rekeningList.find(
      rekening => rekening.nomorRekening === nomor
    );
  }

  return {
    buatRekening(namaPemilik, saldoAwal = 0) {
      nomorRekeningTerakhir++;
      rekeningList.push({
        nomorRekening: nomorRekeningTerakhir,
        namaPemilik,
        saldo: saldoAwal,
        transaksi: [
          {
            jenis: "Buat Rekening",
            jumlah: saldoAwal,
            waktu: new Date().toLocaleString("id-ID")
          }
        ]
      });
      return nomorRekeningTerakhir;
    },

    setor(nomorRekening, jumlah) {
      const rekening = cariRekening(nomorRekening);
      if (!rekening) {
        console.log("Rekening tidak ditemukan");
        return;
      }
      rekening.saldo += jumlah;
      rekening.transaksi.push({ /// menambahkan nilai elemen di akhir
        jenis: "Setor",
        jumlah,
        waktu: new Date().toLocaleString("id-ID")
      });
    },

    tarik(nomorRekening, jumlah) {
      const rekening = cariRekening(nomorRekening);
      if (!rekening) {
        console.log("Rekening tidak ditemukan");
        return;
      }
      if (rekening.saldo < jumlah) {
        console.log("Saldo tidak cukup");
        return;
      }
      rekening.saldo -= jumlah;
      rekening.transaksi.push({ /// menambahkan nilai elemen di akhir
        jenis: "Tarik",
        jumlah,
        waktu: new Date().toLocaleString("id-ID")
      });
    },

    transfer(dari, ke, jumlah) {
      const rekeningAsal = cariRekening(dari);
      const rekeningTujuan = cariRekening(ke);

      if (!rekeningAsal || !rekeningTujuan) { /// || or true jika salah satu kondisi bernilai true
        console.log("Rekening tidak ditemukan");
        return;
      }
      if (rekeningAsal.saldo < jumlah) {
        console.log("Saldo tidak cukup");
        return;
      }

      rekeningAsal.saldo -= jumlah;
      rekeningTujuan.saldo += jumlah;
      const waktu = new Date().toLocaleString("id-ID");

      rekeningAsal.transaksi.push({ /// menambahkan nilai elemen di akhir
        jenis: "Transfer Keluar",
        jumlah,
        waktu
      });
      rekeningTujuan.transaksi.push({ /// menambahkan nilai elemen di akhir
        jenis: "Transfer Masuk",
        jumlah,
        waktu
      });
    },
 
    laporan() {
      console.log(`=== ${namaBank} ===`);
      rekeningList.forEach(rekening => {  /// forEach adalah array method yang digunakan untuk menjalankan sebuah fungsi pada setiap elemen array
        console.log({
          nomorRekening: rekening.nomorRekening,
          namaPemilik: rekening.namaPemilik,
          saldo: rekening.saldo,
          transaksi: rekening.transaksi
        });
      });
    }
  };
}

// =========================================
// PROSES EKSEKUSI (Di luar fungsi buatBank)
// ======================================
const bank = buatBank("Bank Anti Bunga");

const Gibran = bank.buatRekening("Gibran", 100000);
const Udin = bank.buatRekening("Udin", 50000);

bank.setor(Gibran, 25000);
bank.transfer(Gibran, Udin, 30000);
bank.tarik(Udin, 10000);

bank.laporan();