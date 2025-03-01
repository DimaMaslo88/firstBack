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
    },
    getProductById: function (id) {
        if (id) {
            var itemId = product.find(function (f) { return f.id === id; });
            return itemId;
        }
        else {
            return product;
        }
    },
    deleteProduct: function (id) {
        if (id) {
            for (var i = 0; i < product.length; i += 1) {
                if (product[i].id === id) {
                    product.splice(i, 1);
                    return true;
                }
                else
                    return false;
            }
        }
    }
};
