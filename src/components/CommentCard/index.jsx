import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

export default function CommentCard ({ comment }) {
    return (
        <Card key={comment.id} component="div"
            sx={styles.container}>
            <CardHeader
                sx={styles.cardHeaderColor}
                avatar={
                    <Avatar sx={styles.avatarColor} aria-label="user">
                        {comment.name[0].toUpperCase()}
                    </Avatar>
                }
                title={comment.name}
                subheader={comment.email}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {comment.body}
                </Typography>
            </CardContent>
        </Card>
    );
};

CommentCard.propTypes = {
    comment: PropTypes.object,
}.isRequired;