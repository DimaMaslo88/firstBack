const product = [
    {id: 1, title: "Маслянный фильтр", name: "dynamatrix", partNumber: 'DOFC614'},
    {id: 2, title: "Помпа", name: "dolz", partNumber: "F150"}
]

// репозиторий для архитектуры данных.Перенесли логику из itemsRouter
export const itemsRepositories ={
    getProducts(name:string|null|undefined){
        if(name){
            const searchProduct = product.filter(item=>item.name.indexOf(name)>-1)
            return searchProduct
        }else{
            return product
        }
    },
    getProductById(id:number){

    }
}
