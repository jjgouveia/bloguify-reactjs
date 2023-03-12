import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Card, CardContent, CardHeader, Grid, Paper, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import style from './styles';

export default function UserCard ({ user, expanded, handleChange }) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Card key={user.id} component="div" sx={ style.container }>
            <CardHeader sx={ style.cardContainer }
                avatar={
                    <Avatar sx={ style.avatarColor } aria-label="user">
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
                        <Typography sx={ style.cardHeader }>
                            Informações de contato
                        </Typography>
                        <Typography sx={ style.cardColor }>📒</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ style.cardAccordionColor }>
                        <Box sx={ style.accordionContainer }>
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
                        <Typography sx={ style.cardHeader }>
                            Informações de endereço
                        </Typography>
                        <Typography sx={ style.cardColor }>🏡</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ style.cardAccordionColor }>
                        <Box sx={ style.accordionContainer }>
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
                        <Typography sx={ style.cardHeader }>Informações de emprego</Typography>
                        <Typography sx={ style.cardColor }>🏢</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ style.cardAccordionColor }>
                        <Box sx={ style.accordionContainer }>
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
    );
};

UserCard.propTypes = {
    user: PropTypes.object,
}.isRequired;