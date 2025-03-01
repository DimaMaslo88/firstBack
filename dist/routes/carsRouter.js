"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRouter = void 0;
var express_1 = require("express");
var carsRepositories_1 = require("../repositories/carsRepositories");
exports.carsRouter = (0, express_1.Router)();
// carsRouter.get('/',(req,res)=>{
//     res.status(200).send(cars)
// })
exports.carsRouter.get('/', function (req, res) {
    var _a;
    var foundCars = carsRepositories_1.carsRepositories.findCars((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundCars);
});
exports.carsRouter.get('/:id', function (req, res) {
    if (req.query.id) {
        var car = carsRepositories_1.carsRepositories.getCarById(+req.query.id);
        if (car) {
            res.send(car);
        }
        else {
            res.send(404);
        }
    }
});
