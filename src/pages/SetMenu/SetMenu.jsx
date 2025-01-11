import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NumberGuests from "../../components/NumberGuests/NumberGuests";
import FilterTag from "../../components/FilterTag/FilterTag";
import SetMenuCard from "../../components/SetMenuCard/SetMenuCard";

const SetMenu = () => {
  let menus = [];
  let filters = {};
  const [numberGuests, setNumberGuests] = useState(2);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredMenus, setFilteredMenus] = useState([]);

  const getInfomation = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/menus"
      );
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    getInfomation();
  }, []);

  return (
    <main>
      <h1>Set Menus</h1>
      <NumberGuests
        numberGuests={numberGuests}
        setNumberGuests={setNumberGuests}
      />
      <section>
        <h2>Filters</h2>
        {filters?.cuisines?.map((cuisine) => (
          <FilterTag
            key={uuidv4()}
            filter={cuisine}
            handleClick={handleFilterClick}
          />
        ))}
      </section>
      <section>
        {filteredMenus.map((menu) => (
          <SetMenuCard key={menu.id} menu={menu} />
        ))}
      </section>
    </main>
  );
};

export default SetMenu;
