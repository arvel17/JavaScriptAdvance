// function halo() {
//   let name = "Arvel Kartawijaya"; //local variable
//   function showName() {
//     // inner function (closure*)
//     console.log(name); // akses ke parent variable
//   }
//   return showName;
// }
// let callName = halo();
// callName();

//factory function
function sayHello(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, happy sunday`);
  };
}
let selamatPagi = sayHello("Pagi");
let selamatSiang = sayHello("Siang");
let selamatMalam = sayHello("Malam");

selamatPagi("arvel");

// let add = (function () {
//   let counter = 0; //menjadi closure dan tidak bisa diakses dari luar
//   return function () {
//     return ++counter;
//   };
// })();
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
