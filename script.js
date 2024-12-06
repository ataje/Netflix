
let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

function chooseRandomGenre() {
 // Deliverable 1: Your code here 👇
  const genres = ["comedy", "drama", "fantasy"];
  const index = getRandomNumber(0, genres.length - 1)
  return genres[index];
}

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  let selectedGenre = genre;
  if(genre === "random"){
    selectedGenre = chooseRandomGenre();
    
  }
  let shows;
  if(selectedGenre === "drama"){
    shows = dramaShows;
  }else if (selectedGenre === "fantasy"){
    shows = fantasyShows;
  }else if(selectedGenre === "comedy"){
    shows = comedyShows;
  }
  const showIndex = getRandomNumber(0, shows.length - 1);
  const show = shows[showIndex];
  displayShow(show);
}
