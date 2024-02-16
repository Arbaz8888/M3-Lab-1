// Step 1
let favoriteMovies = ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"];
console.log(favoriteMovies[1]);

// Step 2
let movies = new Array(5);
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[3] = "Movie4";
movies[4] = "Movie5";
console.log(movies[0]);

// Step 3
movies.splice(2, 0, "NewMovie");
console.log(movies.length);

// Step 4
let moviesLiteral = ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"];
delete moviesLiteral[0];
console.log(moviesLiteral);

// Step 5
let moviesLiteralSeven = ["M1", "M2", "M3", "M4", "M5", "M6", "M7"];
for (let movie in moviesLiteralSeven) {
    console.log(moviesLiteralSeven[movie]);
}

// Step 6
for (let movie of moviesLiteralSeven) {
    console.log(movie);
}

// Step 7
for (let movie of moviesLiteralSeven.sort()) {
    console.log(movie);
}

// Step 8
let leastFavMovies = ["Regret1", "Regret2", "Regret3"];
console.log("Movies I like:\n" + moviesLiteralSeven.join("\n") + "\n\nMovies I regret watching:\n" + leastFavMovies.join("\n"));

// Step 9
let mergedMovies = moviesLiteralSeven.concat(leastFavMovies);
console.log(mergedMovies.reverse().sort());

// Step 10
console.log(mergedMovies.slice(-1)[0]);

// Step 11
console.log(mergedMovies.shift());

// Step 12
let indicesOfLeastFav = [];
leastFavMovies.forEach(movie => {
    let index = mergedMovies.indexOf(movie);
    if (index !== -1) {
        indicesOfLeastFav.push(index);
    }
});
console.log(indicesOfLeastFav);

// Step 13
let moviesRanking = [["Movie1", 1], ["Movie2", 2], ["Movie3", 3], ["Movie4", 4], ["Movie5", 5]];
let movieNames = moviesRanking.map(movie => movie[0]);
console.log(movieNames);

// Step 14
let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
let showEmployee = function (employeeArray) {
    console.log("Employees:\n" + employeeArray.map(employee => employee.toUpperCase()).join("\n"));
};
showEmployee(employees);

// Step 15
function filterValues(arr) {
    return arr.filter(value => value || value === 0);
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// Step 16
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomItem(numericArray));

// Step 17
function getLargestNumber(arr) {
    return Math.max(...arr);
}
let numericArray2 = [15, 8, 23, 6, 14, 18];
console.log(getLargestNumber(numericArray2));
