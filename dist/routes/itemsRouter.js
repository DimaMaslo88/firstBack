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
    if (req.query.name) {
        var getAllProducts = itemsRepositories_1.itemsRepositories.getProducts(req.query.name);
        res.send(getAllProducts);
    }
});
exports.itemsRouter.get('/:id', function (req, res) {
    if (req.query.id) {
        var itemById = itemsRepositories_1.itemsRepositories.getProductById(req.query.id);
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
        var deleteProduct = itemsRepositories_1.itemsRepositories.deleteProduct(req.query.id);
        if (deleteProduct) {
            res.send(202);
        }
        else {
            res.send(404);
        }
    }
});
exports.itemsRouter.post('/', function (req, res) {
    var createNewProduct = itemsRepositories_1.itemsRepositories.createProduct(req.query.title, req.query.name, req.query.partNumber);
    if (createNewProduct) {
        res.status(201).send(createNewProduct);
    }
    else {
        res.status(404);
    }
});
exports.itemsRouter.put('/:id', function (req, res) {
    var itemUpdate = itemsRepositories_1.itemsRepositories.updateProduct(req.query.id, req.query.title, req.query.name, req.query.partNumber);
    if (itemUpdate) {
        res.status(201).send(itemUpdate);
    }
    else {
        res.send(404);
    }
});
