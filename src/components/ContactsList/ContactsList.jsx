import { ContactsListItem } from './ContactListItem';
export const ContactsList = ({ contacts }) => {
  return contacts.map(contact => {
    const name = contact.name;
    const number = contact.number;
    const id = contact.id;
    return <ContactsListItem name={name} number={number} key={id} />;
  });
};
