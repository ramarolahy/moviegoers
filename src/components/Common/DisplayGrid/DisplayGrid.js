import React from 'react';
import PropTypes from 'prop-types';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import './DisplayGrid.css';

/**
 * Component to display movie list and actors list as a grid
 * @param header
 * @param loading
 * @param children
 * @param loadMore
 * @param isMovies
 * @returns {*}
 * @constructor
 */
const DisplayGrid = ( { header, loading, children, loadMore, isMovies } ) => {
    const renderElements = () => {
        return children.map( ( el, i ) => (
            <div key={ i } className={ isMovies ? "mg-grid__element--movies" : "mg-grid__element--actors"}>
                { el }
            </div>
        ) );
    };

    return (
        <div className={isMovies ? "mg-grid__movies" : "mg-grid__actors"}>
            { isMovies && header && !loading ? null : <h3>{ header.toUpperCase() }</h3> }
            <div className={isMovies ? "mg-grid__wrap--movies" : "mg-grid__wrap--actors"}>
                <div className={isMovies ? "mg-grid__content--movies" : "mg-grid__content--actors"}>
                    { renderElements() }
                    { isMovies ? <LoadMoreBtn text={ "+" } onClick={loadMore}/> : null}
                </div>
            </div>
        </div>
    );
};

DisplayGrid.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.object,
    isMovies: PropTypes.bool,
    sortMovies: PropTypes.func
};

export default DisplayGrid;