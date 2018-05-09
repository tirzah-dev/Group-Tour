import axios from "axios";
const profileAxios = axios.create();
profileAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const initialState = {
    loading: true,
    username: "",
    isAdmin: false,
    isAuthenticated: false,
    authErrCode: {
        signup: "",
        login: ""
    },
    travelerData: {},
    errMsg: ""
}

const travelersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                authErrCode: {
                    signup: "",
                    login: ""
                },
                travelerData: action.user
            }
        case "LOGOUT":
            return {
                ...initialState,
                loading: false,
            }
        case "AUTH_ERROR":
            return {
                ...state,
                loading: false,
                authErrCode: {
                    ...state.authErrCode,
                    [action.key]: action.errCode
                }
            }
        case "EDIT_TRAVELER":
            return {
                ...state,
                loading: false,
                travelersData: action.editedTraveler
            }
        default: return state;
    }
}
function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}

//double check what the route is in the database /api/????what did we call it???
export function verify() {
    return dispatch => {
        profileAxios.get("/api/profile")
            .then(response => {
                const { user } = response.data;
                dispatch(authenticate(user));
            })
    }
}
//double check all routes with backend
export const signup = userInfo => {
    return dispatch => {
        axios.post("auth/signup", userInfo)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(authenticate(user));
            })
            .catch(err => {
                dispatch(authError("signup", err.response.status))
            })
    }
}

//double check all routes with backend
export const login = credentials => {
    return dispatch => {
        axios.post("auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(authenticate(user));
            })
            .catch(err => {
                dispatch(authError("login", err.response.status))
            })
    }
}

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return {
        type: "LOGOUT"
    }
}

export const authError = (key, errCode) => {
    return {
        type: "AUTH_ERROR",
        key,
        errCode
    }
}

//editing a travler // CHECK ROUTES
export const editTraveler = (editedTraveler, id) => {
    return dispatch => {
        axios.put("/travelers/" + id, editedTraveler)
            .then(response => {
                dispatch({
                    type: "EDIT_TRAVELER",
                    editedTraveler: response.data,
                })
            })
    }
}

//delete a traveler //CHECK ROUTES
export const deleteTraveler = id => {
    return dispatch => {
        axios.delete("/travelers/" + id)
            .then(response => {
                dispatch(logout())
            })
    }
}


export default travelersReducer;