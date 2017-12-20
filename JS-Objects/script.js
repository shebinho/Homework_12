// 1.	The Recipe Card
// a.	Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// b.	On separate lines (one console.log statement for each), log the recipe information so it looks like:
// i.	Mole
// ii.	Serves: 2
// iii.	Ingredients:
// iv.	cinnamon
// v.	cumin
// vi.	Cocoa


var recipeCard = {

    name: "Paincakes",
    serves: 3,
    ingredients: ["chocolate", "honey", "white-cream"]
}
console.log(recipeCard.name);
console.log("Serves : " + recipeCard.serves);
console.log("Ingredients : " + recipeCard.ingredients);

// 2.	The Reading List
// a.	Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// b.	Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// c.	Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

let books = [{
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true
},
{
    title: "Lord of The Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false
},

{
    title: "Kasni Porasni ",
    author: "Petre M Andreevski",
    alreadyRead: true
}];

for (i = 0; i < books.length; i++) {
    if (books[i].alreadyRead === true) {
        console.log("You already read " + books[i].title + " by " + books[i].author);
    }
    else {
        console.log("You still need to read " + books[i].title + " by " + books[i].author);
    }


}







// 3.	Order coffee drinks
// a.	Create a constructor to create coffee drinks
// b.	The constructor should take ounce and type as parameters and create the coffee with properties type and size.
// c.	The size is determined in the following way, depending on the ounce value:
// i.	0.2 is small
// ii.	0.4 is medium
// iii.	0.6 is large
// d.	For now, consider that the method will be called with one of these values for ounce, do not handle the cases if the value is not in this set.
// e.	Each coffee instantiated through this constructor has getString method, that will output the coffee in the following format: “You’ve ordered a {size} {type} coffee.”


function coffeeDrinks(type, size) {
    this.type = type;
    this.size = size;
    this.getString = function () {
        return `You’ve ordered a ${size} ${type} coffee.`
    }

}
var coffeeDrinks1 = new coffeeDrinks(0.2, "small");
var coffeeDrinks2 = new coffeeDrinks(0.4, "medium");
var coffeeDrinks3 = new coffeeDrinks(0.6, "large");

console.log(coffeeDrinks1.getString());
console.log(coffeeDrinks2.getString());
console.log(coffeeDrinks3.getString());
