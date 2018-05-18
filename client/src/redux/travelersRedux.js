import axios from "axios";
// import { addTrip } from './tripsRedux.js';//does this help????

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
        case "AUTHENTICATE_BEGIN":
            return {
                ...state,
                loading: true
            }
        case "AUTHENTICATE":
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                authErrCode: {
                    signup: "",
                    login: ""
                },
                travelerData: action.traveler
            }
        case "ADD_TRIP":
            return {
               ...state,
               loading: false,
               travelerData: {
                   ...state.travelerData,
                   trips: [...state.travelerData.trips, action.newTrip]
               }
            }
        case "EDIT_TRIP": 
            return {
                ...state,
                travelerData: {
                    ...state.travelerData,
                    trips: state.travelerData.trips.map(trip => {
                        if (trip._id === action.id){
                            return action.editedTrip
                        } else {
                            return trip
                        }
                    })
                }
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
        case "GET_TRAVELER":
            return {
                ...state,
                loading: false,
                traveler: action.traveler
            }
        case "EDIT_TRAVELER":
            return {
                ...state,
                loading: false,
                travelerData: state.travelerData.map(traveler => {
                    if (traveler._id === action.id) {
                        return action.editedTraveler
                    } else {
                        return traveler
                    }
                })
            }
        case "DELETE_TRAVELER":
            return {
                ...state,
                loading: false,
                travelerData: state.travelerData.filter(traveler => traveler._id !== action.id)
            }
        default: return state;
    }
}
function authenticate(traveler) {
    return {
        type: "AUTHENTICATE",
        traveler
    }
}
export const authError = (key, errCode) => {
    return {
        type: "AUTH_ERROR",
        key,
        errCode
    }
}

//double check what the route is in the database /api/????what did we call it???
export function verify() {
    return dispatch => {
        profileAxios.get("/api/travelers/verify")
            .then(response => {
                dispatch(authenticate(response.data));

            })
            .catch(err => dispatch({
                type: "AUTH_ERROR",
                errCode: "verify",
                err
            }))
    }
}
//double check all routes with backend
export const signup = (userInfo) => {
    return dispatch => {
        dispatch({
            type: "AUTHENTICATE_BEGIN"
        })
        axios.post("/auth/signup", userInfo)
            .then(response => {
                const { token, traveler } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("traveler", JSON.stringify(traveler));
                dispatch(authenticate(traveler));
            })
            .catch(err => {
                dispatch(authError("signup", err));
            })
    }
}

//double check all routes with backend
export const login = credentials => {
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const { token, traveler } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("traveler", JSON.stringify(traveler));
                dispatch(authenticate(traveler));
            })
            .catch(err => {
                dispatch(authError("login", err.response.status))
            })
    }
}

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("traveler");
    return {
        type: "LOGOUT"
    }
}
//get one Traveler
// export const getTraveler = id => {
//     return dispatch => {
//         axios.get("travelers/" + id)
//             .then(response => {
//                 dispatch({
//                     type: "GET_TRAVELER",
//                     traveler: response.data
//                 })
//             })
//     }
// }

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