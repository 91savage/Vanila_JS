const person = {
    firstName: 'sehun',
    lastName: 'kim',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
};

console.log(`${person.firstName} ${person.lastName}`);

person.fullName = 'heungmin son';
console.log(person);
console.log(person.fullName);
