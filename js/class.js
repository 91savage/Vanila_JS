class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    getModelName() {
        return this.modelName;
    }

    getModelYear() {
        return this.modelYear;
    }

    getPrice() {
        return this.price;
    }

    setModelName(modelName) {
        this.modelName = modelName;
    }

    setModelYear(modelYear) {
        this.modelYear = modelYear;
    }

    setType(type) {
        this.type = type;
    }

    setPrice(price) {
        this.price = price;
    }
}

let genesis = new Car('Genesis', '2022', 'gv70', 6400);
let modelName = genesis.getPrice();
console.log(modelName);
genesis.setPrice(6660);
console.log(genesis.getPrice());
