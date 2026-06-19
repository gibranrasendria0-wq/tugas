const tim = [
    {
        nama: "Ari",
        role: "Tank"
    },
    {
        nama: "Bima",
        role: "Mage"
    },
    {
        nama: "Citra",
        role: "Support"
    }
];


const [
    { nama: nama1 },           
    { role: role2 },           
    { nama: nama3 }            
] = tim;

console.log("Nama pemain pertama:", nama1);    
console.log("Role pemain kedua:", role2);     
console.log("Nama pemain ketiga:", nama3);    