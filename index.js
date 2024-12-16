// Constants
const BASE_URL = 'http://localhost:3000'; // This is the JSON server URL

// DOM Element Selectors
const filmsList = document.querySelector('#films');
const poster = document.querySelector('#poster');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const runtime = document.querySelector('#runtime');
const showtime = document.querySelector('#showtime');
const availableTickets = document.querySelector('#available-tickets');
const buyTicketBtn = document.querySelector('#buy-ticket');

// Track currently displayed movie
let currentMovieId = null;

// Fetch and populate movies list as cards
function populateMoviesList() {
    fetch(`${BASE_URL}/films`)
        .then(response => response.json())
        .then(movies => {
            // Clear any existing movie list
            filmsList.innerHTML = '';

            // Loop through each movie to create a card
            movies.forEach((movie, index) => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');

                // Add poster image
                const img = document.createElement('img');
                img.src = movie.poster;
                img.alt = movie.title;

                // Add title
                const movieTitle = document.createElement('div');
                movieTitle.classList.add('title');
                movieTitle.textContent = movie.title;

                // Add available tickets info
                const ticketsInfo = document.createElement('div');
                ticketsInfo.classList.add('available-tickets');
                const ticketsAvailable = movie.capacity - movie.tickets_sold;
                ticketsInfo.textContent = `Tickets Available: ${ticketsAvailable}`;

                // Append elements to the card
                movieCard.appendChild(img);
                movieCard.appendChild(movieTitle);
                movieCard.appendChild(ticketsInfo);

                // Mark as sold out if necessary
                if (ticketsAvailable === 0) {
                    movieCard.classList.add('sold-out');
                }

                // Add event listener to show movie details when clicked
                movieCard.addEventListener('click', () => {
                    currentMovieId = movie.id; // Set the current movie ID
                    displayMovieDetails(movie);
                });

                // Append card to the list
                filmsList.appendChild(movieCard);

                // Automatically display the first movie's details on page load if no current movie
                if (index === 0 && currentMovieId === null) {
                    currentMovieId = movie.id;
                    displayMovieDetails(movie);
                }
            });
        })
        .catch(error => console.error('Error fetching movies:', error));
}

