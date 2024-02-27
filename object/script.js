// //object literal
// let mahasiswa = {
//   nama: "Arvel",
//   energy: 5,
//   power: 1000,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(
//       `Hello ${this.nama}, silakan dimakan pesanannya
//       sebanyak ${porsi} porsi`
//     );
//   },
// };

// mahasiswa.makan(10);
// console.log(mahasiswa.energy); //15

//function declaration
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(
//       `Hello ${this.nama}, silakan dimakan pesanannya sebanyak ${porsi} porsi`
//     );
//   },
//   main: function (jam) {
//     this.energy -= jam;
//     console.log(`Hello ${this.nama}, silakan bermain selama ${jam}-jam`);
//   },
//   tidur: function (jam) {
//     this.energy += jam * 2;
//     console.log(`Hello ${this.nama}, selamat tidur selama ${jam}-jam`);
//   },
// };

// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;
//   mahasiswa.makan = methodMahasiswa.makan; //panggil methodMahasiswa
//   mahasiswa.main = methodMahasiswa.main; //panggil methodMahasiswa
//   mahasiswa.tidur = methodMahasiswa.tidur;
//   return mahasiswa;
// }

// let arvel = Mahasiswa("arvel", 10);
// let arvel2 = Mahasiswa("arvel2", 25);

//constructor function
// function Mahasiswa(nama, energy) {
//   //let mahasiswa = {}; <-tidak butuh, gantinya pakai this.<nama variable>
//   this.nama = nama;
//   this.energy = energy;

//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(
//       `Hello ${this.nama}, silakan dimakan pesanannya sebanyak ${porsi} porsi`
//     );
//   };
//   this.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Hello ${this.nama}, silakan bermain selama ${jam}-jam`);
//   };

//   //return mahasiswa; <-tidak butuh
// }

// let arvel = new Mahasiswa("arvel", 10);

//Object.Create()
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(
//       `Hello ${this.nama}, silakan dimakan pesanannya sebanyak ${porsi} porsi`
//     );
//   },
//   main: function (jam) {
//     this.energy -= jam;
//     console.log(`Hello ${this.nama}, silakan bermain selama ${jam}-jam`);
//   },
//   tidur: function (jam) {
//     this.energy += jam * 2;
//     console.log(`Hello ${this.nama}, selamat tidur selama ${jam}-jam`);
//   },
// };

// function Mahasiswa(nama, energy) {
//   let mahasiswa = Object.create(methodMahasiswa); //mirip inheritance
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;

//   return mahasiswa;
// }

// let arvel = Mahasiswa("arvel", 10);
// let arvel2 = Mahasiswa("arvel2", 25);

//prototype
// function Mahasiswa(nama, energy) {
//   //let this = Object.create(Mahasiswa.prototype); -> sebenarnya ketika menggunakan this
//   //js sudah membuatkan object parent
//   this.nama = nama;
//   this.energy = energy;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energy += porsi;
//   return `Hello ${this.nama}, silakan dimakan pesanannya sebanyak ${porsi} porsi`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energy -= jam;
//   return `Hello ${this.nama}, silakan bermain selama ${jam}-jam`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energy += jam * 2;
//   return `Hello ${this.nama}, selamat tidur selama ${jam}-jam`;
// };

// let arvel = new Mahasiswa("arvel", 10);
// let arvel2 = new Mahasiswa("arvel2", 25);

//class
class Mahasiswa {
  constructor(nama, energy) {
    this.nama = nama;
    this.energy = energy;
  }

  makan(porsi) {
    this.energy += porsi;
    return `Hello ${this.nama}, silakan dimakan pesanannya sebanyak ${porsi} porsi`;
  }

  main(jam) {
    this.energy -= jam;
    return `Hello ${this.nama}, silakan bermain selama ${jam}-jam`;
  }

  tidur(jam) {
    this.energy += jam * 2;
    return `Hello ${this.nama}, selamat tidur selama ${jam}-jam`;
  }
}

let arvel = new Mahasiswa("arvel", 10);
let arvel2 = new Mahasiswa("arvel2", 25);
