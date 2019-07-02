import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SortMenu.css';

class SortMenu extends Component {
    state = {
        sortTerm: '',
        activeTab: 'popular'
    };

    sortBy = ( e ) => {
        // Get callback function from props <= Props
        const { callback } = this.props;
        if( e.target.value === 1 ) {
            this.setState( { sortTerm: 'popular' }, () => {
                callback( this.state.sortTerm );
                this.setState( { activeTab: 'popular' } );
            } );
        } else if( e.target.value === 2 ) {
            this.setState( { sortTerm: 'now_playing' }, () => {
                callback( this.state.sortTerm );
                this.setState( { activeTab: 'now_playing' } );
            } );
        } else {
            this.setState( { sortTerm: 'top_rated' }, () => {
                callback( this.state.sortTerm );
                this.setState( { activeTab: 'top_rated' } );
            } );
        }
    };

    render() {
        return (
            <div className={ 'mg-navigation__sort-menu--wrap' }>
                <ul className={ 'mg-navigation__sort-menu' }>
                    <li className={ `mg-navigation__sort-menu--item ${ this.state.activeTab === 'popular' ? ' active' : null }` }
                        onClick={ this.sortBy } value={ '1' }>
                        Most Popular
                    </li>
                    <li className={ `mg-navigation__sort-menu--item ${ this.state.activeTab === 'now_playing' ? ' active' : null }` }
                        onClick={ this.sortBy } value={ '2' }>
                        Now Playing
                    </li>
                    <li className={ `mg-navigation__sort-menu--item ${ this.state.activeTab === 'top_rated' ? ' active' : null }` }
                        onClick={ this.sortBy } value={ '3' }>
                        Top Rated
                    </li>
                </ul>
            </div>
        );
    }
}

SortMenu.propTypes = {
    callback: PropTypes.func
};
export default SortMenu;