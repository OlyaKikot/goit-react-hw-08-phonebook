import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import s from "./PhoneBook.module.css";
function PhoneBookView() {
  return (
    <>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 className={s.title}>Contacts</h2>
      <ContactList />
    </>
  );
}

export default PhoneBookView;
