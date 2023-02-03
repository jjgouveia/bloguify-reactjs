import { Card, CardActionArea, CardActions, Typography } from '@mui/material';
import React from 'react';
import CommentModal from '../CommentModal';
import PropTypes from 'prop-types';

export default function PostCardComponent({ title, body, id }) {
  return (
    <Card sx={{ maxWidth: 500, margin: '0 auto', padding: '1rem 2rem', marginTop: '1rem', textAlign: 'justify', bgcolor: 'background.paper' }}>
    <CardActionArea>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" component="p" color="text.secondary">
        {body}
      </Typography>
    </CardActionArea>
    <CardActions>
      <CommentModal id={id} />
    </CardActions>
  </Card>
  )
};

PostCardComponent.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
}
