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
});

describe("CertBubble component", () => {
    let mockOpenModalFn = jest.fn();

    let component = shallow(<CertBubble cert={ AWS_CERTIFICATIONS[0] } key={ AWS_CERTIFICATIONS[0].id } openModal={mockOpenModalFn} />);

    let images = component.find('img');

    it("Should contain a single element", () => {
        expect(images.length).toEqual(1);
    });

    it("Should have the img src set correctly", () => {
        expect(images.prop('src')).toEqual(AWS_CERTIFICATIONS[0].image);
    });

    it("Should call the openModal handler when clicked", () => {
        component.find('.section__exampleWrapper').simulate('click');
        expect(mockOpenModalFn).toHaveBeenCalled();
    })
});