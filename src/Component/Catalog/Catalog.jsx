import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Catalog  = function({products, addToCart}) {
    // console.log(products)

    useEffect(()=> {
        
    })


    return(
        
        <section className="product-list">
        <div className="container">   
           
        <div className="product-list__wrapper">  
        {products.map(item => {
           return (
           <div className="product-list__item" key={item.id}>
                <div className="product-list__item-img" style={{backgroundImage: `url(${item.image})`}}></div>
                <div className="product-list__item-title"><Link to={"/product/"+item.id}>{item.title}</Link></div>
                <div className="product-list__item-desc">{item.description}</div>
                <div className="product-list__item-bot">
                        <div className="product-list__item-price">$ <span>{item.price}</span></div>
                        <div className="product-list__item-buy">
                            <button className="btn btn-pink" onClick={()=>addToCart(item.id)}>Add</button>
                        </div>
                        {/* <div>{totalCount}</div> */}
                    </div>
            </div>
           )

        })
        }
        </div>
        </div>
        </section>
        


    )
}

export default Catalog;