import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts-operations";
import { Spinner } from "../../components/spiner";
import { useSelector } from "react-redux";
import { getItems, getIsLoading } from "../../redux/contacts-selector";

import s from "../ContactForm/ContactForm.module.css";

function ContactForm() {
  const dispatch = useDispatch();

  const items = useSelector(getItems);
  const isLoading = useSelector(getIsLoading);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onChange = (event) => {
    setName(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (items.find((contact) => name === contact.name)) {
      return alert(`${name} is already in the contacts`);
    }

    dispatch(addContacts({ name, number }));
    setName("");
    setNumber("");
  };
  const onChangeNumber = (event) => {
    setNumber(event.currentTarget.value);
  };
  return (
    <>
      <form className={s.form} onSubmit={onSubmit}>
        <p className={s.name}>Name</p>
        <input
          className={s.input}
          type="text"
          onChange={onChange}
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <p className={s.name}>Number</p>
        <input
          className={s.input}
          type="tel"
          onChange={onChangeNumber}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <button className={s.button} type="onSubmit">
          Add contact
        </button>
      </form>
      {isLoading && <Spinner className={s.spinner} size={100} />}
    </>
  );
}

export default ContactForm;
