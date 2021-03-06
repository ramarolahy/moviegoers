import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Header.css';
import { Link } from 'react-router-dom';

/**
 * Home header component
 * Methods: doSearch
 */
class Header extends Component {
    state = {
        value: ''
    };
// Must have this here so we can reset it
    timeout = null;
    /**
     * Method to perform movie search functionality
     * Takes a callback as props and uses input value as parameter.
     * Search method activates automatically when user "stops" typing (No need to press enter)
     * a timeout is set to wait 700ms to avoid unnecessary API calls.
     * @param event
     */
    doSearch = ( event ) => {
        // Get callback function from props <= Props
        const { callback } = this.props;
        // Set component state to user input
        this.setState( { value: event.target.value } );
        // reset the timeout before each occurrence
        clearTimeout( this.timeout );
        // Set timeout to fire search after user is done typing
        this.timeout = setTimeout( () => {
            callback( this.state.value );
        }, 700 );
    };

    render() {
        const { value } = this.state;
        return (
            <div className="mg-header">
                <div className="mg-header-content">
                    <Link to={ '/' }>
                        <img className="mg-logo" src="./images/moviegoers.png" alt="moviegoers.logo"/>
                    </Link>
                    <div className={"mg-header__wrap--input"}>
                        <input
                            type="text"
                            className="mg-header__input"
                            placeholder="Search"
                            onChange={ this.doSearch }
                            value={ value }
                        />
                        <IconContext.Provider value={ { className: 'mg-header__icon--search' } }>
                            <div>
                                <FaSearch/>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    callback: PropTypes.func
};

export default Header;