import React from 'react'
import './Book.css'

export default function Book(props){
    const {image, title, publisher, price}= props;
    return(
        
        <div className="book">
            <div className="book-image">
                <img src={image} alt="Book"/>
            </div>
            <div className="book-info">
                <h2>{title}</h2>
                <p className="book-author">{publisher}</p>
                <p className="book-price">${price}</p>
                <button>Add to Cart</button>
            </div>
        </div>



    );
}