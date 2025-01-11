import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NumberGuests from "../../components/NumberGuests/NumberGuests";
import FilterTag from "../../components/FilterTag/FilterTag";
import SetMenuCard from "../../components/SetMenuCard/SetMenuCard";
import axios from "axios";
import "./SetMenu.scss";

const SetMenu = () => {
  const [menus, setMenus] = useState([]);
  const [filters, setFilters] = useState({});
  const [numberGuests, setNumberGuests] = useState(2);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredMenus, setFilteredMenus] = useState([]);

  const getInfomation = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/menus"
      );
      setMenus(response.data.setMenus);
      setFilters(response.data.filters);
      console.log(response.data);
      console.log(filters);

      setFilteredMenus(menus);
    } catch (error) {}
  };

  const handleFilterClick = (slug) => {
    const newSelectedFilters = selectedFilters.includes(slug)
      ? selectedFilters.filter((filter) => filter !== slug)
      : [...selectedFilters, slug];

    setSelectedFilters(newSelectedFilters);

    const newFilteredMenus = menus.filter((menu) => {
      return menu.cuisines.some((cuisine) =>
        newSelectedFilters.includes(cuisine)
      );
    });

    setFilteredMenus(newFilteredMenus);
  };

  useEffect(() => {
    getInfomation();
  }, []);

  if (!filters.cuisines || !menus) {
    return <div>Loading...</div>;
  }

  return (
    <main className="setmenu">
      <h1 className="setmenu__title">Set Menus</h1>
      <NumberGuests
        numberGuests={numberGuests}
        setNumberGuests={setNumberGuests}
      />
      <section className="filters">
        <h2 className="filters__title">Filters</h2>
        <div className="filter-tags">
          {filters.cuisines?.map((cuisine) => {
            console.log(filters);
            return (
              <FilterTag
                key={uuidv4()}
                filter={cuisine}
                handleClick={handleFilterClick}
                isActive={selectedFilters.includes(cuisine.name)}
              />
            );
          })}
        </div>
      </section>
      <section className="setmenus">
        {filteredMenus.map((menu) => (
          <SetMenuCard key={uuidv4()} menu={menu} />
        ))}
      </section>
    </main>
  );
};

export default SetMenu;
