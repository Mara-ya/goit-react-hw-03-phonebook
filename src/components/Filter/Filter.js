import PropTypes from 'prop-types';
import { FilterInput } from "./Filter.styled";

export const Filter = ({inputValue, onChange}) => {
    return (
        <label>
            Find contact by name
            <FilterInput type="text" value={inputValue} onChange={onChange} />
        </label>
    )
}

Filter.proptype = {
    inputValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}