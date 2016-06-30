//Assignment 3, Part 1
// Practice with Arrays
// 1
/*
var movies = ['THE WIZARD OF OZ', 'THE THIRD MAN', 'CITIZEN KANE', 'ALL ABOUT EVE', 'DR. CALIGARI'];
window.console.log(movies[1]);
*/

//2
/*
var movies = new Array();
movies[0] = 'THE WIZARD OF OZ';
movies[1] = 'THE THIRD MAN';
movies[2] = 'CITIZEN KANE';
movies[3] = 'ALL ABOUT EVE';
movies[4] = 'DR. CALIGARI';
window.console.log(movies[0]);
*/

// 3
/*
var movies = ['THE WIZARD OF OZ', 'THE THIRD MAN', 'CITIZEN KANE', 'ALL ABOUT EVE', 'DR. CALIGARI'];
movies.splice(2, 0, 'MODERN TIMES');
*/

// 4
/*
var movies = new Array();
movies[0] = 'THE WIZARD OF OZ';
movies[1] = 'THE THIRD MAN';
movies[2] = 'CITIZEN KANE';
movies[3] = 'ALL ABOUT EVE';
movies[4] = 'DR. CALIGARI';
movies.shift();
window.console.log(movies);
*/

// 5
/*
var movies = ['THE WIZARD OF OZ', 'THE THIRD MAN', 'CITIZEN KANE', 'ALL ABOUT EVE', 'DR. CALIGARI', 'MODERN TIMES', 'THE GODFATHER'];
var i;
for (i = 0; i < movies.length; i++) {
	window.console.log(movies[i]);
}
*/

// 6
/*
var movies = ['THE WIZARD OF OZ', 'THE THIRD MAN', 'CITIZEN KANE', 'ALL ABOUT EVE', 'DR. CALIGARI', 'MODERN TIMES', 'THE GODFATHER'];
var i;
for (i in movies) {
	window.console.log(movies[i]);
}
*/

// 7
/*
var movies = ['THE WIZARD OF OZ', 'THE THIRD MAN', 'CITIZEN KANE', 'ALL ABOUT EVE', 'DR. CALIGARI', 'MODERN TIMES', 'THE GODFATHER'];
movies.sort();
var i;
for (i in movies) {
	window.console.log(movies[i]);
}
*/

// 8
/*
var movies = ['THE WIZARD OF OZ', 'THE THIRD MAN', 'CITIZEN KANE', 'ALL ABOUT EVE', 'DR. CALIGARI', 'MODERN TIMES', 'THE GODFATHER'];
var badMovies = ['Star Wars', 'Lord of the rings', 'Avengers'];
window.console.log('Movies I like:\n\n');
for (i in movies) {
	window.console.log(movies[i]);
}
window.console.log('\nMovies I regret watching:\n\n');
for (i in badMovies) {
	window.console.log(badMovies[i]);
}
*/

// 9
/*
var movies = ['THE WIZARD OF OZ', 'THE THIRD MAN', 'CITIZEN KANE', 'ALL ABOUT EVE', 'DR. CALIGARI', 'MODERN TIMES', 'THE GODFATHER'];
var badMovies = ['Star Wars', 'Lord of the rings', 'Avengers'];
movies = movies.concat(badMovies);
movies.reverse();
window.console.log(movies);
*/

// 10
/*
var movies = ['THE WIZARD OF OZ', 'THE THIRD MAN', 'CITIZEN KANE', 'ALL ABOUT EVE', 'DR. CALIGARI', 'MODERN TIMES', 'THE GODFATHER'];
var lastOne = movies.pop();
window.console.log(lastOne);
*/

// 11
/*
var movies = ['THE WIZARD OF OZ', 'THE THIRD MAN', 'CITIZEN KANE', 'ALL ABOUT EVE', 'DR. CALIGARI', 'MODERN TIMES', 'THE GODFATHER'];
var firstOne = movies.shift();
window.console.log(firstOne);
*/

// 12
/*
var movies = ['THE WIZARD OF OZ', 'THE THIRD MAN', 'CITIZEN KANE', 'ALL ABOUT EVE',  'Star Wars', 'Lord of the rings', 'Avengers'];
var goodMovies = ['DR. CALIGARI', 'MODERN TIMES', 'THE GODFATHER'];

var dontLikeIndexes = [movies.indexOf('Star Wars'), movies.indexOf('Lord of the rings'), movies.indexOf('Avengers')];

for (index in dontLikeIndexes) {
    movies.splice(dontLikeIndexes[index], 1, undefined);
}

window.console.log(dontLikeIndexes);

for (index in dontLikeIndexes) {
    movies.splice(dontLikeIndexes[index], 1, goodMovies[index]);
}
window.console.log(movies);
*/

// 13
/*
var employee1 = [];
employee1["id"] = 123;
employee1["name"] = "Linus Torvalds";
employee1["title"] = "software engineer";
employee1["department"] = "Programming";
employee1["isCurrent"] = false;

var employee2 = [];
employee2["id"] = 123;
employee2["name"] = "Bill Gates";
employee2["title"] = "programmer";
employee2["department"] = "Programming";
employee2["isCurrent"] = false;

var employees = [employee1, employee2];
window.console.log(employees[1]['name']);
*/

// 14
/*
var employee1 = [];
employee1["id"] = 123;
employee1["name"] = "Linus Torvalds";
employee1["title"] = "software engineer";
employee1["department"] = "Programming";
employee1["isCurrent"] = false;

var employee2 = [];
employee2["id"] = 123;
employee2["name"] = "Bill Gates";
employee2["title"] = "programmer";
employee2["department"] = "Programming";
employee2["isCurrent"] = false;

var employees = [employee1, employee2];
for (i in employees) {
window.console.log(employees[i]['name']);
}
*/

// 15
/*
var employee1 = [];
employee1["id"] = 123;
employee1["name"] = "Linus Torvalds";
employee1["title"] = "software engineer";
employee1["department"] = "Programming";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 123;
employee2["name"] = "Bill Gates";
employee2["title"] = "programmer";
employee2["department"] = "Programming";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 123;
employee3["name"] = "Steve Jobs";
employee3["title"] = "inventor";
employee3["department"] = "Innovation";
employee3["isCurrent"] = false;

var employees = [employee1, employee2];
for (i in employees) {
    if (employees[i]['isCurrent'] == true) {
window.console.log(employees[i]['name']);
    }
}
*/

// 16
/*
var movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
var i;
for (i = 0; i < movies.length; i++) {
    window.console.log(movies[i].filter(function (item) {
        return typeof item == "string";
    })
               );
}
*/


// Practice with Functions 
// 1
/*
function displayMessage (toPrint) {
    window.console.log(toPrint);
}
displayMessage('blabla')
*/

// 2


















