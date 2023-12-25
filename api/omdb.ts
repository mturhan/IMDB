const OMDB_KEY = '2043f349';

export async function logMovies() {
  const url = `http://www.omdbapi.com/?apikey=${OMDB_KEY}&s=matrix`;

  const response = await fetch(url)
    .then(res => res.json())
    .then(res => res.Search);

  return response;
}
