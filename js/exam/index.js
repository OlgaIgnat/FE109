

    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classList.add('element-show');
          }
        });
      }
      let options = { threshold: [0.2] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.element-animation');
      for (let elm of elements) {
        observer.observe(elm);
      }

/*-----СЛАЙДЕР------*/    

var slideIndex = 1;
showSlides(slideIndex);
// Вперед/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}
 function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  /* почему-то выдает ошибку на этой строке, когда в js подключен и слайдер и галерея???*/
  dots[slideIndex-1].className += " active";
}

/*---ГАЛЕРЕЯ---*/
var galleryUp = ["../img/img2.jpg","../img/img8.jpg","../img/img51.jpg","../img/img11.jpg","../img/img48.jpg","../img/img50.jpg"];
var galleryMiddle = ["../img/img1.jpg", "../img/img3.jpg","../img/img5.jpg","../img/img6.jpg","../img/img7.jpg","../img/img52.jpg","../img/img53.jpg","../img/img9.jpg","../img/img12.jpg","../img/img14.jpg","../img/img15.jpg","../img/img16.jpg","../img/img17.jpg","../img/img18.jpg","../img/img19.jpg","../img/img20.jpg","../img/img21.jpg","../img/img22.jpg","../img/img23.jpg","../img/img24.jpg","../img/img25.jpg","../img/img27.jpg","../img/img30.jpg","../img/img31.jpg","../img/img32.jpg","../img/img33.jpg","../img/img34.jpg","../img/img35.jpg","../img/img36.jpg","../img/img38.jpg","../img/img39.jpg","../img/img40.jpg","../img/img41.jpg","../img/img43.jpg", "../img/img45.jpg", "../img/img46.jpg"];
var galleryEnd = ["../img/img13.jpg","../img/img26.jpg","../img/img28.jpg","../img/img29.jpg","../img/img37.jpg","../img/img44.jpg"];
for (let i = 0; i< galleryUp.length; i++){
  var newDiv = document.createElement("div"); 
  var image = document.createElement("img");
  image.src = galleryUp[i];  
  newDiv.setAttribute("class","memory_gallery");
      newDiv.appendChild(image);      
       document.querySelector("#gallery_up").appendChild(newDiv);
  }
for (let i = 0; i< galleryMiddle.length; i++){
  var newDiv = document.createElement("div"); 
  var image = document.createElement("img");
  image.src = galleryMiddle[i];  
  newDiv.setAttribute("class","memory_gallery");
      newDiv.appendChild(image);      
       document.querySelector("#gallery_middle").appendChild(newDiv);
  }
for (let i = 0; i< galleryEnd.length; i++){
    var newDiv = document.createElement("div"); 
    var image = document.createElement("img");
    image.src = galleryEnd[i];  
    newDiv.setAttribute("class","memory_gallery");
        newDiv.appendChild(image);      
        document.querySelector("#gallery_end").appendChild(newDiv);
  } 

/*----MENU-----*/
  
function openbox(id) {
  var menuBlock = document.querySelectorAll(".menu_block");

  for (let i = 0; i < menuBlock.length; i++) {
    if (menuBlock[i].id == id) {
      menuBlock[i].style.display = (menuBlock[i].style.display == 'none')? 'block' : 'block';
    } else {
      menuBlock[i].style.display = 'none';
    }
  }
}

  
     
    
        
