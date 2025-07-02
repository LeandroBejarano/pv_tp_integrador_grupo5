import { createSlice } from "@reduxjs/toolkit";
import { getSession, clearSession, saveSession } from "../session/sessionStorage";

const initialState = {
    user: getSession(),
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        loginUser: (state, action) => {
            const {email, password} = action.payload;
            const users = JSON.parse(localStorage.getItem("users")) || [];

            const foundUser = users.find(u=>u.email === email && u.password===password);
            if (foundUser){
                state.user={email: foundUser.email};
                state.error=null;
                saveSession({email: foundUser.email});
            }
            else{
                state.user=null;
                state.error="Credenciales invalidas";
            }
        },
        logoutUser: (state) =>{
            state.user=null;
            state.error=null;
            clearSession();
        }
    }
});


export const { loginUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;