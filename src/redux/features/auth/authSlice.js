import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

export const signup = createAsyncThunk('auth/signup', async ({ name, email, password, mobile }, { rejectWithValue }) => {
    try {
        const user = { name, email, password, mobile };
        const response = await axios.post('http://localhost:5000/api/user/signup', user);
        return response.data;
    } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
            return rejectWithValue(err.response.data.message);
        } else {
            return rejectWithValue('An error occurred!');
        }
    }
});

export const login = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const user = { email, password };
        const response = await axios.post('http://localhost:5000/api/user/login', user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token); // Store token in local storage
      
        return response.data;
    } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
            return rejectWithValue(err.response.data.message);
        } else {
            return rejectWithValue('An error occurred!');
        }
    }
});

//admin login
export const adminLogin = createAsyncThunk('auth/adminLogin', async ({ email, password }, { rejectWithValue }) => {
    try {
        const user = { email, password };
        const response = await axios.post('http://localhost:5000/api/admin/login', user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token); // Store token in local storage
        // alert('Login successful!');
        // navigate('/');
  
        return response.data;
    } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
            return rejectWithValue(err.response.data.message);
        } else {
            return rejectWithValue('An error occurred!');
        }
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(adminLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
