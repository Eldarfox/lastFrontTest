import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: (state, action) => {
            state.push({ id: Date.now(), email: action.payload.email, password: action.payload.password });
        }
    }
});

export const { addContact } = slice.actions;

export default slice.reducer;