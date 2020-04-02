import React from 'react';

import { findAllByTestId } from '@testing-library/react';
import '../css/Modal.css'

class WorkExperienceModal extends React.Component {
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
        let job = this.props.job;
        let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

        return (
            <div className={"background--modal-darkBlue " + modalClass}>
                <span className="color--cloud modal__closeButton" onClick={this.props.closeModal}>
                    <i className="fa fa-window-close-o"></i>
                </span>
                <div className="color--cloud modal__text">
                    <h2 className="modal__title">
                        { job.company }
                    </h2>
                    <h2 className="modal__title">
                        { job.title.name }
                    </h2>
                    <p className="color--darkgrey modal__responsibilities">
                        <ul>
                            { job.title.keyResponsibilities.map( ( responsibility, idx ) => {
                                return (
                                    <li key={idx}>{responsibility}</li>
                                )
                            })}
                        </ul>
                    </p>
                    <p className="modal__description">
                        { job.title.summary }
                    </p>
                     
                </div>
            </div>
        )
    }
}

export default WorkExperienceModal;