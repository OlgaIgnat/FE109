/*---------Калькулятор---------*/
let Calculator = function() {
    this.start=function(){
        this.question = confirm("Включить калькулятор? ");
        if(this.question){
            this.get();
        } else return
    }
    this.get = function() {
        this.a = +prompt("Введите число a");
        this.oper = prompt("Введите операцию: +, -, *, /, %");
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
let calc = new Calculator();
calc.start();

/*-----------Контакты-----------*/

let Contacts = function(){
    this.getContacts = function(){
        this.name = prompt ("Введите ФИО (полностью)");
        this.age = +prompt ("Введите ваш возраст");
        this.phone = prompt ("Введите ваш номер телефона (напр.: +375(297)000000)");
        this.email = prompt ("Введите ваш адрес эл. почты (напр.: test@gmail.ru)");

        this.checkContacts();
    }
    this.checkContacts= function(){
        if(this.name === Number || this.name.length < 3){
            alert("Строка ФИО заполнена неверно! Введите данные еще раз!!! ");
            
            this.getContacts();
        }else{           
            if(this.age <= 0 || this.age === undefined){
                alert("Cтрока ВОЗРАСТ заполнена неверно! Введите данные еще раз!!! ");
                
                this.getContacts();
        }else{
            if(this.age < 18){
                alert("ДОСТУП ЗАПРЕЩЕН!");
                return;           
        }else{
            if(this.phone.length == 0){
                alert("Строка НОМЕР ТЕЛЕФОНА обязательна к заполнению!!!");
                    //console.log(this.phone );
                    this.getContacts();
        }else{
                let checkNum=/^\+[0-9]{3}[-\(\s]\d{3}[-\)\s]?\d{6}/g;    
                if(checkNum.test(this.phone) == false){
                    alert("Номер телефона введен неверно!Введите данные еще раз!!!");
                   // console.log(this.phone );
                    this.getContacts();
        }else{                   
            let checkEmail=/^[^0-9][a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,11}.[a-z]{2,11}$/gim;   
            if(checkEmail.test(this.email) == false){
                    alert("Адрес электронной почты введен неверно!Введите данные еще раз!!!");
                   // console.log(this.email );
                    this.getContacts();
        }
        else{
            this.showContacts(); 
        }
        }
        }
        }
        }         
        }        
        }
    this.showContacts = function(){
        alert("   Ваши контактные данные   \n "    + "ФИО: " + this.name + "\n" + "Ваш возраст: " + this.age +" лет" + "\n" + "Ваш номер телефона: " + this.phone + "\n" + "Адрес эл.почты: " + this.email + "\n" + "Регистрация прошла успешно!");
        

        this.helloContacts();
    }
    this.helloContacts = function(){
        alert(this.name + ", добро пожаловать!!!")
}

}

let contacts = new Contacts();
contacts.getContacts();