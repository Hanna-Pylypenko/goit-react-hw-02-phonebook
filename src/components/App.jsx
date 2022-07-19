import React, { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
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
    name: '',
    number: '',
  };

  inputHandler = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };
  onContactInfoSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    form.reset();
  };
  onSearchInputChange = evt => {
    const searchedName = evt.currentTarget.value;
    this.setState({ filter: searchedName });
    console.log(this.state.filter);
    const matches = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    console.log(matches);
    return matches.map(match => {
      const name = match.name;
      const number = match.number;
      const id = match.id;
      return (
        <li key={id}>
          {name}:{number}
        </li>
      );
    });
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
        <form action="" onSubmit={this.onContactInfoSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.inputHandler}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="name">Number</label>
          <input
            onChange={this.inputHandler}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className="submitContactBtn" type="submit">
            Add contact
          </button>
        </form>

        <div>
          <h2>Contacts:</h2>
          <ul>
            <ContactsList contacts={this.state.contacts} />
          </ul>
        </div>
        <div>
          <label htmlFor="filter">Find contacts by name</label>
          <input
            type="search"
            name="filter"
            id={nanoid()}
            onChange={this.onSearchInputChange}
          />
        </div>
      </div>
    );
  }
}
