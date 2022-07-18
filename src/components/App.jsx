import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  inputHandler = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };
  onContactInfoSubmit = evt => {
    evt.preventDefault();
    const formValue = evt.currentTarget.value;
    console.log(formValue);
    this.setState(prevState => ({ contacts: prevState.push(formValue) }));
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <form action="">
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
          <button
            className="submitContactBtn"
            type="submit"
            onSubmit={this.onContactInfoSubmit}
          >
            Add contact
          </button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul></ul>
        </div>
      </div>
    );
  }
}
