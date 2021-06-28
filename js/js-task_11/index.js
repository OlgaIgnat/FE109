// Реализуйте класс Student (Студент) и Teacher (Учитель), который будет наследоваться от класса User, 
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). 
// Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. 
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно


// User
// -	Name
// -	Surname
// -	Status (учитель или студент)
// -	getFullName() метод

// Student
// -	 Наследует все свойства USER
// -	 Свои свойства: Year – год поступления
// -	 getCourse() – вывод текущего курса

// Teacher
// -	Наследует все свойства USER
// -	+ свои свойства – предмет (может быть несколько!) и зарплата
// -	Метод getCourse() – выводит все предметы, которые преподает
// Можно добавлять свои методы и параметры

// class User {
//     constructor(data){
//        this.name = data.name;
//        this.surname = data.surname;
//        this.status = data.status;
//     }
//     getFullName() {
//         if(!this.name || !this.surname || !this.status){
//             alert("Вы ввели не все данные!");
//             return
//         }else{
//         document.write(this.status + ": " + this.surname+ "  " + this.name + "<br>")
//         }
//     }
// }

// let user = new User({name:"Ольга", surname: "Игнатюк", status: "Абитуриент"});
// console.log (user);
// user.getFullName();
// document.write("----------------------------------------------------------------" + "<br>")

// class Student extends User {
//     constructor(data){
//         super(data);
//         this.year = data.year;
//     }
//     getCourse(){
//         let dateNow = new Date();
//         let yearNow = dateNow.getFullYear();
//         let courseNum = +yearNow - +this.year + 1;
//         if(+courseNum > 5 || !this.year){
//             alert("Год начала обучения введен неверно! Введите 4-х значное число. ");
//             return
//         }else{
//         document.write("Обучается на "+ +courseNum + " курсе" + "<br>")}
//     }

// }

// let student = new Student({name:"Мария", surname: "Петрова", status: "Студент", year: "2021"});
// console.log (student);
// student.getFullName();
// student.getCourse();
// document.write("----------------------------------------------------------------" + "<br>")

// class Teacher extends User{
//     constructor(data){
//         super(data);
//         this.subject = data.subject;
//         this.salary = data.salary;
//     }
//     getCourse(){
//         let subjectArr = this.subject.split(",")
//         document.write("Предметы: "+ " <br>") 
//         for(let i=0;i<subjectArr.length;i++){
//             document.write( (i+1) + ")" + subjectArr[i] + "<br>")
//         }
//     }
//     getSalary(){
//         document.write("Зарплата : " + +this.salary + "<br>");  
//     }   

// }

// let teacher = new Teacher({name:"Анна", surname: "Иванова", status: "Преподаватель", subject: "английский, математика, экономика, история", salary: "1000"});
// console.log (teacher);
// teacher.getFullName();
// teacher.getCourse();
// teacher.getSalary();
// document.write("----------------------------------------------------------------" + "<br>") 

class User{
    constructor(id,
        name, email, address, phone){
            this.datauser = {id,
                name, email, address, phone};
    }
    edit(newInfo){
       this.datauser = {id: this.datauser.id,
                        name: newInfo.name || this.datauser.name,
                        email: newInfo.email || this.datauser.email,
                        address: newInfo.address || this.datauser.address,
                        phone: newInfo.phone || this.datauser.phone
                     }
    }

    get info(){
        return this.datauser;
    }

    get (){
        return this.data ;  
    }
}

class Contacts{
    constructor(){
        this.data = [];
    }
    add(name, email, address, phone){
            let id;
            if(this.data.length==0)
            {id=1}else{
                id=this.data[this.data.length-1].datauser.id+1;
            }
            let user = new User(id,
                name, email, address, phone);
            this.data.push(user) ;            
            console.log(this.data);
        }
    remove(id){
        this.data = this.data.filter(elem=>elem.datauser.id!=id);

        }

    edit(id, newInfo){
        let index = this.data.findIndex(elem=>elem.datauser.id===id);
        let editUser=this.data.filter(elem=>elem.datauser.id===id);
        editUser[index].edit(newInfo);
        } 
    
    
    get(){
        return this.data;
        }
        
}
let contact = new Contacts;

// contact.add("1", "Anna", "anna@gmail", "Brest", "1000000");
// contact.add("2", "Olga", "olga@gmail", "Minsk", "2000000");
// contact.add("3", "Mary", "mary@gmail", "Gomel", "3000000");
// contact.remove("3");
// console.log(contact);

class ContactsApp extends Contacts{
    constructor(data){
        super(data);        
    }
    createContacts () {
        let contactsTable =  document.querySelector(".contacts-table")
        if(contactsTable.classList.contains("active") == false){
            contactsTable.classList.add("active");}
        let table= document.querySelector("table");

        console.log(table);
        //table.innerHTML = "";
        this.data.forEach((userItem, index)=>{
            let stringTable = document.createElement("tr");
            stringTable.innerHTML = `
            <td>${userItem.user.data.id}</td>
            <td>${userItem.user.data.name}</td>
            <td>${userItem.user.data.email}</td>
            <td>${userItem.user.data.address}</td>
            <td>${userItem.user.data.phone}</td>
            <td> <i class= "fa fa-pensil"></i></td>
            <td> <i class= "fa fa-trash"></i></td>
            `
        table.appendChild(stringTable);
        
        console.log(table);
        });
    }
}

getInfoForm = function(){
    let userName = document.querySelector("#inputName").value;
    let email = document.querySelector("#inputEmail").value;
    let address = document.querySelector("#inputAddress").value;
    let phone = document.querySelector("#inputPhone").value;

    if(!userName ||  userName.value == " "){
        document.querySelector("#inputName").classList.add("red");}       

    if(!email ||  email.value == " "){
        document.querySelector("#inputEmail").classList.add("red");}     
    
    if(!address ||  address.value == " "){
        document.querySelector("#inputAddress").classList.add("red");}         
    
    if(!phone ||  phone.value == " "){
            document.querySelector("#inputPhone").classList.add("red");
            return false;
    }else
        addUserContact(userName, email, address, phone);
        form.reset();
};


addUserContact = function(userName, email, address, phone){
    contactList.add(userName, email, address, phone);
    contactList.createContacts();
};

showContacts = function(){
   // document.querySelector(".contacts-table").classList.add("active");
    contactList.createContacts(); 
};

deleteContact = function(index){
    contactList.remove(index);
    contactList.createContacts();
};


let contactList = new ContactsApp();
 
// contactList.add("1", "Anna", "anna@gmail", "Brest", "1000000");
// contactList.add("2", "Bob", "bob@gmail", "Berlin", "2000000");
// contactList.add("3", "Olga", "olga@gmail", "Minsk", "2000000");
// contactList.add("4", "Mary", "mary@gmail", "Gomel", "3000000");
console.log(contactList);
let form = document.querySelector("#contactForm");

//document.querySelector("#buttonCreateContact").addEventListener('click', getInfoForm);

//let buttonShow = document.querySelector("#buttonShowContacts");
//buttonShow.addEventListener("click", showContacts)
