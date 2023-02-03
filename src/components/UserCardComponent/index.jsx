import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react';
import CommentModal from '../CommentModal';
import PropTypes from 'prop-types';

export default function UserCardComponent ({ user }) {
  return (
    <Card component="div" sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 500, margin: '0 auto', padding: '0rem 1rem', marginTop: '1rem', textAlign: 'justify' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red', marginLeft: '-1rem' }} aria-label="user">
            {user.name[0].toUpperCase()}
          </Avatar>
        }
        title={user.name}
        subheader={`user: ${user.username}`}
      />
        <CardActions>
        <CommentModal isUser={ true }id={user.id} />
      </CardActions>
    </Card>
  )
}

UserCardComponent.propTypes = {
  user: PropTypes.shape(),
}.isRequired
