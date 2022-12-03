class CarOne {
    model: string;
    year: number;
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    getModel() {
        return this.model;
    }

    getYear() {
        return this.year;
    }
}


//* Syntac and defining Types
let person: string = 'John';

interface Car {
    getModel: Function;
    getYear: Function;
}

class Hyunday implements Car{
    constructor() {}

    getModel() {}
    getYear() {}
}