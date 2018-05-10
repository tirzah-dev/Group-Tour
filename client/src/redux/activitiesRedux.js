import axios from "axios";

const initialState = {
    activitiesData: [],
    loading: true,
    errMsg: ""
}

this.state = this.initialState;

const activitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        case "GET_ACTIVITIES":
            return {
                ...state,
                loading: false,
                activitiesData: action.activitiesData
            }
        case "ADD_ACTIVITY":
        return {
            ...state,
            loading: false,
            activitiesData: [...state.activitiesData, action.newActivity]
        }
        case "EDIT_ACTIVITY":
            return {
                ...state,
                loading: false,
                activitiesData: state.activitiesData.map(activity => {
                    if (activity._id === action.id) {
                        return editedActivity
                    } else {
                        return activity
                    }
                })
            }
        case "DELETE_ACTIVITY":
            return {
                ...state,
                loading: false,
                activitiesData: state.activitiesData.filter(activity => activity._id !== action.id)
            }
        case "CHANGE_VOTES":
            return {
                ...state,
                loading: false,
                activitiesData: state.activitiesData.map(activity => {
                    if (activity._id === action.id) {
                        return {
                            ...activity,
                            totalVotes: action.votes
                        }
                    } else {
                        return activity
                    }
                })
            }
        default:
            return state
    }
}
//CHECK ROUTES!!!!!
//get activities
const getActivities = () => {
    return dispatch => {
        axios.get("/activities")
            .then(response => {
                dispatch({
                    type: "GET_ACTIVITIES",
                    activitiesData: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry no data available"
                })
            })
    }
}
//add an activity
const addActivity = newActivity =>{
    return dispatch =>{
        axios.post("/activities", newActivity)
        .then(response => {
            dispatch({
                type: "ADD_ACTIVITY",
                newActivity: response.data
            })
        })
        .catch(err =>{
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry no data available"
            })
        })
    }
}

//edit activities
const editActivities = (editedActivity, id) => {
    return dispatch => {
        axios.put("/activities/" + id, editedActivity)
            .then(response => {
                dispatch({
                    type: "EDIT_ACTIVITY",
                    editedActivity,
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry no data available"
                })
            })
    }
}

//delete activity
const delelteActivity = id => {
    return dispatch => {
        axios.delete("/activities/" + id)
            .then(response => {
                dispatch({
                    type: "DELETE_ACTIVITY",
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry no data available"
                })
            })
    }
}

//adding or subtracting votes from activities
const changeVotes = (id, votes) => {
    return dispatch => {
        axios.put("/activities/" + id, votes)
            .then(response => {
                dispatch({
                    type: "CHANGE_VOTES",
                    activity: response.data,
                    id,
                    votes
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry no data available"
                })
            })
    }
}

export default activitiesReducer