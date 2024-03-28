interface item {
    name:  string 
    price: number
}
const cake: item= {
    name: 'CHEESE CAKE'
    price: 800
}
const iphone: item= {
    name: 'iphone pro max'
    price: 300000
}
console.log(`cake name: ${cake.name},price:${cake.price}`);
console.log(`iphone name: ${iphone.name},price:${iphone.price}`);