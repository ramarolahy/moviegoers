import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../../api/mdbAPI';
import PropTypes from 'prop-types';
import DisplayGrid from '../../../Common/DisplayGrid/DisplayGrid';
import { calcTime } from '../../../../utils/datetimeUtils';
import { convertMoney } from '../../../../utils/currencyUtils';
import './MovieInfo.css';
import Actor from '../Actor/Actor';

const MovieInfo = ( { movie, directors, actors, time, budget, revenue } ) => (
    <div className="mg-movieinfo"
         style={ {
             background: movie.backdrop_path ? `url('${ IMAGE_BASE_URL }${ BACKDROP_SIZE }${ movie.backdrop_path }')` : '#000'
         } }
    >
        <div className="mg-movieinfo__content">
            <div className="mg-movieinfo__thumb">
                <img src={ movie.poster_path ? `${ IMAGE_BASE_URL }${ POSTER_SIZE }${ movie.poster_path }`
                    : './images/no_image.jpg' } alt={ `${ movie.name }` }/>
            </div>
            <div className="mg-movieinfo__text">
                <h1>{ movie.title }</h1>
                <span className="mg-movieinfobar__info">Running time: { calcTime( time ) } </span>
                <span className="mg-movieinfobar__info">Budget: { convertMoney( budget ) } </span>
                <span className="mg-movieinfobar__info">Revenue: { convertMoney( revenue ) } </span>
                <span className="mg-movieinfobar__info">IMDB Rating: { movie.vote_average + ' / 10' } </span>
                <h3>PLOT</h3>
                <p>{ movie.overview }</p>
                { directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3> }
                { directors.map( ( element, i ) => {
                    return <p key={ i } className="mg-director">{ element.name }</p>;
                } ) }
                { actors ?
                    <div className="mg-movie__grid">
                        <DisplayGrid header={ 'Actors' }>
                            { actors.map( ( el, i ) => (
                                <Actor key={ i } actor={ el }/>
                            ) ) }
                        </DisplayGrid>
                    </div>
                    : null
                }

            </div>
        </div>
    </div>
);

MovieInfo.propTypes = {
    movie: PropTypes.object,
    directors: PropTypes.array,
    actors: PropTypes.object,
    time: PropTypes.string,
    budget: PropTypes.string,
    revenue: PropTypes.string
};

export default MovieInfo;