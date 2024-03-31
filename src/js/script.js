const searchButton = document.getElementById('search-button');
const searchBox = document.getElementById('search-box');
const movieResults = document.getElementById('movie-results');


searchButton.addEventListener('click', () => {
  const movieTitle = searchBox.value;
  searchAndDisplayMovie(movieTitle);
});


async function searchAndDisplayMovie(movieTitle) {
  try {
    const url = `http://localhost:3000/api/moviesearch?query=${encodeURIComponent(movieTitle)}`; 
    const response = await fetch(url);  
    const searchResults = await response.json();

    // Clear existing results 
    const movieResults = document.getElementById('movie-results');
    movieResults.innerHTML = ''; 

    // Display the Results
    searchResults.results.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"> 
      `;
      movieResults.appendChild(movieElement);
    });
  } catch (error) {
    console.log('ERROR searching for movie');
  }
}