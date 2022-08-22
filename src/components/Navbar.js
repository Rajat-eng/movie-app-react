import React from 'react';
import {addMovieToList,handleMovieSearch} from '../actions';
import {StoreContext} from '../index';

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }

    handleAddToMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie));
    }

    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }

    handleSearch=()=>{
        const {searchText}=this.state;
        // call api using reducer which is thunk
        console.log('handleAddToMovies',this.props.dispatch);
        this.props.dispatch(handleMovieSearch(searchText)); // handleMovieSearch is an action
    }
    render(){
      
        const{result:movie,showSearchResults}=this.props.search;  // search from props
        
        return(
            <div className='nav'>
                <div className='search-container'>
                <input onChange={(e)=>this.handleChange(e)}></input>
                <button id="search-btn"onClick={this.handleSearch}>search</button>
                </div>

                {showSearchResults &&
                    <div className='search-results'>
                        <div className='search-result'>
                            <img src={movie.Poster} alt='search-pic'></img>
                            <div className='movie-info'>
                                <span>{movie.Title}</span>
                                <button onClick={()=>this.handleAddToMovies(movie)}>AddtoMovies</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}


export default Navbar;