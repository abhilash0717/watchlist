import React , {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

//initial starte
const initialState = {
    watchList : [],
    watched : []
};

//create context here for global usage
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    console.log(state);

    //actions
    const addMovieToWatchList = movie => {
        dispatch({type : "ADD_MOVIE_TO_WATCHLIST", payload : movie});
    }

    return (
        <GlobalContext.Provider value = {{
            watchList : state.watchList, 
            watched : state.watched,
            addMovieToWatchList
            }}>
            {props.children}
        </GlobalContext.Provider>
    );
}
