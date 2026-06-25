const mockDatabase = {
  users: [],
  courses: [],
  grades: [],
  notifications: []
};
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Log dengan timestamp
function logInfo(message) {
  const time = new Date().toLocaleTimeString('id-ID');
  console.log(`[${time}] ${message}`);
}

// ===== SOAL 1A: SYNCHRONOUS PROGRAM =====
console.log("\n=== SOAL A: SYNCHRONOUS ===\n");

function synchronousProgram() {
  logInfo("1. Mulai Belajar");
  logInfo("2. Mengerjakan Tugas");
  logInfo("3. Selesai");
}

synchronousProgram();

// ===== SOAL 1B: ASYNCHRONOUS PROGRAM =====
console.log("\n=== SOAL B: ASYNCHRONOUS ===\n");

async function asynchronousProgram() {
  logInfo("1. Mulai Belajar");
  
  // Simulasi download materi (3 detik)
  setTimeout(() => {
    logInfo("2. Mengunduh Materi");
  }, 3000);
  
  logInfo("3. Selesai"); // Ini dijalankan SEBELUM download selesai!
}

await asynchronousProgram();

// ===== SOAL 2: PROMISE =====
console.log("\n=== SOAL 2: PROMISE ===\n");

// TODO: Buat Promise yang mensimulasikan pengambilan data user
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulasi data user
      const user = {
        id: userId,
        name: "Nama User",
        email: "user@academy.com"
      };
      resolve(user); // pake resolve() jika berhasil
      // reject("Error: User tidak ditemukan"); // Gunakan reject() kalo gagal
    }, 2000);
  });
}