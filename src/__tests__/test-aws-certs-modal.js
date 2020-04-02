import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AwsCertsModal from '../components/AwsCertsModal';
import AWS_CERTIFICATIONS from '../data/awsCerts';

Enzyme.configure({ adapter: new Adapter() });

describe("AwsCertsModal component", () => {
    let mockCloseModalFn = jest.fn();

    let component = shallow(<AwsCertsModal cert={AWS_CERTIFICATIONS[0]} open={false} closeModal={mockCloseModalFn}/>);
    let openComponent = shallow(<AwsCertsModal cert={AWS_CERTIFICATIONS[0]} open={true}/>); 

    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        expect(anchors.prop('href')).toEqual(AWS_CERTIFICATIONS[0].link);
    });

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--modal-darkBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--modal-darkBlue").hasClass("modal--open")).toBe(true);
    });

    it("Should call the closeModal handler when clicked", () => {
        component.find(".modal__closeButton").simulate('click');
        expect(mockCloseModalFn).toHaveBeenCalled();
    });
});