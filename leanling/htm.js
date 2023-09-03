const movies = [
  {
    title: "Spider man home coming",
    hasSeen: true,
    stars: 4
  },
  {
    title: "Avenger end game",
    hasSeen: true,
    stars: 5
  },
  {
    title: "babbysitter",
    hasSeen: false,
  },
  {
    title: "Thor ragnarok",
    hasSeen: true,
    stars: 5
  }
]

movies.forEach((movie) => {
  if ( movie.hasSeen === true) {
    console.log("You have seen " + movie.title + " and you gave it " + movie.stars + " stars")
  } else if (movie.hasSeen === false) {
    console.log("You have not seen " + movie.title)
  }
})