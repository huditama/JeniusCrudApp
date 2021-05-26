import { JENIUS_HOST } from 'react-native-dotenv';

const getAllContacts = `${JENIUS_HOST}/contact`;
const saveContact = `${JENIUS_HOST}/contact`;
const getContactDetails = (contactId) => `${JENIUS_HOST}/contact/${contactId}`

export {
  getAllContacts,
  saveContact,
  getContactDetails,
};