import React, { useState, useEffect } from 'react';
import TrashIcon from "../../assets/img/icons/icon-trash.svg";
import IncrementalField from 'components/IncrementalField';
import "./cart-item.scss";
const CartItem = ({ item, removeItem }) => {



    return (
        <div className="cart-item">
            <div className="cart-item__image">
                <img src={item.image} alt="" />
            </div>
            <div className="cart-item__content">
                <h4 className="cart-item__title">{item.title}</h4>
                <p className="cart-item__total-items"> {item.addedItems}</p>
            </div>
            <div className="cart-item__increment">
                <IncrementalField />
            </div>
            <div className="cart-item__price">
                <span className="cart-item__price--regular">R$ {item.regularPrice}</span>
                <span className="cart-item__price--sales">R$ {item.salesPrice}</span>
            </div>
            <div className="cart-item__actions">
                <button className="cart-item__button cart-item__button--remove  button" onClick={() => removeItem(item.id)}>
                    <img src={TrashIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default CartItem;