"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRepositories = void 0;
var cars = [
    { id: 1, car: 'Ford', model: 'Explorer', generation: 5, year: 2017 }
];
// репозиторий для архитектуры данных.Перенесли логику из carsRouter
exports.carsRepositories = {
    findCars: function (car) {
        if (car) {
            var searchingCar = cars.filter(function (f) { return f.car.indexOf(car); });
            return searchingCar;
        }
        else {
            return cars;
        }
    },
    getCarById: function (id) {
        var carId = cars.find(function (car) { return car.id === id; });
        return carId;
    }
};
