function Person(name, color) {
    this.name = name;
    this.favColor = color;
}

Person.prototype.greet = function() {
    console.log(this.name + " " + this.favColor);
    
}

module.exports = Person;