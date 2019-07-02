import React from 'react';
import PropTypes from 'prop-types';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import './DisplayGrid.css';

const DisplayGrid = ( { header, loading, children, loadMore, isMovies } ) => {
    const renderElements = () => {
        return children.map( ( el, i ) => (
            <div key={ i } className="mg-grid__element">
                { el }
            </div>
        ) );
    };

    return (
        <div className={isMovies ? "mg-grid__movies" : "mg-grid__actors"}>
            { isMovies && header && !loading ? <h1 className={"mg-header__movies"}>{ header }</h1> : <h3>{ header.toUpperCase() }</h3> }
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
    header: PropTypes.string,
    loading: PropTypes.bool,
    children: PropTypes.object,
    isMovies: PropTypes.bool,
    sortMovies: PropTypes.func
};

export default DisplayGrid;