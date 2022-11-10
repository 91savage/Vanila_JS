class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}
const me = new Person('Sehun', 'Kim');

console.log(`${me.firstName} ${me.lastName}`);

me.fullName = 'Heungmin Son';
console.log(me);
