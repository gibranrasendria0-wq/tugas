const mahasiswa = {
  nama: "Andi Pratama",
  nim: "12345678",
  jurusan: "Teknik Informatika",
  semester: 4,

  perkenalan: function () {
    console.log(
      `Halo, nama saya ${this.nama}, NIM saya ${this.nim}, saya dari jurusan ${this.jurusan} semester ${this.semester}.`
    );
  }
};
mahasiswa.perkenalan();