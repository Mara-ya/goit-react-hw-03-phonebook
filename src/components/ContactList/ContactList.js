import PropTypes from 'prop-types';
import { Contact } from "../Contact/Contact";

export const ContactList = ({filteredContacts, onDelete}) => {
    return (
        <ul>
            {filteredContacts.map(({ id, name, number }) => {
                return (
                    <li key = {id}>
                        <Contact contact={{id, name, number }} onDelete={onDelete}/>
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.proptype = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.isRequired
        })
    )
}