const USERS_KEY = "users";
const SESSION_KEY = "sessionUser";

/* Usuarios */
export const getUsers = () => {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

export const saveUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

/* Sesión */
export const getSession = () => {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
};

export const saveSession = (user) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

export const clearSession = () => {
    localStorage.removeItem(SESSION_KEY);
};