import React from 'react';
import { shallow } from 'component-test-utils-react';
import ItemCard from './ItemCard';

let item = {
    id: 1,
    thumbnailUrl: '/path/to/img',
    title: 'test'
};

describe('ItemCard', () => {
    it('should render Card with the right infomation', () => {
        const wrapper = shallow(<ItemCard photo={item}/>);
        expect(wrapper.html()).toContain('p');
    })
});
