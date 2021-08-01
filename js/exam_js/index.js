// const body = document.querySelector("body");
// const lockPadding = document.querySelectorAll(".lock_padding");//получаем все объекты с классом .lock_padding(фиксированные)
// console.log(lockPadding);
// const timeout = 800;


// function bodyLock(){   
//     const lockPaddingValue = window.innerWidth - document.querySelector('.container').offsetWidth + 'px';
//     console.log(lockPaddingValue);
//      if(lockPadding.length > 0){
//          for(let i = 0; i < lockPadding.length; i++){
//              const el = lockPadding[i];           
//              el.style.paddingRight = lockPaddingValue;
//          }
//      }
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');     
//    }
  
//   function bodyUnLock(){
//        setTimeout(function(){
//            if(lockPadding.length > 0){
//                for (let i = 0; i< lockPadding.length; i++){
//                    const el = lockPadding[i];
//                    el.style.paddingRight = '0px';            
//                }
//            }
//            body.style.paddingRight = '0px';
//           body.classList.remove('lock');
//        }, timeout);       
//   }

 
 /* этот код помечает картинки, для удобства разработки */
 let i = 1;
 for(let li of carousel.querySelectorAll('li')) {
   li.style.position = 'relative';
   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
   i++;
 }

 let width = 280; // ширина картинки
 let count = 4; // видимое количество изображений

 let list = carousel.querySelector('ul');
 let listElems = carousel.querySelectorAll('li');
 let listElemsA = carousel.querySelectorAll('a');
 let listElemsImg = carousel.querySelectorAll('img');
 console.log(listElemsA);

 listElemsA.forEach(el => {         
      el.setAttribute("target", "_blank");
      console.log(el);    
  });

 let position = 0; // положение ленты прокрутки

 carousel.querySelector('.prev').onclick = function() {   // сдвиг влево  
   position += width * count;   
   position = Math.min(position, 0)
   list.style.marginLeft = position + 'px';
 };

 carousel.querySelector('.next').onclick = function() {    // сдвиг вправо  
   position -= width * count;  
   position = Math.max(position, -width * (listElems.length - count));
   list.style.marginLeft = position + 'px';
 }; 


 var modal = document.getElementById("my_modal");
 var modal_content = document.getElementsByClassName("modal_content")
 var popupAbout = document.getElementById("popup");
 var span = document.getElementsByClassName("close_modal_window")[0];

 popupAbout.onclick = function () {
    //bodyLock();   
    modal.style.visibility = "visible";
    modal.style.opacity = "1";     
 }

 span.onclick = function () {
    //bodyUnLock();
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";    
 }

 window.onclick = function (event) {
    //bodyUnLock();
    if (event.target == modal) {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";        
    }
}