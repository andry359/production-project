import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginBuUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginBuUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginBuUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginBuUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;