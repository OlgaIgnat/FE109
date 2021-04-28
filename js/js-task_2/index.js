//1
let nameUser,
    age, 
    city, 
    phone,
    email,
    company;
nameUser=prompt("Ваше имя?");
age=prompt("Ваш возраст?");
city=prompt("В каком городе вы проживаете?");
phone=prompt("Ваш номер телефона?");   
email=prompt("Ваш электронный адрес?");
company=prompt("В какой компании работаете?");   
document.write("Меня зовут "+nameUser+". Мне "+age+" лет. Я проживаю в городе "+city+" и работаю в компании "+company+". Мои контактные данные:"+phone+", "+email+".")

//2
let year=2021,
    birth=year-age;
    document.write(""+nameUser+" родился в "+birth+" году.");

//3
let str="010001";

if ((+str[0]+ +str[1]+ +str[2]) == (+str[3]+ +str[4]+ +str[5])){
    console.log("да");
}else{
    console.log("нет");
}

//4
let a=-3; 
if (a>0){
    console.log("Верно");
}else{
    console.log("Неверно");
}

//5
let b=2;
    a=10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
if((a+b)>1){
    console.log((a+b)**2);
}else{

}

//6
if ((a>2 && a<11) || (b>=6 && b<14)){
    console.log("Верно");
}else{
    console.log("Неверно");
}



