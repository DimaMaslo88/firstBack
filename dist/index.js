"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var itemsRouter_1 = require("./routes/itemsRouter");
var carsRouter_1 = require("./routes/carsRouter");
var PORT = 5000;
var app = (0, express_1.default)();
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    // optionSuccessStatus:200
};
var parserMiddleware = (0, body_parser_1.default)({});
app.use((0, cors_1.default)(corsOptions));
app.use(parserMiddleware);
app.use('/product', itemsRouter_1.itemsRouter);
app.use('/cars', carsRouter_1.carsRouter);
app.listen(PORT, function () { return console.log("Look at  ".concat(PORT)); });
