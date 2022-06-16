import React from "react";
import { Link } from "react-router-dom";
import Button from "../../General/Button/Button";
import { removeFromWishlist } from "../../../redux/slices/wishlistSlice";
import "./style.css";
import { useDispatch } from "react-redux";
interface WishlistCardProps {
  item: Record<string, any>;
  closeSubmenu: () => void;
}
const WishlistCard = ({ item, closeSubmenu }: WishlistCardProps) => {
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    closeSubmenu();
  };

  const removeFromTheWishlist = () => {
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <div className="wishlist-card--wrapper">
      <div className="wishlist-card--image">
        <img src={item.poster.cardImageUrl} alt={item.title} />
      </div>
      <div className="wishlist-card--content">
        <div className="">
          <h2 className="leading-3">{item.title}</h2>
          <span className="text-xs">{item.releaseYear}</span>
        </div>
        <div className="flex flex-col gap-1">
          <Button secondary size={"small"} onClick={handleCloseMenu}>
            <Link to={"movies/" + item.id}>See More</Link>
          </Button>
          <Button secondary size={"small"} onClick={removeFromTheWishlist}>
            Remove from the list
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
