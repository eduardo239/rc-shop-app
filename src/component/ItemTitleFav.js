import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { NavLink } from "react-router-dom";

function ItemTitleFav({
  alreadyFavorite,
  handleRemoveFromFavorite,
  handleAddToFavorite,
  item,
}) {
  return (
    <div className="item-wrapper__favorite">
      {!!alreadyFavorite}
      {alreadyFavorite ? (
        <NavLink
          className="icon-active"
          to="#"
          onClick={() => handleRemoveFromFavorite(item._id)}
        >
          <MdOutlineStarBorderPurple500 />
        </NavLink>
      ) : (
        <NavLink to="#" onClick={() => handleAddToFavorite(item._id)}>
          <MdOutlineStarBorderPurple500 />
        </NavLink>
      )}
    </div>
  );
}

export default ItemTitleFav;
