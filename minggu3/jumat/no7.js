const akun = {
    nama: "Fikri",
    email: "fikri@email.com"
};

const profil = {
    umur: 20,
    kota: "Bandung"
};

const pengguna = {
    ...akun,
    ...profil
};

console.log(pengguna);