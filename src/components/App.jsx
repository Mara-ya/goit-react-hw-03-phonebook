import { Component } from "react";
import { ContactForm } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import initialContacts from "./contacts.json";
import { Wrapper } from "./App.styled";

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  }

  componentDidMount(){
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  handleSubmit = data => {
    const { contacts } = this.state;
    const contactName = contacts.find(
      contact => contact.name === data.name.trim()
    )
    if(!contactName){
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts]
      }))
    } else {
      return alert(`${contactName.name} is already in contacts`);
    }
  }

  handleChange = e => {
    this.setState({filter: e.target.value});
  }

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  render(){
    return(
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit}/>
        <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.handleChange}/>
        <ContactList filteredContacts={this.filteredContacts()} onDelete={this.handleDelete}/>
      </Wrapper>
    )
  }
}