

export let clickCart = function(productID, productprice) { //id:5,price:40
    let totalPrice = 0;
    let totalCount = 0;
    let cookiePattern = `id:${productID},price:${productprice}`; 

    let cookieProducts = getCookie("userProducts") || ""; //"id:1,price:20 |id:1,price:20 |id:1,price:20"
    
    let cookieArr = cookieProducts.split(" |"); // ["id:1,price:20", "id:1,price:20", "id:1,price:20]
    // cookieArr.pop();
    cookieArr.unshift(cookiePattern);//["id:5,price:40", "id:1,price:20", "id:1,price:20", "id:1,price:20]
    
    cookieArr.map((item) => {
        if (item) {
            let itemArr = item.split(","); // [["id:5","price:40"], [], [], []]
            let price = itemArr[1].replace("price:",""); //"40"
            totalPrice+= +price;
            totalCount++;
        }           
        
    })
    let cartBlock = document.querySelector(".cartCount");
    cartBlock.innerHTML = totalCount;

    let cookieText = cookieArr.join(" |"); // "id:5,price:40 |id:1,price:20 |id:1,price:20 |id:1,price:20"

    document.cookie = `userProducts=${cookieText}`; //возврат в куки
}





export let loadCart = function() {
    let totalPrice = 0;
    let totalCount = 0;   

    let cookieProducts = getCookie("userProducts") || ""; //"id:1,price:20 |id:1,price:20 |id:1,price:20"
    
    let cookieArr = cookieProducts.split(" |"); // ["id:1,price:20", "id:1,price:20", "id:1,price:20]   
    
    cookieArr.map((item) => {
        if (item) {
            let itemArr = item.split(","); // [["id:5","price:40"], [], [], []]
            let price = itemArr[1].replace("price:",""); //"40"
            totalPrice+= +price;
            totalCount++;
        }           
        
    })
   
    let cartBlock = document.querySelector(".cartCount");
    cartBlock.innerHTML = totalCount;    
}

export let getCookie = function(name) {  //получение данных из cookie
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}  
// userProducts = id:1,price:17;id:2,price:20