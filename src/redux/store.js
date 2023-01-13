import { configureStore } from '@reduxjs/toolkit';
import { contactReduser } from './contactSlice';
import { filterSlice } from './filterSlice';





export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterSlice.reducer,
  },
  
  
});


