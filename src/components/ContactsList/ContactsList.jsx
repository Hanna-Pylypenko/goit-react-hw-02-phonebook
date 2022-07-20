import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
export const ContactsList = ({ contacts, filter, deleteItem }) => {
  return (
    <ul className="contactsList">
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
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
