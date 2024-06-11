class Car {
  brand: string;
  model: string;
  year: string;

  constructor(brand: string, model: string, year: string) {
    this.year = year;
    this.brand = brand;
    this.model = model;
  }
  displayModel() {
    return `Your car model is: ${this.year} ${this.brand} ${this.model}`;
  }
}

const car = new Car("Toyota", "Corolla", "2020");

console.log(car.displayModel());
