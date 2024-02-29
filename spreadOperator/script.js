//spread operator
//memecah iterable menjadi single element
// const mhs = ["arvel", "neville", "kelvin"];
// console.log(...mhs[0]);

//menggabungkan 2 array
//const mhs = ["arvel", "neville", "kelvin"];
// const dosen = ["wina", "nyoman", "aldiki"];
// const orang = [...mhs, "reyhan", ...dosen];
// console.log(orang);

//meng-copy array
// const mhs = ["arvel", "neville", "kelvin"];
// //const mhs1 = mhs;// tidak benar-benar di copy, reference

// const mhs1 = [...mhs];
// mhs1[0] = "reyhan";
// console.log(mhs1);
// console.log(mhs);

// const liMhs = document.querySelectorAll("li");
// const mhs = [...liMhs].map((m) => m.innerHTML);
// console.log(mhs);

//bikin style huruf gede kalau di hover
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
