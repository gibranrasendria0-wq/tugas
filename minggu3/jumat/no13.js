const party = [
    {
        nama: "Ari",
        role: "Tank",
        hp: 3000
    },
    {
        nama: "Bima",
        role: "Mage",
        hp: 1500
    },
    {
        nama: "Citra",
        role: "Support",
        hp: 1800
    }
];

function buatPartyBaru(namaParty, ...anggota) {
    const partyBaru = [...anggota];
    
    console.log(`\n=== PARTY: ${namaParty} ===`);
    
    partyBaru.forEach(({ nama, role, hp }) => {
        console.log(`${nama} | Role: ${role} | HP: ${hp}`);
    });
    
    return partyBaru;
}

const partyBaru1 = buatPartyBaru("Avengers", party[0], party[1], party[2]);
const partyBaru2 = buatPartyBaru("Warriors", party[0], party[2]);

console.log("\n=== DATA ASLI (tidak berubah) ===");
console.log(party);