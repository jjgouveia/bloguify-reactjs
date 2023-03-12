import { Box, Card, CardActionArea, CardActions, Divider, Typography } from '@mui/material';
import React from 'react';
import AppModal from '../AppModal';
import PropTypes from 'prop-types';
import styles from './style';

export default function PostCardComponent({ title, body, id }) {
  return (
    <Card sx={ styles.container }>
    <CardActionArea>
      <Box sx={ styles.contentContainer }>
      <Typography gutterBottom variant="h5" component="div">
        {id}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" component="p" color="text.secondary">
        {body}
      </Typography>
      <Divider sx={ styles.divider } />
      </Box>
    </CardActionArea>
    <CardActions>
      <AppModal id={id} />
    </CardActions>
  </Card>
  )
};

PostCardComponent.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
}
