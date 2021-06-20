import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { v4 as uuidv4 } from "uuid";
import './styles.css';

class App extends Component {
	state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
       filter: "",
  };


  addContact = (contacts) => {
    const searchName = this.state.contacts
      .map((contact) => contact.name)
      .includes(contacts.name);    //значение true или false
       
    if (searchName) {
      alert(`${contacts.name} is already in contacts`);
      } else {
      const contact = {
        ...contacts,
        id: uuidv4(),
      };
      
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };


  // Подію на полі фільтра  пишемо в стейт
  changeFilter = (event) => {                              
    this.setState({ filter: event.target.value }); 
  };


  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };


  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };


  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts(); //(5) [{…}, {…}, {…}, {…}, {…}]
      console.log('visibleContacts', visibleContacts, 'visibleContacts.length',visibleContacts.length) 
    return (
        <div>
          <h1>Phonebook</h1>

          <ContactForm onAddContact={this.addContact} />
          <h2>Contacts</h2>
        
          {/* {visibleContacts.length > 0 && (    ***знято!!! если искать по сочетанию букв по которому нет совпадений - пропадает инпут.  */} 
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          {/* )}           */}
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          
        </div>
    );
  };
}

export default App;






