import { Box, Card, CardActionArea, CardActions, Divider, Typography } from '@mui/material';
import React from 'react';
import AppModal from '../AppModal';
import PropTypes from 'prop-types';

export default function PostCardComponent({ title, body, id }) {
  return (
    <Card sx={ styles.container }>
    <CardActionArea>
      <Box sx={{ padding: "5px" }}>
      <Typography gutterBottom variant="h5" component="div">
        {id}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" component="p" color="text.secondary">
        {body}
      </Typography>
      <Divider sx={{ paddingTop: '2%' }} />
      </Box>
    </CardActionArea>
    <CardActions>
      <AppModal id={id} />
    </CardActions>
  </Card>
  )
};

const styles = ({
  container: {
    maxWidth: 500,
    margin: '0 auto',
    padding: '1rem 1rem 0 1rem',
    marginTop: '1rem',
    textAlign: 'justify',
    bgcolor: 'background.paper',
    border: "1px solid #dadada" }
});

PostCardComponent.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
}
