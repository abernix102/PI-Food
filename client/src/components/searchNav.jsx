import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { recipe } from "../redux/actions";
import axios from "axios";

const SearchNav = () => {
  const recipesALL = useSelector((state) => state.allRecipes);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");


  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (searchTerm) => {
    setInputValue(searchTerm);
  };

  const handleSearch = async (name) => {
    try {
      const response = await axios.get(`http://localhost:3001/recipes?name=${name}`);
      const data = response.data;
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(recipe());
  }, [dispatch]);

  return (
    <div>
      <input style={{ position: "relative" }} type="search" onChange={handleChange} value={inputValue} />
      <button onClick={() => handleSearch(inputValue)}>+</button>
      <div style={{ position: "absolute" }}>
        {recipesALL
          ?.filter((item) => {
            const searchTerm = inputValue.toLowerCase();
            const fullName = item.name.toLowerCase();
            return searchTerm && fullName.startsWith(searchTerm);
          })
          .map((item, index) => (
            <div
              style={{
                paddingTop: "10px"
              }}
              key={item.id}
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </div>
          ))}
      </div> 
    </div>
  );
};

export default SearchNav;
