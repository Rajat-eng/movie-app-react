import {combineReducers} from 'redux';
import { ADD_MOVIES,ADD_FAVORITE,REMOVE_FAVORITE, SET_SHOW_FAVORITES,ADD_SEARCH_RESULT,ADD_MOVIE_TO_LIST } from "../actions";

const initialMovieState={
    list:[],
    favorites:[],
    showFavorites:false
}


export function movies(state=initialMovieState,action){
    //console.log('MOVIE_REDUCER')
    switch(action.type){
        case ADD_MOVIES:
        return{
            ...state,
            list:action.movies
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
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list:[action.movie,...state.list]
            }
        
        default: return state;
    }    
}

// search state
const initialSearchState={
    result:{},
    showSearchResults:false
}

export function search(state=initialSearchState,action){
    
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result:action.movie,
                showSearchResults:true
            }
        
            case ADD_MOVIE_TO_LIST:
                return{
                    ...state,
                    showSearchResults:false
                }

        default: return state;
    }
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