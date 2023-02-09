import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { fetchById as getData } from '../../services/comments.services';
import CommentCard from '../CommentCard';
import UserCard from '../UserCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 360,
    bgcolor: 'background.paper',
    border: '1px solid #5b5b5b',
    boxShadow: 24,
    p: 4,
    padding: '.5rem 1rem'
};
export default function AppModal (props) {
    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const fetchComments = async () => {
        if (!props.isUser) {
            setComments(await getData('posts', props.id, 'comments'));
        } else {
            setUsers([await getData('users', props.id)]);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [props.isUser]);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                !props.isUser ? (<Button onClick={handleOpen}>Comentários<lord-icon
                    src="https://cdn.lordicon.com/flvisirw.json"
                    trigger="hover"
                    colors="outline:#121331,primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef"
                    stroke="30"
                    style={{ width: "38px", height: "38px" }}>
                </lord-icon>
                </Button>) :
                    (<Button onClick={handleOpen}>Detalhes<lord-icon
                        src="https://cdn.lordicon.com/xzksbhzh.json"
                        trigger="hover"
                        style={{ width: "38px", height: "38px" }}>
                    </lord-icon>
                    </Button>)
            }

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

                src="https://cdn.lordicon.com/dxoycpzg.json"
                trigger="morph"
                colors="primary:#f24c00,secondary:#646e78,tertiary:#4bb3fd,quaternary:#ebe6ef,quinary:#f9c9c0"
                state="morph"
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            {!props.isUser ?
                                <>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        Comentários</Typography><lord-icon
                                            src="https://cdn.lordicon.com/kjkiqtxg.json"
                                            trigger="hover"
                                            colors="outline:#121331,primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef"
                                            stroke="30"
                                            style={{ width: "48px", height: "48px" }}>
                                    </lord-icon>
                                </>
                                : <>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        Detalhes do usuário</Typography> <lord-icon
                                            src="https://cdn.lordicon.com/ckatldkn.json"
                                            trigger="hover"
                                            style={{ width: "48px", height: "48px" }}>
                                    </lord-icon>
                                </>}
                        </Box>
                        <Box sx={{ maxHeight: '350px', overflowY: 'scroll' }}>
                            {!props.isUser ?
                                (comments.map((comment) => (
                                    <CommentCard key={comment.id} comment={comment} />
                                ))
                                ) : (users.map((user) => (
                                    <UserCard
                                        key={user.id}
                                        user={user}
                                        expanded={expanded}
                                        handleChange={handleChange} />
                                )))
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
};

AppModal.propTypes = {
    id: PropTypes.string,
}.isRequired;