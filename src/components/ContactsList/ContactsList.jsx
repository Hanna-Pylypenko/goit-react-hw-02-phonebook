import { nanoid } from 'nanoid';
import { ContactsListItem } from './ContactListItem';
export const ContactsList = ({ contacts }) => {
  return contacts.map(contact => {
    return <ContactsListItem info={contact} key={nanoid()} />;
  });
};
