import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header, { SocialProfile } from '../components/Header';
import SOCIAL_PROFILES from '../data/socialProfiles'

Enzyme.configure({ adapter: new Adapter() });

describe("Header - social profile array", () => {
    let component = shallow(<Header />);

    it("Should be an 'main' item", () => {
        expect(component.type()).toEqual('main');
    });

    it("Should contain the appropriate amount of social profile links", () => {
        expect(component.find("SocialProfile").length).toEqual(SOCIAL_PROFILES.length);
    });
})

describe("Header - social profile item", () => {
    let component = shallow(<SocialProfile socialProfile={SOCIAL_PROFILES[0]}/>);

    it("Should be a 'list' item", () => {
        expect(component.type()).toEqual('li');
    });
});