const karakter = {
  nama: "Knight",
  hp: 100,
  hpMax: 100,
  attack: 15,

  serang: function () {
    console.log(`${this.nama} menyerang dengan kekuatan ${this.attack}!`);
  },

  // Method untuk menerima damage
  kenaDamage: function (jumlah) {
    this.hp -= jumlah;
    if (this.hp < 0) this.hp = 0;
    console.log(`${this.nama} menerima damage ${jumlah}. HP sekarang: ${this.hp}`);
  },

  heal: function (jumlah) {
    this.hp += jumlah;
    if (this.hp > this.hpMax) this.hp = this.hpMax;
    console.log(`${this.nama} heal sebesar ${jumlah}. HP sekarang: ${this.hp}`);
  },

  status: function () {
    console.log(`Status ${this.nama} -> HP: ${this.hp}/${this.hpMax}, Attack: ${this.attack}`);
  }
};
karakter.status();       
karakter.serang();     
karakter.kenaDamage(30); 
karakter.heal(15);       
karakter.status();        