import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export default function CommentCard({ comment }) {
 return (
    <Card key={comment.id} component="div"
    sx={{ maxWidth: 460, marginTop: '.5rem', bgcolor: 'background.paper', border: "1px solid #dadada" }}>
        <CardHeader
        sx={{ bgcolor: '#fafafa' }}
            avatar={
                <Avatar sx={{ bgcolor: '#7070F4' }} aria-label="user">
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