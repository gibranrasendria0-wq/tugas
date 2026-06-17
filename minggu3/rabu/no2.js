const kalimat = "JavaScript adalah bahasa pemrograman yang sangat menyenangkan";
const jumlahKarakter = kalimat.length;
console.log("1. Jumlah karakter:", jumlahKarakter);

const arrayKata = kalimat.split(" "); //spplit itu buat ganti string menajdi array
const jumlahKata = arrayKata.length;
console.log("2. Jumlah kata:", jumlahKata);

const kataPertama = arrayKata[0];
console.log("3. Kata pertama:", kataPertama);

const kataTerakhir = arrayKata[arrayKata.length - 1];
console.log("4. Kata terakhir:", kataTerakhir);

const mengandungPemrograman = kalimat.includes("pemrograman"); //includes meliat klo ada true/false
console.log("5. Mengandung kata 'pemrograman'?", mengandungPemrograman);