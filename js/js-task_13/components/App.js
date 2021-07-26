
import {Header} from './Header.js'//Header
//Footer
import {Navigation} from './Nav.js'
import Catalog from './Catalog.js' //Catalog
import Product from './Product.js' //Catalog
import Cart from './Cart.js' //Cart

import {loadCart} from './function.js'
//Product

class App {
     constructor() {
        this.element = "";
     }
    //  async getProducts() {
    //     if (!localStorage.getItem("catalog")) {
    //     const productData = await fetch('https://fakestoreapi.com/products/')
    //             .then(res=>res.json())
    //             .then(json=>localStorage.setItem("catalog", JSON.stringify(json)))  
    //     } else return;             
    // }
    create() {
        this.element = document.createElement("div");
        this.element.classList.add("app");

     }
     async render() {         
        // this.getProducts();
        this.create();
        this.element.appendChild(Header);
        this.element.appendChild(Navigation);
        let script = document.querySelector("script");
        document.body.insertBefore(this.element, script);

     }

     init() {
         this.render();
        //  Catalog.init();

     }
    
}

let loadPage = function() {
    // console.log(window.location.hash);
    new App().init();
    let catalog = document.querySelector(".catalog");
    if (window.location.hash.indexOf("#product")!=-1) {
        Product.init();
    } else 
    if (window.location.hash=="#cart") {
        Cart.init();
    } else {
        Catalog.init();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    loadPage();
    loadCart();
})
window.addEventListener("hashchange", loadPage)

export default new App().init();