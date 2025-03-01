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
   const getAllProducts = itemsRepositories.getProducts(req.query.name)
    res.send(getAllProducts)
})
itemsRouter.get('/:id', (req, res) => {
    const itemById = itemsRepositories.getProductById(req.query.id)
    if (itemById) {
        res.send(itemById)
    } else {
        res.send(404)
    }

})
itemsRouter.delete('/:id', (req, res) => {
    const deleteProduct = itemsRepositories.deleteProduct(req.query.id)
    if(deleteProduct){
        res.send(202)
    }else {
        res.send(404)
    }

})
itemsRouter.post('/', (req, res) => {
    const newItem = {
        id: +(new Date()),
        title: req.body.title,
        name: req.body.name,
        partNumber: req.body.partNumber
    }
    product.push(newItem)
    res.status(201).send(newItem)
})
itemsRouter.put('/:id', (req, res) => {
    let itemId = product.find(f => f.id === +req.params.id)
    if (itemId) {
        itemId.partNumber = req.body.partNumber
        itemId.title = req.body.title
        itemId.name = req.body.name
        res.send(itemId)
    } else {
        res.send(404)
    }

})
