import { useDispatch, useSelector } from "react-redux";
import s from "./ContactList.module.css";
import ContactListItem from "./ContactListItem/ContactListItem";
import { fetchContacts } from "../../redux/contacts-operations";

import { getVisibleContacts } from "../../redux/contacts-selector";
import { useEffect } from "react";

function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={s.list}>
        {visibleContacts.map((contact) => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
}

export default ContactList;
