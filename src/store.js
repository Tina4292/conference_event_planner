// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice'; //*
import mealsReducer from './mealsSlice'; //*

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer, //*
    meals: mealsReducer, //*
  },
});

//This code creates a global Redux store using the @reduxjs/tookit\ configureStore() function so all components in the application can access the state managed by the venueReducer()
//Task 4 step 11. Provide the avSlice to the store.js file done
//Task 5 step 4. edit store.js to provide the reducer details for importing mealsSlice.js