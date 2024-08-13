import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nameAndTel = {
      text: form.elements.text.value,
      telNumber: form.elements.telnumber.value,
    };

    dispatch(addContact(nameAndTel));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter contact name"
      />
      <input
        className={css.field}
        type="text"
        name="telnumber"
        placeholder="Enter tel number"
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};
