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
  // contacts: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     number: PropTypes.string.isRequired,
  //   }).isRequired
  // ).isRequired,
  // filter: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
