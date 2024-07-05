import {Router} from "express";

const product = [
    {id: 1, title: "Маслянный фильтр", name: "dynamatrix", partNumber: 'DOFC614'},
    {id: 2, title: "Помпа", name: "dolz", partNumber: "F150"}
]
export const itemsRouter = Router()

itemsRouter.get('/', (req, res) => {
    res.status(200).send(product)
})
itemsRouter.get('/', (req, res) => {
    if (req.query.name) {
        let searchName = req.query.name.toString()
        res.send(product.filter(item => item.name.indexOf(searchName) > -1))
    } else {
        res.send(product)
    }
})
itemsRouter.get('/:id', (req, res) => {
    let itemId = product.find(f => f.id === +req.params.id)
    if (itemId) {
        res.send(itemId)
    } else {
        res.send(404)
    }

})
itemsRouter.delete('/:id', (req, res) => {
    for (let i = 0; i < product.length; i += 1) {
        if (product[i].id === +req.params.id) {
            product.splice(i, 1)
            res.send(202)
            return;
        }

    }
    res.send(404)
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
