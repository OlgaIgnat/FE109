/*---------Калькулятор---------*/
/*let Calculator = function() {
    this.start=function(){
        this.question = confirm("Включить калькулятор? ");
        if(this.question){
            this.get();
        } else return
    }
    this.get = function() {
        this.a = +prompt("Введите число a");
        this.oper = prompt("Введите операцию: +, -, *, / ,  %");  
        this.b = +prompt("Введите число b");
        this.operation();
    };
    this.operation = function() {
        switch(this.oper){
            case "+":
                this.result = this.a + this.b;
            break;
            case "-":
                this.result = this.a - this.b;
            break;
            case "*":
                this.result = this.a * this.b;
            break;
            case "/":
                this.result = this.a / this.b;
            break;
            case "%":
                this.result = this.a * this.b / 100;
            break;
            default: this.result = 0;           
        }
        this.showResult();
    };
    this.showResult = function() {
        alert(this.a + " " + this.oper + " " + this.b + " = " + this.result);
        this.end();
    };
    this.end = function () {
        this.questionEnd = confirm("Калькулятор выключить?");
        if(!this.questionEnd){
            this.get();
        } else return
    }
   
}
//let calc = new Calculator();
/*calc.start();*/

/*let CalculatorMath = function(){                                // не очень понимаю, если я захочу добавить 
    this.name = "Калькулятор математический";                   //еще операции, то в данном примере как это сделать?
    Calculator.apply(this, arguments);
    let showResultMath = this.showResult;    
    this.showResult = function(){
        showResultMath.call(this);
        document.write("Ваши вычисления:  " + this.a + " " + this.oper + " " + this.b + " = " + this.result);               
    }     
}
let calcMath = new CalculatorMath();
console.log(calcMath.name);
console.log(calcMath);
calcMath.start();*/



/****************************************************/
let DOM = function() {
    this.create = function(tagName) {     //создание элемента
        return document.createElement(tagName);
    };

    this.attr = function(element, name, value){   //добавление элементу атрибута  со значением 
            return element.setAttribute(name, value);              
    };

    this.html = function(element, value){       //добавление содержимого в элемент
        return element.innerHTML = value;
    }
     //работает неправильно!!!
    this.search = function(element, selector){      //поиск элемента по селектору
        if( element){       
            return element.querySelectorAll(selector)
        }else  return document.querySelectorAll(selector)
    };                         
    
    this.addClass = function(element, className) {   //добавление класса элементу
      //arguments
        return element.classList.add(className)
    };

    this.removeClass = function(element, className){ //удаление класса у элемента
        return element.classList.remove(className)
    };

    this.toggleClass = function(element, className){   //включение-выключение класса
        return element.classList.toggle(className)        
    };

    this.hasClass = function(element, className){ //проверка существования класса в элементе
        return element.classList.contains(className)
    };

    this.append = function(element, newElement, beforeElement){  // для добавления новых элементов внутрь какого-либо после всего его содержимого,
        if (beforeElement){
           return element.insertBefore(beforeElement, newElement);
        }else return element.appendChild(newElement);
    };

    this.on = function(element, eventName, funcName){
        return element.addEventListener(eventName, funcName(){
            alert("Hello")
        });

    }
}


let elemNew = new DOM();

/*let body = document.getElementsByTagName("<body>");*/
let body = elemNew.create("body");
let h1 = elemNew.create("h1");
let a = elemNew.create("a");
let p = elemNew.create("p");
let div = elemNew.create("div");


elemNew.html(h1,"Text");
elemNew.html(p,"<a>Text</a>");
console.log(p);

elemNew.attr(h1, "style","color: red; font-size: 3em");
console.log(h1);

console.log(elemNew.search(p, "a"));

//elemNew.addClass(div, "item")     //почему класс item1 уже и здесь добавляется?
//console.log(div);

//elemNew.addClass(div, "item1");
//console.log(div);
/*elemNew.removeClass(div, "item1")  //и удаляется сразу во всех трех выводах в консоль? 
console.log(div);*/

//elemNew.toggleClass(a, "active");
//console.log(a);

//console.log(elemNew.hasClass(a, "active"));

console.log(elemNew.append(body, h1));
console.log(elemNew.append(body, p));
console.log(elemNew.append(body, div));
console.log(elemNew.append(div, a));

let html = document.querySelector("html");
html.appendChild(body);
document.write(h1);

/*h1.addClass("btn1", "btn2")*/
