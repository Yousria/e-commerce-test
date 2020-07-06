import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia, CardContent,
  Typography,
} from '@material-ui/core';
import styles from './ItemCard.scss';
import PropTypes from 'prop-types';

export const ItemCard = ({ photo }) => (
  <Card className={styles.card}>
    <CardActionArea>
      <CardMedia image={photo.thumbnailUrl} className={styles.cardMedia} />
      <CardContent>
        <Typography className={styles.typo}>
          {photo.title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

ItemCard.propTypes = {
  photo: PropTypes.object.isRequired
};

export default ItemCard;
