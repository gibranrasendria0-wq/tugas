const user = {
    nama: "Budi",
    umur: 18,
    kota: "Jakarta"
};

const userBaru = {
    ...user,
    umur: 19,
    kota: "Bandung"
};

console.log("User Asli:", user);
console.log("User Baru:", userBaru);