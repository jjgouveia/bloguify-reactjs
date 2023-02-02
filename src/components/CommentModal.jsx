import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { getComments } from '../services/comments.services';
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 460,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CommentModal (props) {
    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchComments = async () => {
        setComments(await getComments(props.id));
    };

    useEffect(() => {
        fetchComments();
    }, [])


    return (
        <div>
            <Button onClick={handleOpen}>Exibir comentários 📝</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Comentários 🗣️
                        </Typography>
                        <Box sx={{ maxHeight: '350px', overflowY: 'scroll' }}>
                            {
                                comments.map((comment) => (
                                    <Card key={comment.id} component="div" sx={{ maxWidth: 460, marginTop: '.5rem' }}>
                                        <CardHeader

                                            avatar={
                                                <Avatar sx={{ bgcolor: 'red' }} aria-label="user">
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
                                ))
                            }
                        </Box>
                        <Button onClick={handleClose}>
                            Fechar
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

CommentModal.propTypes = {
    id: PropTypes.string,
}.isRequired;