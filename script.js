/* ==========================
   MOVIE DATA
========================== */

const movies = [
  {
    id: 1,
    title: "The Adventure",
    genre: "Adventure",
    year: 2026,
    rating: "8.9",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    description:
      "An exciting adventure begins when a group of friends discover a mysterious world.",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },

  {
    id: 2,
    title: "Dark Night",
    genre: "Thriller",
    year: 2025,
    rating: "8.5",
    image:
      "https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&w=600&q=80",
    description: "A mysterious night changes everything for a young detective.",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },

  {
    id: 3,
    title: "Space Journey",
    genre: "Sci-Fi",
    year: 2026,
    rating: "9.1",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=600&q=80",
    description: "A team of astronauts travels beyond the known universe.",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },

  {
    id: 4,
    title: "Love Story",
    genre: "Romance",
    year: 2025,
    rating: "8.2",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
    description: "Two strangers meet and discover an unexpected connection.",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },

  {
    id: 5,
    title: "The Warrior",
    genre: "Action",
    year: 2024,
    rating: "8.8",
    image:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=600&q=80",
    description: "A legendary warrior returns home to protect his people.",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },

  {
    id: 6,
    title: "Funny Day",
    genre: "Comedy",
    year: 2026,
    rating: "7.9",
    image:
      "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?auto=format&fit=crop&w=600&q=80",
    description: "One crazy day becomes the funniest adventure of their lives.",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },

  {
    id: 7,
    title: "Lost World",
    genre: "Adventure",
    year: 2025,
    rating: "8.6",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    description: "A group of explorers search for a lost world.",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },

  {
    id: 8,
    title: "Haunted House",
    genre: "Horror",
    year: 2024,
    rating: "8.3",
    image:
      "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=600&q=80",
    description:
      "A group of friends enters an abandoned house with a dark secret.",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },

  {
    id: 9,
    title: "Fast Racer",
    genre: "Action",
    year: 2026,
    rating: "9.0",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
    description: "A young racer enters the most dangerous race of his life.",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },

  {
    id: 10,
    title: "The Detective",
    genre: "Mystery",
    year: 2025,
    rating: "8.7",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    description:
      "A detective investigates a mysterious case that nobody can solve.",
    video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },
];

/* ==========================
   ELEMENTS
========================== */

const movieContainer = document.getElementById("movieContainer");

const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("movieModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const movieVideo = document.getElementById("movieVideo");

const closeModal = document.getElementById("closeModal");

/* ==========================
   DISPLAY MOVIES
========================== */

function displayMovies(movieList) {
  movieContainer.innerHTML = "";

  movieList.forEach((movie) => {
    const card = document.createElement("div");

    card.classList.add("movie-card");

    card.innerHTML = `

            <img
                src="${movie.image}"
                alt="${movie.title}"
            >

            <button
                class="list-btn"
                onclick="addToList(${movie.id})"
            >
                ♡
            </button>

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p>
                    ${movie.genre} • ${movie.year}
                </p>

                <div class="rating">
                    ★ ${movie.rating}
                </div>

                <button
                    class="play-btn"
                    onclick="watchMovie(${movie.id})"
                >
                    ▶ Watch Now
                </button>

            </div>

        `;

    movieContainer.appendChild(card);
  });
}

/* ==========================
   WATCH MOVIE
========================== */

function watchMovie(id) {
  const movie = movies.find((movie) => movie.id === id);

  modalTitle.textContent = movie.title;

  modalDescription.textContent = movie.description;

  movieVideo.src = movie.video;

  modal.classList.add("active");

  movieVideo.play();
}

/* ==========================
   CLOSE MODAL
========================== */

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");

  movieVideo.pause();
});

/* Close by clicking outside */

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");

    movieVideo.pause();
  }
});

/* ==========================
   SEARCH
========================== */

searchInput.addEventListener("input", () => {
  const search = searchInput.value.toLowerCase();

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search) ||
      movie.genre.toLowerCase().includes(search),
  );

  displayMovies(filteredMovies);
});

/* ==========================
   MY LIST
========================== */

function addToList(id) {
  const movie = movies.find((movie) => movie.id === id);

  alert(movie.title + " added to your list!");
}

/* ==========================
   START WEBSITE
========================== */

displayMovies(movies);
