import React, { Component } from 'react';
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from '../../api/mdbAPI';
/* Components */
/* Styles */
import './Home.css';
import DisplayGrid from '../Common/DisplayGrid/DisplayGrid';
import HeroImage from '../Common/HeroImage/HeroImage';
import SortMenu from './elements/SortMenu/SortMenu';
import LoadSpinner from '../Common/LoadSpinner/LoadSpinner';
import Header from '../Common/Header/Header';
import MovieThumb from '../Home/elements/MovieThumb/MovieThumb';

/**
 * Class Component: Home
 * Description:
 *  -   Includes all els of the home page:
 *  -   Loads first
 *  -   API JSON format https://developers.themoviedb.org/3/discover/movie-discover
 * State:
 * Methods:
 *  componentDidMount: fetch data from API
 */
class Home extends Component {
    // Collect API response into state
    state = {
        movies: [],
        heroImage: null,
        isLoading: false,
        // API results is devided into pages
        currentPage: 0,
        totalPages: 0,
        searchTerm: '',
        sortTerm: ''
    };

    /**
     * Lifecycle method for when home component has mounted
     */
    componentDidMount() {
        // Set isLoading state to true
        this.setState( { isLoading: true } );
        // Fetch data from API URL
        const endpoint = `${ API_URL }movie/popular?api_key=${ API_KEY }&language=en-US&page=1`;
        this.fetchMovies( endpoint );
    }

    /**
     * Method to fetch movie from tmdb API
     * set state of component from response
     * */
    fetchMovies = ( endpoint ) => {
        const { movies, heroImage, searchTerm } = this.state;
        fetch( endpoint )
            .then( res => res.json() )
            .then( res => {
                this.setState( {
                                   // copy current movies and add new results with spread
                                   movies: [...movies, ...res.results],
                                   // set heroimage to first result check if exist first
                                   heroImage: heroImage || res.results[0],
                                   loading: false,
                                   currentPage: res.page,
                                   totalPages: res.total_pages
                               } );
            } );
    };
    /**
     *   Method to perform search on the API
     *   set search result to most popular items (default) if search term is empty
     *  */
    searchMovies = ( searchTerm ) => {
        let endpoint = '';
        this.setState( {
                           movies: [],
                           loading: true, // Shows loading spinner
                           searchTerm
                       } );
        if( searchTerm === '' ) {
            endpoint = `${ API_URL }movie/popular?api_key=${ API_KEY }&language=en-US&page=1`;
        } else {
            endpoint = `${ API_URL }search/movie?api_key=${ API_KEY }&language=en-US&query=${ searchTerm }`;
        }
        this.fetchMovies( endpoint );
    };

    sortMovies = ( sortTerm ) => {
        this.setState( {
                           movies: [],
                           loading: true,
                           sortTerm
                       } );
        console.log(sortTerm);
        const endpoint = `${ API_URL }movie/${ sortTerm }?api_key=${ API_KEY }&language=en-US&page=1`;
        const { heroImage } = this.state;
        fetch( endpoint )
            .then( res => res.json() )
            .then( res => {
                this.setState( {
                                   // copy current movies and add new results with spread
                                   movies: [...res.results],
                                   // set heroimage to first result check if exist first
                                   heroImage: res.results[Math.floor(Math.random() * 16)],
                                   loading: false,
                                   currentPage: res.page,
                                   totalPages: res.total_pages
                               } );
            } );
    };

    loadMoreMovies = () => {
        const { searchTerm, currentPage } = this.state;
        let endpoint = '';
        this.setState( { loading: false } );
        // Load more popular movies IF no searchterm
        if( searchTerm === '' ) {
            endpoint = `${ API_URL }movie/popular?api_key=${ API_KEY }&language=en-US&page=${ currentPage + 1 }`;
            // Else load more search results
        } else {
            endpoint = `${ API_URL }search/movie?api_key=${ API_KEY }&language=en-US&query=${ searchTerm }&page=${ currentPage + 1 }`;
        }
        this.fetchMovies( endpoint );
    };

    render() {
        const { movies, heroImage, loading, searchTerm } = this.state;
        return (
            <div className={ 'mg-home' }>
                <Header callback={ this.searchMovies }/>
                {/* Check if heroimage has been loaded/exist */ }
                { heroImage ?
                    <div>
                        <HeroImage
                            image={ `${ IMAGE_BASE_URL }${ BACKDROP_SIZE }${ heroImage.backdrop_path }` }
                            title={ heroImage.original_title }
                            overview={ heroImage.overview }
                            rating={ heroImage.vote_average + ' / 10' }
                        />
                    </div> : null }
                <div className={ 'mg-home__grid' }>
                    <SortMenu callback={ this.sortMovies }/>
                    <DisplayGrid header={ '' } loading={ loading } loadMore={ this.loadMoreMovies } isMovies={ true }>
                        { movies.map( ( el, i ) => (
                            <MovieThumb
                                key={ i }
                                clickable={ true }
                                image={ el.poster_path ? `${ IMAGE_BASE_URL }${ POSTER_SIZE }${ el.poster_path }` : './images/no_image.jpg' }
                                movieId={ el.id }
                                movieName={ el.original_title }
                            />
                        ) ) }
                    </DisplayGrid>
                </div>
                { loading ? <LoadSpinner/> : null }
            </div>
        );
    }
}

export default Home;