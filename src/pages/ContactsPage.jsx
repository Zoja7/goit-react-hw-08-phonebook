import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts/selectors';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoadingFromRedux = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  const showContacts =
    !error && !isLoadingFromRedux && contacts && contacts.length > 0;

  useEffect(() => {
    dispatch(fetchContactsThunk())
      .then(() => {
        alert('Contacts downloaded successfully!');
      })
      .catch(error => {
        alert(`Error downloading contacts: ${error}`);
      });
  }, [dispatch]);

  return (
    <div className={css.contactsPageWrapper}>
      {/* <h1>Contacts Page</h1> */}
      <ContactForm />
      <Filter />
      {error !== null && <p className="error-bage">{error}</p>}
      <div>{isLoadingFromRedux && 'Request in progress...'}</div>
      {showContacts && <ContactsList />}
    </div>
  );
};

export default ContactsPage;
