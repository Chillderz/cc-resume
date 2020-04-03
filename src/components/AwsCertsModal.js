import React from 'react';

import '../css/Modal.css'

class AwsCertsModal extends React.Component {
    constructor(props) {
        super(props);

        this.escKeyFn = this.escKeyFn.bind(this);
    }

    escKeyFn(evt) {
        if (evt.keyCode === 27) {
            this.props.closeModal();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.escKeyFn, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escKeyFn, false);
    }

    render() {
        let cert = this.props.cert;
        let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

        return (
            <div className={"background--modal-darkBlue " + modalClass}>
                <span className="color--cloud modal__closeButton" onClick={this.props.closeModal}>
                    <i className="fa fa-window-close-o"></i>
                </span>
                <div className="color--cloud modal__text">
                    <h2 className="modal__title">
                        { cert.title }
                    </h2>
                    <p className="color--darkgrey modal__responsibilities">
                        <ul>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">VALIDATION NUMBER </a> : {cert.validation} 
                        </ul>
                    </p>
                    <p className="modal__description">
                        { cert.title }
                    </p>
                     
                </div>
            </div>
        )
    }
}

export default AwsCertsModal;