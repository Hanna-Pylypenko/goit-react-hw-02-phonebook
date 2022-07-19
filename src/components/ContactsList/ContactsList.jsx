import { ContactsListItem } from './ContactListItem';
export const ContactsList = ({ contacts, filter }) => {
  console.log({ contacts, filter });
  const contactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(contactsList);
  const matchedContacts = contactsList.map(contact => {
    const name = contact.name;
    const number = contact.number;
    const id = contact.id;
    return <ContactsListItem name={name} number={number} key={id} />;
  });

  return <ul>{matchedContacts}</ul>;
};
