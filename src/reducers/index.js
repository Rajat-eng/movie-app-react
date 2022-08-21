import {combineReducers} from 'redux';
import { ADD_MOVIES,ADD_FAVORITE,REMOVE_FAVORITE, SET_SHOW_FAVORITES } from "../actions";

const initialMovieState={
    list:[],
    favorites:[],
    showFavorites:false
}


export function movies(state=initialMovieState,action){
    console.log('MOVIE_REDUCER')
    switch(action.type){
        case ADD_MOVIES:
        return{
            ...state,
            list:action.movies,
        }

        case ADD_FAVORITE:
            return{
                ...state,
                favorites:[action.movie,...state.favorites]
            }

        case REMOVE_FAVORITE:
            const filterArray=state.favorites.filter(movie=>movie.Title!==action.movie.Title)
            return{
                ...state,
                favorites:filterArray
            }
        case SET_SHOW_FAVORITES:
            return{
                ...state,
                showFavorites:action.val
            }
        
        default: return state;
    }    
}

// search state
const initialSearchState={
    result:{}
}

export function search(state=initialSearchState,action){
    console.log('SEARCH_REDUCER')
    return state;
}




// root reducer
// const initialRootState= {
//     movies:initialMovieState,
//     search:initialSearchState
// }
// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:movies(state.movies,action), // movie reducer
//         search:search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
})