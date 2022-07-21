import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
export const ContactsList = ({ filteredItems, deleteItem }) => {
  return (
    <ul className="contactsList">
      {filteredItems.map(item => {
        const name = item.name;
        const number = item.number;
        const id = item.id;
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
  filteredItems: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
