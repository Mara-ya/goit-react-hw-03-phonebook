import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { Component } from "react";
import { InputForm, SubmitBtn, Form } from './Form.styled'


export class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    state = {
        name: '',
        number: '',
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const contact = this.addContact();
        this.props.onSubmit(contact);
        this.reset();
    }

    addContact = () => {
        const { name, number } = this.state
        return {
            id: nanoid(5),
            name: name,
            number: number,
        }
    }

    reset = () => {
        this.setState({ name: '', number: ''});
    }

    render(){
        const { name, number } = this.state
        return(
            <>
             <Form onSubmit={this.handleSubmit}>
              <label>Name
                <InputForm
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={name}
                  onChange={this.handleChange}
                />
              </label>
              <label>Number
                <InputForm
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value={number}
                  onChange={this.handleChange}
                />
              </label>
              <SubmitBtn type="submit">Add contact</SubmitBtn>
            </Form>
            </>
        )
    }
}
