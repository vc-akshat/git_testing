// task 1 : get and set each property
var Vehicle = /** @class */ (function () {
    function Vehicle(car, truck, motorcycle) {
        this.car = car,
            this.truck = truck,
            this.motorcycle = motorcycle,
            this.carMethod(),
            this.truckMethod(),
            this.motorcycleMethod();
    }
    Vehicle.prototype.carMethod = function () {
        console.log(this.car + " is a car");
    };
    Vehicle.prototype.truckMethod = function () {
        console.log(this.truck + " is a truck");
    };
    Vehicle.prototype.motorcycleMethod = function () {
        console.log(this.motorcycle + " is a motorcycle");
    };
    return Vehicle;
}());
var vehicleDisplay = new Vehicle("BMW", "Tata", "Honda");
console.log(vehicleDisplay);
