const dataUji = {
  array: [10, 20, 30],
  string: "Halo",
  objekBiasa: { a: 1, b: 2, c: 3 },


  cekIterable: function (nama, data) {
    try {
      for (const item of data) {

      }
      console.log(`${nama} => ITERABLE`);
    } catch (error) {
      console.log(`${nama} => NON-ITERABLE`);
    }
  }
};
dataUji.cekIterable("Array", dataUji.array);
dataUji.cekIterable("String", dataUji.string);
dataUji.cekIterable("Object biasa", dataUji.objekBiasa);