"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsRouter = void 0;
var express_1 = require("express");
var itemsRepositories_1 = require("../repositories/itemsRepositories");
// const product = [
//     {id: 1, title: "Маслянный фильтр", name: "dynamatrix", partNumber: 'DOFC614'},
//     {id: 2, title: "Помпа", name: "dolz", partNumber: "F150"}
// ] перенесоно в itemsRepositories
exports.itemsRouter = (0, express_1.Router)();
// itemsRouter.get('/', (req, res) => {
//     res.status(200).send(product)
// })
exports.itemsRouter.get('/', function (req, res) {
    var getAllProducts = itemsRepositories_1.itemsRepositories.getProducts(req.query.name);
    res.send(getAllProducts);
});
exports.itemsRouter.get('/:id', function (req, res) {
    var itemById = itemsRepositories_1.itemsRepositories.getProductById(req.query.id);
    if (itemById) {
        res.send(itemById);
    }
    else {
        res.send(404);
    }
});
exports.itemsRouter.delete('/:id', function (req, res) {
    var deleteProduct = itemsRepositories_1.itemsRepositories.deleteProduct(req.query.id);
    if (deleteProduct) {
        res.send(202);
    }
    else {
        res.send(404);
    }
});
exports.itemsRouter.post('/', function (req, res) {
    var newItem = {
        id: +(new Date()),
        title: req.body.title,
        name: req.body.name,
        partNumber: req.body.partNumber
    };
    product.push(newItem);
    res.status(201).send(newItem);
});
exports.itemsRouter.put('/:id', function (req, res) {
    var itemId = product.find(function (f) { return f.id === +req.params.id; });
    if (itemId) {
        itemId.partNumber = req.body.partNumber;
        itemId.title = req.body.title;
        itemId.name = req.body.name;
        res.send(itemId);
    }
    else {
        res.send(404);
    }
});
