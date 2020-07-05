import React from 'react';
import {shallow} from 'component-test-utils-react';
import SiteLayout from '../layout';

describe('SiteLayout', () => {
    it('should display navigation in the right slot', () => {
        const wrapper = shallow(<SiteLayout navigation="test-navigation"/>);

        expect(wrapper.html()).toContain('test-navigation');
    });

    it('should display a specific HTML markup', () => {
        const wrapper = shallow(<SiteLayout component="h1"/>);
        expect(wrapper.html()).toContain('h1');
    });
});
