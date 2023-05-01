

export const reducer = (state = { popular:[], top_rated:[], upcoming:[],comedy:[], all:[],action:[],login:"" } ,action) => {

    if(action.type === "populardata"){
        return {
            ...state,
            popular:action.data,
            all:[...state.all,...action.data]
        }
    }
    else if(action.type === "upcomingData"){
        return {
            ...state,
            upcoming:action.data,
            all:[...state.all,...action.data]
        }
    }
    else if(action.type === "topRatedData"){
        return {
            ...state,
            top_rated:action.data,
            all:[...state.all,...action.data]
        }
    }
    else if(action.type === "comedyData"){
        return {
            ...state,
            comedy:action.data,
            all:[...state.all,...action.data]
        }
    }

    else if(action.type === "actionData"){
        return {
            ...state,
            action:action.data,
            all:[...state.all,...action.data]
        }
    }

    else if(action.type === "login"){
        return {
            ...state,
            login:action.data
        }
    }

    return state
}