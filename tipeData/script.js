//var
// console.log(i); //undefined
// var i = 10; //kena hoisting
//let
// console.log(i); //error
// let i = 10; //tidak kena hoisting

//var
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i); //js ikut function scope, sehingga bisa menakses i
//bahasa program lain menganut block scope

// function tes() {
//   //function scope
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }
// tes();
// console.log(i); //error

//SIAF
// (function () {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// })();
// console.log(i);

// //let
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

//const
// const PI = 3.14;
// PI = 3.14159265358979323846;
// console.log(PI);

const mhs = {
  nama: "arvel",
  umur: "20",
};

mhs.nama = "wijaya";
console.log(mhs);
