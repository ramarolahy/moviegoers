import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../api/mdbAPI';
import Navigation from './elements/Navigation/Navigation';
import MovieInfo from './elements/MovieInfo/MovieInfo';
import LoadSpinner from '../Common/LoadSpinner/LoadSpinner';
/*Styles*/
import './Movie.css';

class Movie extends Component {
    state = {
        movie: null,
        actors: null,
        directors: [],
        loading: false
    };

    /**
     * Method to manage state and to call fetchInfo function
     */
    componentDidMount() {
        // ES6 destructuring the props
        const { movieId } = this.props.match.params;

        if( localStorage.getItem( `${ movieId }` ) ) {
            let state = JSON.parse( localStorage.getItem( `${ movieId }` ) );
            this.setState( { ...state } );
        } else {
            this.setState( { loading: true } );
            // First fetch the movie ...
            let endpoint = `${ API_URL }movie/${ movieId }?api_key=${ API_KEY }&language=en-US`;
            this.fetchInfo( endpoint );
        }
    }

    /**
     * Method to fetch API response and set component state
     * @param endpoint: API URL
     */
    fetchInfo = ( endpoint ) => {
        // ES6 destructuring the props
        const { movieId } = this.props.match.params;

        fetch( endpoint )
            .then( res => res.json() )
            .then( res => {

                if( res.status_code ) {
                    // If we don't find any movie
                    this.setState( { loading: false } );
                } else {
                    this.setState( { movie: res }, () => {
                        // ... then fetch actors in the setState callback function
                        let endpoint = `${ API_URL }movie/${ movieId }/credits?api_key=${ API_KEY }`;
                        fetch( endpoint )
                            .then( res => res.json() )
                            .then( res => {
                                console.log(res.cast);
                                const directors = res.crew.filter( ( staff ) => staff.job === 'Director' );
                                this.setState( {
                                                   actors: res.cast,
                                                   directors,
                                                   loading: false
                                               }, () => {
                                    localStorage.setItem( `${ movieId }`, JSON.stringify( this.state ) );
                                } );
                            } );
                    } );
                }
            } )
            .catch( error => console.error( 'Error:', error ) );
    };

    render() {
        const { movieName } = this.props.location;
        const { movie, directors, actors, loading } = this.state;
        return (
            <div className="mg-movie">
                <Navigation movie={ movieName }/>
                { movie ?
                    <div>
                        <MovieInfo movie={ movie } directors={ directors } actors={actors} time={ movie.runtime } budget={ movie.budget } revenue={ movie.revenue }/>
                    </div>
                    : null }
                { !actors && !loading ? <h1>No movie found</h1> : null }
                { loading ? <LoadSpinner/> : null }
            </div>
        );
    }
}

export default Movie;