import React from 'react';
import { shallow } from 'component-test-utils-react';
import SiteLayout from '.';

describe('SiteLayout', () => {
  it('should display a specific HTML markup', () => {
    const wrapper = shallow(<SiteLayout component="h1" />);
    expect(wrapper.html()).toContain('h1');
  });
});
