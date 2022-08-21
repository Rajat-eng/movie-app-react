export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVORITE='ADD_FAVORITE';
export const REMOVE_FAVORITE='REMOVE_FAVORITE';
export const SET_SHOW_FAVORITES='SET_SHOW_FAVORITES';

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



