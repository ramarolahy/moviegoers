import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = ( { image, movieId, movieName, clickable } ) => (
    <div className="mg-moviethumb">
        { clickable ?
            <Link to={ { pathname: `/${ movieId }`, movieName: `${ movieName }` } }>
                <img className="clickable" src={ image } alt="moviethumb"/>
            </Link>
            :
            <img src={ image } alt={ `${ movieName }` }/>
        }
    </div>
);

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    movieName: PropTypes.string,
    clickable: PropTypes.bool
};

export default MovieThumb;