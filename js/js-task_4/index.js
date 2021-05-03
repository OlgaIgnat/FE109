//1
document.write("              / ЗАДАНИЕ №1:   ");
let arrNum=[1, 2, 3, 4, 5];
for(let i=0;i<arrNum.length; i++){
    document.write(arrNum[i])
}

document.write("              / ЗАДАНИЕ №2:   ");
//2
let arrNum1=[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i=0;i<arrNum1.length; i++){    
    if (arrNum1[i]>-10 && arrNum1[i]<-3){
    document.write("   " +arrNum1[i]+ ";");
    }

}


document.write("             /ЗАДАНИЕ №3:   ");
//3

//с for
let arr=[];
for(let i=23; i<=57; i++){
    arr.push(i);
}
document.write(" ВАРИАНТ №1:" +arr);

//с while 
let arr1=[];
let i=23;
while(i<=57){   
    arr1.push(i);
    i++;
}
document.write(" ВАРИАНТ №2:"+arr1);

let result=0; 
for(let i=23; i<=57; i++){
    result+=i;
}
document.write(" СУММА  :" +result);


document.write("             /ЗАДАНИЕ №4:   ");
//4
let arrStr=['10', '20', '30', '50', '235', '3000'];
for(let i=0; i<arrStr.length; i++){
    if(arrStr[i][0]==1 || arrStr[i][0]==2 || arrStr[i][0]==5){
    document.write( arrStr[i]+  " ; ");
    }
}

//5
//в HTML


//6
let arrColor=["Красный", "Синий", "Зеленый", "Белый"];
console.log(arrColor);
arrColor.push("Серый");
console.log(arrColor[arrColor.length-1]);


document.write("             /ЗАДАНИЕ №7:   ");
//7
let arrUser=[];
let num1;
    
while(true){
    num1= +prompt("Введите число");    
    if(num1==0){    //при пробеле, пустой строке, cancel
        break;
    }
    arrUser.push(num1);
}
console.log(arrUser);
document.write( "Вы ввели числа" +arrUser);

arrUser.sort(function (a,b){
    return a-b;
})
console.log(arrUser);
document.write( "   /Числа отсортированы " +arrUser);


//8

let arrNum2=[12, false, 'Текст', 4, 2, -5, 0],
    arrNum22=[];
for(i=0;i<arrNum2.length;i++){
    arrNum22.unshift(arrNum2[i])
}
console.log(arrNum2);
console.log(arrNum22);
console.log(arrNum2.reverse());

//9















 



