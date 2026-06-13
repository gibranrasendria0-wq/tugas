const penduduk = [
  { nama: "Ari",   energi: 90, makanan: 2, emas: 30, status: "aktif" },
  { nama: "Bima",  energi: 60, makanan: 1, emas: 10, status: "aktif" },
  { nama: "Citra", energi: 50, makanan: 0, emas: 50, status: "aktif" },
  { nama: "Dewi",  energi: 20, makanan: 4, emas: 5,  status: "aktif" },
  { nama: "Eko",   energi: 75, makanan: 0, emas: 20, status: "aktif" },
];

function simulasiSatuHari(penduduk) {


  for (const p of penduduk) {
    if (p.status !== "aktif") continue; 

    if (p.makanan > 0) {

      p.makanan -= 1;
      p.energi += 10;
    } else {
   
      p.energi -= 20;
    }
  }

  for (const p of penduduk) {
    if (p.status === "aktif" && p.energi <= 0) {
      p.status = "tumbang";
    }
  }

  for (const p of penduduk) {
    if (p.status !== "aktif") continue;

    let hasil;
    if (p.energi >= 80) {
      hasil = 3;    
    } else if (p.energi >= 50) {
      hasil = 2;    
    } else if (p.energi >= 30) {
      hasil = 1;      
    } else {
      hasil = 0;       
    }

    p.makanan += hasil;
    p.energi -= 15;
  }
  for (const p of penduduk) {
    if (p.status !== "aktif") continue; 

    if (p.makanan === 0 && p.emas >= 10) {
      p.makanan += 1; 
      p.emas -= 10;   
    }
  }

  const donatur = penduduk.filter(p => p.status === "aktif" && p.makanan > 3);

  for (const giver of donatur) {

    const aktifLain = penduduk.filter(p => p.status === "aktif" && p !== giver);
    if (aktifLain.length === 0) continue; // tidak ada yang bisa dibantu

    const minMakanan = Math.min(...aktifLain.map(p => p.makanan));
    let kandidat = aktifLain.filter(p => p.makanan === minMakanan);

    if (kandidat.length > 1) {
      const minEnergi = Math.min(...kandidat.map(p => p.energi));
      kandidat = kandidat.filter(p => p.energi === minEnergi);
    }

    const penerima = kandidat[0];

    // Transfer 1 makanan
    giver.makanan -= 1;
    penerima.makanan += 1;
  }

  return penduduk;
}

console.log("=== SIMULASI 7 HARI ===\n");

for (let hari = 1; hari <= 7; hari++) {
  simulasiSatuHari(penduduk);

  console.log(`--- Akhir Hari ${hari} ---`);

  console.table(
    penduduk.map(p => ({
      Nama: p.nama,
      Energi: p.energi,
      Makanan: p.makanan,
      Emas: p.emas,
      Status: p.status,
    }))
  );
}

console.log("\n=== RINGKASAN AKHIR SIMULASI ===\n");

const aktifList = penduduk.filter(p => p.status === "aktif");
console.log("Penduduk Aktif:", aktifList.map(p => p.nama));

const tumbangList = penduduk.filter(p => p.status === "tumbang");
console.log("Penduduk Tumbang:", tumbangList.map(p => p.nama));

const totalMakanan = penduduk.reduce((acc, p) => acc + p.makanan, 0);
console.log("Total Makanan Kerajaan:", totalMakanan);

const totalEmas = penduduk.reduce((acc, p) => acc + p.emas, 0);
console.log("Total Emas Kerajaan:", totalEmas);


const rataEnergiAktif =
  aktifList.length > 0
    ? aktifList.reduce((acc, p) => acc + p.energi, 0) / aktifList.length
    : 0;
console.log("Rata-rata Energi Penduduk Aktif:", rataEnergiAktif);

const kerajaan = {
  penduduk: penduduk,
  simulasiHari() {
    simulasiSatuHari(this.penduduk);
  },

  laporan() {
    console.table(
      this.penduduk.map(p => ({
        Nama: p.nama,
        Energi: p.energi,
        Makanan: p.makanan,
        Emas: p.emas,
        Status: p.status,
      }))
    );
  },

  pendudukAktif() {
    return this.penduduk.filter(p => p.status === "aktif");
  },

  pendudukTumbang() {
    return this.penduduk.filter(p => p.status === "tumbang");
  },

  pendudukTerkaya() {
    const aktif = this.pendudukAktif();
    if (aktif.length === 0) return null;
    return aktif.reduce((terkaya, p) =>
      p.emas > terkaya.emas ? p : terkaya
    );
  },

  pendudukTerlapar() {
    const aktif = this.pendudukAktif();
    if (aktif.length === 0) return null;
    return aktif.reduce((terlapar, p) =>
      p.makanan < terlapar.makanan ? p : terlapar
    );
  },
};

console.log("\n=== CONTOH PENGGUNAAN OBJECT 'kerajaan' ===\n");
kerajaan.simulasiHari(); 
kerajaan.laporan();
console.log("Aktif:", kerajaan.pendudukAktif().map(p => p.nama));
console.log("Tumbang:", kerajaan.pendudukTumbang().map(p => p.nama));
console.log("Terkaya:", kerajaan.pendudukTerkaya()?.nama);
console.log("Terlapar:", kerajaan.pendudukTerlapar()?.nama);


console.log("\n=== SOAL 5: STATISTIK TANPA for/while ===\n");

const totalEnergi = penduduk.reduce((acc, p) => acc + p.energi, 0);
const totalMakanan2 = penduduk.reduce((acc, p) => acc + p.makanan, 0);
const totalEmas2 = penduduk.reduce((acc, p) => acc + p.emas, 0);
const jumlahAktif = penduduk.filter(p => p.status === "aktif").length;

console.log("Total Energi:", totalEnergi);
console.log("Total Makanan:", totalMakanan2);
console.log("Total Emas:", totalEmas2);
console.log("Jumlah Penduduk Aktif:", jumlahAktif);

function tentukanCuaca() {
  const daftarCuaca = ["cerah", "hujan", "badai"];
  const index = Math.floor(Math.random() * daftarCuaca.length);
  return daftarCuaca[index];
}

function simulasiSatuHariDenganCuaca(penduduk) {
  const cuaca = tentukanCuaca();
  console.log(`Cuaca hari ini: ${cuaca}`);

  for (const p of penduduk) {
    if (p.status !== "aktif") continue;

    if (p.makanan > 0) {
      p.makanan -= 1;
      p.energi += 10;
    } else {
      p.energi -= 20;
    }
  }

  for (const p of penduduk) {
    if (p.status === "aktif" && p.energi <= 0) {
      p.status = "tumbang";
    }
  }

  for (const p of penduduk) {
    if (p.status !== "aktif") continue;

    let hasil;
    if (p.energi >= 80) hasil = 3;
    else if (p.energi >= 50) hasil = 2;
    else if (p.energi >= 30) hasil = 1;
    else hasil = 0;
    if (cuaca === "hujan") {
      hasil = Math.max(0, hasil - 1);
    }

    p.makanan += hasil;
    p.energi -= 15;
  }

  for (const p of penduduk) {
    if (p.status !== "aktif") continue;

    if (p.makanan === 0 && p.emas >= 10) {
      p.makanan += 1;
      p.emas -= 10;
    }
  }

  const donatur = penduduk.filter(p => p.status === "aktif" && p.makanan > 3);

  for (const giver of donatur) {
    const aktifLain = penduduk.filter(p => p.status === "aktif" && p !== giver);
    if (aktifLain.length === 0) continue;

    const minMakanan = Math.min(...aktifLain.map(p => p.makanan));
    let kandidat = aktifLain.filter(p => p.makanan === minMakanan);

    if (kandidat.length > 1) {
      const minEnergi = Math.min(...kandidat.map(p => p.energi));
      kandidat = kandidat.filter(p => p.energi === minEnergi);
    }

    const penerima = kandidat[0];
    giver.makanan -= 1;
    penerima.makanan += 1;
  }

  if (cuaca === "badai") {
    for (const p of penduduk) {
      if (p.status !== "aktif") continue;
      p.energi -= 5;
      if (p.energi <= 0) {
        p.status = "tumbang";
      }
    }
  }

  return penduduk;
}