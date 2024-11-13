import express from 'express';
import cors from 'cors'
import bodyParser from "body-parser";
import {itemsRouter} from "./routes/itemsRouter";
import {carsRouter} from "./routes/carsRouter";


const PORT =  5000;
const app = express()
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    // optionSuccessStatus:200
}


const parserMiddleware = bodyParser({})
app.use(cors(corsOptions))
app.use(parserMiddleware)
app.use('/product',itemsRouter)
app.use('/cars',carsRouter)
app.listen(PORT, () => console.log(`Look at  ${PORT}`))
