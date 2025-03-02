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
    var _a;
    if (req.query.name) {
        var getAllProducts = itemsRepositories_1.itemsRepositories.getProducts((_a = req.query.name) === null || _a === void 0 ? void 0 : _a.toString());
        res.send(getAllProducts);
    }
});
exports.itemsRouter.get('/:id', function (req, res) {
    if (req.query.id) {
        var itemById = itemsRepositories_1.itemsRepositories.getProductById(+req.query.id);
        if (itemById) {
            res.send(itemById);
        }
        else {
            res.send(404);
        }
    }
});
exports.itemsRouter.delete('/:id', function (req, res) {
    if (req.query.id) {
        var deleteProduct = itemsRepositories_1.itemsRepositories.deleteProduct(+req.query.id);
        if (deleteProduct) {
            res.send(202);
        }
        else {
            res.send(404);
        }
    }
});
exports.itemsRouter.post('/', function (req, res) {
    if (req.query.title && req.query.name && req.query.partNumber) {
        var createNewProduct = itemsRepositories_1.itemsRepositories.createProduct(req.query.title.toString(), req.query.name.toString(), req.query.partNumber.toString());
        if (createNewProduct) {
            res.status(201).send(createNewProduct);
        }
        else {
            res.status(404);
        }
    }
});
exports.itemsRouter.put('/:id', function (req, res) {
    if (req.query.id && req.query.title && req.query.name && req.query.partNumber) {
        var itemUpdate = itemsRepositories_1.itemsRepositories.
            updateProduct(+req.query.id, req.query.title.toString(), req.query.name.toString(), req.query.partNumber.toString());
        if (itemUpdate) {
            res.status(201).send(itemUpdate);
        }
        else {
            res.send(404);
        }
    }
});
