import { Avatar, Card, CardActions, CardHeader} from '@mui/material'
import React from 'react';
import AppModal from '../AppModal';
import PropTypes from 'prop-types';
import style from './styles';

export default function UserCardComponent ({ user }) {
  return (
    <Card component="div" sx={ style.cardContainer }>
      <CardHeader
        avatar={
          <Avatar sx={ style.avatar } aria-label="user">
            {user.name[0].toUpperCase()}
          </Avatar>
        }
        title={user.name}
        subheader={`👤: ${user.username}`}
      />
        <CardActions>
        <AppModal isUser={ true }id={user.id} />
      </CardActions>
    </Card>
  )
};



UserCardComponent.propTypes = {
  user: PropTypes.shape(),
}.isRequired
