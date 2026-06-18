// function buatLogger() {
//     const riwayat = [];

//     function logger(namaAktivitas) {
//         riwayat.push({
//             aktivitas: namaAktivitas,
//             waktu: new Date()
//         });
//     }

//     return {
//         logger,

//         tampilkanRiwayat() {
//             console.log("=== RIWAYAT AKTIVITAS ===");

//             riwayat.forEach((item, index) => {
//                 console.log(
//                     `${index + 1}. ${item.aktivitas} - ${item.waktu}`
//                 );
//             });
//         }
//     };
// }

// const sistem = buatLogger();

// sistem.logger("Login");
// sistem.logger("Checkout");
// sistem.logger("Logout");

// sistem.tampilkanRiwayat();