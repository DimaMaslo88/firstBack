import express from 'express'
import bodyParser from "body-parser";
import {itemsRouter} from "./routes/itemsRouter";
import {carsRouter} from "./routes/carsRouter";


const PORT =  5000;
const app = express()


const parserMiddleware = bodyParser({})
app.use(parserMiddleware)
app.use('/product',itemsRouter)
app.use('/cars',carsRouter)
app.listen(PORT, () => console.log(`Look at  ${PORT}`))
