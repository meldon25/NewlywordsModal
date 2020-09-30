import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../Styles/Modal.css'

export default class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <>
                <div className="modal" aria-hidden="true">
                    <div className="actions">
                        <img
                            src="https://i.imgur.com/8JyZh1H.png"
                            onClick={e => this.onClose(e)}
                            className="close-button" />
                    </div>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
                </>              
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}


