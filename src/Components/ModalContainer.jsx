import React, {Component} from 'react'
import Modal from './Modal.jsx'


class ModalContainer extends Component {
    state = { show: false };

    showModal = e => {
        this.setState({ show: !this.state.show });
    };

    render() {
        return (
            <main>
                <button onClick={e => {
                    this.showModal(e);
                }}>
                    Open modal
                </button>

                <Modal onClose={this.showModal} show={this.state.show}>
                    Lorem ipsum dolor ipset consequitar
                </Modal>
                
            </main>
        )
    }
}

export default ModalContainer;

