import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
interface WishlistCardProps {
  item: Record<string, any>;
  closeSubmenu: () => void;
}
const WishlistCard = ({ item, closeSubmenu }: WishlistCardProps) => {
  const handleCloseMenu = () => {
    closeSubmenu();
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

        <button
          className="wishlist-card--link-button"
          onClick={handleCloseMenu}
        >
          <Link to={"movies/" + item.id}>See More</Link>
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
