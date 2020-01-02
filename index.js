// Write your code here

function Breakfast(food, drink) {
    this.food = food;
    this.drink = drink;
}

function Lunch(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
}

function Dinner(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
}