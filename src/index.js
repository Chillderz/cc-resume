import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import Header from './components/Header';
import AwsCerts from './components/AwsCerts';
import AWS_CERTIFICATIONS from './data/awsCerts';
import WorkExperience from './components/WorkExperience';
import WORK_EXPERIENCE from './data/workExperience';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <WorkExperience jobs={WORK_EXPERIENCE}/>
    <AwsCerts certs={AWS_CERTIFICATIONS}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
