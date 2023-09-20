import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favoritesSlice";
import { favoritesSelector } from "../../store/favoriteSelectors";

const FavoriteButton = ({ recipy }) => {

  console.log("This is the recipy in FavoriteButton: ");
  console.log(recipy);

  const dispatch = useDispatch();

  const favorites = useSelector(favoritesSelector);
  const isFavorite = favorites.filter((favorite) => favorite.idMeal === recipy.idMeal).length > 0;

  const onClick = (rec) => {
    if (isFavorite) {
      return dispatch(removeFavorite(rec));
    } else {
      return dispatch(addFavorite(rec));
    }
  };

  return (
    <button type="button" onClick={() => onClick(recipy)} className="border-4 p-5 rounded-lg border-black">
      {isFavorite ? (
        <span className="text-red-600">Enlever des favoris</span>
      ) : (
        <span className="text-green-500">Ajouter aux favoris</span>
      )}
    </button>
  );
};

export default FavoriteButton;
