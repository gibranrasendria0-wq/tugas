const kataAwal = ["bodoh", "rajin", "malas", "hebat", "jelek"];

// Function sensor kata terlarang
function sensorKata(array) {
  return array.filter(function(kata) {
    return kata !== "bodoh" && kata !== "jelek";
  });
}

const kataSetelah = sensorKata(kataAwal);

// hasil
console.log("Sebelum:", kataAwal);
console.log("Sesudah:", kataSetelah);