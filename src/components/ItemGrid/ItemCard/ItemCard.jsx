import React from 'react';
import {
  Card,
  CardMedia, CardContent,
  Typography, CardActions,
  IconButton
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons'
import styles from './ItemCard.scss';
import PropTypes from 'prop-types';

export const ItemCard = ({ photo }) => (
    <Card className={styles.card}>
      <CardMedia image={photo.thumbnailUrl} className={styles.cardMedia}/>
      <div className={styles.flexbox}>
        <CardContent className={styles.cardContent}>
          <Typography className={styles.typo}>
            {photo.title}
          </Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <IconButton><AddCircle/></IconButton>
        </CardActions>
      </div>
    </Card>
);

ItemCard.propTypes = {
  photo: PropTypes.object.isRequired
};

export default ItemCard;
