function buatLoginSystem() {
    let loginBerhasil = 0;
    let loginGagal = 0;

    return {
        berhasil() {
            loginBerhasil++;
            console.log("Login berhasil");
        },

        gagal() {
            loginGagal++;
            console.log("Login gagal");
        },

        statistik() {
            console.log("Login berhasil :", loginBerhasil);
            console.log("Login gagal    :", loginGagal);
        }
    };
}

const sistemLogin = buatLoginSystem();

sistemLogin.berhasil();
sistemLogin.berhasil();
sistemLogin.gagal();
sistemLogin.berhasil();

sistemLogin.statistik();