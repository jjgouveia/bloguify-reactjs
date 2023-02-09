import { Avatar, Card, CardActions, CardHeader} from '@mui/material'
import React from 'react';
import AppModal from '../AppModal';
import PropTypes from 'prop-types';

export default function UserCardComponent ({ user }) {
  return (
    <Card component="div" sx={ styles.cardContainer }>
      <CardHeader
        avatar={
          <Avatar sx={ styles.avatar } aria-label="user">
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

const styles = ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 500,
    margin: '0 auto',
    padding: '0rem 1rem',
    marginTop: '1rem',
    textAlign: 'justify',
  },

  avatar: {
    bgcolor: 'red',
    marginLeft: '-1rem' }
});

UserCardComponent.propTypes = {
  user: PropTypes.shape(),
}.isRequired
