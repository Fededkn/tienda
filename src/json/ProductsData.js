export const productsData = [
    {id: '01', name: 'Motherboard01', description: "Mother azul", price: 10000,pictureUrl: "", stock: 10, category: "motherboards",},
    {id: '02', name: 'Motherboard02', description: "Mother rojo", price: 10000, pictureUrl: "", stock: 10, category: "motherboards",},
    {id: '03', name: 'Motherboard03', description: "Mother verde", price: 11000, pictureUrl: "", stock: 8, category: "motherboards",},
    {id: '04', name: 'Motherboard04', description: "Mother amarillo", price: 12000, pictureUrl: "", stock: 7, category: "motherboards",},
    {id: '05', name: 'Procesador01',description: "procesador - Plateado",price: 15000,pictureUrl: "",stock: 15,category: "procesadores",},
    {id: '06', name: 'Procesador02', description: "Procesador - Negro", price: 16000, pictureUrl: "", stock: 12, category: "procesadores",},
    {id: '07', name: 'Procesador03', description: "Procesador Dorado", price: 18000, pictureUrl: "", stock: 9, category: "procesadores",},
    {id: '08', name: 'Procesador04', description: "Procesador Rojo", price: 17000, pictureUrl: "", stock: 11, category: "procesadores",},
    {id: '09', name: 'PlacaDeVideo01', description: "Azul", price: 25000, pictureUrl: "", stock: 6, category: "placasdevideo",},
    {id: '10', name: 'PlacaDeVideo02', description: "Verde", price: 26000, pictureUrl: "", stock: 5, category: "placasdevideo",},
    {id: '11', name: 'PlacaDeVideo03', description: "Plateado", price: 28000, pictureUrl: "", stock: 4, category: "placasdevideo",},
    {id: '12', name: 'PlacaDeVideo04', description: "Negro", price: 27000, pictureUrl: "", stock: 7, category: "placasdevideo",}
]

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay datos')
            }else{
                resolve(productsData)
            }
        },2000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsData.find((item) => item.id === id));
        }, 2000);
    });
}