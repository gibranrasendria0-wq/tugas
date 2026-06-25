// 1. Login
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Login berhasil");
            // reject("Login gagal");
        }, 1000);
    });
}

// 2. Ambil data profil
function ambilProfil() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                nama: "Gibran",
                umur: 18
            });
            // reject("Gagal mengambil profil");
        }, 1500);
    });
}

// 3. Ambil daftar kursus
function ambilKursus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                "JavaScript Dasar",
                "HTML",
                "CSS"
            ]);
            // reject("Gagal mengambil kursus");
        }, 2000);
    });
}

// 4. Ambil nilai
function ambilNilai() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([90, 85, 88]);
            // reject("Gagal mengambil nilai");
        }, 1200);
    });
}

// Program utama
async function muatDataSiswa() {
    try {
        const loginResult = await login();
        console.log(loginResult);

        const profil = await ambilProfil();
        console.log("Profil:", profil);

        const kursus = await ambilKursus();
        console.log("Kursus:", kursus);

        const nilai = await ambilNilai();
        console.log("Nilai:", nilai);

        console.log("Semua data berhasil dimuat.");
    } catch (error) {
        console.log("Error:", error);
    }
}

muatDataSiswa();