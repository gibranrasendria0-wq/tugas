// Data nama
const nama = ["Andi", "Budi", "Citra", "Dewi", "Asep", "Aulia"];

// Function analisis nama
function analisisNama(array) {

  // 1. Nama yang diawali huruf "A"
  const awalanA = array.filter(n => n[0] === "A");

  // 2. Jumlah nama berawalan "A"
  const jumlahA = awalanA.length;

  // 3. Nama dengan lebih dari 4 karakter
  const namaPanjang = array.filter(n => n.length > 4);

  // Tampilkan hasil
  console.log("Data Nama             :", array);
  console.log("Berawalan 'A'         :", awalanA);
  console.log("Jumlah berawalan 'A'  :", jumlahA);
  console.log("Lebih dari 4 karakter :", namaPanjang);
}

// Jalankan function
analisisNama(nama);