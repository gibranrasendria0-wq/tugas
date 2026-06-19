const hero = {
    nama: "GatotKaca",
    kelas: "Tank",
    level: 25,
    hp: 5000,
    mana: 800
};

const {
    nama,
    kelas,
    hp,
    mana: energi,
    guild = "Tanpa Guild" } = hero;

console.log("Nama Hero :", nama);
console.log("Kelas     :", kelas);
console.log("HP        :", hp);
console.log("Energi    :", energi);
console.log("Guild     :", guild);

