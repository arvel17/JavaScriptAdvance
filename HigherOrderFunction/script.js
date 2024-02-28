// function doExercice(matkul, done) {
//   //doExercise sebagai higher order function, done sebagai callback
//   console.log(`Mulai mengerjakan tugas ${matkul}`);
//   done();
// }

// function done() {
//   alert("Selesai mengerjakan tugas");
// }

// doExercice("JavaScript", done);

//tanpa function
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// //menggunakan function
// function repeatLog(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// repeatLog(30);

// const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const bigNumber = [];
// //menggunakan for
// for (let i = 0; i < number.length; i++) {
//   if (number[i] >= 3) {
//     bigNumber.push(number[i]);
//   }
// }
// console.log(bigNumber);

// //menggunakan filter
// const newAngka = number.filter(function (a) {
//   return a >= 3;
// });
// console.log(newAngka);

//map
//kalian semua angka dengan 2
// const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = number.map((a) => a * 2);
// console.log(newAngka);

//reduce
//jumlahkan semua isi array
// const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = number.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// //accumulator=hasil dari proses
// //current value=elemen array yang sedan di looping kyk i
// console.log(newAngka);

//method chaining
//cari angka yang lebih besar dari 8 lalu kalikan 4
// const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const hasil = number
//   .filter((a) => a > 8) // 9 9
//   .map((a) => a * 3) // 27 27
//   .reduce((acc, curVal) => acc + curVal); //54
// console.log(hasil);

//Latihan
//ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);
//pilih hanya yang javascript lanjutan
let judul = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  //ambil durasi masing-video
  .map((item) => item.dataset.duration)
  //ubah durasi manjadi integer, ubah menit menjadi detik
  .map((waktu) => {
    //10:58 -> [10, 58] split
    const parts = waktu
      .split(":")
      //ubah jadi float
      .map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  //jumlahkan semua detiknya
  .reduce((total, detik) => total + detik);
//ubah format jadi jam menit detik
const convertJam = Math.floor(judul / 3600);
judul = judul - convertJam * 3600;
const convertMenit = Math.floor(judul / 60);
const convertDetik = judul - convertMenit * 60;

//simpan di dom
const durasiParagraph = document.querySelector(".total-durasi");
durasiParagraph.textContent = `${convertJam} Jam ${convertMenit} Menit ${convertDetik} Detik`;

const jumlahVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const jmlVideoP = document.querySelector(".jumlah-video");
jmlVideoP.textContent = `${jumlahVideo} Video`;
