import { Chip, Divider, Pagination, Skeleton, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import PostCardComponent from '../../components/CardComponent';
import Header from '../../components/Header';
import usePagination from '../../hooks/usePagination';
import usePosts from '../../hooks/usePosts'

export default function HomeView () {

  const { posts, fetchPosts, total } = usePosts('posts', 4);
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
      <Divider sx={{ marginTop: "2%" }}>
        <Chip label="Feed" />
      </Divider>
      {
        posts.length ? (
          <section style={{ margin: '0 auto' }}>
            {posts.map(({ id, title, body }) => (
              <PostCardComponent
                key={id}
                id={id}
                title={title}
                body={body} />
            ))}
           <Divider variant="fullWidth" />
            <Stack spacing={2}>
              <Pagination
                sx={{ margin: '0 auto', padding: '1rem .5em' }}
                count={countPagination || 1}
                page={actualPage}
                onChange={handler}
                variant="outlined"
                color="primary"
               />
            </Stack>
          </section>
        ) : (
          <Skeleton variant="rounded" sx={{ bgcolor: 'grey.50', margin: '0 auto', marginTop: '1rem' }} width={564} height={'100vh'} />
        )
      }
    </>
  )
}
