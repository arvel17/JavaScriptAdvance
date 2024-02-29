//callbacks
//synchronous callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama : ");
//   callback(nama);
// }

// tampilkanPesan(halo);

// const mhs = [
//   {
//     nama: "arvel",
//     umur: 20,
//     jurusan: "computer science",
//   },
//   {
//     nama: "Michael",
//     umur: 20,
//     jurusan: "computer science",
//   },
//   {
//     nama: "neville",
//     umur: 20,
//     jurusan: "computer science",
//   },
//   {
//     nama: "kevin",
//     umur: 20,
//     jurusan: "DKV",
//   },
//   {
//     nama: "reyhan",
//     umur: 20,
//     jurusan: "accounting",
//   },
// ];
// mhs.forEach((m) => console.log(m.nama));

//asynchronous callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("starttt");

// function success(result) {
//   const mhs = JSON.parse(result);
//   mhs.forEach((element) => {
//     console.log(element.nama); //ambil namanya saja
//   });
// }

// function error() {}
// getDataMahasiswa("data/mahasiswa.json", success, error);

// console.log("doneeeee");

//pakai jquery
//jquery cdn
// console.log("Startttt");
// $.ajax({
//   url: "data/mahasiswa.json",
//   success: (mhs) => {
//     //console.log(mhs); //bentuk sudah langsung object tidak perlu parse
//     mhs.forEach((element) => {
//       console.log(element.nama);
//     });
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
// console.log("ENDDD");
