import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Component/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Catalog from './Component/Catalog/Catalog';
import Footer from './Component/Footer/Footer';
import {DATA} from './data';
import Product from './Component/Product/Product';
import Cart from './Component/Cart/Cart';
import { cartDataContext } from './cartDatacontext';


function App() {
  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("catalog")) || []); //состояние корзины
  const addToCart = async function(id) {  // при нажатии на кнопку Добавить!
    let newData = DATA.filter(elem=> elem.id ===id); //из даты берет 1 элемент
    let countData = [...cartData]; // дубликат массива нашего state 
    let flag =false; // есть товар в корзине или нет
    cartData.filter((elem)=> {
      if (elem.id===id) {
        flag = true;
        return true
      } //есть элемент в корзине
      else {
        return false;
      }
    })

    if (flag) { // товар уже в корзине
      let indexArray = cartData.findIndex(elem => elem.id===id);       
      countData[indexArray].count = countData[indexArray].count+1;
      // console.log(countData);
      await setCartData([...countData]); //[Яблоко, Груша]
      await localStorage.setItem("catalog",JSON.stringify([...countData]));


    } else { // нет в корзине
      newData[0].count=1; // по умолчанию 1 товар 
      await setCartData([...newData, ...countData]); //[Яблоко, Груша]
      await localStorage.setItem("catalog",JSON.stringify([...newData, ...countData]));
    }

    

    // await setCartData([...newData, ...countData]); //[Яблоко, Груша]
    // await localStorage.setItem("catalog",JSON.stringify([...newData, ...cartData]));
}


  return (
    <cartDataContext.Provider value={{cartData, setCartData}}>
     <div className="page">
      <Header />
      <Route path="/shop" exact>
        <Catalog products={DATA} addToCart={addToCart}/>
      </Route>
      <Switch>
        <Route path="/product/:id">
            <Product products={DATA} addToCart={addToCart} />
        </Route>
      </Switch>
      <Route path="/cart">
        <Cart cartData={cartData}/>
      </Route>
      <Footer />
    </div>
    </cartDataContext.Provider>
  );
}

export default App;
