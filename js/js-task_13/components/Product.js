class Product {
    constructor(){
        this.data = [];
        this.id = null; //сделать проверку на NaN
        this.element = "";


    }
    create() {
        this.data = JSON.parse(localStorage.getItem("catalog")) || [];
        this.id = +window.location.hash.replace("#product",""); //сделать проверку на NaN

        this.idData = this.data.filter( elem => elem.id==this.id);

        this.element = document.createElement("div");
        this.element.classList.add("productBlock");
        this.element.innerHTML = `
            <ul>
                <li>Name: ${this.idData[0].title}</li>
                <li>Category: ${this.idData[0].category}</li>
                <li>Description: ${this.idData[0].description}</li>
                <li>Price: ${this.idData[0].price}</li>
                <li><a href="#product${this.idData[0].id}"><img class="primary-img" src="${this.idData[0].image}" alt="${this.idData[0].title}"></a></li>
            </ul>
        `;
        //console.log(this.idData);
        //return this.element; //добавить!!!
        document.body.appendChild(this.element);

    }
        
    init() {
         this.create();
    }
}

export default new Product();