import "./FilterTag.scss";

const FilterTag = ({ filter, handleClick, isActive }) => {
  return (
    <button
      className={`filter-tags__tag ${
        isActive ? "filter-tags__tag--active" : ""
      }`}
      onClick={() => handleClick(filter.name)}
    >
      {filter.name}
    </button>
  );
};

export default FilterTag;
