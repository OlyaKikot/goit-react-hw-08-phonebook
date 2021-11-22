import s from "./Filter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getValueFilter } from "../../redux/contacts-selector";

import contactsActions from "../../redux/contacts-actions";

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getValueFilter);
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
      ></input>
    </>
  );
}

export default Filter;
