/*$('#movie-filter').on('keyup', function() {
    const filterValue = $(this).val().toLowerCase();
    $('#movie-table').DataTable().search(filterValue).draw();
});*/

/*function getAuthorizaiton() {
    return options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2RkNzc4ZDJmMzQxYzA5NjY2MmY5ZjQ0MjYzYjY0ZSIsInN1YiI6IjY1YzUwNjU0MTk0MTg2MDE2Mjc1ZTA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3pn0_lr-lCIVOigU8uHz6BcWtEGSXbSsQlbASJgoL84'
        }
    };
}

function mapGenres (currentMovie) {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

    fetch(url, getAuthorizaiton ())
        .then(response => {
            return response.text();
        })
        .then(data => {
            const JSONdata = JSON.parse(data);

            const genres = JSONdata.genres; // Accesses the "genres" array

            let genreNames = [];

            for (let i = 0; i < currentMovie.genre_ids.length; i++) {
                for (let j = 0; j < genres.length; j++) {
                    if (genres[j].id === currentMovie.genre_ids[i]) {
                        genreNames += genres[j].name + ", ";
                    }
                }
            }

            return genreNames;
        })
        .catch(error => console.error("Error fetching the data:", error));
}

function printMovies() {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

    fetch(url, getAuthorizaiton())
        .then(response => {
            return response.text();
        })
        .then(data => {
            const JSONdata = JSON.parse(data);

            let outputHTML = '';

            for (let i = 0; i < JSONdata.results.length; i++) {
                const currentMovie = JSONdata.results[i];

                const title = currentMovie.title;
                const genres = mapGenres(currentMovie);
                const overview = currentMovie.overview;
                const releaseDate = currentMovie.release_date;
                const rating = Math.trunc(currentMovie.vote_average);
                const posterPath = "https://image.tmdb.org/t/p/w185" + currentMovie.poster_path;

                //console.log (genres);

                //OUTPUTS DATA AS SPECIFIED
                outputHTML += '<img src=' + posterPath + ' alt=' + title + 'poster' +
                    ' width="160" height="230">' + '<h2>' + title + '</h2>' + '<p> Genre (s): ' +
                    genres + '</p>' + '<p> Rating: ' + rating + '</p>' + '<p>Release Date: ' + releaseDate + '</p>' + '<p>Overview: ' + overview + '</p>';
            }
            document.getElementById('trending').innerHTML = outputHTML;
        })
        .catch(error => console.error("Error fetching the data:", error));
}  

printMovies ();*/