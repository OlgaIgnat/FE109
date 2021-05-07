//1
let a=1;
do {
    console.log(a);
    a++;
}while(a<=50);


for(let b=35; b>=8;b--){
    console.log(b);
}

//2
/* в HTML*/

//3
let sum=0;
for (let i=0; i<=100; i++){
   sum+=i;
}
console.log(sum);

//4

 sum=0;
 for(i=1;i<=5;i++){
     sum+=i;
     console.log("сумма в числе "+i+" ровна "+sum);
 }

 //5
  
 /*for(i=8; i<=56; i++){
     if(i%2==1) continue;
     console.log(i);
 }*/

i=8;
while (i<=56){   
    if(i%2==0) {              
    console.log(i);
    }
    i++; 
 }


 //6
 
 let j;
 let act=0;
 i=1;
 while(i<=10){    
    for(j=1;j<=10;j++){
        act=(i + "*" + j + "=" + (i*j)); 
        console.log(act);
    }
    console.log("------------------");
    i++;
 }

 //7

 let n=1000,
    num=0;
while(true){
    if(n>=50){
        n=n/2;
        num++;
    }else{
        break;
    }
}
console.log(n, num);

//8
let num1;
sum=0;
i=0;
while(true){
    num1= +prompt("Введите число");
    if(isNaN(num1)){    //проверка на не число
        alert("Введите число");
    }else if(num1==0){    //при пробеле, пустой строке, cancel
        break;
    }else
    sum+=num1;
    i++;
    /*console.log( num1+ " " +sum +" "+i);*/
}
console.log("Сумма " +sum +  "    Среднее "+sum/i);


//9
let str="4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let arrStr=str.split(" ");
let max=arrStr[0], min=arrStr[0];
for(i=0; i<arrStr.length;i++){
    if(arrStr[i]>max){
        max=arrStr[i];
    }
    if(arrStr[i]<min){
        min=arrStr[i];
    }
}
console.log("MAX  " +max+  ", MIN "+min);

//10
 let str2=prompt("Введите число"),
     sum2=0;
let arrStr2=str2.split("");
for (i = 0; i < arrStr2.length; i++){
    sum2+= +arrStr2[i];
}
document.write("Число :"  +str2+ "<br/>");
let revStr2;
revStr2=arrStr2.reverse().join("");
document.write("Цифр в числе :" +arrStr2.length+ "<br/>"+"Сумма чисел :"  +sum2+ "<br/>"+"Обратный порядок :" +revStr2+ "<br/>");




