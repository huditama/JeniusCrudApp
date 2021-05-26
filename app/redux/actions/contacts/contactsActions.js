import axios from 'axios';
import { get } from 'lodash';

import {
  GET_ALL_CONTACTS,
  GET_ALL_CONTACTS_FAILED,
  GET_ALL_CONTACTS_SUCCESS,
  SAVE_CONTACT,
  SAVE_CONTACT_FAILED,
  SAVE_CONTACT_SUCCESS,
  GET_CONTACT_DETAILS,
  GET_CONTACT_DETAILS_FAILED,
  GET_CONTACT_DETAILS_SUCCESS,
} from './contactsActionsConstants';
import {
  getAllContacts as getAllContactsEndpoint,
  saveContact as saveContactEndpoint,
  getContactDetails as getContactDetailsEndpoint,
} from '../../../api/contacts/contactsEndpoints';

const getAllContacts = () => ({
  type: GET_ALL_CONTACTS,
});

const getAllContactsFailed = (error) => ({
  type: GET_ALL_CONTACTS_FAILED,
  error,
});

const getAllContactsSuccess = (data) => ({
  type: GET_ALL_CONTACTS_SUCCESS,
  data,
});

const requestGetAllContacts = () => async (dispatch) => {
  dispatch(getAllContacts());

  try {
    const result = await axios.get(getAllContactsEndpoint);
    const data = get(result, 'data.data', []);

    dispatch(getAllContactsSuccess(data));
  } catch (error) {
    dispatch(getAllContactsFailed(error.response));
  }
};

const saveContact = () => ({
  type: SAVE_CONTACT,
});

const saveContactFailed = (error) => ({
  type: SAVE_CONTACT_FAILED,
  error,
});

const saveContactSuccess = (data) => ({
  type: SAVE_CONTACT_SUCCESS,
  data,
});

const requestSaveContact = (firstName, lastName, photo, age) => async (dispatch) => {
  dispatch(saveContact());

  try {
    const result = await axios.post(saveContactEndpoint, {
      firstName,
      lastName,
      photo,
      age,
    })

    const data = get(result, 'data.message', '');
    dispatch(saveContactSuccess(data));

  } catch (error) {
    dispatch(saveContactFailed(error.response));
  }
}

const getContactDetails = () => ({
  type: GET_CONTACT_DETAILS,
});

const getContactDetailsFailed = (error) => ({
  type: GET_CONTACT_DETAILS_FAILED,
  error,
});

const getContactDetailsSuccess = (data) => ({
  type: GET_CONTACT_DETAILS_SUCCESS,
  data,
});

const requestGetContactDetails = (contactId) => async (dispatch) => {
  dispatch(getContactDetails());

  try {
    const result = await axios.get(getContactDetailsEndpoint(contactId));
    const data = get(result, 'data.data', {});

    dispatch(getContactDetailsSuccess(data));
  } catch (error) {
    dispatch(getContactDetailsFailed(error.response));
  }
};

export {
  requestGetAllContacts,
  requestSaveContact,
  requestGetContactDetails,
};
