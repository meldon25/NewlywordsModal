import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal">
                <h1>Modal Window</h1>
                <div className="content">
                    {this.props.children}
                </div>
                <div classname="actions">
                    <button onClick={this.onClose}>
                        X
                    </button>
                </div>
            </div>
        )
    }   
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}


