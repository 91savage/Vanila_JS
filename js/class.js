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
let price = genesis.getPrice();
console.log(price);
genesis.setPrice(6660);
console.log(genesis.getPrice());

class ElectricCar extends Car {
    constructor(modelName, modelYear, price, chargeTime) {
        super(modelName, modelYear, 'e', price);
        this.chargeTime = chargeTime;
    }

    setChargeTime(time) {
        this.chargeTime = time;
    }

    getChargeTime() {
        return this.chargeTime;
    }
}
