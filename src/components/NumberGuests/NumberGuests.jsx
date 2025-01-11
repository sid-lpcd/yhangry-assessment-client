import "./NumberGuests.scss";

const NumberGuests = ({ numberGuests, setNumberGuests }) => {
  const decreaseGuests = () => {
    setNumberGuests(Math.max(1, numberGuests - 1));
  };

  const increaseGuests = () => {
    setNumberGuests(numberGuests + 1);
  };

  return (
    <div className="guests">
      <div className="guests-controller">
        <button
          className="guests-controller__button guests-controller__button--decrease"
          onClick={decreaseGuests}
        >
          -
        </button>
        <span type="number" className="guests-controller__input">
          {numberGuests}
        </span>
        <button
          className="guests-controller__button guests-controller__button--increase"
          onClick={increaseGuests}
        >
          +
        </button>
      </div>
      <p className="guests__label">Guests</p>
    </div>
  );
};

export default NumberGuests;
