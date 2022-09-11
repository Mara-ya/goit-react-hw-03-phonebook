import PropTypes from 'prop-types';
import { DeleteBtn } from "./Contact.styled";

export const Contact = ({contact, onDelete}) => {
    const { id, name, number } = contact;
    return (
        <>
            <span>{name}: {number}</span>
            <DeleteBtn type='button' onClick={() => onDelete(id)}>Delete</DeleteBtn>
        </>
    )
}

Contact.propType = {
    contact: PropTypes.object.isRequired,
}