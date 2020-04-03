import React from 'react';

import '../css/SharedCSS.css';
import WorkExperienceModal from './WorkExperienceModal';

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
                                    <JobBubble job={job} key={idx} openModal={this.openModal} />
                                )
                            })
                        }
                    </section>
                </div>

                <WorkExperienceModal job={this.state.selectedJobTitle} open={this.state.modalOpen} closeModal={this.closeModal}/>
            </span>
        )
    }
}

class JobBubble extends React.Component {
    render() {
        let job = this.props.job;

        return (
            <div className="section__exampleWrapper" onClick={ (evt) => this.props.openModal(evt, job) }>
                <div className="section__example">  
                    <dl className="color--cloud">
                        <dt className="section__exampleTitle section__text--centered color--lightBlue">
                            { job.title.name }
                        </dt>
                        <p className="section__exampleDescription section__text--top-centered">
                            { job.company }
                        </p>
                        <p className="section__exampleDescription section__text--bottom-centered">
                            { job.title.years }
                        </p>
                    </dl>
                </div>
            </div>
        )
    }
}

export default WorkExperience;
export { JobBubble };