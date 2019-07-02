import React from 'react';
import PropTypes from 'prop-types';
import './HeroImage.css';

const HeroImage = ( { image, title, overview } ) => {
    return (
        <div className={ 'mg-heroimage' }
             style={ {
                 background:
                     `linear-gradient(to bottom, rgba(0,0,0,0) 39%,rgba(0,0,0,0) 41%,rgba(0,0,0,0.65) 100%),
                      linear-gradient(to left, rgba(0,0,0,0) 45%,rgba(0,0,0,0) 41%,rgba(0,0,0,0.85) 100%),
                      url('${ image }'), #1c1c1c`
             } }>
            <div className={ 'mg-heroimage__content' }>
                <div className={ 'mg-heroimage__text' }>
                    {/*Display movie title and overview*/ }
                    <h1>{ title }</h1>
                    <p>{ overview }</p>
                </div>
            </div>
        </div>
    );
};

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string
};

export default HeroImage;