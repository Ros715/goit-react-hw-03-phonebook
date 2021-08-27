import React from "react";
import ContactForm from "./components/ContactForm/ContactForm.js";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList.js";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const state0 = {
  contacts: [
    /*
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  */
  ],
  filter: "",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = state0;
    const storedContacts = localStorage.getItem("phonebook");
    //console.log(storedContacts);
    if (storedContacts !== null) {
      this.state.contacts = JSON.parse(storedContacts);
    }
  }

  storeContacts() {
    localStorage.setItem("phonebook", JSON.stringify(this.state.contacts));
  }

  onAddContact = (name, number) => {
    const selectedContact = this.state.contacts.filter((contact) => {
      return contact.name === name;
    });
    if (selectedContact.length > 0) {
      alert(name + " is already in contacts");
    } else {
      const id = uuidv4();
      this.state.contacts.push({
        id: id,
        name: name,
        number: number,
      });
      //console.log("add", name, number, id);
      this.setState({
        contacts: this.state.contacts,
      });
      this.storeContacts();
    }
  };

  onChangeFilter = (filter) => {
    //console.log("filter", filter);
    this.setState({ filter: filter });
  };

  onDeleteContact = (contactId) => {
    //console.log(contactId);
    const reducedList = this.state.contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    this.setState({
      contacts: reducedList,
    });
    this.storeContacts();
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onAddContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.onChangeFilter} />
        <ContactList state={this.state} onDelete={this.onDeleteContact} />
      </div>
    );
  }
}

export default App;
