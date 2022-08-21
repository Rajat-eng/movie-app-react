import React from 'react';
import { addFavorite,removeFavorite } from '../actions';

class MovieCard extends React.Component{

   handleFavoriteClick=(movie)=>{
        const {dispatch}=this.props;
        dispatch(addFavorite(movie)); // adding to favorite by calling ADD_FAVORITE action
   }

   handleUnFavoriteClick=(movie)=>{
        const {dispatch}=this.props;
        dispatch(removeFavorite(movie));
   }

    render(){
        const {movie,isFavorite}=this.props;
        return(
            <div className='movie-card'>
                <div className='left'>
                    <img alt="movie-poster" src={movie.Poster}></img>
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        {
                        isFavorite?(
                            <button className='unfavorite-btn' onClick={()=>this.handleUnFavoriteClick(movie)}>Unfavorite</button>
                        )
                        :(
                        <button className='favorite-btn' onClick={()=>this.handleFavoriteClick(movie)}>Favorite</button>
                        )
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}



export default MovieCard;