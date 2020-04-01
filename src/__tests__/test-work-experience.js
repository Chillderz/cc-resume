import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WorkExperience, { JobBubble } from '../components/WorkExperience';
import WORK_EXPERIENCE from '../data/workExperience';

Enzyme.configure({ adapter: new Adapter() });


describe("AwsCerts component", () => {
    let component = shallow(<WorkExperience jobs={WORK_EXPERIENCE} />);

    it("Should be a span element", () => {
        expect(component.type()).toEqual('span');
    });

    it("Should contain the correct number of Job Bubbles", () => {
        expect(component.find("JobBubble").length).toEqual(WORK_EXPERIENCE.length);
    });
});

describe("CertBubble component", () => {
    let mockOpenModalFn = jest.fn();

    let component = shallow(<JobBubble job={ WORK_EXPERIENCE[0] } key={ WORK_EXPERIENCE[0].id } openModal={mockOpenModalFn} />);

    let dlist = component.find('dl');

    it("Should contain a single element", () => {
        expect(dlist.length).toEqual(1);
    });

    it("Should call the openModal handler when clicked", () => {
        component.find('.section__exampleWrapper').simulate('click');
        expect(mockOpenModalFn).toHaveBeenCalled();
    })
});