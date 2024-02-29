// $.ajax({
//   url: "http://www.omdbapi.com/?i=tt3896198&apikey=ede7ea8e",
//   success: (movies) => console.log(movies),
// });

//pakai fetch
// const movie = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ede7ea8e") //returnnya promise
//   .then((response) => response.json()) //diubah bentuk json dulu
//   .then((response) => console.log(response));

//promise
//Object yang merepresentasikan keberhasilan/ kegagalan sebuah
//event yang asynchronous di masa yang akan datang
//janji (tepenuhi / tidak)
//states (fulfilled / rejected / pending)
//callback (resolve -> terpenuhi / reject -> tidak terpenuhi / finally)
//aksi (then -> terpenuhi) (catch -> tidak terpenuhi)

//contoh 1
// let ditetapi = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditetapi) {
//     resolve("janji sudah lunas");
//   } else {
//     reject("dia boong sama janjinya");
//   }
// });

// janji1
//   .then((response) => console.log("OK! : " + response))
//   .catch((response) => console.log("Tidak baik baik saja!" + response));

//contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati tapi delay");
//     }, 5000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak ditepati tapi delay");
//     }, 5000);
//   }
// });

// console.log("startttt");
// //console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu"))
//   .then((response) => console.log("OK!!" + response))
//   .catch((response) => console.log("TIDAK OK!!" + response));
// console.log("doneee");

//Promise.all
const film = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        Title: "Guardians of the Galaxy Vol. 2",
        Year: "2017",
        Rated: "PG-13",
        Released: "05 May 2017",
        Runtime: "136 min",
        Genre: "Action, Adventure, Comedy",
        Director: "James Gunn",
        Writer: "James Gunn, Dan Abnett, Andy Lanning",
        Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
        Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
        Language: "English",
        Country: "United States",
        Awards: "Nominated for 1 Oscar. 15 wins & 60 nominations total",
      },
    ]);
  }, 500);
});

const cuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Batu",
        temperature: 19,
        kondisi: "hujan",
      },
    ]);
  }, 1000);
});
//cara standart satu per satu
// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

//cara promise all
Promise.all([film, cuaca])
  //.then((response) => console.log(response));//arraynya tergabung
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
