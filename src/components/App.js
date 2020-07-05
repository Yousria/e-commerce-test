import React from 'react';
import SiteLayout from './layout';
import Navigation from './layout/Navigation';


export const App = () => {
    return (
        <SiteLayout navigation={<Navigation>Navigation</Navigation>}
                    content={<h1>APP</h1>}
        />
    )
};

export default App;
