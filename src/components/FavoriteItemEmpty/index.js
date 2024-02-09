import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./favoriteItemEmpty.scss";
const FavoriteItemEmpty = () => {
    return (
        <div className="favorite-item-empty">
            <FavoriteBorderIcon className='favorite-item-empty__icon' />
            <p className='favorite-item-empty__text'>Você ainda não tem produtos favoritos!</p>
        </div>
    )
}

export default FavoriteItemEmpty;