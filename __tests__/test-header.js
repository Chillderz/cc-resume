import React from 'react';
import { shallow } from 'enzyme';

import Header, { SocialProfile } from '../components/Header';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const socialProfile = [
    {
        id: 1,
        title: 'LinkedIn Profile',
        link: 'https://www.linkedin.com/in/christopher-childers-28950537/',
        image: 'fa fa-linkedin'
    },
    {
        id: 2,
        title: 'GitHub Profile',
        link: 'https://github.com/Chillderz',
        image: 'fa fa-github'
    }
]

describe("Header - social profile", () => {
    let component = shallow(<SocialProfile socialProfile={socialProfile[0]}/>);

    it("Should be a 'list' item", () => {
        expect(component.type()).toEqual('li');
    });
});