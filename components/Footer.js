import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
    renderFilter(filter, name) {
        if(filter === this.props.filter) {
            return name;
        }
        return (
            <a href="#" onClick={e => {
                e.preventDefault();
                this.props.onFilterChange(filter);
            }}>{name}</a>
        )
    }

    render() {
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}

            </p>

        )
    }
}