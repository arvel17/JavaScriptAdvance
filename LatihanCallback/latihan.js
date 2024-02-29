$(document).ready(function () {
  $(".input-keyword").keypress(function (event) {
    // keyCode 13 adalah kode untuk tombol Enter
    if (event.keyCode === 13) {
      event.preventDefault(); // Mencegah perilaku default dari form
      searchMovie(); // Memanggil fungsi pencarian saat tombol Enter ditekan
    }
  });

  $(".search-button").click(function () {
    searchMovie(); // Memanggil fungsi pencarian saat tombol "Search" diklik
  });
});

function searchMovie() {
  var keyword = $(".input-keyword").val();
  console.log("Searching for movie with keyword:", keyword);
  // Tambahkan logika pencarian di sini...

  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=ede7ea8e&s=" + $(".input-keyword").val(), //untuk search
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((element) => {
        cards += showCard(element);
      });
      $(".movie-container").html(cards);

      //ketika tombol detail di klik
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url:
            `http://www.omdbapi.com/?apikey=ede7ea8e&i=` +
            $(this).data("imdbid"),
          success: (m) => {
            const movieDetails = showMovieDetail(m);
            $(".modal-body").html(movieDetails);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
}

$(".movie-container").on("click", ".modal-detail-button", function () {
  var imdbID = $(this).data("imdbid");
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=ede7ea8e&i=" + imdbID,
    success: function (m) {
      const movieDetails = showMovieDetail(m);
      $(".modal-body").html(movieDetails);
    },
    error: function (e) {
      console.log(e.responseText);
    },
  });
});

function showCard(element) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${element.Poster}" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">${element.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${element.Year}</h6>
                <p class="card-text">
                  ${element.Type}
                </p>
                <a href="#" class="btn btn-primary modal-detail-button" 
                data-toggle="modal" data-target="#movieDetailModal" 
                data-imdbid="${element.imdbID}">Show Details</a>
              </div>
            </div>
          </div>
          </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src=${m.Poster} alt="" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                  <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer : </strong> ${m.Writer} </li>
                  <li class="list-group-item"><strong>Plot : </strong> <br>${m.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`;
}
