import { Pagination, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import Header from '../../components/Header';
import UserCardComponent from '../../components/UserCardComponent';
import usePagination from '../../hooks/usePagination';
import usePosts from '../../hooks/usePosts'

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
      <section>
        <Box sx={{ minHeight: '70vh', marginTop: '4rem' }}>
        {posts.map((user) => (
       <UserCardComponent key={ user.id } user={ user }/>
        ))}
        </Box>
        <Stack spacing={2}>
          <Pagination
            sx={{ margin: '0 auto', padding: '1rem .5em' }}
            count={countPagination || 1}
            page={actualPage}
            onChange={handler}
            variant="outlined"
            color="primary"
            showFirstButton showLastButton />
        </Stack>
      </section>
    </>
  )
}
