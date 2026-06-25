function ambilPengguna() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nama: "Budi",
                premium: true
            });
        }, 2000);
    });
}

function ambilKursus() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "JavaScript Dasar",
                "React",
                "Node.js"
            ]);
        }, 3000);
    });
}

function ambilNilaiSiswa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nilai: 90
            });
        }, 1500);
    });
}

console.time("Waktu Muat Dashboard");

Promise.all([
    ambilPengguna(),
    ambilKursus(),
    ambilNilaiSiswa()
])
.then(([pengguna, kursus, siswa]) => {

    console.log("===== DASHBOARD SISWA =====");

    console.log("\nData Pengguna");
    console.log("Nama    :", pengguna.nama);
    console.log("Premium :", pengguna.premium);

    console.log("\nDaftar Kursus");
    kursus.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });

    console.log("\nNilai Siswa");
    console.log("Nilai :", siswa.nilai);
    console.log(
        "Status:",
        siswa.nilai >= 75 ? "Lulus" : "Tidak Lulus"
    );
})
.catch((error) => {
    console.log("Error:", error);
})
.finally(() => {
    console.timeEnd("Waktu Muat Dashboard");
});