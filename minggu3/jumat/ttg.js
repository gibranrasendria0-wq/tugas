const siswaSekolah = [
    {
        nama: "Ari",
        nilai: 85,
        kelas: "X-A"
    },
    {
        nama: "Bima",
        nilai: 92,
        kelas: "X-B"
    },
    {
        nama: "Citra",
        nilai: 78,
        kelas: "X-A"
    },
    {
        nama: "Dewi",
        nilai: 88,
        kelas: "X-C"
    },
    {
        nama: "Eko",
        nilai: 75,
        kelas: "X-B"
    }
];

function buatLaporanSekolah(namaSekolah, ...siswa) {

    if (siswa.length === 0) {
        console.log(" Tidak ada data siswa!");
        return;
    }
    const jumlahSiswa = siswa.length;

    const nilaiArray = siswa.map(s => s.nilai);
    const totalNilai = nilaiArray.reduce(
        (acc, nilai) => acc + nilai,
        0
    );
    const rataRataNilai = (
        totalNilai / jumlahSiswa
    ).toFixed(2);

    const siswaTerurut = [...siswa].sort(
        (a, b) => b.nilai - a.nilai
    );
    const [siswaTeringgi] = siswaTerurut;
    const {
        nama: namaTertinggi,
        nilai: nilaiTertinggi,
        kelas: kelasTertinggi
    } = siswaTeringgi;

    const siswaTerendah = siswaTerurut[siswaTerurut.length - 1];
    const {
        nama: namaTerendah,
        nilai: nilaiTerendah,
        kelas: kelasTerendah
    } = siswaTerendah;

    const daftarNama = siswa.map(({ nama }) => nama);

    // TAMPILKAN HASIL
    console.log(`\n=== LAPORAN ${namaSekolah} ===`);
    console.log(`Jumlah Siswa : ${jumlahSiswa}`);
    console.log(`Rata-rata Nilai : ${rataRataNilai}`);
    console.log(`\n Nilai Tertinggi :`);
    console.log(`   Nama: ${namaTertinggi}`);
    console.log(`   Nilai: ${nilaiTertinggi}`);
    console.log(`   Kelas: ${kelasTertinggi}`);
    console.log(`\n Nilai Terendah :`);
    console.log(`   Nama: ${namaTerendah}`);
    console.log(`   Nilai: ${nilaiTerendah}`);
    console.log(`   Kelas: ${kelasTerendah}`);
    console.log(`\n Daftar Nama Siswa :`);
    daftarNama.forEach((nama, index) => {
        console.log(`   ${index + 1}. ${nama}`);
        ///\n membuat garis baru dalam string
    });
    console.log();
}

buatLaporanSekolah("SMA Negeri 1 Jakarta", ...siswaSekolah);