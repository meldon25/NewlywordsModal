import React, { Component } from 'react'
import Modal from './Modal.jsx'
import '../Styles/ModalContainer.css'


class ModalContainer extends Component {
    state = { 
            show: false
        };
    

    showModal = e => {
        this.setState({ show: !this.state.show });
    };
    

    render() {
        return (
            <>
            <main className="main-page">
                <button
                    className="main-modal-button"
                    onClick={e => {
                        this.showModal(e);
                    }}>
                    Open modal
                </button>
                
                <Modal onClose={this.showModal} show={this.state.show} >
                    <img className="modal-pic" src="https://i.imgur.com/oXlT6kN.png" alt="Computer set up with photos and coffee"/>
                    <h1 className="modal-header">Let's get going!</h1>
                    <p className="modal-copy">Follow these tips to get your project off to a great start and create a truly memorable book!</p>
                    <img className="ellipse" src="https://i.imgur.com/S6skDNl.png" alt="ellipse dots" />
                    <button className="next-button" type="button">Next</button>
                </Modal>
                </main>
                </>
        )
    }
    }

export default ModalContainer;

