import express from 'express';
import bodyParser from "body-parser";
import { itemsRouter } from "./routes/itemsRouter";
var PORT = 6000;
var app = express();
var parserMiddleware = bodyParser({});
app.use(parserMiddleware);
app.use('/product', itemsRouter);
app.listen(PORT, function () { return console.log("Look at  ".concat(PORT)); });
