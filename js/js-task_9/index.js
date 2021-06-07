
let head = document.getElementsByTagName("head");
let style = document.createElement("style");
document.head.appendChild(style); 
style.innerHTML = `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Itim, cursive;
  font-style: normal;
  font-weight:normal;
  font-size: 14px;
  line-height: 26px;
  color: #e6e8eb;
}
h1{
  margin-top: 20px;
  font-size: 52px;         
  color: #777474;          
  margin-bottom: 20px;
}        
header{
  display: flex;
  justify-content: center;
  align-items:flex-end;
  margin-bottom: 30px;
}
section{
  display: flex;
  flex-direction: column;
}
.todo_notes{
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.todo_list{
  display: block;
  margin: 20px auto;
  padding: 30px;
  background-color: #e7ebee;            
  width: 800px;
  border: 2px solid;
  border-color: #918d8d;
  box-shadow: 0 0 10px #504d4d; 
  border-radius: 10px;
} 
.todo_wraper{
  display: flex;
  width: 100%;
  justify-content: space-between;

} 
input{
  font-family: Itim, cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 26px;
  color: rgb(255, 20, 147);
  width: 650px;
  height: 60px;
  border: none;
  box-shadow: 0 0 10px #504d4d;
  border-radius: 10px;
  outline:none;
  padding: 10px;
}
.button{
  font-family: Itim, cursive;
  font-weight: 800;
  font-size: 20px;
  color: ghostwhite;
  width: 70px;
  height: 60px;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;            ; 
  background-color: rgb(255, 20, 147);           
  box-shadow: 0 0 10px #504d4d;
} 
img{
  padding: 10px;
  width: 80px;
  height: 80px;
}
li{
  display: flex;
  list-style-type:none;

}
span{
  padding: 10px;
  background-color:white;
  font-size: 26px;
  height: 50px;
  width: 590px;            
  color: rgb(255, 20, 147);
  border-radius: 10px;
  box-shadow: 0 0 10px #9c9a9a;
 margin-bottom: 10px;
}       
.button_delete,
.button_edit,
.button_done{
  display: block;
  width: 50px;
  height: 50px; 
  background-repeat: no-repeat;            
  background-size: cover;
  border: none;
  background-color: white;
  border-radius: 10px;
}
.button_done{                
  background-image: url(img/img4.png);
  margin-right: 10px;
}
.button_delete{
  background-image: url(img/img5.png);
  margin-left: 10px;
}
.button_edit{
  background-image: url(img/img7.png);
  margin-left: 10px;
  background-color: #e7ebee;
  border-radius: 0px;
  width: 55px;
}
.change{
  text-decoration:line-through ;
  color: rgb(105, 223, 168);
}
`
let createList = function() {
     
     let notes = document.getElementById("todo_input"); //input
     let notesParent = notes.closest("section"); //родитель input (div)   
     let arrayNotes = notes.value.split(". "); // получаем значение input и переводим в массив
     let ul = document.createElement("ul"), list;   
     
      arrayNotes.forEach(elem => {          
      list = document.createElement("li");
      let text = document.createElement("span");
      text.innerHTML = elem;
      list.appendChild(text);      
      ul.appendChild(list);      

      let btnDone = document.createElement("button");
      btnDone.classList.add("button_done");      
      list.appendChild(btnDone);
      list.insertBefore(btnDone, text);     
      btnDone.addEventListener("click", function(){          
          text.classList.toggle("change");
      });     

      let btnDelete = document.createElement("button");
      btnDelete.classList.add("button_delete");
      list.appendChild(btnDelete);
      btnDelete.addEventListener("click", function(){
        list.remove();                  
      });

      let btnEdit = document.createElement("button");
      btnEdit.classList.add("button_edit");
      list.appendChild(btnEdit);
      btnEdit.addEventListener("click", function(){
        let change = confirm("Do you want to edit a note?");
        if(change){           
          text.innerHTML = prompt("New note");                        
       }else{
        confirm("You refused to make changes!");
       }
       
      });
    
      /* хотела сделать кнопку удаления всех созданных строк,  но почему-то не работает???*/  

    /*let toDoList = document.getElementsByClassName("todo_list");      
      let btnDeleteAll =  document.createElement("button");
      btnDeleteAll.classList.add("button_delete_all");
      toDoList.appendChild(btnDeleteAll);
      btnDeleteAll.addEventListener("click", function(){
        ul.remove();
        this.remove();
      });*/   
      
    });  

    notesParent.appendChild(ul);
    notes.value = "";
  };

 /* let h1 = document.getElementsByTagName("h1");
  h1.addEventListener("mouseover", function(){
    console.log(this);
    this.style.color = "rgb(255, 20, 147)"; 
  }) ;*/


  