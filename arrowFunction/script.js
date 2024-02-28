//function expression
// const tampilName = function (nama) {
//   return `Halo ${nama}`;
// };
// console.log(tampilName("arvel"));

// //arrow function 1 parameter
// const tampilNama = (nama) => {
//   //const tampilNama = nama => {} boleh tidak pakai kurung
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("arvel kartawijaya"));

// //arrow function lebih dari 1 parameter
// const panggilNama = (nama, waktu) => {
//   return `Halo, Selamat ${waktu}, ${nama}`;
// };
// console.log(panggilNama("wijaya", "pagi"));

// //implisit return
// //tidak perlu kurung dan kata return
// const callNama = (nama, waktu) => `Halo, Selamat ${waktu}, ${nama}`;
// console.log(callNama("wijaya", "pagi"));

// //tanpa parameter
// const nama = () => `Salam Kenal`;
// console.log(nama());

//mapping regular function expression
//let mhs = [`Arvel Kartawijaya`, `Neville Cornelius Tjampan`, `Michael Aslan`];
// let jumlahHuruf = mhs.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

//mapping arrow function
// let mhs = [`Arvel Kartawijaya`, `Neville Cornelius Tjampan`, `Michael Aslan`];
// let jumlahHuruf = mhs.map((nama) => nama.length);
// console.log(jumlahHuruf);

//return ke bentuk object
// let mhs = [`Arvel Kartawijaya`, `Neville Cornelius Tjampan`, `Michael Aslan`];
// let jumlahHuruf = mhs.map((nama) => ({
//   nama: nama,
//   jumlahHuruf: nama.length,
// }));
// console.log(jumlahHuruf);
// console.table(jumlahHuruf);

//Konsep this pada arrow function
//constructor function
// const Mahasiswa = function () {
//   this.nama = "Arvel";
//   this.umur = 33;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };
// const mahasiswa = new Mahasiswa();

//arrow function
// const Mahasiswa = function () {
//   this.nama = "Arvel";
//   this.umur = 33;
//   this.sayHello = () => {//arrow function untuk method
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };
// const mahasiswa = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu]; //menukar isi variabel
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
