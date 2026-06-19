const karakter = {
    nama: "Citra",
    level: 10,
    attack: 100,
    defense: 80
};

const karakterUpgrade = {
    ...karakter,
    level: karakter.level + 1,
    attack: karakter.attack + 20,
    defense: karakter.defense + 10
};

console.log("Data Asli:");
console.log(karakter);

console.log("\nData Upgrade:"); /// \n fungsinya untuk pindah ke baris berikutnya
console.log(karakterUpgrade);
