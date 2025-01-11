import { v4 as uuidv4 } from "uuid";
import "./SetMenuCard.scss";

const SetMenuCard = ({ menu }) => {
  return (
    <div className="menu-card">
      <img src={menu.thumbnail} alt={menu.name} className="menu-card__image" />
      <div className="menu-card__content">
        <div className="menu-card__cuisines">
          {menu.cuisines.map((cuisine) => (
            <div className="menu-card__cuisine" key={uuidv4()}>
              {cuisine}
            </div>
          ))}
        </div>
        <h3 className="menu-card__title">{menu.name}</h3>
        <p className="menu-card__description">{menu.description}</p>
        <p className="menu-card__price">£{menu.price}</p>
      </div>
    </div>
  );
};

export default SetMenuCard;
