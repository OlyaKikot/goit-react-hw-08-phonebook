import s from "../ContactListItem/ContactListItem.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../../redux/contacts-operations";

function ContactListItem({ contact }) {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <p className={s.text}>
        {contact.name}: {contact.number}
      </p>

      <button
        className={s.button}
        id={contact.id}
        type="button"
        onClick={() => dispatch(deleteContacts(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
