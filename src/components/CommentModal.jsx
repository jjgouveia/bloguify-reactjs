import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { getComments } from '../services/comments.services';
import { Avatar, Card, CardContent, CardHeader } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    bgcolor: 'background.paper',
    border: '1px solid #5b5b5b',
    boxShadow: 24,
    p: 4,
    padding: '.5rem 1rem'
};

export default function CommentModal (props) {
    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchComments = async () => {
        setComments(await getComments('posts', props.id, 'comments'));
    };

    useEffect(() => {
            fetchComments();
    }, [props.isUser])


    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Button onClick={handleOpen}>{ !props.isUser ? 'Exibir comentários' : 'Detalhes' } <lord-icon
                src="https://cdn.lordicon.com/kjkiqtxg.json"
                trigger="hover"
                colors="outline:#121331,primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef"
                stroke="30"
                style={{ width: "32px", height: "32px" }}>
            </lord-icon>
            </Button>
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
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            {!props.isUser ?
                                <>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        Comentários  </Typography><lord-icon
                                            src="https://cdn.lordicon.com/kjkiqtxg.json"
                                            trigger="hover"
                                            colors="outline:#121331,primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef"
                                            stroke="30"
                                            style={{ width: "48px", height: "48px" }}>
                                    </lord-icon>
                                </>
                                : <p>Detalhes do Usuário</p>}
                        </Box>

                        <Box sx={{ maxHeight: '350px', overflowY: 'scroll' }}>
                            {
                                comments.map((comment) => (
                                    <Card key={comment.id} component="div" sx={{ maxWidth: 460, marginTop: '.5rem' }}>
                                        <CardHeader

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
                                ))
                            }
                        </Box>
                        <Button onClick={handleClose}>
                            Fechar
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}

CommentModal.propTypes = {
    id: PropTypes.string,
}.isRequired;