import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AwsCerts, { CertBubble } from '../components/AwsCerts';
import AWS_CERTIFICATIONS from '../data/awsCerts';

Enzyme.configure({ adapter: new Adapter() });


describe("AwsCerts component", () => {
    let component = shallow(<AwsCerts certs={AWS_CERTIFICATIONS} />);

    it("Should be a span element", () => {
        expect(component.type()).toEqual('span');
    });

    it("Should contain the correct number of AWS_CERTIFICATIONS", () => {
        expect(component.find("CertBubble").length).toEqual(AWS_CERTIFICATIONS.length);
    });
})