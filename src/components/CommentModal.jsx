import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { getComments as getData } from '../services/comments.services';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Card, CardContent, CardHeader, Grid, Paper, styled } from '@mui/material';

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function CommentModal (props) {
    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [expanded, setExpanded] = React.useState(false);

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
                    style={{ width: "42px", height: "42px" }}>
                </lord-icon>
                </Button>) :
                    (<Button onClick={handleOpen}>Detalhes<lord-icon
                        src="https://cdn.lordicon.com/xzksbhzh.json"
                        trigger="hover"
                        style={{ width: "42px", height: "42px" }}>
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
                                            <Typography variant="body2" color="text.secondary">
                                                {comment.body}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {comment.body}
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                ))
                                ) : (users.map((user) => (
                                    <Card key={user.id} component="div" sx={{ maxWidth: 360, marginTop: '.5rem' }}>
                                        <CardHeader sx={{ display: 'flex', flexDirection: 'column' }}
                                            avatar={
                                                <Avatar sx={{ bgcolor: '#7070F4' }} aria-label="user">
                                                    {user.name[0].toUpperCase()}
                                                </Avatar>
                                            }
                                            title={user.name}
                                            subheader={user.username}
                                        />
                                        <CardContent>
                                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography sx={{ width: '80%', flexShrink: 0 }}>
                                                        Informações de contato
                                                    </Typography>
                                                    <Typography sx={{ color: 'text.primary' }}>📒</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails sx={{ bgcolor: '#efefef' }}>
                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                                                <Item>{user?.email}</Item>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Item>{user?.phone}</Item>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Item>{user?.website}</Item>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2bh-content"
                                                    id="panel2bh-header"
                                                >
                                                    <Typography sx={{ width: '80%', flexShrink: 0 }}>
                                                        Informações de endereço
                                                    </Typography>
                                                    <Typography sx={{ color: 'text.primary' }}>🏡</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails sx={{ bgcolor: '#efefef' }}>
                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={6}>
                                                                <Item>Rua: {user?.address.street}</Item>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Item>Nº ou Apto: {user?.address.suite}</Item>
                                                            </Grid>
                                                            <Grid item xs>
                                                                <Item>CEP: {user?.address.zipcode}</Item>
                                                            </Grid>
                                                            <Grid item xs>
                                                                <Item>Cidade: {user?.address.city}</Item>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3bh-content"
                                                    id="panel3bh-header"
                                                >
                                                    <Typography sx={{ width: '80%', flexShrink: 0 }}>Informações de emprego</Typography>
                                                    <Typography sx={{ color: 'text.primary' }}>🏢</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails sx={{ bgcolor: '#efefef' }}>
                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12}>
                                                                <Item>Empresa: {user.company.name}</Item>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Item>Lema: {user.company.catchPhrase}</Item>
                                                            </Grid>
                                                            <Grid item xs>
                                                                <Item>Serviço: {user.company.bs}</Item>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </CardContent>
                                    </Card>
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

CommentModal.propTypes = {
    id: PropTypes.string,
}.isRequired;