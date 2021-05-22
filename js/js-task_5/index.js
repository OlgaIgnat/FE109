//1
console.log("ЗАДАНИЕ 1")
function example(num1, num2, num3){
    return ((num1-num2)/num3);
}
console.log (a=example(50,2,20));

//2
console.log("ЗАДАНИЕ 2")
let b,с;

function example1(num){   
    b=num**3;   
    c=num**2;
    console.log(" Куб числа " +num+ " равен " +b+"; квадрат числа "+num+ " равен "+c+".");  
}
example1(10);

//3
console.log("ЗАДАНИЕ 3")
function min(a,b){
    if(a<b){console.log("min="+a)}
    else if(a==b){console.log("Числа равны")}
    else console.log ("min="+b)
}
min(-5,2);

function max(a,b){
    if(a>b){console.log("max="+a)}
    else if(a==b){console.log("Числа равны")}
    else console.log ("max="+b)
}
max(2,2);



//4!!!!
/*Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.*/

/*почему,когда включена консоль, после обновления страница не загружается?*/

let n1=+prompt("Введите первое число"),
    n2=+prompt("Введите второе число"),
    arr1=[];    
function arr(n1,n2){    
    for(let i=n1;i<=n2;i++){   
        arr1.push(i);            
    } 
    return arr1;        
} 
function arrPrint(){ 
        arr(n1,n2);       
        document.write("ЗАДАНИЕ  4:   "+arr1+"<br/>");
}   
arrPrint();
 



 //5
 /*Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.*/
console.log("ЗАДАНИЕ 5")

function isEven(n){
     if(n%2==0){return true;
    }else{ 
         return  false;
        }      
    }
console.log(isEven(21));


//6
/*Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.*/

function createArr(array){ 
    let arrNew=[];   
    for (let i=0; i<array.length; i++){ 
    if(isEven(array[i])!==true)continue; 

    //if(array[i]%2!==0) continue;
     
    arrNew.push(array[i]);
    } 
   document.write("ЗАДАНИЕ 6:   "+arrNew+ "<br/>"); 
}

createArr([21,23,1,22,36,15,-1]);



//7 !!!!!
/*Напишите ф-цию, которая рисует следующую пирамидку (исп. 
    циклы):
        
        ```
        1
        22
        333
        4444
        55555
        666666
        7777777
        88888888
        999999999
        ```
    
        Кол-во рядов должно вводиться параметром. 
        Если пользователь ввел доп.
        параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
        кроме пробела, то пирамида должна быть нарисована этим символом,
        например:
        
        ```
        *
        **
        ***
        ****
        *****         
        ******
        *******
        ********
        *********
        ```*/
       //как  сделать другими символами?
        
       document.write("ЗАДАНИЕ 7:"+'<br/>')
        let number;
        
        function pyramid(number,a){        
            for (let j = 1; j <= number; j++) {
                for (i = 1; i <= j; i++) {
                    if (a==null)
                    {document.write(j);}
                    else document.write(a)
                }
                document.write('<br>');
            }      
        };
        pyramid(8,"*");        

//8
/*Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.*/
console.log("ЗАДАНИЕ 8")
function newArray(array8) {
    console.log(array8[i]);
    i++;
    if(i<array8.length)newArray(array8);   
}
i=0,
newArray([21,23,1,22,36,15,-1]);


//9
/*Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)*/
 
 let h=(new Date().getHours());
 console.log(h);
 document.write("ЗАДАНИЕ 9:  "+ "<br/>")
 function hello(){
    let nameUser=prompt("Как вас зовут?");
     if(h>=5 && h<=12)
     { document.write("Доброе утро, " + nameUser+"!")}
     else if(h>12 && h<17)
     {document.write("Добрый день, " +nameUser+"!")}
     else if(h>=17 && h<=23)
     {document.write("Добрый вечер, " +nameUser+"!")}
     else{document.write("Доброй ночи, " +nameUser+"!")}
 }  
 hello();
    








