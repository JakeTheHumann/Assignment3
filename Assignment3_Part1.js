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















