import React from 'react';
import { IMAGE_BASE_URL } from '../../../../api/mdbAPI';
import PropTypes from 'prop-types';
import './Actor.css';

/**
 * Actor card info component
 * @param actor
 * @returns {*}
 * @constructor
 */
const Actor = ( { actor } ) => {
    const POSTER_SIZE = 'w154';
    return (
        <div className="mg-actor clearfix">
            <img
                src={ actor.profile_path ? `${ IMAGE_BASE_URL }${ POSTER_SIZE }${ actor.profile_path }` : './images/no_image.jpg' }
                alt={actor.name}
            />
            <div className={"mg-wrap__actor-info"}>
                <span className="mg-actor-name">{ actor.name }</span>
                <span className="mg-actor-character">{ actor.character }</span>
            </div>
        </div>
    );
};

Actor.propTypes = {
    actor: PropTypes.object
};

export default Actor;