"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsRouter = void 0;
var express_1 = require("express");
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
        var searchName_1 = req.query.name.toString();
        res.send(product.filter(function (item) { return item.name.indexOf(searchName_1) > -1; }));
    }
    else {
        res.send(product);
    }
});
exports.itemsRouter.get('/:id', function (req, res) {
    var itemId = product.find(function (f) { return f.id === +req.params.id; });
    if (itemId) {
        res.send(itemId);
    }
    else {
        res.send(404);
    }
});
exports.itemsRouter.delete('/:id', function (req, res) {
    for (var i = 0; i < product.length; i += 1) {
        if (product[i].id === +req.params.id) {
            product.splice(i, 1);
            res.send(202);
            return;
        }
    }
    res.send(404);
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
