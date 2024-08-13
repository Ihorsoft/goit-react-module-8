import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
export const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const text2 = event.target.value;
    dispatch(changeFilter(text2));
  };

  return (
    <>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter search Name"
        onChange={handleSubmit}
      />
    </>
  );
};
