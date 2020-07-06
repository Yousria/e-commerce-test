import React from 'react';
import ItemCard from './ItemCard/ItemCard';
import styles from './ItemGrid.scss';
import PropTypes from 'prop-types';

export const ItemGrid = ({ photos }) => (
  <>
    <div className={styles.grid}>
      {photos.map(photo => (
        <ItemCard
          key={photo.id}
          photo={photo}
        />
      ))}
    </div>
  </>
);

ItemGrid.propTypes = {
    photos: PropTypes.array.isRequired
};

export default ItemGrid;
