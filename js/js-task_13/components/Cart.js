import {getCookie} from './function.js'
class Cart {
    constructor() {
        this.data = JSON.parse(localStorage.getItem("catalog")) || [];
    }

    getCart() {
        let idArr = [];
        let cookieProducts = getCookie("userProducts") || "";    
        let cookieArr = cookieProducts.split(" |");
        cookieArr.pop();       
        console.log(cookieArr);
        idArr = cookieArr.map((item) => {
            if (item) {
                let itemArr = item.split(",");
                let id = itemArr[0].replace("id:","");
                return +id;
            }             
            
        });
        this.cartArr = []
        idArr.forEach(elem => {
            this.data.forEach(elemData => {
                if (elem==elemData.id) {
                    this.cartArr.push(elemData);
                }
            });
        })
        
    }
    create() {
        console.log(this.cartArr);
        this.getCart();
        let table = document.createElement("table");
        table.classList.add("cartTable");
        document.body.appendChild(table);        
        table.innerHTML = ` <thead>
        <tr>
        <th class = "image">Image</th>
        <th class = "productName">Product</th>
        <th class = "category">Сategory</th>
        <th class = "price">Price</th>
        <th class = "buttonDel">Del</th>
        </tr>
        <tbody class="tbody"></tbody>
        `
        this.cartArr.forEach(element =>{
            let tbody = document.querySelector(".tbody");
            tbody.innerHTML += `
            <tr>
            <td><a href="#product ${element.id}"><img class="primary-img" src="${element.image}" alt="${element.title}"></a></td>
            <td><h4><a href="#product ${element.id}">${element.title}</a></h4></td>
            <td><h4>${element.category}</h4></td>
            <td><span class="price">${element.price}</span></td>
            <td class="buttonDel"></td>
            </tr>                      
            `
            let buttonDel = document.createElement("button");
            document.querySelector(".buttonDel").appendChild(buttonDel);
        })        
    }
        
    init() {
        
        this.getCart()
        this.create();
        
         
    }
}

export default new Cart();