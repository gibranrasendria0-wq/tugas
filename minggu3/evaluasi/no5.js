const peserta = [
  {
    nama: "Ari",
    nilai: [90, 80, 85]
  },
  {
    nama: "Bima",
    nilai: [100, 60, 70]
  },
  {
    nama: "Citra",
    nilai: [95, 90, 88]
  }
];
/// Closure digunakan untuk menyimpan data internal agar bersifat private
/// Variabel daftarPeserta dan histori berada di dalam function buatLeaderboard(). ==>
/// ==> Karena keduanya tidak dikembalikan secara langsung, maka tidak bisa diakses dari luar
function buatLeaderboard(data) {
  // Clone data agar data asli tidak berubah
  let daftarPeserta = data.map(({ nama, nilai }) => ({ /// map() adalah Array Method yang digunakan untuk membuat array baru dengan mengubah setiap elemen dari array asli
    nama,
    nilai: [...nilai]
  }));

  let histori = [];

  function simpanRiwayat(aktivitas) {
    histori.push({
      aktivitas,
      waktu: new Date() ///Date Object digunakan untuk mencatat waktu setiap perubahan yang terjadi pada leaderboard
    });
  }

  return {
    tambahPeserta(...pesertaBaru) {
      pesertaBaru.forEach(({ nama, nilai }) => {
        daftarPeserta.push({
          nama,
          nilai: [...nilai]
        });

        simpanRiwayat(`Tambah peserta: ${nama}`);
      });
    },

    hapusPeserta(nama) {
      daftarPeserta = daftarPeserta.filter(
        peserta => peserta.nama !== nama
      );

      simpanRiwayat(`Hapus peserta: ${nama}`);
    },

    ubahNilai(nama, nilaiBaru) {
      const peserta = daftarPeserta.find(
        peserta => peserta.nama === nama
      );

      if (!peserta) {
        console.log("Peserta tidak ditemukan");
        return;
      }

      peserta.nilai = [...nilaiBaru]; /// ...spread digunakan untuk menyalin data

      simpanRiwayat(`Ubah nilai: ${nama}`);
    },

    ranking() {
      return [...daftarPeserta]
        .map(({ nama, nilai }) => { /// => arrow function adalah cara penulisan function yang lebih singkat
          const total =
            nilai.reduce((a, b) => a + b, 0);

          const rataRata =
            total / nilai.length;

          return {
            nama,
            rataRata
          };
        })
        .sort((a, b) => b.rataRata - a.rataRata);
    },

    riwayat() {
      return [...histori];
    }
  };
}

const leaderboard = buatLeaderboard(peserta);

leaderboard.tambahPeserta({ /// disini menggunakan Rest Parameter digunakan agar method dapat menerima banyak peserta sekaligus
  nama: "Doni",
  nilai: [90, 95, 100]
});

leaderboard.ubahNilai(
  "Bima",
  [100, 90, 95]
);

leaderboard.hapusPeserta("Ari");

console.log("=== Ranking ===");
console.log(leaderboard.ranking());

console.log("\n=== Riwayat ===");
console.log(leaderboard.riwayat());

console.log("\n=== Data Asli ===");
console.log(peserta);