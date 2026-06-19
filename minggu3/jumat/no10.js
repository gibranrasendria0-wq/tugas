function hitungTotal(...angka) {
  /// angka adalah array yang isinya ato dalemnya semua argument
  
  /// Gunakan reduce() untuk menjumlahkan semua elemen
  const total = angka.reduce((akumulator, nilai) => {
    return akumulator + nilai;
  }, 0);
  
  return total;
}

console.log(hitungTotal(10, 20, 30));           
console.log(hitungTotal(5, 10, 15, 20, 25));    
console.log(hitungTotal(100));                  
console.log(hitungTotal(1, 2, 3, 4, 5, 6));     
///  ditambahkan untuk membuktikan bahwa function bekerja dengan benar. Ini disebut Testing atau Contoh Penggunaan.