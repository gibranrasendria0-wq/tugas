// Data nilai asli
const nilai = [78, 95, 62, 88, 70, 100];

function rankingNilai(array) {

  
  const terurut = [...array].sort((a, b) => b - a);

  // 3 nilai tertinggi
  const tertinggi = terurut.slice(0, 3);

  // 2 nilai terendah
  const terendah = terurut.slice(-2);

  console.log("Data Asli     :", array);
  console.log("Terurut       :", terurut);
  console.log("3 Tertinggi   :", tertinggi);
  console.log("2 Terendah    :", terendah);
}

rankingNilai(nilai)
console.log("Cek Data Asli :", nilai);