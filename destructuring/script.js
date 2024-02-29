//array
// const nama = ['arvel', 'arvel2', 'arvel3']

// const[nama1, nama2, nama3] = nama;
// console.log(nama1);
// console.log(nama2);
// console.log(nama3);

//object
// const mhs = {
//   nama: 'arvel',
//   nim: 2540131071,
//   email: 'arvel.kartawijaya@binus.ac.id'
// }
// const {nama, nim, email} = mhs;
// console.log(nama);
// console.log(nim);
// console.log(email);

//function
// function kalkulasi(a,b){
//   return [a + b, a - b, a / b, a * b];
// }
// // jumlah = penjumlahanPerkalian(4,5)[0];
// // perkalian = penjumlahanPerkalian(4,5)[1];
// // console.log(jumlah);//9
// // console.log(perkalian);//20

// const[tambah, kurang, bagi, kali = 'tidak ada'] = kalkulasi(9, 3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

//object
// function kalkulasi(a,b){
//   return{
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b
//   }
// }

// const{kali, tambah, bagi, kurang} = kalkulasi(9, 3);
// console.log(tambah);
// console.log(kali);
// console.log(bagi);
// console.log(kurang);

//detructuring function argument
const mhs1 = {
  nama: "arvel kartawijaya",
  umur: 20,
  email: "arvel.kartawijaya@binus.ac.id",
  nilai: {
    tugas: 100,
    uts: 95,
    uas: 88,
  },
};
// function cetakMhs(nama, umur){
//   return `Halo nama saya ${nama}, saya berusia ${umur} tahun.`;
// }

// cetakMhs(mhs1.nama, mhs1.umur);
// console.log(cetakMhs()); //tanpa destructuring

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo nama saya ${nama}, saya berusia ${umur} tahun, dan 
  nilai UAS saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
