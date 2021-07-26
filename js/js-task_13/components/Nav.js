

class Nav {
    constructor() {
        this.element = "";

    }
    create() {
        this.element = document.createElement("ul");
        this.element.innerHTML = `
            <li><a href="#catalog">Каталог</a></li>
            <li><a href="#cart">Корзина</a></li>
        `
        // let li = document.createElement("li");
        // li.innerHTML = `Каталог`;
        // li.setAttribute("href","#catalog");
        // this.element.appendChild(li);
        // li.innerHTML = "Корзина";
        // li.setAttribute("href","#cart");

        // this.element.appendChild(li);

        return this.element;

    }
    init() {
        return this.create();
    }
}
const Navigation =  new Nav().init();
export {Navigation};