import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectorContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";

const getVisibleContacts = (contacts, statusFilter) => {
  return contacts.filter((item) =>
    item.text.toLowerCase().includes(statusFilter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const statusFilter = useSelector(selectNameFilter);

  const visibleContacts = getVisibleContacts(contacts, statusFilter);
  //const visibleContacts = selectFilteredContacts();
  const f1 = useSelector(selectFilteredContacts);
  // console.log(selectFilteredContacts());
  //console.log(f1);

  return (
    <ul className={css.list}>
      {f1.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
