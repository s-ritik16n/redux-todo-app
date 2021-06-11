import React, { findDOMNode, Component, PropTypes}  from 'react';

export default class AddTodo extends Component {

    constructor() {
        this.inputRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const node = findDOMNode(this.inputRef);
        const text = node.value.trim();
        this.props.onAddClick(text);
        
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <button onClick={e => this.handleClick(e)}>
                Add
                </button>
            </div>
        )
    }


}