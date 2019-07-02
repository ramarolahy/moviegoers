import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        value: ''
    };
// Must have this here so we can reset it
    timeout = null;

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
                    <input
                        type="text"
                        className="mg-header__input"
                        placeholder="Search"
                        onChange={ this.doSearch }
                        value={ value }
                    />
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    callback: PropTypes.func
};

export default Header;