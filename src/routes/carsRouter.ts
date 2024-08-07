import {Router} from 'express'


const cars = [
    {id: 1, car: 'Ford', model: 'Explorer', generation: 5, year: 2017}
]

export const carsRouter = Router()

// carsRouter.get('/',(req,res)=>{
//     res.status(200).send(cars)
// })
carsRouter.get('/',(req,res)=>{
   if(req.query.car){
       let searchingCar = req.query.car.toString()
       res.send(cars.filter(f=>f.car.indexOf(searchingCar)))
   }else{
       res.send(cars)
   }
})

