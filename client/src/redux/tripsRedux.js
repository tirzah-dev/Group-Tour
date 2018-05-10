
const initialState = {
    tripsData: [],
    loading: true,
    errMsg: ""
}

this.state = this.initialState;

const tripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TRIP":
            return {
                ...state,
                loading: false,
                tripsData: [...state.tripsData, action.newIssue]
            }
        case "EDIT_TRIP":
            return {
                ...state,
                loading: false,
                tripsData: state.tripsData.map(trip => {
                    if (trip._id === action.id) {
                        return action.editedTrip
                    } else {
                        return trip
                    }
                })
            }
        case "DELETE_TRIP":
            return {
                ...state,
                loading: false,
                tripsData: state.tripsData.filter(trip => trip._id !== action.id)
            }
        default:
            return state
    }
}
//CHECK ROUTES!!!!!!
const getTrips = () =>{
    return dispatch => {
        axios.get("/trips")
        .then(response => {
            dispatch({
                type: "GET_TRIPS",
                tripsData: response.data
            })
        })
        .catch(err => {
            dispatch({
                type:"ERR_MSG",
                errMsg: "Sorry no data is available"
            })
        })
    }
}

//add a new trip attach a personId to it
const addTrip = newTrip => {
    return dispatch => {
        axios.post("/trips", newTrip)
            .then(response => {
                dispatch({
                    type: "ADD_TRIP",
                    newTrip: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type:"ERR_MSG",
                    errMsg: "Sorry no data is available"
                })
            })
    }
}

//edit a trip
const editTrip = (editedTrip, id) => {
    return dispatch => {
        axios.put("/trips/" + id, editedTrip)
            .then(response => {
                dispatch({
                    type: "EDIT_TRIP",
                    editedTrip: response.data,
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type:"ERR_MSG",
                    errMsg: "Sorry no data is available"
                })
            })
    }
}

//delete a trip
const deleteTrip = id => {
    return dispatch => {
        axios.delete("/trips/" + id)
            .then(response => {
                dispatch({
                    type: "DELETE_ISSUE",
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type:"ERR_MSG",
                    errMsg: "Sorry no data is available"
                })
            })
    }
}



export default tripsReducer