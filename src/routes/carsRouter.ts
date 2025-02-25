import {Router} from 'express'
import {carsRepositories} from "../repositories/carsRepositories";




export const carsRouter = Router()

// carsRouter.get('/',(req,res)=>{
//     res.status(200).send(cars)
// })
carsRouter.get('/',(req,res)=>{
   const foundCars = carsRepositories.findCars(req.query.title?.toString())
    res.send(foundCars)
})
carsRouter.get('/:id',(req,res)=>{
const car = carsRepositories.getCarById(+req.query.id)
    if(car){
        res.send(car)
    }else{
        res.send(404)
    }
})
