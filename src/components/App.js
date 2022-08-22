import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import React from 'react';
import { addMovies, setShowFavorites } from '../actions';
import {StoreContext} from '../index';
import{useSelector,useDispatch} from 'react-redux';

class App extends React.Component {
  
   componentDidMount(){
    // call api and dispatch
    const {store}=this.props;

    store.subscribe(()=>{
      this.forceUpdate(); // method should not be used
    })

    store.dispatch(addMovies(data))

   }

   isMovieFavorite=(movie)=>{
      const {movies}=this.props.store.getState();
      const index=movies.favorites.indexOf(movie)

      if(index===-1){
        return false;
      }
      return true;
   }

   onChangeTab=(val)=>{
      this.props.store.dispatch(setShowFavorites(val));
   }

   render(){
    const{movies,search}=this.props.store.getState()//{movies:{list,favorites,showFavorites} search:{result,showSearchResults}}
    const {list,favorites,showFavorites}=movies; 

    const displayMovies=showFavorites? favorites:list
    
    //console.log(displayMovies);
    return (
      <div className="App">
        <Navbar 
          search={search} 
          dispatch={this.props.store.dispatch} />
        <div className="main">

      <div className="tabs">

        <div className={` tab ${showFavorites}?'':'active-tabs' `} onClick={()=>this.onChangeTab(false)}>Movies</div>
        <div className={` tab ${showFavorites}?'active-tabs':'' `} onClick={()=>this.onChangeTab(true)}>Favorites</div>

      </div>

      <div className="list">
        {displayMovies.map((movie,index)=>{
          return(
            <MovieCard 
            movie={movie} 
            isFavorite={this.isMovieFavorite(movie)}
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}  />
          )
        })}
        {displayMovies.length===0?<div className='no-movies'>No Movies to show</div>:null}
      </div>
     </div>
    </div>
  );
 }
  
}


export default App;
