//STEP 1
var favoriteMovies = ["3 Idiots", "Avengers: End Game", "Pursuit of Happyness", "The Shawshank Redemption", "Descpicable Me"];
console.log(favoriteMovies[1]);


//STEP 2
var movies = new Array(5);
for (var i = 0; i < favoriteMovies.length; i++) {
    movies[i] = favoriteMovies[i];
}
console.log(movies[0]);


//STEP 3
movies.splice(2, 0, "Transformers");
console.log(movies.length);


//STEP 4
var movies = [];
for (var i = 0; i < favoriteMovies.length; i++) {
    movies.push(favoriteMovies[i]);
}
delete movies[0];
console.log(movies);


//STEP 5
var favoriteMovies = ["3 Idiots", "Avengers: End Game", "Pursuit of Happyness", "The Shawshank Redemption", "Descpicable Me", "Eclipse", "Captain America"];
var movies = [];


for (var i = 0; i < favoriteMovies.length; i++) {
    movies.push(favoriteMovies[i]);
}


for (var j = 0; j < movies.length; j++) {
    console.log(movies[j]);
}


//STEP 6
for (index in movies) {
    console.log(movies[index]);
}


//STEP 7
var sortedMovies = movies.sort();
for (index in sortedMovies) {
    console.log(sortedMovies[index]);
}


//STEP 8
var leastFavoriteMovies = ["Mimi", "Spider-man", "James Bond"];
var favoriteMovies = movies;

console.log("\nMovies I like:\n\n" + favoriteMovies.join("\n") +
            "\n\nMovies I regret watching:\n\n" + leastFavoriteMovies.join("\n") + "\n\n");

//STEP 9
var movies = favoriteMovies.concat(leastFavoriteMovies);
var reverseSort = movies.sort().reverse();

console.log(reverseSort.join("\n"));

//STEP 10
console.log(reverseSort.pop());