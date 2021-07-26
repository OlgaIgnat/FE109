import {clickCart} from './function.js'
class Catalog {
    constructor() {       
        this.data = []

    }
    async getProducts() {
        const productData = await fetch('https://fakestoreapi.com/products/')
                .then(res=>res.json())
                .then(json=>localStorage.setItem("catalog", JSON.stringify(json)))               
    }
    async create() {
        await this.getProducts();
    // create() {
        this.data = JSON.parse(localStorage.getItem("catalog")) || [];
        

        let mainblock = document.createElement("div");
        mainblock.classList.add("catalog");
        this.data.forEach(element => {
            let productAction = document.createElement("div");
            productAction.classList.add("product-action");
            let buttonGroup = document.createElement("div");
            buttonGroup.classList.add("button-group");

            let cartButton = document.createElement("button");
            cartButton.innerHTML = `<i class="fa fa-shopping-cart"></i> Add to Cart`;
            cartButton.addEventListener("click",function() {
                clickCart(element.id, element.price);
            });
            buttonGroup.appendChild(cartButton);
            productAction.appendChild(buttonGroup);

            let singleProductBlock = document.createElement("div");
            singleProductBlock.classList.add("single-product");
            singleProductBlock.insertAdjacentHTML("afterBegin",`
                <div class="product-img">
                    <a href="#product${element.id}">
                        <img class="primary-img" src="${element.image}" alt="${element.title}">
                    </a>
                </div>
                <div class="product-description">
                    <h5><a href="#product${element.id}">${element.title}</a></h5>
                    <div class="price-box">
                        <span class="price">${element.price}$</span>
                    </div>                    
                </div>
            `);
            singleProductBlock.appendChild(productAction);
            mainblock.appendChild(singleProductBlock);
       });
       document.body.appendChild(mainblock);

    }

    init() {        

        this.create();
    }
}



export default new Catalog();