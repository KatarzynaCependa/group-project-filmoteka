export const createMovieCard = movies => {
  return movies.results
    .map(movie => {
      return `<div id="card" class="card"><img class="card__poster" src=${movie.poster_path} alt=${movie.title}></a>
    <div class="card__info">
      <div class="card__quick-info">
        <div class="card__movie-title">${movie.title}</div>
        <div class="card__movie-genre">${movie.id}</div>
        <div class="card__movie-release">${movie.release_date}</div>
      </div>
    </div>
  </div>`;
    })
    .join('');
};
