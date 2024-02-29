//for..of
// const mhs = ["Arvel Kartawijaya", "Neville", "Michael", "Kevin"];

// for (let i = 0; i < mhs.length; i++) {//for biasa
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

//cara for..of
// for (const nama of mhs) {//cosnt <namaVariable> of <namaArray>
//   console.log(nama);
// }

//String
// const nama = "arvel";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["Arvel Kartawijaya", "Neville", "Michael", "Kevin"];
// mhs.forEach((m, i) => console.log(i, m));

// //for..of
// for (const [i, m] of mhs.entries()) {
//   console.log(i, m);
// }

//nodelist
//const liNama = document.querySelectorAll(".nama");
// // liNama.forEach((n) => console.log(n.innerHTML));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

//argument
// function jumlahkanAngka() {
//   //return arguments.reduce((a, i) => a + i);//error
//   //arguments.forEach(a => jumlah += a);//error
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

//for in
const mhs = {
  nama: "arvel",
  umur: 20,
  email: "arvel.kartawijaya@gmail.com",
};

for (n in mhs) {
  console.log(n); //ambil property dari object
}

for (n in mhs) {
  console.log(mhs[n]);
}
