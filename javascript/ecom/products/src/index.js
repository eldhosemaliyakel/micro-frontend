import faker from "faker";

let products = "<ul>";

for(let i=0; i<3; i++) {
    const name = faker.commerce.productName();
    products += `<li>${name}</li>`
}

products += "</ul>";

document.querySelector("#products-id").innerHTML = products;