import React from 'react';
import { useSelector } from 'react-redux';
import SiteLayout from './layout';
import Navigation from './layout/Navigation';
import ItemGrid from './ItemGrid/ItemGrid';
import {CircularProgress} from '@material-ui/core';

export const App = () => {
  const { photos, status } = useSelector((state) => ({
    photos: state.photos,
    status: state.status
  }));

  return (
    <SiteLayout
      navigation={<Navigation>Navigation</Navigation>}
      content={status === 'received' ? <ItemGrid photos={photos} /> : <CircularProgress/>}
    />
  );
};

export default App;
