import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <p className={css.contactText}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.contactButton}
            onClick={() => dispatch(deleteContacts(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
