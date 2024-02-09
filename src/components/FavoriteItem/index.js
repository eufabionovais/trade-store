import React, { useState } from 'react';
import TrashIcon from "../../assets/img/icons/icon-trash.svg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import "./favorite-item.scss";
const FavoriteItem = ({ item, removeItem }) => {

    let [isFavorite, setFavorite] = useState(item.isFavorite);


    return (
        <div className="favorite-item">
            <div className="favorite-item__image">
                <img src={item.image} alt="" />
                <div className="favorite-item__icon-wrapper" onClick={() => setFavorite(isFavorite = !isFavorite)}>
                    {
                        isFavorite ? <Favorite className='favorite-item__icon' /> : <FavoriteBorderIcon className='favorite-item__icon' />
                    }
                </div>
            </div>
            <div className="favorite-item__content">
                <h4 className="favorite-item__title">{item.title}</h4>
                <p className="favorite-item__ref"><b>Ref:</b> {item.ref}</p>
            </div>
            <div className="favorite-item__price">
                R$ {item.price}
            </div>
            <div className="favorite-item__actions">
                <button className="favorite-item__button favorite-item__button--add button button-md button-light-blue">
                    Adicionar o carrinho
                </button>
                <button className="favorite-item__button favorite-item__button--remove  button" onClick={() => removeItem(item.id)}>
                    <img src={TrashIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default FavoriteItem;