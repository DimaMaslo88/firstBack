"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsRepositories = void 0;
var product = [
    { id: 1, title: "Маслянный фильтр", name: "dynamatrix", partNumber: 'DOFC614' },
    { id: 2, title: "Помпа", name: "dolz", partNumber: "F150" }
];
// репозиторий для архитектуры данных.Перенесли логику из itemsRouter
exports.itemsRepositories = {
    getProducts: function (name) {
        if (name) {
            var searchProduct = product.filter(function (item) { return item.name.indexOf(name) > -1; });
            return searchProduct;
        }
        else {
            return product;
        }
    }
};
