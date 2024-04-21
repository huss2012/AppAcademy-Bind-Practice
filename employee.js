// Your code here:
class Employee {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    sayName() {
        console.log(`${this.name} says hello`);
    }

    sayOccupation() {
        console.log(`${this.name} is a ${this.occupation}`);
    }
}


//---------Eporting area-----------------
module.exports = {
    Employee,
}
