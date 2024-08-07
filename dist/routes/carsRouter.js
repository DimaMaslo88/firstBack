"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRouter = void 0;
var express_1 = require("express");
var cars = [
    { id: 1, car: 'Ford', model: 'Explorer', generation: 5, year: 2017 }
];
exports.carsRouter = (0, express_1.Router)();
// carsRouter.get('/',(req,res)=>{
//     res.status(200).send(cars)
// })
exports.carsRouter.get('/', function (req, res) {
    if (req.query.car) {
        var searchingCar_1 = req.query.car.toString();
        res.send(cars.filter(function (f) { return f.car.indexOf(searchingCar_1); }));
    }
    else {
        res.send(cars);
    }
});
