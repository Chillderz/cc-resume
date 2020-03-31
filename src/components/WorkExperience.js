import React from 'react';

import '../css/SharedCSS.css';
import { findAllByTestId } from '@testing-library/react';

class WorkExperience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'modalOpen': false,
            'selectedJobTitle': this.props.jobs[0]
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(evt, jobTitle) {
        this.setState({
            'modalOpen': true,
            'selectedJobTitle': jobTitle
        });
    }

    closeModal(evt) {
        this.setState({
            'modalOpen': false
        });
    }

    render() {
        return(
            <span>
                <section className="background--skyBlue section">
                    <h2 className="color--cloud margin--none section__text--centered">
                        Work Experience
                    </h2>
                </section>
    
                <div id='work-experience'>
                    <section className="section section--alignCentered section--description">
                        {
                            this.props.jobs.map( ( job, idx ) => {
                                return (
                                    job.company
                                )
                            })
                        }
                    </section>
                </div>
            </span>
        )
    }
}

export default WorkExperience;