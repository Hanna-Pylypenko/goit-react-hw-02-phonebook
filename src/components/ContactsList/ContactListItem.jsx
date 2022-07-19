import css from './ContactsListItem.module.css';
export const ContactsListItem = ({ name, number }) => {
  return (
    <li className={css.contactsListItem}>
      {name}:{number}
    </li>
  );
};
