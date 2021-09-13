

import React, { useState, useContext, useEffect, useRef } from 'react'
import { cartDataContext } from '../../cartDatacontext'

const Cart = function() {
    const {cartData, setCartData} = useContext(cartDataContext);
    const cartCountInput = useRef([React.createRef(), React.createRef()]);
    const [totalPrice, setTotalPrice] = useState(0)
    // const cartCountInput = Array.from({length: cartData.length}, a => useRef(null));;

    const deleteAllCart = async function() {
        setCartData([]);
        await localStorage.removeItem("catalog");
    }
    const deleteItemFromCart = async function(key) {
        let newArr = []
        setCartData(prevState => {
            newArr = [...prevState.filter((product,index) => index!==key)];
            return newArr;

        });
        // await localStorage.setItem("catalog",JSON.stringify(newArr))
    }
    const changeItemCount = function(key) {
        // debugger
        // const value = (cartCountInput.current[key].current.value);
        setCartData(prevState => {
            
            return prevState.map((elem, index) => {
                if (index===key) {
                    elem.count=+cartCountInput.current[key].current.value;
                }
                return elem;
            })
        })

    }
    useEffect(()=>{
        if (cartData.length!==0) {
            localStorage.setItem("catalog",JSON.stringify(cartData))
        }
        let totalPriceArray =[];
        totalPriceArray = cartData.map((item) => item.price*item.count);
        setTotalPrice(0);
        totalPriceArray.forEach(element => {
            setTotalPrice(prevState => {
                return prevState + element
            })
        });
        // setTotalPrice(cartData.map())
    }, [cartData])



    if (cartData.length!==0) {
        return(
            <section className="cart-list product-list">
                
                        <div className="container">                          
                        
                        <div className="cart-list__wrapper">
                                <div className="cart-list__title">Cart</div> 
                                                
                                {cartData.map((product, index)=> {
                                return (
                                    <div  className="cart-list__item" key={index}>
                                        
                                        <div className="cart-list__item-img"> <img src={product.image} alt="" /></div>
                                        <div className="cart-list__item-title">{product.title}</div>
                                        <div className="cart-list__item-count"><input min="1" type="number" 
                                        value={product.count} ref={cartCountInput.current[index]} onChange={()=>changeItemCount(index)} /></div>
                                        <div className="cart-list__item-price">$ <span>{product.price}</span></div>
                                        <div className="cart-list__item-price">$ <span>{(product.price*product.count).toFixed(2)}</span></div>
                                        <div className="cart-list__item-delete"><i className="ico ico-delete" onClick={()=> {
                                            deleteItemFromCart(index)
                                        }}></i></div>
                                    </div>
                                )
                            }) }
                        </div>
                            <div className="cart-list__total-price">
                                <div><button onClick={deleteAllCart} >Clear all</button><span></span> </div>
                            </div> 
                            <div className="cart-list__total-price">
                                <div>Total amount $ {totalPrice.toFixed(2)}<span></span> </div>
                            </div> 
                            
                        </div>    
                            
            </section>
        )
    }
    else {
        return(
            <section className="cart-list product-list">
                
                        <div className="container">
                            
                        
                        <div className="cart-list__wrapper">
                                <div className="cart-list__title">Cart is empty</div>                                    
                        </div>
                                
                            
                        </div>    
                            
            </section>
        )

    }
    
}




class Cart2 extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        this.state = {cartData: this.props.cartData}
        this.deleteAllCart = this.deleteAllCart.bind(this);
        this.deleteItemFromCart = this.deleteItemFromCart.bind(this);
        this.changeItemCount = this.changeItemCount.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this)
    }
    componentWillMount() {
        // const localData = JSON.parse(localStorage.getItem("catalog"));
        // this.setState({cartData: JSON.parse(localStorage.getItem("catalog"))}) /* до рендера запускается */
    }
    componentDidMount() {
        let locatData = JSON.parse(localStorage.getItem("catalog")) || [];
        this.setState({cartData: locatData})
    }
    async deleteAllCart() {
        // this.props.cartData=[];
        this.setState({cartData: []});
        await localStorage.removeItem("catalog");
    }
    async deleteItemFromCart(key) {
        await this.setState(prevState => ({
            cartData: prevState.cartData.filter((product,index) => index!==key)

        }));
        await localStorage.setItem("catalog",JSON.stringify(this.state.cartData))
    }
    handleChangeNumber(event) {
        console.log(event.target.value);

    }
    changeItemCount(key, value) {
        
        this.setState(prevState => ({
            
            cartData: prevState.cartData.map((elem, index) => {
                if (index===key) {
                    elem.count=value;
                }
                return elem;
            })
        }))

    }
    render() {
        // debugger
        if (this.state.cartData.length!==0) {
            return(
                <section className="cart-list product-list">
                    
                            <div className="container">
                             
                            
                            <div className="cart-list__wrapper">
                                    <div className="cart-list__title">Cart</div> 
                                                    
                                    {this.state.cartData.map((product, index)=> {
                                    return (
                                        <div  className="cart-list__item" key={index}>
                                            
                                            <div className="cart-list__item-img"> <img src={product.image} alt="" /></div>
                                            <div className="cart-list__item-title">{product.title}</div>
                                            <div className="cart-list__item-count"><input min="1" type="number" 
                                            value={product.count} onChange={()=>this.changeItemCount(0, 5)} /></div>
                                            <div className="cart-list__item-price">$ <span>{product.price}</span></div>
                                            <div className="cart-list__item-delete"><i className="ico ico-delete" onClick={()=> {
                                                this.deleteItemFromCart(index)
                                            }}></i></div>
                                        </div>
                                    )
                                }) }
                            </div>
                                <div className="cart-list__total-price">
                                    <div><button onClick={this.deleteAllCart} >Clear all</button><span></span> </div>
                                </div> 
                                <div className="cart-list__total-price">
                                    <div>Total amount $ <span></span> </div>
                                </div> 
                              
                            </div>    
                              
                </section>
            )
        }
        else {
            return(
                <section className="cart-list product-list">
                    
                            <div className="container">
                             
                            
                            <div className="cart-list__wrapper">
                                    <div className="cart-list__title">Cart is empty</div>                                    
                            </div>
                                 
                              
                            </div>    
                              
                </section>
            )

        }
        
    }
}





export default Cart;


