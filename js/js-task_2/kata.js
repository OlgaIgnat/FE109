function basicOp(operation, value1, value2){
  if (operation == '+') return (value1 + value2);
  if (operation == '-') return (value1 - value2);
  if (operation == '*') return (value1 * value2);
  if (operation == '/') return (value1 / value2);
  
}

function bonusTime(salary, bonus) {
    if (bonus === true) {
        return ("£"+ salary*10);
    }else { 
        return ("£"+salary);
    }
}

function getGrade (s1, s2, s3) {
    if(((s1+s2+s3)/3)>=90 && ((s1+s2+s3)/3)<=100) return "A";
    if(((s1+s2+s3)/3)>=80 && ((s1+s2+s3)/3)<=90) return "B";
    if(((s1+s2+s3)/3)>=70 && ((s1+s2+s3)/3)<=80) return "C";
    if(((s1+s2+s3)/3)>=60 && ((s1+s2+s3)/3)<70) return "D";
    if(((s1+s2+s3)/3)>=0 && ((s1+s2+s3)/3)<60) return "F";
}
 