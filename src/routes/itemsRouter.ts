import {Router} from "express";
import {itemsRepositories} from "../repositories/itemsRepositories";

// const product = [
//     {id: 1, title: "Маслянный фильтр", name: "dynamatrix", partNumber: 'DOFC614'},
//     {id: 2, title: "Помпа", name: "dolz", partNumber: "F150"}
// ] перенесоно в itemsRepositories
export const itemsRouter = Router()

// itemsRouter.get('/', (req, res) => {
//     res.status(200).send(product)
// })
itemsRouter.get('/', (req, res) => {
    if(req.query.name){
        const getAllProducts = itemsRepositories.getProducts(req.query.name?.toString())
        res.send(getAllProducts)
    }

})
itemsRouter.get('/:id', (req, res) => {
    if(req.query.id){
        const itemById = itemsRepositories.getProductById(+req.query.id)
        if (itemById) {
            res.send(itemById)
        } else {
            res.send(404)
        }
    }


})
itemsRouter.delete('/:id', (req, res) => {
    if(req.query.id){
        const deleteProduct = itemsRepositories.deleteProduct(+req.query.id)
        if (deleteProduct) {
            res.send(202)
        } else {
            res.send(404)
        }
    }


})
itemsRouter.post('/', (req, res) => {

        const createNewProduct = itemsRepositories.createProduct(req.query.title, req.query.name, req.query.partNumber)
        if (createNewProduct) {
            res.status(201).send(createNewProduct)
        } else {
            res.status(404)
        }



})
itemsRouter.put('/:id', (req, res) => {
    if(req.query.id, req.query.title, req.query.name, req.query.partNumber){
        const itemUpdate = itemsRepositories.updateProduct(+req.query.id, req.query.title, req.query.name, req.query.partNumber)
        if (itemUpdate) {
            res.status(201).send(itemUpdate)
        } else {
            res.send(404)
        }
    }


})
