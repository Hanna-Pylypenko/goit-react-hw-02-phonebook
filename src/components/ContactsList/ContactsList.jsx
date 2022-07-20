import css from './ContactsList.module.css';
export const ContactsList = ({ contacts, filter, deleteItem }) => {
  console.log({ contacts, filter });
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          const name = contact.name;
          const number = contact.number;
          const id = contact.id;
          return (
            <li key={id} className={css.contactsListItem}>
              {name}:{number}
              <button onClick={() => deleteItem(id)}>Delete</button>
            </li>
          );
        })}
    </ul>
  );
};
