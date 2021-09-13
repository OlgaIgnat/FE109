
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Product = function({products, addToCart}) {
   
    const [currentProduct, setCurrentProduct] = useState([]);
    // debugger
    const {id} = useParams(); //для получения данных про id из URL
    const currentId = +{id}.id;

    useEffect(()=>{
        // debugger
        let newArr = products.filter((elem)=> elem.id===currentId);
        setCurrentProduct(newArr);
    },[currentId])

    return(
        <section className="product">           
            <div className="container">
            {currentProduct.length!==0 ?

            currentProduct.map((product) => {
                return (
                    <div className="product__wrapper" key={product.id}>
                 
                        <div className="product__info-img">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="product__info">
                            <h2>{product.title}</h2>
                            <div className="product__info-review">
                                <div className="starts-rating">
                                    <i className="ico ico-stars-active"></i>
                                    <i className="ico ico-stars-active"></i>
                                    <i className="ico ico-stars-active"></i>
                                    <i className="ico ico-stars-active"></i>
                                    <i className="ico ico-stars"></i>
                                </div>
                                <p>132 reviews</p>
                            </div>
                            <p className="product__info-desc">{product.description}</p>

                            <div className="product__info-footer">
                                <div className="product__info-price">$ <span>{product.price}</span></div>
                                
                                <button className="btn btn-pink" onClick={()=>addToCart(product.id)}>Add to cart</button>
                            </div>  
                            
                        </div>
                        
                    </div>
                )
                
            }) : 
            <div className="product__wrapper">Товар не найден</div>
            
            }
                </div>
            </section>
    )
}




export default Product;