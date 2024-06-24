import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services/api.services";
import {IUserModel} from "../../models/IUserModel";

interface UserState {
    profile: IUserModel | null;
    error: string | null;
    loading: boolean;
}

const initialState: UserState = {
    profile: null,
    error: null,
    loading: false,
};

export const loadUserProfile = createAsyncThunk(
    'user/loadUserProfile',
    async (_, thunkAPI) => {
        try {
            const profile = await userService.getUserProfile();
            return profile;
        } catch (e) {
            throw e;
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadUserProfile.fulfilled, (state, action) => {
                state.profile = action.payload;
                state.loading = false;
            })
            .addCase(loadUserProfile.rejected, (state, action) => {
                state.error = action.error.message || 'Щось пішло не так';
                state.loading = false;
            });
    },
});

const {reducer: userReducer, actions: userActions} = userSlice;

export {userReducer, userActions};
