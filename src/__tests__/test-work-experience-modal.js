import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WorkExperienceModal from '../components/WorkExperienceModal';
import WORK_EXPERIENCE from '../data/workExperience';

Enzyme.configure({ adapter: new Adapter() });

describe("AwsCertsModal component", () => {
    let mockCloseModalFn = jest.fn();

    let component = shallow(<WorkExperienceModal job={WORK_EXPERIENCE[0]} open={false} closeModal={mockCloseModalFn}/>);
    let openComponent = shallow(<WorkExperienceModal job={WORK_EXPERIENCE[0]} open={true}/>); 

    let unordered = component.find("ul");

    it("Should contain a single 'ul' element", () => {
        expect(unordered.length).toEqual(1);
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