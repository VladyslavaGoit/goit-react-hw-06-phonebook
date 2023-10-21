import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactForm from '../components/contactForm/ContactForm';
import { ContactList } from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';
import css from './App.module.css';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subTitle}>Contacts</h2>
      <Filter />
      <ContactList contacts={visibleContacts} />
    </div>
  );
};

export default App;
