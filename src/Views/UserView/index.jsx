import { Chip, Divider, Pagination, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import Header from '../../components/Header';
import UserCardComponent from '../../components/UserCardComponent';
import usePagination from '../../hooks/usePagination';
import usePosts from '../../hooks/usePosts';
import { Slide } from "react-awesome-reveal";


export default function UserView () {

  const { posts, fetchPosts, total } = usePosts('users', 4);
  const { actualPage, setActualPage } = usePagination();

  const handler = ({ target }, value) => {
    setActualPage(value);
  }

  const countPagination = Number(Math.ceil(total.length / 4));

  useEffect(() => {
    fetchPosts(actualPage);
  }, [actualPage]);

  return (
    <>
      <Header />
      <Divider>
        <Chip label="Usuários" />
      </Divider>
      <Box component='section'>
      <Slide cascade triggerOnce={ true } duration={ 1000 }>
        <Box sx={{ minHeight: '62vh', marginTop: '4rem' }}>
        {posts.map((user) => (
       <UserCardComponent key={ user.id } user={ user }/>
        ))}
        </Box>
        </Slide>
        <Divider sx={{ paddingTop: "2%" }} variant="fullWidth" />
        <Stack spacing={2}>
          <Pagination
            sx={{ margin: '0 auto', padding: '1rem .5em' }}
            count={countPagination}
            page={actualPage}
            onChange={handler}
            variant="outlined"
            color="primary"
           />
        </Stack>
      </Box>
    </>
  )
}
