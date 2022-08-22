export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVORITE='ADD_FAVORITE';
export const REMOVE_FAVORITE='REMOVE_FAVORITE';
export const SET_SHOW_FAVORITES='SET_SHOW_FAVORITES';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';


// actions
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies:movies  
    }
}

export function addFavorite(movie){
    return{
        type:ADD_FAVORITE,
        movie:movie 
    }
}

export function removeFavorite(movie){
    return{
        type:REMOVE_FAVORITE,
        movie:movie 
    }
}

export function setShowFavorites(val){ // boolean
    return{
        type:SET_SHOW_FAVORITES,
        val
    }
}

export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie:movie
    }
}

export function handleMovieSearch(searchText){
    const url=`http://www.omdbapi.com/?apikey=11d6e91c&t=${searchText}`

    return function(dispatch){
        fetch(url).then(res=>res.json())
        .then(movie=>{
        //dispatch an action using thunk like dispatch({type:ADD_SEARCH_RESULT,movie})
            dispatch(addMovieSearchResult(movie))
        }
    );
    }
}


export function addMovieSearchResult(movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie
    }
}



