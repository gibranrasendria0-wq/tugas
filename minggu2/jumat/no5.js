const nilaiSiswa = {
  Andi: 80,
  Budi: 90,
  Citra: 75,
  Dewi: 88
};
const namaSiswa = Object.keys(nilaiSiswa);
console.log("Daftar nama siswa:", namaSiswa);

const semuaNilai = Object.values(nilaiSiswa);
console.log("Daftar nilai siswa:", semuaNilai);

const totalNilai = semuaNilai.reduce((total, nilai) => total + nilai, 0);
const rataRata = totalNilai / semuaNilai.length;
console.log("Rata-rata nilai:", rataRata);

const nilaiTertinggi = Math.max(...semuaNilai);
console.log("Nilai tertinggi:", nilaiTertinggi);

const siswaTertinggi = Object.entries(nilaiSiswa).find(
  ([nama, nilai]) => nilai === nilaiTertinggi
);
console.log(`Siswa dengan nilai tertinggi: ${siswaTertinggi[0]} (${siswaTertinggi[1]})`);