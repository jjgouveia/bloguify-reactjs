import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { getComments } from '../services/comments.services';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CommentModal(props) {
  const [open, setOpen] = useState(false);
  const [ comments, setComments ] = useState([]);
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
            {
                comments.map((comment) => (
                    <Typography key={ comment.id } id="transition-modal-description" sx={{ mt: 2 }}>
                    {comment.body}
                  </Typography>
                ))
            }
           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

CommentModal.propTypes = {
    id: PropTypes.string,
}.isRequired;