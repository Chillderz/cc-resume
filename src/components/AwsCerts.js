import React from 'react';

import '../css/SharedCSS.css';
import AwsCertsModal from './AwsCertsModal';

class AwsCerts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'modalOpen': false,
            'selectedCert': this.props.certs[0]
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(evt, certification) {
        this.setState({
            'modalOpen': true,
            'selectedCert': certification
        });
    }

    closeModal(evt) {
        this.setState({
            'modalOpen': false
        });
    }

    render() {
        return (
            <span id="awsCerts">
                <section className="background--skyBlue section">
                    <h2 className="color--cloud margin--none section__text--centered">
                        AWS Certifications
                    </h2>
                </section>
    
                <div id='aws-certs'>
                    <section className="section section--alignCentered section--description">
                        {
                            this.props.certs.map( ( cert, idx ) => {
                                return (
                                    <CertBubble cert={cert} key={idx} openModal={this.openModal} />
                                )
                            })
                        }
                    </section>
                </div>

                <AwsCertsModal cert={this.state.selectedCert} open={this.state.modalOpen} closeModal={this.closeModal}/>
            </span>
        )
    }
}


class CertBubble extends React.Component {
    render() {
        let cert = this.props.cert;
        return (
            <div className="section__exampleWrapper" onClick={ (evt) => this.props.openModal(evt, cert) }>
                <div className="section__example">
                    <img alt='AWS Certification Logo'
                        className="section__exampleImage"
                        src={ cert.image }/>     
                    <dl className="color--lightBlue">
                        <dt className="section__exampleTitle section__text--centered">
                            { cert.title }
                        </dt>
                        <dd></dd>
                    </dl>
                </div>
            </div>
        )
    }

}

export default AwsCerts;
export { CertBubble };