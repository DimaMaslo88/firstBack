const cars = [
    {id: 1, car: 'Ford', model: 'Explorer', generation: 5, year: 2017}
]
// репозиторий для архитектуры данных.Перенесли логику из carsRouter
export const carsRepositories = {
    findCars(car: string | null | undefined) {
        if (car) {
            let searchingCar = cars.filter(f => f.car.indexOf(car))
            return searchingCar
        } else {
            return cars
        }
    },
    getCarById(id:number){
        let carId = cars.find(car=>car.id === id)
        return carId
    }
}
