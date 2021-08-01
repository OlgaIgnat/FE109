// const popupLinks = document.querySelectorAll(".popup_link");//получаем все объекты с классом .popup_link
// console.log(popupLinks);
// const body = document.querySelector("body");
// const lockPadding = document.querySelectorAll(".lock_padding");//получаем все объекты с классом .lock_padding(фиксированные)
// console.log(lockPadding);

// let unlock = true;//чтобы не было двойных нажатий
// const timeout = 800;

// if (popupLinks.length > 0){
//     for(let index = 0; index < popupLinks.length; index++){
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener("click", function(e){
//             const popupName = popupLink.getAttribute('href').replace('#','');
//             const curentPopup = document.getElementById(popupName);
//             console.log(curentPopup);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         });
//     }
// }
// const popupCloseIcon = document.querySelectorAll('.close_popup');
// if (popupCloseIcon.length >  0){
//     for (let i = 0; i < popupCloseIcon.length; i++){
//         const elem = popupCloseIcon[i];
//         elem.addEventListener('click', function (e) {
//             popupClose(elem.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }

// function popupOpen(curentPopup) {
//     console.log(curentPopup);
//     if(curentPopup && unlock){
//         const popupActive = document.querySelector('.popup .open');
//         console.log(popupActive);
//         if(popupActive){
//             popupClose(popupActive, false);
//         }            
//         }else{
//              bodyLock();            
//          }
//         curentPopup.classList.add('open');
//         curentPopup.addEventListener('click', function(e) {
//            if (!e.target.closest(".popup_content")){
//                popupClose(e.target.closest('.popup'));
//            } 
//         });
//     }


// function popupClose(popupActive, doUnlock = true){
//     if(unlock){
//         popupActive.classList.remove('open');
//          if(doUnlock){
//              bodyUnLock();
//          }

//     }
// }

// function bodyLock(){//   
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wraper').offsetWidth + 'px';
//     if(lockPadding.length > 0){
//         for(let i = 0; i < lockPadding.length; i++){
//             const el = lockPadding[i];//            
//             el.style.paddingRight = lockPaddingValue;
//         }
//     }
//    
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;
//     setTimeout(function(){
//         unlock = true;
//     }, timeout);
// }

// function bodyUnLock(){
//     setTimeout(function(){
//         if(lockPadding.length > 0){
//             for (let i = 0; i< lockPadding.length; i++){
//                 const el = lockPadding[i];
//                 el.style.paddingRight = '0px';            
//             }
//         }
//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     },timeout);

//         unlock = false;
//         setTimeout(function(){
//             unlock = true;
//         }, timeout); 
//}
/*---------------------------------------------------------------------------------------------------------------*/

const popupLinks = document.querySelectorAll(".popup_link");
console.log(popupLinks);
const popupClose = document.querySelectorAll(".popup_close");
console.log(popupClose);
popupLinks.forEach(function(item){
    item.addEventListener('click', function(){
        const popupName = item.getAttribute('href').replace('#','');
let a = document.getElementById(popupName);
console.log(a);
        document.getElementById(popupName).style.display = "block";
    })    
})