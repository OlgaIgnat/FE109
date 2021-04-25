function greet(name){

  return "Hello, "+name+" how are you doing today?";
}

const areaOrPerimeter = function(l , w) {
  if (l==w) {
    return l*w;
  } else {
    return (l+w)*2;
  }
};

function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/(normPrice*discount/100))
}

