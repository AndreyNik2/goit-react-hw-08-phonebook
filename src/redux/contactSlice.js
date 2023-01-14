import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const extraActions = [addContacts, deleteContacts, fetchContacts];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchContactsFulfilledReduser = (state, action) => {
  state.contacts = action.payload;
};

const addContactsFulfilledReduser = (state, action) => {
  state.contacts.push(action.payload);
};

const deleteContactsFulfilledReduser = (state, action) => {
  const index = state.contacts.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contacts.splice(index, 1);
};

const anyPendingReduser = state => {
  state.isLoading = true;
  state.error = null;
};

const anyFulfilledReduser = state => {
  state.isLoading = false;
  state.error = null;
};

const anyRejectedReduser = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: null,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReduser)
      .addCase(addContacts.fulfilled, addContactsFulfilledReduser)
      .addCase(deleteContacts.fulfilled, deleteContactsFulfilledReduser)
      .addMatcher(getActions('pending'), anyPendingReduser)
      .addMatcher(getActions('rejected'), anyRejectedReduser)
      .addMatcher(getActions('fulfilled'), anyFulfilledReduser),
  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContacts.pending]: handlePending,
  //   [addContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts.push(action.payload);
  //   },
  //   [addContacts.rejected]: handleRejected,
  //   [deleteContacts.pending]: handlePending,
  // [deleteContacts.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   const index = state.contacts.findIndex(
  //     contact => contact.id === action.payload.id
  //   );
  //   state.contacts.splice(index, 1);
  // },
  //   [deleteContacts.rejected]: handleRejected,
  // },
});

export const contactReduser = contactSlice.reducer;

/////Selectors

export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
