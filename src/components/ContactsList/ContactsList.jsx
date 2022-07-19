import { ContactsListItem } from './ContactListItem';
export const ContactsList = ({ contacts, filter }) => {
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
          return <ContactsListItem name={name} number={number} key={id} />;
        })}
    </ul>
  );
};
