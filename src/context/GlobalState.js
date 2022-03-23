import React , {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

//initial starte
const initialState = {
    watchList : localStorage.getItem('watchList') 
    ? JSON.parse(localStorage.getItem('watchList')) 
    : [],
    watched : localStorage.getItem('watched') 
    ? JSON.parse(localStorage.getItem('watched'))
    : []
};

//create context here for global usage
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);

    //actions
    const addMovieToWatchList = movie => {
        dispatch({type : "ADD_MOVIE_TO_WATCHLIST", payload : movie});
         //console.log("child");
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
