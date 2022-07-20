import React, { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
// import { ContactsForm } from './ContactsForm/ContactsForm';
// import { ContactsListItem } from './ContactsList/ContactListItem';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onFilterHadnler = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  onSubmitChecker = ({ name }) => {
    console.log({ name });
    // {
    //   this.state.name === name && alert(`${{ name }} is already in contacts`);
    // }
  };
  onSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  deleteItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm
          onSubmit={this.onSubmitHandler}
          // sameDataCheck={this.onSubmitChecker}
        />

        <h2>Contacts:</h2>
        <Filter value={this.state.filter} onChange={this.onFilterHadnler} />
        <ContactsList
          deleteItem={this.deleteItem}
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
