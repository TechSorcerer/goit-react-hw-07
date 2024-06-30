import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.label}>
        Search contacts:
      </label>
      <input
        id="search"
        type="text"
        className={styles.input}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
