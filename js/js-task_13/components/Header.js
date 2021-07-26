
class Head {

    constructor() {
        this.element = "";
    }
    create() {
        this.element = document.createElement('header');
        this.element.classList.add('header_block');

        let logo = document.createElement('div');
        logo.classList.add('header_logo');
        logo.innerHTML= `
        <a href="#catalog"><img width="200" src="../img/logo.png" alt="logo"></a>
        ` 
        this.element.appendChild(logo);      

        return this.element;
    }
    init() {
        return this.create();
    }
}

const Header =  new Head().init();
export {Header};  