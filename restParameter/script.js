//rest Parameter
// function myFunc(a, b, ...sisa) {
//   return `a = ${a}, b = ${b}, sisa = ${sisa}`;
// }
// console.log(myFunc(2, 3, 4, 5, 6, 7, 8, 9));

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const n of angka) {
//     total = n + total;
//   }
//   return total;
// }

// console.log(jumlahkan(1, 2, 3, 4, 5, 6, 7));

//array destructuring
// const kelompok1 = ["arvel", "neville", "kelvin", "reyhan", "michael", "billy"];
// //const ketua = kelompok1[1];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(anggota);
// console.log(wakil);

//object destructuring
// const team = {
//   pm: "a",
//   fe1: "b",
//   fe3: "c",
//   be1: "d",
//   be2: "e",
//   ux: "f",
// };

// const { pm, ...allTeam } = team;
// console.log(pm);
// console.log(allTeam);

//filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(
  filterBy("number", 1, 2, "arvel", "makan", false, true, 10, 15, "string")
);
//type dijadikan acuan tipe datanya
