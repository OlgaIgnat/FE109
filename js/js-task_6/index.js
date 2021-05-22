/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.
console.log("----------ЗАДАНИЕ 1---------------");
console.log('aaa@bbb@ccc'.replace(/@/g,'!'));*/

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.
console.log("----------ЗАДАНИЕ 2---------------");
function retDate(date){
    let dateArr=date.split("-");
    dateArr.reverse();
    return(date=dateArr.join("/"));
}
console.log(retDate("2025-12-31"));*/

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).

let str="Я учу javascript!";
alert(str.substr(2,3));
alert(str.substr(6,10));*/
//alert(str.substring(2,5));
//alert(str.substring(6,16));
//alert(str.slice(2,5));
//alert(str.slice(6,16));

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
console.log("----------ЗАДАНИЕ 4---------------");
let arrNum=[4, 2, 5, 19, 13, 0, 10];
let sum=0;
for(let i=0;i<arrNum.length;i++){     
    sum+=arrNum[i]**3;
}
console.log("Kвадратный корень из суммы кубов элементов данного массива равен " +Math.sqrt(sum));*/

/*5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.
console.log("----------ЗАДАНИЕ 5---------------");
let a=6,
    b=1,
    c;
let result=(a<b)? c=-(a-b):c=a-b;
console.log(c);*/

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).
document.write("-----------ЗАДАНИЕ 6------------"+"<br/>");
let dateNow= new Date();
function showDate(){  
    let hours=dateNow.getHours(),
        minutes=dateNow.getMinutes(),
        seconds=dateNow.getSeconds(),
        day=dateNow.getDate(),
        month=dateNow.getMonth(),
        year=dateNow.getFullYear();
    if(hours<10){
        hours="0"+hours;
    }else{
        hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }else{
        minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }else{
        seconds;
    }    
    if(day<10){
        day="0"+day;
    }else{
        day;
    }   
    if(+month<10){
        month++;
        month="0"+month;
    }else{
        month++;
    }
    return(hours+":"+minutes+":"+seconds+" "+day+"."+month+"."+year+".");
}

document.write(showDate());
//console.log(dateNow.toLocaleString("ru"));*/



/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.
console.log("----------ЗАДАНИЕ 7---------------");
let str7='aa aba abba abbba abca abea';
let search=str7.match(/ab+a/gi);
console.log(search.join(" "));*/


/*8. Дана почта пользователя test@mail.ru (можно использовать любую)
Написать ф-цию, которая принимает почту и возвращает из нее логин -
слово до знака @
console.log("----------ЗАДАНИЕ 8---------------");
let emailLogin;  
function login(email){
    email=prompt("Введите адрес эл.почты");
    let i= email.indexOf("@");  
    if(i==-1){
        alert("Адрес эл.почты введен неверно!");
    }else{      
    return(emailLogin=email.substring(0,i));
    }
}
alert("Ваш логин :" +login());*/


/*9. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.
console.log("----------ЗАДАНИЕ 9---------------");
function verifyNum(userNum){
    let checkNum=/^\+[0-9]{3}[-\(\s]\d{3}[-\)\s]?\d{6}/g;    
    return(checkNum.test(userNum));
}
console.log(verifyNum("+375(298)297655"));*/


/*10. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
    - весь адрес не должен содержать русские буквы и спецсимволы, кроме
    одной «собачки», знака подчеркивания, дефиса и точки;
    - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
    имя может содержать только буквы, цифры, но не быть первыми и
    единственными в имени;
    - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
    не может быть длиной менее 2 и более 11 символов.
   
    Функция должна возвращать true или false. Используйте регулярные
    выражения.
    console.log("----------ЗАДАНИЕ 10---------------");
   
    function verifyEmail(userEmail){
        //let checkEmail=/[a-z+0-9*]{2,}@[a-z].[a-z]{2,11}/gim;          
        let checkEmail=/^[^0-9][a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,11}.[a-z]{2,11}$/gim;
        /*  +  одна и более,   * ноль или более. */  
    /*return(checkEmail.test(userEmail));
    }
    console.log(verifyEmail("k2a@gmail.ru"));*/

/*11. Вам дана Grid таблица состоящая из массивов, в которых лежат буквы, а также массив с картой чисел, который поможет составить слово из этой Grid таблицы, например: 

    ```
     Grid таблица: 
    
     [
         ['m', 'y', 'e'], 
         ['x', 'a', 'm'], 
         ['p', 'l', 'e']
     ]
     
     карта чисел: 
     
     [1, 3, 5, 8]
     
    ```
    Создайте единый массив из Grid таблицы (можно при помощи метода .flat()) и по нему составьте слово пользуясь картой чисел, чтобы в результате получилось, например:
    
        ```
         'meal'
         
        ```
    Результат функции должен вернуть строку
    
    [kata](https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/javascript)*/

    /*let grid=[
        ['m', 'y', 'e'], 
        ['x', 'a', 'm'], 
        ['p', 'l', 'e']
    ];
    let indices=[1, 3, 5, 8];
    function gridIndex(grid, indices){
        let arrGrid=grid.flat();
        let strGrid="";
        for (let i=0;i<indices.length;i++){
            strGrid=strGrid+arrGrid[indices[i]-1]
        }
        return strGrid;
    }
    console.log(gridIndex(grid, indices));*/
    

    
/*12. Здесь вам в аргументах даны 2 массива: 
    
    Нужно преобразовать каждый массив удалив в нем повторяющиеся числа.
    
    После чего склеить эти два массива, отсортировать и вернуть как результат

    [kata](https://www.codewars.com/kata/56d949281b5fdc7666000004/train/javascript)*/
    /*function testit(a,b){
        let c=a.concat(b);
        return c.sort();
    }
    let result12=testit([1,2,3,3,1,,4],[2,2,6,4,1]),
    arr12=[];
    for(i=0;i<result12.length;i++){
        if(result12[i]==result12[i+1]){
            continue;
        }
        arr12.push(result12[i]);
    }

    console.log(arr12);*/ 
   
       
    

/** Для быстрого составления регулярного выражения и проверки исп. онлайн-
сервис https://regex101.com/.

Для ввода значений можете использовать ф-цию prompt(), либо задавать
значения при инициализации переменных в коде.
Для вывода результатов скриптов вы можете использовать функции: alert()
для вывода всплывающего окна; console.log() для вывода в консоль браузера;
document.write() для вывода в «тело» HTML-документа.*/
/*общее
        + никаких русских символов
        + только "@ - . ", буквы, цифры
        ** символы не идут подряд  «..», «@.», «.@» или «@@», «@», «@-», «--»

    адрес 
        + первая и последняя буква не символы "@ - . _"
        + более 2х символов
        + цифра не на первом месте 

    почтовый сервис после @
        + от 3 до 10 символов

    доменное имя
        + от 2 до 11*/

    let mail = "text@gmail.com";
    let allSymbol=["a", "b", "c", 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',"0","1","2","3","4","5","6","7","8","9","-", ".", "@", "_"];
    let symbol = ["-", ".", "@", "_"];
    function checkMail(mail) {       
        let mailSort = mail.split("");      
        let c = mailSort.filter(n => allSymbol.indexOf(n) === -1);      //никаких русских символов
        alert("Адрес эл.почты содержит недопустимые символы!!!  " +c)   //только "@ - . ", буквы, цифры
        // как сделать, чтобы функция завершилась?

        let mailBefore = mail.slice(0, mail.indexOf("@"));
        let mailAfter = mail.slice(mail.indexOf("@")+1);     
        if (mailBefore.length <=2) return        
        else {
            if (!isNaN(mailBefore[0])) return //первое число
            let mailBeforeArray = mailBefore.split("");
            let count=0;
            for (let i=0;i<mailBeforeArray.length;i++) {
                if (!isNaN(mailBeforeArray[i])) count++;
            } 
            for(j=0;j<symbol.length;j++){            //- первая и последняя буква не символы "@ - . _"
                if(mailBefore[0] == symbol[j]) return
                else {
                    if(mailAfter[mailAfter.length-1] == symbol[j]) return
                }
            }
            let mailBeforPoint=mailAfter.slice(0, mailAfter.indexOf("."));    //почтовый сервис от 3 до 10 символов
            if (mailBeforPoint.length <3 || mailBeforPoint.length >10) return;

            let mailAfterPoint=mailAfter.slice(mailAfter.indexOf(".")+1);     //доменное имя от 2 до 11 символов
            if (mailAfterPoint.length <2 || mailAfterPoint.length >11) return      

        }            
       
    }

    checkMail(mail);  

  