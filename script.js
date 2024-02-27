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
// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;

//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(
//       `Hello ${this.nama}, silakan dimakan pesanannya sebanyak ${porsi} porsi`
//     );
//   };
//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Hello ${this.nama}, silakan bermain selama ${jam}-jam`);
//   };

//   return mahasiswa;
// }

// let arvel = Mahasiswa("arvel", 10);
// let arvel2 = Mahasiswa("arvel2", 25);

//constructor function
function Mahasiswa(nama, energy) {
  //let mahasiswa = {}; <-tidak butuh, gantinya pakai this.<nama variable>
  this.nama = nama;
  this.energy = energy;

  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(
      `Hello ${this.nama}, silakan dimakan pesanannya sebanyak ${porsi} porsi`
    );
  };
  this.main = function (jam) {
    this.energy -= jam;
    console.log(`Hello ${this.nama}, silakan bermain selama ${jam}-jam`);
  };

  //return mahasiswa; <-tidak butuh
}

let arvel = new Mahasiswa("arvel", 10);
