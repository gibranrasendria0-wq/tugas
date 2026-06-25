const platform = {
    login() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    nama: "Gibran",
                    premium: true
                });
            }, 1000);
        });
    },

    ambilProfil() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    nama: "Gibran",
                    premium: true
                });
            }, 1500);
        });
    },

    ambilKursus() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    "JavaScript",
                    "HTML",
                    "CSS"
                ]);
            }, 2000);
        });
    },

    ambilNilai() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    90,
                    85,
                    88
                ]);
            }, 1200);
        });
    },

    async tampilkanDashboard() {
        try {
            const user = await this.login();

            console.log("Login berhasil");
            console.log("Memuat dashboard...\n");

            const [profil, kursus, nilai] =
                await Promise.all([
                    this.ambilProfil(),
                    this.ambilKursus(),
                    this.ambilNilai()
                ]);

            console.log("===== DASHBOARD =====");
            console.log("Nama:", profil.nama);
            console.log("Premium:", profil.premium ? "Ya" : "Tidak");
            console.log("Kursus:", kursus.join(", "));
            console.log("Nilai:", nilai.join(", "));
        } catch (error) {
            console.log("Terjadi kesalahan:", error);
        }
    }
};

platform.tampilkanDashboard();